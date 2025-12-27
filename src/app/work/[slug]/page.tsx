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
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
      openGraph: {
        title: "Project Not Found",
        description: "The project you are looking for does not exist.",
        url: `https://mahlane.vercel.app/work/${slug}`,
        siteName: "Alpheus's Portfolio",
        images: [
          {
            url: "/images/404.png",
            width: 1200,
            height: 630,
            alt: "Project Not Found",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Project Not Found",
        description: "The project you are looking for does not exist.",
        images: ["/images/404.png"],
      },
      icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
        other: {
          rel: "apple-touch-icon",
          url: "/favicon.ico",
        },
      },
    };
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
  };
}

export default async function Work({ params }: Params) {
  const { slug } = await params;
  const project = (await getProject(slug)) || null;

  if (!project) {
    return notFound();
  }

  return (
    <article className="flex flex-col gap-4">
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
              className="py-2 px-4 bg-black text-white rounded-md text-sm"
            >
              Preview site
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 py-2 px-4 rounded-md text-sm text-font-primary"
            >
              GitHub <Github width={15} />
            </a>
          )}
        </div>
      </div>

      <div className="rounded-2xl overflow-clip relative">
        <div className="grid gap-1 md:gap-4 lg:grid-cols-3 grid-cols-2">
          {project.images?.map((image, index) => {
            return (
              <div className=" overflow-clip rounded-md" key={index}>
                <Image
                  src={image}
                  alt={`${project.name} screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            );
          })}
        </div>
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
        <h2 className="capitalize max-w-sm flex mt-6 font-light text-3xl">
          About
        </h2>
        <p className="text-pretty mt-6 text-gray-500">{project.about}</p>
        {project.demo && (
          <a href={project.demo} target="_blank" className="rounded-md text-sm">
            Preview site <ArrowRight className="inline-block ml-2" size={15} />
          </a>
        )}
      </div>
    </article>
  );
}
