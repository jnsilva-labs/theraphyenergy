import { useRef } from "react";
import Link from "../components/LocalizedLink";
import SEO from "../components/SEO";
import FAQAccordion from "../components/FAQAccordion";
import SessionFinder from "../components/SessionFinder";
import Newsletter from "../components/Newsletter";
import useSiteContent from "../lib/useSiteContent";
import useScrollMotion from "../lib/useScrollMotion";
import { buildProfessionalServiceSchema } from "../lib/seo";
import BlendedHero from "../components/BlendedHero";
import ServiceJourney from "../components/ServiceJourney";
import DividerRune from "../components/DividerRune";
import portrait from "../assets/inspo/about.jpg";
export default function Home() {
    const { content, locale, shared } = useSiteContent();
    const es = locale === "es";
    const root = useRef<HTMLDivElement>(null);
    useScrollMotion(root, locale);
    return <div className="studio-home blend-home" ref={root}>
    <SEO title="Tarot Readings & Spiritual Healing in Miami" description={content.pages.home.hero.subtitle} path="/" schema={buildProfessionalServiceSchema({ baseUrl: shared.baseUrl, contact: shared.contact, content })}/>
    <BlendedHero />
    <div className="studio-values"><span>{es ? "Tu ritmo" : "Your own pace"}</span><span aria-hidden="true">✳</span><span>{es ? "Espacio para preguntar" : "Room for questions"}</span><span aria-hidden="true">✳</span><span>{es ? "Tú eliges el camino" : "You choose the way"}</span></div>
    <div className="container"><SessionFinder /></div>
    <ServiceJourney />
    <section className="studio-about studio-section container blend-about" data-reveal>
      <figure className="blend-about-portrait"><img src={portrait} alt="Adriana Monsalve" width="1066" height="1600" loading="lazy"/><figcaption>Adriana Monsalve</figcaption></figure>
      <div className="blend-about-copy"><p className="eyebrow">{content.pages.home.aboutTeaser.eyebrow}</p><h2>{content.pages.home.aboutTeaser.title}</h2><DividerRune variant="vesica"/><p className="studio-lead">{content.pages.home.aboutTeaser.body}</p><Link to="/about" className="text-link">{es ? "Conoce a Adriana" : "Get to know Adriana"} ↗</Link></div>
    </section>
    <section className="studio-process studio-section"><div className="container"><p className="eyebrow">{es ? "03 / Un comienzo sencillo" : "03 / A simple beginning"}</p><h2 data-reveal>{es ? "De la curiosidad a la conversación." : "From curiosity to conversation."}</h2><div className="studio-steps">{(es ? [["Explora", "Elige una sesión o pide ayuda para encontrar tu punto de partida."], ["Conecta", "Envía una solicitud. Confirmaremos el formato, el precio y la disponibilidad contigo."], ["Llega a tu manera", "Lee tu guía de preparación y trae tus preguntas. No necesitas experiencia previa."]] : [["Explore", "Choose a session, or ask for help finding your starting point."], ["Connect", "Send a request. We’ll confirm the format, price, and availability with you."], ["Come as you are", "Read your preparation guide and bring your questions. No experience needed."]]).map(([title, body], i) => <article key={title} data-reveal><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="studio-section container studio-reflections" data-reveal>
      <div className="section-heading"><p className="eyebrow">{es ? "Voces de clientes" : "Client reflections"}</p><h2>{es ? "Espacio para sentirte escuchada." : "Space to feel heard."}</h2></div>
      <div className="studio-quotes">{content.testimonials.slice(0, 2).map(item => <figure key={item.initials}><blockquote>“{item.quote}”</blockquote><figcaption>{item.initials} · {item.service}</figcaption></figure>)}</div>
      <Link className="text-link" to="/testimonials">{es ? "Leer más experiencias" : "Read more experiences"} ↗</Link>
    </section>
    <section className="studio-section container studio-faq"><div data-reveal><p className="eyebrow">{es ? "Antes de empezar" : "Before you begin"}</p><h2>{es ? "La tranquilidad de saber." : "A little more clarity."}</h2><Link to="/resources" className="text-link">{es ? "Guías para tu sesión" : "Explore session guides"} ↗</Link></div><FAQAccordion items={content.faqs.slice(0, 4)}/></section>
    <section className="studio-closing container" data-reveal><DividerRune variant="seedOfLife"/><p className="eyebrow">{es ? "Tu siguiente paso" : "Your next step"}</p><h2>{es ? "Empecemos donde estás." : "Let’s begin where you are."}</h2><p>{es ? "No necesitas tener todas las respuestas. Solo un lugar para empezar." : "You don’t need to have all the answers. Just a place to start."}</p><Link to="/booking" className="button button-primary">{es ? "Solicitar una sesión" : "Request a session"} ↗</Link><Link to="/booking?returning=1" className="studio-returning">{es ? "¿Ya nos conocemos? Solicita otra sesión" : "Been here before? Request another session"} ↗</Link></section>
    <div className="container"><Newsletter /></div>
  </div>;
}
