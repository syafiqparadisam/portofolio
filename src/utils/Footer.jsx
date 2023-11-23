import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsTiktok,
	BsYoutube,
} from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { BiCopyright } from "react-icons/bi";
import { TbClockBolt } from 'react-icons/tb';

const Footer = () => {
	const goto = (Top) => {
		window.scrollTo({
			top: Top,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="w-full flex flex-col shadow-lg bg-purple-800 tablet:pt-5 pt-10 text-white bg-right bg-no-repeat bg-cover">
			<div className="flex justify-around w-full h-full items-center tablet:items-start pb-8 tablet:px-0 px-2 uppercase flex-wrap tablet:gap-0 gap-10">
				<div className="flex leading-7 text-left flex-col items-start tablet:justify-start">
					<h1 className="font-bold text-lg mb-2">Menu</h1>
					<Link to={"/"}>Home</Link>
					<Link to={"/project"}>Projects</Link>
					<Link to={"/testimoni"}>Testimoni</Link>
					<Link to={"/contact"}>Contact</Link>
					<Link to={"/services"}>Services</Link>
					<Link to={"/howToOrder"}>Instruction</Link>
					<Link to={"/achievement"}>Achievement</Link>
				</div>
				<div className="flex leading-7 text-left flex-col items-start tablet:justify-start">
					<h1 className="font-bold text-lg mb-2">Services</h1>
					<Link to={"/services"}>
						<p>Web develop</p>
					</Link>
					<Link to={"/services"}>
						<p>Refactor code</p>
					</Link>
					<Link to={"/services"}>
						<p>React Developer</p>
					</Link>
					<Link to={"/services"}>
						<p>Nodejs Developer</p>
					</Link>
					<Link to={"/services"}>
						<p>Golang Developer</p>
					</Link>
				</div>
				<div className="flex flex-col leading-7 text-left items-start tablet:justify-start">
					<h1 className="font-bold text-lg mb-2">About Us</h1>
					<Link to={""}>
						<p>EXPERIENCE</p>
					</Link>

					<a href="http://smkantartika2-sda.sch.id">
						<p>SCHOOL</p>
					</a>
					<a href="https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ==">
						<p>TEAMS</p>
					</a>
				</div>
				<div className="flex leading-7 tablet:text-left flex-col text-center items-start tablet:justify-start">
					<h1 className="font-bold text-lg mb-2">Achievement</h1>
					<Link to={"/achievement"}><p>DICODING</p></Link>
					<p>FREECODECAMP</p>
					<p>LEETCODE</p>
					<p>W3SCHOOLS</p>
					<p>Others</p>
				</div>
			</div>
			<div className="w-full flex flex-col bg-purple-500 justify-center items-center font-bold opacity-40 font-mono pt-3 gap-1">
				<div className="flex items-center gap-4">
					<a href="https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ==">
						<div className="rounded-full border-white border-2 border-solid p-2">
							<BsInstagram size={"25px"} />
						</div>
					</a>
					<a href="https://www.tiktok.com/@fikkzketchee?lang=id-ID">
						<div className="rounded-full border-white border-2 border-solid p-2">
							<BsTiktok size={"25px"} />
						</div>
					</a>
					<a href="https://github.com/syafiqparadisam">
						<div className="rounded-full border-white border-2 border-solid p-2">
							<BsGithub size={"25px"} />
						</div>
					</a>
					<a href="">
						<div className="rounded-full border-white border-2 border-solid p-2">
							<BsLinkedin size={"25px"} style={{ backgroundColor: "none" }} />
						</div>
					</a>
				</div>
				<div className="flex items-center gap-1 pt-2">
					<BiCopyright />
					<p>Copyright 2023 All Right Reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
