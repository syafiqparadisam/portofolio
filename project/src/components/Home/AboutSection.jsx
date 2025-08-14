import "aos/dist/aos.css";
import LayoutImageAndText from "../../utils/LayoutImageAndText";
import schoolIlustration from "/picture/illustration/school.webp"
import experienceIlustration from "/picture/illustration/busypeople.webp"

const AboutSection = () => {
	return (
		<section
			id="about"
			className="w-full h-full flex flex-col shadow-xl justify-center bg-purple-500 pt-2"
		>
			{/* CARD */}
			<div className="flex justify-center items-center w-full flex-col">
				<div className="w-full flex justify-center flex-col items-center py-8">
					<h1 className="font-bold sm:text-2xl text-3xl text-white">School</h1>
				</div>
				<LayoutImageAndText
					position={"left"}
					color={"text-white"}
					image={schoolIlustration}
					description="I am currently enrolled at SMK 2 Antartika in Sidoarjo, East Java, Indonesia. In this school, I am majoring in software engineering. The subjects I am learning include programming using languages such as VB, Java, JS, C#, but I am more focused on delving into the JavaScript language."
				/>

				<div id="experience" className="w-full flex justify-center flex-col items-center py-8 bg-purple-200">
					<h1 className="font-bold sm:text-2xl text-3xl text-purple-900">
						Experience
					</h1>
				</div>
				<LayoutImageAndText
					position={"right"}
					bgColor={"bg-purple-200"}
					image={experienceIlustration}
					color={"text-purple-900"}
					description="I have been learning coding since junior high school, grade 9 in 2023. I was introduced to this world by a friend who told me about the website development process starting from HTML, CSS, and JavaScript. After that, I tried researching on YouTube and Google, and I began to enjoy it. Until now, I still have a passion for the programming world, especially web development. My goal is to become a backend developer."
				/>
			</div>
		</section>
	);
};

export default AboutSection;
