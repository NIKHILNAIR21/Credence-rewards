import React from "react";
import bg from "../assets/Product-bg.webp";
import yatra from "../assets/yatra.webp";
import Denomination from "../component/Denomination";
const ProductPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-3 flex justify-center"
    >
      <div className="bg-white p-1.5 w-[60%] mx-auto rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Yatra E-GIFT CARD
        </h2>
        <div className="flex gap-14 px-5 py-6">
          <div>
            <div className=" relative  my-10">
              <img
                className="w-80 mx-auto absolute -top-14  right-0 left-0 hover:-top-16 transition-all delay-100 duration-100"
                src={yatra}
                alt=""
              />
              <div className="flex justify-between w-80 items-end h-44 p-0.5  gap-4  border-[3px] rounded-lg">
                <div className="text-xs text-red-600 text-center w-full font-semibold">
                  5 Cards worth a total of ₹2500 will be generated
                </div>
              </div>
            </div>
            <div>
              <div className="border rounded-lg p-1.5">
                <div className="flex items-center justify-between ">
                  <button className="p-2 px-3 bg-slate-900 text-white rounded-lg">
                    -
                  </button>
                  <label htmlFor="">INR</label>{" "}
                  <input className="outline-none" type="text" />
                  <button className="p-2 px-3 bg-slate-900 text-white rounded-lg">
                    +
                  </button>
                </div>
              </div>
              <div className="border rounded-lg p-1.5">
                <div className="flex items-center justify-between ">
                  <button className="p-2 px-3 bg-slate-900 text-white rounded-lg">
                    -
                  </button>
                  <label htmlFor="">QTY</label>{" "}
                  <input className="outline-none" type="text" />
                  <button className="p-2 px-3 bg-slate-900 text-white rounded-lg">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between">
            <h2 className="text-4xl  font-bold">
              Save <span className="text-[#D49918]">+8%</span> on <br />
              BRAND CARDS
            </h2>
            <div>
              <Denomination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
