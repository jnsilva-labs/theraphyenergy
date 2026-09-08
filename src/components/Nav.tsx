import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Link from "./LocalizedLink";
import LanguageToggle from "./LanguageToggle";
import useSiteContent from "../lib/useSiteContent";
import { withoutLocale } from "../lib/routing";
export default function Nav() {
    const { content, locale } = useSiteContent();
    const es = locale === "es";
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);
    const items = [["/about", content.nav.about], ["/services", content.nav.services], ["/resources", es ? "Guías" : "Guides"], ["/contact", content.nav.contact]];
    useEffect(() => setIsOpen(false), [location.pathname, location.hash]);
    useEffect(() => { if (!isOpen)
        return; const escape = (e: KeyboardEvent) => { if (e.key === "Escape") {
        setIsOpen(false);
        toggle.current?.focus();
    } }; document.addEventListener("keydown", escape); return () => document.removeEventListener("keydown", escape); }, [isOpen]);
    const links = items.map(([path, label]) => <Link key={path} to={path} aria-current={withoutLocale(location.pathname).startsWith(path) ? "page" : undefined} onClick={() => setIsOpen(false)}>{label}</Link>);
    return <header className="nav"><div className="container nav-inner"><Link to="/" className="brand" aria-label={content.labels.home}><span className="brand-title">{content.practitioner.name}</span><span className="brand-subtitle">{content.practitioner.title}</span></Link><nav className="nav-links" aria-label={content.labels.mainNav}>{links}</nav><div className="nav-cta"><LanguageToggle /><Link to="/booking" className="button button-primary">{es ? "Solicitar sesión" : "Request a session"} ↗</Link></div><button ref={toggle} type="button" className="nav-toggle" aria-expanded={isOpen} aria-controls="mobile-nav" aria-label={isOpen ? (es ? "Cerrar menú" : "Close menu") : (es ? "Abrir menú" : "Open menu")} onClick={() => setIsOpen(v => !v)}><span aria-hidden="true">{isOpen ? "×" : "☰"}</span></button></div><nav id="mobile-nav" className={`nav-panel ${isOpen ? "open" : ""}`} hidden={!isOpen} aria-label={es ? "Navegación móvil" : "Mobile navigation"}><div className="container nav-panel-inner">{links}<Link to="/faq">{content.nav.faq}</Link><Link to="/testimonials">{content.nav.testimonials}</Link><LanguageToggle /><Link to="/#start-here" className="text-link">{es ? "Ayúdame a elegir" : "Help me choose"} ↓</Link><Link to="/booking" className="button button-primary">{es ? "Solicitar sesión" : "Request a session"} ↗</Link></div></nav></header>;
}
