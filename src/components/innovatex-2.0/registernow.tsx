'use client'

import { motion } from 'framer-motion'
import { Rocket, Calendar, Users, Code } from 'lucide-react'
import Link from 'next/link'

const features = [
  { icon: Calendar, text: '48-Hour Coding Sprint' },
  { icon: Users, text: 'Network with Tech Enthusiasts' },
  { icon: Code, text: 'Learn Cutting-Edge Technologies' },
  { icon: Rocket, text: 'Launch Your Innovative Ideas' },
]

export default function RegisterNowSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-500">
            Ready to Hack the Future?
          </h2>
          <p className="text-xl text-yellow-600 max-w-2xl mx-auto">
            Join us for an unforgettable weekend of coding, creativity, and innovation!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
              }}
            >
              <div className="bg-white p-4 rounded-full mb-4 shadow-lg">
                <feature.icon className="text-black" size={32} />
              </div>
              <p className="text-center text-yellow-600 font-semibold">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link 
            href="/register" 
            className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
          >
            Register Now!
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

