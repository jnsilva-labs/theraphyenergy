import type { Locale } from "../content/siteConfig";

const STORAGE_KEY = "ih_locale";

export const normalizeLocale = (language?: string): Locale => {
  if (language?.toLowerCase().startsWith("es")) {
    return "es";
  }
  return "en";
};

export const getStoredLocale = (): Locale | null => {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      return stored;
    }
  } catch (error) {
    return null;
  }
  return null;
};

export const getInitialLocale = (): Locale => {
  const stored = getStoredLocale();
  if (stored) return stored;
  if (typeof window !== "undefined") {
    return normalizeLocale(window.navigator.language);
  }
  return "en";
};

export const persistLocale = (locale: Locale) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch (error) {
    // Ignore storage errors.
  }
};
