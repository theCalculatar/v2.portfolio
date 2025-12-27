"use client";

import { containerVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { JSX } from "react";

export default function Container({
  show = "tiny",
  children,
  className,
  as = "div",
  id,
}: {
  show?: "tiny" | "likkle" | "bit";
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
}) {
  const amount = show === "tiny" ? 0.1 : show === "likkle" ? 0.2 : 0.3;
  const MotionComponent = motion[as as keyof typeof motion] as any;
  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView={"show"}
      viewport={{ amount, once: false }}
      className={className}
      id={id}
    >
      {children}
    </MotionComponent>
  );
}
