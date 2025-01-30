import React from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectSection = () => {
  return (
    <section
      className="w-full h-auto bg-neutral-100 py-10 "
      id="project-section"
    >
      <div className="flex flex-col gap-7">
        <h1 className="text-5xl text-center font-bold">Projects</h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <ProjectCard
            name="Udaariyaan"
            image="./udaariyaan.png"
            github="https://github.com/birinderr/udaariyaan"
            live={null}
          />
          <ProjectCard
            name="NoteSpot"
            image="./notespot.png"
            github="https://github.com/bharat40/NoteSpot_MERN"
            live={null}
          />
          <ProjectCard
            name="FoodNook"
            image="./foodnook.png"
            github="https://github.com/bharat40/FoodNook_ReactJS"
            live="https://darling-blini-28977e.netlify.app/"
          />
          <ProjectCard
            name="Password Generator"
            image="./passwordgenerator.png"
            github="https://github.com/bharat40/Password-Generator"
            live="https://prismatic-swan-37ecd5.netlify.app/"
          />
          <ProjectCard
            name="Social Links"
            image="./bharatsocial.png"
            github="https://github.com/bharat40/Social-Links"
            live="https://bharat-social-links.netlify.app/"
          />
          <ProjectCard
            name="Currency Convertor"
            image="./currencyconvertor.png"
            github="https://github.com/bharat40/Currency-Convertor"
            live="https://66a9137122fde34a2ef5236e--leafy-dieffenbachia-f3ec52.netlify.app/"
          />
          <ProjectCard
            name="BharatPe"
            image="./bharatpe.png"
            github="https://github.com/bharat40/BharatPe-Clone"
            live="https://jovial-pika-afae2c.netlify.app/"
          />
          <ProjectCard
            name="PW Skills"
            image="./pwskills.png"
            github="https://github.com/bharat40/PW-Skills-Clone"
            live="https://fantastic-piroshki-2f04d4.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
