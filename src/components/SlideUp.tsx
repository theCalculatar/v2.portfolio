"use client";

import { slideUp } from "@/utils/motion";
import { motion } from "framer-motion";

export default function SlideUp({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={slideUp} className={className}>
      {children}
    </motion.div>
  );
}
