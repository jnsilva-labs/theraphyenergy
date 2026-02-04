import SacredGeometryMark, { GeometryVariant } from "./SacredGeometryMark";

type DividerRuneProps = {
  label?: string;
  variant?: GeometryVariant;
};

const DividerRune = ({ label, variant = "vesica" }: DividerRuneProps) => {
  return (
    <div className="divider-rune" aria-hidden={!label}>
      <SacredGeometryMark variant={variant} size={32} opacity={0.5} />
      {label && <span>{label}</span>}
    </div>
  );
};

export default DividerRune;
