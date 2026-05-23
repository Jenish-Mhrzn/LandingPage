import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import picture from "../assets/picture.png";
import ImageAutoplay from "../page/ImageAutoplay";

const Hero = () => {
  const { theme } = useContext(MyContext);
  const textColor = theme === "dark" ? "text-green-100" : "text-black";
  const borderColor = theme === "dark" ? "border-green-100" : "border-black";

  return (
    <div className="flex justify-center items-center flex-col h-screen relative">
      {/* Text part */}
      <div
        className={`${theme === "dark" ? "text-white" : "text-black"} tracking-wide`}
      >
        <div className="text-[2rem] sm:text-[3rem] md:text-[4.5rem] font-semibold leading-[0.75]">
          <p className="text-center">ROAR IN THE</p>
          <p className="text-center md:pl-11">DIGITAL WILDERNESS.</p>
        </div>
        <div className="uppercase flex flex-col items-center mt-6 text-neutral-500 text-[0.6rem] sm:text-xs md:text-base">
          <p>We roar with success, delivering the TRIONN®</p>
          <p>through versatile design, branding and the latest</p>
          <p>tech development to companies.</p>
        </div>
      </div>

      {/* Arrow Part */}
      <div
        className={`${textColor} ${borderColor} mt-4 border rounded-full h-6 w-6 flex justify-center items-center `}
      >
        <button className="cursor-pointer">↓</button>
      </div>

      {/* Buttons Part */}
      <div
        className={`${textColor} absolute bottom-5 left-4 right-4 md:left-8 md:right-8 flex justify-between items-end px-2 sm:px-8 md:px-15 pb-4`}
      >
        <button
          className={`${borderColor} border-2 rounded-full py-1.5 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 text-sm md:text-base cursor-pointer`}
        >
          Explore work
        </button>

        <ImageAutoplay />

        <button
          className={`${borderColor} border-2 rounded-full py-1.5 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 text-sm md:text-base cursor-pointer`}
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Hero;
