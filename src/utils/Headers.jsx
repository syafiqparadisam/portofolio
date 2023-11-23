const Headers = ({ title, description }) => {
	return (
		<header
			className="flex flex-col overflow-hidden shadow-xl h-48 text-white leading-4 justify-center py-10 items-center w-full tablet:py-20"
			style={{
				backgroundImage:
					"radial-gradient(circle,#7800b2, #7300aa, #6d00a2, #68009a, #630080)",
			}}
		>
			<h1 className="font-bold minilaptop:w-3/5 w-4/5 text-center tablet:mb-4 mb-0 minilaptop:text-4xl tablet:text-3xl text-2xl">
				{title}
			</h1>
			{description ? (
				<>
					<p className="font-medium minilaptop:block hidden tablet:w-2/5 minilaptop:w-4/5 w-full tablet:text-lg text-xs text-center">
						{description}
					</p>
				</>
			) : null}
		</header>
	);
};

export default Headers;
