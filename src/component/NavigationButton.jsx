import React from "react";
import { useSwiper } from "swiper/react";
import left from "../assets/leftarrow.png";
import right from "../assets/rightarrow.png";
const NavigationButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-center gap-10">
      <button
        className="bg-black text-white p-4 rounded-xl"
        onClick={() => swiper.slidePrev()}
      >
        <img className="w-28" src={left} alt="" />
      </button>
      <button
        className="bg-black text-white p-4 rounded-xl"
        onClick={() => swiper.slideNext()}
      >
        <img className="w-28" src={right} alt="" />
      </button>
    </div>
  );
};

export default NavigationButton;
