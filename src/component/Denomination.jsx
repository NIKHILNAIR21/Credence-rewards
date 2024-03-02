import React, { useState, useEffect } from "react";

const Denomination = () => {
  return (
    <div>
      <div className="main   ">
        <div>
          <h1 className="text-base w-full md:text-xl font-medium">
            Choose Denomination
          </h1>
        </div>
        <div className="flex flex-wrap ">
          {" "}
          {/*w-[17rem] md:w-[45rem] lg:w-[33.2rem] xl:w-[50rem] */}
          <button className="sm:px-5 m-2 border-2 border-[#D49918] rounded-md text-white font-medium bg-[#EDC54B] p-1">
            Custom
          </button>
          <button className="sm:px-5 m-2 border-2 border-[#D49918] rounded-md text-white font-medium bg-[#EDC54B] p-1">
            100
          </button>
          <button className="sm:px-5 m-2 border-2 border-[#D49918] rounded-md text-white font-medium bg-[#EDC54B] p-1">
            500
          </button>
          <button className="sm:px-5 m-2 border-2 border-[#D49918] rounded-md text-white font-medium bg-[#EDC54B] p-1.5">
            600
          </button>
          <button className="sm:px-5 m-2 border-2 border-[#D49918] rounded-md text-white font-medium bg-[#EDC54B] p-1.5">
            1000
          </button>
          <button className="sm:px-5 m-2 border-2 border-[#D49918] rounded-md text-white font-medium bg-[#EDC54B] p-1.5">
            1100
          </button>
          <button className="sm:px-5 m-2 border-2 border-[#D49918] rounded-md text-white font-medium bg-[#EDC54B] p-1.5">
            2000
          </button>
          <button className="sm:px-5 m-2 border-2 border-[#D49918] rounded-md text-white font-medium bg-[#EDC54B] p-1.5">
            10000
          </button>
        </div>
      </div>
    </div>
  );
};

export default Denomination;
