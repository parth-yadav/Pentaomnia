"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
          text: "hack",
        className: "text-white"
    },
    {
        text: "hack",
        className: "text-white"
    },
    {
        text: "hack",
        className: "text-white"
    },
    {
        text: "hack",
        className: "text-white"
    },
    {
      text: "HACK.",
      className: "text-yellow-500 font-bold dark:text-blue-500",
    },
  ];
  return (
    <div className="">
     
      <TypewriterEffectSmooth words={words} />
     
    </div>
  );
}
