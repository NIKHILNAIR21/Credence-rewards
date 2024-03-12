import React from "react";
import bg from "../assets/checkoutBG.webp";
import yatra from "../assets/yatra.webp";
import payment from "../assets/paymentMethod.webp";
const CheckoutPage = () => {
  return (
    <div
      className="p-5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-1.5 mt-32 sm:p-10 w-[90%] md:w-[60%] mx-auto rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Yatra E-GIFT CARD
        </h2>
        <div className="  flex flex-wrap justify-between items-center w-full">
          <div className="border-2 rounded-xl p-10 w-full sm:w-[55%]">
            <h2 className="text-xl font-semibold text-gray-500">
              Payment Method
            </h2>
            <img src={payment} alt="" />
            <div>
              <h2 className="text-xl font-semibold text-gray-500">
                Payment Details
              </h2>
              <form className="flex flex-col">
                <input
                  type="text"
                  placeholder="Enter Name On Card"
                  className="outline-none border-b py-3"
                />
                <input
                  type="text"
                  placeholder=" Card Number"
                  className="outline-none border-b py-3"
                />
                <input
                  type="text"
                  placeholder="Expire Date"
                  className="outline-none border-b py-3"
                />
              </form>
            </div>
          </div>
          <div className="flex flex-col w-96  lg:flex-row gap-14 px-5 py-6">
            <div className="flex flex-col w-full justify-center  items-center">
              <div className=" relative w-fit  mx-auto my-10 border-[3px] rounded-lg">
                <img
                  className="w-full mx-auto absolute -top-14  right-0 left-0 hover:-top-16 transition-all delay-100 duration-100"
                  src={yatra}
                  alt=""
                />
                <div className="flex justify-center h-36 w-64  items-end  gap-4 ">
                  <div className="text-base text-red-600 text-center w-full font-semibold">
                    CARDS WORTH ₹2500
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <button className="bg-gray-800 p-1.5 rounded-md text-lg  text-white">
                  Back
                </button>
                <button className="bg-[#EDC54B] p-1.5 rounded-md text-lg border-2 border-amber-500 text-white">
                  Continue to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
