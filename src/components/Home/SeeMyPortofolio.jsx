import { Link } from "react-router-dom";

const SeeMyPortofolio = () => {
	return (
		<section
			id="check my portofolio"
			className="flex w-full text-white bg-bottom bg-cover bg-blue h-full py-24 justify-center flex-col items-center"
			style={{
				backgroundImage:
					"radial-gradient(circle, #7800b2, #7300aa, #6d00a2, #68009b, #630093)",
			}}
		>
			<div
				className="w-4/5 mx-auto text-center flex flex-col items-center"
				data-aos="fade-left"
			>
				<div className="font-bold text-2xl">
					<h1>See Full My Portofolio</h1>
				</div>
				<div className="text-center py-10 w-4/5 flex flex-wrap font-medium">
					<p>
						Are you curious to delve into my portfolio? Click here to explore a
						diverse range of projects that I&apos;ve had the privilege to work
						on. Each project reflects not only my technical skills but also the
						passion and dedication I invest in bringing ideas to life. Join me
						on this journey as we navigate through a collection of completed
						works, showcasing the depth and breadth of my capabilities.
					</p>
				</div>
				<div className="text-white">
					<Link to={"/project"} style={{ width: "25%" }}>
						<button
							type="button"
							className="px-8 bg-gray-200 text-purple-900 font-bold py-3 w-full rounded-md shadow-xl"
						>
							Project
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default SeeMyPortofolio;
