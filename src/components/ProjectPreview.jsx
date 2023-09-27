import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { RxCross1, RxLapTimer } from "react-icons/rx";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { PiHandCoinsBold } from "react-icons/pi";
import github from "../assets/github.png";
import ProjectScreen from "./ProjectScreen";
import { useColor } from "./ColorContext";

const ProjectPreview = ({ visible, onClose, projectData }) => {
  const [iFrame, setIframe] = useState(false);
  const { color } = useColor();
  return (
    <div className="overflow-scroll ">
      {visible && (
        <div
          className={`${
            visible
              ? "translate-x-0 transition-transform ease-in"
              : "translate-x-full transition-transform ease-out"
          } w-full flex justify-center fixed top-0 right-0 h-screen overflow-scroll mb-5`}
        >
          <div
            className=" w-[50%] hidden md:block bg-[#00000096]"
            onClick={() => onClose()}
          ></div>
          <div
            className={`800px:w-[50%] w-full bg-[#333]  p-6 overflow-scroll`}
          >
            <img
              src={projectData?.imgUrl}
              alt={projectData?.name}
              className="w-full h-[22em] rounded-md object-contain"
            />
            <div className=" flex justify-between items-center">
              <h2
                className="font-[600] text-[1.5em] md:text-[2.7em] mt-2"
                style={{ color: color }}
              >
                {projectData?.name}
              </h2>
              <div className="flex justify-center items-center">
                <a
                  href={projectData.githubFE}
                  target="_blank"
                  title="Frontend"
                  rel="noreferrer"
                  className=" rounded-full w-[2em] h-[2em] m-1"
                  style={{ backgroundColor: color }}
                >
                  <img src={github} className="w-[2em] h-[2em]" alt="Github" />
                </a>{" "}
                {projectData?.githubBE && (
                  <a
                    href={projectData?.githubBE}
                    target="_blank"
                    title="Frontend"
                    rel="noreferrer"
                    className=" rounded-full w-[2em] h-[2em] m-1"
                    style={{ backgroundColor: color }}
                  >
                    <img
                      src={github}
                      className="w-[2em] h-[2em]"
                      alt="Github"
                    />
                  </a>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex  md:flex-row flex-col ">
                <div className=" md:w-[20%]  w-full">
                  <div className="flex justify-start items-center">
                    <MdOutlineDescription
                      size={20}
                      color={color}
                      className="mr-2"
                    />
                    <p className="text-[1.2em] md:text-[1em] md:my-0 my-2">
                      {"Project:"}
                    </p>
                  </div>
                </div>
                <p className="text-start   md:w-[80%] w-full">
                  {projectData?.description}
                </p>
              </div>
              <div className="flex mt-4 md:flex-row flex-col">
                <div className="md:w-[20%]  w-full">
                  <div className="flex justify-start items-center ">
                    <FaCode size={20} className="mr-2" color={color} />
                    <p className="text-[1.2em] md:text-[1em] md:my-0 my-2">
                      {"Technology:"}{" "}
                    </p>
                  </div>
                </div>
                <div className="text-start  md:w-[80%] w-full">
                  {Object.entries(projectData.TechStack).map(([key, value]) => (
                    <h3 key={key}>
                      <strong style={{ color: color }}>
                        {key}:&nbsp;&nbsp;{" "}
                      </strong>{" "}
                      {value}
                    </h3>
                  ))}
                </div>
              </div>
              <div className="flex mt-4 md:flex-row flex-col">
                <div className=" md:w-[20%] w-full">
                  {" "}
                  <div className="flex justify-start items-center">
                    <PiHandCoinsBold size={20} className="mr-2" color={color} />
                    <p className="text-[1.2em] md:text-[1em] md:my-0 my-2">
                      {"Features:"}{" "}
                    </p>
                  </div>
                </div>

                <div className="text-start  md:w-[80%] w-full">
                  {projectData?.Features.map((feature, key) => (
                    <p key={key}>
                      <span>
                        <strong style={{ color: color }}>
                          {feature.header}&nbsp;&nbsp;
                        </strong>
                      </span>
                      <span>
                        {feature.points.map((point, index) => (
                          <span key={index}>{point}</span>
                        ))}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex mt-4 md:flex-row items-center flex-col">
                <div className="md:w-[20%]  w-full">
                  <div className="flex justify-start items-center ">
                    <RxLapTimer size={20} className="mr-2" color={color} />
                    <p className="text-[1.2em] md:text-[1em] md:my-0 my-2">
                      {"Duration:"}
                    </p>
                  </div>
                </div>
                <p className="font-[500] uppercase text-start md:w-[80%] w-full">
                  {projectData?.duration}{" "}
                  {!projectData.deployed && (
                    <span className="text-red-500">(Under Development)</span>
                  )}
                </p>
              </div>
            </div>

            <div
              className={`w-[10em] h-[3em] rounded-full flex justify-center items-center my-5 ${
                projectData?.deployed && "cursor-pointer"
              }`}
              onClick={() => (projectData?.deployed ? setIframe(true) : "")}
              style={{
                backgroundColor: projectData?.deployed ? color : "#474747",
              }}
            >
              <BsBoxArrowUpRight size={15} />
              <span className=" text-white font-[400] mx-2">Preview</span>
            </div>

            <div
              className="w-[4em] h-[2em] absolute top-6 right-0 text-white cursor-pointer"
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
