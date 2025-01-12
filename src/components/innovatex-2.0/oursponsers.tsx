'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap, Star, Coffee } from 'lucide-react'
import Image from 'next/image'

const sponsors = [
  { name: 'TechCorp', logo: '/images/2.jpg', website: 'https://techcorp.com' },
  { name: 'InnovateCo', logo: '/images/2.jpg', website: 'https://innovateco.com' },
  { name: 'FutureTech', logo: '/images/2.jpg', website: 'https://futuretech.com' },
  { name: 'CodeMasters', logo: '/images/2.jpg', website: 'https://codemasters.com' },
  { name: 'ByteBuddies', logo: '/images/2.jpg', website: 'https://bytebuddies.com' },
]

export default function OurSponsors() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-yellow-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Awesome Sponsors
        </motion.h2>
        <div className="flex justify-center mb-8">
          <Zap className="text-yellow-600 animate-pulse mr-2" size={32} />
          <Star className="text-yellow-600 animate-bounce mx-2" size={32} />
          <Coffee className="text-yellow-600 animate-pulse ml-2" size={32} />
        </div>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center cursor-pointer group"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
              }}
            >
              <div className="relative mb-4">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={100}
                  height={100}
                  className="transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-yellow-600 font-semibold">Visit Site</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-yellow-800 text-center group-hover:text-yellow-600 transition-colors duration-300">
                {sponsor.name}
              </h3>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

