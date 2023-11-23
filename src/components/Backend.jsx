import { FaLaravel, FaNodeJs } from "react-icons/fa";
import {
	SiLaravel,
	SiMysql,
	SiMongodb,
	SiPrisma,
	SiExpress,
} from "react-icons/si";
import TechSkill from "./Home/TechSkill";
const Backend = () => {
	return (
		<section id="backend" className="flex w-full py-10">
			<div style={{ width: "90%" }} className="mx-auto flex justify-around">
				<div className="flex w-3/5 items-center text-left font-medium">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
						est fuga officia provident labore cum excepturi fugit ullam, quasi
						possimus quis totam delectus cupiditate repellendus dolore corrupti
						rerum libero eligendi odio ipsa? Praesentium dignissimos eligendi ad
						odio voluptatum dolorum nostrum architecto animi, unde consectetur
						aliquid nobis fugiat quia. Officiis incidunt ipsa officia nam autem
						delectus iste sunt dolorem suscipit aut, quaerat nisi libero impedit
						cupiditate eligendi porro ipsum a reprehenderit odio ad fugit
						molestiae? Qui voluptates veritatis sed maxime deserunt cumque
						autem, suscipit architecto voluptatem exercitationem, repudiandae,
						cum dolorum. Labore aperiam laudantium totam expedita quae delectus
						eligendi reprehenderit dolorem veniam.
					</p>
				</div>
				<div
					className="flex rounded-md items-center flex-col text-center e py-14"
					data-aos="fade-left"
				>
					<div className="flex">
						<p className="font-bold text-2xl">Backend</p>
					</div>
					<div className="flex justify-between items-center flex-col w-full">
						<div className="flex justify-between">
							<TechSkill
								icon={<FaNodeJs size="40px" color="red" />}
								text="HTML"
							/>
							<TechSkill
								icon={<FaLaravel size="40px" color="blue" />}
								text="CSS"
							/>
						</div>
						<div className="flex justify-between">
							<TechSkill
								icon={<FaNodeJs size="40px" color="yellow" />}
								text="JS"
							/>
							<TechSkill
								icon={<SiPrisma size="40px" color="blue" />}
								text="BS"
							/>
						</div>
						<div className="flex justify-center">
							<TechSkill
								icon={<SiExpress size="40px" color="skyBlue" />}
								text="CHAKRA UI"
							/>
							<TechSkill
								icon={<SiMysql size="40px" color="skyBlue" />}
								text="REACTJS"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Backend;
