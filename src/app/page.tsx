import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RoundEdges from "@/components/RoundEdges";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 relative">
      <div className="absolute left-4 right-4">
        <Navbar className="" />
      </div>
      <Hero />

      <div className="flex flex-col p-4 mt-4 bg-neutral-800 rounded-2xl gap-2">
        <p className="text-sm">
          Outstanding creativity & professional service from Elias.-
        </p>

        <div className="flex gap-2">
          <Image
            src={"/images/lee.jpeg"}
            width={40}
            height={40}
            alt="lee picture"
            className="rounded-full"
          />

          <div className="flex flex-col justify-center ">
            <div className="">* * * * * *</div>
            <p className="text-sm">Mabetlela Alpheus</p>
          </div>
        </div>
      </div>

      <div className="w-screen overflow-x-hidden">
        <div className="p-4 flex gap-4 overflow-x-auto">
          {[0, 1, 2, 3].map((project, key) => {
            return (
              <Image
                src={"/images/lee.jpeg"}
                width={150}
                height={80}
                key={key}
                alt="qwery fork"
                className="rounded-2xl"
              />
            );
          })}
        </div>
      </div>

      <div className="py-4 text-sm mt-4 rounded-2xl flex justify-center gap-2 bg-neutral-800 text-center">
        <p>Service </p>^
      </div>

      <div className="flex gap-4 flex-col mt-4 md:flex-row">
        {[0, 1, 2].map((project, key) => {
          return (
            <div className="bg-neutral-800 rounded-2xl md:max-w-1/3" key={key}>
              <RoundEdges className="px-2 bg-black" bl_1 tr_0>
                * * * * *
              </RoundEdges>
              <p className="m-4 text-sm">
                Building interactive, responsive websites using Framer.
              </p>
            </div>
          );
        })}
      </div>

      <div className="py-4 mt-4 rounded-2xl flex justify-center gap-2 bg-neutral-800 text-center">
        <p>Pricing </p>^
      </div>

      <div className="flex gap-4 flex-col mt-4 md:flex-row">
        {[0, 1, 3].map((key) => {
          return (
            <div
              className="bg-neutral-800 rounded-2xl md:max-w-1/3 pb-6"
              key={key}
            >
              <RoundEdges className="px-2 bg-black" bl_1 tr_0>
                <p className="text-sm">Landing Page</p>
              </RoundEdges>
              <div className="w-3/4 px-6 flex flex-col gap-1">
                <p className="text-2xl">$2500</p>
                <p className="text-md">
                  Building interactive, responsive websites using Framer.
                </p>
              </div>
              <div className="px-6 mt-4">
                <ul className="list-disc px-4 ">
                  <li className="text-sm">Design + Development</li>
                  <li className="text-sm">1 week delivery</li>
                  <li className="text-sm">framer</li>
                </ul>
              </div>

              <a
                href=""
                className="py-2 mt-2 dark:text-black text-sm mx-6 bg-white rounded-md flex justify-center"
              >
                Start Now
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
