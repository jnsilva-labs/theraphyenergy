import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import type { Locale } from "../content/siteConfig";
import { localeFromPath } from "./routing";

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

const detectInitialLocale = (): Locale =>
  typeof window !== "undefined" ? localeFromPath(window.location.pathname) : "en";

export const createAppI18n = (locale: Locale = detectInitialLocale()) => {
  const i18n = createInstance();

  i18n.use(initReactI18next).init({
    resources,
    lng: locale,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

  return i18n;
};

const i18n = createAppI18n();

export default i18n;
