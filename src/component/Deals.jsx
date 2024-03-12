import React from "react";
import homebg from "../assets/home-bg-1.webp";
import CarouselWithCustomScrollbar from "./CarouselWithCustomScrollbar";
import DealsGiftCard from "./DealsGiftCard";
import deals1 from "../assets/deal1.webp";
import deals2 from "../assets/deal2.webp";
import deals3 from "../assets/deal3.webp";
import deals4 from "../assets/deals4.webp";
const Deals = () => {
  return (
    <div
      className="relative bg-white"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img className="hidden sm:flex h-full" src={homebg} alt="" /> */}
      <h2 className=" text-2xl sm:text-4xl font-semibold  text-black text-center pt-3">
        Exculsive Deals
      </h2>
      <div className="flex justify-center scale-90 h-full w-full sm:w-[80%] mx-auto gap-4 flex-wrap ">
        <DealsGiftCard img={deals1} offer={8} giftCard={"E-gift card"} />
        <DealsGiftCard img={deals2} offer={8} giftCard={"E-gift card"} />
        <DealsGiftCard img={deals3} offer={8} giftCard={"E-gift card"} />
        <DealsGiftCard img={deals4} offer={8} giftCard={"E-gift card"} />
        <DealsGiftCard img={deals3} offer={8} giftCard={"E-gift card"} />
        <DealsGiftCard img={deals4} offer={8} giftCard={"E-gift card"} />
        <DealsGiftCard img={deals1} offer={8} giftCard={"E-gift card"} />
        <DealsGiftCard img={deals2} offer={8} giftCard={"E-gift card"} />
      </div>
    </div>
  );
};

export default Deals;
