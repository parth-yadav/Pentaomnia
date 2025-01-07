"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { TypewriterEffectSmoothDemo } from "./typewriter";
import RulesSection from "./rules";


export function HeroHighlightDemo() {
  return (
    <HeroHighlight containerClassName="bg-gradient-to-r from-green-900 to-black ">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-6xl font-bold text-white dark:text-white max-w-4xl leading-relaxed lg:leading-snug  "
      >
        Innovatex is {" "}
       
          </motion.h1>
          <div className="px-4 ">
              <TypewriterEffectSmoothDemo />
             
          </div>
           <RulesSection />
    </HeroHighlight>
  );
}
