import tarot from "../assets/services/tarot-readings.jpg";
import quantum from "../assets/services/quantum-healing-sessions.jpg";
import tat from "../assets/services/tat-therapy.jpg";
import crystal from "../assets/services/crystal-healing.jpg";
import plant from "../assets/services/plant-medicine-sessions.jpg";
import coaching from "../assets/services/one-to-one-life-coaching.jpg";
import astrology from "../assets/services/astrology-guidance.jpg";

const directMap: Record<string, string> = {
  "tarot-readings": tarot,
  "quantum-healing-sessions": quantum,
  "tat-therapy": tat,
  "crystal-healing": crystal,
  "plant-medicine-sessions": plant,
  "one-to-one-life-coaching": coaching,
  "astrology-guidance": astrology
};

const images = import.meta.glob("../assets/services/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default"
}) as Record<string, string>;

const imagesBySlug = Object.entries(images).reduce<Record<string, string>>(
  (acc, [path, url]) => {
    const file = path.split("/").pop() ?? "";
    const base = file.split(".").slice(0, -1).join(".").toLowerCase();
    if (base) acc[base] = url;
    return acc;
  },
  {}
);

export const getServiceImage = (slug: string) => {
  const slugKey = slug.toLowerCase();
  if (directMap[slugKey]) return directMap[slugKey];
  if (imagesBySlug[slugKey]) return imagesBySlug[slugKey];
  const match = Object.entries(images).find(([path]) =>
    path.toLowerCase().includes(`/${slugKey}.`)
  );
  return match ? match[1] : undefined;
};
