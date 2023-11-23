import { TbClockBolt } from "react-icons/tb";
import { BsArrowDown, BsListCheck } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import "aos/dist/aos.css";
import LayoutImageAndText from "../../utils/LayoutImageAndText";

const AboutSection = () => {
	return (
		<section
			id="about"
			className="w-full h-full flex flex-col justify-center bg-purple-500 pt-2"
		>
			{/* CARD */}
			<div className="flex items-center w-full flex-col">
				<div className="w-full flex justify-center flex-col items-center py-8">
					<h1 className="font-bold sm:text-2xl text-3xl text-white">School</h1>
				</div>
				<LayoutImageAndText position={"left"} color={"text-white"}/>

				<div className="w-full flex justify-center flex-col items-center py-8 bg-purple-200">
					<h1 className="font-bold sm:text-2xl text-3xl text-purple-900">
						Experience
					</h1>
				</div>
				<LayoutImageAndText position={"right"} bgColor={"bg-purple-200"} color={"text-purple-900"}/>
			</div>
		</section>
	);
};

export default AboutSection;
