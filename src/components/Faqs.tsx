import { ArrowDown, Plus } from "lucide-react";
import React from "react";
import Container from "./Container";
import dynamic from "next/dynamic";
import data from "@/data/data.json";

const SlideUp = dynamic(() => import("@/components/SlideUp"), {});

function Projects() {
  return (
    <Container >
      <SlideUp>
        <div className="py-4 mt-6 rounded-2xl flex gap-2 items-center">
          <h2>FAQ&apos;s </h2>
          <ArrowDown height={15} width={15} />
        </div>
      </SlideUp>

      <div className="flex flex-col gap-4 mt-4">
        {data.faqs.map((faq, index) => {
          return (
            <SlideUp key={index}>
              <details className="group faq bg-card-background rounded-md px-6 py-4">
                <summary className="flex justify-between items-center cursor-pointer list-none text-font-primary">
                  <h6>{faq.question}</h6>
                  <div className="px-1 rounded-md bg-neutral-800">
                    <Plus
                      width={15}
                      className="transition-transform group-open:rotate-45 text-white"
                    />
                  </div>
                </summary>

                <div className="grid transition-all duration-300 ease-in-out group-open:opacity-100 group-open:scale-y-100 opacity-0 scale-y-0 origin-top text-sm">
                  <p className="mt-2">{faq.answer}</p>
                </div>
              </details>
            </SlideUp>
          );
        })}
      </div>
    </Container>
  );
}

export default Projects;
