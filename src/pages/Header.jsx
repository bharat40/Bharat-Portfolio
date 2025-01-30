import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav
      className="h-14 text-neutral-800 flex justify-between items-center px-10"
      id="header-section"
    >
      <div>
        <span className="font-bold text-4xl">Bharat</span>
      </div>

      <ul className="md:flex gap-8 font-semibold text-lg hidden">
        <li className="hover:text-amber-400">
          <a href="#about-section">About</a>
        </li>
        <li className="hover:text-amber-400">
          <a href="#project-section">Projects</a>
        </li>
        <li className="hover:text-amber-400">
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
      <div className="md:hidden w-auto relative">
        <button className="" onClick={() => setShowMenu(!showMenu)}>
          {!showMenu ? (
            <IoMenuSharp className="text-3xl" />
          ) : (
            <IoCloseSharp className="text-3xl" />
          )}
        </button>
      </div>
      {showMenu && (
        <div className="absolute top-14 left-0 w-full bg-white md:hidden">
          <ul className="flex flex-col gap-3 py-4 items-center font-semibold">
            <li className="hover:text-amber-400">
              <a href="#about-section">About</a>
            </li>
            <li className="hover:text-amber-400">
              <a href="#project-section">Projects</a>
            </li>
            <li className="hover:text-amber-400">
              <a href="#contact-section">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
