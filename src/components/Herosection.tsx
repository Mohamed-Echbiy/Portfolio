import { DownloadOutlined, GitHub, LinkedIn } from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import TypographyHeading from "./common/TypographyHeading";
import TypographyParagraphs from "./common/TypographyParagraphs";
import TypographySubHeading from "./common/TypographySubHeading";

export default function Herosection() {
  return (
    <div
      className="hero-container h-hero flex flex-col justify-end w-full items-center"
      id="home"
    >
      <motion.div
        className="flex flex-col justify-end w-full items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, stiffness: 150 }}
      >
        <TypographyHeading className="my-name text-center text-primary-900 mb-6">
          <h2 className="my-name-is uppercase">mohamed echbiy</h2>
        </TypographyHeading>

        <div className="what-i-am mb-6">
          <TypographySubHeading className="i-am-a">
            <span className="uppercase text-primary-900 font-semibold">
              mern
            </span>
            <span> Stack Developer</span>
          </TypographySubHeading>
        </div>
        <div className="icons-to-contact-me flex gap-2 items-center">
          <a
            href="https://www.linkedin.com/in/mohamed-echbiy-442aa9244/"
            target="_blank"
          >
            <LinkedIn />
          </a>
          <a href="https://github.com/Mohamed-Echbiy" target="_blank">
            <GitHub />
          </a>
          <a
            href="https://drive.google.com/file/d/1ITJuKI_VTjVIKwvKQz35i0fJ4-uzmaQz/view?usp=share_link"
            target="_blank"
            title="download resume"
            className="sm:hidden"
          >
            <DownloadOutlined />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="avatar"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <img src="./avatar.webp" alt="avatar" className="max-w-full" />
      </motion.div>
    </div>
  );
}
