import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import GeometryWatermark from "../components/GeometryWatermark";
import GeometrySprinkles from "../components/GeometrySprinkles";
import StaggerGroup from "../components/StaggerGroup";
import { GeometryHeader } from "../components/VariantGeometry";
import useSiteContent from "../lib/useSiteContent";
import { buildProfessionalServiceSchema } from "../lib/seo";

const Testimonials = () => {
  const { content, shared } = useSiteContent();
  const page = content.pages.testimonials;

  return (
    <div>
      <SEO
        title="Client Testimonials for Tarot and Spiritual Healing in Miami"
        description="Read client reflections on tarot readings, healing sessions, and spiritual support with Adriana Monsalve in Miami and remotely."
        path="/testimonials"
        schema={buildProfessionalServiceSchema({
          baseUrl: shared.baseUrl,
          contact: shared.contact,
          content
        })}
      />
      <section className="page-hero sacred-watermark">
        <GeometryWatermark variant="flowerOfLife" size={320} opacity={0.05} />
        <div className="container text-center">
          <GeometryHeader />
          <FadeIn>
            <p className="eyebrow">{page.heroEyebrow}</p>
            <h1>{page.heroTitle}</h1>
            <p className="hero-subtext">{page.heroSubtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section sprinkles-scope">
        <GeometrySprinkles
          items={[
            {
              variant: "rosette12",
              size: 280,
              opacity: 0.12,
              position: { top: "8%", left: "-120px" },
              mobile: { size: 190, opacity: 0.09, position: { top: "3%", left: "-140px" } }
            },
            {
              variant: "torus",
              size: 340,
              opacity: 0.1,
              color: "var(--metallic)",
              position: { bottom: "-160px", right: "-180px" },
              mobile: { size: 230, opacity: 0.08, position: { bottom: "-190px", right: "-210px" } },
              rotate: true
            }
          ]}
        />
        <div className="container">
          <StaggerGroup className="grid grid-3">
            {content.testimonials.map((testimonial) => (
              <div key={testimonial.quote} className="card">
                <p className="quote">"{testimonial.quote}"</p>
                <div className="quote-meta">
                  <span>{testimonial.initials}</span>
                  <span>{testimonial.service}</span>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>{page.featuredTitle}</h2>
              <p>{page.featuredSubtitle}</p>
            </div>
          </FadeIn>
          <TestimonialsCarousel />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
