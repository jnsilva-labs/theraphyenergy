import { useState, type ChangeEvent, type FormEvent } from "react";
import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import GeometryWatermark from "../components/GeometryWatermark";
import SacredGeometryMark from "../components/SacredGeometryMark";
import ParallaxAccent from "../components/ParallaxAccent";
import useSiteContent from "../lib/useSiteContent";
import { buildMailtoLink, storeSubmission } from "../lib/forms";
import floralCanopy from "../assets/inspo/floralcanopy.jpg";
import wildflowers from "../assets/inspo/wildflowers.jpg";
import { GeometryHeader } from "../components/VariantGeometry";

const Contact = () => {
  const { content, shared } = useSiteContent();
  const page = content.pages.contact;
  const formCopy = content.forms.contact;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = formCopy.errors.name;
    if (!formData.email.trim()) nextErrors.email = formCopy.errors.email;
    if (!formData.message.trim()) nextErrors.message = formCopy.errors.message;

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const stored = storeSubmission("contact", formData);
    if (!stored) {
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      window.location.href = buildMailtoLink(page.formTitle, body);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div>
      <SEO title={content.nav.contact} path="/contact" />
      <section className="page-hero sacred-watermark">
        <GeometryWatermark variant="flowerOfLife" size={320} opacity={0.05} />
        <ParallaxAccent className="parallax-accent" style={{ top: "15%", right: "8%" }}>
          <SacredGeometryMark variant="vesica" size={120} opacity={0.2} />
        </ParallaxAccent>
        <div
          className="hero-backdrop"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(245, 239, 230, 0.95), rgba(245, 239, 230, 0.7)), url(${floralCanopy})`
          }}
        />
        <div className="container text-center">
          <GeometryHeader />
          <FadeIn>
            <p className="eyebrow">{page.heroEyebrow}</p>
            <h1>{page.heroTitle}</h1>
            <p className="hero-subtext">{page.heroSubtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section
        className="section contact-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(245, 239, 230, 0.95), rgba(245, 239, 230, 0.8)), url(${wildflowers})`
        }}
      >
        <div className="container contact-grid">
          <FadeIn>
            <div className="card">
              <h2>{page.formTitle}</h2>
              {submitted ? (
                <div className="success-message" aria-live="polite">
                  <h3>{page.successTitle}</h3>
                  <p>{page.successBody}</p>
                </div>
              ) : (
                <form className="form" onSubmit={handleSubmit} noValidate>
                  <div className="field">
                    <label htmlFor="name">{formCopy.fields.name}</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">{formCopy.fields.email}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="message">{formCopy.fields.message}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder={formCopy.placeholders.message}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    {errors.message && (
                      <span className="error">{errors.message}</span>
                    )}
                  </div>
                  <button className="button button-primary" type="submit">
                    {formCopy.submitLabel}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
          <FadeIn>
            <div className="card contact-card">
              <h2>{page.connectTitle}</h2>
              <div className="contact-seal" aria-hidden="true">
                <SacredGeometryMark variant="compass" size={48} opacity={0.5} />
              </div>
              <p>{content.practitioner.location}</p>
              <p>{content.practitioner.availability}</p>
              <p>
                {content.labels.email}:{" "}
                <a href={`mailto:${shared.contact.email}`}>{shared.contact.email}</a>
              </p>
              <p>
                {content.labels.instagram}:{" "}
                <a href={shared.contact.instagram} target="_blank" rel="noreferrer">
                  {shared.instagramHandle}
                </a>
              </p>
              <div className="map-placeholder" aria-hidden="true">
                {page.mapPlaceholder}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;
