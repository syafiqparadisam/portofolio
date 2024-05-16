import LayoutImageAndText from "../utils/LayoutImageAndText";
import Headers from "../utils/Headers";
import miniEccomerce from "../assets/eccomerce.png"
import paymentku from "../assets/paymentku.png"
import ramadhanWebsite from "../assets/ramadhanWebsite.png"

const Projects = () => {
	return (
		<div
			id="project"
			className="w-full flex justify-center items-center flex-col h-full"
		>
			<Headers
				title={"My Project Gallery"}
				
			/>
			<LayoutImageAndText
				position={"left"}
				bgColor={"bg-purple-300"}
				image={ramadhanWebsite}
				
				description="This is my first website that i've created using HTML, CSS, bootstrap. This website was created during a middle school assignment presentation about our favorite subject, and I love religious studies. Armed with little knowledge about website development, namely HTML and CSS, I dared to embark on this project. While other classmates used PowerPoint for their presentations, I created a website. It was an extraordinary experience for me, especially since it was my first time creating a website"
			/>
			<LayoutImageAndText
				position={"right"}
				image={miniEccomerce}
				description="This is a mini e-commerce website that I created using React.js, Express.js, and MongoDB. Here, I implemented a monolithic architecture, and the existing features include login, register, refresh token, logout, add to cart, and get cart. While the user interface (UI) is not yet polished, I plan to further develop it into a microservices architecture, along with adding a product search feature."
			/>
			<LayoutImageAndText
				position={"left"}
				image={paymentku}
				bgColor={"bg-purple-300"}
				description="This is a payment website that provide you transfer and topup money, pay bill, topup games. I created this website with microservices architecture using ReactJS, NestJS, Golang, Gofiber, Redis, MySQL, and i monitor this website using prometheus and jaeger. I plan to adding more features such as topup with real money, transfer real money, topup games, and pay bill"
			/>
		</div>
	);
};

export default Projects;
