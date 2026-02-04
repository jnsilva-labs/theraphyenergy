import SEO from "../components/SEO";
import FadeIn from "../components/FadeIn";
import GeometryWatermark from "../components/GeometryWatermark";
import DividerRune from "../components/DividerRune";
import SacredGeometryMark from "../components/SacredGeometryMark";
import ParallaxAccent from "../components/ParallaxAccent";
import { GeometryHeader } from "../components/VariantGeometry";
import useSiteContent from "../lib/useSiteContent";
import portrait from "../assets/inspo/about.jpg";
import floralCanopy from "../assets/inspo/floralcanopy.jpg";

const About = () => {
  const { content } = useSiteContent();
  const about = content.pages.about;

  return (
    <div>
      <SEO title={content.nav.about} path="/about" />
      <section className="page-hero sacred-watermark">
        <GeometryWatermark variant="flowerOfLife" size={360} opacity={0.05} />
        <ParallaxAccent className="parallax-accent" style={{ top: "20%", left: "6%" }}>
          <SacredGeometryMark variant="seedOfLife" size={140} opacity={0.2} />
        </ParallaxAccent>
        <div className="container text-center">
          <GeometryHeader />
          <FadeIn>
            <p className="eyebrow">{about.heroEyebrow}</p>
            <h1>{about.heroTitle}</h1>
            <p className="hero-subtext">{about.heroSubtitle}</p>
          </FadeIn>
        </div>
      </section>

      <section
        className="section about-section sacred-watermark"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(245, 239, 230, 0.95), rgba(245, 239, 230, 0.75)), url(${floralCanopy})`
        }}
      >
        <ParallaxAccent className="parallax-accent" style={{ top: "8%", right: "6%" }}>
          <SacredGeometryMark variant="compass" size={120} opacity={0.2} />
        </ParallaxAccent>
        <div className="container stack-lg">
          <div className="about-grid">
            <FadeIn>
              <div className="about-image">
                <img src={portrait} alt={content.practitioner.name} loading="lazy" />
              </div>
            </FadeIn>
            <FadeIn>
              <div className="content-block">
                <h2>{about.storyTitle}</h2>
                <p>{about.storyBody}</p>
              </div>
            </FadeIn>
          </div>

          <DividerRune variant="compass" />

          <FadeIn>
            <div className="content-block">
              <h2>{about.approachTitle}</h2>
              <ul className="list">
                {about.approachItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <DividerRune variant="flowerOfLife" />

          <FadeIn>
            <div className="content-block">
              <h2>{about.lineageTitle}</h2>
              <p>{about.lineageBody}</p>
            </div>
          </FadeIn>

          <DividerRune variant="vesica" />

          <FadeIn>
            <div className="content-block">
              <h2>{about.expectTitle}</h2>
              <p>{about.expectBody}</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default About;
