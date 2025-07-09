import type { Metadata } from "next";
import React from "react";
import data from "@/data/data.json";
import RoundEdges from "@/components/RoundEdges";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import SlideUp from "@/components/SlideUp";

export const metadata: Metadata = {
  title: "Projects | Alpheus Mabetlela",
  description:
    "A collection of software projects by Alpheus Mabetlela — real-world apps, hackathon winners, and full-stack builds using Angular, React, Node.js, and more.",
  openGraph: {
    title: "Projects | Alpheus Mabetlela",
    description:
      "Browse Alpheus developer portfolio — full-stack apps, backend APIs, and award-winning builds.",
    url: "https://mahlane.vercel.app/work",
    siteName: "Alpheus's Portfolio",
    images: [
      {
        url: "https://mahlane.vercel.app/images/mailaneng0.jpg",
        width: 1200,
        height: 630,
        alt: "Alpheus's Projects Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Alpheus Mabetlela",
    description:
      "Full-stack builds, backend logic, and hackathon magic — peep Alpheus's work.",
    images: ["https://mahlane.vercel.app/images/mailaneng0.jpg"],
  },
};

export default function Work() {
  return (
    <Container>
      <SlideUp>
        <div className="flex px-6 pt-28 pb-6 bg-card-background rounded-2xl flex-col gap-4">
          <h1 className="capitalize max-w-sm flex mt-6 font-light text-3xl text-balance">
            Work
          </h1>
          <p className="text-sm max-w-3xl">
            A curated collection of my latest projects — each crafted with a
            blend of creativity, technical precision, and attention to detail.
            From practical tools to innovative solutions, these works reflect my
            passion for building with purpose.
          </p>
        </div>
      </SlideUp>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {data.projects.map((project, index) => {
          return (
            <SlideUp
              key={index}
              className="rounded-lg relative h-fit overflow-hidden project "
            >
              <Link
                href={`work/${project.slug}`}
                className="transition-all duration-300"
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
                  style={{ width: "100%", objectFit: "cover" }}
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
            </SlideUp>
          );
        })}
      </div>
    </Container>
  );
}
