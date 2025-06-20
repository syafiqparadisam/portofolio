import LayoutImageAndText from "../utils/LayoutImageAndText";
import Headers from "../utils/Headers";
import ramadhanWebsite from "/picture/project/ramadhanweb.webp";
import kosloka from "/picture/project/kosloka.webp";
import Seo from "../components/Seo";

const Projects = () => {
  return (
    <>
      <Seo
        title={"Project"}
        name={"Project Portofolio"}
        description={"Describe about my project during learning"}
        type={"website"}
      />
      <div
        id="project"
        className="w-full flex justify-center items-center flex-col h-full"
      >
        <Headers title={"My Project Gallery"} />
        <LayoutImageAndText
          position={"left"}
          bgColor={"bg-purple-300"}
          image={ramadhanWebsite}
          link={"https://ramadhanwebsite.netlify.app"}
          description="This is my first website that i've created using HTML, CSS, bootstrap. This website was created during a middle school assignment presentation about our favorite subject, and I love religious studies. Armed with little knowledge about website development, namely HTML and CSS, I dared to embark on this project. While other classmates used PowerPoint for their presentations, I created a website. It was an extraordinary experience for me, especially since it was my first time creating a website, Now you can see this website on"
        />
        {/* <LayoutImageAndText
        position={"right"}
        video={
          "https://res.cloudinary.com/dktwq4f3f/video/upload/v1716439798/lv_0_20240523101204_lelo6d.mp4"
        }
        description="This is a payment website that provide you transfer and topup money, pay bill, topup games. I created this website with microservices architecture using ReactJS, NestJS, Golang, Gofiber, Redis, MySQL, and i monitor this website using prometheus and jaeger. This website is already done, but i haven't deploy it, because to deploy this website we must rent a VPS. I plan to adding more features such as topup with real money, transfer real money, topup games, and pay bill"
      /> */}
        <LayoutImageAndText
          position={"right"}
          image={kosloka}
          link={"https://kosloka.global-inovasi.com"}
          description="This is a project that i've created when i was intern at software house in sidoarjo, I created this website with laravel filament, mysql. The features included login,register, invoice generate, verification bill, permission, etc"
        />
      </div>
    </>
  );
};

export default Projects;
