// export const dynamic = "force-dynamic";

import React from "react";
import data from "@/data/data.json";
import { notFound } from "next/navigation";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import RoundEdges from "@/components/RoundEdges";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function Work({ params }: Params) {
  const { id } = await params;
  const project = data.projects.find((project) => project.name === id) || null;

  if (!project) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex px-6 pt-28 pb-8 bg-card-background rounded-2xl flex-col gap-4">
        <h1 className="capitalize max-w-sm flex mt-6 font-light text-3xl text-balance">
          {project.name}
        </h1>
        <p className="max-w-3xl">{project.description}</p>
        <div className="mt-4 flex items-center gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="py-2 px-4 dark:bg-white rounded-md text-sm dark:text-black "
            >
              Preview site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 py-2 px-4 dark:bg-black rounded-md text-sm text-font-primary"
            >
              GitHub <Github width={15} />
            </a>
          )}
        </div>
      </div>

      <div className="rounded-2xl overflow-clip relative">
        <Image
          src={project.preview}
          alt={project.name}
          width={400}
          height={400}
          style={{ width: "100%", objectFit: "cover" }}
        />
        <div className="absolute bottom-0 right-0">
          <RoundEdges
            className="bg-background px-4 text-font-primary"
            bl_0
            tr_1
          >
            <p>{project.date}</p>
          </RoundEdges>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-card-background flex flex-col gap-8">
        <h1 className="capitalize max-w-sm flex mt-6 font-light text-3xl">
          About
        </h1>
        <p className="text-pretty">{project.about}</p>
      </div>

      <div className="mt-4">
        <h2 className="flex gap-4">
          Gallery <ArrowRight width={15} className="rotate-90" />
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
        {project.images?.map((image, index) => {
          return (
            <div className=" overflow-clip rounded-md" key={index}>
              <Image
                src={image}
                alt={`gallery-${index}`}
                width={400}
                height={200}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
