import { HomeBlogPeek } from "@/components/home/blogpeek";
import HeroSection from "./herosection";
import EventCarousel from "./eventcarousel";
import WinPrizes from "./prizes";
import MarqueeStrip from "./marquee";

export default function BlogsPage() {
    return (
        <div className=' bg-black'>
            <MarqueeStrip />
            <HeroSection />

            {/* <WinPrizes /> */}
            <EventCarousel />
        </div>
    );
}
