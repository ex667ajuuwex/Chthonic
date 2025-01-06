import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blog1 from "../assets/blog1.webp";
import blog2 from "../assets/blog2.webp";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blogBackground from "../assets/blog-background.jpg";
import innerimg from "../assets/inner-img-3.png";

function Blog() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    focusOnSelect: false,
  };

  const blogs = [
    {
      img: blog1,
      title: "The Rise of eSports",
      desc: "Explore the explosive growth of eSports and how it's becoming a mainstream phenomenon.",
    },
    {
      img: blog2,
      title: "Top 10 Gaming Consoles",
      desc: "A comprehensive list of the top 10 gaming consoles that have shaped the industry.",
    },
    {
      img: blog3,
      title: "VR Gaming: The Future",
      desc: "Dive into the world of virtual reality gaming and what the future holds for this technology.",
    },
    {
      img: blog4,
      title: "Building the Ultimate Gaming PC",
      desc: "Tips and tricks on how to build the ultimate gaming PC for an unparalleled experience.",
    },
    {
      img: blog5,
      title: "Mobile Gaming Trends",
      desc: "An analysis of the latest trends in mobile gaming and what to expect in the coming years.",
    },
    {
      img: blog6,
      title: "The Best RPGs of All Time",
      desc: "A look at some of the best role-playing games that have captivated gamers for decades.",
    },
  ];

  return (
    <div className="blog-slider-container py-20 px-[150px] h-[90vh] content-center relative text-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center z-[-1]"
        style={{
          backgroundImage: `url(${blogBackground})`,
        }}
      ></div>

      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold mb-4">Forge Your Way</h2>
        <h3 className="text-2xl font-semibold">Move Cautiously</h3>
      </div>

      <div className="flex justify-center mb-4">
        <img src={innerimg} alt="Inner Image" className="w-[350px]" />
      </div>

      <Slider {...settings}>
        {blogs.map(({ img, title, desc }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white space-y-6 px-4 py-6"
          >
            <img src={img} alt={title} className="w-full mb-4" />
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-base leading-relaxed text-center">{desc}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Blog;
