import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full bg-neutral-800 pt-32 px-6  pb-8 rounded-2xl">
      <div className="flex gap-4 items-center">
        <Image
          src={"/images/lee.jpeg"}
          width={50}
          height={50}
          alt="my portrait"
          className="rounded-full"
        />
        <div className="flex flex-col ">
          <p className="text-lg">Alpheus Mabetlela</p>
          <p className="text-sm">Software Engineer</p>
        </div>
      </div>

      <h2 className="capitalize max-w-sm flex mt-6 font-light text-3xl text-balance">
        Turning your wildest ideas into reality.
      </h2>

      <p className="mt-6">
        Hi, I build web applications with clean code, smooth user experiences,
        and modern interfaces
      </p>

      <div className="mt-8 flex gap-4 max-w-sm text-center">
        <a
          href=""
          className="py-2 px-4 dark:bg-white bg-neutral-900 dark:text-black rounded-md text-sm w-full"
        >
          Book a Call
        </a>
        <a
          href=""
          className="py-2 px-4 rounded-md text-sm bg dark:bg-neutral-950 bg-gray-200 w-full"
        >
          View Work
        </a>
      </div>
    </div>
  );
}

export default Hero;
