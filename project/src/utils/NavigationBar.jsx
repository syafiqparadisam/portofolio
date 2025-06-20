import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { SlMenu } from "react-icons/sl";
import "../index.css";

const NavigationBar = () => {
  const [dropdown, setDropDown] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const [transition, setTransition] = useState(
    "minilaptop:translate-x-0 translate-x-[1000px] w-full"
  );
  const [arrow, setArrow] = useState();

  window.document.body.onclick = (e) => {
    if (e.target.classList.contains("others")) {
      setTransition("minilaptop:translate-x-0 translate-x-[0px] w-full");
    }
    if (
      !e.target.classList.contains("sidebar") &&
      !e.target.classList.contains("menubar") &&
      !e.target.classList.contains("menubarsvg") &&
      !e.target.classList.contains("others")
    ) {
      setHamburgerMenu(false);
      setTransition("minilaptop:translate-x-0 translate-x-[1000px] w-full");
    }
    return;
  };

  useEffect(() => {
    if (hamburgerMenu && window.innerWidth >= 700) {
      setTransition("minilaptop:translate-x-0 translate-x-[1000px] w-full");
    }
    if (window.innerWidth >= 700) {
      setHamburgerMenu(false);
    }
  }, [hamburgerMenu]);

  return (
    <nav
      className={`w-full flex items-center flex-row shadow-4xl minilaptop:sticky relative`}
      style={{
        backgroundImage:
          "radial-gradient(circle, #7800b2, #7300aa, #6d00a2, #68009b, #630093)",
      }}
    >
      <div className="minilaptop:m-5 m-2 flex minilaptop:justify-center items-center justify-between minilaptop:w-36 w-full">
        <Link
          to={"/"}
          aria-label=""
          className="text-white font-helvetica font-bold  font-mono text-2xl flex"
        >
          <FaCode color="black" />
          Syafiq
        </Link>
        {/* HAMBURGER MENU */}
        <button
          name="hamburgermenu"
          className="minilaptop:hidden block hover:bg-purple-500 p-3 rounded-lg menubar"
          onClick={() => {
            setHamburgerMenu((v) => !v);
            if (hamburgerMenu) {
              setTransition("translate-x-[1000px] w-full");
            } else {
              setTransition(
                "minilaptop:translate-x-0 translate-x-[0px] w-full"
              );
            }

            return;
          }}
        >
          <SlMenu
            className="menubarsvg"
            color="white"
            size={"25px"}
            style={{ fontWeight: "bolder" }}
          />
        </button>
      </div>
      <div
        className={`flex minilaptop:pl-0 minilaptop:static z-50 absolute justify-start w-full items-start flex-col minilaptop:flex-row `}
      >
        <ol
          className={`flex items-center others transition-transform duration-200 ease-in-out  font-semibold minilaptop:bg-none bg-primary minilaptop:rounded-none rounded-sm minilaptop:gap-0 ${transition} minilaptop:static absolute top-8 flex-col minilaptop:flex-row `}
        >
          <li className="text-white minilaptop:text-white minilaptop:hidden flex rounded-md minilaptop:w-28 w-full minilaptop:text-center text-left font-medium hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to="/"
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Home
            </Link>
          </li>
          <li className="text-white minilaptop:text-white flex rounded-md minilaptop:w-28 w-full minilaptop:text-center text-left font-medium hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to="/project"
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Project
            </Link>
          </li>

          <li className="text-white minilaptop:text-white rounded-md minilaptop:text-center flex minilaptop:w-28 w-full text-left font-medium hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to="/contact"
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Contact
            </Link>
          </li>
          <li className="text-white minilaptop:text-white flex rounded-md minilaptop:text-center minilaptop:w-28 w-full text-left font-medium  hover:bg-purple-500 hover:text-white hover:transition-colors">
            <Link
              to="/services"
              className="w-full py-2 text-lg h-full px-6 minilaptop:px-0"
            >
              Services
            </Link>
          </li>
          <li
            onClick={() => {
              setTransition(
                "minilaptop:translate-x-0 translate-x-[0px] w-full"
              );
              setDropDown(true);
            }}
            onMouseOver={() => {
              setDropDown(true);
              setArrow("rotate-180 transition ease-in-out duration-100");
            }}
            onMouseOut={() => {
              setDropDown(false);
              setArrow("rotate-0 transition ease-in-out duration-100");
            }}
            className="relative others minilaptop:text-white minilaptop:justify-center justify-start minilaptop:w-fit w-full flex minilaptop:text-center text-left text-white text-lg rounded-md py-2 minilaptop:px-3 font-medium hover:bg-purple-500 hover:text-white hover:transition-all items-center pl-6"
          >
            Others
            <RiArrowDropDownLine
              size={"30px"}
              className={`${arrow} minilaptop:block hidden`}
            />
            {dropdown && hamburgerMenu === false && (
              <>
                <div
                  onMouseOver={() => {
                    setDropDown(true);
                    setArrow("rotate-180 transition ease-in-out duration-100");
                  }}
                  onMouseOut={() => {
                    setDropDown(false);
                    setArrow("rotate-0 transition ease-in-out duration-100");
                  }}
                  className="text-black w-44 minilaptop:absolute flex flex-col rounded-md bg-purple-800 shadow-xl"
                  style={{
                    top: "46px",
                    left: "0%",
                  }}
                >
                  {/* For Large Device */}
                  <div className="minilaptop:flex hidden flex-col w-full h-full justify-center items-start">
                    <Link
                      to={"/HowToOrder/"}
                      className="flex justify-start font-semibold text-sm text-white text-left items-center rounded-t-md px-2 hover:bg-purple-300 w-full py-3 h-full"
                    >
                      <div>Instruction</div>
                    </Link>
                    <Link
                      to={"/testimoni"}
                      className="flex justify-start font-semibold text-sm text-white text-left items-center rounded-md px-2 hover:bg-purple-300 w-full py-3 h-full"
                    >
                      <div>Testimoni</div>
                    </Link>
                    <Link
                      to={"/achievement"}
                      className="flex justify-start font-semibold text-sm text-white text-left items-center rounded-md px-2 hover:bg-purple-300 w-full py-3 h-full"
                    >
                      <div>Achievement</div>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </li>
          {/* For Mini Device */}

          {dropdown && hamburgerMenu && window.innerWidth < 700 && (
            <div
              className="flex flex-col w-full"
              onMouseOver={() => {
                setDropDown(true);
                setArrow("rotate-180 transition ease-in-out duration-100");
              }}
              onMouseOut={() => {
                setDropDown(false);
                setArrow("rotate-0 transition ease-in-out duration-100");
              }}
            >
              <div className="flex w-full items-center justify-start h-full rounded-md hover:bg-purple-500 hover:text-white ">
                <Link
                  to={"/HowToOrder/"}
                  className="font-semibold w-full text-sm text-white pl-10 text-left py-3 "
                >
                  Instruction
                </Link>
              </div>
              <div className="flex w-full items-center justify-start h-full rounded-md hover:bg-purple-500 hover:text-white">
                <Link
                  to={"/testimoni"}
                  className="font-semibold w-full text-sm text-white pl-10 text-left py-3 "
                >
                  Testimoni
                </Link>
              </div>
              <div className="flex w-full items-center justify-start h-full rounded-md hover:bg-purple-500 hover:text-white">
                <Link
                  to={"/achievement"}
                  className="font-semibold w-full text-sm text-white pl-10 text-left py-3"
                >
                  Achievement
                </Link>
              </div>
            </div>
          )}
        </ol>
      </div>

      {/* SOSMED */}
      <div className="minilaptop:flex hidden items-center justify-center gap-1 mr-5">
        <a
          href="https://github.com/syafiqparadisam"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <div className="p-4">
            <BsGithub size={"25px"} color="white" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ=="
          target="_blank"
          rel="noreferrer"
          aria-label="instagram"
        >
          <div className="p-4">
            <BsInstagram size={"25px"} color="white" />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
