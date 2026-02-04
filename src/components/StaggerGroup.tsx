import { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

type StaggerGroupProps = PropsWithChildren<{
  className?: string;
  stagger?: number;
}>;

const StaggerGroup = ({ children, className, stagger = 0.12 }: StaggerGroupProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger
          }
        }
      }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={`stagger-${index}`}
              variants={{
                hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

export default StaggerGroup;
