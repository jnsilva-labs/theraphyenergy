import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getInitialLocale, normalizeLocale, persistLocale } from "./locale";

const resources = {
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

const initialLocale = getInitialLocale();

i18n.use(initReactI18next).init({
  resources,
  lng: initialLocale,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

i18n.on("languageChanged", (language) => {
  persistLocale(normalizeLocale(language));
});

export default i18n;
