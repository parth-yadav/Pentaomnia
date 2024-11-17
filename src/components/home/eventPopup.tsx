"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import EventCard from "@/components/eventcard";
import { Button } from "@/components/ui/button";
import { type Event } from "@/constants/events";

interface EventPopupInterface {
    onClose: () => void;
    layoutId: string;
    event: Event;
    showRegisterButton: boolean;
}

export default function Component({
    onClose,
    layoutId,
    event,
    showRegisterButton,
}: EventPopupInterface) {
    const { push } = useRouter();

    return (
        <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className='relative w-[80%] max-w-5xl overflow-hidden rounded-lg bg-background p-4 shadow-lg'
                onClick={(e) => e.stopPropagation()}
                layoutId={layoutId}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
            >
                <div className='flex h-[80vh] flex-col md:flex-row'>
                    {/* Image Section */}
                    <div className='h-1/2 w-full md:h-1/2 md:w-1/2'>
                        <div className='relative h-full w-full'>
                            <img
                                src={
                                    typeof event.imageSrc === "string"
                                        ? event.imageSrc
                                        : event.imageSrc.src
                                }
                                alt={event.name}
                                className='h-full w-full object-contain' // Use object-contain for landscape scaling
                            />
                           
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='mt-4 flex flex-col justify-between md:mt-0 md:w-1/2 md:pl-4'>
                        <div className='overflow-y-auto'>
                            <h2 className='mb-2 text-2xl font-bold'>{event.name}</h2>
                            <p className='mb-4 text-muted-foreground'>{event.description}</p>
                        </div>
                        <div className='mt-4 flex items-center justify-end gap-2'>
                            <Button variant='outline' onClick={onClose}>
                                Close
                            </Button>
                            {showRegisterButton && (
                                <Button onClick={() => push(`/events/register/${event?.id}`)}>
                                    Register
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
