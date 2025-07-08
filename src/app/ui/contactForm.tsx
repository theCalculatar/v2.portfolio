"use client";

import { sendMail } from "@/lib/actions";
import React, { useActionState } from "react";
import Lottie from "lottie-react";
import loader from "@/utils/loader.json";

function ContactForm() {
  const [state, action, pending] = useActionState(sendMail, {
    message: "",
    success: false,
    error: "",
  });

  return (
    <div>
      <form
        action={action}
        className="bg-neutral-800 pt-28 px-6 pb-8 rounded-2xl"
      >
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
              required
              placeholder="Your name:"
              className="p-3 bg-background rounded-md text-sm"
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="email"
              className="p-3 bg-background rounded-md text-sm"
            />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Type message..."
            required
            className="p-3 bg-background rounded-md text-sm"
            rows={7}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-sm max-w-3xl">
            By submitting this form, I consent to the processing of the personal
            data that I have provided and declare my agreement with the data
            protection regulations in the data privacy statement.
          </p>

          {pending ? (
            <div className="px-4 h-9 overflow-clip flex items-center mt-4">
              <Lottie animationData={loader} className="h-20 p-0 b-4 m-0 " />
            </div>
          ) : state.success ? (
            <div className="text-green-500 mt-4">
              <p>{state.message}</p>
            </div>
          ) : (
            <div className="mt-4">
              {state.error && (
                <p className="text-red-500">
                  {state.message || "Failed to send message. Please try again."}
                </p>
              )}
              <button className="mt-4 cursor-pointer px-10 py-2 text-sm bg-black dark:bg-white rounded-md  dark:text-black">
                Submit
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
