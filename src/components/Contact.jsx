import React from "react";
import { useColor } from "./ColorContext";
import { Grid } from "@mui/material";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsWhatsapp,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  const { color } = useColor();
  const sendMail = () => {

  };
  return (
    <div className="800px:p-10 p-2 mt-3 800px:mt-0 items-center">
      <h2 className=" font-[800] text-[2em] 800px:text-[3em] font-Poppins">
        <span> GET</span> <span style={{ color: color }}>IN TOUCH</span>
      </h2>

      <div className="flex justify-center items-center">
        <div
          className={` hidden 800px:block h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
        <p className="800px:px-5 px-1">
          I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.
        </p>
        <div
          className={`  hidden 800px:block  h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
      </div>
      <Grid container className="mt-[3em] px-2 md:px-[7em]">
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <div className="flex flex-col">
            <p className="text-start">Phone</p>
            <div className="flex justify-start items-center mt-2">
              <BsPhone size={20} color={color} className="mr-4" />
              <p>+91 817 154 7108</p>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <p className="text-start">E-mail</p>
            <div className="flex justify-start items-center mt-2">
              <GrMail size={20} color={color} className="mr-4" />
              <p>krishnapant1303@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <p className="text-start">Instagram</p>
            <div className="flex justify-start items-center mt-2">
              <BsInstagram size={20} color={color} className="mr-4" />
              <p>this.kp</p>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <p className="text-start">LinkedIn</p>
            <div className="flex justify-start items-center mt-2">
              <BsLinkedin size={20} color={color} className="mr-4" />
              <p>krishna-pant-139883155</p>
            </div>
          </div>{" "}
          <div className="flex flex-col mt-6">
            <p className="text-start">Social Profiles</p>
            <div className="flex justify-start items-center mt-2">
              <a
                href="https://www.facebook.com/kayp978555"
                target="_blank"
                rel="noreferrer"
                className={`border border-1 p-2 rounded-full mr-2`}
                style={{ borderColor: color }}
              >
                <BsFacebook size={15} color={color} />
              </a>
              <a
                href="https://www.instagram.com/this.kp/"
                target="_blank"
                rel="noreferrer"
                className={`border border-1 p-2 rounded-full mr-2`}
                style={{ borderColor: color }}
              >
                <BsInstagram size={15} color={color} />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-pant-139883155/"
                target="_blank"
                rel="noreferrer"
                className={`border border-1 p-2 rounded-full mr-2`}
                style={{ borderColor: color }}
              >
                <BsLinkedin size={15} color={color} />
              </a>
              <a
                href="mailto:krishnapant1303@gmail.com"
                rel="noreferrer"
                className={`border border-1 p-2 rounded-full mr-2`}
                style={{ borderColor: color }}
              >
                <GrMail size={15} color={color} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=7500978555&text=Hi There! I am sending this message through your portfolio app."
                rel="noreferrer"
                className={`border border-1 p-2 rounded-full mr-2`}
                style={{ borderColor: color }}
              >
                <BsWhatsapp size={15} color={color} />
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <div className="flex flex-col items-center md:m-0 mt-[4em]">
            {" "}
            <p className="md:text-start text-center md:p-0 p-1 text-base leading-8">
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
          </div>

          <form onSubmit={sendMail}>
            <input type="text" className="p-3 bg-[#333]" />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
