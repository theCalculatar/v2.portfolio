"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { containerVariants, initialChild, previewChild } from "@/utils/motion";

function TextFlip({
  className = "",
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  const [flipped, setFilp] = useState(false);
  const toogleFlip = () => setFilp(!flipped);

  return (
    <motion.div
      className={`relative overflow-hidden flex items-center ${className} `}
      onMouseEnter={toogleFlip}
      onMouseLeave={() => {
        if (flipped) toogleFlip();
      }}
      onClick={toogleFlip}
      variants={containerVariants}
      initial="hidden"
      animate={flipped ? "visible" : "hidden"}
    >
      <motion.div className="text-flip h-5 flex flex-col justify-center sm:transition-transform duration-300 ease-in-out cursor-pointer">
        {React.Children.map(children, (child, i) => (
          <motion.div
            key={i}
            variants={i % 2 == 0 ? initialChild : previewChild}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default TextFlip;
