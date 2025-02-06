"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { HomeHeroCarousel } from "@/components/home/homeherocarousel";
import { Button } from "@/components/ui/button";
import InfiniteScroll from "./infintescroll/components_InfiniteScroll";

// import image from "../../../public/images/eventimages/alpheum.jpg";
// import ScrollToTopButton from "./scrollup";

export const HomeHero: React.FC = () => {
    const localImages = [
        "/images/eventimages/alpheum.jpg",
        "/images/eventimages/arcana20.jpg",
        "/images/eventimages/armwrestle.jpg",
        "/images/eventimages/innovateex.jpg",
        "/images/eventimages/musclemania.jpg",
    ];
    return (
        <section className='w-full bg-gradient-to-r from-black to-primary'>
            
            <div className='p-6  lg:ml-20 lg:pl-6 lg:p-0'>
                <div className='grid gap-8 md:grid-cols-[1fr_400px] md:gap-12 xl:grid-cols-[1fr_600px]'>
                    <div className='flex flex-col justify-center space-y-4 text-white'>
                        <div className='space-y-4'>
                            <h1 className='text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl'>
                                {" "}
                                <span className='relative'>
                                    Empowering
                                    <svg
                                        viewBox='0 0 286 73'
                                        fill='none'
                                        className='absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1'
                                    >
                                        <motion.path
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{
                                                duration: 1.25,
                                                ease: "easeInOut",
                                            }}
                                            d='M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1'
                                            stroke='#FACC15'
                                            strokeWidth='3'
                                        />
                                    </svg>
                                </span>{" "}
                                Brands, Elevating Events
                            </h1>

                            <p className='text-xl md:text-2xl'>
                                Your All-in-One Partner for Events, and Digital Excellence
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 min-[400px]:flex-row'>
                           
                                <Button
  asChild
  className="bg-accent text-lg text-white transition-colors duration-300 hover:text-black"
  variant="ghost"
  size="lg"
>
  <Link href="/service-inquiry">Book Free Consultation</Link>
</Button>
                            
                            <Link key='read-blogs' href='/blogs' prefetch={false}>
                                <Button className='bg-accent text-lg' variant='ghost' size='lg'>
                                    Read Blogs
                                </Button>
                               
                            </Link>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <HomeHeroCarousel className='w-full max-w-[600px]' images={localImages} height={ 230} />
                    </div>
                </div>
                </div>
                 
           
           
        </section>
    );
};
