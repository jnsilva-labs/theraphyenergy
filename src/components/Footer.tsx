import { Link } from "react-router-dom";
import GeometryWatermark from "./GeometryWatermark";
import useSiteContent from "../lib/useSiteContent";

const Footer = () => {
  const { content, shared } = useSiteContent();
  return (
    <footer className="footer">
      <GeometryWatermark variant="flowerOfLife" opacity={0.04} size={260} />
      <div className="container footer-inner">
        <div>
          <div className="footer-brand">{content.practitioner.name}</div>
          <p className="footer-meta">{content.practitioner.availability}</p>
          <p className="footer-meta">{content.practitioner.location}</p>
        </div>
        <div className="footer-links">
          <Link to="/about">{content.nav.about}</Link>
          <Link to="/services">{content.nav.services}</Link>
          <Link to="/booking">{content.nav.booking}</Link>
          <Link to="/faq">{content.nav.faq}</Link>
          <Link to="/contact">{content.nav.contact}</Link>
        </div>
        <div>
          <p className="footer-meta">{content.disclaimers.general}</p>
          <p className="footer-meta">{content.disclaimers.emergency}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          Copyright {new Date().getFullYear()} {content.practitioner.name}.{" "}
          {content.labels.rightsReserved}
        </p>
        <p className="footer-meta">
          {content.labels.email}: {shared.contact.email}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
