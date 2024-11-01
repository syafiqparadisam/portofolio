import LayoutImageAndText from "../utils/LayoutImageAndText";
import Headers from "../utils/Headers";
import ramadhanWebsite from "../assets/ramadhanWebsite.png";
import eccomerseWebsite from "../assets/eccomerse2.jpg";

const Projects = () => {
  return (
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
      <LayoutImageAndText
        position={"right"}
        video={
          "https://res.cloudinary.com/dktwq4f3f/video/upload/v1716439798/lv_0_20240523101204_lelo6d.mp4"
        }
        description="This is a payment website that provide you transfer and topup money, pay bill, topup games. I created this website with microservices architecture using ReactJS, NestJS, Golang, Gofiber, Redis, MySQL, and i monitor this website using prometheus and jaeger. This website is already done, but i haven't deploy it, because to deploy this website we must rent a VPS. I plan to adding more features such as topup with real money, transfer real money, topup games, and pay bill"
      />
      <LayoutImageAndText
        position={"left"}
        image={eccomerseWebsite}
        bgColor={"bg-purple-300"}
        description="This is a Ecommerce website, this website we build by two people, i am frontend and designing database, and myfriend is backend. We created this website using MySQL, ExpressJS, ReactJS, and NodeJs. The existing features include login, register, get product, filter product, add to cart."
      />
    </div>
  );
};

export default Projects;
