import React, { useState } from "react";

const TabComponent = () => {
  const [tabActive, setTabActive] = useState("tab1");
  const tabs = [
    { id: "tab1", label: "Technical Skills" },
    { id: "tab2", label: "Education Details" },
    { id: "tab3", label: "Personal Strengths" },
  ];
  const content = {
    tab1: (
      <div className="flex flex-col gap-4 px-9 text-wrap">
        <div className="flex gap-6">
          <span className="font-bold">Languages</span>{" "}
          <span>C, C++, Java</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Frontend Technologies</span>{" "}
          <span>React.js, Tailwind CSS, Redux, HTML, CSS, JavaScript</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Backend Technologies</span>{" "}
          <span>Node.js, Express.js, JSON Web Token</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Databases</span> <span>MongoDB, MySQL</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Developer Tools & Other Skills</span>{" "}
          <span>Git, GitHub, Postman, ThunderClient, MongoDB Compass, VSCode, Object-Oriented Programming, SQL</span>
        </div>
        <hr />
        <div className="flex gap-6">
          <span className="font-bold">Theoritcal Knowledge</span>{" "}
          <span>DBMS, AWS(EC2, S3), Operating System</span>
        </div>
      </div>
    ),
    tab2: (
      <div className="flex flex-col gap-4 px-9 text-wrap">
        <div className="flex gap-6">
          <span className="font-bold">Chitkara University</span>{" "}
          <span>Bachelor of Engineering in Computer Science </span>
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
          <span className="font-bold">Proactive & Supportive Leader</span>{" "}
          <span>
            I take initiative, guide teams with clarity, and create an environment where everyone feels empowered to contribute.
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
            className={`px-4 py-2 font-semibold ${tabActive === tab.id
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
