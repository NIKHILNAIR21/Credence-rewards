import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

const CarouselWithCustomScrollbar = () => {
  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      direction: "vertical", // Set direction to horizontal
      slidesPerView: "auto",
      freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });

    return () => {
      mySwiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-container h-64 w-full overflow-hidden ">
      <div className="swiper-wrapper">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="swiper-slide p-4">
            Slide {index + 1}
          </div>
        ))}
      </div>
      <div className="swiper-scrollbar-x"></div>
    </div>
  );
};

export default CarouselWithCustomScrollbar;
