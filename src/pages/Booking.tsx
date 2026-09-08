import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import Link from "../components/LocalizedLink";
import SacredGeometryMark from "../components/SacredGeometryMark";
import useSiteContent from "../lib/useSiteContent";
import { isValidEmail, submitForm } from "../lib/forms";
import { buildProfessionalServiceSchema } from "../lib/seo";
import "../styles/booking-refresh.css";
import { getSchedulingUrl } from "../lib/scheduling";

const Booking = () => {
  const { content, locale, shared } = useSiteContent();
  const booking = content.pages.booking;
  const formCopy = content.forms.booking;
  const services = content.services;
  const es = locale === "es";
  const [searchParams, setSearchParams] = useSearchParams();
  const [hydrated, setHydrated] = useState(false);
  const returning = hydrated && searchParams.get("returning") === "1";
  const schedulingUrl = getSchedulingUrl(import.meta.env.VITE_SCHEDULING_URL);
  const requestedService = searchParams.get("service") ?? "unsure";
  const validService = services.some((item) => item.slug === requestedService) ? requestedService : "unsure";
  const unsureLabel = es ? "Ayúdame a elegir una sesión" : "Help me choose a session";
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "", email: "", timeZone: "", service: "unsure",
    goals: "", experience: "", availability: "", consent: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: validService }));
  }, [validService]);
  useEffect(() => {
    setHydrated(true);
    try {
      const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setFormData((prev) => ({ ...prev, timeZone: prev.timeZone || zone }));
    } catch { /* Keep the editable field empty when time-zone detection is unavailable. */ }
  }, []);
  useEffect(() => { if (submitted) successRef.current?.focus(); }, [submitted]);
  const selectedService = services.find((item) => item.slug === formData.service);
  const errorProps = (name: string) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined
  });
  const errorText = (name: string) => errors[name] && <span id={`${name}-error`} className="error">{errors[name]}</span>;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? (event.target as HTMLInputElement).checked : value }));
    if (name === "service") {
      const next = new URLSearchParams(searchParams);
      next.set("service", value);
      setSearchParams(next, { replace: true, preventScrollReset: true });
    }
    setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = formCopy.errors.name;
    if (!isValidEmail(formData.email)) nextErrors.email = formCopy.errors.email;
    if (!formData.timeZone.trim()) nextErrors.timeZone = formCopy.errors.timeZone;
    if (!formData.goals.trim()) nextErrors.goals = formCopy.errors.goals;
    if (!formData.consent) nextErrors.consent = formCopy.errors.consent;
    setErrors(nextErrors);
    setSubmitError("");
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus());
      return;
    }
    setIsSubmitting(true);
    try {
      await submitForm({
        formType: "booking", locale, name: formData.name.trim(), email: formData.email.trim(),
        timeZone: formData.timeZone.trim(), service: selectedService?.title ?? unsureLabel,
        goals: formData.goals.trim(), experience: [returning ? (es ? "Solicitud de seguimiento de cliente anterior." : "Returning client follow-up request.") : "", formData.experience.trim()].filter(Boolean).join("\n"), availability: formData.availability.trim()
      });
      setSubmitted(true);
    } catch {
      setSubmitError(es ? "No pudimos enviar tu solicitud. Tus respuestas siguen aquí; vuelve a intentarlo o escríbenos por correo." : "We couldn't send your request. Your answers are still here; please try again or email us.");
    } finally { setIsSubmitting(false); }
  };

  return (
    <div className="booking-page">
      <SEO title={es ? "Solicita una sesión con Adriana Monsalve" : "Request a Session with Adriana Monsalve"}
        description={es ? "Solicita una consulta en Miami o a distancia. Elige una sesión o recibe ayuda para elegir." : "Request a consultation in Miami or remotely. Choose a session or get personal help finding the right starting point."}
        path="/booking" schema={buildProfessionalServiceSchema({ baseUrl: shared.baseUrl, contact: shared.contact, content })} />
      <section className="booking-intro">
        <div className="container">
          <p className="eyebrow">{booking.heroEyebrow}</p>
          <h1>{returning ? (es ? "Qué gusto verte de nuevo" : "Welcome back") : booking.heroTitle}</h1>
          <p>{es ? "Elige tu sesión o cuéntanos qué buscas. Coordinaremos los detalles contigo por correo." : "Choose your session or tell us what you’re looking for. We’ll coordinate the details with you by email."}</p>
          {returning && <p>{es ? "Solicita tu próxima sesión. Indicaremos a Adriana que ya has trabajado con ella." : "Request your next session. We’ll let Adriana know you’ve worked together before."}</p>}
          <p className="booking-response">{booking.whatNextSteps[0]}</p>
        </div>
      </section>
      <section className="booking-body">
        <div className="container booking-layout">
          <div className="card booking-form-card">
            {submitted ? (
              <div ref={successRef} tabIndex={-1} className="success-message" role="status">
                <SacredGeometryMark variant="flowerOfLife" size={56} opacity={0.5} />
                <h2>{booking.successTitle}</h2><p>{booking.successBody}</p>
                <p>{es ? "La cita aún no está confirmada. Revisaremos contigo los horarios, el formato y el precio." : "Your appointment is not confirmed yet. We’ll review timing, format, and pricing with you."}</p>
                <Link className="button button-primary" to={selectedService ? `/prepare/${selectedService.slug}` : "/resources"}>
                  {es ? "Prepárate para tu sesión" : "Prepare for your session"}
                </Link>
              </div>
            ) : (
              <form ref={formRef} className="form" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
                <h2>{returning ? (es ? "Solicitud de seguimiento" : "Follow-up session request") : booking.formTitle}</h2>
                <div className="field">
                  <label htmlFor="service">{formCopy.fields.service}</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="unsure">{unsureLabel}</option>
                    {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
                  </select>
                  <div className="booking-selection" aria-live="polite">
                    {selectedService ? <><strong>{selectedService.duration}</strong><span>{selectedService.sessionFormat}</span><span>{selectedService.pricing}</span></> : <p>{es ? "No necesitas conocer las modalidades. Adriana te ayudará a elegir un punto de partida." : "You don’t need to know the modalities. Adriana will help you find a starting point."}</p>}
                  </div>
                </div>
                <p className="booking-required">{es ? "Los campos son obligatorios salvo que se indique lo contrario." : "Fields are required unless marked optional."}</p>
                {Object.keys(errors).length > 0 && <div className="booking-error-summary" role="alert">{es ? "Revisa los campos señalados antes de enviar." : "Please check the highlighted fields before sending."}</div>}
                <div className="booking-field-pair">
                  <div className="field"><label htmlFor="name">{formCopy.fields.name}</label><input id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required {...errorProps("name")} />{errorText("name")}</div>
                  <div className="field"><label htmlFor="email">{formCopy.fields.email}</label><input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} required {...errorProps("email")} />{errorText("email")}</div>
                </div>
                <div className="field"><label htmlFor="timeZone">{formCopy.fields.timeZone}</label><input id="timeZone" name="timeZone" placeholder={formCopy.placeholders.timeZone} value={formData.timeZone} onChange={handleChange} required {...errorProps("timeZone")} /><small>{es ? "Detectada automáticamente cuando es posible; puedes cambiarla." : "Detected automatically when possible; you can change it."}</small>{errorText("timeZone")}</div>
                <div className="field"><label htmlFor="goals">{formCopy.fields.goals}</label><textarea id="goals" name="goals" rows={3} placeholder={formCopy.placeholders.goals} value={formData.goals} onChange={handleChange} required {...errorProps("goals")} /><small>{es ? "Una o dos frases son suficientes. Evita compartir información médica sensible." : "A sentence or two is enough. Please avoid sharing sensitive medical information."}</small>{errorText("goals")}</div>
                <details className="booking-optional"><summary>{es ? "Añadir disponibilidad y contexto (opcional)" : "Add availability and background (optional)"}</summary>
                  <div className="field"><label htmlFor="availability">{formCopy.fields.availability}</label><textarea id="availability" name="availability" rows={2} placeholder={formCopy.placeholders.availability} value={formData.availability} onChange={handleChange} /></div>
                  <div className="field"><label htmlFor="experience">{formCopy.fields.experience}</label><textarea id="experience" name="experience" rows={3} placeholder={formCopy.placeholders.experience} value={formData.experience} onChange={handleChange} /></div>
                </details>
                <div className="field checkbox-field"><label htmlFor="consent"><input id="consent" type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required {...errorProps("consent")} />{formCopy.fields.consent}</label>{errorText("consent")}</div>
                {submitError && <p className="error" role="alert">{submitError} <a href={`mailto:${shared.contact.email}`}>{shared.contact.email}</a></p>}
                <button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? (es ? "Enviando…" : "Sending…") : booking.submitLabel}</button>
                <p className="booking-required">{es ? "Enviar la solicitud no confirma una cita ni realiza un cobro." : "Sending a request does not confirm an appointment or take payment."}</p>
              </form>
            )}
            <div className="disclaimer-block"><p>{es ? "Las sesiones ofrecen apoyo y exploración personal; no sustituyen la atención médica, psiquiátrica ni de emergencia." : "Sessions are supportive and exploratory in nature and are not a substitute for medical, psychiatric, or emergency care."}</p></div>
          </div>
          <aside className="booking-aside">
            {schedulingUrl && <div className="card booking-calendar">
              <p className="eyebrow">{es ? "Agenda online" : "Online calendar"}</p>
              <h2>{es ? "Consulta los horarios" : "Explore available times"}</h2>
              <p>{es ? "Abre el calendario de Adriana para consultar disponibilidad e instrucciones. También puedes usar este formulario para solicitar ayuda." : "Open Adriana’s calendar for availability and booking instructions. You can also use this form to ask for help."}</p>
              <a href={schedulingUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">{es ? "Ver disponibilidad" : "View availability"} ↗</a>
              <small>{es ? "Se abre en una nueva pestaña." : "Opens in a new tab."}</small>
            </div>}

            <div className="card"><p className="eyebrow">{es ? "Un paso a la vez" : "One step at a time"}</p><h2>{booking.whatNextTitle}</h2><ol className="booking-next-steps">{booking.whatNextSteps.map((step) => <li key={step}>{step}</li>)}</ol></div>
            <div className="booking-help"><h3>{es ? "¿Quieres explorar primero?" : "Want to explore first?"}</h3><p>{es ? "Conoce cómo son las sesiones y qué puedes preparar." : "Learn what sessions involve and what you can prepare."}</p><Link to="/resources" className="text-link">{es ? "Guías para tu primera sesión" : "First-session guides"} →</Link><Link to="/faq" className="text-link">{es ? "Preguntas y políticas" : "Questions & policies"} →</Link></div>
          </aside>
        </div>
      </section>
    </div>
  );
};
export default Booking;
