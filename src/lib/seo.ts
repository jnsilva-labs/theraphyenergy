import type { FAQItem, LocaleContent, Service, ContactInfo } from "../content/siteConfig";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const buildTitle = (pageTitle: string, baseTitle: string) =>
  `${pageTitle} | ${baseTitle}`;

export const buildDescription = (description: string | undefined, fallback: string) =>
  description ?? fallback;

export const buildOgUrl = (baseUrl: string, path: string) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalized}`;
};

export const buildProfessionalServiceSchema = ({
  baseUrl,
  contact,
  content
}: {
  baseUrl: string;
  contact: ContactInfo;
  content: LocaleContent;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: content.practitioner.name,
    description: content.meta.defaultDescription,
    url: baseUrl,
    image: buildOgUrl(baseUrl, "/og-image.jpg"),
    email: contact.email,
    areaServed: [
      {
        "@type": "City",
        name: "Miami"
      },
      {
        "@type": "Place",
        name: "Worldwide"
      }
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US"
    },
    ...(contact.instagram && !contact.instagram.includes("yourhandle")
      ? { sameAs: [contact.instagram] } : {}),
    serviceType: ["Tarot readings", "Spiritual healing", "Astrology guidance"]
  };
};

export const buildServiceSchema = ({
  baseUrl,
  content,
  path,
  service
}: {
  baseUrl: string;
  content: LocaleContent;
  path: string;
  service: Service;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    serviceType: service.title,
    url: buildOgUrl(baseUrl, path),
    provider: {
      "@type": "Person",
      name: content.practitioner.name
    },
    areaServed: [
      {
        "@type": "City",
        name: "Miami"
      },
      {
        "@type": "Place",
        name: "Worldwide"
      }
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: {
        "@type": "Place",
        name: "Miami and remote worldwide"
      }
    }
  };
};

export const buildFaqSchema = (items: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
};

export const buildBreadcrumbSchema = (
  baseUrl: string,
  items: BreadcrumbItem[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildOgUrl(baseUrl, item.path)
    }))
  };
};
