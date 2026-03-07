import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import useSiteContent from "../lib/useSiteContent";

const TestimonialsCarousel = () => {
  const { content } = useSiteContent();
  const shouldReduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted || shouldReduceMotion) {
    return (
      <div className="carousel" role="list">
        {content.testimonials.map((testimonial) => (
          <article
            key={testimonial.quote}
            className="card carousel-card"
            role="listitem"
          >
            <p className="quote">"{testimonial.quote}"</p>
            <div className="quote-meta">
              <span>{testimonial.initials}</span>
              <span>{testimonial.service}</span>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="carousel" role="list">
      {content.testimonials.map((testimonial, index) => (
        <motion.article
          key={testimonial.quote}
          className="card carousel-card"
          role="listitem"
          initial={{ opacity: 0, y: 18, scale: 0.97, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
            delay: Math.min(index * 0.08, 0.4)
          }}
        >
          <p className="quote">"{testimonial.quote}"</p>
          <div className="quote-meta">
            <span>{testimonial.initials}</span>
            <span>{testimonial.service}</span>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default TestimonialsCarousel;
