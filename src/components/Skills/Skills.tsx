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
      className="Skills-sections relative overflow-hidden my-24"
      id="skills"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="skill-image  w-full max-w-full">
        <img
          src="./skills-section.png"
          alt="my list of skills"
          className="w-full"
        />
      </div>
    </motion.section>
  );
}
