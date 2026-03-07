const RESEND_API_URL = "https://api.resend.com/emails";

type ContactSubmission = {
  formType: "contact";
  locale?: "en" | "es";
  name?: string;
  email?: string;
  message?: string;
};

type BookingSubmission = {
  formType: "booking";
  locale?: "en" | "es";
  name?: string;
  email?: string;
  timeZone?: string;
  service?: string;
  goals?: string;
  experience?: string;
  availability?: string;
};

type NewsletterSubmission = {
  formType: "newsletter";
  locale?: "en" | "es";
  email?: string;
};

type Submission = ContactSubmission | BookingSubmission | NewsletterSubmission;

type RequestLike = {
  body?: unknown;
  method?: string;
};

type ResponseLike = {
  status: (statusCode: number) => ResponseLike;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const asString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const parseBody = (body: unknown): Record<string, unknown> => {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  if (typeof body === "object") {
    return body as Record<string, unknown>;
  }
  return {};
};

const badRequest = (res: ResponseLike, message: string) => {
  res.status(400).json({ message });
};

const validateSubmission = (payload: Record<string, unknown>) => {
  const formType = payload.formType;
  const locale = payload.locale === "es" ? "es" : "en";

  if (formType === "contact") {
    const submission: ContactSubmission = {
      formType,
      locale,
      name: asString(payload.name),
      email: asString(payload.email),
      message: asString(payload.message)
    };

    if (!submission.name || !isValidEmail(submission.email || "") || !submission.message) {
      return null;
    }

    return submission;
  }

  if (formType === "booking") {
    const submission: BookingSubmission = {
      formType,
      locale,
      name: asString(payload.name),
      email: asString(payload.email),
      timeZone: asString(payload.timeZone),
      service: asString(payload.service),
      goals: asString(payload.goals),
      experience: asString(payload.experience),
      availability: asString(payload.availability)
    };

    if (
      !submission.name ||
      !isValidEmail(submission.email || "") ||
      !submission.timeZone ||
      !submission.service ||
      !submission.goals
    ) {
      return null;
    }

    return submission;
  }

  if (formType === "newsletter") {
    const submission: NewsletterSubmission = {
      formType,
      locale,
      email: asString(payload.email)
    };

    if (!isValidEmail(submission.email || "")) {
      return null;
    }

    return submission;
  }

  return null;
};

const buildEmail = (submission: Submission) => {
  if (submission.formType === "contact") {
    return {
      subject: "New contact message",
      text: [
        "A new contact form submission was received.",
        "",
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Locale: ${submission.locale}`,
        "",
        "Message:",
        submission.message || ""
      ].join("\n"),
      replyTo: submission.email
    };
  }

  if (submission.formType === "booking") {
    return {
      subject: "New booking request",
      text: [
        "A new booking request was received.",
        "",
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Locale: ${submission.locale}`,
        `Time Zone: ${submission.timeZone}`,
        `Preferred Service: ${submission.service}`,
        "",
        "Goals:",
        submission.goals || "",
        "",
        "Prior Experience:",
        submission.experience || "Not provided",
        "",
        "Preferred Dates/Times:",
        submission.availability || "Not provided"
      ].join("\n"),
      replyTo: submission.email
    };
  }

  return {
    subject: "New newsletter signup",
    text: [
      "A new newsletter signup was received.",
      "",
      `Email: ${submission.email}`,
      `Locale: ${submission.locale}`
    ].join("\n"),
    replyTo: undefined
  };
};

export default async function handler(req: RequestLike, res: ResponseLike) {
  res.setHeader("Allow", "POST");

  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.FORM_TO_EMAIL;
  const from = process.env.FORM_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    res.status(500).json({ message: "Form delivery is not configured yet." });
    return;
  }

  const payload = parseBody(req.body);
  const submission = validateSubmission(payload);

  if (!submission) {
    badRequest(res, "Please complete all required fields.");
    return;
  }

  const email = buildEmail(submission);

  const resendResponse = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: email.subject,
      text: email.text,
      reply_to: email.replyTo
    })
  });

  if (!resendResponse.ok) {
    const errorText = await resendResponse.text();
    res.status(502).json({
      message:
        submission.locale === "es"
          ? "No pudimos enviar tu mensaje en este momento."
          : "We couldn't deliver your submission right now.",
      details: errorText
    });
    return;
  }

  res.status(200).json({ ok: true });
}
