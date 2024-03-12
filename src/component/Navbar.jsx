import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import User from "../assets/Avatar.webp";
import { Link } from "react-router-dom";

const Navbar = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  let navbarClass = scrolled ? "bg-white/50 backdrop-blur-lg" : "bg-white/10";

  return (
    <div
      className={`py-3 fixed top-0 ${navbarClass} z-50 left-0 right-0 transition ease-in-out delay-150 duration-350 `}
    >
      <nav className="flex justify-between items-center mx-auto pt-3 bg-white p-3 rounded-[24px] shadow-lg w-[90%] ">
        <div>
          <Link to="/">
            <img className="w-36 lg:w-44 pb-3" src={logo} alt="" />
          </Link>
        </div>
        <ul className="hidden lg:flex font-sans text-sm font-semibold                                               justify-center gap-8 items-center w-full">
          <li>
            <Link to="/about-us" className="block py-2">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/brands" className="block py-2">
              BRANDS
            </Link>
          </li>
          <li>
            <Link to="/corporate-gifting" className="block py-2">
              CORPORATE GIFTING
            </Link>
          </li>
          <li>
            <span className="block py-2">CATEGORIES</span>
          </li>
          <Link to="/check-balance" className="block py-2">
            {" "}
            <li>
              <span className="block py-2">CHECK BALANCE</span>
            </li>
          </Link>
        </ul>
        <div className="flex items-center">
          {/* Hamburger Menu Icon */}
          <button
            onClick={toggleMobileMenu}
            className="block text-gray-800 focus:outline-none lg:hidden"
          >
            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm16 5H4v2h16v-2zm0 5H4v2h16v-2z"
              />
            </svg>
          </button>
          {/* User Avatar */}
          <div onClick={onLoginClick} className="hidden lg:block">
            <img className="w-[49px] h-[49px]" src={User} alt="" />
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className="lg:hidden">
        {mobileMenuOpen && (
          <div className="absolute top-16 right-3 bg-white rounded shadow-lg py-3 px-3">
            <ul className="font-semibold">
              <li>
                <Link to="/about-us" className="block py-2">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/brands" className="block py-2">
                  BRANDS
                </Link>
              </li>
              <li>
                <Link to="/corporate-gifting" className="block py-2">
                  CORPORATE GIFTING
                </Link>
              </li>
              <li>
                <span className="block py-2">CATEGORIES</span>
              </li>
              <Link to="/check-balance" className="block py-2">
                <li>
                  <span className="block py-2">CHECK BALANCE</span>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
