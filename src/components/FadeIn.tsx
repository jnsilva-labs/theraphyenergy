import { PropsWithChildren, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FadeInProps = PropsWithChildren<{
  delay?: number;
  y?: number;
}>;

const FadeIn = ({ children, delay = 0, y = 16 }: FadeInProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted || shouldReduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
