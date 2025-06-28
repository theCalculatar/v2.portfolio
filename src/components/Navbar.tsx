"use client";

import React, { useContext } from "react";
import TextFlip from "@/components/TextFlip";
import RoundEdges from "./RoundEdges";
import { AppContext, NAVOPEN } from "@/app/context";
import Link from "next/link";
import data from "@/data/data.json";

function Navbar({ className = "" }: { className?: string }) {
  const { navDispach, navState } = useContext(AppContext);

  return (
    <div className={`overflow-hidden w-full z-10 ${className}`}>
      <RoundEdges
        __className="w-full rounded-b-2xl text-font-primary"
        bl_1
        br_1
      >
        <div className="h-9 xl:h-10 flex justify-between items-center  w-full ">
          <RoundEdges tr_0 className="h-9 xl:h-10 bg-background px-4 z-10">
            <div className=" flex items-center gap-2 ">
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 xl:w-7 xl:h-7 bg-[url(/logo.svg)] dark:bg-[url(/logo-light.svg)] bg-center bg-no-repeat bg-contain" />
                <TextFlip className="w-17.5 xl:text-lg xl:w-24">
                  <Link href={"/"}>Alpheus</Link>
                  <Link href={"/"}>Mabetlela</Link>
                </TextFlip>
              </div>
              <div className="text-sm xl:text-md">
                {data.slots !== 0 ? (
                  <TextFlip>
                    <p className="text-green-400">Available</p>
                    <p className="text-green-400">
                      <span className="flex gap-2 items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        {data.slots} slots
                      </span>
                    </p>
                  </TextFlip>
                ) : (
                  <TextFlip>
                    <p className="text-red-500">Booked</p>
                    <p className="text-red-500">Booked</p>
                  </TextFlip>
                )}
              </div>
            </div>
          </RoundEdges>
          <RoundEdges
            tl_0
            className="h-9 xl:h-10 xl:text-lg px-4 flex items-center justify-center bg-background z-10 cursor-pointer"
            onClick={() => navDispach(NAVOPEN)}
          >
            <div>
              {navState.isNavOpen ? (
                <TextFlip>
                  <span>Close</span>
                  <span>Close</span>
                </TextFlip>
              ) : (
                <TextFlip>
                  <span>Menu</span>
                  <span>Open</span>
                </TextFlip>
              )}
            </div>
          </RoundEdges>
        </div>
      </RoundEdges>

      {navState.isNavOpen && (
        <div
          className={`bg-white w-full absolute top-0 right-0 left-0 rounded-b-2xl pt-14 px-4 pb-4 text-black text-sm z-1 ${
            navState ? "lee" : "not"
          }`}
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Link
              href={"/work"}
              className="bg-neutral-200 rounded-md py-2 text-center"
            >
              <TextFlip className="text-center justify-center">
                <p className="text-sm">Work</p>
                <p className="text-sm">Work</p>
              </TextFlip>
            </Link>
            <Link
              href={"/about"}
              className="bg-neutral-200 rounded-md py-2 text-center"
            >
              <TextFlip className="text-center justify-center">
                <p className="text-sm">About</p>
                <p className="text-sm">About</p>
              </TextFlip>
            </Link>
            <Link
              href={"/about#technology"}
              className="bg-neutral-200 rounded-md py-2 text-center"
            >
              <TextFlip className="text-center justify-center">
                <p className="text-sm">technologies</p>
                <p className="text-sm">technologies</p>
              </TextFlip>
            </Link>
            <Link
              href={"/contact"}
              className="bg-neutral-200 rounded-md py-2 text-center"
            >
              <TextFlip className="text-center justify-center">
                <p className="text-sm">Contact</p>
                <p className="text-sm">Contact</p>
              </TextFlip>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
