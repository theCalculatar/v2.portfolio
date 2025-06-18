import React from "react";

function Page() {
  return (
    <div className="bg-neutral-800 pt-32 px-6 pb-8 rounded-2xl">
      <div className="flex bg-card-background rounded-2xl flex-col gap-4">
        <h1 className="capitalize max-w-sm flex mt-6 font-light text-3xl text-balance">
          Let&apos;s Talk
        </h1>
        <p className="text-sm">
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
    </div>
  );
}

export default Page;
