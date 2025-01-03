import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Video from "./components/Video";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Video />
    </div>
  );
};

export default App;
