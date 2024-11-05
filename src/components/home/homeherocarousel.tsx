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

interface HomeHeroCarouselProps {
    className?: string;
}

export const HomeHeroCarousel: React.FC<HomeHeroCarouselProps> = ({ className }) => {
    const plugin = useRef(
        Autoplay({
            delay: 13500,
            stopOnInteraction: true,
        }),
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className={`${className} max-w-[600px] sm:min-w-[500px] lg:max-w-[600px]`}
            opts={{
                loop: true,
                duration: 40,
                skipSnaps: true,
                // dragFree: true,
            }}
        >
            {/* <div className='bg-red-800 w-[400px] h-[400px]'></div> */}
            <CarouselContent className=''>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className='scale-115 min-w-[400px]'>
                        <Image
                            src={"https://picsum.photos/600?random=" + index}
                            alt={`Event ${index + 1}`}
                            className='h-full w-full'
                            height={600}
                            width={600}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
