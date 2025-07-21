import React from "react";
import TabComponent from "../components/TabComponent";

const AboutSection = () => {
  return (
    <section className="w-full h-auto py-10">
      <div className="flex flex-col items-center gap-7 px-10 text-neutral-800 mb-8">
        <h1 className="text-5xl font-bold" id="about-section">About Me</h1>
        <p className="text-wrap">
          Hi, I am Bharat Dhiman from Ambala Cantt, Haryana. Currently I'm in my final year pursuing Bachelor of Engineering in Computer Science from Chitkara University, Panjab. I am Aspiring Software Developer with strong technical skills, adaptability and a quick learning attitude,
          I bring a collaborative mindset to every team and thrive in dynamic environments that challenge me
          to grow. Eager to contribute and make a meaningful impact from day one
        </p>
      </div>
      <TabComponent />
    </section>
  );
};

export default AboutSection;
