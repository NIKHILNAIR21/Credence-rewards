import React from "react";
import BrandGiftCard from "../component/BrandGiftCard";
import yatra from "../assets/yatra.webp";
import shoper from "../assets/shopperStop.webp";
import Croma from "../assets/croma.webp";
import flipkart from "../assets/flipkart-card.webp";
import SearchBar from "../component/SearchBar";
const Brand = () => {
  return (
    <div className="bg-white mt-32">
      <h2 className="text-center text-4xl  font-bold py-3">All Brands</h2>

      <SearchBar />

      <div className="flex flex-wrap justify-center gap-10 w-full lg:w-[70%] mx-auto mt-20">
        <BrandGiftCard img={yatra} brandName={"yatra"} Category={"Travel"} />
        <BrandGiftCard img={flipkart} brandName={"yatra"} Category={"Travel"} />
        <BrandGiftCard img={Croma} brandName={"yatra"} Category={"Travel"} />
        <BrandGiftCard img={shoper} brandName={"yatra"} Category={"Travel"} />
        <BrandGiftCard img={yatra} brandName={"yatra"} Category={"Travel"} />
        <BrandGiftCard img={Croma} brandName={"yatra"} Category={"Travel"} />
        <BrandGiftCard img={flipkart} brandName={"yatra"} Category={"Travel"} />
        <BrandGiftCard img={shoper} brandName={"yatra"} Category={"Travel"} />
      </div>
    </div>
  );
};

export default Brand;
