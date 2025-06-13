import React from "react";
import TextFlip from "@/components/TextFlip";
import RoundEdges from "./RoundEdges";

function Navbar({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <RoundEdges __className="w-full  rounded-b-2xl" bl_1 br_1>
        <div className="h-9 flex justify-between items-center  w-full ">
          <RoundEdges tr_0 className="h-9 bg-background px-4 z-10">
            <div className=" flex items-center gap-2 ">
              <div className="flex gap-2 items-center">
                0
                <TextFlip className="my-4 ">
                  <p className="text-xm initial min-w-17.5">Alpheus</p>
                  <p className="text-xm preview hidden">Mabetlela</p>
                </TextFlip>
              </div>

              <TextFlip>
                <p className="text-xs initial text-green-400">Available</p>
                <p className="text-xs preview hidden text-green-400">
                  * 2 slots
                </p>
              </TextFlip>
            </div>
          </RoundEdges>
          <RoundEdges
            tl_0
            className="h-9 px-4 flex items-center justify-center bg-background z-10"
          >
            <div>
              <TextFlip>
                <span className="text-sm initial">Menu</span>
                <span className="text-sm preview hidden">Open</span>
              </TextFlip>
            </div>
          </RoundEdges>
        </div>
      </RoundEdges>

      <div className="bg-white w-full absolute top-0.5 right-[.5px] left-[.5px] rounded-b-2xl pt-12 px-4 pb-4 text-black text-sm hidden">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-neutral-200 rounded-md py-2 text-center">
            <TextFlip>
              <p className="text-sm initial text-center">Work</p>
              <p className="text-sm preview hidden">Work</p>
            </TextFlip>
          </div>
          <div className="bg-neutral-200 rounded-md py-2 text-center">
            <TextFlip>
              <p className="text-sm initial">About</p>
              <p className="text-sm preview hidden">About</p>
            </TextFlip>
          </div>
          <div className="bg-neutral-200 rounded-md py-2 text-center">
            <TextFlip>
              <p className="text-sm initial">Blog</p>
              <p className="text-sm preview hidden">Blog</p>
            </TextFlip>
          </div>
          <div className="bg-neutral-200 rounded-md py-2 text-center">
            <TextFlip>
              <p className="text-sm initial">Contact</p>
              <p className="text-sm preview hidden">Contact</p>
            </TextFlip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
