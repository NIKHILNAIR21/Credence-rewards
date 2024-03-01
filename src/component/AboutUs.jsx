import React from "react";
import artImg from "../assets/LoginArt.png";

function AboutUs() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-3xl  border ml-20 mr-20">
        <div className="flex gap-40 ">
          <div className="w-1/2  ">
            <div className="p-3 ">
              <h2 className="text-2xl font-bold mb-4 ">Our Story</h2>
              <p className="font-normal mb-2">
                We believe that there’s a perfect gift for everyone, which is
                why we offer you gift cards from 100+ reputed brands for every
                gifting occasion. Gift your loved ones the freedom of choice to
                select a product they truly desire.
              </p>
              <p className="font-normal mb-2">
                For your last-minute gifting needs, we have e-gift cards from
                the leading brands in the country. Gift cards and e-gift cards
                also give the recipients the freedom to shop at an outlet close
                to their home or office. Experience new-age gifting with
                Credence Rewards
              </p>
              <h5 className="font-bold">
                -India's most powerful gifting platform.
              </h5>
            </div>
          </div>
          <div className="w-1/2   ">
            <img src={artImg} className="w-80" />
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl  border ml-20 mr-20 mt-8">
        <div className="p-3 text-center">
          <h1 className="text-3xl font-bold mb-4 ">
            Spreading Joy Through The Gift Of Choice
          </h1>
          <p className="font-normal mb-2 mt-1">
            Welcome to Credence Rewards, your trusted destination for delightful
            gift cards in India. With a legacy of 7 years, we have been
            passionately dedicated to making gifting moments more special and
            memorable for both businesses and customers.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl  border ml-20 mr-20 mt-8">
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold mb-4 ">Our Mission</h1>
          <p className="font-normal mb-2 mt-1">
            Our Mission At Credence Rewards, our mission is simple yet profound:
            to spread joy through the gift of choice. We believe that every gift
            should be a reflection of thoughtfulness and personalization,
            allowing recipients to select the perfect present that brings them
            joy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
