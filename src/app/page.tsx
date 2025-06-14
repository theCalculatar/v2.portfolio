import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RoundEdges from "@/components/RoundEdges";
import { ArrowDown, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4 relative">
      <div className="absolute left-4 right-4">
        <Navbar className="" />
      </div>
      <Hero />

      <div className="flex flex-col p-6 mt-4 bg-neutral-800 rounded-2xl gap-2">
        <p className="text-sm">
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
              <Star
                fill="amber-500"
                className="text-amber-500"
                width={15}
                height={15}
              />
            </div>
            <p className="text-sm">Mabetlela Alpheus</p>
          </div>
        </div>
      </div>

      <div className="py-4 mt-6 rounded-2xl flex flex-col items-center justify-center gap-4 bg-neutral-800 text-center ">
        <h2 className="text-center flex gap-2 place-items-center">
          Projects <ArrowDown height={15} width={15} />
        </h2>

        <p className="text-sm px-6 text-pretty">
          A little something i have worked on over the years. Each one adding to
          a little piece to make a whole me.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="p-4 flex rounded-2xl marqueeContent gap-4">
          {[0, 1, 2, 3].map((project, key) => {
            return (
              <div
                className="w-48 overflow-clip object-fill imageWrapper rounded-md flex-none"
                key={key}
              >
                <Image
                  src={"/images/lee.jpeg"}
                  width={170}
                  height={86}
                  alt="qwery fork"
                  style={{ width: "196px", height: "120px", objectFit: "fill" }}
                />
              </div>
            );
          })}
        </div>
        <style>{`
          .marqueeContent {
            display: flex;
            animation: scroll 10s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      <div className="py-4 mt-4 rounded-2xl flex justify-center gap-2 bg-neutral-800 text-center items-center">
        <h2>Service </h2>
        <ArrowDown height={15} width={15} />
      </div>

      <div className="flex gap-4 flex-col mt-4 md:flex-row">
        {[0, 1, 2].map((project, key) => {
          return (
            <div className="bg-neutral-800 rounded-2xl md:max-w-1/3" key={key}>
              <RoundEdges className="px-2 bg-background" bl_1 tr_0>
                <div className="flex gap-1">
                  <Star
                    fill="#fe9a00"
                    className="text-amber-500"
                    width={10}
                    height={10}
                  />
                  <Star
                    fill="#fe9a00"
                    className="text-amber-500"
                    width={10}
                    height={10}
                  />
                  <Star
                    fill="#fe9a00"
                    className="text-amber-500"
                    width={10}
                    height={10}
                  />
                  <Star
                    fill="#fe9a00"
                    className="text-amber-500"
                    width={10}
                    height={10}
                  />
                  <Star
                    fill="#fe9a00"
                    className="text-amber-500"
                    width={10}
                    height={10}
                  />
                </div>
              </RoundEdges>
              <p className="m-4 text-sm">
                Building interactive, responsive websites using Framer.
              </p>
            </div>
          );
        })}
      </div>

      <div className="py-4 mt-6 rounded-2xl flex items-center justify-center gap-2 bg-neutral-800 text-center">
        <h2>Pricing </h2>
        <ArrowDown height={15} width={15} />
      </div>

      <div className="flex gap-4 flex-col mt-4 md:flex-row">
        {[0, 1, 3].map((key) => {
          return (
            <div
              className="bg-neutral-800 rounded-2xl md:max-w-1/3 pb-6"
              key={key}
            >
              <RoundEdges className="px-2 bg-background" bl_1 tr_0>
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
