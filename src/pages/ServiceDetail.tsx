import { Link, useParams } from "react-router-dom";
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
  const { content } = useSiteContent();
  const service = slug
    ? content.services.find((item) => item.slug === slug)
    : undefined;
  const detailLabels = content.pages.serviceDetail;
  const serviceImage = service ? getServiceImage(service.slug) : undefined;

  if (!service) {
    return (
      <div>
        <SEO title={detailLabels.notFoundTitle} path="/services" />
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
    .slice(0, 3);

  return (
    <div>
      <SEO title={service.title} description={service.shortDescription} path={`/services/${service.slug}`} />
      <section className={`page-hero sacred-watermark ${motif?.className ?? ""}`}>
        <GeometryWatermark variant={motif?.variant ?? "flowerOfLife"} size={360} opacity={0.05} />
        <div className="container text-center">
          <GeometryHeader />
          <FadeIn>
            <p className="eyebrow">{detailLabels.heroEyebrow}</p>
            <h1>{service.title}</h1>
            <p className="hero-subtext">{service.shortDescription}</p>
            <div className="hero-actions justify-center">
              <Link to="/booking" className="button button-primary">
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
            <Link to="/booking" className="button button-primary">
              {detailLabels.relatedCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
