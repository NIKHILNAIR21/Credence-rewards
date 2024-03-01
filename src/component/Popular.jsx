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
      <div className="w-[95%] sm:w-[100%] md:w-[50%] mx-auto py-10">
        <Swiper slidesPerView={4} spaceBetween={30}>
          <SwiperSlide>
            <div className="relative">
              <img src={popular1} alt="" />
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular2} alt="" />
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img className="relative" src={popular3} alt=""></img>
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular4} alt="" />
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular1} alt="" />
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular2} alt="" />
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular3} alt="" />
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular4} alt="" />
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
                Redeem upto ₹ 15,000
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={popular1} alt="" />
              <h2 className="absolute text-white text-xl top-3 left-3 font-bold">
                11% <br /> off
              </h2>
              <h3 className="absolute text-white font-semibold  text-base top-40 right-3">
                E-Gift Card
              </h3>
              <h3 className="absolute text-black font-semibold  text-base bottom-5 right-0 left-3">
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
