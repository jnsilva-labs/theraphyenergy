import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { localeFromPath, localizePath } from "../lib/routing";

const LanguageToggle = () => {
  const { pathname, search, hash } = useLocation();
  const current = localeFromPath(pathname);
  const routePath = pathname.replace(/\/$/, "") || "/";
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const suffix = mounted ? `${search}${hash}` : "";
  return (
    <div className="language-toggle" aria-label={current === "es" ? "Idioma" : "Language"}>
      <Link to={`${localizePath(routePath, "en")}${suffix}`} className={current === "en" ? "active" : undefined} lang="en" hrefLang="en" aria-current={current === "en" ? "page" : undefined} aria-label="English">EN</Link>
      <span aria-hidden="true">|</span>
      <Link to={`${localizePath(routePath, "es")}${suffix}`} className={current === "es" ? "active" : undefined} lang="es" hrefLang="es" aria-current={current === "es" ? "page" : undefined} aria-label="Español">ES</Link>
    </div>
  );
};
export default LanguageToggle;
