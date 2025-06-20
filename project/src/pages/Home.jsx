import Branding from "../components/Home/Branding";

import SeeMyPortofolio from "../components/Home/SeeMyPortofolio";
import AboutSection from "../components/Home/AboutSection";
import Seo from "../components/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Home"
        description={
          "Introduce myself, myschool,and myexperience to programming,cyber security, and networking stuff"
        }
        name={"Syafiq Portofolio"}
        type={"website"}
      />
      <Branding />
      <AboutSection />
      <SeeMyPortofolio />
    </>
  );
};

export default Home;
