import { NavLink, Link, NavLinkProps } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import useSiteContent from "../lib/useSiteContent";

const Nav = () => {
  const { content } = useSiteContent();
  const navLinkClass: NavLinkProps["className"] = ({ isActive }) =>
    isActive ? "active" : undefined;

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
      </div>
    </header>
  );
};

export default Nav;
