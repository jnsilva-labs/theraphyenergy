import { Helmet } from "react-helmet-async";
import { buildDescription, buildOgUrl, buildTitle } from "../lib/seo";
import { localizePath, withoutLocale } from "../lib/routing";
import useSiteContent from "../lib/useSiteContent";

type SEOProps = {
  title: string;
  description?: string;
  path: string;
  image?: string;
  robots?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SEO = ({ title, description, path, image, robots, schema }: SEOProps) => {
  const { locale, content, shared } = useSiteContent();
  const plainPath = withoutLocale(path).replace(/\/$/, "") || "/";
  const spanishMetadata: Record<string, [string, string]> = {
    "/": ["Lecturas de tarot y acompañamiento espiritual en Miami", "Explora sesiones de tarot, acompañamiento espiritual y coaching con Adriana Monsalve en Miami y a distancia, en español e inglés."],
    "/about": ["Conoce a Adriana Monsalve", "Conoce el enfoque de Adriana Monsalve y su acompañamiento personal en Miami y a distancia. Explora cómo sería trabajar juntas."],
    "/services": ["Sesiones de tarot y bienestar espiritual en Miami", "Compara las sesiones de tarot, astrología, coaching y acompañamiento espiritual de Adriana Monsalve. Encuentra una opción y solicita una consulta."],
    "/booking": ["Solicita una sesión con Adriana Monsalve", "Elige tu sesión y envía una solicitud. Adriana confirmará los detalles, el precio y la disponibilidad antes de reservar tu consulta."],
    "/testimonials": ["Experiencias de clientes", "Lee experiencias compartidas por clientes sobre las sesiones de tarot y acompañamiento espiritual con Adriana Monsalve."],
    "/faq": ["Preguntas frecuentes sobre las sesiones", "Resuelve tus dudas sobre las sesiones, la preparación, las solicitudes de reserva y el acompañamiento a distancia con Adriana Monsalve."],
    "/contact": ["Contacta a Adriana Monsalve", "Consulta tus dudas sobre sesiones en Miami y a distancia. Contacta a Adriana Monsalve para elegir un acompañamiento adecuado para ti."],
    "/404": ["Página no encontrada", "No encontramos esta página. Vuelve al inicio para explorar nuestras sesiones."]
  };
  const service = plainPath.startsWith("/services/")
    ? content.services.find((entry) => entry.slug === plainPath.split("/").pop()) : undefined;
  const translated = locale === "es"
    ? service ? [`${service.title} en Miami y a distancia`, service.shortDescription] : spanishMetadata[plainPath]
    : undefined;
  const pageTitle = buildTitle(translated?.[0] ?? title, content.meta.baseTitle);
  const pageDescription = buildDescription(translated?.[1] ?? description, content.meta.defaultDescription);
  const canonicalUrl = buildOgUrl(shared.baseUrl, localizePath(plainPath, locale));
  const imageUrl = buildOgUrl(shared.baseUrl, image ?? shared.ogImage);
  const schemaList = Array.isArray(schema) ? schema : schema ? [schema] : [];
  // Localize page references without rewriting image URLs or external schema identifiers.
  const localizedSchema = (value: unknown, key = ""): unknown => {
    if (Array.isArray(value)) return value.map((entry) => localizedSchema(entry, key));
    if (value && typeof value === "object") return Object.fromEntries(
      Object.entries(value).map(([field, entry]) => [field, localizedSchema(entry, field)])
    );
    if (typeof value === "string" && ["url", "item", "@id"].includes(key)
      && (value === shared.baseUrl || value.startsWith(`${shared.baseUrl}/`))) {
      return buildOgUrl(shared.baseUrl, localizePath(value.slice(shared.baseUrl.length) || "/", locale));
    }
    return value;
  };

  return (
    <Helmet htmlAttributes={{ lang: locale }}>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {robots && <meta name="robots" content={robots} />}
      <link rel="canonical" href={canonicalUrl} />
      {!robots?.includes("noindex") && ["en", "es", "x-default"].map((language) => (
        <link key={language} rel="alternate" hrefLang={language} href={buildOgUrl(shared.baseUrl, localizePath(plainPath, language === "es" ? "es" : "en"))} />
      ))}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === "es" ? "es_ES" : "en_US"} />
      <meta property="og:site_name" content={content.meta.baseTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {schemaList.map((entry, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(localizedSchema(entry)).replace(/</g, "\\u003c")}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
