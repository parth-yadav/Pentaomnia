"use client";

import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";

interface HomeHeroCarouselProps {
    className?: string;
    images: string[];
    height?: number;
    mobileHeight?: number;
}

export const HomeHeroCarousel: React.FC<HomeHeroCarouselProps> = ({
    className,
    images,
    height = 600,
    mobileHeight = 350,
}) => {
    const plugin = useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: true,
        })
    );

    const [api, setApi] = useState<CarouselApi | null>(null);

    return (
        <Carousel
            setApi={setApi} // Get carousel API reference
            plugins={[plugin.current]}
            className={`${className} w-full relative`}
            opts={{ loop: true, duration: 20, skipSnaps: true }}
        >
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
                onClick={() => api?.scrollPrev()} // Use actual API
            >
                <ChevronLeft size={24} />
            </button>
            <CarouselContent>
                {images.map((imagePath, index) => (
                    <CarouselItem key={index} className="relative w-full">
                        <div className="relative w-full h-[350px] md:h-[600px]">
                            <Image
                                src={imagePath}
                                alt={`Carousel Image ${index + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="100vw"
                                priority={index === 0}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
                onClick={() => api?.scrollNext()} // Use actual API
            >
                <ChevronRight size={24} />
            </button>
        </Carousel>
    );
};
