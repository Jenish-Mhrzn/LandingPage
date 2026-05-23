import React, { useContext } from "react";
import { linkItems } from "../constant";
import { MyContext } from "../context/Context";
import { FaLinkedinIn, FaDribbble, FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";

const Menu = () => {
  const { theme } = useContext(MyContext);
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="flex items-center h-screen w-full px-6 md:px-16 lg:px-25">
      <div
        className={`${textColor} flex flex-col md:flex-row justify-between w-full gap-10 md:gap-0 md:items-end`}
      >
        {/* left part */}
        <ul className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] leading-none font-semibold tracking-wide cursor-pointer">
          {linkItems.map((item, index) => (
            <li
              key={index}
              className="hover:opacity-90 transition-transform duration-300 origin-left hover:scale-x-125 opacity-40"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* right part */}
        <div className="flex flex-row md:flex-col justify-between md:justify-end items-start md:items-end gap-6 md:gap-0">
          {/* contact */}
          <div className="flex flex-col md:mb-4 md:text-end">
            <span className="text-sm md:text-xl tracking-wide">
              hello@trionn.com
            </span>
            <span className="text-sm md:text-base">+91 9824182099</span>
          </div>

          {/* icons */}
          <div className="flex flex-row space-x-3">
            <FaDribbble
              size={22}
              className="cursor-pointer hover:opacity-50 transition-opacity text-pink-500"
            />
            <FaLinkedinIn
              size={22}
              className="cursor-pointer hover:opacity-50 transition-opacity bg-blue-600 p-1 rounded-full text-white"
            />
            <FaInstagram
              size={22}
              className="cursor-pointer hover:opacity-50 transition-opacity text-orange-500"
            />
            <FaBehance
              size={22}
              className="cursor-pointer hover:opacity-50 transition-opacity bg-blue-600 p-1 rounded-full text-white"
            />
            <SiFacebook
              size={22}
              className="cursor-pointer hover:opacity-50 transition-opacity text-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;


