import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import dynamic from "next/dynamic";
import MouseButton from "./MouseButton";

const SlideUp = dynamic(() => import("@/components/SlideUp"), {});

function Hero() {
  return (
    <Container as="section" id="hero">
      <SlideUp className=" bg-card-background h-[80vh] min-h-[40rem] md:h-[48rem] flex place-items-center rounded-2xl">
        <div className="w-full pt-28 md:pt-32 px-6 rounded-2xl">
          <div className="flex gap-4 justify-center">
            <div className="bg-yellow-600 h-32 w-32 -rotate-6 mt-3"></div>
            <div className="bg-white h-28 w-32 relative rounded-md  shadow-2xl">
              <Image
                src={"/images/lee.jpeg"}
                fill
                alt="my portrait"
                className="rounded-xl object-cover object-top select-none p-1.5 "
              />
            </div>
            <div className="bg-black h-36 w-32 rotate-6 mt-3 p-1">
              <div className="md:p-2 x border-1 rounded-md border-white w-full h-full flex justify-center flex-col">
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
              </div>
            </div>
          </div>

          <div className=" w-full">
            <h1 className="mx-auto max-w-sm md:max-w-xl xl:max-w-7xl text-center mt-6 font-normal text-4xl xl:text-6xl text-primary ">
              <span className="text-gray-500">Hi, I am Alpheus, </span>I build
              cool things that lives on the internet,{" "}
              <span className="text-gray-500">with modern interfaces.</span>
            </h1>
          </div>
          <div className="mt-8 xl:mt-14 flex gap-4 max-w-sm text-center mx-auto">
            <Link
              href="/contact"
              className="py-2 px-4 text-white dark:bg-white bg-black dark:text-black rounded-md text-sm w-full"
            >
              Book a Call
            </Link>
            <Link
              href="/work"
              className="py-2 px-4 rounded-md text-sm text-gray-500 bg-background w-full"
            >
              View Work
            </Link>
          </div>
        </div>
      </SlideUp>
      <div className="flex justify-center mt-8">
        <MouseButton />
      </div>
    </Container>
  );
}

export default Hero;
