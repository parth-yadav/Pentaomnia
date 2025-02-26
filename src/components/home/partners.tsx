"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CONST_CLIENTS_LIST } from "@/constants/ourclients";

const clientCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: "easeOut",
    },
  },
};

export const HomePartners: React.FC = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [visibleCards, setVisibleCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          setVisibleCards((prev) => ({ ...prev, [index]: entry.isIntersecting }));
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the card is visible
        rootMargin: "0px 0px -10% 0px", // Slightly reduce the effective viewport
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="px-4 py-16 bg-gradient-to-r from-black to-primary">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-5xl font-bold text-white">Our Clients / Partners</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {CONST_CLIENTS_LIST.slice(0, 12).map((client, index) => (
           <motion.div
  key={client.id}
  ref={(el) => {
    if (el) cardRefs.current[index] = el;
  }}
  data-index={index}
  variants={clientCardVariants}
  initial="hidden"
  animate={visibleCards[index] ? "visible" : "hidden"}
  className="relative flex h-48 flex-col items-center justify-center rounded-lg bg-white  px-4 shadow-md shadow-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent overflow-hidden"
>
  {/* Image */}
  <Image
    src={client.logo}
    alt={`${client.name} logo`}
    width={200}
    height={100}
    className="max-h-28 mb-2  w-auto object-contain"
  />

  {/* Text */}
  <h3
    className="absolute bottom-4 left-0 right-0 text-center text-lg font-semibold line-clamp-2"
    style={{ margin: "0 auto" }}
  >
    {client.name}
  </h3>
</motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

