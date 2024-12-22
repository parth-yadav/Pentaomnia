"use client";

import { useEffect, useRef, useState } from "react";



import type { Event } from "@/constants/events";



import { Input } from "@nextui-org/input";
import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import { Search } from "lucide-react";



import EventCard from "@/components/eventcard";
import EventPopup from "@/components/home/eventPopup";
import { isDevelopmentMode } from "@/constants/dev";
import { CONST_EVENTS } from "@/constants/events";





export default function EventsPage() {
    // const [events, setEvents] = useState<Event[] | null>(null);
    // const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    // const [selectedId, setSelectedId] = useState<number | null>(null);
    // const [isLoading, setIsLoading] = useState<boolean>(true);
    // const searchInputRef = useRef<HTMLInputElement>(null);

    // const handleCardClick = (index: number) => {
    //     setSelectedId(index);
    // };

    // const handleClosePopup = () => {
    //     setSelectedId(null);
    // };

    // useEffect(() => {
    //     // Filter events based on search input
    //     if (events) {
    //         const filteredEvents = events.filter(
    //             (event) =>
    //                 event.title
    //                     ?.toLowerCase()
    //                     .includes((searchInputRef.current?.value ?? "").toLowerCase()) ||
    //                 event.location
    //                     ?.toLowerCase()
    //                     .includes((searchInputRef.current?.value ?? "").toLowerCase()) ||
    //                 event.description
    //                     ?.toLowerCase()
    //                     .includes((searchInputRef.current?.value ?? "").toLowerCase()),
    //         );
    //         // Update the filtered events state
    //         setFilteredEvents(filteredEvents);
    //     }
    // }, [events, searchInputRef.current?.value]);


    // useEffect(() => {
    //     setTimeout(
    //         () => {
    //             setEvents(
    //                 CONST_EVENTS.sort((a, b) => dayjs(a.endDateTime).diff(dayjs(b.endDateTime))),
    //             );
    //             setIsLoading(false);
    //         },
    //         isDevelopmentMode ? 0 : 2000,
    //     );
    //     return () => {
    //         setEvents(null);
    //     };
    // }, []);

    return (
    //     <div className='container mx-auto px-4 py-8'>
            <h1 className='mb-8 text-center text-4xl font-bold'>Page under Maintenance</h1>
    //         <div className='mx-auto grid grid-cols-1 gap-4 sm:w-[80%] md:w-[65%] lg:w-[45%]'>
    //             <Input
    //                 classNames={{
    //                     base: "max-w-full h-10",
    //                     mainWrapper: "h-full",
    //                     input: "text-small",
    //                     inputWrapper:
    //                         "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
    //                 }}
    //                 placeholder='Type to search'
    //                 size='sm'
    //                 startContent={<Search size={18} />}
    //                 type='search'
    //                 ref={searchInputRef}
    //             />
    //         </div>
    //         <div className='w-full py-4 md:py-8 lg:py-12'>
    //             {!filteredEvents.length ? (
    //                 <p className='text-center text-gray-500'>
    //                     No events found. Try adjusting your search or filter.
    //                 </p>
    //             ) : (
    //                 <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
    //                     {isLoading &&
    //                         [...Array(6)].map((_, index) => <EventCard loading key={index} />)}
    //                     {filteredEvents.map((event, index) => (
    //                         <motion.div
    //                             className='m-4'
    //                             key={index}
    //                             layoutId={String(index)}
    //                             onClick={() => handleCardClick(index)}
    //                         >
    //                             <EventCard
    //                                 clickCallback={() => handleCardClick(index)}
    //                                 className='max-h-[400px] min-h-[350px] w-full'
    //                                 event={event}
    //                             />
    //                         </motion.div>
    //                     ))}
    //                     <AnimatePresence>
    //                         {events && selectedId !== null && events[selectedId] && (
    //                             <EventPopup
    //                                 event={events[selectedId]}
    //                                 onClose={handleClosePopup}
    //                                 layoutId={String(selectedId)}
    //                                 showRegisterButton={false}
    //                             />
    //                         )}
    //                     </AnimatePresence>
    //                 </div>
    //             )}
    //         </div>
    //     </div>
    // <h1 className="items-center">
    //     page under maintenance
    // </h1>
    );
}