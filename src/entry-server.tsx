import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import AppShell from "./AppShell";
import { siteConfig } from "./content/siteConfig";
import type { Locale } from "./content/siteConfig";
import { createAppI18n } from "./lib/i18n";

type RouteDefinition = {
  path: string;
  indexable?: boolean;
  priority?: number;
};

const serviceRoutes = siteConfig.locales.en.services.map((service) => ({
  path: `/services/${service.slug}`,
  priority: 0.8
}));

export const prerenderRoutes: RouteDefinition[] = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  ...serviceRoutes,
  { path: "/booking", priority: 0.9 },
  { path: "/testimonials", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
  { path: "/contact", priority: 0.9 },
  { path: "/404", indexable: false }
];

export const render = (url: string, locale: Locale = "en") => {
  const helmetContext: Record<string, unknown> = {};
  const i18n = createAppI18n(locale);
  const appHtml = renderToString(
    <AppShell i18n={i18n} helmetContext={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </AppShell>
  );

  const helmet = (helmetContext as { helmet?: Record<string, { toString: () => string }> })
    .helmet;

  return {
    appHtml,
    head: [
      helmet?.title?.toString() ?? "",
      helmet?.meta?.toString() ?? "",
      helmet?.link?.toString() ?? "",
      helmet?.script?.toString() ?? ""
    ].join(""),
    htmlAttributes: helmet?.htmlAttributes?.toString() ?? `lang="${locale}"`,
    bodyAttributes: helmet?.bodyAttributes?.toString() ?? ""
  };
};
