import { useEffect, useMemo, useState } from "react";
import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import ServiceCard from "../components/ServiceCard";
import GeometryWatermark from "../components/GeometryWatermark";
import GeometrySprinkles from "../components/GeometrySprinkles";
import StaggerGroup from "../components/StaggerGroup";
import { GeometryHeader } from "../components/VariantGeometry";
import useSiteContent from "../lib/useSiteContent";
import { buildProfessionalServiceSchema } from "../lib/seo";

const Services = () => {
  const { content, shared } = useSiteContent();
  const [activeTag, setActiveTag] = useState<string>(content.labels.all);

  useEffect(() => {
    setActiveTag(content.labels.all);
  }, [content.labels.all]);
  const tags = [
    { id: "all", label: content.labels.all },
    ...content.tags
  ];

  const filteredServices = useMemo(() => {
    if (activeTag === content.labels.all) {
      return content.services;
    }
    const selected = tags.find((tag) => tag.label === activeTag);
    if (!selected || selected.id === "all") {
      return content.services;
    }
    return content.services.filter((service) => service.tags.includes(selected.id));
  }, [activeTag, content.labels.all, content.services, tags]);

  return (
    <div>
      <SEO
        title="Tarot, Spiritual Healing & Astrology Services in Miami"
        description="Explore tarot readings, spiritual healing sessions, astrology guidance, and supportive healing services in Miami with remote options worldwide."
        path="/services"
        schema={buildProfessionalServiceSchema({
          baseUrl: shared.baseUrl,
          contact: shared.contact,
          content
        })}
      />
      <section className="page-hero sacred-watermark">
        <GeometryWatermark variant="seedOfLife" size={320} opacity={0.05} />
        <div className="container text-center">
          <GeometryHeader />
          <FadeIn>
            <p className="eyebrow">{content.pages.services.heroEyebrow}</p>
            <h1>{content.pages.services.heroTitle}</h1>
            <p className="hero-subtext">{content.pages.services.heroSubtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section sprinkles-scope">
        <GeometrySprinkles
          items={[
            {
              variant: "eggOfLife",
              size: 300,
              opacity: 0.1,
              position: { top: "6%", left: "-140px" },
              mobile: { size: 200, opacity: 0.08, position: { top: "3%", left: "-170px" } }
            },
            {
              variant: "cube",
              size: 260,
              opacity: 0.08,
              color: "var(--metallic)",
              position: { bottom: "-130px", right: "-120px" },
              mobile: { size: 180, opacity: 0.06, position: { bottom: "-150px", right: "-160px" } },
              rotate: true
            }
          ]}
        />
        <div className="container">
          <FadeIn>
            <div className="filters">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  className={`filter-chip ${activeTag === tag.label ? "active" : ""}`}
                  aria-pressed={activeTag === tag.label}
                  onClick={() => setActiveTag(tag.label)}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </FadeIn>
          <StaggerGroup className="grid grid-3">
            {filteredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
};

export default Services;
