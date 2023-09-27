import { Grid } from "@mui/material";
import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import { styles } from "../styles";
import me from "../assets/me.jpeg";
import { useColor } from "./ColorContext";

const About = () => {
  const handleDownload = () => {
    const pdfUrl = require("../resume.pdf");
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = "Krishna_Pant_React_Developer_Resume.pdf";
    link.click();
  };
  const { color } = useColor();
  return (
    <div className="animate-slide-in-right  800px:p-5 items-center">
      <h5 className=" font-[800] text-[2em] 800px:text-[4em] font-Poppins mt-4 md:mt-0">
        <span> ABOUT</span> <span style={{ color: color }}>ME</span>
      </h5>
      <div className="flex justify-center items-center">
        <div
          className={` hidden 800px:block h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
        <p className="800px:px-5">
          I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
        </p>
        <div
          className={`  hidden 800px:block  h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
      </div>
      {/* details div */}
      <div className="md:h-[70vh] md:flex md:justify-center md:items-center 821px:pl-[8em] pl-[0.2em]">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <div
              className={` m-auto 821px:h-[25em] 821px:w-[25em] h-[15em] w-[15em] mt-[3em] relative border-[0.3em] `}
              style={{ borderColor: color }}
            >
              <img
                src={me}
                className="821px:h-[30em] 821px:w-[30em] h-[15em] w-[15em] absolute bottom-[1.5em] right-[1.5em]"
                alt=""
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            alignItems="center"
            justifyContent="center"
            container
          >
            <Grid container className="font-Roboto mt-3">
              <Grid item xs={12} sm={6} md={6} className="821px:pl-[2em]">
                <div className="flex">
                  <div className=" flex flex-col justify-center items-start">
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      First name
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Last name
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      BirthDate
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Nationality
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Experience
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Address
                    </div>
                  </div>
                  <div className=" flex flex-col  items-start">
                    <div className={` m-[0.5em]`}>Krishna</div>
                    <div className={` m-[0.5em]`}>Pant</div>
                    <div className={`m-[0.5em]`}>03-Dec-1999</div>
                    <div className={` m-[0.5em]`}>Indian</div>
                    <div className={` m-[0.5em]`}>1.5 Years</div>
                    <div className={` m-[0.5em]`}>Kausani, Almora</div>
                  </div>
                </div>
              </Grid>{" "}
              <Grid item xs={12} sm={6} md={6}>
                <div className="flex">
                  <div className=" flex flex-col justify-center items-start">
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Languages
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Phone
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      Email
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      LinkedIn
                    </div>
                    <div className={`text-[${styles.colors.gray}] m-[0.5em]`}>
                      GitHub
                    </div>
                  </div>
                  <div className=" flex flex-col  items-start">
                    <div className={` m-[0.5em]`}>English,Hindi</div>
                    <div className={` m-[0.5em]`}>
                      +91&nbsp;817&nbsp;154&nbsp;7108
                    </div>
                    <div className={` m-[0.5em]`}>
                      {" "}
                      <a
                        href="mailto:krishnapant1303@gmail.com"
                        className=" decoration-none  text-[#fff] "
                      >
                        krishnapant1303@gmail.com
                      </a>
                    </div>
                    <div className={` m-[0.5em]`}>
                      {" "}
                      <a
                        href="https://www.linkedin.com/in/krishna-pant-139883155"
                        className="decoration-none underline text-[#fff] "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit LinkedIn
                      </a>
                    </div>
                    <div className={` m-[0.5em]`}>
                      {" "}
                      <a
                        href="https://www.github.com/krishnapant13"
                        target="_blank"
                        rel="noreferrer"
                        className="decoration-none underline text-[#fff] "
                      >
                        Visit GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>{" "}
            </Grid>{" "}
            <button
              onClick={handleDownload}
              className={`font-[600] m-[1em] 821px:ml-[2.5em] rounded-full h-[2.5em] w-[15em]`}
              style={{ backgroundColor: color }}
            >
              <div className="flex justify-center items-center">
                <span>
                  <BiSolidDownload size={20} className="mr-2" />
                </span>
                Download My CV
              </div>
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
