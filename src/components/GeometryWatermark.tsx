import SacredGeometryMark, { GeometryVariant } from "./SacredGeometryMark";

type GeometryWatermarkProps = {
  variant?: GeometryVariant;
  opacity?: number;
  size?: number;
  className?: string;
};

const GeometryWatermark = ({
  variant = "flowerOfLife",
  opacity = 0.06,
  size = 320,
  className
}: GeometryWatermarkProps) => {
  return (
    <div className={`geometry-watermark ${className ?? ""}`} aria-hidden="true">
      <SacredGeometryMark
        variant={variant}
        size={size}
        opacity={opacity}
        className="geometry-rotate"
      />
    </div>
  );
};

export default GeometryWatermark;
