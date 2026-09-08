import { useParams } from "react-router-dom";
import Link from "../components/LocalizedLink";
import "../styles/booking-refresh.css";
import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import ServiceDetailSections from "../components/ServiceDetailSections";
import GeometryWatermark from "../components/GeometryWatermark";
import GeometrySprinkles from "../components/GeometrySprinkles";
import SacredGeometryMark, { GeometryVariant } from "../components/SacredGeometryMark";
import { GeometryHeader } from "../components/VariantGeometry";
import StaggerGroup from "../components/StaggerGroup";
import useSiteContent from "../lib/useSiteContent";
import { getServiceImage } from "../lib/serviceImages";
import { buildBreadcrumbSchema, buildServiceSchema } from "../lib/seo";

const motifMap: Record<
  string,
  { className: string; variant: GeometryVariant; accent: string }
> = {
  "tarot-readings": {
    className: "service-hero service-hero--tarot",
    variant: "flowerOfLife",
    accent: "var(--accent-rose)"
  },
  "quantum-healing-sessions": {
    className: "service-hero service-hero--quantum",
    variant: "metatron",
    accent: "var(--accent-blue)"
  },
  "tat-therapy": {
    className: "service-hero service-hero--tat",
    variant: "vesica",
    accent: "var(--accent-green)"
  },
  "crystal-healing": {
    className: "service-hero service-hero--crystal",
    variant: "compass",
    accent: "var(--metallic)"
  },
  "plant-medicine-sessions": {
    className: "service-hero service-hero--plant",
    variant: "spiral",
    accent: "var(--accent-green)"
  },
  "one-to-one-life-coaching": {
    className: "service-hero service-hero--coaching",
    variant: "compass",
    accent: "var(--metallic)"
  },
  "astrology-guidance": {
    className: "service-hero service-hero--astrology",
    variant: "metatron",
    accent: "var(--accent-blue)"
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { content, shared, locale } = useSiteContent();
  const service = slug
    ? content.services.find((item) => item.slug === slug)
    : undefined;
  const detailLabels = content.pages.serviceDetail;
  const serviceImage = service ? getServiceImage(service.slug) : undefined;
  const seoTitles: Record<string, string> = {
    "tarot-readings": "Tarot Readings in Miami",
    "quantum-healing-sessions": "Spiritual Healing Sessions in Miami",
    "tat-therapy": "TAT Therapy Sessions in Miami",
    "crystal-healing": "Crystal Healing in Miami",
    "plant-medicine-sessions": "Plant Medicine Integration Sessions in Miami",
    "one-to-one-life-coaching": "Holistic Life Coaching in Miami",
    "astrology-guidance": "Astrology Guidance in Miami"
  };
  const seoDescriptions: Record<string, string> = {
    "tarot-readings":
      "Book trauma-informed tarot readings in Miami with Adriana Monsalve for grounded insight, clarity, and next steps.",
    "quantum-healing-sessions":
      "Explore spiritual healing sessions in Miami that support energetic alignment, grounding, and renewal.",
    "tat-therapy":
      "Work with Adriana Monsalve for TAT therapy sessions in Miami that support regulation, processing, and gentle healing.",
    "crystal-healing":
      "Crystal healing sessions in Miami designed to support calm, energetic balance, and reflective healing work.",
    "plant-medicine-sessions":
      "Plant medicine integration support in Miami for grounding, reflection, and compassionate next-step guidance.",
    "one-to-one-life-coaching":
      "Holistic life coaching in Miami for clarity, personal growth, and aligned next steps.",
    "astrology-guidance":
      "Astrology guidance in Miami to help you understand timing, patterns, and supportive next steps with clarity."
  };

  if (!service) {
    return (
      <div>
        <SEO title={detailLabels.notFoundTitle} path="/404" robots="noindex, nofollow" />
        <section className="section">
          <div className="container">
            <h1>{detailLabels.notFoundTitle}</h1>
            <p>{detailLabels.notFoundBody}</p>
            <Link to="/services" className="button button-primary">
              {detailLabels.notFoundCta}
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const motif = motifMap[service.slug];
  const related = content.services
    .filter((item) => item.slug !== service.slug)
    .sort((a, b) => b.tags.filter((tag) => service.tags.includes(tag)).length - a.tags.filter((tag) => service.tags.includes(tag)).length)
    .slice(0, 3);

  return (
    <div>
      <SEO
        title={locale === "es" ? `${service.title} en Miami y a distancia` : seoTitles[service.slug] ?? service.title}
        description={locale === "es" ? service.shortDescription : seoDescriptions[service.slug] ?? service.shortDescription}
        path={`/services/${service.slug}`}
        schema={[
          buildServiceSchema({
            baseUrl: shared.baseUrl,
            content,
            path: `/services/${service.slug}`,
            service
          }),
          buildBreadcrumbSchema(shared.baseUrl, [
            { name: "Home", path: "/" },
            { name: content.nav.services, path: "/services" },
            { name: service.title, path: `/services/${service.slug}` }
          ])
        ]}
      />
      <nav className="container service-breadcrumbs" aria-label={locale === "es" ? "Ruta de navegación" : "Breadcrumb"}>
        <Link to="/">{locale === "es" ? "Inicio" : "Home"}</Link><span aria-hidden="true">/</span><Link to="/services">{content.nav.services}</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span>
      </nav>
      <section className={`page-hero sacred-watermark ${motif?.className ?? ""}`}>
        <GeometryWatermark variant={motif?.variant ?? "flowerOfLife"} size={360} opacity={0.05} />
        <div className="container text-center">
          <GeometryHeader />
          <FadeIn>
            <p className="eyebrow">{detailLabels.heroEyebrow}</p>
            <h1>{service.title}</h1>
            <p className="hero-subtext">{service.shortDescription}</p>
            <div className="hero-actions justify-center">
              <Link to={`/booking?service=${service.slug}`} className="button button-primary">
                {service.ctaPrimary}
              </Link>
              <Link to="/contact" className="button button-ghost">
                {service.ctaSecondary}
              </Link>
              {motif && (
                <span className="service-hero-icon" style={{ color: motif.accent }}>
                  <SacredGeometryMark variant={motif.variant} size={48} opacity={0.7} />
                </span>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="service-details-grid">
              <div className="detail-card">
                <h3>{detailLabels.detailLabels.sessionFormat}</h3>
                <p>{service.sessionFormat}</p>
              </div>
              <div className="detail-card">
                <h3>{detailLabels.detailLabels.duration}</h3>
                <p>{service.duration}</p>
              </div>
              <div className="detail-card">
                <h3>{detailLabels.detailLabels.pricing}</h3>
                <p>{service.pricing}</p>
              </div>
            </div>
          </FadeIn>
          <div className="service-detail-main">
            <div className="service-detail-text">
              <ServiceDetailSections service={service} />
            </div>
            {serviceImage && (
              <FadeIn>
                <div className="service-detail-media">
                  <img src={serviceImage} alt={`${service.title} session`} loading="lazy" />
                </div>
              </FadeIn>
            )}
          </div>
          <div className="service-preparation">
            <div><h3>{locale === "es" ? "Llega con tranquilidad" : "Arrive feeling prepared"}</h3><p>{locale === "es" ? "Qué preparar, qué preguntar y cómo organizar tu espacio." : "What to bring, what to ask, and how to set up your space."}</p></div>
            <Link to={`/prepare/${service.slug}`} className="button button-ghost">{locale === "es" ? "Guía de preparación" : "Your preparation guide"}</Link>
          </div>
          <FadeIn>
            <div className="disclaimer-block safety-callout">
              <div className="safety-header">
                <SacredGeometryMark variant="vesica" size={28} opacity={0.6} />
                <h3>{detailLabels.safetyTitle}</h3>
              </div>
              <p>{service.safetyNotes}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section related-services sacred-watermark sprinkles-scope">
        <GeometryWatermark variant="flowerOfLife" size={300} opacity={0.05} />
        <GeometrySprinkles
          items={[
            {
              variant: "merkaba",
              size: 300,
              opacity: 0.06,
              color: "var(--metallic)",
              position: { top: "-140px", left: "-160px" },
              mobile: { size: 210, opacity: 0.05, position: { top: "-170px", left: "-200px" } },
              rotate: true
            }
          ]}
        />
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>{detailLabels.relatedTitle}</h2>
              <p>{detailLabels.relatedSubtitle}</p>
            </div>
          </FadeIn>
          <StaggerGroup className="grid grid-3">
            {related.map((item) => (
              <div key={item.slug} className="card">
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>
                <Link to={`/services/${item.slug}`} className="text-link">
                  {content.labels.learnMore}
                </Link>
              </div>
            ))}
          </StaggerGroup>
          <div className="section-cta">
            <Link to={`/booking?service=${service.slug}`} className="button button-primary">
              {detailLabels.relatedCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
