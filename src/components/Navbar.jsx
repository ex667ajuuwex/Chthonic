import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import logo from "../assets/demon_logo.png";
import sideareaimage from "../assets/sidearea-background.jpg";

const menuItems = ["Facebook", "Twitter", "YouTube", "Instagram"];
const navItems = [
  "HOME",
  "PAGES",
  "FORUM",
  "PORTFOLIO",
  "BLOG",
  "SHOP",
  "ELEMENTS",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between p-6 bg-transparent text-white relative z-10 font-marcellus px-20">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <span
            className="text-2xl font-bold font-sans"
            style={{ letterSpacing: "4px" }}
          >
            CHTHONIC
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 text-lg">
            {navItems.map((item) => (
              <li key={item} className="hover:text-gray-400 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          <GiHamburgerMenu
            className="text-3xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-gray-400"
            onClick={toggleMenu}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-[500px] pr-[55px] text-white bg-cover bg-center transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg`}
        style={{ backgroundImage: `url(${sideareaimage})` }}
      >
        <div className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-[48px] w-12" />
            <span
              className="text-2xl font-bold font-sans"
              style={{ letterSpacing: "4px" }}
            >
              CHTHONIC
            </span>
          </div>

          <HiX
            className="hover:text-gray-400 cursor-pointer text-3xl transform transition-transform duration-500 rotateOnHover"
            onClick={toggleMenu}
          />
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 border-b-2 border-gray-500">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-transparent text-white outline-none w-full p-2"
            />
            <FaSearch className="text-2xl cursor-pointer" />
          </div>
        </div>

        <ul className="p-6 space-y-6 text-lg">
          {menuItems.map((label) => (
            <li
              key={label}
              className="hover:text-gray-400 cursor-pointer flex items-center space-x-4"
            >
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
