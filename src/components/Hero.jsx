import { useState, useEffect } from "react";
import innerimg from "../assets/inner-img-3.png";
import heroBackground1 from "../assets/hero1.jpg";
import heroBackground2 from "../assets/hero2.jpg";
import heroBackground3 from "../assets/hero3.jpg";

const heroData = [
  {
    background: heroBackground1,
    title: "Realm of the Ancient Wyrms",
    image: innerimg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
  },
  {
    background: heroBackground2,
    title: "Mystic Lands of Eldoria",
    image: innerimg,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    background: heroBackground3,
    title: "Kingdom of the Forgotten",
    image: innerimg,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 18000);
    return () => clearInterval(slideInterval);
  }, []);

  const { title, image, description } = heroData[currentIndex];

  return (
    <div className="relative h-screen mt-[-96px]">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out`}
        style={{
          backgroundImage: `url(${heroData[currentIndex].background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          animation: "kenBurns 18s ease-in-out infinite",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-1000 ease-in-out"></div>
      <div
        className="absolute inset-0 flex justify-center items-center flex-col gap-7 transition-opacity duration-1000 ease-in-out"
        style={{
          opacity: 1,
        }}
      >
        <h1
          className="text-white text-6xl md:text-6xl font-bold text-center drop-shadow-lg font-marcellus uppercase"
          style={{ letterSpacing: "6px" }}
        >
          {title}
        </h1>
        <img
          src={image}
          alt="Inner Image"
          className="transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-105"
        />
        <p className="w-[700px] text-center text-white text-lg md:text-xl lheight">
          {description}
        </p>
        <div className="absolute bottom-4 flex gap-4">
          {heroData.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 bg-white rounded-full cursor-pointer transition-all duration-300 ${
                currentIndex === index ? "bg-gray-600" : "opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
