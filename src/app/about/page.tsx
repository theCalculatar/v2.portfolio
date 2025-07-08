import RoundEdges from "@/components/RoundEdges";
import Image from "next/image";
import React from "react";
import data from "@/data/data.json";
import SlideUp from "@/components/SlideUp";
import Container from "@/components/Container";

function Page() {
  return (
    <div className="w-full t">
      <Container>
        <SlideUp>
          <div className="px-6 bg-card-background pt-28 pb-8 rounded-2xl">
            <div className="flex gap-4 items-center">
              <Image
                src={"/images/lee.jpeg"}
                width={50}
                height={50}
                alt="my portrait"
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h6 className="text-lg text-black dark:text-white">
                  Alpheus Mabetlela
                </h6>
                <p className="text-sm">Software Engineer</p>
              </div>
            </div>

            <h1 className="capitalize max-w-sm flex mt-6 font-light text-3xl text-balance">
              Hi i am Alpheus
              <br />
              your Daily Engineer
            </h1>

            <p className="mt-6 max-w-3xl">
              I&apos;m a full-stack developer with a strong foundation in both
              frontend and backend technologies, specializing in building
              efficient, user-focused web applications.
            </p>
          </div>
        </SlideUp>

        <div className="grid md:grid-cols-2 md:gap-4">
          <SlideUp>
            <div className="h-72 rounded-2xl mt-6 overflow-clip relative">
              <Image
                src={"/images/lee.jpeg"}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
                width={600}
                height={300}
                alt={"image profile"}
                className=""
              />
              <RoundEdges
                className="bg-background"
                __className="absolute bottom-0 right-0"
                tr_1
                bl_0
              >
                <p className="text-sm px-4 text-font-primary">Alpheus</p>
              </RoundEdges>
            </div>
          </SlideUp>
          <SlideUp>
            <div className="p-6 bg-card-background rounded-2xl mt-6">
              <h1 className="capitalize max-w-sm flex font-light text-3xl text-balance">
                Education
                <br />& Certificates
              </h1>
              <p className="mt-6">
                My academic background and certifications reflect a solid
                foundation in computer science, complemented by hands-on
                training and recognition in real-world tech environments.
              </p>
            </div>
          </SlideUp>
        </div>

        <div className="mt-4 grid gap-4 text-font-primary">
          {data.certificates.map((certificate, index) => {
            return (
              <SlideUp key={index}>
                <div className="px-4 py-4 rounded-md flex justify-between bg-card-background items-center">
                  <p>{certificate.title}</p>
                  <p className="text-sm">{certificate.year}</p>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </Container>

      <Container>
        <SlideUp>
          <div className="mt-6" id="technology">
            <h1 className="capitalize max-w-sm flex font-light text-3xl text-balance">
              technologies
              <br /> &tools
            </h1>
            <p className="mt-4 max-w-3xl">
              A stack of tools and technologies I work with — from frontend
              frameworks to backend systems, databases, and dev tools that power
              my builds.
            </p>
            <div className="p-6 bg-card-background rounded-2xl mt-6 outline-1 flex justify-center md:justify-normal flex-wrap gap-4 backdrop-blur-2xl">
              {data.tools.map((tool, index) => {
                return (
                  <Image
                    key={index}
                    src={tool}
                    width={50}
                    height={50}
                    className="w-8 h-8"
                    alt={`icon ${tool}`}
                  />
                );
              })}
            </div>
          </div>
        </SlideUp>
      </Container>
    </div>
  );
}

export default Page;
