import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "./carousel.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import slide1 from "../assets/slide-1.webp";
const HomeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full my-12">
      {" "}
      <Swiper
        spaceBetween={1}
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        direction="horizontal"
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.2,
          slideShadows: false,
          scale: 0.9,
        }}
        speed={700}
        modules={[EffectCoverflow, Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="  mySwiper "
      >
        <SwiperSlide className="w-[40%] sm:w-[80%] mx-auto ">
          <img
            className="mx-auto transition-all delay-100"
            src={slide1}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide className=" w-[40%] sm:w-[80%] mx-auto ">
          <img
            className="mx-auto transition-all delay-100"
            src={slide1}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[40%] sm:w-[80%] mx-auto ">
          <img
            className="mx-auto transition-all delay-100"
            src={slide1}
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[40%] sm:w-[80%] mx-auto ">
          <img
            className="mx-auto transition-all delay-100"
            src={slide1}
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
