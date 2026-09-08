import Link from "./LocalizedLink";
import useSiteContent from "../lib/useSiteContent";

const StartHereCTA = () => {
  const { content } = useSiteContent();
  const startHere = content.pages.home.startHere;

  return (
    <section className="start-here" id="start-here">
      <div className="container start-here-inner">
        <div>
          <p className="eyebrow">{startHere.eyebrow}</p>
          <h2>{startHere.title}</h2>
          <p>{startHere.body}</p>
        </div>
        <div className="start-here-actions">
          <Link to="/booking" className="button button-primary">
            {startHere.ctaPrimary}
          </Link>
          <Link to="/services" className="button button-ghost">
            {startHere.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartHereCTA;
