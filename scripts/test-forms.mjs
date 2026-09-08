import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

// Compile these dependency-free modules in memory; all delivery is stubbed below.
const load = async (file) => {
  const source = await readFile(new URL(file, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
};
const { default: handler } = await load("../api/forms.ts");
const { getSchedulingUrl } = await load("../src/lib/scheduling.ts");
assert.equal(getSchedulingUrl(" https://calendar.example.invalid/adriana "), "https://calendar.example.invalid/adriana");
for (const invalid of [undefined, "", "http://calendar.example.invalid", "javascript:alert(1)", "/calendar", "https://user:pass@calendar.example.invalid", "invalid"]) {
  assert.equal(getSchedulingUrl(invalid), undefined);
}
const { submitForm } = await load("../src/lib/forms.ts");
const originalFetch = globalThis.fetch;
const keys = ["RESEND_API_KEY", "FORM_TO_EMAIL", "FORM_FROM_EMAIL"];
const originalEnv = keys.map(key => process.env[key]);
let calls = [];
let delivery = "success";
globalThis.fetch = async (url, options) => {
  calls.push({ url, options });
  if (delivery === "network") throw new Error("Simulated offline");
  return new Response(JSON.stringify(delivery === "success" ? { ok: true } : { message: "Delivery unavailable" }), { status: delivery === "failure" ? 503 : 200 });
};
const invoke = async (body, method = "POST") => {
  let status, result;
  const response = { setHeader() {}, status(value) { status = value; return this; }, json(value) { result = value; } };
  await handler({ method, body }, response);
  return { status, result };
};
const booking = { formType: "booking", locale: "es", name: "Local Test", email: "test@example.invalid", timeZone: "America/New_York", service: "Ayúdame a elegir una sesión", goals: "Explore a starting point" };
try {
  keys.forEach(key => delete process.env[key]);
  assert.equal((await invoke(booking)).status, 500);
  assert.equal(calls.length, 0, "Missing delivery configuration must not call provider");
  keys.forEach(key => { process.env[key] = "local-test-only"; });
  assert.equal((await invoke(booking, "GET")).status, 405);
  for (const invalid of ["null", "[]", "{bad", {}, { ...booking, goals: "" }, { ...booking, email: "invalid" }]) {
    assert.equal((await invoke(invalid)).status, 400);
  }
  assert.equal(calls.length, 0, "Invalid requests must not call provider");
  assert.deepEqual(await invoke(booking), { status: 200, result: { ok: true } });
  const email = JSON.parse(calls.at(-1).options.body);
  assert.match(email.text, /Ayúdame a elegir una sesión/);
  assert.match(email.text, /Not provided/);
  assert.equal(email.reply_to, booking.email);
  assert.equal((await invoke({ formType: "contact", name: "Local Test", email: booking.email, message: "Question" })).status, 200);
  delivery = "failure";
  assert.equal((await invoke(booking)).status, 502);
  delivery = "network";
  assert.equal((await invoke(booking)).status, 502);
  delivery = "success";
  assert.deepEqual(await submitForm(booking), { ok: true });
  delivery = "failure";
  await assert.rejects(() => submitForm(booking));
  delivery = "network";
  await assert.rejects(() => submitForm(booking));
  for (const body of ["<!DOCTYPE html>", "{}", '{"ok":false}', "null"]) {
    globalThis.fetch = async () => new Response(body, { status: 200 });
    await assert.rejects(() => submitForm(booking), "A 200 response without acknowledgement must not show success");
  }
  console.log("PASS: safe optional calendar URL, form validation, delivery configuration, optional fields, localized unsure service, success, provider/network failures, and false-success prevention. No network or email sent.");
} finally {
  globalThis.fetch = originalFetch;
  keys.forEach((key, index) => { if (originalEnv[index] === undefined) delete process.env[key]; else process.env[key] = originalEnv[index]; });
}
