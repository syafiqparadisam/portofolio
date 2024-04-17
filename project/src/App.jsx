import Home from "./pages/Home";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavigationBar from "./utils/NavigationBar";
import Layout from "./utils/Layout";
import { useEffect } from "react";
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

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="HowToOrder" element={<HowToOrder/>} />
						<Route path="contact" element={<Contact/>} />
						<Route path="testimoni" element={<Testimonial/>} />
						<Route path="achievement" element={<Achievement/>} />
						<Route path="project" element={<Projects />} />
						<Route path="services" element={<Services />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default App;

//   <ChakraProvider>
//     <NavigationBar />
//     <CardContext.Provider value={card}>
//       <Routes>
//         <Route path="/portofolio/" element={<Home />} />
//         <Route path="/portofolio/client" element={<Client />} />
//         <Route path="/portofolio/portofolio" element={<Portofolio />} />
//         <Route path="/portofolio/service" element={<Service />} />
//       </Routes>
//     </CardContext.Provider>
//     <Footer />
//   </ChakraProvider>
