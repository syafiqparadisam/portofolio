import Headers from "../utils/Headers";
import LayoutImageAndText from "../utils/LayoutImageAndText";
import peopleThinking from "/picture/illustration/peoplethinking.webp";
import instagramDm from "/picture/illustration/instagramdm.webp";
import programming from "/picture/illustration/programmer-illustration.webp";
import webreview from "/picture/illustration/webreview.webp";
import Seo from "../components/Seo";

const HowToOrder = () => {
  return (
    <>
      <Seo
        title="How to order"
        description={"Instruction how to order my work"}
        name={"How to order"}
        type={"website"}
      />
      <div className="flex w-full h-full flex-col">
        <Headers
          title={
            "Here You Can Read The Instruction about How To Order My Service"
          }
        />
        <section className="flex flex-col w-full h-full">
          <LayoutImageAndText
            position={"left"}
            description="
					Before ordering my services, please consider the idea of what kind of website you want. Look for references—what is the website about, what colors are used, and how is the system or flow designed, you can write it into pdf or microsoft word.
					"
            image={peopleThinking}
            link={false}
            alt={"peoplethinking"}
            bgColor={"bg-purple-300"}
            cursor={"cursor-default"}
          />
          <LayoutImageAndText
            position={"left"}
            image={instagramDm}
            description="
					The second option is to direct message me on my Instagram or freelancer site, providing a clear and detailed description, and budget do you have to create a website. Additionally, share a file containing information about the system of the desired website. If you are confident, you can accept my bid.
					"
            alt={"Instagram-DM-illustration"}
            cursor={"cursor-default"}
          />
          <LayoutImageAndText
            position={"left"}
            description="
					The third option is for me to create the user interface and show it to you. If the website's appearance aligns with your vision, we can schedule a meeting to discuss further. As for the technology, I typically use Node.js for the backend and React.js for the frontend. If you agree, you can accept me as your developer.
					"
            image={programming}
            alt={"illustration-programmer"}
            bgColor={"bg-purple-300"}
            cursor={"cursor-default"}
          />
          <LayoutImageAndText
            position={"left"}
            description="
					The Last is for me to showcase the results through recorded videos. If possible, we can have a meeting afterward. If there's anything that doesn't quite match your expectations, please let me know immediately so that I can make quick adjustments.
					When you're done, please confirm that the job has been completed, and don't forget to leave a rating.
					"
            cursor={"cursor-default"}
            image={webreview}
            alt={"review web to client"}
          />
        </section>
      </div>
    </>
  );
};

export default HowToOrder;
