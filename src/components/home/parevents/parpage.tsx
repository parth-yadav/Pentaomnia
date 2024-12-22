"use client";

import { useEffect, useRef, useState } from "react";

import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import { projects } from "./data";
import styles from "./page.module.scss";
import Cardss from "./parevents";

export default function ParPage() {
    const container = useRef<HTMLElement>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const lenis = new Lenis();
        lenisRef.current = lenis;

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry) {
                    setIsVisible(entry.isIntersecting);
                }
            },
            { root: null, threshold: 0.1 },
        );

        const section = container.current;
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const handleScroll = (direction: "up" | "down") => {
        if (!lenisRef.current) return;

        // Scroll by viewport height
        const scrollAmount = window.innerHeight;
        lenisRef.current.scrollTo(
            window.scrollY + (direction === "up" ? -scrollAmount : scrollAmount),
            { duration: 1.2 },
        );
    };

    return (
        <section
            id='events'
            ref={container}
            className='relative w-full bg-gradient-to-r from-black to-primary py-12 text-gray-800 dark:bg-slate-900 dark:text-white md:py-24 lg:py-32'
        >
            {/* Scroll Controls */}
            {isVisible && (
                <div className='fixed right-8 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-4'>
                    <button
                        onClick={() => handleScroll("up")}
                        className='rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
                        aria-label='Scroll Up'
                    >
                        <ChevronUp className='h-6 w-6' />
                    </button>
                    <button
                        onClick={() => handleScroll("down")}
                        className='rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:bg-white/20'
                        aria-label='Scroll Down'
                    >
                        <ChevronDown className='h-6 w-6' />
                    </button>
                </div>
            )}

            <main className={styles.main}>
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
