import { HomeBlogPeek } from "@/components/home/blogpeek";
import HeroSection from "./herosection";
import EventCarousel from "./eventcarousel";

export default function BlogsPage() {
    return (
        <div className=' bg-black'>
          
            <HeroSection />
            <EventCarousel />
        </div>
    );
}
