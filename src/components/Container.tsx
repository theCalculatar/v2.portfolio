"use client";

import { containerVariants } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Container({
  show = "tiny",
  children,
}: {
  show?: "tiny" | "likkle" | "bit";
  children: React.ReactNode;
}) {
  const amount = show === "tiny" ? 0.1 : show === "likkle" ? 0.2 : 0.3;
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={"show"}
      viewport={{ amount, once: false }}
    >
      {children}
    </motion.div>
  );
}
