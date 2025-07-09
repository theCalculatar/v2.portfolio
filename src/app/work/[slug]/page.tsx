// export const dynamic = "force-dynamic";
import { Metadata } from "next";

import React from "react";
import { notFound } from "next/navigation";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import RoundEdges from "@/components/RoundEdges";
import { getProject } from "@/lib/data";

type Params = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  // fetch post information
  const post = await getProject(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.name,
    description: post.description,
    openGraph: {
      title: post.name,
      description: post.description,
      url: `https://mahlane.vercel.app/work/${post.slug}`,
      siteName: "Alpheus's Portfolio",
      images: [
        {
          url: post.preview,
          width: 1200,
          height: 630,
          alt: post.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: post.name,
      description: post.description,
      images: [post.preview],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
      other: {
        rel: "apple-touch-icon",
        url: "/favicon.ico",
      }
  }
}

export default async function Work({ params }: Params) {
  const { slug } = await params;
  const project = (await getProject(slug)) || null;

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
