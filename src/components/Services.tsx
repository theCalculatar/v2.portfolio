import { ArrowDown, Star } from "lucide-react";
import React from "react";
import Container from "./Container";
import dynamic from "next/dynamic";
import data from "@/data/data.json";
import RoundEdges from "./RoundEdges";

const SlideUp = dynamic(() => import("@/components/SlideUp"), {});

function Projects() {
  return (
    <Container show="bit" as="section" className="mt-48" id="services">
      <SlideUp className="">
        <div className="py-4 flex flex-col items-center gap-2 ">
          <h2 className="text-lg"> — What I do? </h2>
          <p className="text-sm lg:text-base text-pretty max-w-2xl">
            Shaping ideas into modern, interface-driven web experiences that
            feel intuitive and intentional.
          </p>
        </div>
      </SlideUp>

      <div className="grid gap-4 mt-10 md:grid-cols-3">
        {data.services.map((service, key) => {
          return (
            <SlideUp key={key} as="article">
              <div className="bg-card-background rounded-2xl pb-2">
                <div className="flex justify-start">
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
                  <h3 className="capitalize xl:text-base text-sm mt-1.5 text-font-primary mr-4">
                    {service.name}
                  </h3>
                </div>

                <p className="mx-4 mt-0 mb-4 text-sm lg:text-base text-gray-500">
                  {service.description}
                </p>
              </div>
            </SlideUp>
          );
        })}
      </div>
    </Container>
  );
}

export default Projects;
