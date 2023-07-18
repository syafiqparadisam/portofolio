import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { CardContext, card } from "./Hooks/CardContext";
import Home from "./pages/Home";
import Client from "./pages/Client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Portofolio from "./pages/Portofolio";
import Service from "./pages/Service.jsx";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <NavigationBar />
        <CardContext.Provider value={card}>
          <Routes>
            <Route path="/portofolio/" element={<Home />} />
            <Route path="/portofolio/client" element={<Client />} />
            <Route path="/portofolio/portofolio" element={<Portofolio />} />
            <Route path="/portofolio/service" element={<Service />} />
          </Routes>
        </CardContext.Provider>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
