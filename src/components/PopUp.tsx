"use client";

import { popIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function PopUp({ children }: { children: React.ReactNode }) {
  return <motion.div variants={popIn}>{children}</motion.div>;
}
