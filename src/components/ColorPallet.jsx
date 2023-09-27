import React, { useState, useEffect, useRef } from "react";
import { IoColorFill } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { useColor } from "./ColorContext";

const ColorPallet = () => {
  const [pallet, showPallet] = useState(false);
  const { color, handleColorChange } = useColor();

  const handleColor = (color) => {
    handleColorChange(color);
  };

  const palletRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        pallet &&
        palletRef.current &&
        !palletRef.current.contains(e.target) &&
        e.target.tagName !== "svg"
      ) {
        showPallet(false);
      }
    };
    if (pallet) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [pallet]);

  return (
    <div
      ref={palletRef}
      className={`fixed bottom-[1em] left-[1em] p-2 bg-[#333] rounded-full transition-all duration-1000`}
    >
      {pallet ? (
        <AiFillCaretDown
          size={25}
          color={color}
          className="m-auto cursor-pointer"
          onClick={() => showPallet(false)}
        />
      ) : (
        <MdSettings
          size={30}
          color={color}
          className="animate-spin m-auto cursor-pointer"
          onClick={() => showPallet(true)}
        />
      )}
      {pallet && (
        <div
          className={`overflow-hidden h-[11em] transition-all duration-3000 ease-in-out`}
        >
          <IoColorFill
            size={30}
            color="red"
            className="cursor-pointer m-1"
            onClick={() => handleColor("#ff0000")}
          />
          <IoColorFill
            size={30}
            color="green"
            className="cursor-pointer m-1"
            onClick={() => handleColor("#00ff00")}
          />
          <IoColorFill
            size={30}
            color="blue"
            className="cursor-pointer m-1"
            onClick={() => handleColor("#0000ff")}
          />
          <IoColorFill
            size={30}
            color="#ff00d2"
            className="cursor-pointer m-1"
            onClick={() => handleColor("#ff00d2")}
          />
          <IoColorFill
            size={30}
            color="yellow"
            className="cursor-pointer m-1"
            onClick={() => handleColor("#ffb000")}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPallet;
