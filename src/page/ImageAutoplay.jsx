import React, { useEffect, useState } from "react";
import picture from "../assets/picture.png";
import picture3 from "../assets/picture3.png";
import picture4 from "../assets/picture4.png";

const images = [picture, picture3, picture4];

const ImageAutoplay = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-24 h-16 sm:w-36 sm:h-24 md:w-48 md:h-32 rounded-full overflow-hidden border">
      <img src={images[index]} className="w-full h-full object-cover" />
    </div>
  );
};

export default ImageAutoplay;
