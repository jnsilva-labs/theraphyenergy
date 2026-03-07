import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FAQAccordion from "../components/FAQAccordion";
import StartHereCTA from "../components/StartHereCTA";
import DividerRune from "../components/DividerRune";
import SacredGeometryMark from "../components/SacredGeometryMark";
import GeometryWatermark from "../components/GeometryWatermark";
import StaggerGroup from "../components/StaggerGroup";
import useSiteContent from "../lib/useSiteContent";
import { isValidEmail, submitForm } from "../lib/forms";
import { buildProfessionalServiceSchema } from "../lib/seo";
import {
  FloatingAccent,
  FooterGeometry,
  GeometryHeader,
  SpineNode,
  TattooPath
} from "../components/VariantGeometry";
import aboutPhoto from "../assets/inspo/about.jpg";

const Home = () => {
  const { content, locale, shared } = useSiteContent();
  const home = content.pages.home;
  const faqTeaser = content.faqs.slice(0, 4);
  const servicePalette = [
    { bg: "#f7eff0", border: "var(--accent-rose)" },
    { bg: "#f0f4f2", border: "var(--accent-green)" },
    { bg: "#eff3f7", border: "var(--accent-blue)" }
  ];
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(newsletterEmail)) {
      setNewsletterError(
        locale === "es"
          ? "Por favor ingresa un correo válido."
          : "Please enter a valid email address."
      );
      return;
    }

    setNewsletterSubmitting(true);
    setNewsletterError("");

    try {
      await submitForm({
        formType: "newsletter",
        locale,
        email: newsletterEmail.trim()
      });
      setNewsletterSubmitted(true);
      setNewsletterEmail("");
    } catch (error) {
      setNewsletterError(
        error instanceof Error && error.message
          ? error.message
          : locale === "es"
            ? "No pudimos enviar tu registro ahora mismo. Inténtalo de nuevo en unos minutos."
            : "We couldn't submit your signup right now. Please try again in a few minutes."
      );
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <div>
      <SEO
        title="Tarot Readings & Spiritual Healing in Miami"
        description="Trauma-informed tarot readings, spiritual healing, and astrology guidance with Adriana Monsalve in Miami and remote worldwide."
        path="/"
        schema={buildProfessionalServiceSchema({
          baseUrl: shared.baseUrl,
          contact: shared.contact,
          content
        })}
      />

      <section className="hero sacred-watermark">
        <GeometryHeader />
        <div className="container hero-inner text-center">
          <FadeIn>
            <p className="eyebrow hero-eyebrow">{home.hero.eyebrow}</p>
            <h1 className="hero-title">
              <span className="hero-ornament">❧</span>
              {home.hero.title}
              <span className="hero-ornament">❧</span>
            </h1>
            <div className="hero-tagline">{home.hero.availabilityNote}</div>
            <p className="hero-subtext">{home.hero.subtitle}</p>
            <div className="hero-actions justify-center">
              <Link to="/booking" className="button button-primary">
                {home.hero.ctaPrimary}
              </Link>
              <a href="/#start-here" className="button button-ghost">
                {home.hero.ctaSecondary}
              </a>
              <div className="hero-seal" aria-hidden="true">
                <SacredGeometryMark
                  variant="compass"
                  size={50}
                  className="geometry-rotate"
                  opacity={0.6}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section service-timeline">
        <div className="spine-line" aria-hidden="true" />
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>{home.services.title}</h2>
              <p>{home.services.subtitle}</p>
            </div>
          </FadeIn>
          <div className="grid service-timeline-grid grid-cols-[1fr_80px_1fr] gap-y-12 w-full max-w-[1050px] mx-auto relative z-[2]">
            {content.services.map((service, index) => {
              const isLeft = index % 2 === 0;
              const palette = servicePalette[index % servicePalette.length];
              return (
                <div key={service.slug} className="contents">
                  {isLeft ? (
                    <div className="mr-4">
                      <div
                        className="service-item"
                        style={{
                          background: palette.bg,
                          borderColor: palette.border
                        }}
                      >
                        <div className="service-corner top-left" />
                        <div className="service-corner bottom-right" />
                        <h3 className="service-item-title">{service.title}</h3>
                        <p className="service-item-desc">{service.shortDescription}</p>
                        <div className="service-item-meta">
                          <span>{service.duration}</span>
                          <span>{service.sessionFormat}</span>
                        </div>
                        <div className="service-item-actions">
                          <Link
                            to={`/services/${service.slug}`}
                            className="text-link"
                          >
                            {content.labels.learnMore}
                          </Link>
                          <Link to="/booking" className="button button-ghost">
                            {content.labels.book}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="timeline-empty" />
                  )}
                  <div className="timeline-node">
                    <SpineNode />
                  </div>
                  {!isLeft ? (
                    <div className="ml-4">
                      <div
                        className="service-item"
                        style={{
                          background: palette.bg,
                          borderColor: palette.border
                        }}
                      >
                        <div className="service-corner top-left" />
                        <div className="service-corner bottom-right" />
                        <h3 className="service-item-title">{service.title}</h3>
                        <p className="service-item-desc">{service.shortDescription}</p>
                        <div className="service-item-meta">
                          <span>{service.duration}</span>
                          <span>{service.sessionFormat}</span>
                        </div>
                        <div className="service-item-actions">
                          <Link
                            to={`/services/${service.slug}`}
                            className="text-link"
                          >
                            {content.labels.learnMore}
                          </Link>
                          <Link to="/booking" className="button button-ghost">
                            {content.labels.book}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="timeline-empty" />
                  )}
                </div>
              );
            })}
            <div className="col-span-3 text-center mt-16">
              <Link to="/booking" className="button button-primary">
                {home.hero.ctaPrimary}
              </Link>
            </div>
          </div>
          <FooterGeometry />
        </div>

        <FloatingAccent style={{ top: "15%", left: "2%", width: "200px", height: "350px" }}>
          <TattooPath
            d="M50,0 Q100,50 50,100 Q0,150 50,200"
            style={{ opacity: 0.3, stroke: "var(--accent-rose)" }}
          />
          <TattooPath
            d="M50,0 Q0,50 50,100 Q100,150 50,200"
            style={{ opacity: 0.3, stroke: "var(--accent-green)" }}
          />
        </FloatingAccent>

        <FloatingAccent style={{ top: "55%", right: "2%", width: "200px", height: "350px" }}>
          <TattooPath d="M50,0 L50,200" style={{ opacity: 0.3, stroke: "var(--accent-blue)" }} />
          <rect
            x="25"
            y="75"
            width="50"
            height="50"
            transform="rotate(45 50 100)"
            fill="none"
            stroke="var(--accent-rose)"
            strokeWidth="var(--line-width)"
            style={{ opacity: 0.3 }}
          />
        </FloatingAccent>
      </section>

      <StartHereCTA />

      <section className="section how-it-works">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>{home.howItWorks.title}</h2>
              <p>{home.howItWorks.subtitle}</p>
            </div>
          </FadeIn>
          <div className="stack-lg">
            {home.howItWorks.steps.map((step, index) => (
              <div key={step}>
                <FadeIn>
                  <div className="card step-card">
                    <span className="step-number">0{index + 1}</span>
                    <p>{step}</p>
                  </div>
                </FadeIn>
                {index < home.howItWorks.steps.length - 1 && (
                  <DividerRune variant="vesica" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sacred-watermark">
        <GeometryWatermark variant="flowerOfLife" size={360} opacity={0.05} />
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>{home.testimonials.title}</h2>
              <p>{home.testimonials.subtitle}</p>
            </div>
          </FadeIn>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="section about-teaser">
        <div className="container about-teaser-inner">
          <FadeIn>
            <div className="about-teaser-photo">
              <img src={aboutPhoto} alt={content.practitioner.name} loading="lazy" />
            </div>
          </FadeIn>
          <FadeIn>
            <div>
              <p className="eyebrow">{home.aboutTeaser.eyebrow}</p>
              <h2>{home.aboutTeaser.title}</h2>
              <p>{home.aboutTeaser.body}</p>
              <Link to="/about" className="text-link">
                {home.aboutTeaser.cta}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div className="section-header">
              <h2>{home.faq.title}</h2>
              <p>{home.faq.subtitle}</p>
            </div>
          </FadeIn>
          <FAQAccordion items={faqTeaser} />
          <div className="section-cta">
            <Link to="/faq" className="button button-ghost">
              {home.faq.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section final-cta sacred-watermark">
        <GeometryWatermark variant="seedOfLife" size={420} opacity={0.05} />
        <div className="container final-cta-inner">
          <FadeIn>
            <div>
              <h2>{home.finalCta.title}</h2>
              <p>{home.finalCta.body}</p>
            </div>
          </FadeIn>
          <FadeIn>
            <form className="newsletter" onSubmit={handleNewsletterSubmit} noValidate>
              <label htmlFor="newsletter-email">{home.finalCta.formLabel}</label>
              {newsletterSubmitted ? (
                <div className="success-message" aria-live="polite">
                  <h3>{locale === "es" ? "Gracias." : "Thank you."}</h3>
                  <p>
                    {locale === "es"
                      ? "Tu registro fue enviado. Te escribiremos cuando haya novedades."
                      : "Your signup was sent. We’ll reach out when there are updates."}
                  </p>
                </div>
              ) : (
                <div className="newsletter-field">
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    placeholder={home.finalCta.formPlaceholder}
                    autoComplete="email"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                  />
                  <button
                    className="button button-primary"
                    type="submit"
                    disabled={newsletterSubmitting}
                  >
                    {newsletterSubmitting
                      ? locale === "es"
                        ? "Enviando..."
                        : "Sending..."
                      : home.finalCta.button}
                  </button>
                </div>
              )}
              {newsletterError && <p className="error">{newsletterError}</p>}
              <p className="fine-print">{home.finalCta.finePrint}</p>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
