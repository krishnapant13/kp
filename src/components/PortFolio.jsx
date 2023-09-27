import React, { useState } from "react";
import ProjectPreview from "./ProjectPreview";
import Projects from "./Projects.jsx";
import projects from "../projects";
import { useColor } from "./ColorContext";

const PortFolio = () => {
  const [visibleDetail, setVisibleDetails] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const handleProjectClick = (project) => {
    setVisibleDetails((prev) => !prev);
    setProjectData(project);
  };
  const { color } = useColor();
  return (
    <div>
      <div className="flex justify-center items-center pt-10">
        <h1 className="md:text-[55px] text-[45px] font-[900] font-Poppins text-white m-2">
          MY
        </h1>
        <h1
          className="md:text-[55px] text-[45px] font-[900] font-Poppins m-2"
          style={{ color: color }}
        >
          PORTFOLIO
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div
          className={` hidden md:block h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
        <p className="md:px-5">A FEW RECENT DESIGN AND CODING PROJECTS.</p>
        <div
          className={` hidden md:block h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center mt-[2em]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="m-4 relative w-[23em] h-[13em]"
            onClick={() => handleProjectClick(project)}
          >
            <Projects
              name={project.name}
              url={project.imgUrl}
              title={project.title}
            />
          </div>
        ))}
      </div>
      <ProjectPreview
        visible={visibleDetail}
        onClose={() => setVisibleDetails(false)}
        projectData={projectData && projectData}
      />
    </div>
  );
};

export default PortFolio;
