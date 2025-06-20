import Home from "./pages/Home";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./utils/Layout";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Aos from "aos";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonial from "./pages/Testimonial";
import HowToOrder from "./pages/HowToOrder";
import Contact from "./pages/Contact";
import Achievement from "./pages/Achievement";

const App = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      mirror: true,
      duration: 1000,
      offset: 150,
    });
  }, []);
const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="HowToOrder" element={<HowToOrder />} />
              <Route path="contact" element={<Contact />} />
              <Route path="testimoni" element={<Testimonial />} />
              <Route path="achievement" element={<Achievement />} />
              <Route path="project" element={<Projects />} />
              <Route path="services" element={<Services />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
};
export default App;
