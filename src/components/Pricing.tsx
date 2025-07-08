import { ArrowDown } from "lucide-react";
import React from "react";
import Container from "./Container";
import dynamic from "next/dynamic";
import data from "@/data/data.json";
import RoundEdges from "./RoundEdges";
import Link from "next/link";

const SlideUp = dynamic(() => import("@/components/SlideUp"), {});

function Projects() {
  return (
    <Container>
      <SlideUp>
        <div className="py-4 mt-6 flex items-center gap-2">
          <h2 className="text-lg">Pricing </h2>
          <ArrowDown height={15} width={15} />
        </div>
      </SlideUp>

      <div className="grid gap-4 mt-4 md:grid-cols-3">
        {data.pricing.map((service, key) => {
          return (
            <SlideUp key={key}>
              <div className="bg-card-background  rounded-2xl pb-6">
                <RoundEdges className="px-2 bg-background" bl_1 tr_0>
                  <p className="text-xs text-font-primary lg:text-sm">
                    {service.type}
                  </p>
                </RoundEdges>
                <div className=" px-6 flex flex-col gap-1">
                  <p className="text-2xl text-font-primary">
                    From R{service.price}
                  </p>
                  <p className="text-md text-pretty mt-2 flex w-full text-font-primary">
                    {service.description}
                  </p>
                </div>
                <div className="px-6 mt-2">
                  <ul className="list-disc px-4 text-sm">
                    {service.items.map((item) => {
                      return <li key={item}>{item}</li>;
                    })}
                    <li>{service.duration}</li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="py-2 mt-4 text-white bg-black dark:text-black text-sm mx-6 dark:bg-white rounded-md flex justify-center"
                >
                  Start Now
                </Link>
              </div>
            </SlideUp>
          );
        })}
      </div>
    </Container>
  );
}

export default Projects;
