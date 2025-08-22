import LayoutImageAndText from "../utils/LayoutImageAndText";
import Headers from "../utils/Headers";
import ramadhanWebsite from "/picture/project/ramadhanweb.webp";
import kosloka from "/picture/project/kosloka.webp";
import paymentku from "/picture/project/paymentku.webp";
import ospfCisco from "/picture/project/ospfcisco.webp";
import vlanCisco from "/picture/project/vlancisco.webp";
import Seo from "../components/Seo";
import tokoMadura from '/picture/project/tokomadura.webp'

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
          link={"https://ramadhan.syafiq-paradisam.my.id"}
          description="This is my first website that i've created using HTML, CSS, bootstrap. This website was created during a middle school assignment presentation about our favorite subject, and I love religious studies. Armed with little knowledge about website development, namely HTML and CSS, I dared to embark on this project. While other classmates used PowerPoint for their presentations, I created a website. It was an extraordinary experience for me, especially since it was my first time creating a website, Now you can see this website on"
        />
        <LayoutImageAndText
          position={"right"}
          image={paymentku}
          description="This is a payment website that provide you transfer and topup money, pay bill, topup games. I created this website with microservices architecture using ReactJS, NestJS, Golang, Redis, MySQL. This is my big project"
        />
        <LayoutImageAndText
          position={"left"}
          image={kosloka}
          bgColor={"bg-purple-300"}
          link={"https://kosloka.global-inovasi.com"}
          description="This is a project that i've created when i was intern at software house in sidoarjo, I created this website with laravel filament, mysql. The features included login,register, invoice generate, verification bill, permission, etc"
        />
        <LayoutImageAndText
          position={"right"}
          image={tokoMadura}
          description="This is an eccomerce website of madura shop. The features included CRUD product, price, and stock management. I created with laravel and mysql"
        />
        <LayoutImageAndText
          position={"left"}
          image={vlanCisco}
          bgColor={"bg-purple-300"}
          description="I built a VLAN network topology in Cisco Packet Tracer using inter-VLAN routing. The setup includes a main switch connected via one trunk link to a router (Router-on-a-Stick configuration), and two additional trunk links to child switches. Each VLAN is configured to segment the network logically, and inter-VLAN communication is enabled through subinterfaces on the router. This setup allows devices in different VLANs to communicate efficiently across multiple switches."
        />
        <LayoutImageAndText
          position={"right"}
          image={ospfCisco}
          description="I created a routing simulation using OSPF in Cisco Packet Tracer with several main routers connected through a public network. Each router was configured with a different public IP, and NAT was implemented to translate private IPs to public ones, allowing clients to access the internet. Additionally, I set up a DNS server to ensure proper domain resolution across the entire network."
        />
      </div>
    </>
  );
};

export default Projects;
