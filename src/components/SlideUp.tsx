"use client";

import { slideUp } from "@/utils/motion";
import { motion } from "framer-motion";
import { JSX } from "react";

export default function SlideUp({
  className = "",
  children,
  as = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) {
  const MotionComponent = motion[as as keyof typeof motion] as any;
  return (
    <MotionComponent variants={slideUp} className={className}>
      {children}
    </MotionComponent>
  );
}
