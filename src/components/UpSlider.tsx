"use client";

import { slideUp } from "@/utils/motion";
import { motion } from "framer-motion";

export default function UpSlider({ children }: { children: React.ReactNode }) {
  return <motion.div variants={slideUp}>{children}</motion.div>;
}
