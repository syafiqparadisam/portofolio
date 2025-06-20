import Seo from "../components/Seo";
import CardTestimonial from "../components/Testimonials/CardTestimonial";
import Headers from "../utils/Headers";

const Testimonial = () => {
  return (
    <>
      <Seo
        title={"Testimonial"}
        name={"Testimonial Portofolio"}
        description={"Testimony of my website and from real people"}
        type={"website"}
      />
      <div
        id="services"
        className="h-full justify-center flex flex-col items-center"
      >
        <Headers title={"What Our Clients Say: Testimonials of Excellence"} />
        <div className="flex flex-wrap gap-10  justify-center items-center bg-purple-100 hp:mx-0 mx-10 py-16 w-full">
          <CardTestimonial
            user={"Rodhi lasita"}
            bgColor={"bg-blue-700"}
            inisial={"RP"}
            ulasan={"They created a beautiful website for me, thanks so much"}
          />
          <CardTestimonial
            user={"Rika"}
            inisial={"RI"}
            bgColor={"bg-red-400"}
            ulasan={
              "My experience with this website development service has been incredibly satisfying."
            }
          />
          <CardTestimonial
            user={"Abi Mansur"}
            inisial={"AB"}
            bgColor={"bg-black"}
            ulasan={
              "Developer was so kind. Efficient communication and friendly customer service make the process enjoyable."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
