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
import CategoryList from "../component/CategoryList";
const Home = () => {
  return (
    <div className="relative z-40 w-[27rem] sm:w-full bg-[#EAEAEA]">
      <SearchBar />
      <HomeCarousel />
      <CategoryList />
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
