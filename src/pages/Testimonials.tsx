import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import GeometryWatermark from "../components/GeometryWatermark";
import StaggerGroup from "../components/StaggerGroup";
import { GeometryHeader } from "../components/VariantGeometry";
import useSiteContent from "../lib/useSiteContent";

const Testimonials = () => {
  const { content } = useSiteContent();
  const page = content.pages.testimonials;

  return (
    <div>
      <SEO title={content.nav.testimonials} path="/testimonials" />
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

      <section className="section">
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
