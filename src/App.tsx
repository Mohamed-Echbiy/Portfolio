import { useState } from "react";
import Box from "./components/common/Box";
import TypographyHeading from "./components/common/TypographyHeading";
import TypographyParagraphs from "./components/common/TypographyParagraphs";
import TypographySubHeading from "./components/common/TypographySubHeading";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="app dark:text-white min-h-screen max-1900">
      <section className="dark:bg-bgDark bg-bgLight bg-no-repeat bg-cover bg-center w-full min-h-screen">
        <Navbar />
        <Herosection />
      </section>
      <section className="about-me bg-about-bg bg-no-repeat bg-cover bg-center min-h-fit ">
        <div className="container px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col justify-center w-full h-full max-w-1900">
          <Box className="h-full  pr-2w-full" justify="center">
            <div className="max-w-lg md:text-center">
              <TypographyHeading className="w-full pt-12 md:pt-24 mb-6">
                <h4 className="uppercase">About me</h4>
              </TypographyHeading>
              <TypographySubHeading>
                <p>
                  <span className="uppercase pr-2 text-primary-900 font-semibold">
                    MERN
                  </span>
                  Stack Developer with over a year of experience building and
                  turning ideas into fast, dynamic, and scalable websites
                  without ignoring the Ui effects, and animations and creating
                  intuitive, dynamic user experiences. also driven by new
                  technologies and aiming to improve and follow best practices.
                </p>
              </TypographySubHeading>
            </div>
            <div className="image-container max-w-xl min-w-290">
              <img src="./about-image.webp" alt="" className="w-full " />
            </div>
          </Box>
        </div>
      </section>
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
