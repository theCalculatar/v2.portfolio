"use client";

import React, { useContext } from "react";
import TextFlip from "@/components/TextFlip";
import RoundEdges from "./RoundEdges";
import { AppContext, NAVOPEN } from "@/app/context";
import Link from "next/link";

function Navbar({ className = "" }: { className?: string }) {
  const { navDispach, navState } = useContext(AppContext);
  const navItemsRef = React.useRef<HTMLDivElement>(null);
  const toogleBtnRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        !navState.isNavOpen ||
        toogleBtnRef.current?.contains(event.target as Node)
      ) {
        return;
      }
      if (
        navItemsRef.current &&
        !navItemsRef.current.contains(event.target as Node)
      ) {
        navDispach({ type: NAVOPEN, payload: false });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navDispach, navState]);

  return (
    <div className={`overflow-hidden w-full container z-10 ${className}`}>
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
                <TextFlip className="w-17.5 text-xs xl:text-sm xl:w-24">
                  <Link href={"/"}>Alpheus</Link>
                  <Link href={"/"}>Mabetlela</Link>
                </TextFlip>
              </div>
          
            </div>
          </RoundEdges>
          <RoundEdges
            tl_0
            className="h-9 xl:h-10 xl:text-lg px-4 flex items-center justify-center bg-background z-10 cursor-pointer"
            ref={toogleBtnRef}
          >
            <div className="flex gap-2 md:gap-4 pr-4 text-xs md:text-sm">
              <Link href={"/work"} className="px-2 md:px-3 py-2 text-center">
                <TextFlip className="text-center justify-center">
                  <p className="text-xs md:text-sm">Work</p>
                  <p className="text-xs md:text-sm">Work</p>
                </TextFlip>
              </Link>
              <Link href={"/about"} className="px-2 md:px-3 py-2 text-center">
                <TextFlip className="text-center justify-center">
                  <p className="text-xs md:text-sm">About</p>
                  <p className="text-xs md:text-sm">About</p>
                </TextFlip>
              </Link>
            </div>
          </RoundEdges>
        </div>
      </RoundEdges>

      {navState.isNavOpen && (
        <div
          className={`bg-white w-full absolute top-0 right-0 left-0 rounded-b-2xl pt-14 px-4 pb-4 text-black text-sm z-1 ${
            navState ? "lee" : "not"
          }`}
          ref={navItemsRef}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
