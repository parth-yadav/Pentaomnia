"use client";

import { useEffect, useRef } from "react";

import Image from "next/image";

import { CONST_CLIENTS_LIST } from "@/constants/ourclients";

export const HomePartners: React.FC = () => {
    const scrollRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPosition = 0;

        const scroll = () => {
            scrollPosition += 0.5; // Adjust this value to change scroll speed
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
            animationFrameId = requestAnimationFrame(scroll);
        };

        scroll();

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);
    return (
        <section
            id='partners'
            className='w-full bg-gradient-to-r from-primary to-black py-12 md:py-24 lg:py-32'
        >
            <div className='container px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                    Our Clients
                </h2>
                {/* <div className='space-y-4 text-center'>
                    <p className='text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                        We collaborate with leading companies to bring you the best opportunities
                        and experiences.
                    </p>
                    <ul className='mt-8 flex flex-wrap justify-center gap-8'>
                        {CONST_CLIENTS_LIST.map(({ id, name, logo }) => (
                            <li
                                key={id}
                                className='flex items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md'
                            >
                                {typeof logo === "string" ? (
                                    <Image
                                        src={logo}
                                        alt={name}
                                        className='h-12 w-12 object-contain'
                                    />
                                ) : (
                                    logo
                                )}
                                {name}
                            </li>
                        ))}
                    </ul>
                </div> */}
                <div className='space-y-4 overflow-hidden px-4 py-8 text-center'>
                    <p className='text-sm text-gray-200 md:text-base lg:text-lg xl:text-xl'>
                        We collaborate with leading companies to bring you the best opportunities
                        and experiences.
                    </p>
                    <div className='relative'>
                        <div className='absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-primary to-transparent' />
                        <div className='absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-black to-transparent' />
                        <ul
                            ref={scrollRef}
                            className='flex w-full space-x-8 overflow-x-hidden py-4'
                            style={{ WebkitOverflowScrolling: "touch" }}
                        >
                            {[...CONST_CLIENTS_LIST, ...CONST_CLIENTS_LIST].map((client, index) => (
                                <li
                                    key={`${client.id}-${index}`}
                                    className='flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-white p-4 shadow-md'
                                >
                                    {typeof client.logo === "string" ? (
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            width={48}
                                            height={48}
                                            className='h-8 w-8 object-contain md:h-12 md:w-12'
                                        />
                                    ) : (
                                        client.logo
                                    )}
                                    <span className='text-sm md:text-base'>{client.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='mt-12 space-y-4'>
                    <h3 className='text-center text-2xl font-bold text-white'>
                        What Our Partners Say
                    </h3>
                    <blockquote className='text-center italic text-gray-300'>
                        &quot;Pentaomnia has been an incredible source of talent and innovation for
                        our company. The students are passionate, skilled, and always bring fresh
                        perspectives to our projects.&quot;
                    </blockquote>
                    <p className='text-center font-semibold text-gray-400'>
                        - Jane Doe, CEO of TechCorp
                    </p>
                </div>
            </div>
        </section>
    );
};
