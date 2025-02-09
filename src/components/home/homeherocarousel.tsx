"use client";

import { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselApi,
} from "@/components/ui/carousel";

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
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!api) return;
        const updateIndex = () => setCurrentIndex(api.selectedScrollSnap());
        api.on("select", updateIndex);
        updateIndex(); // Initial index setup
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className={`${className} w-full relative`}
            opts={{ loop: true, duration: 24 }}
        >
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
            
            {/* Navigation buttons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-24 px-4 z-30">
    <button
        className="bg-black opacity-70 text-gray-300 hover:text-white p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        onClick={() => api?.scrollPrev()}
    >
        <ChevronLeft size={24} />
    </button>
    <button
        className="bg-black opacity-70 text-gray-300 hover:text-white p-3 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        onClick={() => api?.scrollNext()}
    >
        <ChevronRight size={24} />
    </button>
</div>


            {/* Indicator dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${
                            currentIndex === index ? "bg-white" : "bg-gray-500"
                        }`}
                    />
                ))}
            </div>
        </Carousel>
    );
};
