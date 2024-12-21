"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import { CONST_CLIENTS_LIST } from "@/constants/ourclients";

const clientCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.0,
            ease: "easeOut",
        },
    },
};

export const HomePartners: React.FC = () => {
    const cardRefs = useRef<HTMLDivElement[]>([]); // Store references for all cards
    const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute("data-index"));
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => ({ ...prev, [index]: true }));
                    }
                });
            },
            {
                threshold: 0.3, // Trigger when 30% of the card is visible
            },
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className='container mx-auto px-4 py-16'>
            <h2 className='mb-12 text-center text-3xl font-bold'>Our Clients</h2>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5'>
                {CONST_CLIENTS_LIST.slice(0, 12).map((client, index) => (
                    <motion.div
                        key={client.id}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el; // Assign the ref without returning it
                        }}
                        data-index={index} // Add index for identification
                        variants={clientCardVariants}
                        initial='hidden'
                        animate={visibleCards[index] ? "visible" : "hidden"}
                        className='flex h-48 flex-col items-center  justify-center rounded-lg bg-white p-4 shadow-md shadow-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent'
                    >
                       
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={200}
                                height={100}
                                className='max-h-32 w-auto object-contain'
                            />
                       
                        <h3 className='mt-2 text-center text-lg font-semibold'>{client.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
