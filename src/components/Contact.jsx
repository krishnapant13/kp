import React, { useState } from "react";
import { useColor } from "./ColorContext";
import { Grid } from "@mui/material";
import {
  BsChat,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsWhatsapp,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { BiSolidPaperPlane } from "react-icons/bi";

const Contact = () => {
  const { color } = useColor();
  const [name, setName] = useState("");
  const [eMail, setEmail] = useState("");
  const [mailMessage, setMessage] = useState("");
  
  const sendMail = (e) => {
    e.preventDefault();
    const email = "krishnapant1303@gmail.com";
    const subject = "MAIL FROM PORTFOLIO";
    const message = mailMessage + "\n From \n" + name + "\n" + eMail;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    setEmail("");
    setName("");
    setMessage("");
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
        <Grid item xs={12} md={12} lg={4} xl={4}>
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
        <Grid item xs={12} md={12} lg={8} xl={8}>
          <div className="flex flex-col items-center md:m-0 mt-[4em]">
            {" "}
            <p className="md:text-start text-center md:p-0 p-1 text-base leading-8">
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
          </div>

          <form onSubmit={sendMail} className="flex flex-col items-center my-4">
            <Grid container>
              <Grid item xs={12} md={12} lg={6} xl={6}>
                <div className="relative md:mr-3 mb-4 md:mb-0">
                  <input
                    type="text"
                    value={name}
                    required={true}
                    placeholder="YOUR NAME"
                    className="pl-[4em] bg-[#333] outline-none rounded-full text-[0.8em] w-full h-[4em]"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FaUser
                    size={17}
                    color="#b1afaf"
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-[1em]"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={6} xl={6}>
                <div className="relative md:ml-3">
                  <input
                    type="email"
                    value={eMail}
                    required={true}
                    placeholder="YOUR EMAIL"
                    className="pl-[4em] bg-[#333] outline-none rounded-full text-[0.8em] w-full h-[4em]"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <GrMail
                    size={17}
                    color="#b1afaf"
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-[1em]"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <div className="relative  mt-[2em]">
                  <textarea
                    rows={8}
                    value={mailMessage}
                    type="text"
                    placeholder="YOUR MESSAGE"
                    className="pl-[4em] pt-[1em] bg-[#333] rounded-xl text-[0.8em] w-full focus:outline-none border-none "
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <BsChat
                    size={17}
                    color="#b1afaf"
                    className="absolute top-[1.3em] left-0 transform -translate-y-1/2 ml-[1em]"
                  />
                </div>
              </Grid>
              <button
                className="h-[2.5em] rounded-full w-[12em] p-2 mt-[1em] mx-auto md:mx-0"
                style={{ backgroundColor: color }}
                type="submit"
              >
                <span className="flex justify-center items-center">
                  <BiSolidPaperPlane size="20" className="mr-2" />
                  <p className="font-[500] ">Send Message</p>
                </span>
              </button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
