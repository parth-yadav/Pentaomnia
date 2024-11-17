"use client";

import { useMemo, useState } from "react";

import type { Event } from "@/constants/events";

import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";

import EventCard from "@/components/eventcard";
import EventPopup from "@/components/home/eventPopup";
import { CONST_EVENTS } from "@/constants/events";

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

    return (
        <section
            id='events'
            className='w-full bg-gradient-to-r from-black to-primary py-12 text-gray-800 dark:bg-slate-900 dark:text-white md:py-24 lg:py-32'
        >
            <div className='container px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                    Upcoming Events
                </h2>
                {liveEvents.length > 0 ? (
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {liveEvents.map((event, index) => (
                            <motion.div
                                className='m-4'
                                key={"upcoming" + index}
                                layoutId={String(event.id)}
                            >
                                <EventCard
                                    clickCallback={() => handleCardClick(event.id)}
                                    className='max-h-[400px] min-h-[350px] w-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-accent'
                                    event={event}
                                    isPressable
                                    showDescription
                                    showRegisterButton
                                    locationOnTop={false}
                                    truncateDescription
                                />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p className='text-center text-xl text-white'>No live events as of now</p>
                )}
                <AnimatePresence>
                    {selectedId !== null && (
                        <EventPopup
                            onClose={handleClosePopup}
                            layoutId={String(selectedId)}
                            event={[...liveEvents, ...pastEvents].find((e) => e.id === selectedId)!}
                        />
                    )}
                </AnimatePresence>
            </div>
            <div className='container mt-8 px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                    Past Events
                </h2>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {pastEvents.map((event, index) => (
                        <div className='m-4' key={"past-" + index}>
                            <EventCard
                                clickCallback={() => handleCardClick(event.id)}
                                className='max-h-[400px] min-h-[350px] w-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-accent'
                                event={event}
                                isPressable
                                showRegisterButton={true}
                                locationOnTop={true}
                                showDescription
                                truncateDescription
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
