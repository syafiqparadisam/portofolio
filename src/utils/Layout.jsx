import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar.jsx";
import Footer from "./Footer";
import { useLoadingStore } from "../store/store.js";

const Layout = () => {
	const loading = useLoadingStore((state) => state.loading);

	return (
		<>
			<div
				className={`absolute ${
					loading ? "block" : "hidden"
				} top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[999]`}
			>
				<p className="text-center font-bold text-2xl">Loading...</p>
			</div>
			<div className={`${loading ? "blur-sm" : ""} overflow-hidden`}>
				<NavigationBar />
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default Layout;
