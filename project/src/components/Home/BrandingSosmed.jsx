
const BrandingSosmed = ({link, icon, animate}) => {
  return (
		<li className="minilaptop:p-4 p-3 minilaptop:-mr-20"  data-aos={animate ? animate : "fade-left line"}>
			<p className="font-bolder text-md">
				<a href={link}>
                    {icon}
				</a>
			</p>
		</li>
	);
}

export default BrandingSosmed