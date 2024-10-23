"use client";

import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export const HomeHeroCarousel: React.FC = () => {
    const plugin = useRef(
        Autoplay({
            delay: 3500,
            stopOnInteraction: true,
        }),
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className='w-full max-w-xs'
            opts={{
                loop: true,
                duration: 40,
                skipSnaps: true,
                // dragFree: true,
            }}
        >
            <CarouselContent className='rounded-md'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className='scale-115 min-w-[400px] rounded-md px-12'>
                        <Image
                            src={"https://picsum.photos/600?random=" + index}
                            alt={`Event ${index + 1}`}
                            className='h-full w-full rounded-md'
                            height={600}
                            width={600}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className='hidden md:block'>
                <CarouselPrevious />
            </div>
            <div className='hidden md:block'>
                <CarouselNext />
            </div>
        </Carousel>
    );
};
