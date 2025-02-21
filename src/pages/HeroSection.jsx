import React from "react";

const HeroSection = () => {
  return (
    <section className="h-auto w-full bg-lime-200 py-10 flex flex-col gap-6 md:flex-row justify-evenly items-center">
      <div>
        <img src="dp.jpg" alt="" className="w-72 md:w-80 rounded-full" />
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <p className="font-bold text-gray-700 text-xl">Hello I'm</p>
        <p className="text-5xl font-bold text-neutral-800">Bharat</p>
        <p className="text-4xl text-gray-700 font-bold">MERN Stack Developer</p>
        <div className="flex gap-7">
          <button className="px-3 py-1 bg-amber-400 rounded-full text-neutral-800 font-semibold">
            <a href="./Bharat_Resume.pdf" download>
              Download Resume
            </a>
          </button>
          <button className="px-3 py-1 bg-orange-600 rounded-full text-white font-semibold">
            <a href="#contact-section">Contact info</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
