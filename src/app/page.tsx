import Hero from "@/components/Hero";
import RoundEdges from "@/components/RoundEdges";
import { ArrowDown, Plus, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative">
      <Hero />

      <div className="flex flex-col p-6 mt-4 bg-card-background rounded-2xl gap-2">
        <p className="text-sm text-font-primary">
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
            <p className="text-sm">Mabetlela Alpheus</p>
          </div>
        </div>
      </div>

      <div className="py-4 mt-6 rounded-2xl flex flex-col  gap-4 ">
        <h2 className="flex gap-2 justify-start items-center text-xl">
          Projects <ArrowDown height={15} width={15} className="-rotate-135" />
        </h2>

        <p className="text-sm text-pretty">
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

      <div className="py-4 mt-4 flex items-center gap-2 ">
        <h2 className="text-lg">What I do? </h2>
        <ArrowDown height={15} width={15} />
      </div>

      <div className="flex gap-4 flex-col mt-4 md:flex-row">
        {[0, 1, 2].map((project, key) => {
          return (
            <div
              className="bg-card-background rounded-2xl md:max-w-1/3"
              key={key}
            >
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

      <div className="py-4 mt-6 flex items-center gap-2">
        <h2 className="text-lg">Pricing </h2>
        <ArrowDown height={15} width={15} />
      </div>

      <div className="flex gap-4 flex-col mt-4 md:flex-row">
        {[0, 1, 3].map((key) => {
          return (
            <div
              className="bg-card-background  rounded-2xl md:max-w-1/3 pb-6"
              key={key}
            >
              <RoundEdges className="px-2 bg-background" bl_1 tr_0>
                <p className="text-sm">Landing Page</p>
              </RoundEdges>
              <div className="w-3/4 px-6 flex flex-col gap-1">
                <p className="text-2xl text-font-primary">$2500</p>
                <p className="text-md text-font-primary">
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
                className="py-2 mt-2 text-white bg-black dark:text-black text-sm mx-6 dark:bg-white rounded-md flex justify-center"
              >
                Start Now
              </a>
            </div>
          );
        })}
      </div>

      <div className="py-4 mt-6 rounded-2xl flex gap-2 items-center">
        <h2 className="text-lg">FAQ&apos;s </h2>
        <ArrowDown height={15} width={15} />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {[0, 1, 2].map((faq, index) => {
          return (
            <details
              className="group faq bg-card-background rounded-md px-6 py-4"
              key={index}
            >
              <summary className="flex justify-between items-center cursor-pointer list-none text-font-primary">
                <h6>Do you provide website maintenance after delivery?</h6>
                <div className="px-1 rounded-md bg-neutral-800">
                  <Plus
                    width={15}
                    className="transition-transform group-open:rotate-45 text-white"
                  />
                </div>
              </summary>

              <div className="grid transition-all duration-300 ease-in-out group-open:opacity-100 group-open:scale-y-100 opacity-0 scale-y-0 origin-top text-sm">
                <p className="mt-2">
                  While maintenance is not included in the packages, I can offer
                  ongoing support as an additional service.
                </p>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
}
