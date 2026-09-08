import { useState } from "react";
import Link from "./LocalizedLink";
import useSiteContent from "../lib/useSiteContent";
const choices = [
    { id: "clarity", en: "A fresh perspective", es: "Una nueva perspectiva", description: "Reflection on a question or decision", descripcion: "Reflexionar sobre una pregunta o decisión", slugs: ["tarot-readings", "astrology-guidance"] },
    { id: "calm", en: "Space to slow down", es: "Un espacio de calma", description: "A gentle, intention-led experience", descripcion: "Una experiencia tranquila y con intención", slugs: ["crystal-healing", "quantum-healing-sessions", "tat-therapy"] },
    { id: "direction", en: "Support for my next chapter", es: "Apoyo para mi siguiente etapa", description: "Goals, boundaries, and ongoing reflection", descripcion: "Metas, límites y reflexión continua", slugs: ["one-to-one-life-coaching", "plant-medicine-sessions"] }
];
export default function SessionFinder() {
    const { content, locale } = useSiteContent();
    const es = locale === "es";
    const [selected, setSelected] = useState<string | null>(null);
    const choice = choices.find(c => c.id === selected);
    const services = choice?.slugs.map(slug => content.services.find(s => s.slug === slug)).filter(Boolean) ?? [];
    return <section id="start-here" className="studio-finder studio-section" aria-labelledby="finder-title">
    <div className="section-heading" data-reveal><p className="eyebrow">{es ? "01 / Tu punto de partida" : "01 / Your starting point"}</p><h2 id="finder-title">{es ? "¿Qué te trae por aquí?" : "What brings you here?"}</h2><p>{es ? "No necesitas conocer cada práctica. Elige lo que te interese explorar." : "You don’t need to know every practice. Start with what you’d like to explore."}</p></div>
    <div className="finder-options" role="group" aria-label={es ? "Elige tu interés" : "Choose your interest"}>
      {choices.map((c, i) => <button key={c.id} className="finder-choice" aria-pressed={selected === c.id} aria-controls="finder-results" onClick={() => setSelected(c.id)}><span className="finder-number">0{i + 1}</span><strong>{es ? c.es : c.en}</strong><span>{es ? c.descripcion : c.description}</span><span className="finder-arrow" aria-hidden="true">↗</span></button>)}
    </div>
    <div id="finder-results" className={choice ? "finder-results" : ""} aria-live="polite" aria-atomic="true">
      {choice && <><p className="eyebrow">{es ? "Prácticas que puedes explorar" : "Practices to explore"}</p><p>{es ? "Estas opciones se relacionan con tu interés. Tú eliges; Adriana puede ayudarte a decidir." : "These options relate to your interest. The choice is yours; Adriana can help you decide."}</p><div className="finder-matches">{services.map(s => s && <article key={s.slug}><h3>{s.title}</h3><p>{s.shortDescription}</p><p className="service-facts">{s.duration} · {s.sessionFormat}</p><div className="inline-actions"><Link to={`/booking?service=${s.slug}`} className="text-link">{es ? "Solicitar esta sesión" : "Request this session"} ↗</Link><Link to={`/services/${s.slug}`}>{es ? "Ver detalles" : "View details"}</Link></div></article>)}</div></>}
    </div>
    <p className="finder-skip">{es ? "¿Aún no sabes por dónde empezar?" : "Still finding your starting point?"} <Link to="/booking?service=unsure" className="text-link">{es ? "Pide orientación a Adriana" : "Ask Adriana for guidance"} ↗</Link></p>
  </section>;
}
