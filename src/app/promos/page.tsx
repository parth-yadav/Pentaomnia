"use client";

import { useEffect, useRef, useState } from "react";

import type { Promotion } from "@/constants/promotions";

import { Input } from "@nextui-org/input";
import dayjs from "dayjs";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import { Search } from "lucide-react";

import { PromoCard } from "@/components/promocard";
import { isDevelopmentMode } from "@/constants/dev";
import { CONST_PROMOS } from "@/constants/promotions";

export default function PromotionsPage() {
    const [promos, setPromos] = useState<Promotion[] | null>(null);
    const [filteredPromos, setFilteredPromos] = useState<Promotion[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const handleCardClick = (index: number) => {
        setSelectedId(index);
    };

    useEffect(() => {
        // Filter promos based on search input
        if (promos) {
            const filteredPromos = promos.filter(
                (promo) =>
                    promo.title
                        .toLowerCase()
                        .includes((searchInputRef.current?.value ?? "").toLowerCase()) ||
                    promo.description
                        .toLowerCase()
                        .includes((searchInputRef.current?.value ?? "").toLowerCase()) ||
                    promo.category
                        .toLowerCase()
                        .includes((searchInputRef.current?.value ?? "").toLowerCase()) ||
                    promo.partnerName
                        .toLowerCase()
                        .includes((searchInputRef.current?.value ?? "").toLowerCase()),
            );
            // Update the filtered promos state
            setFilteredPromos(filteredPromos);
        }
    }, [promos, searchInputRef.current?.value]);

    useEffect(() => {
        setTimeout(
            () => {
                setPromos(CONST_PROMOS.sort((a, b) => dayjs(a.endDate).diff(dayjs(b.endDate))));
                setIsLoading(false);
            },
            isDevelopmentMode ? 0 : 2000,
        );
        return () => {
            setPromos(null);
        };
    }, []);

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='mb-8 text-center text-4xl font-bold'>Promotions</h1>
            <div className='mx-auto grid grid-cols-1 gap-4 sm:w-[80%] md:w-[65%] lg:w-[45%]'>
                <Input
                    classNames={{
                        base: "max-w-full h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper:
                            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder='Type to search'
                    size='sm'
                    startContent={<Search size={18} />}
                    type='search'
                />
            </div>
            <div className='w-full py-4 md:py-8 lg:py-12'>
                {!filteredPromos.length ? (
                    <p className='text-center text-gray-500'>
                        No events found. Try adjusting your search or filter.
                    </p>
                ) : (
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {isLoading &&
                            [...Array(6)].map((_, index) => <PromoCard loading key={index} />)}
                        {filteredPromos.map((promo, index) => (
                            <motion.div
                                className='m-4'
                                key={index}
                                layoutId={String(index)}
                                onClick={() => handleCardClick(index)}
                            >
                                <PromoCard
                                    promo={promo}
                                    clickCallback={() => handleCardClick(index)}
                                />
                            </motion.div>
                        ))}
                    
                    </div>
                )}
            </div>
        </div>
    );
}
