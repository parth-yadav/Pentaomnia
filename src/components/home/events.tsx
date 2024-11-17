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
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const { liveEvents, pastEvents } = useMemo(() => {
        const now = dayjs();
        const sorted = CONST_EVENTS.sort((a, b) => dayjs(a.endDateTime).diff(dayjs(b.endDateTime)));
        return {
            liveEvents: sorted.filter((event) => dayjs(event.endDateTime).isAfter(now)),
            pastEvents: sorted.filter((event) => dayjs(event.endDateTime).isBefore(now)),
        };
    }, []);

    const handleCardClick = (index: number) => {
        setSelectedId(index);
    };

    const handleClosePopup = () => {
        setSelectedId(null);
    };

    const renderEventCards = (events: Event[], isPast: boolean) => (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {events.map((event, index) => (
                <motion.div
                    className='m-4'
                    key={`${isPast ? "past" : "live"}-${index}`}
                    layoutId={String(event.id)}
                >
                    <EventCard
                        clickCallback={() => handleCardClick(event.id)}
                        className='max-h-[400px] min-h-[350px] w-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md hover:shadow-accent'
                        event={event}
                        isPressable
                        showDescription
                        showRegisterButton={!isPast}
                        locationOnTop={isPast}
                        truncateDescription
                    />
                </motion.div>
            ))}
        </div>
    );

    return (
        <section
            id='events'
            className='w-full bg-gradient-to-r from-black to-primary py-12 text-gray-800 dark:bg-slate-900 dark:text-white md:py-24 lg:py-32'
        >
            <div className='container px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                    Upcoming Events
                </h2>
                {renderEventCards(liveEvents, false)}
            </div>
            <div className='container mt-8 px-4 md:px-6'>
                <h2 className='mb-8 text-center text-3xl font-bold tracking-tighter text-white sm:text-5xl'>
                    Past Events
                </h2>
                {renderEventCards(pastEvents, true)}
            </div>
            <AnimatePresence>
                {selectedId !== null && (
                    <EventPopup
                        onClose={handleClosePopup}
                        layoutId={String(selectedId)}
                        event={[...liveEvents, ...pastEvents].find((e) => e.id === selectedId)!}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
