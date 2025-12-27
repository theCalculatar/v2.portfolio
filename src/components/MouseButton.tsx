"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mouseNavigation } from "@/utils/motion";

function MouseButton() {
  const [mouseAnim, setMouseAnim] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMouseAnim(false);
      if (mouseAnim) {
        document
          .getElementById("projects")!
          .scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }, [mouseAnim]);
  return (
    <motion.div
      className="relative w-6 h-14 rounded-full border p-1 flex flex-col gap-2 items-center justify-center"
      animate={mouseAnim ? "show" : "hidden"}
    >
      <motion.div
        className="h-5 w-3 p-1 absolute bottom-2 border-2 border-gray-600 rounded-full z-10 bg-white"
        variants={mouseNavigation}
        onClick={() => {
          setMouseAnim(!mouseAnim);
        }}
      ></motion.div>
      <motion.div className="p-0.5 bg-gray-600 rounded-full h-0.5 w-0.5"></motion.div>
      <motion.div className="p-0.5 bg-gray-600 rounded-full h-0.5 w-0.5"></motion.div>
      <motion.div className="p-0.5 bg-gray-600 rounded-full h-0.5 w-0.5"></motion.div>
      <motion.div className="p-0.5 bg-gray-600 rounded-full h-0.5 w-0.5"></motion.div>
    </motion.div>
  );
}

export default MouseButton;
