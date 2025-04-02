"use client";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import  useEmblaCarousel  from "embla-carousel-react";

export const HomeWho: React.FC = () => {
    // Carousel data (images and captions)
    const carouselData = [
        {
            image: "/images/whoweare/shahidsir.jpg",
            caption:
                "Founder and CEO: Mr. Shahid in Bihar Business Connect 2024 with Mr. Azhar Iquabal Founder and MD of Inshorts News App.",
        },
        {
            image: "/images/whoweare/flyingbeast.jpg",
            caption: "Our CEO is with Mr Gaurav Taneja (Flying beast), Famous Influencer India",
        },
        {
            image: "/images/whoweare/mla.jpg",
            caption: "Our CEO is with Kewal Singh Pathania, MLA, Shahpur",
        },
        {
            image: "/images/whoweare/sbdind.jpg",
            caption: "Receiving appreciation awards from Mr Pardeep Kaile, CEO SBD India Private Limited",
        },
    ];

    // Embla Carousel setup
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Autoplay functionality
    useEffect(() => {
        if (!emblaApi) return;

        const autoplayInterval = setInterval(() => {
            if (emblaApi.canScrollNext()) {
                emblaApi.scrollNext();
            } else {
                emblaApi.scrollTo(0); // Loop back to the first slide
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(autoplayInterval); // Cleanup interval on unmount
    }, [emblaApi]);

    // Update selected index when carousel scrolls
    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <section
            id="about"
            className="relative bg-gradient-to-r from-black to-primary bg-center pt-12 pb-12 md:pt-24 lg:pt-16"
        >
            {/* Gradient Background Effects */}
            <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-gradient-to-r from-accent via-yellow-200 to-transparent opacity-30"></div>
            <div className="absolute top-2/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500 via-teal-200 to-transparent opacity-20"></div>
            <div className="absolute top-1/2 left-2/3 w-72 h-72 rounded-full bg-gradient-to-r from-black via-teal-500 to-transparent opacity-25"></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-x-8 md:space-y-0">
                    {/* Left Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                            Who We Are
                        </h2>
                        <p className="max-w-[900px] text-gray-200 md:text-xl lg:text-lg xl:text-xl">
                            At Pentaomnia, we empower brands and elevate experiences through a comprehensive suite of services,
                            including corporate events, university and college events, wedding planning, private functions, and
                            product launches. Our expertise extends to brand, product, and service promotions, social media
                            marketing, ad campaigns, SEO, web development, graphics designing, content creation, video editing,
                            and product shoots. With a 360° approach, we seamlessly blend creativity and strategy to deliver
                            unforgettable events, engaging digital experiences, and impactful marketing campaigns. Choose
                            Pentaomnia to transform your vision into reality and unlock the full potential of your brand.
                        </p>
                    </div>

                    {/* Right Carousel */}
                    <div className="flex-1">
    <Carousel ref={emblaRef} className="w-full">
        <CarouselContent>
            {carouselData.map((item, index) => (
                <CarouselItem key={index}>
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={`Carousel Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-b-none rounded-lg shadow-lg"
                        />
                        {/* Caption */}
                        <p
                            className="absolute bottom-0 left-0 right-0 p-2 text-center bg-white  z-10 rounded-t-none rounded-lg text-gray-600"
                        >
                            {item.caption}
                        </p>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        {/* Navigation Buttons */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {carouselData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                        selectedIndex === index ? "bg-primary" : "bg-gray-400"
                    }`}
                ></button>
            ))}
        </div> */}
        {/* Previous and Next Buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
    </Carousel>
</div>
                </div>
            </div>
        </section>
    );
};