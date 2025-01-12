'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Gift, Award, Zap } from 'lucide-react'

const prizes = [
  { 
    place: '1st Place', 
    prize: '$5,000', 
    description: 'Cash prize + Opportunity to pitch to VCs',
    icon: Trophy 
  },
  { 
    place: '2nd Place', 
    prize: '$3,000', 
    description: 'Cash prize + 1-year premium software licenses',
    icon: Gift 
  },
  { 
    place: '3rd Place', 
    prize: '$1,500', 
    description: 'Cash prize + 6-month coding bootcamp scholarship',
    icon: Award 
  },
  { 
    place: 'People\'s Choice', 
    prize: '$1,000', 
    description: 'Cash prize + Feature in Tech Magazine',
    icon: Zap 
  },
]

export default function PrizesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-500"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Awesome Prizes Up For Grabs!
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.place}
              className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
              }}
            >
              <div className="mb-4 p-4 bg-yellow-400 rounded-full">
                <prize.icon className="text-yellow-800" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-yellow-800">{prize.place}</h3>
              <p className="text-3xl font-extrabold mb-4 text-yellow-600">{prize.prize}</p>
              <p className="text-gray-600">{prize.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-xl text-yellow-600 font-semibold mb-4">
            But wait, there's more!
          </p>
          <p className="text-lg text-yellow-600">
            All participants will receive exclusive hackathon swag and certificates of participation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

