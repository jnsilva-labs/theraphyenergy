import { useParams } from "react-router-dom";
import Link from "../components/LocalizedLink";
import SEO from "../components/SEO";
import useSiteContent from "../lib/useSiteContent";
import { resources } from "../content/resources";
import NotFound from "./NotFound";
export default function ResourceDetail() { const { slug } = useParams(); const { locale } = useSiteContent(); const resource = resources.find(r => r.slug === slug); if (!resource)
    return <NotFound />; const c = resource[locale]; const es = locale === "es"; return <article className="guide-page guide-article container"><SEO title={c.title} description={c.intro} path={`/resources/${slug}`}/><nav className="guide-breadcrumb" aria-label={es ? "Ruta de navegación" : "Breadcrumb"}><Link to="/resources">{es ? "Guías" : "Guides"}</Link><span aria-hidden="true"> / </span><span>{c.title}</span></nav><header className="guide-header"><p className="eyebrow">{es ? "Guía de sesión" : "Session guide"}</p><h1>{c.title}</h1><p>{c.intro}</p></header><div className="guide-reading">{c.sections.map(s => <section key={s.title}><h2>{s.title}</h2><p>{s.body}</p></section>)}</div><div className="guide-actions"><button className="button button-ghost" onClick={() => window.print()}>{es ? "Imprimir guía" : "Print guide"}</button><Link className="button button-primary" to={`/booking?service=${resource.service}`}>{es ? "Explorar una sesión" : "Explore a session"} ↗</Link></div></article>; }
