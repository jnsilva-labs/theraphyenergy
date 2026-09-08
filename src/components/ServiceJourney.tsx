import type { CSSProperties } from "react";
import Link from "./LocalizedLink";
import SacredGeometryMark from "./SacredGeometryMark";
import { SpineNode } from "./VariantGeometry";
import useSiteContent from "../lib/useSiteContent";
import { getServiceImage } from "../lib/serviceImages";
import "../styles/service-journey.css";

const palettes = [
  { background: "#f5ebeb", accent: "#b78087" },
  { background: "#edf1e9", accent: "#7c9273" },
  { background: "#edf0f4", accent: "#8599ae" }
];

export default function ServiceJourney() {
  const { content, locale } = useSiteContent();
  const es = locale === "es";
  return (
    <section className="service-journey studio-section container" aria-labelledby="journey-title">
      <div className="section-heading section-heading-row" data-reveal>
        <div>
          <p className="eyebrow">{es ? "02 / Caminos para explorar" : "02 / Paths to explore"}</p>
          <h2 id="journey-title">{content.pages.home.services.title}</h2>
          <p>{content.pages.home.services.subtitle}</p>
        </div>
        <Link to="/services" className="text-link">{es ? "Comparar todas las sesiones" : "Compare all sessions"} ↗</Link>
      </div>
      <div className="journey-grid">
        {content.services.map((service, index) => {
          const palette = palettes[index % palettes.length];
          const image = getServiceImage(service.slug);
          return (
            <article key={service.slug} className="journey-card" data-reveal
              style={{ "--journey-color": palette.background, "--journey-accent": palette.accent } as CSSProperties}>
              <span className="journey-node" aria-hidden="true"><SpineNode /></span>
              <span className="journey-corner journey-corner-start" aria-hidden="true" />
              <span className="journey-corner journey-corner-end" aria-hidden="true" />
              <div className="journey-card-top">
                <div className="journey-identifier" aria-hidden="true">
                  <span>0{index + 1}</span>
                  <SacredGeometryMark variant={service.iconVariant} size={36} opacity={0.65} />
                </div>
                {image && <img className="journey-image" src={image} alt="" loading="lazy" width={96} height={96} />}
              </div>
              <h3>{service.title}</h3>
              <p className="journey-description">{service.shortDescription}</p>
              <dl className="journey-facts">
                <div><dt>{es ? "Duración" : "Duration"}</dt><dd>{service.duration}</dd></div>
                <div><dt>{es ? "Formato" : "Format"}</dt><dd>{service.sessionFormat}</dd></div>
              </dl>
              <div className="journey-actions">
                <Link to={`/services/${service.slug}`} className="text-link" aria-label={`${es ? "Conoce" : "Explore"} ${service.title}`}>{es ? "Conocer la sesión" : "Explore this session"} ↗</Link>
                <Link to={`/booking?service=${service.slug}`} className="button button-ghost" aria-label={`${es ? "Solicitar" : "Request"} ${service.title}`}>{es ? "Solicitar sesión" : "Request session"}</Link>
              </div>
            </article>
          );
        })}
      </div>
      <div className="journey-ending">
        <SacredGeometryMark variant="seedOfLife" size={48} opacity={0.5} />
        <p>{es ? "No tienes que elegir sola. Encontramos el punto de partida contigo." : "You don’t have to choose alone. We’ll find a starting point together."}</p>
        <Link to="/booking?service=unsure" className="text-link">{es ? "Pide orientación a Adriana" : "Ask Adriana for guidance"} ↗</Link>
      </div>
    </section>
  );
}
