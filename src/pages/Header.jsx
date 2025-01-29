import React from "react";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="h-14 text-neutral-800 flex justify-between items-center px-10">
      <div>
        <span className="font-bold text-4xl">Bharat</span>
      </div>

      <ul className="md:flex gap-8 font-semibold text-lg hidden">
        <li className="hover:text-amber-400">About</li>
        <li className="hover:text-amber-400">Projects</li>
        <li className="hover:text-amber-400">Contact</li>
      </ul>
      <div className="md:hidden w-auto">
        <IoMenuSharp className="text-2xl" />
      </div>
    </nav>
  );
};

export default Header;
