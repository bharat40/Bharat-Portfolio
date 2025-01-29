import React from "react";

const HeroSection = () => {
  return (
    <section className="h-auto w-full bg-lime-200 py-10 flex flex-col gap-6 md:flex-row justify-evenly items-center">
      <div>
        <img src="dp.jpg" alt="" className="w-80 rounded-full" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="font-bold text-neutral-700 text-xl">Hello I'm</p>
        <p className="text-5xl font-bold text-neutral-800">Bharat</p>
        <p className="text-4xl text-neutral-700 font-bold">
          Software Developer
        </p>
        <div className="flex gap-7">
          <button className="px-3 py-1 bg-amber-400 rounded-full text-neutral-800 font-semibold">
            Download CV
          </button>
          <button className="px-3 py-1 bg-orange-600 rounded-full text-white font-semibold">
            Contact info
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
