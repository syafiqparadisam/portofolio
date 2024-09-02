import AchievementImage from "../components/Achievement/AchievementImage";
import Headers from "../utils/Headers";
import sertiSolid from "../assets/serti_solid.png";
import sertiFitcom from "../assets/serti_fitcom.png";
import sertiAWSCloud from "../assets/sertidicodingaws.jpg";
import sertiDicodingDasar from "../assets/sertidicodingdasar.jpg";
import sertiGoogleCloud from "../assets/sertidicodinggooglecloud.jpg";
import sertiProgrammingLogic from "../assets/sertidicodinglogic.jpg";
import sertiJS from "../assets/sertidicodingjs.png";
import sertiBackend from "../assets/sertibackend.png";
import sertiC from "../assets/sertiC.png";

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
          <AchievementImage
            src={sertiJS}
            title={"Sertificate Completed Javascript basic"}
          />
          <AchievementImage
            src={sertiBackend}
            title={"Sertificate Completed Last Project create backend app"}
          />
          <AchievementImage
            src={sertiC}
            title={"Sertificate Completed C basic"}
          />
          <AchievementImage
            src={sertiSolid}
            title={"Sertificate Completed Solid Principle"}
          />
        </div>
      </div>
      <div className="w-full px-10 pt-16 flex flex-col justify-center text-white">
        <h1 className="font-bold text-2xl pb-2">Competition</h1>
        <hr className="w-full text-xl font-bold" />
        <div className="flex minilaptop:justify-start justify-center mx-auto items-center p-8 minilaptop:gap-20 gap-5 flex-wrap">
          <AchievementImage
            src={sertiFitcom}
            title={"Sertificate Finalis Fitcom In STIKOM Surabaya"}
          />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
