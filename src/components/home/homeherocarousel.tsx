"use client";

import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface HomeHeroCarouselProps {
    className?: string;
    images: string[]; // Array of local image paths
}

export const HomeHeroCarousel: React.FC<HomeHeroCarouselProps> = ({ className, images }) => {
    const plugin = useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: true,
        }),
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className={`${className} max-w-[400px]  lg:max-w-[600px]`}
            opts={{
                loop: true,
                duration: 20,
                skipSnaps: true,
            }}
        >
            <CarouselContent>
                {images.map((imagePath, index) => (
                    <CarouselItem key={index} className=''>
                        <Image
                            src={imagePath}
                            alt={`Carousel Image ${index + 1}`}
                            className='object-cover'
                            height={600}
                            width={600}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
