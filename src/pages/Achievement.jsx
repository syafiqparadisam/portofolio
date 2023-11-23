import AchievementImage from "../components/Achievement/AchievementImage"
import Headers from "../utils/Headers"
import sertiAWSCloud from "/src/assets/sertidicodingaws.jpg"
import sertiDicodingDasar from "/src/assets/sertidicodingdasar.jpg";
import sertiGoogleCloud from "/src/assets/sertidicodinggooglecloud.jpg";
import sertiProgrammingLogic from "/src/assets/sertidicodinglogic.jpg";

const Achievement = () => {
  return (
		<div className="flex w-full flex-col h-full bg-purple-400">
			<Headers
				title={"Achievement"}
				description={
					"We are proud to announce the various achievements that we have successfully attained in our journey. With dedication and hard work, we have reached several significant milestones. "
				}
			/>
			<div className="w-full px-10 pt-16 flex flex-col justify-start text-white">
				<h1 className="font-bold text-2xl pb-2">Dicoding</h1>
				<hr className="w-full text-xl font-bold" />
				<div className="flex minilaptop:justify-start justify-center items-center p-8 minilaptop:gap-20 gap-5 flex-wrap">
					<AchievementImage
						src={sertiAWSCloud}
						title={"Sertificate Completed Aws Cloud"}
					/>
					<AchievementImage
						src={sertiDicodingDasar}
						title={"Sertificate Completed Basic Fundamental Programming"}
					/>
					<AchievementImage
						src={sertiGoogleCloud}
						title={"Sertificate Completed Google Cloud"}
					/>
					<AchievementImage
						src={sertiProgrammingLogic}
						title={"Sertificate Completed Programming Logic"}
					/>
				</div>
			</div>
		</div>
	);
}

export default Achievement