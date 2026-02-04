import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { FAQItem } from "../content/siteConfig";

const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="accordion-item">
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${index}`}
                  className="accordion-panel"
                  role="region"
                  aria-hidden={!isOpen}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 1, height: "auto" }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
