"use client";
import { useState } from "react";
import Image from "next/image";
import Hamburger from "./Hamburger";
import { linkStyle, btnHoverActive } from "@/utils/constant";
import Link from 'next/link';
interface NavBarProps {
  isActive: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-center">
      <div className="w-[90%] flex flex-wrap items-center justify-between mt-[5px] pb-[40px]">
        {/* Logo */}
        <div className="flex-1">
          <Image
            alt="Alet logo"
            src="/asset/icon/alet_logo.svg"
            width={120}
            height={40}
          />
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="flex-2 hidden lg:flex justify-center gap-[40px] font-plus-jakarta text-[18px] font-medium leading-[27px] tracking-[-0.02em] text-[#262C41]">
          <a href="#products" className="hover:text-[#37AE37]">
            Products
          </a>
          <a href="#pricing" className="hover:text-[#37AE37]">
            Pricing
          </a>
          <a href="/Docs_Page" className="hover:text-[#37AE37]">
            Docs
          </a>
        </div>

        <div className="lg:hidden flex items-center justify-center">
          <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="w-full px-4 lg:hidden">
            <div className="flex justify-center flex-col  gap-4 font-plus-jakarta text-[18px] font-medium text-[#262C41] mt-4">
              <a href="#products" className={linkStyle}>
                Products
              </a>
              <a href="#pricing" className={linkStyle}>
                Pricing
              </a>
              <a href="#docs" className={linkStyle}>
                Docs
              </a>
              <a href="#login" className={linkStyle}>
                Login
              </a>
              <button
                className={`h-[52px] w-full bg-gradient-to-l from-[#6FBE59] to-[#37AE37] text-white rounded-[30px] mt-2 ${btnHoverActive}`}
              >
                Get Demo
              </button>
            </div>
          </div>
        )}

        {/* Right Side Links for Large Screens Only */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
          <a href="#login" className="hover:text-[#37AE37]">
            Login
          </a>
          <button
            className={`h-[52px] w-[125px] bg-gradient-to-l from-[#6FBE59] to-[#37AE37] text-white rounded-[30px] hover:from-[#5EAA4E] hover:to-[#2F992F] 
                          active:from-[#4A8D43] active:to-[#267826] 
                          transition duration-200 ease-in-out transform hover:scale-105 active:scale-95`}
          >
            Get Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
