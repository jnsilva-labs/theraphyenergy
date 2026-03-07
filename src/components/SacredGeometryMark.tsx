import type { SVGProps } from "react";

export type GeometryVariant =
  | "flowerOfLife"
  | "seedOfLife"
  | "fruitOfLife"
  | "eggOfLife"
  | "metatron"
  | "merkaba"
  | "vesica"
  | "torus"
  | "lemniscate"
  | "spiral"
  | "cube"
  | "octahedron"
  | "rosette12"
  | "hexLattice"
  | "compass";

type SacredGeometryMarkProps = SVGProps<SVGSVGElement> & {
  variant?: GeometryVariant;
  size?: number;
  opacity?: number;
};

const SacredGeometryMark = ({
  variant = "flowerOfLife",
  size = 56,
  opacity = 1,
  className,
  ...props
}: SacredGeometryMarkProps) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "var(--line-width)",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`geometry-mark geometry-draw ${className ?? ""}`}
      style={{ opacity }}
      aria-hidden="true"
      {...props}
    >
      {variant === "flowerOfLife" && (
        <g {...common}>
          <circle cx="50" cy="50" r="18" />
          <circle cx="50" cy="26" r="18" />
          <circle cx="50" cy="74" r="18" />
          <circle cx="30" cy="38" r="18" />
          <circle cx="70" cy="38" r="18" />
          <circle cx="30" cy="62" r="18" />
          <circle cx="70" cy="62" r="18" />
        </g>
      )}
      {variant === "seedOfLife" && (
        <g {...common}>
          <circle cx="50" cy="50" r="18" />
          <circle cx="50" cy="28" r="18" />
          <circle cx="69" cy="39" r="18" />
          <circle cx="69" cy="61" r="18" />
          <circle cx="50" cy="72" r="18" />
          <circle cx="31" cy="61" r="18" />
          <circle cx="31" cy="39" r="18" />
        </g>
      )}
      {variant === "fruitOfLife" && (
        <g {...common}>
          <circle cx="50" cy="50" r="34" />
          <circle cx="50" cy="50" r="18" />
          <polyline points="84,50 67,79.4 33,79.4 16,50 33,20.6 67,20.6 84,50" />
          <polyline points="79.4,67 50,84 20.6,67 20.6,33 50,16 79.4,33 79.4,67" />
          <circle cx="50" cy="50" r="2.8" />
          <circle cx="84" cy="50" r="2.2" />
          <circle cx="79.4" cy="67" r="2.2" />
          <circle cx="67" cy="79.4" r="2.2" />
          <circle cx="50" cy="84" r="2.2" />
          <circle cx="33" cy="79.4" r="2.2" />
          <circle cx="20.6" cy="67" r="2.2" />
          <circle cx="16" cy="50" r="2.2" />
          <circle cx="20.6" cy="33" r="2.2" />
          <circle cx="33" cy="20.6" r="2.2" />
          <circle cx="50" cy="16" r="2.2" />
          <circle cx="67" cy="20.6" r="2.2" />
          <circle cx="79.4" cy="33" r="2.2" />
        </g>
      )}
      {variant === "eggOfLife" && (
        <g {...common}>
          <ellipse cx="50" cy="50" rx="26" ry="32" />
          <circle cx="50" cy="50" r="14" />
          <circle cx="50" cy="34" r="14" />
          <circle cx="64" cy="42" r="14" />
          <circle cx="64" cy="58" r="14" />
          <circle cx="50" cy="66" r="14" />
          <circle cx="36" cy="58" r="14" />
          <circle cx="36" cy="42" r="14" />
        </g>
      )}
      {variant === "metatron" && (
        <g {...common}>
          <circle cx="50" cy="50" r="32" />
          <circle cx="50" cy="50" r="18" />
          <circle cx="50" cy="18" r="6" />
          <circle cx="50" cy="82" r="6" />
          <circle cx="18" cy="50" r="6" />
          <circle cx="82" cy="50" r="6" />
          <line x1="50" y1="18" x2="18" y2="50" />
          <line x1="50" y1="18" x2="82" y2="50" />
          <line x1="50" y1="82" x2="18" y2="50" />
          <line x1="50" y1="82" x2="82" y2="50" />
          <line x1="18" y1="50" x2="82" y2="50" />
          <line x1="50" y1="18" x2="50" y2="82" />
        </g>
      )}
      {variant === "merkaba" && (
        <g {...common}>
          <polygon points="50,18 82,74 18,74" />
          <polygon points="50,82 18,26 82,26" />
          <line x1="50" y1="18" x2="50" y2="82" />
          <line x1="18" y1="74" x2="82" y2="26" />
          <line x1="82" y1="74" x2="18" y2="26" />
        </g>
      )}
      {variant === "vesica" && (
        <g {...common}>
          <circle cx="40" cy="50" r="26" />
          <circle cx="60" cy="50" r="26" />
          <line x1="50" y1="22" x2="50" y2="78" />
        </g>
      )}
      {variant === "torus" && (
        <g {...common}>
          <circle cx="50" cy="50" r="34" />
          <circle cx="50" cy="50" r="18" />
          <ellipse cx="50" cy="50" rx="34" ry="12" />
        </g>
      )}
      {variant === "lemniscate" && (
        <g {...common}>
          <path d="M20 50C20 35 35 35 50 50C65 65 80 65 80 50C80 35 65 35 50 50C35 65 20 65 20 50" />
        </g>
      )}
      {variant === "spiral" && (
        <g {...common}>
          <path d="M50 20c16 0 30 12 30 30 0 17-13 30-30 30-14 0-26-11-26-24 0-12 10-22 22-22 9 0 16 7 16 16 0 7-6 12-12 12" />
        </g>
      )}
      {variant === "cube" && (
        <g {...common}>
          <polyline points="28,34 66,34 66,72 28,72 28,34" />
          <polyline points="42,20 80,20 80,58 42,58 42,20" />
          <line x1="28" y1="34" x2="42" y2="20" />
          <line x1="66" y1="34" x2="80" y2="20" />
          <line x1="66" y1="72" x2="80" y2="58" />
          <line x1="28" y1="72" x2="42" y2="58" />
        </g>
      )}
      {variant === "octahedron" && (
        <g {...common}>
          <polygon points="50,18 82,50 50,82 18,50" />
          <line x1="50" y1="18" x2="50" y2="82" />
          <line x1="18" y1="50" x2="82" y2="50" />
        </g>
      )}
      {variant === "rosette12" && (
        <g {...common}>
          <circle cx="50" cy="50" r="34" />
          <circle cx="50" cy="50" r="18" />
          <line x1="50" y1="50" x2="84" y2="50" />
          <line x1="50" y1="50" x2="79.4" y2="67" />
          <line x1="50" y1="50" x2="67" y2="79.4" />
          <line x1="50" y1="50" x2="50" y2="84" />
          <line x1="50" y1="50" x2="33" y2="79.4" />
          <line x1="50" y1="50" x2="20.6" y2="67" />
          <line x1="50" y1="50" x2="16" y2="50" />
          <line x1="50" y1="50" x2="20.6" y2="33" />
          <line x1="50" y1="50" x2="33" y2="20.6" />
          <line x1="50" y1="50" x2="50" y2="16" />
          <line x1="50" y1="50" x2="67" y2="20.6" />
          <line x1="50" y1="50" x2="79.4" y2="33" />
        </g>
      )}
      {variant === "hexLattice" && (
        <g {...common}>
          <polyline points="68,50 59,65.6 41,65.6 32,50 41,34.4 59,34.4 68,50" />
          <polyline points="95,50 86,65.6 68,65.6 59,50 68,34.4 86,34.4 95,50" />
          <polyline points="41,50 32,65.6 14,65.6 5,50 14,34.4 32,34.4 41,50" />
        </g>
      )}
      {variant === "compass" && (
        <g {...common}>
          <circle cx="50" cy="50" r="28" />
          <line x1="50" y1="20" x2="50" y2="80" />
          <line x1="20" y1="50" x2="80" y2="50" />
          <path d="M50 30l6 20-6 20-6-20z" />
        </g>
      )}
    </svg>
  );
};

export default SacredGeometryMark;
