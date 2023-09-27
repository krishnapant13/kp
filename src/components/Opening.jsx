import React, { useEffect, useState } from "react";
import { useColor } from "./ColorContext";

const Opening = () => {
  const [width, setWidth] = useState(0);
  const [shutter, setShutter] = useState(false);
  const [isBottomDivVisible, setIsBottomDivVisible] = useState(true);
  const { color } = useColor();

  useEffect(() => {
    const interval = setInterval(() => {
      if (width < 100) {
        setWidth(width + 1);
        if (width === 99) {
          setShutter(true);
          setTimeout(() => {
            setIsBottomDivVisible(false);
          }, 500);
        }
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [width]);

  return (
    <div>
      <div
        className={`bg-black z-[2] h-[50vh] w-full absolute top-0 transition-transform duration-500 ${
          shutter ? "translate-y-[-100%]" : "translate-y-0"
        }`}
      >
        <h1 className="font-[600] text-white font-Poppins z-[3] w-full text-[3em] absolute md:bottom-12 bottom-[2em] text-center m-auto">
          KRISHNA
        </h1>
      </div>
      <div
        className={`${
          shutter ? "hidden" : "block"
        } w-full h-2 z-[3] bg-white rounded absolute top-[50%]`}
      >
        <div
          className="h-full z-[3]  rounded transition-width duration-100"
          style={{ width: `${width}%`, backgroundColor: color }}
        ></div>
      </div>
      {isBottomDivVisible && (
        <div
          className={`bg-black z-[2] h-[50vh] w-full absolute bottom-0 transition-transform duration-500 ${
            shutter ? "translate-y-[100%]" : "translate-y-0"
          }`}
        >
          <h1 className="font-[600] text-white font-Poppins z-[3] w-full text-[3em] absolute md:top-12 top-[2em] text-center m-auto">
            PANT
          </h1>
        </div>
      )}
    </div>
  );
};

export default Opening;
