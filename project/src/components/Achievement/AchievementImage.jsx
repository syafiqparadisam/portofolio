import { useEffect, useState } from "react";

const AchievementImage = ({ src, title }) => {
	const [modalBox, setModalBox] = useState(false);
	
	useEffect(() => {
		console.log(window.innerWidth)
		if (modalBox == true && window.innerWidth < 810) {
			setModalBox(false);
		}
	}, [modalBox]);
	return (
		<>
			<img
				src={src}
				className="rounded-md border max-w-[300px] min-w-[200px] w-full border-white hover:scale-105 transition ease-in-out duration-300"
				onClick={() => {
					setModalBox(true)
					window.scrollTo({top: "300", behavior: "smooth"})
				}}
				data-aos="zoom-in"
			/>
			{modalBox && (
				<>
					<div
						className="absolute minilaptop:flex hidden flex-col bg-white rounded-xl z-40 p-1 w-1/2"
						style={{
							top: "50%",
							right: "50%",
							transform: "translateX(50%)",
						}}
						data-aos="zoom-in"
					>
						<div className="w-full flex relative p-3 items-center justify-start flex-wrap">
							<h1 className="minilaptop:text-lg text-sm font-bold text-black">
								{title}
							</h1>
							<button
								onClick={() => setModalBox(false)}
								className="absolute hover:bg-purple-300 font-bold rounded-lg z-50 minilaptop:py-1 py-0  px-1 bottom-2 minilaptop:px-3 text-center hp:text-xl text-sm minilaptop:text-3xl text-black right-1"
							>
								x
							</button>
						</div>
						<div className="flex w-full">
							<img src={src} className="rounded-md border border-white" />
						</div>
					</div>
				</>
			)}
		</>
	);
};

AchievementImage.propTypes = {
	
}

export default AchievementImage;
