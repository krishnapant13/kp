import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useColor } from "./ColorContext";
import { IoCloseSharp } from "react-icons/io5";
import { BiSolidBriefcase } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { TbBrandBlogger } from "react-icons/tb";

const Navigators = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActiveIndex] = useState(
    parseInt(localStorage.getItem("activeIndex")) || 0
  );
  const { color } = useColor();
  const calculateTop = (active) => {
    const topValue = active * 2 + 0.4;
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
  const navigatorsRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("activeIndex", active.toString());
    const handleOutsideClick = (e) => {
      if (
        expanded &&
        navigatorsRef.current &&
        !navigatorsRef.current.contains(e.target) &&
        e.target.tagName !== "svg"
      ) {
        setExpanded(false);
      }
    };
    if (expanded) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [expanded, active]);

  return (
    <div
      ref={navigatorsRef}
      className={`fixed ${
        expanded ? "h-auto" : ""
      } rounded-full top-[1em] p-3 left-[1em] h-[3em] w-[3em] bg-[#333] transition-height duration-1000 ease-in-out ${
        !expanded && "cursor-pointer"
      }`}
      onClick={() => setExpanded(true)}
    >
      {expanded ? (
        <IoCloseSharp
          size={20}
          color={color}
          className={`cursor-pointer m-auto mb-2 z-9`}
          onClick={(e) => {
            e.stopPropagation(); // Stop event propagation
            setExpanded(false);
          }}
        />
      ) : (
        <GiHamburgerMenu
          size={20}
          color={color}
          className="cursor-pointer m-auto z-9"
          onClick={(e) => {
            e.stopPropagation(); // Stop event propagation
            setExpanded(true);
          }}
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
              className="h-[1.5em] w-[0.2em] mr-2"
              style={{
                backgroundColor: color,
              }}
            />
            <p style={{ color: color }}>{indicatorText(active)}</p>
          </div>

          <Link to="/" onClick={() => setActiveIndex(0)}>
            <FaHome
              size={17}
              className="m-2"
              color={active === 0 ? color : "white"}
            />
          </Link>
          <Link to="/about" onClick={() => setActiveIndex(1)}>
            <FaUser
              size={17}
              className="m-2"
              color={active === 1 ? color : "white"}
            />
          </Link>
          <Link to="/portfolio" onClick={() => setActiveIndex(2)}>
            <BiSolidBriefcase
              size={17}
              className="m-2"
              color={active === 2 ? color : "white"}
            />
          </Link>
          <Link to="/contact" onClick={() => setActiveIndex(3)}>
            <TiMessages
              size={17}
              className="m-2"
              color={active === 3 ? color : "white"}
            />
          </Link>
          <div /* to="/blog" onClick={() => setActiveIndex(4)} */ className="opacity-30">
            <TbBrandBlogger
              size={17}
              className="m-2"
              color={active === 4 ? color : "white"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigators;
