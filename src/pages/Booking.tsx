import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import SacredGeometryMark, { GeometryVariant } from "../components/SacredGeometryMark";
import GeometryWatermark from "../components/GeometryWatermark";
import GeometrySprinkles from "../components/GeometrySprinkles";
import StaggerGroup from "../components/StaggerGroup";
import useSiteContent from "../lib/useSiteContent";
import { isValidEmail, submitForm } from "../lib/forms";
import { GeometryHeader } from "../components/VariantGeometry";

const Booking = () => {
  const { content, locale } = useSiteContent();
  const booking = content.pages.booking;
  const formCopy = content.forms.booking;
  const services = content.services;
  const ritualIcons: GeometryVariant[] = ["vesica", "spiral", "compass"];
  const submitErrorMessage =
    locale === "es"
      ? "No pudimos enviar tu solicitud ahora mismo. Inténtalo de nuevo en unos minutos."
      : "We couldn't send your request right now. Please try again in a few minutes.";

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeZone: "",
    service: services[0]?.slug ?? "",
    goals: "",
    experience: "",
    availability: "",
    consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceLabel = useMemo(() => {
    return services.find((service) => service.slug === formData.service)?.title ?? "";
  }, [formData.service, services]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    if (type === "checkbox") {
      const checkbox = event.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = formCopy.errors.name;
    if (!isValidEmail(formData.email)) nextErrors.email = formCopy.errors.email;
    if (!formData.timeZone.trim()) nextErrors.timeZone = formCopy.errors.timeZone;
    if (!formData.goals.trim()) nextErrors.goals = formCopy.errors.goals;
    if (!formData.consent) nextErrors.consent = formCopy.errors.consent;

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitForm({
        formType: "booking",
        locale,
        name: formData.name.trim(),
        email: formData.email.trim(),
        timeZone: formData.timeZone.trim(),
        service: serviceLabel || formData.service,
        goals: formData.goals.trim(),
        experience: formData.experience.trim(),
        availability: formData.availability.trim()
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error && error.message ? error.message : submitErrorMessage
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEO title={content.nav.booking} path="/booking" />
      <section className="page-hero sacred-watermark">
        <GeometryWatermark variant="seedOfLife" size={320} opacity={0.05} />
        <div className="container text-center">
          <GeometryHeader />
          <FadeIn>
            <p className="eyebrow">{booking.heroEyebrow}</p>
            <h1>{booking.heroTitle}</h1>
            <p className="hero-subtext">{booking.heroSubtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section className="section sprinkles-scope">
        <GeometrySprinkles
          items={[
            {
              variant: "lemniscate",
              size: 260,
              opacity: 0.1,
              position: { top: "-90px", left: "-140px" },
              mobile: { size: 180, opacity: 0.08, position: { top: "-110px", left: "-160px" } }
            }
          ]}
        />
        <div className="container">
          <FadeIn>
            <div className="card">
              <h2>{booking.ritualTitle}</h2>
              <StaggerGroup className="stack-lg">
                {booking.ritualSteps.map((step, index) => (
                  <div key={step} className="ritual-step">
                    <SacredGeometryMark
                      variant={ritualIcons[index % ritualIcons.length]}
                      size={32}
                      opacity={0.4}
                    />
                    <span className="step-number">0{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </StaggerGroup>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section sprinkles-scope">
        <GeometrySprinkles
          items={[
            {
              variant: "fruitOfLife",
              size: 360,
              opacity: 0.09,
              color: "var(--metallic)",
              position: { bottom: "-220px", right: "-200px" },
              mobile: { size: 240, opacity: 0.07, position: { bottom: "-240px", right: "-240px" } },
              rotate: true
            }
          ]}
        />
        <div className="container">
          <FadeIn>
            <div className="card">
              <h2>{booking.formTitle}</h2>
              {submitted ? (
                <div className="success-message" aria-live="polite">
                  <h3>{booking.successTitle}</h3>
                  <p>{booking.successBody}</p>
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
                    <label htmlFor="timeZone">{formCopy.fields.timeZone}</label>
                    <input
                      id="timeZone"
                      name="timeZone"
                      type="text"
                      placeholder={formCopy.placeholders.timeZone}
                      value={formData.timeZone}
                      onChange={handleChange}
                      required
                    />
                    {errors.timeZone && (
                      <span className="error">{errors.timeZone}</span>
                    )}
                  </div>
                  <div className="field">
                    <label htmlFor="service">{formCopy.fields.service}</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="goals">{formCopy.fields.goals}</label>
                    <textarea
                      id="goals"
                      name="goals"
                      rows={4}
                      placeholder={formCopy.placeholders.goals}
                      value={formData.goals}
                      onChange={handleChange}
                      required
                    />
                    {errors.goals && <span className="error">{errors.goals}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="experience">{formCopy.fields.experience}</label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      placeholder={formCopy.placeholders.experience}
                      value={formData.experience}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="availability">{formCopy.fields.availability}</label>
                    <textarea
                      id="availability"
                      name="availability"
                      rows={2}
                      placeholder={formCopy.placeholders.availability}
                      value={formData.availability}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field checkbox-field">
                    <label>
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                      />
                      {formCopy.fields.consent}
                    </label>
                    {errors.consent && (
                      <span className="error">{errors.consent}</span>
                    )}
                  </div>
                  {submitError && <p className="error">{submitError}</p>}
                  <button
                    className="button button-primary"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? locale === "es"
                        ? "Enviando..."
                        : "Sending..."
                      : booking.submitLabel}
                  </button>
                </form>
              )}
              <div className="disclaimer-block">
                <p>
                  Sessions are supportive and exploratory in nature and are not a
                  substitute for medical, psychiatric, or emergency care.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Booking;
