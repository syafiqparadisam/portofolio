import AchievementImage from "../components/Achievement/AchievementImage";
import Headers from "../utils/Headers";
import sertiSolid from "/images/serti_solid.png";
import sertiFitcom from "/images/serti_fitcom.png";
import sertiAWSCloud from "/images/sertidicodingaws.jpg";
import sertiDicodingDasar from "/images/sertidicodingdasar.jpg";
import sertiGoogleCloud from "/images/sertidicodinggooglecloud.jpg";
import sertiProgrammingLogic from "/images/sertidicodinglogic.jpg";
import sertiJS from "/images/sertidicodingjs.png";
import sertiBackend from "/images/sertibackend.png";
import sertiC from "/images/sertiC.png";
import sertiCodehero from "/images/serti-codehero.png"

const Achievement = () => {
  return (
    <div className="flex w-full flex-col h-full bg-purple-400">
      <Headers
        title={"Achievement"}
        description={
          "We are proud to announce the various achievements that we have successfully attained in our journey. With dedication and hard work, we have reached several significant milestones. "
        }
      />
      <div className="w-full px-10 pt-16 flex flex-col justify-center text-white">
        <h1 className="font-bold text-2xl pb-2">Dicoding</h1>
        <hr className="w-full text-xl font-bold" />
        <div className="flex minilaptop:justify-start justify-center mx-auto items-center p-8 minilaptop:gap-20 gap-5 flex-wrap">
          <AchievementImage src={sertiAWSCloud} />
          <AchievementImage src={sertiDicodingDasar} />
          <AchievementImage src={sertiGoogleCloud} />
          <AchievementImage src={sertiProgrammingLogic} />
          <AchievementImage src={sertiJS} />
          <AchievementImage src={sertiBackend} />
          <AchievementImage src={sertiC} />
          <AchievementImage src={sertiSolid} />
        </div>
      </div>
      <div className="w-full px-10 pt-16 flex flex-col justify-center text-white">
        <h1 className="font-bold text-2xl pb-2">Competition</h1>
        <hr className="w-full text-xl font-bold" />
        <div className="flex minilaptop:justify-start justify-center mx-auto items-center p-8 minilaptop:gap-20 gap-5 flex-wrap">
          <AchievementImage src={sertiFitcom} />
          <AchievementImage src={sertiCodehero} />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
