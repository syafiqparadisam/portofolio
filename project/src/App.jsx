import Home from "./pages/Home";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./utils/Layout";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Aos from "aos";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Achievement from "./pages/Achievement";
import routes from "./routes";

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
              <Route path={routes.contact} element={<Contact />} />
              <Route path={routes.achiviement} element={<Achievement />} />
              <Route path={routes.project} element={<Projects />} />
              <Route path={routes.skill} element={<Skill />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
};
export default App;
