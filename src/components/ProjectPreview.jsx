import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { RxCross1, RxLapTimer } from "react-icons/rx";
import { BsBoxArrowUpRight } from "react-icons/bs";
import github from "../assets/github.png";
import ProjectScreen from "./ProjectScreen";
import { useColor } from "./ColorContext";

const ProjectPreview = ({ visible, onClose, projectData }) => {
  const [iFrame, setIframe] = useState(false);
  const slideClass = visible ? "translate-x-0" : "translate-x-full";
  const { color } = useColor();
  return (
    <div>
      {visible && (
        <div className="w-full flex justify-center fixed top-0 right-0 h-screen">
          <div
            className=" w-[50%] hidden md:block bg-[#00000096]"
            onClick={() => onClose()}
          ></div>
          <div
            className={`800px:w-[50%] w-full bg-[#333] ${slideClass} transition-transform duration-300 p-6`}
          >
            <img
              src={projectData?.imgUrl}
              alt={projectData?.name}
              className="w-full h-[22em] rounded-md object-contain"
            />
            <div className=" flex justify-between items-center">
              <h2
                className="font-[600] text-[2.7em] mt-2"
                style={{ color: color }}
              >
                {projectData?.name}
              </h2>
              <a
                href={projectData.github}
                target="_blank"
                rel="noreferrer"
                className=" rounded-full w-[3em] h-[3em]"
                style={{ backgroundColor: color }}
              >
                <img src={github} className="w-[3em] h-[3em]" alt="Github" />
              </a>
            </div>
            <ul>
              <li>
                <div className="flex justify-start items-center mt-2">
                  {" "}
                  <MdOutlineDescription size={15} className="mr-2" />
                  <p>{"Project:"} &nbsp;</p>
                  <p className="font-[500] uppercase">
                    {projectData?.description}
                  </p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center mt-2 ">
                  <FaCode size={15} className="mr-2" />
                  <p>{"Technology:"} &nbsp;</p>
                  <p className="font-[500] uppercase">
                    {projectData?.technology}
                  </p>
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center mt-2 ">
                  <RxLapTimer size={15} className="mr-2" />
                  <p>{"Duration:"} &nbsp;</p>
                  <p className="font-[500] uppercase">
                    {projectData?.duration}
                  </p>
                </div>
              </li>
            </ul>

            <div
              className="w-[10em] h-[3em] rounded-full flex justify-center items-center mt-5 cursor-pointer"
              onClick={() => setIframe(true)}
              style={{ backgroundColor: color }}
            >
              <BsBoxArrowUpRight size={15} />
              <span className=" text-white font-[400] mx-2">Preview</span>
            </div>

            <div
              className="w-[4em] h-[2em] absolute top-2 text-white cursor-pointer"
              onClick={() => onClose()}
            >
              <RxCross1 size={20} color="white" />
            </div>
          </div>
          {iFrame && (
            <div className="absolute w-full h-screen">
              <ProjectScreen
                url={projectData.url}
                name={projectData.name}
                onClose={() => setIframe(false)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectPreview;
