import React from "react";

const BrandGiftCard = ({ img, brandName, Category }) => {
  return (
    <div className="relative">
      <div className=" relative  ">
        <img className="w-64 absolute -top-8 right-0 left-0" src={img} alt="" />
        <div className="flex justify-between w-64 items-end h-44 p-2.5  border-[3px] rounded-lg">
          <div className="text-base font-semibold">{brandName}</div>
          <div className="text-base font-semibold text-[#D49918]">
            {Category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandGiftCard;
