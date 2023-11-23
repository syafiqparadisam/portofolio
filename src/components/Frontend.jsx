import React from "react";
import TechSkill from "./Home/TechSkill";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import {
	SiJavascript,
	SiChakraui,
	SiReact,
	SiTailwindcss,
} from "react-icons/si";

const Frontend = () => {
	return (
		<section id="frontend" className="flex w-full py-10 bg-blue-500">
			<div style={{ width: "90%" }} className="mx-auto flex justify-around">
				<div className="w-2/5 px-10">
					<div
						className="flex rounded-md items-center flex-col text-center e py-14"
						data-aos="fade-left"
					>
						<div className="flex text-white">
							<p className="font-bold text-2xl">Frontend</p>
						</div>
						<div className="flex justify-between items-center flex-col w-full">
							<div className="flex justify-between">
								<TechSkill
									icon={<FaHtml5 size="40px" color="red" />}
									text="HTML"
								/>
								<TechSkill
									icon={<FaCss3Alt size="40px" color="blue" />}
									text="CSS"
								/>
							</div>
							<div className="flex justify-between">
								<TechSkill
									icon={<SiJavascript size="40px" color="yellow" />}
									text="JS"
								/>
								<TechSkill
									icon={<FaBootstrap size="40px" color="blue" />}
									text="BS"
								/>
							</div>
							<div className="flex justify-center">
								<TechSkill
									icon={<SiChakraui size="40px" color="skyBlue" />}
									text="CHAKRA UI"
								/>
								<TechSkill
									icon={<SiReact size="40px" color="skyBlue" />}
									text="REACTJS"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="w-3/5 flex items-center font-medium text-white">
					<p className="text-left">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, at.
						Eius iure veritatis sit? Inventore ipsam reprehenderit amet quod
						impedit animi dicta debitis, cupiditate corrupti perferendis eaque,
						nam recusandae suscipit nesciunt ex id. Nulla quae corporis
						similique doloremque impedit, vero sunt incidunt obcaecati sed
						repellat ullam neque, libero necessitatibus. Eaque dignissimos
						excepturi delectus magnam recusandae porro iure reiciendis! Ex sunt,
						veniam doloribus, quam alias illum quo suscipit sint ipsum beatae
						tenetur! Debitis repellat, voluptate, officia dolore architecto
						temporibus dolorem voluptatum totam, aliquid repudiandae sapiente
						possimus delectus ex beatae iure veniam? Quisquam magni eligendi
						quasi modi a cupiditate placeat quis eius.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Frontend;
