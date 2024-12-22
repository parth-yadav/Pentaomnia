"use client";

import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";

import Whatsapp from "./whatsapp-widget";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when scrolled down 100px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to the top when clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling
        });
    };

    return (
        <div  className='flex'>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className='fixed bottom-24 right-4 z-50 rounded-full bg-blue-600 p-3 text-white transition-all hover:bg-blue-700'
                    aria-label='Scroll to top'
                >
                    <ChevronUp className='h-8 w-8' />
                </button>
            )}
            <Whatsapp />
        </div>
    );
};

export default ScrollToTopButton;
