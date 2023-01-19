import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Box from "../common/Box";
import TypographyHeading from "../common/TypographyHeading";
import TypographySubHeading from "../common/TypographySubHeading";

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5 },
  },
  hidden: { opacity: 0, scale: 1 },
};

export default function About() {
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
    <motion.section
      className="about-me bg-about-bg bg-no-repeat bg-cover bg-center min-h-fit "
      id="about"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
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
                turning ideas into fast, dynamic, and scalable websites without
                ignoring the Ui effects, and animations and creating intuitive,
                dynamic user experiences. also driven by new technologies and
                aiming to improve and follow best practices.
              </p>
            </TypographySubHeading>
          </div>
          <div className="image-container max-w-xl min-w-290">
            <img src="./about-image.webp" alt="" className="w-full " />
          </div>
        </Box>
      </div>
    </motion.section>
  );
}
