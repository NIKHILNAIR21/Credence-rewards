import React from "react";
import bg from "../assets/Product-bg.webp";
import yatra from "../assets/yatra.webp";
import Denomination from "../component/Denomination";
const ProductPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" p-0 sm:p-3  w-full"
      >
        <div className="bg-white p-1.5 mt-32 sm:p-10 w-[90%] md:w-[60%] mx-auto rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Yatra E-GIFT CARD
          </h2>
          <div className="flex flex-col  lg:flex-row gap-14 px-5 py-6">
            <div className="flex flex-col w-full justify-center  items-center">
              <div className=" relative w-fit mx-auto my-10 border-[3px] rounded-lg">
                <img
                  className="w-[100%] mx-auto absolute -top-14  right-0 left-0 hover:-top-16 transition-all delay-100 duration-100"
                  src={yatra}
                  alt=""
                />
                <div className="flex justify-center  items-end h-36 p-0.5  gap-4 ">
                  <div className="text-xs text-red-600 text-center w-full font-semibold">
                    5 Cards worth a total of ₹2500 will be generated
                  </div>
                </div>
              </div>
              <div className="w-full  mx-auto">
                <div className="border rounded-lg p-1.5 w-fit mx-auto">
                  <div className="flex items-center justify-between  ">
                    <button className="p-2 px-3 bg-slate-900 text-white rounded-lg">
                      -
                    </button>
                    <label htmlFor="">INR</label>{" "}
                    <input className="outline-none" type="text" />
                    <button className=" p-2  px-3 bg-slate-900 text-white rounded-lg">
                      +
                    </button>
                  </div>
                </div>
                <div className="border rounded-lg p-1.5 w-fit mx-auto">
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
              <h2 className="text-2xl lg:text-5xl  font-bold">
                Save <span className="text-[#D49918]">+8%</span> on <br />
                BRAND CARDS
              </h2>
              <div>
                <Denomination />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col lg:flex-row gap-5 justify-between items-center p-1.5 md:w-[60%] mx-auto mt-5 rounded-xl">
          <div className="border-2 flex justify-between p-1.5 rounded-xl w-full lg:w-fit">
            <input
              className="outline-none"
              type="text"
              placeholder="Enter Coupon Code"
            />
            <button className="bg-[#333333] p-2.5 px-5 text-white rounded-lg">
              APPLY
            </button>
          </div>
          <button className="px-5  border-2 border-[#D49918] text-base uppercase rounded-md text-white font-bold bg-[#EDC54B] p-2">
            Get Brand Card
          </button>
        </div>
        <div className="flex justify-between  sm:w-[60%] text-base mx-auto mt-5 font-semibold  items-center gap-9 ">
          <div className="bg-gray-300 backdrop-filter p-2.5 rounded-xl">
            <h2 className="font-bold text-lg">Tearms and Conditions</h2>
            <ul>
              <li>Expiry: 1 year from the date of issue </li>
              <li>Instant Delivery Via Email.</li>
              <li>Secure Payment Gateway Available.</li>
              <li>No Hidden Charges.</li>
            </ul>
          </div>
          <div className="bg-gray-300 backdrop-filter p-2.5 rounded-xl">
            <h2 className="font-bold text-lg">How to use</h2>
            <ul>
              <li>Expiry: 1 year from the date of issue </li>
              <li>Instant Delivery Via Email.</li>
              <li>Secure Payment Gateway Available.</li>
              <li>No Hidden Charges.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
