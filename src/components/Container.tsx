"use client";

import { containerVariants } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={"show"}
      viewport={{ amount: 0.3, once: false }}
    >
      {children}
    </motion.div>
  );
}
