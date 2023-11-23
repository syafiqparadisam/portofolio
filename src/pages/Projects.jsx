import ShowProject from "../utils/LayoutImageAndText";
import Headers from "../utils/Headers";
import miniEccomerce from "../assets/eccomerce.png"

const Projects = () => {
	return (
		<div
			id="project"
			className="w-full flex justify-center items-center flex-col h-full"
		>
			<Headers
				title={"The My Project Gallery"}
				
			/>
			<ShowProject
				position={"left"}
				image={miniEccomerce}
				bgColor={"bg-purple-300"}
				description="This is a mini e-commerce website that I created using React.js, Express.js, and MongoDB. Here, I implemented a monolithic architecture, and the existing features include login, register, refresh token, logout, add to cart, and get cart. While the user interface (UI) is not yet polished, I plan to further develop it into a microservices architecture, along with adding a product search feature."
			/>
			<ShowProject
				position={"right"}
				bgColor={"bg-purple-600"}
				description="This is an anime movie search website. I used Express.js for the backend and Next.js for the frontend, implementing both Server-Side Rendering (SSR) and Client-Side Rendering (CSR). The completed features include searching the anime list, pagination, and searching by genre. In the future, I plan to further develop it to enable video streaming."
			/>
		</div>
	);
};

export default Projects;
