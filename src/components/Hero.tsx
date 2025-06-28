import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import dynamic from "next/dynamic";

const SlideUp = dynamic(() => import("@/components/SlideUp"), {});

function Hero() {
  return (
    <Container>
      <SlideUp>
        <div className="w-full bg-card-background pt-32 px-6  pb-8 rounded-2xl">
          <div className="flex gap-4 items-center xl:mt-20">
            <Image
              src={"/images/lee.jpeg"}
              width={50}
              height={50}
              alt="my portrait"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <h6 className="text-lg text-black dark:text-white">
                Alpheus Mabetlela
              </h6>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>

          <h1 className="capitalize max-w-sm xl:max-w-3xl flex mt-6 font-light text-3xl xl:text-5xl text-balance">
            Turning your wildest ideas into reality.
          </h1>

          <p className="mt-6 max-w-md">
            Hi, I build web applications with clean code, smooth user
            experiences, and modern interfaces
          </p>

          <div className="mt-8 xl:mt-14 flex gap-4 max-w-sm text-center">
            <Link
              href="/contact"
              className="py-2 px-4 text-white dark:bg-white bg-black dark:text-black rounded-md text-sm w-full"
            >
              Book a Call
            </Link>
            <Link
              href="/work"
              className="py-2 px-4 rounded-md text-sm text-font-primary bg-background w-full"
            >
              View Work
            </Link>
          </div>
        </div>
      </SlideUp>
      <SlideUp>
        <div className="flex flex-col p-6 mt-4 bg-card-background rounded-2xl gap-2">
          <p className="text-sm lg:text-base text-font-primary">
            Outstanding creativity & professional service from Dylut.-
          </p>

          <div className="flex gap-2">
            <Image
              src={"/images/lee.jpeg"}
              width={40}
              height={40}
              alt="lee picture"
              className="rounded-full bg-amber-500"
            />

            <div className="flex flex-col justify-center gap-1">
              <div className="flex gap-1">
                <Star
                  fill="#fe9a00"
                  className="text-amber-500"
                  width={15}
                  height={15}
                />
                <Star
                  fill="#fe9a00"
                  className="text-amber-500"
                  width={15}
                  height={15}
                />
                <Star
                  fill="#fe9a00"
                  className="text-amber-500"
                  width={15}
                  height={15}
                />
                <Star
                  fill="#fe9a00"
                  className="text-amber-500"
                  width={15}
                  height={15}
                />
                <Star className="text-amber-500" width={15} height={15} />
              </div>
              <p className="text-sm">Lutuli Hardy</p>
            </div>
          </div>
        </div>
      </SlideUp>
    </Container>
  );
}

export default Hero;
