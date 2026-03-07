import type { Locale } from "../content/siteConfig";

export type ContactSubmission = {
  formType: "contact";
  locale: Locale;
  name: string;
  email: string;
  message: string;
};

export type BookingSubmission = {
  formType: "booking";
  locale: Locale;
  name: string;
  email: string;
  timeZone: string;
  service: string;
  goals: string;
  experience?: string;
  availability?: string;
};

export type NewsletterSubmission = {
  formType: "newsletter";
  locale: Locale;
  email: string;
};

export type FormSubmission = ContactSubmission | BookingSubmission | NewsletterSubmission;

type FormResponse = {
  ok?: boolean;
  message?: string;
};

export const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

export const submitForm = async (payload: FormSubmission) => {
  const response = await fetch("/api/forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  let result: FormResponse | null = null;
  try {
    result = (await response.json()) as FormResponse;
  } catch {
    result = null;
  }

  if (!response.ok) {
    throw new Error(result?.message || "Unable to submit form right now.");
  }

  return result;
};
