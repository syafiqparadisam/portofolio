import {
  SiAlpinedotjs,
  SiAndroidstudio,
  SiAnsible,
  SiArchlinux,
  SiArduino,
  SiBlockchaindotcom,
  SiC,
  SiChakraui,
  SiCircleci,
  SiDebian,
  SiDocker,
  SiElectron,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJaeger,
  SiKubernetes,
  SiMui,
  SiNestjs,
  SiNetlify,
  SiNginx,
  SiPostgresql,
  SiPrometheus,
  SiReact,
  SiReacthookform,
  SiReactrouter,
  SiRedis,
  SiRust,
  SiSvelte,
  SiTauri,
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
  BiServer,
} from "react-icons/bi";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import {
  FaBootstrap,
  FaJira,
  FaRaspberryPi,
  FaTrello,
} from "react-icons/fa";
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
          icon={[
            {
              icon: <SiReact size={"40px"} color="skyBlue" />,
              name: "ReactJS",
            },
            {
              icon: <BiLogoRedux size={"40px"} color="darkBlue" />,
              name: "Redux toolkit",
            },
            {
              icon: <SiReacthookform size={"40px"} color="red" />,
              name: "React hook form",
            },
            {
              icon: <SiReactrouter size={"40px"} />,
              name: "React router dom",
            },
            {
              icon: <SiChakraui size={"40px"} color="skyBlue" />,
              name: "ChakraUI",
            },
            {
              icon: <SiMui color="darkBlue" size={"40px"} />,
              name: "MUI",
            },
          ]}
          description="I can build frontend app with react"
        />
        <TechService
          title={"Frontend Developer"}
          icon={[
            {
              icon: <BiLogoHtml5 size={"40px"} color="red" />,
              name: "HTML5",
            },
            {
              icon: <BiLogoCss3 size={"40px"} color="blue" />,
              name: "CSS3",
            },
            {
              icon: <BiLogoJavascript size={"40px"} color="yellow" />,
              name: "JavaScript",
            },
            {
              icon: <BiLogoTypescript size={"40px"} color="blue" />,
              name: "TypeScript",
            },
            {
              icon: <BiLogoTailwindCss size={"40px"} color="skyBlue" />,
              name: "TailwindCSS",
            },
            {
              icon: <FaBootstrap size={"40px"} color="blue" />,
              name: "Bootstrap",
            },
          ]}
          description="I can build website with native html,css,js"
        />
        <TechService
          title={"Backend Developer"}
          icon={[
            {
              icon: <BiLogoNodejs size={"40px"} color="green" />,
              name: "Node.js",
            },
            {
              icon: <SiExpress size={"40px"} color="black" />,
              name: "Express.js",
            },
            {
              icon: <SiNestjs size={"40px"} color="red" />,
              name: "NestJS",
            },
            {
              icon: <BiLogoGoLang size={"40px"} color="skyBlue" />,
              name: "Golang",
            },
            {
              icon: <SiNginx size={"40px"} color="green" />,
              name: "Nginx",
            },
            {
              icon: <SiRust size={"40px"} />,
              name: "Rust",
            },
          ]}
          description="I can build your backend system with Node.js, Golang, and rust"
        />
        <TechService
          title={"Database"}
          icon={[
            {
              icon: <SiMongodb size={"40px"} color="green" />,
              name: "MongoDB",
            },
            {
              icon: <SiMysql size={"40px"} />,
              name: "MySQL",
            },
            {
              icon: <SiRedis size={"40px"} color="red" />,
              name: "Redis",
            },
            {
              icon: <SiPostgresql size={"40px"} color="blue" />,
              name: "PostgreSQL",
            },
          ]}
          description="I have used these database such as SQL, NoSQL, InMemory, and more"
        />
        <TechService
          title={"Frontend SSR AND SSG"}
          icon={[
            { icon: <SiSvelte size={"40px"} color="red" />, name: "Svelte" },
            {
              icon: <SiAlpinedotjs size={"40px"} color="cyan" />,
              name: "Alpine.js",
            },
          ]}
          description="I can build frontend app with Svelte, HTMX, AlpineJS"
        />
        <TechService
          title={"Others"}
          icon={[
            { icon: <SiGit size={"40px"} color="red" />, name: "Git" },
            {
              icon: <SiGithubactions size={"40px"} color="black" />,
              name: "GitHub Actions",
            },
            { icon: <SiGithub size={"40px"} color="black" />, name: "Github" },
            { icon: <FaTrello size={"40px"} color="blue" />, name: "Trello" },
            { icon: <FaJira size={"40px"} color="blue" />, name: "Jira" },
            {
              icon: <SiCircleci size={"40px"} color="black" />,
              name: "CircleCI",
            },
          ]}
          description="I knows VCS, CI/CD, Project management tools"
        />
        <TechService
          title={"Hosting"}
          icon={[
            { icon: <SiVercel size={"40px"} color="black" />, name: "Vercel" },
            {
              icon: <SiNetlify size={"40px"} color="black" />,
              name: "Netlify",
            },
            {
              icon: <BiServer size={"40px"}/>,
              name: "Virtual Private Server"
            }
          ]}
          description="I usually host mywebsite using these provider, docker,and VPS"
        />
        <TechService
          title={"Linux"}
          icon={[
            { icon: <SiUbuntu size={"40px"} color="red" />, name: "Ubuntu" },
            {
              icon: <SiArchlinux size={"40px"} color="blue" />,
              name: "Arch Linux",
            },
            { icon: <SiDebian size={"40px"} color="red" />, name: "Debian" },
          ]}
          description="I also use this operating system"
        />
        <TechService
          title={"Devops"}
          icon={[
            {
              icon: <SiKubernetes size={"40px"} color="blue" />,
              name: "Kubernetes",
            },
            {
              icon: <SiPrometheus size={"40px"} color="red" />,
              name: "Prometheus",
            },
            { icon: <SiDocker size={"45px"} color="blue" />, name: "Docker" },
            { icon: <SiJaeger size={"40px"} color="cyan" />, name: "Jaeger" },
            {
              icon: <SiAnsible size={"40px"} color="black" />,
              name: "Ansible",
            },
          ]}
          description="I also knows devops tools"
        />
        <TechService
          title={"Programming language"}
          icon={[
            {
              icon: <BiLogoJavascript size={"40px"} color="yellow" />,
              name: "JavaScript",
            },
            {
              icon: <BiLogoGoLang size={"40px"} color="skyBlue" />,
              name: "Golang",
            },
            { icon: <SiRust size={"40px"} color="black" />, name: "Rust" },
            { icon: <SiC size={"40px"} color="darkBlue" />, name: "C" },
          ]}
          description="I am familiar with these programming languages"
        />
        <TechService
          title={"Mobile developer"}
          icon={[
            {
              icon: <SiReact size={"40px"} color="skyBlue" />,
              name: "React Native",
            },
            {
              icon: <SiAndroidstudio size={"40px"} color="green" />,
              name: "Android Studio",
            },
          ]}
          description="I also learn cross platform mobile dev using react native + expo"
        />
        <TechService
          title={"Desktop developer"}
          icon={[
            { icon: <SiTauri size={"40px"} color="orange" />, name: "Tauri" },
            {
              icon: <SiElectron size={"40px"} color="blue" />,
              name: "ElectonJS",
            },
          ]}
          description="I also learning about cross platform Desktop application"
        />
        <TechService
          title={"Still learning"}
          icon={[
            { icon: <SiArduino color="cyan" size={"40px"} />, name: "Arduino" },
            {
              icon: <FaRaspberryPi color="red" size={"40px"} />,
              name: "Raspberry PI",
            },
            {
              icon: <SiBlockchaindotcom size={"40px"} color="yellow" />,
              name: "Blockchain",
            },
            {
              icon: <SiWebassembly color="blue" size={"40px"} />,
              name: "Web assembly",
            },
          ]}
          description="I am learning IOT,cross platform app, mobile app,AI,WASM,desktop app, low level language, blockchain"
        />
      </section>
    </div>
  );
};

export default Services;
