import React from "react";

const DealsGiftCard = ({ img, offer, giftCard }) => {
  return (
    <div>
      <div className="relative  transition-all delay">
        <img className="relative w-44 sm:w-72" src={img} alt="" />
        <h2 className="absolute top-3 font-bold text-lg sm:text-4xl text-white left-5">
          {offer}% <br /> off
        </h2>
        <h3 className="absolute right-3 sm:right-5 bottom-3 sm:bottom-5 font-bold text-lg sm:text-3xl text-white">
          {giftCard}
        </h3>
      </div>
    </div>
  );
};

export default DealsGiftCard;
