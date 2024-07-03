import {
  SiAlibabadotcom,
  SiAlpinedotjs,
  SiAndroidstudio,
  SiAnsible,
  SiApachekafka,
  SiArchlinux,
  SiArduino,
  SiArgo,
  SiAssemblyscript,
  SiBlockchaindotcom,
  SiC,
  SiCentos,
  SiChakraui,
  SiCircleci,
  SiCockroachlabs,
  SiCplusplus,
  SiDebian,
  SiDocker,
  SiElasticsearch,
  SiElasticstack,
  SiElectron,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGrafana,
  SiHiveBlockchain,
  SiIstio,
  SiJaeger,
  SiKibana,
  SiKubernetes,
  SiLogstash,
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
  SiReactivex,
  SiReactrouter,
  SiRedis,
  SiRust,
  SiSurrealdb,
  SiSvelte,
  SiTauri,
  SiTensorflow,
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
import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import {
  FaAws,
  FaBootstrap,
  FaJava,
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
          description="I will build frontend with react if the website has too many CSR"
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
          description="I also can build website with no javascript framework"
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
              icon: <SiRabbitmq size={"40px"} color="red" />,
              name: "RabbitMQ",
            },
            {
              icon: <SiApachekafka size={"40px"} color="black" />,
              name: "Apache Kafka",
            },
          ]}
          description="I will build your backend system with Node.js, Golang"
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
              icon: <SiSurrealdb size={"40px"} color="red" />,
              name: "SurrealDB",
            },
            {
              icon: <SiCockroachlabs size={"40px"} color="black" />,
              name: "CockroachDB",
            },
          ]}
          description="I also know the database types such as SQL, NoSQL, InMemory, and more"
        />
        <TechService
          title={"Frontend SSR AND SSG"}
          icon={[
            { icon: <SiSvelte size={"40px"} color="red" />, name: "Svelte" },
            {
              icon: <SiAlpinedotjs size={"40px"} color="red" />,
              name: "Alpine.js",
            },
          ]}
          description="I also can build frontend app with Svelte or Nextjs"
        />
        <TechService
          title={"Others"}
          icon={[
            { icon: <SiGit size={"40px"} color="red" />, name: "Git" },
            { icon: <SiGithub size={"40px"} color="black" />, name: "GitHub" },
            { icon: <FaTrello size={"40px"} color="blue" />, name: "Trello" },
            { icon: <FaJira size={"40px"} color="blue" />, name: "Jira" },
            {
              icon: <SiCircleci size={"40px"} color="black" />,
              name: "CircleCI",
            },
          ]}
          description="I also knowing VCS, other SDLC tools"
        />
        <TechService
          title={"Hosting"}
          icon={[
            {
              icon: <SiGooglecloud size={"40px"} color="blue" />,
              name: "Google Cloud",
            },
            { icon: <SiVercel size={"40px"} color="black" />, name: "Vercel" },
            {
              icon: <SiNetlify size={"40px"} color="black" />,
              name: "Netlify",
            },
          ]}
          description="I also use cloud computing and hosting provider"
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
              icon: <SiIstio color="blue" size={"40px"}/>,
              name: "Istio",
            },
            {
              icon: <SiPrometheus size={"40px"} color="red" />,
              name: "Prometheus",
            },
            { icon: <SiDocker size={"45px"} color="blue" />, name: "Docker" },
            { icon: <SiJaeger size={"40px"} color="cyan" />, name: "Jaeger" },
            { icon: <SiArgo size={"40px"} color="red" />, name: "Argo" },
            {
              icon: <SiGrafana size={"40px"} color="orange" />,
              name: "Grafana",
            },
            {
              icon: <SiAnsible size={"40px"} color="black" />,
              name: "Ansible",
            },
            {
              icon: <SiElasticsearch size={"40px"} color="black" />,
              name: "Elasticsearch",
            },
            {
              icon: <SiLogstash size={"40px"} color="black" />,
              name: "Logstash",
            },
            { icon: <SiKibana size={"40px"} color="black" />, name: "Kibana" },
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
            {
              icon: <SiCplusplus size={"40px"} color="darkBlue" />,
              name: "C++",
            },
            {
              icon: <FaJava color="red" size={"40px"}/>,
              name: "Java",
            },
          ]}
          description="I also learn this language to have know about low level programming"
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
            }
          ]}
          description="I am learning IOT,cross platform app, mobile app,AI,WASM,desktop app, low level language, blockchain"
        />
      </section>
    </div>
  );
};

export default Services;
