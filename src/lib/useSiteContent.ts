import { useLocation } from "react-router-dom";
import { siteConfig } from "../content/siteConfig";
import { localeFromPath } from "./routing";

const useSiteContent = () => {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

  return {
    locale,
    content: siteConfig.locales[locale],
    shared: siteConfig.shared
  };
};

export default useSiteContent;
