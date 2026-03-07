import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import type { Locale } from "../content/siteConfig";
import { getStoredLocale, normalizeLocale, persistLocale } from "./locale";

export const resources = {
  en: {
    translation: {
      "language.switchTo": "Switch to Spanish",
      "language.english": "EN",
      "language.spanish": "ES"
    }
  },
  es: {
    translation: {
      "language.switchTo": "Cambiar a inglés",
      "language.english": "EN",
      "language.spanish": "ES"
    }
  }
} as const;

const detectInitialLocale = (): Locale => {
  if (typeof document !== "undefined") {
    const htmlLang = document.documentElement.lang;
    if (htmlLang) {
      return normalizeLocale(htmlLang);
    }
  }

  const stored = getStoredLocale();
  if (stored) return stored;

  if (typeof window !== "undefined") {
    return normalizeLocale(window.navigator.language);
  }

  return "en";
};

export const createAppI18n = (locale: Locale = detectInitialLocale()) => {
  const i18n = createInstance();

  i18n.use(initReactI18next).init({
    resources,
    lng: locale,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

  if (typeof window !== "undefined") {
    i18n.on("languageChanged", (language) => {
      persistLocale(normalizeLocale(language));
    });
  }

  return i18n;
};

const i18n = createAppI18n();

export default i18n;
