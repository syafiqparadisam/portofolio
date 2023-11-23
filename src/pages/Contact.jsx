import Formcontrol from "../components/Contact/Formcontrol";
import { BsGithub, BsInstagram, BsTiktok, BsLinkedin } from "react-icons/bs";

const Contact = () => {
	return (
		<div
			className="flex w-full h-full flex-col py-10"
			style={{
				backgroundImage:
					"radial-gradient(circle,#7800b2, #7300aa, #6d00a2, #68009a, #630080)",
			}}
		>
			<div className="w-full flex justify-center text-center mb-10">
				<h1 className="text-4xl text-purple-200 font-bold">Contact Me</h1>
			</div>
			<div className="flex flex-wrap justify-center w-4/5 rounded-lg mx-auto items-center shadow-2xl">
				<div className="minilaptop:flex hidden w-1/2 flex-col justify-center items-start py-6 px-10 h-full mx-auto text-left uppercase">
					<div className="w-full text-left leading-3">
						<h1 className="font-bold text-white text-2xl text-left">
							M. SYAFIQ PARADISAM
						</h1>
						<h1 className="font-bold mt-3 text-white text-xl text-left">
							E-MAIL :
						</h1>
						<p className="font-medium text-white text-lg text-left lowercase">
							syafiqparadisam@gmail.com
						</p>
						<h1 className="font-bold mt-3 text-white text-xl text-left">
							LOCATION :
						</h1>
						<p className="font-medium text-white text-lg text-left">
							Sidoarjo, East Java Indonesia
						</p>
						<div className="flex gap-3 items-center justify-start py-3">
							<a href="https://github.com/syafiqparadisam">
								<BsGithub size="30px" />
							</a>
							<a
								className="mx-2"
								href="https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ=="
							>
								<BsInstagram size="30px" />
							</a>
							<a href="https://www.tiktok.com/@fikkzketchee?lang=id-ID">
								<BsTiktok size="30px" />
							</a>
							<a className="mx-2" href="">
								<BsLinkedin size="30px" />
							</a>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center minilaptop:w-1/2 w-full h-full flex-col">
					<Formcontrol />
				</div>
			</div>
		</div>
	);
};

export default Contact;
