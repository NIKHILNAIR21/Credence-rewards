import React from "react";
import NewsLetter from "./NewsLetter";

function CorporateGifting() {
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="bg-white p-6 rounded-3xl  border ml-20 mr-20">
          <h1 className="text-3xl font-bold text-center mb-6">
            Corporate Gifting
          </h1>
          <div className="flex">
            <div className="w-1/2 mr-10 ml-8">
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
              {/* Content for the right side */}
              <div class="bg-white  text-center">
                <h1 class="text-2xl font-bold " style={{ color: "#D49918" }}>
                  CREDENCE REWARDS
                </h1>
                <h1 class="text-2xl font-bold">B2B GIFTING</h1>
                <h1 class="text-2xl font-bold mb-4">SOLUTIONS.</h1>

              
                <div class="mb-6 border p-4 rounded-3xl ">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl mr-2">
                Know more about us
                </button>

                </div>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-2">
                  Send Message
                </button>
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mr-2">
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
