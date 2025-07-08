"use client";

import React from "react";

function RoundEdges({
  bl_1 = false,
  bl_0 = false,
  br_1 = false,
  tl_0 = false,
  tr_1 = false,
  tr_0 = false,
  id,
  ref,
  className = "",
  __className = "",

  children,
  onClick = () => {},
}: Readonly<{
  tl_1?: boolean;
  tl_0?: boolean;
  tr_1?: boolean;
  tr_0?: boolean;
  br_1?: boolean;
  br_0?: boolean;
  bl_1?: boolean;
  bl_0?: boolean;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  __className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}>) {
  const _rounded: React.CSSProperties = { borderRadius: "0" };

  if (tr_0) {
    _rounded.borderRadius = "0 0 1.2rem 0 ";
  }
  if (tl_0) {
    _rounded.borderRadius = "0 0 0 1.2rem";
  }

  if (tl_0 && br_1) {
    _rounded.borderRadius = "0 1rem 0 1rem";
  }
  if (bl_0 && tr_1) {
    _rounded.borderRadius = "1rem 0 1rem 0";
  }

  return (
    <div
      className={`w-fit text-sm flex flex-col ${__className}`}
      onClick={onClick}
      id={id}
      ref={ref}
    >
      {tr_1 && (
        <div className="transform rotate-270 w-fit self-end z-10">
          <RoundSvg />
        </div>
      )}
      <div className="flex items-start">
        {bl_0 && (
          <div className="transform -rotate-90 w-fit self-end">
            <RoundSvg />
          </div>
        )}
        {tl_0 && (
          <div className="transform rotate-180 w-fit self-start z-10">
            <RoundSvg />
          </div>
        )}
        <div
          className={`min-h-8 min-w-8 flex-1 flex items-center  ${className}`}
          style={_rounded}
        >
          {children}
        </div>
        {tr_0 && (
          <div className="transform rotate-90 w-fit z-10">
            <RoundSvg />
          </div>
        )}
      </div>
      <div className={`flex justify-between`}>
        {bl_1 && (
          <div className="transform rotate-90 w-fit z-10">
            <RoundSvg />
          </div>
        )}
        {br_1 && (
          <div className="transform rotate-180 w-fit self-end z-10">
            <RoundSvg />
          </div>
        )}
      </div>
    </div>
  );
}

export default RoundEdges;

const RoundSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0C0 3.31371 2.68629 6 6 6H0V0Z" fill="var(--background)" />
  </svg>
);
