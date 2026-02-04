import { useTranslation } from "react-i18next";
import { siteConfig } from "../content/siteConfig";
import { normalizeLocale } from "./locale";

const useSiteContent = () => {
  const { i18n } = useTranslation();
  const locale = normalizeLocale(i18n.language);

  return {
    locale,
    content: siteConfig.locales[locale],
    shared: siteConfig.shared
  };
};

export default useSiteContent;
