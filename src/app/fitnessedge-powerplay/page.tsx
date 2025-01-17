import { HomeBlogPeek } from "@/components/home/blogpeek";
import HeroSection from "./herosection";
import EventCarousel from "./eventcarousel";
import WinPrizes from "./prizes";

export default function BlogsPage() {
    return (
        <div className=' bg-black'>
          
            <HeroSection />
            {/* <WinPrizes /> */}
            <EventCarousel />
        </div>
    );
}
