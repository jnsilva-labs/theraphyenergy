import Link from "../components/LocalizedLink";
import useSiteContent from "../lib/useSiteContent";
import SEO from "../components/SEO";

const NotFound = () => {
  const {locale}=useSiteContent();const es=locale==="es";
  return (
    <div>
      <SEO title="Page not found" path="/404" robots="noindex, nofollow" />
      <section className="section">
        <div className="container">
          <h1>{es?"Página no encontrada":"Page not found"}</h1>
          <p>{es?"No encontramos esta página. Puedes volver al inicio.":"We couldn’t find that page. Try returning home."}</p>
          <Link to="/" className="button button-primary">
            {es?"Volver al inicio":"Return home"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
