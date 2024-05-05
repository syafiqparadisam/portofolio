const CardTestimonial = ({ user, inisial,bgColor,ulasan }) => {
	return (
		<div data-aos="zoom-in" className="tablet:w-96 w-full tablet:mx-0 mx-5 flex flex-col items-start shadow-xl rounded-lg pb-10 p-2  hover:bg-gray-300">
			<div className="flex w-full text-left pb-3 gap-2 items-center justify-start">
				<div className={`rounded-full text-white ${bgColor ? bgColor : "bg-green-500"} w-10 h-10 text-center font-bold flex items-center justify-center`}>
					{inisial}
				</div>
				<h4 className="font-bold text-xl">{user}</h4>
			</div>
			<div className="w-4/5 mx-auto flex items-center justify-start">
				<p className="w-full h-20 overflow-hidden">{ulasan}</p>
			</div>
		</div>
	);
};
export default CardTestimonial;
