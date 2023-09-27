import React, { useState } from "react";
import { useColor } from "./ColorContext";
import { BsBook } from "react-icons/bs";

const Post = ({ date, month, title, description, url}) => {
  const { color } = useColor();
  const [open, setOpen] = useState(true);
  return (
    <div className="flex justify-center items-center m-2">
      <div>
        <div className="w-full h-[18em] overflow-hidden rounded-lg relative">
          <img
            src={url}
            alt={title}
            className="bg-contain w-full px-4 rounded-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
          />

          <div className="absolute h-[6em] top-2 right-6">
            <div
              className="flex flex-col justify-center items-center p-1 rounded-md"
              style={{ backgroundColor: color }}
            >
              <h5>{date}</h5>
              <h5>{month}</h5>
            </div>
          </div>
        </div>
        <p className="text-start font-[400] text-[1.5em] mt-3 uppercase">
          {title}
        </p>
        <p className="text-start text-[0.9em]">{description}</p>
        <div className="flex justify-start items-center w-full">
          <button
            className="h-[2.5em] rounded-full w-[12em] p-2 mt-[1em] "
            style={{ backgroundColor: color }}
            onClick={() => setOpen(true)}
          >
            <span className="flex justify-center items-center">
              <BsBook size="20" className="mr-2" />
              <p className="font-[500] ">Read More</p>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
