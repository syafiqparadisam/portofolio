import {
  SiAnsible,
  SiArchlinux,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJaeger,
  SiKubernetes,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPrometheus,
  SiDebian,
  SiRedis,
  SiRust,
  SiUbuntu,
  SiVercel,
  SiVuedotjs,
  SiPhp,
  SiReact,
  SiIstio,
  SiNginx,
  SiSwagger,
} from "react-icons/si";
import {
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoNodejs,
  BiLogoGoLang,
  BiLogoTypescript,
  BiServer,
} from "react-icons/bi";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { FaBootstrap, FaGitlab, FaTrello } from "react-icons/fa";
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
          title={"Frontend Developer"}
          icon={[
            {
              icon: <BiLogoHtml5 size={"40px"} color="red" />,
              name: "HTML",
            },
            {
              icon: <BiLogoCss3 size={"40px"} color="blue" />,
              name: "CSS",
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
              name: "Tailwind",
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
              name: "NodeJS",
            },
            {
              icon: <SiExpress size={"40px"} color="black" />,
              name: "ExpressJS",
            },
            {
              icon: <SiNestjs size={"40px"} color="red" />,
              name: "NestJS",
            },
            {
              icon: <SiPhp size={"40px"} color="darkblue" />,
              name: "PHP",
            },
            {
              icon: <BiLogoGoLang size={"40px"} color="skyBlue" />,
              name: "Golang",
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
          title={"Frontend Framework"}
          icon={[
            { icon: <SiNextdotjs size="40px" color="black" />, name: "NextJs" },
            {
              icon: <SiVuedotjs size="40px" color="darkgreen" />,
              name: "VueJS",
            },
            { icon: <SiReact size={"40px"} color="lightblue" />, name: "ReactJS" },
          ]}
          description="I can build frontend app with NextJS"
        />
        <TechService
          title={"Others"}
          icon={[
            { icon: <SiGit size={"40px"} color="red" />, name: "Git" },
            {icon: <SiSwagger size={"40px"} color="black"/> , name: "Swagger"},
            { icon: <SiGithub size={"40px"} color="black" />, name: "Github" },
            { icon: <FaTrello size={"40px"} color="blue" />, name: "Trello" },
          ]}
          description="I knows VCS, and Project management tools"
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
              icon: <BiServer size={"40px"} />,
              name: "Virtual Private Server",
            },
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
              icon: <SiNginx size={"40px"} color="green"/>,
              name: "Nginx"
            },
            {
              icon: <SiGithubactions size={"40px"} color="black" />,
              name: "Github Actions",
            },
            {
              icon: <FaGitlab size={"40px"} color="red" />,
              name: "Gitlab",
            },
            {
              icon: <SiIstio size={"40px"} color="lightblue"/>,
              name: "Istio Ingress"
            
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
            {
              icon: <SiPhp size="40px" color="darkblue" />,
              name: "PHP",
            },
            { icon: <SiRust size={"40px"} color="black" />, name: "Rust" },
          ]}
          description="I am familiar with these programming languages"
        />
      </section>
    </div>
  );
};

export default Services;
