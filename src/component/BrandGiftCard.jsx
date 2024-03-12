import React from "react";
import { Link } from "react-router-dom";

const BrandGiftCard = ({ img, brandName, Category }) => {
  return (
    <Link to="/product">
      <div className="relative">
        <div className=" relative  ">
          <img
            className="w-64 absolute -top-8 right-0 left-0 hover:-top-10 transition-all delay-100 duration-100"
            src={img}
            alt=""
          />
          <div className="flex justify-between w-64 items-end h-40 p-1.5 gap-4  border-[3px] rounded-lg">
            <div className="text-base font-semibold">{brandName}</div>
            <div className="text-base font-semibold text-[#D49918]">
              {Category}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BrandGiftCard;
