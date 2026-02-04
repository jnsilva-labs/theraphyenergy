import { Helmet } from "react-helmet-async";
import { buildDescription, buildOgUrl, buildTitle } from "../lib/seo";
import useSiteContent from "../lib/useSiteContent";

type SEOProps = {
  title: string;
  description?: string;
  path: string;
  image?: string;
};

const SEO = ({ title, description, path, image }: SEOProps) => {
  const { locale, content, shared } = useSiteContent();
  const pageTitle = buildTitle(title, content.meta.baseTitle);
  const pageDescription = buildDescription(description, content.meta.defaultDescription);
  const canonicalUrl = buildOgUrl(shared.baseUrl, path);
  const imageUrl = buildOgUrl(shared.baseUrl, image ?? shared.ogImage);

  return (
    <Helmet htmlAttributes={{ lang: locale }}>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale === "es" ? "es_ES" : "en_US"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
