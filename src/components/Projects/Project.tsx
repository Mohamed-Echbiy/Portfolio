import { Code, Language } from "@mui/icons-material";
import React from "react";
import TypographyParagraphs from "../common/TypographyParagraphs";
import TypographySubHeading from "../common/TypographySubHeading";

interface types {
  title: string;
  description: string;
  websiteLink: string;
  githubLink: string;
  image1: string;
  image2: string;
}

export default function Project({
  title,
  description,
  websiteLink,
  githubLink,
  image1,
  image2,
}: types) {
  return (
    <div className="project flex flex-col">
      <div className="pl-4">
        <TypographySubHeading className=" font-semibold mb-2">
          <h5>{title}</h5>
        </TypographySubHeading>
        <TypographyParagraphs className="mb-4">
          <p>{description}</p>
        </TypographyParagraphs>
      </div>
      <div className="links flex justify-start items-center">
        <a
          href={websiteLink}
          target="_blank"
          className="flex justify-center items-center font-semibold gap-2"
        >
          <span>Live</span>
          <span>
            <Language />
          </span>
        </a>
        <a
          href={githubLink}
          target="_blank"
          className="ml-5 flex justify-center items-center font-semibold gap-2"
        >
          <span>Code</span>
          <span>
            <Code />
          </span>
        </a>
      </div>
      <div className="image-box flex flex-col justify-center py-12 mx-auto min-h-fit overflow-y-hidden w-full mb-24">
        <a
          href={websiteLink}
          target="_blank"
          title={`go to ${title}`}
          className="flex gap-1 max-w-7xl mx-auto px-4"
        >
          <div className="w-2/5 min-h-full max-h-imageHeight lg:max-h-fit flex-grow">
            <img
              src={image1}
              alt="project image"
              className=" w-full h-full  rounded"
            />
          </div>
          <div className="w-2/5 min-h-full max-h-image-sm md:max-h-fit flex-grow">
            <img
              src={image2}
              alt="project image"
              className="w-full h-full  rounded"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
