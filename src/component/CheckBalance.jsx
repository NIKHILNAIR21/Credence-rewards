import React from "react";
import NewsLetter from "./NewsLetter";
import balance from "../assets/balancebg.png";
import balanceCard from "../assets/creditcard.png";


function CheckBalance() {
  return (
    <div
      style={{
        backgroundImage: `url(${balance})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto ">
        <div className="bg-white p-6 rounded-3xl  border ml-20 mr-20 mt-8">
          <h1 className="text-3xl font-bold text-center mb-6">
          CHECK GIFT-CARD BALANCE
          </h1>
          <div className="flex">
            <div className="w-1/2 mr-10 ml-8">
              <img src={balanceCard}/>
            </div>
            <div className="w-1/2 ">
            <form className="mt-4 mb-4">
                  <>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Card Number"
                        className=" border rounded-md w-80  px-5 py-5"
                        style={{boxShadow:" 0px 0px 6px 0px #00000040 inset"
                        }}
                      />
                    </div>
                    {/* Email Input */}
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border rounded-md w-80 px-5 py-5"
                        style={{boxShadow:" 0px 0px 6px 0px #00000040 inset"
                      }}
                      />
                    </div>
                    {/* Message Input */}
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex">
                    Check
                  </button>
                  </>
                </form>
            </div>
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
