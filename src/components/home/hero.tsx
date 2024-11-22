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
       <section className='w-full bg-gradient-to-r from-primary to-black py-12 md:py-24 lg:py-32'>
  <div className='container px-4 md:px-6'>
    <div className='grid gap-8 md:grid-cols-[1fr_400px] md:gap-12 xl:grid-cols-[1fr_600px]'>
      <div className='flex flex-col justify-center space-y-8 text-white'>
        <div className='space-y-4'>
          <h1 className='text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl'>
            Empowering Brands, Elevating Events
          </h1>
          <p className='text-xl md:text-2xl'>
            Your All-in-One Partner for Marketing, Events, and Digital Excellence
          </p>
        </div>
        <div className='flex flex-col gap-4 min-[400px]:flex-row'>
          <Link key='explore-events' href='#events' prefetch={false}>
            <Button
              className='bg-accent text-white text-lg transition-colors duration-300 hover:text-black'
              variant="ghost"
              size="lg"
            >
              Explore Events
            </Button>
          </Link>
          <Link key='read-blogs' href='/blogs' prefetch={false}>
            <Button 
              className='bg-accent text-lg' 
              variant="ghost"
              size="lg"
            >
              Read Blogs
            </Button>
          </Link>
        </div>
      </div>
      <div className='flex w-full items-center justify-center'>
        <HomeHeroCarousel className='w-full max-w-[600px]' images={localImages} />
      </div>
    </div>
  </div>
</section>

    );
};
