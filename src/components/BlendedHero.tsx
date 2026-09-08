import Link from "./LocalizedLink";
import SacredGeometryMark from "./SacredGeometryMark";
import { GeometryHeader } from "./VariantGeometry";
import useSiteContent from "../lib/useSiteContent";

export default function BlendedHero() {
  const { content, locale } = useSiteContent();
  const es = locale === "es";
  return (
    <section className="blend-hero studio-hero" aria-labelledby="home-title">
      <div className="blend-hero-frame" aria-hidden="true" />
      <div className="blend-hero-content container">
        <div className="blend-hero-symbol studio-orbit" aria-hidden="true">
          <GeometryHeader />
        </div>
        <p className="eyebrow">{content.pages.home.hero.eyebrow}</p>
        <h1 id="home-title">{content.pages.home.hero.title}</h1>
        <div className="blend-availability">{content.practitioner.availability}</div>
        <p className="blend-hero-intro">
          {es
            ? "Un espacio para volver a ti. Conversaciones conscientes con Adriana Monsalve, a tu propio ritmo."
            : "A little space to come back to you. Thoughtful conversations with Adriana Monsalve, at your own pace."}
        </p>
        <div className="inline-actions">
          <Link to="/booking" className="button button-primary">
            {es ? "Solicitar una sesión" : "Request a session"} <span aria-hidden="true">↗</span>
          </Link>
          <Link to="/#start-here" className="button button-ghost">
            {es ? "Ayúdame a elegir" : "Help me choose"} <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <div className="blend-hero-footnote">
          <SacredGeometryMark variant="vesica" size={26} />
          <span>{es ? "Presencial · Online · English & Español" : "In person · Online · English & Español"}</span>
        </div>
      </div>
    </section>
  );
}
