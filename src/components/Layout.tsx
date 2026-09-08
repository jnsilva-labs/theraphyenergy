import { Outlet, useLocation } from "react-router-dom";
import { useEffect, type CSSProperties } from "react";
import Nav from "./Nav";
import { withoutLocale } from "../lib/routing";
import Footer from "./Footer";
import useSiteContent from "../lib/useSiteContent";
import { getMobileWallpaper } from "../lib/mobileWallpaper";

const Layout = () => {
  const location = useLocation();
  const { content } = useSiteContent();
  const wallpaper = getMobileWallpaper(withoutLocale(location.pathname));

  useEffect(() => {
    if (location.hash) {
      let id = location.hash.slice(1);
      try { id = decodeURIComponent(id); } catch { /* A malformed fragment still falls back safely. */ }
      const target = document.getElementById(id);
      if (target) { target.scrollIntoView({behavior: "auto"}); return; }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <div
      className="app-shell"
      data-theme="lux"
      style={
        {
          "--mobile-wallpaper-image": `url(${wallpaper.url})`,
          "--mobile-wallpaper-opacity": "0.07"
        } as CSSProperties
      }
    >
      <div className="alchemy-overlay" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        {content.labels.skipToContent}
      </a>
      <Nav />
      <main className="main-content" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
