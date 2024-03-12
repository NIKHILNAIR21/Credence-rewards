import React from "react";
import homebg from "../assets/home-bg-1.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import travel from "../assets/travel.webp";
import lifestyle from "../assets/lifestyle.webp";
import grocery from "../assets/grocery.webp";
import home from "../assets/home.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";
import NavigationButton from "./NavigationButton";
import "./smallCarousel.css"; // Import your CSS file

const SmallCarousel = () => {
  return (
    <div
      className="relative category"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-2xl sm:text-4xl font-semibold text-black text-center py-3">
        Categories
      </h2>

      <Swiper
        spaceBetween={10}
        hashNavigation={{
          watchState: true,
        }}
        centeredSlides={true}
        slidesPerView={2}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper w-[60%] p-4 mx-auto "
      >
        <SwiperSlide data-hash="slide2" className="swiper-slide">
          {" "}
          <img src={lifestyle} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide1" className="swiper-slide">
          <img className="rounded-3xl" src={travel} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide2" className="swiper-slide">
          {" "}
          <img src={lifestyle} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3" className="swiper-slide">
          {" "}
          <img src={grocery} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide4" className="swiper-slide">
          {" "}
          <img src={home} alt="" />
        </SwiperSlide>
        <SwiperSlide data-hash="slide3" className="swiper-slide">
          {" "}
          <img src={grocery} alt="" />
        </SwiperSlide>

        <div className="w-32 mx-auto">
          <NavigationButton />
        </div>
      </Swiper>
    </div>
  );
};

export default SmallCarousel;
