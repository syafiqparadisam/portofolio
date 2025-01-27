const AchievementImage = ({ src }) => {
  return (
    <>
      <a href={src} target="_blank" rel="noreferrer">
        <img
          src={src}
          className="cursor-pointer rounded-md shadow-lg border max-w-[300px] min-w-[200px] w-full border-white hover:scale-105 transition ease-in-out duration-300"
          data-aos="zoom-in"
        />
      </a>
    </>
  );
};

AchievementImage.propTypes = {};

export default AchievementImage;
