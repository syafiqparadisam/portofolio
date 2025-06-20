import AchievementImage from "../components/Achievement/AchievementImage";
import Headers from "../utils/Headers";
import sertiSolid from "/picture/certified/serti_solid.webp";
import sertiFitcom from "/picture/certified/serti_fitcom.webp";
import sertiAWSCloud from "/picture/certified/sertidicodingaws.webp";
import sertiDicodingDasar from "/picture/certified/sertidicodingdasar.webp";
import sertiGoogleCloud from "/picture/certified/sertidicodinggooglecloud.webp";
import sertiProgrammingLogic from "/picture/certified/sertidicodinglogic.webp";
import sertiJS from "/picture/certified/sertidicodingjs.webp";
import sertiBackend from "/picture/certified/sertibackend.webp";
import sertiC from "/picture/certified/sertiC.webp";
import sertiCodehero from "/picture/certified/serti-codehero.webp";
import sertiDevops from "/picture/certified/sertidicodingdevops.webp";
import sertiJaringan from "/picture/certified/sertidicodingnetworking.webp";
import sertiCynation from "/picture/certified/serticynation.webp";
import sertiLksCyberSidoarjo from "/picture/certified/sertilkscybersidoarjo.webp";
import sertiLksCyberJatim from "/picture/certified/sertilksjatimcyber.webp";
import Seo from "../components/Seo";

const Achievement = () => {
  return (
    <>
      <Seo
        title="Achiviement"
        description={
          "List of my achiviement"
        }
        name={"Achiviement Syafiq"}
        type={"website"}
      />
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
            <AchievementImage src={sertiDevops} />
            <AchievementImage src={sertiJaringan} />
          </div>
        </div>
        <div className="w-full px-10 pt-16 flex flex-col justify-center text-white">
          <h1 className="font-bold text-2xl pb-2">Competition</h1>
          <hr className="w-full text-xl font-bold" />
          <div className="flex minilaptop:justify-start justify-center mx-auto items-center p-8 minilaptop:gap-20 gap-5 flex-wrap">
            <AchievementImage src={sertiFitcom} />
            <AchievementImage src={sertiCodehero} />
            <AchievementImage src={sertiCynation} />
            <AchievementImage src={sertiLksCyberSidoarjo} />
            <AchievementImage src={sertiLksCyberJatim} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
