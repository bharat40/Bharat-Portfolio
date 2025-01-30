import React from "react";
import TabComponent from "../components/TabComponent";

const AboutSection = () => {
  return (
    <section className="w-full h-auto py-10">
      <div className="flex flex-col items-center gap-7 px-10 text-neutral-800 mb-8">
        <h1 className="text-5xl font-bold" id="about-section">About Me</h1>
        <p className="text-wrap">
          Driven Full Stack Developer skilled in HTML, CSS, JavaScript, ReactJS,
          Node.js, Express.js, MongoDB, and Tailwind CSS. Proficient in
          Object-Oriented Programming with C++ and solving complex problems on
          platforms like LeetCode, Code360. A calm, collaborative team player
          passionate about building scalable, user-centric web applications
        </p>
      </div>
      <TabComponent />
    </section>
  );
};

export default AboutSection;
