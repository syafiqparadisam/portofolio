import { BsCheck } from "react-icons/bs";
import {
	SiAstro,
	SiChakraui,
	SiGit,
	SiGithub,
	SiMongoose,
	SiNestjs,
	SiNextdotjs,
	SiReact,
	SiReacthookform,
	SiReactrouter,
	SiRedis,
	SiUbuntu,
	SiYaml,
} from "react-icons/si";
import {
	BiLogoTailwindCss,
	BiLogoCss3,
	BiLogoJavascript,
	BiLogoHtml5,
	BiLogoNodejs,
	BiLogoRedux,
	BiLogoGoLang,
} from "react-icons/bi";
import { SiMysql, SiMongodb, SiPrisma, SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import TechService from "../components/Services/TechService";
import Headers from "../utils/Headers";

const Services = () => {
	return (
		<div className="h-full justify-center flex flex-col items-center">
			<Headers
				title={"I Will make best websites for you"}
				description={"I Have Teams Which Will Help Me To Develop A Website"}
			/>
			<section
				id="services"
				className="flex flex-wrap gap-5 lg:justify-around justify-center py-7 bg-purple-100"
			>
				<TechService
					title={"React Developer"}
					icon={
						<>
							<SiReact size={"40px"} color="skyBlue" />
							<BiLogoRedux size={"40px"} color="darkBlue" />
							<SiReacthookform size={"40px"} color="red" />
							<SiReactrouter size={"40px"} />
							<SiReact size={"40px"} color="red" />
						</>
					}
				/>
				<TechService
					title={"Frontend Developer"}
					icon={
						<>
							<BiLogoHtml5 size={"40px"} color="red" />
							<BiLogoCss3 size={"40px"} color="blue" />
							<BiLogoJavascript size={"40px"} color="yellow" />
							<BiLogoTailwindCss size={"40px"} color="skyBlue" />
							<FaBootstrap size={"40px"} color="blue" />
							<SiChakraui size={"40px"} color="skyBlue" />
						</>
					}
				/>
				<TechService
					title={"Backend Developer"}
					icon={
						<>
							<BiLogoNodejs size={"40px"} color="green" />
							<SiExpress size={"40px"} color="black" />
							<SiNestjs size={"40px"} color="red" />
							<SiPrisma size={"40px"} color="black" />
							<SiMongoose size={"40px"} color="green" />
							<BiLogoGoLang size={"40px"} color="skyBlue" />
						</>
					}
				/>
				<TechService
					title={"Database"}
					icon={
						<>
							<SiMongodb size={"40px"} color="green" />
							<SiMysql size={"40px"} />
							<SiRedis size={"40px"} color="red" />
						</>
					}
				/>
				<TechService
					title={"SSR and SSG"}
					icon={
						<>
							<SiNextdotjs size={"40px"} />
							<SiAstro size={"40px"} color="red" />
						</>
					}
				/>
				<TechService
					title={"Others"}
					icon={
						<>
							<SiGit size={"40px"} color="red" />
							<SiGithub size={"40px"} />
							<SiUbuntu size={"40px"} color="red" />
						</>
					}
				/>
			</section>
		</div>
	);
};

export default Services;
