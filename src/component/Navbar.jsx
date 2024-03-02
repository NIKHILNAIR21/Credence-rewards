import React from "react";
import logo from "../assets/logo.webp";
import User from "../assets/Avatar.webp";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="py-7  ">
      <nav className="hidden sm:flex mx-auto pt-3 bg-white p-3 justify-between items-center rounded-[24px]  shadow-lg w-[60%]">
        <div>
          <img className="w-44 pb-3" src={logo} alt="" />
        </div>
        <ul className="flex justify-center items-center gap-5 text-[#7C7C7C] transition-all delay-100 font-medium text-[14px]">
          <li className="cursor-pointer hover:text-black">ABOUT US</li>
          <Link to="/brands">
            <li className="cursor-pointer hover:text-black">BRANDS</li>
          </Link>
          <li className="cursor-pointer hover:text-black">CORPORATE GIFTING</li>
          <li className="cursor-pointer hover:text-black">CATEGORIES</li>
          <li className="cursor-pointer hover:text-black">CHECK BALANCE</li>
        </ul>
        <div>
          <img className="w-[49px] h-[49px]" src={User} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
