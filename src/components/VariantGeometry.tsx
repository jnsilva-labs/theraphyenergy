import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

type TattooPathProps = {
  d: string;
  style?: CSSProperties;
  delay?: number;
};

type TattooCircleProps = {
  cx: number;
  cy: number;
  r: number;
  style?: CSSProperties;
  delay?: number;
};

export const TattooPath = ({ d, style, delay = 0 }: TattooPathProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setAnimate(true);
      return undefined;
    }
    const timer = window.setTimeout(() => setAnimate(true), delay * 1000);
    return () => window.clearTimeout(timer);
  }, [delay, shouldReduceMotion]);

  return (
    <path
      d={d}
      fill="none"
      stroke="var(--ink)"
      strokeWidth="var(--line-width)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="1000"
      strokeDashoffset={animate ? 0 : 1000}
      style={{
        transition: shouldReduceMotion ? "none" : "stroke-dashoffset 2s ease-out",
        opacity: 1,
        ...style
      }}
    />
  );
};

export const TattooCircle = ({
  cx,
  cy,
  r,
  style,
  delay = 0
}: TattooCircleProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [animate, setAnimate] = useState(false);
  const circumference = 2 * Math.PI * r;

  useEffect(() => {
    if (shouldReduceMotion) {
      setAnimate(true);
      return undefined;
    }
    const timer = window.setTimeout(() => setAnimate(true), delay * 1000);
    return () => window.clearTimeout(timer);
  }, [delay, shouldReduceMotion]);

  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill="none"
      stroke="var(--ink)"
      strokeWidth="var(--line-width)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={circumference}
      strokeDashoffset={animate ? 0 : circumference}
      style={{
        transition: shouldReduceMotion ? "none" : "stroke-dashoffset 2.6s ease-out",
        opacity: 1,
        ...style
      }}
    />
  );
};

export const GeometryHeader = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div
      className="geometry-header w-[280px] h-[280px] mx-auto -mb-[60px] relative z-[1]"
      style={{
        background: "radial-gradient(circle, var(--card-bg) 40%, transparent 70%)",
        borderRadius: "50%",
        animation: shouldReduceMotion ? "none" : "rotateSlow 80s linear infinite"
      }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <TattooCircle
          cx={100}
          cy={100}
          r={40}
          style={{ stroke: "var(--accent-rose)" }}
        />
        <TattooCircle
          cx={100}
          cy={60}
          r={40}
          style={{ stroke: "var(--accent-green)" }}
          delay={0.2}
        />
        <TattooCircle
          cx={140}
          cy={80}
          r={40}
          style={{ stroke: "var(--accent-blue)" }}
          delay={0.3}
        />
        <TattooCircle
          cx={140}
          cy={120}
          r={40}
          style={{ stroke: "var(--accent-green)" }}
          delay={0.4}
        />
        <TattooCircle
          cx={100}
          cy={140}
          r={40}
          style={{ stroke: "var(--accent-rose)" }}
          delay={0.5}
        />
        <TattooCircle
          cx={60}
          cy={120}
          r={40}
          style={{ stroke: "var(--accent-blue)" }}
          delay={0.6}
        />
        <TattooCircle
          cx={60}
          cy={80}
          r={40}
          style={{ stroke: "var(--accent-green)" }}
          delay={0.7}
        />
        <circle
          cx="100"
          cy="100"
          r="6"
          fill="var(--card-bg)"
          stroke="var(--ink)"
          strokeWidth="var(--line-width)"
        />
      </svg>
    </div>
  );
};

const NodeGraphic = () => {
  return (
    <div
      className="w-[28px] h-[28px] border-2 border-[var(--ink)] relative transition-all duration-300"
      style={{
        transform: "rotate(45deg)",
        background: "var(--accent-rose)",
        borderRadius: "50% 0 50% 0",
        boxShadow: "inset 0 0 0 2px var(--card-bg)"
      }}
    >
      <div
        className="absolute top-[6px] left-[6px] right-[6px] bottom-[6px] border border-[var(--ink)]"
        style={{ borderRadius: "50% 0 50% 0" }}
      />
    </div>
  );
};

export const SpineNode = () => {
  return (
    <div className="flex items-center justify-center relative">
      <NodeGraphic />
    </div>
  );
};

type FloatingAccentProps = {
  style: CSSProperties;
  children: ReactNode;
};

export const FloatingAccent = ({ style, children }: FloatingAccentProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      const speed = parseFloat(String(style.left ?? style.right ?? 0)) > 50 ? 40 : 20;
      setPosition({ x: x * speed, y: y * speed });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, style.left, style.right]);

  return (
    <svg
      className="absolute opacity-20 pointer-events-none"
      style={{
        ...style,
        transform: shouldReduceMotion
          ? "translate(0px, 0px)"
          : `translate(${position.x}px, ${position.y}px)`,
        transition: shouldReduceMotion ? "none" : "transform 0.3s ease-out"
      }}
      viewBox="0 0 100 200"
    >
      {children}
    </svg>
  );
};

export const FooterGeometry = () => {
  return (
    <div className="w-full h-[200px] mt-16 relative flex justify-center opacity-70">
      <svg viewBox="0 0 100 200" width="100" height="200" style={{ transform: "rotate(180deg)" }}>
        <TattooPath
          d="M50,10 C60,40 80,50 90,60 C80,70 60,80 50,110 C40,80 20,70 10,60 C20,50 40,40 50,10 Z"
          style={{ stroke: "var(--accent-green)" }}
        />
        <TattooPath d="M50,0 L50,150" />
        <circle
          cx="50"
          cy="160"
          r="2"
          fill="#3a2626"
          stroke="var(--ink)"
          strokeWidth="var(--line-width)"
        />
      </svg>
    </div>
  );
};

export const useScrollFadeIn = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
