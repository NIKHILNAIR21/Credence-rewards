import React from "react";
import NewsLetter from "./NewsLetter";

function CorporateGifting() {
  return (
    <>
      <div className="container mx-auto pt-32">
        <div className="bg-white p-6 rounded-3xl  border  w-[80%] mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            Corporate Gifting
          </h1>
          <div className="flex flex-wrap justify-center w-full">
            <div className="">
              <div
                className="p-4 rounded-3xl  border "
                style={{ boxShadow: "0px 0px 8px 0px #00000040 inset" }}
              >
                <h2 className="text-xl font-bold ">Get In Touch With Us.</h2>
                <p className="font-semibold">
                  Get solution to your business needs directly,
                </p>
                <p className="font-semibold">Fill form to contact with us.</p>
                <form className="mt-4 mb-4">
                  <>
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="border-b border-gray-300 outline-none w-full px-4 py-2"
                      />
                    </div>
                    {/* Email Input */}
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border-b border-gray-300  outline-none w-full px-4 py-2"
                      />
                    </div>
                    {/* Message Input */}
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="border-b border-gray-300  outline-none w-full px-4 py-2"
                      />
                    </div>
                  </>
                </form>
              </div>
            </div>
            <div className="w-1/2 ">
              <div class="bg-white  text-center">
                <h1 class="text-2xl font-bold " style={{ color: "#D49918" }}>
                  CREDENCE REWARDS
                </h1>
                <h1 class="text-2xl font-bold">B2B GIFTING</h1>
                <h1 class="text-2xl font-bold mb-4">SOLUTIONS.</h1>

                <div class="mb-6 border w-fit mx-auto p-4 rounded-3xl ">
                  <button class="bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-xl ">
                    Know more about us
                  </button>
                </div>
                <button class="bg-amber-500 hover:bg-amber-600 m-1 text-white font-bold py-2 px-4 rounded-xl ">
                  Send Message
                </button>
                <button class="bg-slate-500 hover:bg-slate-900 m-1 text-white font-bold py-2 px-4 rounded-xl">
                  Chat Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <NewsLetter />
      </div>
    </>
  );
}

export default CorporateGifting;
