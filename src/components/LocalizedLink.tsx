import { forwardRef } from "react";
import { Link, type LinkProps, useLocation } from "react-router-dom";
import { localeFromPath, localizePath } from "../lib/routing";

const LocalizedLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...props }, ref) => {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  const target = typeof to === "string"
    ? localizePath(to, locale)
    : { ...to, ...(to.pathname ? { pathname: localizePath(to.pathname, locale) } : {}) };
  return <Link ref={ref} to={target} {...props} />;
});
LocalizedLink.displayName = "LocalizedLink";
export default LocalizedLink;
