"use client";

import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface HomeHeroCarouselProps {
    className?: string;
    images: string[]; // Array of local image paths
    height?: number; // Optional height prop with a default value
}

export const HomeHeroCarousel: React.FC<HomeHeroCarouselProps> = ({
    className,
    images,
    height = 600, // Default height if not provided
}) => {
    const plugin = useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: true,
        }),
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className={`${className} w-full`}
            opts={{
                loop: true,
                duration: 20,
                skipSnaps: true,
            }}
        >
            <CarouselContent>
                {images.map((imagePath, index) => (
                    <CarouselItem
                        key={index}
                        className='relative w-full'
                        style={{ height: `${height}px` }}
                    >
                        <Image
                            src={imagePath}
                            alt={`Carousel Image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes='100vw'
                            priority={index === 0} // Prioritize loading for the first image
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel> 
    );
};
