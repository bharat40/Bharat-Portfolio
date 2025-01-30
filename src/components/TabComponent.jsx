import React, { useState } from "react";

const TabComponent = () => {
  const [tabActive, setTabActive] = useState("tab1");
  const tabs = [
    { id: "tab1", label: "Technical Skill" },
    { id: "tab2", label: "Education" },
    { id: "tab3", label: "Personal Strength" },
  ];
  const content = {
    tab1: (
      <div className="flex flex-col gap-4 px-9 text-wrap">
        <div className="flex gap-6">
          <span className="font-bold">Languages</span>{" "}
          <span>C, C++, Java, JavaScript</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Frontend Technologies</span>{" "}
          <span>ReactJS, TailwindCSS, BootStrap, HTML, CSS</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Backend Technologies</span>{" "}
          <span>Node.js, Express.js</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Databases</span> <span>MongoDB</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Developer Tools</span>{" "}
          <span>Git, GitHub, Postman, VSCode</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Theoritcal Knowledge</span>{" "}
          <span>OOSE, DBMS, AWS, OS</span>
        </div>
      </div>
    ),
    tab2: (
      <div className="flex flex-col gap-4 px-9 text-wrap">
        <div className="flex gap-6">
          <span className="font-bold">Chitkara University</span>{" "}
          <span>Bachelor of Technology in Computer Science & Engineering</span>
          <span className="font-semibold">Punjab, India</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">DAV Public School</span>{" "}
          <span>Senior Secondary Education (CBSE) - Non-Medical</span>
          <span className="font-semibold">Haryana, India</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Air Force School</span>{" "}
          <span>Seconday Education (CBSE)</span>
          <span className="font-semibold">Haryana, India</span>
        </div>
      </div>
    ),
    tab3: (
      <div className="flex flex-col gap-4 text-wrap px-9 ">
        <div className="flex gap-6 ">
          <span className="font-bold">Team Player</span>{" "}
          <span>I collaborate well and contribute to group success</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Calm & Empathetic Listener</span>{" "}
          <span>
            I understand others' perspectives and respond with patience and care
          </span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">User-Centric Mindset</span>{" "}
          <span>
            I focus on building scalable and intuitive applications to enhance
            user experience
          </span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Problem Solver</span>{" "}
          <span>
            My experience in competitive coding shows strong analytical and
            logical thinking
          </span>
        </div>
      </div>
    ),
  };
  return (
    <div className="w-full h-max">
      <div className="flex flex-col gap-2 md:flex-row justify-center md:gap-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-semibold ${
              tabActive === tab.id
                ? "bg-orange-600 text-white rounded-full"
                : "bg-neutral-100 rounded-full"
            }`}
            onClick={() => setTabActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-3 md:mt-5 h-max min-h-48 text-neutral-800">
        {content[tabActive]}
      </div>
    </div>
  );
};

export default TabComponent;
