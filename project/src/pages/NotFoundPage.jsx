import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes  from "../routes";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
  const interval = setInterval(() => {
    setTime((prev) => {
      if (prev <= 1) {
        clearInterval(interval);
        navigate("/");
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval); // cleanup
}, [navigate]);


  return (

    <div className="flex flex-col items-center h-screen">
      <img
        src="https://res.cloudinary.com/dktwq4f3f/image/upload/v1716340580/notfound_s2tqyt.jpg"
        className="w-[500px] mt-5"
        alt="Not Found Image"
      />

      <h1 className="font-bold text-[50px]">Not Found</h1>
      <p className="font-bold text-[20px]">
        Automatically back to home in <span id="time">{time}</span>s
      </p>

      <button
        onClick={() => navigate(routes["home"])}
        className="flex items-center mt-3 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-700 transition"
      >
       <FaArrowLeft className="mr-2" />
        Back
      </button>
    </div>
  );
};

export default NotFoundPage;
