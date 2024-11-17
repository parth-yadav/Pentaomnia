import Link from "next/link";

import { HomeHeroCarousel } from "@/components/home/homeherocarousel";
import { Button } from "@/components/ui/button";

export const HomeHero: React.FC = () => {
    return (
      
        <section className='w-full bg-gradient-to-r from-primary to-black'>
            <div className='grid gap-6 md:grid-cols-[1fr_400px] md:gap-12 xl:grid-cols-[1fr_600px]'>
                <div className='flex flex-col justify-center space-y-4 pl-12 text-white'>
                    <div className='space-y-2 mt-6 mr-6'>
                        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                            Empowering Brands, Elevating Events
                        </h1>
                        <p className='max-w-[600px] text-white md:text-xl'>
                            Your All-in-One Partner for Marketing, Events, and Digital Excellence
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
                <div className='mx-auto flex w-full items-center justify-center'>
                    <HomeHeroCarousel className='' />
                </div>
            </div>
        </section>
    );
};
