import Link from "next/link";

import { HomeHeroCarousel } from "@/components/home/homeherocarousel";
import { Button } from "@/components/ui/button";

import image from "../../../public/images/eventimages/alpheum.jpg";

export const HomeHero: React.FC = () => {
    const localImages = [
        "/images/eventimages/alpheum.jpg",
        "/images/eventimages/arcana20.jpg",
        "/images/eventimages/armwrestle.jpg",
        "/images/eventimages/innovateex.jpg",
        "/images/eventimages/musclemania.jpg",
    ];
    return (
        <section className='w-full bg-gradient-to-r from-primary to-black md:py-24 lg:py-32'>
            <div className='container px-4 md:px-6'>
                <div className='grid gap-6 md:grid-cols-[1fr_400px] md:gap-12 xl:grid-cols-[1fr_600px]'>
                    <div className='flex flex-col justify-center text-white'>
                        <div className='mr-6 mt-6 space-y-2'>
                            <h1 className='text-3xl font-bold sm:text-5xl xl:text-6xl/none'>
                                Empowering Brands, Elevating Events
                            </h1>
                            <p className='max-w-[600px] text-white md:text-xl'>
                                Your All-in-One Partner for Marketing, Events, and Digital
                                Excellence
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                            <Link key='explore-events' href='#events' prefetch={false}>
                                <Button
                                    className='bg-accent text-white transition-colors duration-300 hover:text-black'
                                    variant={"ghost"}
                                >
                                    Explore Events
                                </Button>
                            </Link>

                            <Link key='read-blogs' href='/blogs' prefetch={false}>
                                <Button className='bg-accent' variant={"ghost"}>
                                    Read Blogs
                                </Button>
                            </Link>

                            {/* <Link key='join-us' href='/register' prefetch={false}>
                            <Button className='bg-accent' variant={"ghost"}>
                                Join Us
                            </Button>
                        </Link> */}
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center'>
                        <HomeHeroCarousel className='' images={localImages} />
                    </div>
                </div>
            </div>
        </section>
    );
};
