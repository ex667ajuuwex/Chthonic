import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Video from "./components/Video";
import Blog from "./components/Blog";
import Testimonial from "./components/Testimonial";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Video />
      <Blog />
      <Testimonial />
    </div>
  );
};

export default App;
