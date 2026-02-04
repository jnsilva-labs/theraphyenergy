import { NavLink, Link, NavLinkProps, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import useSiteContent from "../lib/useSiteContent";

const Nav = () => {
  const { content } = useSiteContent();
  const navLinkClass: NavLinkProps["className"] = ({ isActive }) =>
    isActive ? "active" : undefined;
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label={content.labels.home}>
          <span className="brand-title">{content.practitioner.name}</span>
          <span className="brand-subtitle">{content.practitioner.title}</span>
        </Link>
        <nav className="nav-links" aria-label={content.labels.mainNav}>
          <NavLink to="/about" className={navLinkClass}>
            {content.nav.about}
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            {content.nav.services}
          </NavLink>
          <NavLink to="/testimonials" className={navLinkClass}>
            {content.nav.testimonials}
          </NavLink>
          <NavLink to="/faq" className={navLinkClass}>
            {content.nav.faq}
          </NavLink>
          <NavLink to="/booking" className={navLinkClass}>
            {content.nav.booking}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            {content.nav.contact}
          </NavLink>
        </nav>
        <div className="nav-cta">
          <LanguageToggle />
          <a href="/#start-here" className="button button-ghost">
            {content.nav.startHere}
          </a>
          <NavLink to="/booking" className="button button-primary">
            {content.nav.bookSession}
          </NavLink>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`nav-panel ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        hidden={!isOpen}
      >
        <div className="container nav-panel-inner">
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
            {content.nav.about}
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>
            {content.nav.services}
          </NavLink>
          <NavLink to="/testimonials" className={navLinkClass} onClick={() => setIsOpen(false)}>
            {content.nav.testimonials}
          </NavLink>
          <NavLink to="/faq" className={navLinkClass} onClick={() => setIsOpen(false)}>
            {content.nav.faq}
          </NavLink>
          <NavLink to="/booking" className={navLinkClass} onClick={() => setIsOpen(false)}>
            {content.nav.booking}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>
            {content.nav.contact}
          </NavLink>
          <div className="nav-panel-cta">
            <LanguageToggle />
            <a
              href="/#start-here"
              className="button button-ghost"
              onClick={() => setIsOpen(false)}
            >
              {content.nav.startHere}
            </a>
            <NavLink
              to="/booking"
              className="button button-primary"
              onClick={() => setIsOpen(false)}
            >
              {content.nav.bookSession}
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
