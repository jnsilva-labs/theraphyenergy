import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div>
      <SEO title="Page not found" path="/404" />
      <section className="section">
        <div className="container">
          <h1>Page not found</h1>
          <p>We couldn't find that page. Try returning home.</p>
          <Link to="/" className="button button-primary">
            Return home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
