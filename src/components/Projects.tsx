import { ArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";
import Container from "./Container";
import dynamic from "next/dynamic";
import data from "@/data/data.json";

const SlideUp = dynamic(() => import("@/components/SlideUp"), {});

function Projects() {
  return (
    <Container>
      <SlideUp>
        <div className="py-4 mt-6 rounded-2xl flex flex-col  gap-4 ">
          <h2 className="flex gap-2 justify-start items-center text-xl">
            Projects
            <ArrowDown height={15} width={15} className="-rotate-135" />
          </h2>

          <p className="text-sm lg:text-base text-pretty max-w-3xl">
            Through each project, I&apos;ve learned, evolved, and uncovered new
            ways to think and build, shaping not just my skills, but my
            perspective.
          </p>
        </div>
      </SlideUp>

      <SlideUp>
        <div className="w-full overflow-hidden md:overflow-auto hide-scrollbar">
          <div className="p-4 flex md:p-0 md:grid md:grid-cols-4 rounded-2xl marqueeContent gap-4">
            {data.projects.map((project, key) => {
              return (
                <div
                  className="w-full overflow-clip imageWrapper rounded-md flex-none grid-cols-none"
                  key={key}
                >
                  <Image
                    src={project.preview}
                    width={296}
                    height={182}
                    alt="qwery fork"
                    className=" w-full hover:scale-105 transition-all duration-300"
                    style={{ objectFit: "fill" }}
                  />
                </div>
              );
            })}
          </div>
          <style>{`
          .marqueeContent {
            animation: scroll 10s linear infinite;
          }

          @media screen and (width<40rem){
            @keyframes scroll {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          }
        `}</style>
        </div>
      </SlideUp>
    </Container>
  );
}

export default Projects;
