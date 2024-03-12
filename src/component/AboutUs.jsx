import React from "react";
import artImg1 from "../assets/art-1.png";
import artImg2 from "../assets/art-2.png";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="container mx-auto pt-28">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
      <div className="bg-white p-6 rounded-3xl  border  w-[70%] mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="  ">
            <div className="p-3 ">
              <h2 className="text-2xl text-center md:text-left  font-bold mb-4 ">
                Our Story
              </h2>
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
          <div className="container-img rounded-3xl">
            <div className="scrolling-images">
              <img
                src={artImg1}
                className="scrolling-image  scale-105"
                alt="Art"
              />
              <img
                src={artImg2}
                className="scrolling-image scale-105"
                alt="Art"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl  border w-[70%] mx-auto mt-8">
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
      <div className="bg-white p-6 rounded-3xl  border w-[70%] mx-auto mt-8">
        <div className="p-3 text-center">
          <h1 className="text-3xl font-bold mb-4 ">Our Mission</h1>
          <p className="font-normal mb-2 mt-1">
            Our Mission At Credence Rewards, our mission is simple yet profound:
            to spread joy through the gift of choice. We believe that every gift
            should be a reflection of thoughtfulness and personalization,
            allowing recipients to select the perfect present that brings them
            joy.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        <div className="max-w-xs mx-2 my-4 bg-white rounded-3xl overflow-hidden border">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">The Power of choice</div>
            <p className="text-gray-700 text-base">
              Gift cards empower both businesses and individuals to express
              their appreciation, gratitude, and love. With our diverse
              collection of gift cards from multiple esteemed brands, we offer a
              world of options, ensuring that each recipient receives a gift
              that resonates with their unique preferences.
            </p>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-4 bg-white rounded-3xl overflow-hidden border">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">For Business</div>
            <p className="text-gray-700 text-base">
              As a business-focused gifting solutions provider, we understand
              the importance of strengthening connections with customers and
              employees. Our tailored corporate gifting solutions allow
              businesses to elevate their brand presence, reward loyalty, and
              foster meaningful relationships.
            </p>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-4 bg-white rounded-3xl overflow-hidden border">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">For individuals</div>
            <p className="text-gray-700 text-base">
              for individuals seeking the perfect present for their loved ones,
              our gift cards become the messenger of sentiments. From birthdays
              to festivals, anniversaries to achievements, our gift cards offer
              a memorable way to celebrate every occasion.
            </p>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-4 bg-white rounded-3xl overflow-hidden border">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">The joy of gifting</div>
            <p className="text-gray-700 text-base">
              We take immense pride in being part of countless celebrations and
              heartfelt moments. Our gift cards have witnessed smiles,
              surprises, and unforgettable memories shared between loved ones,
              making us an integral part of their joyous journey.
            </p>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-4 bg-white rounded-3xl overflow-hidden border">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">
              Convinience & Transparency
            </div>
            <p className="text-gray-700 text-base">
              Transparency and convenience are the pillars of our services. We
              believe in offering an effortless gifting experience, ensuring no
              hidden charges or complexities. With instant delivery options,
              your heartfelt gift reaches its destination promptly, adding joy
              to every celebration.
            </p>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-4 bg-white rounded-3xl overflow-hidden border">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">
              Committed to Excellence
            </div>
            <p className="text-gray-700 text-base">
              Our team of passionate professionals is committed to excellence in
              everything we do. From curating a wide range of gift cards to
              providing exceptional customer support, we aim to exceed your
              expectations and make your gifting journey seamless.
            </p>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-4 bg-white rounded-3xl overflow-hidden border">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">Gratitude</div>
            <p className="text-gray-700 text-base">
              As we celebrate 7 years of touching lives and creating smiles, we
              extend our heartfelt gratitude to our valued clients, partners,
              and customers. Your unwavering support and trust have been our
              driving force, inspiring us to constantly innovate and improve our
              services.
            </p>
          </div>
        </div>
        <div className="max-w-xs mx-2 my-4 bg-white rounded-3xl overflow-hidden border">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">
              Join the gifting journey
            </div>
            <p className="text-gray-700 text-base">
              Whether you are a business seeking corporate gifting solutions or
              an individual looking to make someone's day brighter, we welcome
              you to join us on our joyous gifting journey. Together, let's make
              every occasion more special and spread the joy of giving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
