import React from "react";
import { RxCross1 } from "react-icons/rx";

const PostDetails = ({ title, description, url, onClose }) => {
  return (
    <div className="absolute top-0 left-0  w-full h-screen bg-[#000000b9] flex justify-center items-center">
      <div className="h-[90vh] w-[60%] bg-[#333] rounded-lg p-6 flex justify-center items-center relative">
        <img
          src={url}
          alt={title}
          className="rounded-lg w-full h-[40%] bg-cover"
        />
        <p className="text-[2em] font-Poppins font-[400] text-start uppercase">
          {title}
        </p>
        <p className=" text-start ">{description}</p>
        <RxCross1
          size={20}
          className="absolute right-2 top-2"
          onClick={() => onClose}
        />
      </div>
    </div>
  );
};

export default PostDetails;
