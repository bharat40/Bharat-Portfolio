import React from "react";

const ProjectCard = ({ name, image, github, live }) => {
  return (
    <div className=" w-[auto] h-[auto] flex flex-col bg-white shadow p-3 gap-2 items-center rounded hover:scale-105 duration-200">
      <div>
        <img src={image} alt="project-image" className="h-[150px]" />
      </div>
      <div>
        <h1 className="text-center text-neutral-800 font-bold">{name}</h1>
      </div>
      <div className="flex gap-3">
        <button className="bg-rose-700 px-2 py-1 rounded-full w-[100px] text-neutral-200">
          <a href={github} target="_blank">
            GitHub
          </a>
        </button>
        {live && (
          <button className="bg-amber-400 px-2 py-1 rounded-full w-[100px] text-white">
            <a href={live} target="_blank">
              Live
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
