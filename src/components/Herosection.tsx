import { DownloadOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import TypographyHeading from "./common/TypographyHeading";
import TypographyParagraphs from "./common/TypographyParagraphs";
import TypographySubHeading from "./common/TypographySubHeading";

export default function Herosection() {
  return (
    <div className="hero-container h-hero flex flex-col justify-end w-full items-center">
      <TypographyHeading className="my-name text-center text-primary-900 mb-6">
        <h2 className="my-name-is uppercase">mohamed echbiy</h2>
      </TypographyHeading>
      <div className="what-i-am mb-6">
        <TypographySubHeading className="i-am-a">
          <span className="uppercase text-primary-900 font-semibold">mern</span>
          <span> Stack Developer</span>
        </TypographySubHeading>
      </div>
      <div className="icons-to-contact-me flex gap-2 items-center">
        <a href="" target="_blank">
          <LinkedIn />
        </a>
        <a href="" target="_blank">
          <GitHub />
        </a>
        <a
          href=""
          target="_blank"
          title="download resume"
          className="sm:hidden"
        >
          <DownloadOutlined />
        </a>
      </div>
      <div className="avatar">
        <img src="./avatar.webp" alt="avatar" className="max-w-full" />
      </div>
    </div>
  );
}
