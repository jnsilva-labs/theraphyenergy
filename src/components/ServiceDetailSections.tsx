import type { Service } from "../content/siteConfig";
import FadeIn from "./FadeIn";
import useSiteContent from "../lib/useSiteContent";

const ServiceDetailSections = ({ service }: { service: Service }) => {
  const { content } = useSiteContent();
  const titles = content.pages.serviceDetail.sectionTitles;

  return (
    <div className="stack-lg">
      <FadeIn>
        <section className="content-block">
          <h2>{titles.whatItIs}</h2>
          <p>{service.sections.whatItIs}</p>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="content-block">
          <h2>{titles.whoItsFor}</h2>
          <p>{service.sections.whoItsFor}</p>
        </section>
      </FadeIn>
      <FadeIn>
        <section className="content-block">
          <h2>{titles.whatToExpect}</h2>
          <p>{service.sections.whatToExpect}</p>
        </section>
      </FadeIn>
    </div>
  );
};

export default ServiceDetailSections;
