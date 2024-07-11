import { useState, useEffect } from "react";

const TechService = ({
  title,
  icon,
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut beatae",
}) => {
  const [modalBox, setModalBox] = useState(false);

  useEffect(() => {
    if (modalBox == true && window.innerWidth < 810) {
      setModalBox(false);
    }
  }, [modalBox]);

  return (
    <>
      <div
        onClick={() => setModalBox(true)}
        className="lg:w-1/4 minilaptop:w-1/3 w-4/5 hp:m-0 mx-auto bg-white flex flex-wrap tablet:justify-start justify-center flex-col minilaptop:items-start items-center shadow-xl rounded-lg p-4 border-solid hover:bg-gray-300"
      >
        <div className="flex w-full text-left pb-3 tablet:items-start items-center flex-col justify-center">
          <h4 className="font-bold text-xl text-left">{title}</h4>
          <p className="text-sm pt-2 font-light text-left">{description}</p>
        </div>
        <div className="flex items-start gap-1 justify-start flex-wrap">
          {icon.map((i) => i.icon)}
        </div>
      </div>
    </>
  );
};

export default TechService;
