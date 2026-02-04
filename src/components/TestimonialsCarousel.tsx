import FadeIn from "./FadeIn";
import useSiteContent from "../lib/useSiteContent";

const TestimonialsCarousel = () => {
  const { content } = useSiteContent();
  return (
    <FadeIn>
      <div className="carousel" role="list">
        {content.testimonials.map((testimonial) => (
          <article key={testimonial.quote} className="carousel-card" role="listitem">
            <p className="quote">"{testimonial.quote}"</p>
            <div className="quote-meta">
              <span>{testimonial.initials}</span>
              <span>{testimonial.service}</span>
            </div>
          </article>
        ))}
      </div>
    </FadeIn>
  );
};

export default TestimonialsCarousel;
