import React from "react";

function TextFlip({
  className = "",
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div>
      <div
        className={`ext-flip-container relative overflow-hidden ${className}`}
      >
        <div className="text-flip flex flex-col sm: transition-transform duration-300 ease-in-out cursor-pointer sm:hover:-translate-y-4 active:hover:-translate-y-4 -mt-0.5">
          {children}
        </div>
      </div>
      <style>{`
.text-flip:active:hover .initial {
  display: none;
}
.text-flip:active:hover .preview {
  transform: translateY(1rem);
  display: block;
}


@media screen and (width>=640) {
  .text-flip:hover .initial {
    display: none;
  }
  .text-flip:hover .preview {
    transform: translateY(1rem);
    display: block;
  }
}
      `}</style>
    </div>
  );
}

export default TextFlip;
