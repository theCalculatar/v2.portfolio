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
    <Container show="bit" as="section" id="pricing">
      <SlideUp>
        <div className="py-4 mt-48 flex items-center flex-col gap-2">
          <h2 className="text-lg">— Pricing </h2>
          <p className="text-sm lg:text-base text-pretty max-w-2xl">
            Flexible pricing based on project scope, complexity, and timeline.
          </p>
        </div>
      </SlideUp>

      <div className="grid gap-4 mt-10 md:grid-cols-3">
        {data.pricing.map((service, key) => {
          return (
            <SlideUp as="article" key={key}>
              <div className="bg-card-background  rounded-2xl pb-6">
                <div className="flex">
                  <RoundEdges className="px-2 bg-background" bl_1 tr_0>
                    <h3 className="text-xs text-font-primary lg:text-sm">
                      {service.type}
                    </h3>
                  </RoundEdges>
                  {service.popular && (
                    <span className="ml-2 mt-2 text-yellow-600 text-xs">
                      Popular
                    </span>
                  )}{" "}
                </div>
                <div className=" px-6 flex flex-col gap-1">
                  <p className="text-2xl text-font-primary">
                    From{" "}
                    <span aria-label="Price in South African Rand">
                      R{service.price}
                    </span>
                  </p>
                  <p className="text-md text-pretty mt-2 flex w-full text-gray-500">
                    {service.description}
                  </p>
                </div>
                <div className="px-6 mt-2">
                  <ul
                    className="list-disc px-4 text-sm"
                    aria-label="Included features"
                  >
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
                  Start a Project
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
