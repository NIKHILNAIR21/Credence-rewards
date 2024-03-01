import React from "react";
import homebg from "../assets/home-bg-1.webp";

const SmallCarousel = () => {
  return (
    <div className="relative ">
      <img className="" src={homebg} alt="" />
      <h2 className="absolute top-0 right-0 left-0 z-50 text-4xl font-semibold  text-black text-center pt-3">
        Categories
      </h2>
    </div>
  );
};

export default SmallCarousel;
