"use client";

import { useMemo, useRef, useState } from "react";

import type { Event } from "@/constants/events";

import dayjs from "dayjs";
import { AnimatePresence, UseInViewOptions } from "framer-motion";
import * as motion from "framer-motion/client";

import EventCard from "@/components/eventcard";
import EventPopup from "@/components/home/eventPopup";
import { CONST_EVENTS } from "@/constants/events";
import { useInView } from "@/hooks/useInView";

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: custom * 0.1,
            ease: "easeOut",
        },
    }),
};

const inViewOptions: UseInViewOptions = {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
};

export const HomeEvents: React.FC = () => {
    const { liveEvents, pastEvents } = useMemo(() => {
        const now = dayjs();
        const sorted = CONST_EVENTS.sort((a, b) => dayjs(b.endDateTime).diff(dayjs(a.endDateTime)));
        return {
            liveEvents: sorted.filter((event) => dayjs(event.endDateTime).isAfter(now)),
            pastEvents: sorted
                .filter((event) => dayjs(event.endDateTime).isBefore(now))
                .slice(0, 6),
        };
    }, []);

    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setSelectedId(index);
    };

    const handleClosePopup = () => {
        setSelectedId(null);
    };

    const createRefs = (count: number): React.RefObject<HTMLDivElement>[] =>
        Array.from({ length: count }, () => useRef<HTMLDivElement>(null));

    const upcomingRefs = createRefs(liveEvents.length);
    const pastRefs = createRefs(pastEvents.length);

    return (
        <>
            {liveEvents.length > 0 ? (
        <section  id='promotions' className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-black to-primary '>
          
                <div className='container px-4 md:px-6'>
                    <div>
                        <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                            Upcoming Events
                        </h2>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {liveEvents.map((event, index) => {
                                const isInView = useInView(upcomingRefs[index]!, inViewOptions);
                                return (
                                    
                                        <EventCard
                                            clickCallback={() => handleCardClick(event.id)}
                                            className='max-h-[600px] min-h-[550px] w-full'
                                            event={event}
                                            isPressable
                                            showDescription
                                            showRegisterButton = {true}
                                            locationOnTop={false}
                                            truncateDescription
                                        />
                                   
                                );
                            })}
                        </div>
                    </div>
                </div>
           
            <AnimatePresence>
                {selectedId !== null && (
                    <EventPopup
                        onClose={handleClosePopup}
                        layoutId={String(selectedId)}
                        event={[...liveEvents, ...pastEvents].find((e) => e.id === selectedId)!}
                        showRegisterButton={false}
                    />
                )}
            </AnimatePresence>

            {/* <div className='container mt-8 px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                    Past Events
                </h2>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {pastEvents.map((event, index) => {
                        const isInView = useInView(pastRefs[index]!, inViewOptions);
                        return (
                            <motion.div
                                className='m-4'
                                key={"past-" + index}
                                ref={pastRefs[index]}
                                custom={index % 3}
                                variants={cardVariants}
                                initial='hidden'
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <EventCard
                                    clickCallback={() => handleCardClick(event.id)}
                                    className='max-h-[400px] min-h-[350px] w-full'
                                    event={event}
                                    isPressable
                                    showRegisterButton
                                    locationOnTop={true}
                                    showDescription
                                    truncateDescription
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div> */}
            </section>
            ) : (
                <p className='text-center text-xl text-white'></p>
            )}
            </>
    );
};
