import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import tata from "../assets/tata.webp";
import cleartrip from "../assets/cleartrip.webp";
import flipkart from "../assets/flipkart.webp";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const CompanyList = () => {
  return (
    <div className="bg-[rgb(234,234,234)] p-3 relative">
      <h2 className="text-xl sm:text-3xl mt-5 sm:mt-10 font-bold text-black text-center">
        Shop & Save on Popular Brands
      </h2>
      <div className="w-[99%] sm:w-[55%] my-4 h-auto  bg-white  rounded-[24px] mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={90}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={1800}
          loop={true}
          modules={[Autoplay]}
          className="scale-95 "
        >
          <SwiperSlide>
            <img className="scale-95" src={tata} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-95" src={cleartrip} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-95" src={flipkart} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-95" src={tata} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-95" src={cleartrip} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-95" src={flipkart} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-95" src={tata} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="scale-95" src={cleartrip} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CompanyList;
