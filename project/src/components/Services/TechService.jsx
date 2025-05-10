import { useState, useEffect, useRef } from "react";

const TechService = ({
  title,
  icon,
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut beatae",
}) => {
  const [modalBox, setModalBox] = useState(false);
  const modalRef = useRef();

  // Function to close modal if clicked outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalBox(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the modal
    document.addEventListener("mousedown", handleClickOutside);
    if (modalBox == true && window.innerWidth < 810) {
      setModalBox(false);
    }

    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalBox]);

  return (
    <>
      <div
        onClick={() => setModalBox(true)}
        className="lg:w-1/4 cursor-pointer minilaptop:w-1/3 w-4/5 hp:m-0 mx-auto bg-white flex flex-wrap tablet:justify-start justify-center flex-col minilaptop:items-start items-center shadow-xl rounded-lg p-4 border-solid hover:bg-gray-300"
      >
        <div className="flex w-full text-left pb-3 tablet:items-start items-center flex-col justify-center">
          <h4 className="font-bold text-xl text-left">{title}</h4>
          <p className="text-sm pt-2 font-light text-left">{description}</p>
        </div>
        <div className="flex items-start gap-1 justify-start flex-wrap">
          {icon.map((i) => i.icon)}
        </div>
      </div>
      {modalBox && (
        <div className="fixed  max-w-2xl tablet:block hidden" ref={modalRef}>
          <div className="bg-white shadow-lg p-5 flex-wrap justify-center flex gap-10 rounded-lg">
            {icon.map((i) => {
              return (
                <div
                  className="flex items-center justify-center flex-col"
                  key={i.icon}
                >
                  <p>{i.icon}</p>
                  <p className="font-bold">{i.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TechService;
