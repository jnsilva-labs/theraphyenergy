import type { Locale } from "../content/siteConfig";

export const localeFromPath = (path: string): Locale => /^\/es(?:\/|$|[?#])/.test(path) ? "es" : "en";

export const withoutLocale = (path: string) => {
  const plain = path.replace(/^\/es(?=\/|$|[?#])/, "");
  return !plain || /^[?#]/.test(plain) ? `/${plain}` : plain;
};

/** Localize internal absolute routes; preserve queries, anchors and external URLs. */
export const localizePath = (path: string, locale: Locale): string => {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const plain = withoutLocale(path);
  return locale === "es" ? `/es${plain === "/" ? "" : plain}` : plain;
};
