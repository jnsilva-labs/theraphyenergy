import Link from "./LocalizedLink";
import type { Service } from "../content/siteConfig";
import SacredGeometryMark from "./SacredGeometryMark";
import useSiteContent from "../lib/useSiteContent";

const ServiceCard = ({ service }: { service: Service }) => {
  const { content } = useSiteContent();
  const tagLabel =
    content.tags.find((tag) => tag.id === service.tags[0])?.label ??
    service.tags[0];
  const paletteMap: Record<string, { bg: string; border: string }> = {
    flowerOfLife: { bg: "#f7eff0", border: "var(--accent-rose)" },
    seedOfLife: { bg: "#f0f4f2", border: "var(--accent-green)" },
    metatron: { bg: "#eff3f7", border: "var(--accent-blue)" },
    vesica: { bg: "#f0f4f2", border: "var(--accent-green)" },
    spiral: { bg: "#f7eff0", border: "var(--accent-rose)" },
    compass: { bg: "#eff3f7", border: "var(--accent-blue)" }
  };
  const palette = paletteMap[service.iconVariant] ?? {
    bg: "var(--card-bg)",
    border: "var(--accent-green)"
  };

  return (
    <div
      className="service-item"
      style={{
        background: palette.bg,
        borderColor: palette.border
      }}
    >
      <div className="service-corner top-left" />
      <div className="service-corner bottom-right" />
      <div className="service-icon">
        <SacredGeometryMark variant={service.iconVariant} size={32} opacity={0.4} />
      </div>
      <div className="service-card-header">
        <h3 className="service-item-title">{service.title}</h3>
        <span className="service-tag">{tagLabel}</span>
      </div>
      <p className="service-item-desc">{service.shortDescription}</p>
      <div className="service-item-meta">
        <span>{service.duration}</span>
        <span>{service.pricing}</span>
      </div>
      <div className="service-item-actions">
        <Link to={`/services/${service.slug}`} className="text-link">
          {content.labels.learnMore}
        </Link>
        <Link to={`/booking?service=${service.slug}`} className="button button-ghost">
          {content.labels.book}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
