import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import FAQAccordion from "../components/FAQAccordion";
import GeometryWatermark from "../components/GeometryWatermark";
import GeometrySprinkles from "../components/GeometrySprinkles";
import DividerRune from "../components/DividerRune";
import StaggerGroup from "../components/StaggerGroup";
import { GeometryHeader } from "../components/VariantGeometry";
import useSiteContent from "../lib/useSiteContent";

const FAQ = () => {
  const { content } = useSiteContent();
  const page = content.pages.faq;

  return (
    <div>
      <SEO title={content.nav.faq} path="/faq" />
      <section className="page-hero sacred-watermark">
        <GeometryWatermark variant="seedOfLife" size={320} opacity={0.05} />
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
          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      <section className="section policies sprinkles-scope">
        <GeometrySprinkles
          items={[
            {
              variant: "hexLattice",
              size: 520,
              opacity: 0.07,
              color: "var(--metallic)",
              position: { top: "-180px", right: "-220px" },
              mobile: { size: 340, opacity: 0.06, position: { top: "-180px", right: "-240px" } }
            }
          ]}
        />
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>{page.policiesTitle}</h2>
              <p>{page.policiesSubtitle}</p>
            </div>
          </FadeIn>
          <DividerRune variant="vesica" />
          <StaggerGroup className="grid grid-2">
            {content.policies.map((policy) => (
              <div key={policy.title} className="card">
                <h3>{policy.title}</h3>
                <p>{policy.content}</p>
              </div>
            ))}
          </StaggerGroup>
          <div className="disclaimer-block">
            <p>{content.disclaimers.general}</p>
            <p>{content.disclaimers.emergency}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
