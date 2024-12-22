"use client";

import { useEffect, useRef } from "react";

import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";

import Cardss from "./parevents";
import { projects } from "./data";
import styles from "./page.module.scss";

export default function ParPage() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
         <section
            id='events'
            className='w-full bg-gradient-to-r from-black to-primary py-12 text-gray-800 dark:bg-slate-900 dark:text-white md:py-24 lg:py-32'
        >
           
             
            <main ref={container} className={styles.main}>
               
                 <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                    Past Events
                </h2>
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (

                    <Cardss
                        key={`p_${i}`}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
            </main>
            </section>
    );
}
