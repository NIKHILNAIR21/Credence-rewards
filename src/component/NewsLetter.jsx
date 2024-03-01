import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-white  w-fit mx-auto p-3 rounded-[20px]">
      <div className="">
        <div className="bg-[#F15757] flex justify-center items-center gap-0 rounded-[12px] ">
          <h2 className="p-2.5 text-xl  font-semibold text-white">
            Subscribe to our newsletter
          </h2>
          <div>
            <input
              className="outline-none border-l border-t border-b rounded-l-[12px] font-medium placeholder:font-medium text-black text-xl p-2.5"
              type="email"
              placeholder="Enter your email"
              name=""
              id=""
            />
          </div>
          <button className="bg-[#333333] rounded-r-[12px] text-base font-semibold p-3 text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
