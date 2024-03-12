import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-white  w-fit mx-auto p-1 sm:p-3 rounded-[20px]">
      <div className="">
        <div className="bg-[#F15757] flex flex-col sm:flex-row justify-center p-1.5 items-center gap-2 sm:gap-0 rounded-[20px] sm:rounded-[12px] ">
          <h2 className="p-1 sm:p-2.5 text-sm sm:text-xl  font-semibold text-white">
            Subscribe to our newsletter
          </h2>
          <div>
            <input
              className="outline-none border-l border-t border-b sm:rounded-l-[12px] font-medium placeholder:font-medium text-black text-sm sm:text-xl p-1.5 sm:p-2.5"
              type="email"
              placeholder="Enter your email"
              name=""
              id=""
            />
          </div>
          <button className="bg-[#333333] sm:rounded-r-[12px] text-sm sm:text-base font-semibold p-1.5 sm:p-3 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
