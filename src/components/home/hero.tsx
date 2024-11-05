import Link from "next/link";

import { HomeHeroCarousel } from "@/components/home/homeherocarousel";
import { Button } from "@/components/ui/button";

export const HomeHero: React.FC = () => {
    return (
        <section className='w-full bg-gradient-to-r from-primary to-secondary'>
            <div className='grid gap-6 md:grid-cols-[1fr_400px] md:gap-12 xl:grid-cols-[1fr_600px]'>
                <div className='flex flex-col justify-center space-y-4 pl-12 text-white'>
                    <div className='space-y-2'>
                        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                            Join the Hub of Innovation and Engagement at Pentaomnia
                        </h1>
                        <p className='max-w-[600px] text-gray-200 md:text-xl'>
                            Empowering students with events, and opportunities.
                        </p>
                    </div>
                    <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                        <Link key='events' href='#events' prefetch={false}>
                            <Button variant='secondary'>Explore Events</Button>
                        </Link>
                        <Link key='events' href='/blogs' prefetch={false}>
                            <Button variant={"ghost"}>Read Blogs</Button>
                        </Link>
                        <Link key='events' href='/register' prefetch={false}>
                            <Button variant={"ghost"}>Join Us</Button>
                        </Link>
                    </div>
                </div>
                <div className='mx-auto flex w-full items-center justify-center'>
                    <HomeHeroCarousel className='' />
                </div>
            </div>
        </section>
    );
};
