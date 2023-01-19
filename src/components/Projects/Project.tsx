import { Code, Language } from "@mui/icons-material";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "../common/Button";
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
const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5 },
  },
  hidden: { opacity: 0, scale: 1 },
};
export default function Project({
  title,
  description,
  websiteLink,
  githubLink,
  image1,
  image2,
}: types) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="project flex flex-col"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="pl-4">
        <TypographySubHeading className=" font-semibold mb-2">
          <h5>{title}</h5>
        </TypographySubHeading>
        <TypographyParagraphs className="mb-4">
          <p>{description}</p>
        </TypographyParagraphs>
      </div>
      <div className="links flex justify-start items-center pl-4">
        <a
          href={websiteLink}
          target="_blank"
          className="flex justify-center items-center font-semibold gap-2"
        >
          <Button text="Live" icon={<Language />} />
        </a>
        <a
          href={githubLink}
          target="_blank"
          className="ml-5 flex justify-center items-center font-semibold gap-2"
        >
          <Button text="Code" icon={<Code />} />
        </a>
      </div>
      <div className="image-box flex flex-col justify-center py-12 mx-auto min-h-fit overflow-y-hidden w-full mb-24">
        <a
          href={websiteLink}
          target="_blank"
          title={`go to ${title}`}
          className="flex gap-1 max-w-7xl mx-auto px-4 drop-shadow-2xl"
        >
          <div className="w-2/5 min-h-full max-h-image-sm md:max-h-fit flex-grow">
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
    </motion.div>
  );
}
