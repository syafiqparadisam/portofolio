import {
	SiAlibabacloud,
	SiAlibabadotcom,
	SiAnsible,
	SiApachekafka,
	SiArchlinux,
	SiArduino,
	SiAssemblyscript,
	SiAstro,
	SiC,
	SiCentos,
	SiChakraui,
	SiDocker,
	SiGit,
	SiGithub,
	SiGooglecloud,
	SiGrafana,
	SiJaeger,
	SiKubernetes,
	SiMaterialdesign,
	SiMongoose,
	SiMui,
	SiNestjs,
	SiNetlify,
	SiNextdotjs,
	SiNginx,
	SiPostgresql,
	SiPrometheus,
	SiRabbitmq,
	SiReact,
	SiReacthookform,
	SiReactrouter,
	SiRedis,
	SiRust,
	SiSurrealdb,
	SiSvelte,
	SiTauri,
	SiTypescript,
	SiUbuntu,
	SiVercel,
	SiWebassembly,
} from "react-icons/si";
import {
	BiLogoTailwindCss,
	BiLogoCss3,
	BiLogoJavascript,
	BiLogoHtml5,
	BiLogoNodejs,
	BiLogoRedux,
	BiLogoGoLang,
	BiLogoTypescript,
} from "react-icons/bi";
import { SiMysql, SiMongodb, SiPrisma, SiExpress } from "react-icons/si";
import { FaAws, FaBootstrap, FaJira, FaRaspberryPi, FaTrello } from "react-icons/fa";
import TechService from "../components/Services/TechService";
import Headers from "../utils/Headers";

const Services = () => {
	return (
		<div className="h-full justify-center flex flex-col items-center">
			<Headers
				title={"I Will make best software, website, application for you"}
				description={"I Have Teams Who Help Me To Develop Those"}
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
							<SiChakraui size={"40px"} color="skyBlue" />
							<SiMui color="darkBlue" size={"40px"}/>
						</>
					}
					description="I will build frontend with react if the website has too many CSR"
				/>
				<TechService
					title={"Frontend Developer"}
					icon={
						<>
							<BiLogoHtml5 size={"40px"} color="red" />
							<BiLogoCss3 size={"40px"} color="blue" />
							<BiLogoJavascript size={"40px"} color="yellow" />
							<BiLogoTypescript size={"40px"} color="blue"/>
							<BiLogoTailwindCss size={"40px"} color="skyBlue" />
							<FaBootstrap size={"40px"} color="blue" />
						</>
					}
					description="I also can build website with no javascript framework"
				/>
				<TechService
					title={"Backend Developer"}
					icon={
						<>
							<BiLogoNodejs size={"40px"} color="green" />
							<SiExpress size={"40px"} color="black" />
							<SiNestjs size={"40px"} color="red" />
							<BiLogoGoLang size={"40px"} color="skyBlue" />
							<SiRust  size={"40px"} color="black"/>
							<SiNginx size={"40px"} color="green"/>
							<SiRabbitmq size={"40px"} color="red"/>
							<SiApachekafka size={"40px"} color="black"/>
						</>
					}
					description="i will build your backend system with nodejs, golang, and rust"
				/>
				<TechService
					title={"Database"}
					icon={
						<>
							<SiMongodb size={"40px"} color="green" />
							<SiMysql size={"40px"} />
							<SiRedis size={"40px"} color="red" />
							<SiPostgresql size={"40px"} color="blue" />
							<SiSurrealdb size={"40px"} color="red"/>
						</>
					}
					description="I also knowing the database type such as SQL, NoSQL, InMemory, and etc"
				/>
				<TechService
					title={"SSR and SSG"}
					icon={
						<>
							<SiNextdotjs size={"40px"} />
							<SiSvelte size={"40px"} color="red" />
						</>
					}
					description="I also can build frontend app with Svelte or Nextjs"
				/>
				<TechService
					title={"Others"}
					icon={
						<>
							<SiGit size={"40px"} color="red" />
							<SiGithub size={"40px"} />
							<FaTrello color="blue" size={"40px"}/>
							<FaJira color="blue" size={"40px"}/>
						</>
					}
					description="I also knowing VCS, other SDLC tools"
				/>
				<TechService
					title={"Hosting"}
					icon={
						<>
							<FaAws size={"40px"} color="black" />
							<SiGooglecloud size={"40px"} color="blue"/>
							<SiVercel size={"40px"} color="black"/>
							<SiNetlify size={"40px"} color="black"/>
							<SiAlibabadotcom size={"40px"} color="orange"/>
						</>
					}
					description="I also use cloud computing and hosting provider"
				/>
				<TechService
					title={"Linux"}
					icon={
						<>
							<SiUbuntu size={"40px"} color="red" />
							<SiCentos size={"40px"} color="green"/>
							<SiArchlinux size={"40px"} color="blue"/>
						</>
					}
					description="I also use this operating system"
				/>
				<TechService
					title={"Devops"}
					icon={
						<>
							<SiKubernetes size={"40px"} color="blue" />
							<SiPrometheus size={"40px"} color="red"/>
							<SiDocker color="blue" size={"45px"}/>
							<SiJaeger color="cyan" size={"40px"}/>
							<SiGrafana color="orange" size={"40px"}/>
							<SiAnsible color="black" size={"40px"}/>
						</>
					}
					description="I also knows devops tools"
				/>
				<TechService
					title={"Still learning"}
					icon={
						<>
							<SiArduino color="cyan" size={"40px"}/>
							<FaRaspberryPi color="red" size={"40px"}/>
							<SiTauri color="orange" size={"40px"}/>
							<SiWebassembly color="blue" size={"40px"}/>
							<SiC color="darkBlue" size={"40px"}/>
							<SiAssemblyscript color="black" size={"40px"}/>
						</>
					}
					description="I am learning IOT,cross platform app, mobile app,AI,WASM,desktop app, low level language"
				/>
			</section>
		</div>
	);
};

export default Services;
