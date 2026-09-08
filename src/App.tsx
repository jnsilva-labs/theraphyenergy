import { Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Booking from "./pages/Booking";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Preparation from "./pages/Preparation";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";

const LocalizedLayout = () => {
  const { language } = useParams();
  return !language || language === "es" ? <Layout /> : <NotFound />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/:language?" element={<LocalizedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="booking" element={<Booking />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="prepare/:slug" element={<Preparation />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources/:slug" element={<ResourceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
