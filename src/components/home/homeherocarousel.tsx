"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface HomeHeroCarouselProps {
    className?: string;
    images: string[]; // Array of local image paths
    height?: number; // Default height for larger screens
    mobileHeight?: number; // Height for mobile screens
}

export const HomeHeroCarousel: React.FC<HomeHeroCarouselProps> = ({
    className,
    images,
    height = 600, // Default height for desktops
    mobileHeight = 350, // Smaller height for mobile
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
                        className="relative w-full"
                        style={{
                            height: `calc(100vh - ${height}px)`, // Use full height dynamically
                        }}
                    >
                        <div
                            className="relative w-full h-[350px] md:h-[600px]" // Responsive height
                        >
                            <Image
                                src={imagePath}
                                alt={`Carousel Image ${index + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="100vw"
                                priority={index === 0} // Prioritize first image
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
