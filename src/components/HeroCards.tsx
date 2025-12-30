"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function HeroCards() {
  return (
    <div className="relative w-full">
      <motion.div
        className="gap-4 justify-center"
        variants={{
          hidden: {
            opacity: 0.3,
            display: "block",
            // transition: {
            //   delay: 1.5,
            //   //   duration: 0.4,
            // },
          },
          visible: {
            display: "flex",
            opacity: 1,
            transition: {
              staggerChildren: 0,
              delayChildren: 1.5,
            },
          },
        }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: "some", once: false }}
      >
        <motion.div
          className="bg-yellow-600 w-32 mt-3"
          variants={{
            hidden: {
              height: "100px",
              radius: "10px",
              position: "absolute",
              right: "-144px",
            },
            visible: {
              opacity: 1,
              marginTop: "20px",
              rotate: "calc(6deg * -1)",
              height: "128px",
              right: "0px",
              position: "relative",
              transition: {
                duration: 0.4,
              },
            },
          }}
        ></motion.div>

        <motion.div className="bg-white h-28 z-10 w-32 relative rounded-md  shadow-2xl">
          <Image
            src={"/images/lee.jpeg"}
            fill
            alt="my portrait"
            className="rounded-xl object-cover object-top select-none p-1.5 "
          />
        </motion.div>

        <motion.div
          className="bg-black w-32 z-0 p-1"
          variants={{
            hidden: {
              height: "112px",
              radius: "10px",
              position: "absolute",
              left: "calc(var(--spacing) * -32)",
            },
            visible: {
              marginTop: "20px",
              rotate: "calc(6deg)",
              height: "144px",
              position: "relative",
              left: "0px",
              transition: {
                duration: 0.4,
              },
            },
          }}
        >
          <motion.div className="md:p-2 border-1 rounded-md border-white w-full h-full flex justify-center flex-col">
            <Link
              href="/about"
              className="text-white text-sm md:text-base hover:scale-95 transition-all duration-300"
            >
              — About
            </Link>
            <Link
              href={"/work"}
              className="text-white text-sm md:text-base hover:scale-95 transition-all duration-300"
            >
              — Work
            </Link>
            <Link
              href={"#services"}
              className="text-white text-sm md:text-base hover:scale-95 transition-all duration-300"
            >
              — Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroCards;
