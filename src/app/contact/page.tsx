import Container from "@/components/Container";
import SlideUp from "@/components/SlideUp";
import React from "react";

function Page() {
  return (
    <Container>
      <SlideUp>
        <div className="bg-neutral-800 pt-28 px-6 pb-8 rounded-2xl">
          <div className="flex bg-card-background rounded-2xl flex-col gap-4">
            <h1 className="capitalize max-w-sm flex mt-6 font-light text-3xl text-balance">
              Let&apos;s Talk
            </h1>
            <p className="max-w-3xl">
              Looking to build something great? Get in touch and let&apos;s
              collaborate.
            </p>
          </div>

          <div className="grid gap-4 mt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name:"
                className="p-3 bg-background rounded-md text-sm"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="p-3 bg-background rounded-md text-sm"
              />
            </div>
            <textarea
              name="meassage"
              id="meassage"
              placeholder="Type message..."
              className="p-3 bg-background rounded-md text-sm"
              rows={7}
            ></textarea>
          </div>
          <div className="mt-4">
            <p className="text-sm max-w-3xl">
              By submitting this form, I consent to the processing of the
              personal data that I have provided and declare my agreement with
              the data protection regulations in the data privacy statement.
            </p>
            <button className="mt-4 px-10 py-2 text-sm bg-black dark:bg-white rounded-md  dark:text-black">
              Submit
            </button>
          </div>
        </div>
      </SlideUp>
    </Container>
  );
}

export default Page;
