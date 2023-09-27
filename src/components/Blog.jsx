import React from "react";
import { useColor } from "./ColorContext";
import { Grid } from "@mui/material";
import Post from "./Post";
import posts from "../posts";

const Blog = () => {
  const { color } = useColor();
  const kedar = posts.kedar;
  return (
    <div className="800px:p-10 p-2 mt-3 800px:mt-0 items-center">
      <h2 className=" font-[800] text-[2em] 800px:text-[3em] font-Poppins">
        <span> LATEST</span> <span style={{ color: color }}>POSTS</span>
      </h2>
      <div className="flex justify-center items-center">
        <div
          className={` hidden 800px:block h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
        <p className="800px:px-5 px-1 uppercase">
          I share my travel and journey experiences through a captivating photo
          library and stories.
        </p>
        <div
          className={`  hidden 800px:block  h-[2px] w-[45px]`}
          style={{ backgroundColor: color }}
        />
      </div>

      <Grid container className="mt-[3em] px-2 md:px-[7em]">
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Post
            date={kedar?.date}
            month={kedar?.month}
            title={kedar?.title}
            description={kedar?.description}
            url={kedar?.url}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Post
            date={kedar?.date}
            month={kedar?.month}
            title={kedar?.title}
            description={kedar?.description}
            url={kedar?.url}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;
