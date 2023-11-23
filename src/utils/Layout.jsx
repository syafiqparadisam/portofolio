import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar.jsx";
import Footer from "./Footer";

const Layout = () => {
	return (
		<div className="overflow-hidden">
			<NavigationBar />
			<Outlet />
			<Footer/>
		</div>
	);
};

export default Layout;
