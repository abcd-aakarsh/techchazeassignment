import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="py-5 md:py-11 px-[22px] md:px-[120px] items-center justify-between flex">
        <div>
          <img src={logo} className="w-10 h-10" />
        </div>
        <nav className="flex items-center">
          <ul className="hidden md:flex gap-10 text-text-color font-normal pt-2 text-lg font-montserrat leading-5 ml-14">
            <li className="relative group">
              <a className="hover:cursor-pointer">Home</a>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-button-color transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a className="hover:cursor-pointer">About Us</a>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-button-color transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a className="hover:cursor-pointer">Contact Us</a>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-button-color transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <a className="hover:cursor-pointer">Blogs</a>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-button-color transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>

        <button className="bg-button-color hidden md:block border-l-0 border-t-0 border-button-border-color text-white border-r-[2px] border-b-[2px] pt-[10px] pr-[20px] pb-[11px] pl-[20px] transition-all duration-300 gap-2 leading-5 rounded-[30px] font-montserrat font-medium text-base hover:cursor-pointer hover:shadow-[6px_6px_5px_0px_#a1a1a1]">
          Donate
        </button>

        <div className="flex items-center md:hidden" onClick={toggleMobileMenu}>
          <img src={menu} />
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 backdrop-blur-sm z-50">
          <div className="flex flex-col items-center text-text-color">
            <ul className="flex flex-col gap-5 text-lg font-montserrat leading-5">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Contact Us</li>
              <li className="cursor-pointer">Blogs</li>
            </ul>
            <button className="bg-button-color mt-5 text-white rounded-[30px] px-5 py-2">
              Donate
            </button>
            <button className="mt-5 text-red-500" onClick={toggleMobileMenu}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
