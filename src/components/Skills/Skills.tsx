import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.5 },
  },
  hidden: { opacity: 0, scale: 1 },
};

export default function Skills() {
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
      className="Skills-sections relative h-[300px] md:h-[400px] lg:h-[100vh] overflow-y-hidden my-12 lg:my-24 "
      id="skills"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="h-full w-full bg-[url('/Skills.png')] bg-no-repeat bg-center animateBg bg-contain  "></div>
      {/* <div className="skill-image  w-full max-w-full">
        <img
          src="./skills-section.png"
          alt="my list of skills"
          className="w-full"
        />
      </div> */}
    </motion.section>
  );
}
