// components/Hamburger.js
import React from "react";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none"
      aria-label="Toggle menu"
    >
      {/* Top line */}
      <span
        className={`block w-8 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />

      {/* Middle line */}
      <span
        className={`block w-8 h-0.5 bg-gray-800 transition duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      />

      {/* Bottom line */}
      <span
        className={`block w-8 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
