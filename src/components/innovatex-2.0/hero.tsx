"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import RulesSection from "./rules";
import Image from "next/image";
import OurSponsors from "./oursponsers";

export function HeroHighlightDemo() {
  return (
    <>
    <HeroHighlight containerClassName="bg-black w-full flex flex-col">
      {/* First Section */}<div className="">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-8  md:space-y-0 md:space-x-8">
        <div className="text-2xl py-20 md:text-4xl lg:text-6xl font-bold text-white dark:text-white max-w-2xl leading-relaxed lg:leading-snug">
          Innovatex is <TypewriterEffectSmoothDemo />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/brand.png"
            alt="Innovatex logo"
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Second Section */}
      

      </div>
      
      </HeroHighlight>
      {/* <div className="text-2xl px-8 md:text-4xl lg:text-6xl font-bold text-white dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center">
        Prizes 
        </div>
        <div className="text-2xl px-8 md:text-4xl lg:text-6xl font-bold text-white dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center">
        Our Sponsors 
        </div>
        <div className="text-2xl px-8 md:text-4xl lg:text-6xl font-bold text-white dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center">
        Our Sponsors 
        </div>
        <div className="text-2xl px-8 md:text-4xl lg:text-6xl font-bold text-white dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center">
        Rules
      </div> */}
      
    </>
  );
}
