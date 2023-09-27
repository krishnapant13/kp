import React from "react";
import "react-typist/dist/Typist.css";
import dev from "../assets/dev.png";

import "../App.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidBriefcase } from "react-icons/bi";
import { useColor } from "./ColorContext";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const { color } = useColor();
  return (
    <div className="relative w-full">
      <div className="w-full flex flex-col md:flex-row relative">
        <div className="flex justify-center items-center md:w-1/2 w-[100%] md:my-0 my-10 md:h-[100vh] h-[50vh]">
          <img src={dev} alt="" className="w-[30em] h-[30em]" />
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-[100vh] flex justify-start items-center mt-4 md:mt-0">
          <div className="flex flex-col items-start justify-start md:p-5 p-1">
            <p className="text-[1.5em] font-[400] ">HI THERE! </p>
            <div className="flex">
              <p className="md:text-[2.5em] text-[2em] font-[400] ">I'M &nbsp;</p>
              <TypeAnimation
                sequence={[
                  "KRISHNA PANT",
                  1000,
                  "WEB DEVELOPER",
                  1000,
                  "ECOPHILE",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                className="md:text-[2.5em] text-[2em]"
                style={{
                  color: color,
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>
            <p className="text-start text-[1em] md:w-[80%]">
              I'm a Freelance UI/UX Designer and Developer based in Kausani
              (Almora, Uttarakhand), India. I strive to build immersive and
              beautiful web applications through carefully crafted code and
              user-centric design. Have experience with MERN stack.
            </p>
            <div className="flex md:flex-row flex-col justify-start md:mb-0 mb-4 items-center w-full mt-[3em]">
              <Link to="/about">
                <div
                  className={`p-4 w-[15em] rounded-full text-white font-[400] flex justify-center items-center mb-[1em] 800px:mb-0 md:mr-[1em]`}
                  style={{ backgroundColor: color }}
                >
                  <FaUser className="mr-[0.5em]" size={17} color="white" />
                  MORE ABOUT ME
                </div>
              </Link>{" "}
              <Link to="/portfolio">
                <div
                  className="p-4 w-[15em] border rounded-full text-white font-[400] flex justify-center items-center"
                  style={{ borderColor: color }}
                >
                  <BiSolidBriefcase
                    className="mr-[0.5em]"
                    size={17}
                    color="white"
                  />
                  PORTFOLIO
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
