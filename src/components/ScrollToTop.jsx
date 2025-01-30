import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  return (
    <a
      href="#header-section"
      className="fixed bottom-7 right-4"
    >
      <FaArrowAltCircleUp className="text-3xl"/>
    </a>
  );
};

export default ScrollToTop;
