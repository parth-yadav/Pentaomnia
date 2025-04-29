// utils/parallaxScroll.ts

import { useEffect } from "react";

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${scrollTop * 0.5}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};