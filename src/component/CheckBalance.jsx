import React from "react";
import NewsLetter from "./NewsLetter";
import balance from "../assets/balancebg.png";

function CheckBalance() {
  return (
    <div
      style={{
        backgroundImage: `url(${balance})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto mt-8">
        <div className="bg-white p-6 rounded-3xl  border ml-20 mr-20">
          <h1 className="text-3xl font-bold text-center mb-6">
            Corporate Gifting
          </h1>
          <div className="flex">
            <div className="w-1/2 mr-10 ml-8"></div>
            <div className="w-1/2 "></div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <NewsLetter />
      </div>
    </div>
  );
}

export default CheckBalance;
