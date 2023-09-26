import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {  FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useColor } from "./ColorContext";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidBriefcase } from "react-icons/bi";
import { TiMessages } from "react-icons/ti"
import { TbBrandBlogger } from "react-icons/tb"

const Navigators = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActiveIndex] = useState(0);
  const { color } = useColor();
  const calculateTop = (active) => {
    const topValue = active * 2.1;
    return `${topValue}em`;
  };
  const indicatorText = (active) => {
    switch (active) {
      case 1:
        return "About";
      case 2:
        return "Portfolio";
      case 3:
        return "Contact";
      case 4:
        return "Blog";
      default:
        return "Home";
    }
  };

  return (
    <div
      className={`fixed ${
        expanded ? "h-auto" : ""
      } rounded-full top-[1em] p-3 left-[1em] h-[3em] w-[3em] bg-[#333] transition-height duration-1000 ease-in-out`}
    >
      {expanded ? (
        <IoCloseSharp
          size={20}
          color={color}
          className={`cursor-pointer m-auto mb-2`}
          onClick={() => setExpanded(false)}
        />
      ) : (
        <GiHamburgerMenu
          size={20}
          color={color}
          className="cursor-pointer m-auto"
          onClick={() => setExpanded(true)}
        />
      )}
      {expanded && (
        <div className="flex flex-col justify-center items-center relative pb-2">
          {/* active index indicator */}
          <div
            className={`absolute flex justify-center items-center left-[2em] transition-all duration-300 ease-in-out`}
            style={{
              top: calculateTop(active),
            }}
          >
            <div
              className="h-[1em] w-[0.2em] mr-2"
              style={{
                backgroundColor: color,
              }}
            />
            <p style={{ color: color }}>{indicatorText(active)}</p>
          </div>

          <Link to="/" onClick={() => setActiveIndex(0)}>
            <FaHome
              size={15}
              className="m-2 "
              color={active === 0 ? color : "white"}
            />
          </Link>
          <Link to="/about" onClick={() => setActiveIndex(1)}>
            <FaUser
              size={15}
              className="m-2"
              color={active === 1 ? color : "white"}
            />
          </Link>
          <Link to="/portfolio" onClick={() => setActiveIndex(2)}>
            <BiSolidBriefcase
              size={15}
              className="m-2"
              color={active === 2 ? color : "white"}
            />
          </Link>
          <Link to="/contact" onClick={() => setActiveIndex(3)}>
            <TiMessages
              size={15}
              className="m-2"
              color={active === 3 ? color : "white"}
            />
          </Link>
          <Link to="/blog" onClick={() => setActiveIndex(4)}>
            <TbBrandBlogger
              size={15}
              className="m-2"
              color={active === 4 ? color : "white"}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigators;
