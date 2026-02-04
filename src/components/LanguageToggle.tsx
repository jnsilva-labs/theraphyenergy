import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith("es") ? "es" : "en";

  return (
    <div className="language-toggle" aria-label={t("language.switchTo")}>
      <button
        type="button"
        className={current === "en" ? "active" : undefined}
        onClick={() => i18n.changeLanguage("en")}
      >
        {t("language.english")}
      </button>
      <span>|</span>
      <button
        type="button"
        className={current === "es" ? "active" : undefined}
        onClick={() => i18n.changeLanguage("es")}
      >
        {t("language.spanish")}
      </button>
    </div>
  );
};

export default LanguageToggle;
