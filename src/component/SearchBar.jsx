import React from "react";
import search from "../assets/searchBar.webp";
const SearchBar = () => {
  return (
    <div className="bg-white mt-10 p-1.5 w-[60%] mx-auto  rounded-lg border flex justify-between">
      <input
        className="outline-none w-fit p-1 rounded-lg"
        type="text"
        placeholder="Search"
      />
      <button className="">
        <img className="w-5" src={search} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
