import { siteConfig } from "../content/siteConfig";

type Submission = {
  id: string;
  type: "booking" | "contact";
  createdAt: string;
  data: Record<string, unknown>;
};

const STORAGE_KEY = "intuitiveherbalist_submissions";

const generateId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `sub_${Date.now()}_${Math.random().toString(16).slice(2)}`;
};

export const storeSubmission = (type: Submission["type"], data: Submission["data"]) => {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    const parsed = existing ? (JSON.parse(existing) as Submission[]) : [];
    const next: Submission = {
      id: generateId(),
      type,
      createdAt: new Date().toISOString(),
      data
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify([next, ...parsed]));
    return true;
  } catch (error) {
    return false;
  }
};

export const buildMailtoLink = (subject: string, body: string) => {
  const to = siteConfig.shared.contact.email;
  const params = new URLSearchParams({
    subject,
    body
  });
  return `mailto:${to}?${params.toString()}`;
};
