"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-slate-900/40 z-0"></div>
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 z-[-1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="px-4 py-1 rounded-full bg-indigo-900/30 text-indigo-300 text-sm font-medium">
              Events & Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-white">Bringing Your </span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Vision to Life
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mb-10"
          >
            We craft unforgettable events and build cutting-edge digital experiences that elevate your brand and engage
            your audience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Discover Our Services
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-colors"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <a href="#services" className="flex flex-col items-center text-slate-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
