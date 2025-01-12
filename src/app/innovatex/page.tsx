import { HomeBlogPeek } from "@/components/home/blogpeek";
import { HeroHighlightDemo } from "@/components/innovatex-2.0/hero";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TypewriterEffectSmoothDemo } from "@/components/innovatex-2.0/typewriter";
import RulesSection from "@/components/innovatex-2.0/rules";
import OurSponsors from "@/components/innovatex-2.0/oursponsers";
import PrizesSection from "@/components/innovatex-2.0/prizex";
import RegisterNowSection from "@/components/innovatex-2.0/registernow";

export default function InnovatexPage() {
    return (
        <div >
            
            <HeroHighlightDemo />
            <OurSponsors />
            <PrizesSection />
            <RegisterNowSection />
           
            
        </div>
    );
}
