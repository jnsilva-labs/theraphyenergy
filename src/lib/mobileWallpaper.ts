import tile1 from "../assets/services/wallpaper-tile-1.jpg";
import tile2 from "../assets/services/wallpaper-tile-2.jpg";
import tile3 from "../assets/services/wallpaper-tile-3.jpg";

type Wallpaper = {
  id: "tile-1" | "tile-2" | "tile-3";
  url: string;
};

export const getMobileWallpaper = (pathname: string): Wallpaper => {
  const path = pathname.toLowerCase();

  if (path === "/" || path.startsWith("/about")) {
    return { id: "tile-1", url: tile1 };
  }

  if (path.startsWith("/services")) {
    return { id: "tile-2", url: tile2 };
  }

  // Booking + Testimonials + FAQ + Contact (and everything else)
  return { id: "tile-3", url: tile3 };
};
