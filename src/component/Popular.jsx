import React from "react";
import popular1 from "../assets/popular-1.webp";
import popular2 from "../assets/popular-2.webp";
import popular3 from "../assets/popular-3.webp";
import popular4 from "../assets/popular-4.webp";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Popular = () => {
  const swiper = useSwiper();
  return (
    <div className="">
      <h2 className="text-black py-7 text-3xl font-bold text-center">
        Popular Products
      </h2>
      <div className="w-[95%] sm:w-[100%] md:w-[90%] lg:w-[70%] mx-auto py-10">
        <Swiper slidesPerView={4} spaceBetween={30}>
          <SwiperSlide>
            <div className="relative">
              <img src={popular1} alt="" />
              <h2 className="absolute text-white text-[9px] md:text-xl  top-1.5 md:top-3 left-1.5 md:left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold text-[10px] md:text-base  top-16 md:top-[7.5rem] lg:top-32 xl:top-48 right-1 md:right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold text-[9px] text-center  md:text-base  bottom-0.5 lg:bottom-2.5 xl:bottom-5 right-0 left-0">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular2} alt="" />
              <h2 className="absolute text-white text-[9px] md:text-xl  top-1.5 md:top-3 left-1.5 md:left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold text-[10px] md:text-base  top-16 md:top-[7.5rem] lg:top-32 xl:top-48 right-1 md:right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold text-[9px] text-center  md:text-base  bottom-0.5 lg:bottom-2.5 xl:bottom-5 right-0 left-0">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular2} alt="" />
              <h2 className="absolute text-white text-[9px] md:text-xl  top-1.5 md:top-3 left-1.5 md:left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold text-[10px] md:text-base  top-16 md:top-[7.5rem] lg:top-32 xl:top-48 right-1 md:right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold text-[9px] text-center  md:text-base  bottom-0.5 lg:bottom-2.5 xl:bottom-5 right-0 left-0">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular3} alt="" />
              <h2 className="absolute text-white text-[9px] md:text-xl  top-1.5 md:top-3 left-1.5 md:left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold text-[10px] md:text-base  top-16 md:top-[7.5rem] lg:top-32 xl:top-48 right-1 md:right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold text-[9px] text-center  md:text-base  bottom-0.5 lg:bottom-2.5 xl:bottom-5 right-0 left-0">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular4} alt="" />
              <h2 className="absolute text-white text-[9px] md:text-xl  top-1.5 md:top-3 left-1.5 md:left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold text-[10px] md:text-base  top-16 md:top-[7.5rem] lg:top-32 xl:top-48 right-1 md:right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold text-[9px] text-center  md:text-base  bottom-0.5 lg:bottom-2.5 xl:bottom-5 right-0 left-0">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
       

        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
