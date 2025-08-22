import {
  SiAnsible,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiKubernetes,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrometheus,
  SiRedis,
  SiRust,
  SiPhp,
  SiReact,
  SiNginx,
  SiSwagger,
  SiLaravel,
  SiPython,
  SiCloudflare,
  SiOpenwrt,
  SiCisco,
  SiVuedotjs,
  SiFlutter,
  SiDart,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import { BsRouter } from "react-icons/bs";
import { MdVpnKey } from "react-icons/md";
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoGoLang,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import {
  FaBootstrap,
  FaExpeditedssl,
  FaServer,
  FaTrello,
} from "react-icons/fa";
import TechService from "../components/Services/TechService";
import Headers from "../utils/Headers";
import Seo from "../components/Seo";

const Services = () => {
  return (
    <>
      <Seo
        title={"Services"}
        name={"Myservices"}
        description={"List of my services that i can build and i learn"}
        type={"website"}
      />
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
                icon: <BiLogoJavascript size={"40px"} color="yellow" />,
                name: "JavaScript",
              },
              {
                icon: <BiLogoTypescript size={"40px"} color="blue" />,
                name: "TypeScript",
              },
              {
                icon: <SiNextdotjs size="40px" color="black" />,
                name: "NextJs",
              },
              {
                icon: <SiReact size={"40px"} color="lightblue" />,
                name: "ReactJS",
              },
                {
                icon: <SiVuedotjs size={"40px"} color="green" />,
                name: "VueJS",
              },
              {
                icon: <BiLogoTailwindCss size={"40px"} color="skyBlue" />,
                name: "Tailwind",
              },
              {
                icon: <FaBootstrap size={"40px"} color="blue" />,
                name: "Bootstrap",
              },
              {
                 icon: <SiFlutter size={"40px"} color="lightblue" />,
                name: "Flutter",
              }
            ]}
            description="I can build website with framework or native"
          />
          <TechService
            title={"Backend Developer"}
            icon={[
              {
                icon: <SiExpress size={"40px"} color="black" />,
                name: "ExpressJS",
              },
              {
                icon: <SiNestjs size={"40px"} color="red" />,
                name: "NestJS",
              },
              {
                icon: <SiLaravel size={"40px"} color="red" />,
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
            description="I can build backend system with node.js, golang, laravel, rust"
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
              {
                icon: <SiSupabase size={"40px"} color="green" />,
                name: "Supabase"
              },
               {
                icon: <SiFirebase size={"40px"} color="orange" />,
                name: "Firebase"
              }
            ]}
            description="I have used these database such as SQL, NoSQL, InMemory, and more"
          />

          <TechService
            title={"Others"}
            icon={[
              { icon: <SiGit size={"40px"} color="red" />, name: "Git" },
              {
                icon: <SiSwagger size={"40px"} color="black" />,
                name: "Swagger",
              },
              {
                icon: <SiGithub size={"40px"} color="black" />,
                name: "Github",
              },
              { icon: <FaTrello size={"40px"} color="blue" />, name: "Trello" },
            ]}
            description="I knows VCS, and Project management tools"
          />
          <TechService
            title={"Devops"}
            icon={[
              {
                icon: <SiKubernetes size={"40px"} color="blue" />,
                name: "Kubernetes",
              },
              {
                icon: <SiNginx size={"40px"} color="green" />,
                name: "Nginx",
              },
              {
                icon: <SiGithubactions size={"40px"} color="black" />,
                name: "Github Actions",
              },
              {
                icon: <SiCloudflare color="orange" size={"40px"} />,
                name: "Cloudflare",
              },
              {
                icon: <FaExpeditedssl size="40px" color="green" />,
                name: "SSL/TLS",
              },
              {
                icon: <FaServer size={"40px"} />,
                name: "Web server",
              },
              {
                icon: <SiPrometheus size={"40px"} color="red" />,
                name: "Prometheus",
              },
              { icon: <SiDocker size={"45px"} color="blue" />, name: "Docker" },
              {
                icon: <SiAnsible size={"40px"} color="black" />,
                name: "Ansible",
              },
            ]}
            description="I also knows devops tools"
          />
          <TechService
            title={"Networking"}
            description="I know some networking knowledge"
            icon={[
              {
                icon: <BsRouter size={"40px"} />,
                name: "Router",
              },
              {
                icon: <SiOpenwrt size={"40px"} />,
                name: "OpenWRT",
              },
              {
                icon: <SiCisco size={"40px"} />,
                name: "Cisco packet tracer",
              },
              {
                icon: <MdVpnKey size={"40px"} />,
                name: "VPN",
              },
            ]}
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
              { icon: <SiPython size={"40px"} color="blue" />, name: "Python" },
              {icon: <SiDart size={"40px"} color="skyblue" />, name: "Dart"}
            ]}
            description="I am familiar with these programming languages"
          />
        </section>
      </div>
    </>
  );
};

export default Services;
