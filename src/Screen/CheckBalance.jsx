import React from "react";
import giftCard from "../assets/giftcard.webp";
import bg from "../assets/Product-bg.webp";
import NewsLetter from "../component/NewsLetter";
const CheckBalance = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-3 pt-32"
    >
      <div className="border p-3  my-10 rounded-xl w-fit mx-auto bg-white">
        <h2 className="text-2xl md:text-4xl text-center p-4 font-bold">
          Check Gift Card Balance
        </h2>
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-16 p-16">
          <img className="w-[40%]" src={giftCard} alt="" />
          <div className="flex flex-col gap-4 w-full sm:w-96">
            <input
              type="text"
              placeholder="Card number"
              className="outline-none border-2 p-3  rounded-lg"
            />
            <input
              type="text"
              placeholder="Card Pin"
              className="outline-none border-2 p-3  rounded-lg"
            />
            <button className="bg-slate-600 font-semibold p-2.5 px-6 w-fit mx-auto text-white rounded-lg">
              Check
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default CheckBalance;
