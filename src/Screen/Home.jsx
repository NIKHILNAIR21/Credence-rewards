import React, { Suspense } from "react";
import Navbar from "../component/Navbar";
import HomeCarousel from "../component/HomeCarousel";
import SmallCarousel from "../component/SmallCarousel";
import "../component/slide.css";
import homebg from "../assets/home-bg-1.webp";
import CompanyList from "../component/CompanyList";
import Deals from "../component/Deals";
import SearchBar from "../component/SearchBar";
import "../component/slide.css";
import Popular from "../component/Popular";
import NewsLetter from "../component/NewsLetter";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div className="relative z-40 w-[27rem] sm:w-full bg-[#EAEAEA]">
      <SearchBar />
      <HomeCarousel />
      <div className="marquee-container bg-gradient-to-b from-black from-10% to-white/10 p-3 font-bold ">
        <ul className="marquee text-white">
          <li>ELECTRONICS</li>
          <li>FASHION</li>
          <li>LIFESTYLE</li>
          <li>TRAVEL</li>
          <li>ENTERTAINMENT</li>
          <li>LUXURY</li>
          <li>FOOD</li>
          <li>TRAVEL</li>
          <li>ENTERTAINMENT</li>
          <li>LUXURY</li>
          <li>FOOD</li>
          <li>GROCERY</li>
          <li>BEAUTY</li>
          <li>ENTERTAINMENT</li>
          <li>LUXURY</li>
          <li>FOOD</li>
          <li>GROCERY</li>
          <li>BEAUTY</li>

          <li>ELECTRONICS</li>
          <li>FASHION</li>
          <li>LIFESTYLE</li>
          <li>TRAVEL</li>
          <li>ENTERTAINMENT</li>
          <li>LUXURY</li>
          <li>FOOD</li>
          <li>TRAVEL</li>
          <li>ENTERTAINMENT</li>
          <li>LUXURY</li>
          <li>FOOD</li>
          <li>GROCERY</li>
          <li>BEAUTY</li>
        </ul>
      </div>
      <SmallCarousel />
      <CompanyList />
      <Deals />
      <div></div>
      <Popular />
      <div className="py-10">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
