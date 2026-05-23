import React, { useContext, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiBarChart2, FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { theme, toogleTheme } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      navigate("/");
    } else {
      setIsOpen(true);
      navigate("/menu");
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 py-4 md:py-7 z-50 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <div className="flex px-4 sm:px-10 md:px-20 mx-auto justify-between items-center">
        {/* Left */}
        <div className="text-base sm:text-lg md:text-2xl text-center">
          TRIONN®
        </div>

        {/* Middle */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 justify-center ">
          <button
            onClick={toogleTheme}
            className={`rounded-full p-1.5 sm:p-2 ${theme == "dark" ? "bg-neutral-800" : "bg-neutral-200"} cursor-pointer`}
          >
            {theme == "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <div
            className={`rounded-full p-1.5 sm:p-2 ${theme == "dark" ? "bg-neutral-800" : "bg-neutral-200"} cursor-pointer`}
          >
            <FiBarChart2 size={14} />
          </div>
        </div>

        {/* Right */}
        <div
          className="flex items-center justify-center space-x-1 sm:space-x-2 text-sm sm:text-base md:text-lg cursor-pointer"
          onClick={toggleMenu}
        >
          <span>{isOpen ? "CLOSE" : "MENU"}</span>
          <button
            className={`rounded-full p-1.5 sm:p-2 ${theme == "dark" ? "bg-neutral-800" : "bg-neutral-200"} cursor-pointer`}
          >
            {isOpen ? <RxCross2 size={14} /> : <FiMenu size={14} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
