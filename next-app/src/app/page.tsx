import Image from "next/image";
import { BsInstagram, BsGithub, BsLinkedin, BsTiktok } from "react-icons/bs";
import Link from "next/link";
import programmerIlustration from "../assets/illustrationprogrammer-removebg-preview.png";

const Page = () => {
  return (
    <>
      <main
        className="h-screen lg:justify-around justify-center w-full items-center flex text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle, #7800b2, #7300aa, #6d00a2, #68009b, #630093)",
        }}
      >
        <div
          className="w-full items-center lg:justify-start justify-center flex"
          data-aos="fade-right"
        >
          <div className="minilaptop:m-20 :hpm-10 m-5 minilaptop:p-4">
            <ol className="minilaptop:mb-0 hp:mb-1 mb-3">
              <li
                className="minilaptop:p-4 p-3 minilaptop:-mr-20"
                data-aos={"fade-left line"}
              >
                <p className="font-bolder text-md">
                  <a href="https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ==">
                    <BsInstagram
                      color="red"
                      className="text-2xl minilaptop:text-3xl"
                    />
                  </a>
                </p>
              </li>
              <li
                className="minilaptop:p-4 p-3 minilaptop:-mr-20"
                data-aos={"fade-left line"}
              >
                <p className="font-bolder text-md">
                  <a href="https://github.com/syafiqparadisam">
                    <BsGithub
                      color="red"
                      className="text-2xl minilaptop:text-3xl"
                    />
                  </a>
                </p>
              </li>
              <li
                className="minilaptop:p-4 p-3 minilaptop:-mr-20"
                data-aos={"fade-left line"}
              >
                <p className="font-bolder text-md">
                  <a href="https://www.linkedin.com/in/syafiq-paradisam-b72749258">
                    <BsLinkedin
                      color="red"
                      className="text-2xl minilaptop:text-3xl"
                    />
                  </a>
                </p>
              </li>
              <li
                className="minilaptop:p-4 p-3 minilaptop:-mr-20"
                data-aos={"fade-left line"}
              >
                <p className="font-bolder text-md">
                  <a href="https://www.tiktok.com/@fikkzketchee?lang=id-ID">
                    <BsTiktok
                      color="red"
                      className="text-2xl minilaptop:text-3xl"
                    />
                  </a>
                </p>
              </li>
            </ol>
          </div>
          <div className="minilaptop:mr-0 mr-5">
            <h1
              className="minilaptop:text-4xl hp:text-2xl text-xl font-bold"
              data-aos="fade-right"
            >
              Hello I&rsquo;M Syafiq
              <br />
              I&rsquo;M A Fullstack Web Developer
            </h1>
            <p
              className="my-5 minilaptop:text-2xl tablet:text-xl text-md font-bolder font-poppins sm:text-md"
              data-aos="fade-right"
            >
              I Live In Sidoarjo, East Java Indonesia
              <br />I Will Make Your Better Website
            </p>
            <Link
              href="/services"
              className="shadow-4xl font-semibold bg-gray-200 text-purple-900 minilaptop:py-3 py-2 px-6 rounded-xl minilaptop:text-lg hp:text-sm text-xs"
              data-aos="fade-down"
            >
              Service
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="w-1/2 minilaptop:block hidden">
          <Image
            src={programmerIlustration}
            className="rounded-lg minilaptop:w-4/4"
            alt="profileku"
          />
        </div>
      </main>
      {/* <Branding /> */}
      {/* <AboutSection />
      <SeeMyPortofolio /> */}
    </>
  );
};

export default Page;
