import { motion } from "framer-motion";
import React, { ReactComponentElement, ReactNode } from "react";

interface ButtonProps {
  text: String;
  icon?: React.ReactNode;
}

export default function Button({ text, icon }: ButtonProps) {
  return (
    <motion.button
      className="button text-white w-fit gap-2 capitalize flex justify-between p-2 bg-emerald-900 rounded"
      whileHover={{
        boxShadow:
          "0px 0px 0px 2px rgba(255, 255, 255, 0.16) inset, 0px 0px 30px 0px #2ded86",
        scale: 1.1,
      }}
      transition={{ duration: 0.4 }}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </motion.button>
  );
}
