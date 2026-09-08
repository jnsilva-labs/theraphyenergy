import { useState, type FormEvent } from "react";
import useSiteContent from "../lib/useSiteContent";
import { isValidEmail, submitForm } from "../lib/forms";
export default function Newsletter() {
    const { locale } = useSiteContent();
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
    const [newsletterError, setNewsletterError] = useState("");
    const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
    const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newsletterSubmitting)
            return;
        if (!isValidEmail(newsletterEmail)) {
            document.getElementById("newsletter-email")?.focus();
            setNewsletterError(locale === "es"
                ? "Por favor ingresa un correo válido."
                : "Please enter a valid email address.");
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
        }
        catch (error) {
            setNewsletterError(locale === "es"
                ? "No pudimos enviar tu registro ahora mismo. Inténtalo de nuevo en unos minutos."
                : "We couldn't submit your signup right now. Please try again in a few minutes.");
        }
        finally {
            setNewsletterSubmitting(false);
        }
    };
    return <section className="studio-newsletter" aria-labelledby="newsletter-title">
    <div><p className="eyebrow">{locale === "es" ? "Seguimos en contacto" : "A little connection"}</p><h2 id="newsletter-title">{locale === "es" ? "Notas para el camino." : "Notes for the journey."}</h2><p>{locale === "es" ? "Solicita recibir novedades de Adriana por correo." : "Ask to receive occasional updates from Adriana."}</p></div>
    {newsletterSubmitted ? <p role="status">{locale === "es" ? "Recibimos tu solicitud. Gracias por conectar." : "Your request was received. Thank you for connecting."}</p> : <form onSubmit={handleNewsletterSubmit} noValidate>
      <label htmlFor="newsletter-email">{locale === "es" ? "Tu correo electrónico" : "Your email address"}</label>
      <div className="newsletter-fields"><input id="newsletter-email" name="email" type="email" autoComplete="email" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} aria-invalid={!!newsletterError} aria-describedby={newsletterError ? "newsletter-error" : undefined}/><button className="button button-primary" disabled={newsletterSubmitting}>{newsletterSubmitting ? (locale === "es" ? "Enviando…" : "Sending…") : (locale === "es" ? "Solicitar novedades" : "Request updates")}</button></div>
      {newsletterError && <p id="newsletter-error" role="alert">{newsletterError}</p>}
    </form>}
  </section>;
}
