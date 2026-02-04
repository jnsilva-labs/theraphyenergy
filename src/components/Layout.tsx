import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import useSiteContent from "../lib/useSiteContent";

const Layout = () => {
  const location = useLocation();
  const { content } = useSiteContent();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="app-shell" data-theme="lux">
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
