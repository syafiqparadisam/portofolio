const LayoutImageAndText = ({
  image,
  description,
  position,
  bgColor,
  video,
  cursor,
  link,
  alt,
  color,
}) => {
  return (
    <section
      id="myproject"
      className={`flex justify-around w-full py-10 mx-auto items-center ${bgColor}`}
    >
      {position === "left" ? (
        <div className="flex-wrap flex minilaptop:justify-around justify-center w-4/5 mx-auto items-center">
          <div
            className={`mx-auto tablet:w-96 hp:w-72 w-48 hover:scale-105 hover:${
              cursor ? cursor : "cursor-pointer"
            } transition ease-in-out duration-300 h-full`}
          >
            {/* if use link user can click image and go to that link*/}
            {link ? (
              <>
                {/* if use image show image, if use video show video*/}
                {image ? (
                  <>
                    <img
                      onClick={() => window.open(link)}
                      src={image}
                      alt={alt}
                      width={"1600px"}
                      height={"900px"}
                      className="overflow-hidden mx-auto rounded-md minilaptop:mb-0 mb-2"
                      data-aos="zoom-in"
                    />
                  </>
                ) : (
                  <>
                    <video autoPlay loop muted>
                      <source src={video} type="video/mp4" />
                    </video>
                  </>
                )}
                {/* if use image show image, if use video show video*/}
              </>
            ) : (
              <>
                {/* if use image show image, if use video show video*/}
                {image ? (
                  <>
                    <img
                      src={image}
                      alt={alt}
                      width={"1600px"}
                      height={"900px"}
                      className="overflow-hidden mx-auto rounded-md minilaptop:mb-0 mb-2"
                      data-aos="zoom-in"
                    />
                  </>
                ) : (
                  <>
                    <video autoPlay loop muted>
                      <source src={video} type="video/mp4" />
                    </video>
                  </>
                )}
                {/* if use image show image, if use video show video*/}
              </>
            )}
            {/* if use link user can click image and go to that link*/}
          </div>

          <div className="minilaptop:text-left lg:block flex justify-between items-center text-center minilaptop:w-3/5 w-full mx-auto font-medium lg:mt-0 tablet:mt-5 mt-10">
            <p
              className={`minilaptop:ml-10 minilaptop:text-md lg:text-lg hp:text-sm text-xs ${
                color ? color : "text-black"
              }`}
              data-aos="fade-left"
            >
              {description}
              {link && (
                <>
                  <br />
                  <a
                    className={"text-blue-700 cursor-pointer"}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link}
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      ) : (
        /* For Position Right */
        <div
          className={`flex-wrap flex minilaptop:justify-around justify-center w-4/5 mx-auto items-center`}
        >
          <div className="minilaptop:text-left lg:block hidden justify-between items-center text-center minilaptop:w-3/5 w-full mx-auto font-medium lg:mb-0 tablet:mb-5 mb-10">
            <p
              className={`minilaptop:mr-10 minilaptop:text-lg ${
                color ? color : "text-black"
              } hp:text-sm text-xs`}
              data-aos="fade-right"
            >
              {description}
              {link && (
                <>
                  <br />
                  <a
                    className={"text-blue-700 cursor-pointer"}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link}
                  </a>
                </>
              )}
            </p>
          </div>
          <div
            className={`mx-auto tablet:w-96 hp:w-72 w-48 hover:scale-105 hover:${
              cursor ? cursor : "cursor-pointer"
            } transition ease-in-out duration-300 h-full`}
          >
            {/* if use link user can click image and go to that link*/}
            {link ? (
              <>
                {/* if use image show image, if use video show video*/}
                {image ? (
                  <>
                    <img
                      onClick={() => window.open(link)}
                      src={image}
                      alt={alt}
                      width={"1600px"}
                      height={"900px"}
                      className="overflow-hidden mx-auto rounded-md"
                      data-aos="zoom-in"
                    />
                  </>
                ) : (
                  <>
                    <video autoPlay loop muted>
                      <source src={video} type="video/mp4" />
                    </video>
                  </>
                )}
                {/* if use image show image, if use video show video*/}
              </>
            ) : (
              <>
                {/* if use image show image, if use video show video*/}
                {image ? (
                  <>
                    <img
                      src={image}
                      alt={alt}
                      width={"1600px"}
                      height={"900px"}
                      className="overflow-hidden mx-auto rounded-md minilaptop:mb-0 mb-2"
                      data-aos="zoom-in"
                    />
                  </>
                ) : (
                  <>
                    <video autoPlay loop muted>
                      <source src={video} type="video/mp4" />
                    </video>
                  </>
                )}
                {/* if use image show image, if use video show video*/}
              </>
            )}
            {/* if use link user can click image and go to that link*/}
          </div>
          <div className="minilaptop:text-left block lg:hidden justify-between items-center text-center minilaptop:w-3/5 w-full mx-auto font-medium lg:mt-0 tablet:mt-5 mt-10">
            <p
              className={`minilaptop:ml-10 lg:text-lg minilaptop:text-md hp:text-sm text-xs ${
                color ? color : "text-black"
              }`}
              data-aos="fade-right"
            >
              {description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LayoutImageAndText;
