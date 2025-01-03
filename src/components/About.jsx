import aboutBackground from "../assets/about-background.jpg";
import innerimg from "../assets/inner-img-3.png";

const About = () => {
  return (
    <div className="relative h-[600px] flex justify-center items-center flex-col text-white gap-4 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${aboutBackground})`,
          position: "fixed",
          zIndex: -1,
        }}
      ></div>

      <h4 className="text-xl">Upon the Ruins of Time</h4>
      <h1 className="text-4xl">BEHOLD THE HORIZON AHEAD</h1>

      <img
        className="w-[350px] transform transition-all duration-300 ease-in-out"
        src={innerimg}
        alt="Inner Image"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <p className="w-[490px] text-center">
        In the shadow of the ancient ruins of Tamriel, where once the grand city
        of Ald&rsquo;ruhn thrived, only the whispers of forgotten gods remain,
        carried by the winds of time.
      </p>
    </div>
  );
};

export default About;
