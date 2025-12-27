import { ArrowDown, Plus } from "lucide-react";
import React from "react";
import Container from "./Container";
import dynamic from "next/dynamic";
import data from "@/data/data.json";

const SlideUp = dynamic(() => import("@/components/SlideUp"), {});

function Projects() {
  return (
    <Container as="section" id="faqs" aria-labelledby="faqs-title">
      <SlideUp>
        <div className="py-4 mt-48 rounded-2xl flex flex-col gap-2 items-center">
          <h2>— FAQ&apos;s </h2>
          <p>Common questions around process, timelines, and collaboration.</p>
        </div>
      </SlideUp>

      <div className="flex flex-col gap-4 mt-10">
        {data.faqs.map((faq, index) => {
          return (
            <SlideUp key={index}>
              <details className="group faq bg-card-background rounded-md px-6 py-4">
                <summary className="flex justify-between items-center cursor-pointer list-none text-font-primary">
                  {faq.question}
                  <div className="px-1 rounded-md">
                    <Plus
                      width={15}
                      className="transition-transform group-open:rotate-45"
                    />
                  </div>
                </summary>

                <div className="mt-2 text-sm">
                  <p>{faq.answer}</p>
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
