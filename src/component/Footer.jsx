import React from "react";
import homebg from "../assets/home-bg-1.webp";
import logo from "../assets/logo.webp";
const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-4 "
    >
      <div className="bg-white shadow-md w-[50%] mx-auto p-3 rounded-[24px] ">
        <img className="w-32" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
