import type { SVGProps } from "react";

export type GeometryVariant =
  | "flowerOfLife"
  | "seedOfLife"
  | "metatron"
  | "vesica"
  | "spiral"
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
    strokeWidth: 1.2,
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
      {variant === "vesica" && (
        <g {...common}>
          <circle cx="40" cy="50" r="26" />
          <circle cx="60" cy="50" r="26" />
          <line x1="50" y1="22" x2="50" y2="78" />
        </g>
      )}
      {variant === "spiral" && (
        <g {...common}>
          <path d="M50 20c16 0 30 12 30 30 0 17-13 30-30 30-14 0-26-11-26-24 0-12 10-22 22-22 9 0 16 7 16 16 0 7-6 12-12 12" />
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
