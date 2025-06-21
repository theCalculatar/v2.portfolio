import Hero from "@/components/Hero";
import RoundEdges from "@/components/RoundEdges";
import { ArrowDown, Plus, Star } from "lucide-react";
import Image from "next/image";
import data from "@/data/data.json";

export default function Home() {
  return (
    <div className=" relative">
      <Hero />

      <div className="flex flex-col p-6 mt-4 bg-card-background rounded-2xl gap-2">
        <p className="text-sm text-font-primary">
          Outstanding creativity & professional service from Dylut.-
        </p>

        <div className="flex gap-2">
          <Image
            src={"/images/lee.jpeg"}
            width={40}
            height={40}
            alt="lee picture"
            className="rounded-full bg-amber-500"
          />

          <div className="flex flex-col justify-center gap-1">
            <div className="flex gap-1">
              <Star
                fill="#fe9a00"
                className="text-amber-500"
                width={15}
                height={15}
              />
              <Star
                fill="#fe9a00"
                className="text-amber-500"
                width={15}
                height={15}
              />
              <Star
                fill="#fe9a00"
                className="text-amber-500"
                width={15}
                height={15}
              />
              <Star
                fill="#fe9a00"
                className="text-amber-500"
                width={15}
                height={15}
              />
              <Star className="text-amber-500" width={15} height={15} />
            </div>
            <p className="text-sm">Lutuli Hardy</p>
          </div>
        </div>
      </div>

      <div className="py-4 mt-6 rounded-2xl flex flex-col  gap-4 ">
        <h2 className="flex gap-2 justify-start items-center text-xl">
          Projects <ArrowDown height={15} width={15} className="-rotate-135" />
        </h2>

        <p className="text-sm text-pretty max-w-3xl">
          These are the things I&#39;ve built along the way small pieces that
          slowly shaped who I am, both as a developer and a thinker.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="p-4 flex rounded-2xl marqueeContent gap-4">
          {data.projects.map((project, key) => {
            return (
              <div
                className="w-48 overflow-clip object-fill imageWrapper rounded-md flex-none"
                key={key}
              >
                <Image
                  src={project.preview}
                  width={170}
                  height={86}
                  alt="qwery fork"
                  style={{ width: "196px", height: "120px", objectFit: "fill" }}
                />
              </div>
            );
          })}
        </div>
        <style>{`
          .marqueeContent {
            display: flex;
            animation: scroll 10s linear infinite;
          }

          @media screen and (width<40rem){
            @keyframes scroll {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          }
        `}</style>
      </div>

      <div className="py-4 mt-4 flex items-center gap-2 ">
        <h2 className="text-lg">What I do? </h2>
        <ArrowDown height={15} width={15} />
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-3">
        {data.services.map((service, key) => {
          return (
            <div className="bg-card-background rounded-2xl" key={key}>
              <div className="flex justify-between">
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
                <p className="capitalize mt-1.5 text-font-primary mr-4">
                  {service.name}
                </p>
              </div>

              <p className="mx-4 mt-2 mb-4 text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>

      <div className="py-4 mt-6 flex items-center gap-2">
        <h2 className="text-lg">Pricing </h2>
        <ArrowDown height={15} width={15} />
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-3">
        {data.pricing.map((service, key) => {
          return (
            <div className="bg-card-background  rounded-2xl pb-6" key={key}>
              <RoundEdges className="px-2 bg-background" bl_1 tr_0>
                <p className="text-xs text-font-primary">{service.type}</p>
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

              <a
                href=""
                className="py-2 mt-4 text-white bg-black dark:text-black text-sm mx-6 dark:bg-white rounded-md flex justify-center"
              >
                Start Now
              </a>
            </div>
          );
        })}
      </div>

      <div className="py-4 mt-6 rounded-2xl flex gap-2 items-center">
        <h2 className="text-lg">FAQ&apos;s </h2>
        <ArrowDown height={15} width={15} />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {data.faqs.map((faq, index) => {
          return (
            <details
              className="group faq bg-card-background rounded-md px-6 py-4"
              key={index}
            >
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
          );
        })}
      </div>
    </div>
  );
}
