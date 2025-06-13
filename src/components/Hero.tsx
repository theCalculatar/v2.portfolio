import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full bg-neutral-800 pt-28 px-6  pb-8 rounded-2xl">
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
        Your most wildest, Imagination to life.
      </h2>

      <p className="mt-4">
        Hi, I build web applications with clean code, smooth user experiences,
        and modern interfaces
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href=""
          className="py-2 px-4 dark:bg-white bg-neutral-900 dark:text-black rounded-md text-sm"
        >
          Book a Call
        </a>
        <a
          href=""
          className="py-2 px-4 rounded-md text-sm bg dark:bg-neutral-900 bg-gray-200 "
        >
          View Work
        </a>
      </div>

    </div>
  );
}

export default Hero;
