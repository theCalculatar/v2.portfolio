import React from "react";
import data from "@/data/data.json";
import RoundEdges from "@/components/RoundEdges";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Work() {
  return (
    <div className="">
      <div className="flex px-6 pt-32 pb-6 bg-card-background rounded-2xl flex-col gap-4">
        <h1 className="capitalize max-w-sm flex mt-6 font-light text-3xl text-balance">
          Work
        </h1>
        <p className="text-sm">
          A collection of my latest projects, built with creativity and
          attention to detail.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {data.projects.map((project, index) => {
          return (
            <Link
              className="rounded-lg relative h-56 overflow-clip project transition-all duration-300"
              key={index}
              href={`work/${project.name}`}
            >
              <div className="absolute top-0 left-0 z-10">
                <RoundEdges bl_1 tr_0 className="bg-background px-4 title">
                  <div className="flex justify-between gap-3 items-center ">
                    <p className="text-sm capitalize">{project.name}</p>
                    <ArrowRight
                      width={15}
                      className="hidden icon transition-[max-width] duration-300"
                    />
                  </div>
                </RoundEdges>
              </div>
              <Image
                src={project.preview}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                width={600}
                height={300}
                alt={`image ${project.name}`}
                className="hover:blur-sm hover:scale-105 transition-all duration-300"
              />
              <style>
                {`
                  .project:hover .icon {
                    display:block;
                  }
                `}
              </style>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
