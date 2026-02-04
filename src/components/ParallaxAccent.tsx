import { type CSSProperties, PropsWithChildren, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ParallaxAccentProps = PropsWithChildren<{
  className?: string;
  intensity?: number;
  style?: CSSProperties;
}>;

const ParallaxAccent = ({
  children,
  className,
  intensity = 10,
  style
}: ParallaxAccentProps) => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, intensity]);

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y, ...style }}>
      {children}
    </motion.div>
  );
};

export default ParallaxAccent;
