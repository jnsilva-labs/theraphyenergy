import type { CSSProperties } from "react";
import SacredGeometryMark, { type GeometryVariant } from "./SacredGeometryMark";
import ParallaxAccent from "./ParallaxAccent";

type SprinklePosition = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
};

type SprinkleMobile = {
  size?: number;
  opacity?: number;
  position?: SprinklePosition;
};

export type GeometrySprinkleItem = {
  variant: GeometryVariant;
  size: number;
  opacity: number;
  color?: string;
  position: SprinklePosition;
  mobile?: SprinkleMobile;
  rotate?: boolean;
  parallax?: boolean;
  intensity?: number;
};

const toPx = (value?: number) => (typeof value === "number" ? `${value}px` : undefined);

const buildSprinkleStyle = (item: GeometrySprinkleItem) => {
  const style: Record<string, string> = {};

  style["--spr-size"] = `${item.size}px`;
  style["--spr-opacity"] = String(item.opacity);

  if (item.color) {
    style["--spr-color"] = item.color;
  }

  if (item.position.top) style["--spr-top"] = item.position.top;
  if (item.position.right) style["--spr-right"] = item.position.right;
  if (item.position.bottom) style["--spr-bottom"] = item.position.bottom;
  if (item.position.left) style["--spr-left"] = item.position.left;

  if (item.mobile?.size) style["--spr-size-mobile"] = toPx(item.mobile.size)!;
  if (typeof item.mobile?.opacity === "number") {
    style["--spr-opacity-mobile"] = String(item.mobile.opacity);
  }
  if (item.mobile?.position?.top) style["--spr-top-mobile"] = item.mobile.position.top;
  if (item.mobile?.position?.right) style["--spr-right-mobile"] = item.mobile.position.right;
  if (item.mobile?.position?.bottom) style["--spr-bottom-mobile"] = item.mobile.position.bottom;
  if (item.mobile?.position?.left) style["--spr-left-mobile"] = item.mobile.position.left;

  return style as unknown as CSSProperties;
};

const GeometrySprinkles = ({ items }: { items: GeometrySprinkleItem[] }) => {
  return (
    <div className="geometry-sprinkles" aria-hidden="true">
      {items.map((item, index) => {
        const style = buildSprinkleStyle(item);
        const svg = (
          <SacredGeometryMark
            variant={item.variant}
            size={100}
            opacity={1}
            className={item.rotate ? "geometry-rotate" : undefined}
          />
        );

        const className = `geometry-sprinkle${item.parallax ? " geometry-sprinkle--parallax" : ""}`;

        if (item.parallax) {
          return (
            <ParallaxAccent
              key={`sprinkle-${item.variant}-${index}`}
              className={className}
              intensity={item.intensity ?? 10}
              style={style}
            >
              {svg}
            </ParallaxAccent>
          );
        }

        return (
          <div key={`sprinkle-${item.variant}-${index}`} className={className} style={style}>
            {svg}
          </div>
        );
      })}
    </div>
  );
};

export default GeometrySprinkles;
