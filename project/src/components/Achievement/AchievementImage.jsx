import { useRef, useEffect, useState } from "react";

const AchievementImage = ({ src, title }) => {
  const [modalBox, setModalBox] = useState(false);

  const modalRef = useRef();
  // Function to close modal if clicked outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalBox(false);
    }
  };
  useEffect(() => {
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
      <img
        src={src}
        className="cursor-pointer rounded-md shadow-lg border max-w-[300px] min-w-[200px] w-full border-white hover:scale-105 transition ease-in-out duration-300"
        onClick={() => {
          setModalBox(true);
          window.scrollTo({ top: "300", behavior: "smooth" });
        }}
        data-aos="zoom-in"
      />
      {modalBox && (
        <div
          className="fixed z-10 top-28 bg-white minilaptop:flex rounded-lg hidden"
          style={{right: "400px"}}
          ref={modalRef}
        >
          <div className="flex p-3 flex-col items-center justify-start flex-wrap">
            <h1 className="minilaptop:text-lg py-2 text-sm font-bold text-wrap text-black">
              {title}
            </h1>
            <img
              src={src}
              className="rounded-md border border-white"
              width={"500px"}
            />
          </div>
        </div>
      )}
    </>
  );
};

AchievementImage.propTypes = {};

export default AchievementImage;
