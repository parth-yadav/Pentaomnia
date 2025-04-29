"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-slate-900/50 to-slate-950 z-0"></div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-15 z-[-1] blur-sm"
        style={{ backgroundBlendMode: 'overlay' }}
      ></div>

      {/* Floating Decorative Shapes */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-purple-600/20 blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-pink-600/20 blur-3xl z-0"></div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="px-5 py-1.5 rounded-full bg-purple-900/40 text-purple-300 text-sm font-medium border border-purple-500/30 backdrop-blur-sm">
              Creative Events & Digital Innovation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-[-0.04em] max-w-4xl"
          >
            <span className="text-white">Bringing Your </span>
            <span className="bg-gradient-to-r text-transparent bg-clip-text  from-white/10 to-red-500  ">
              Vision to Life
            </span>
            {/* <span className=" clip-text  bg-gradient-to-r  from-purple-400 to-red-500 ">
              Vision to Life
            </span> */}
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            We create unforgettable live events and build immersive digital solutions that elevate your brand and engage your audience.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#services"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Discover Our Services
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg border border-slate-600/50 text-white hover:bg-slate-800 hover:border-slate-500 transition-all duration-300 backdrop-blur-sm bg-black/20"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <a href="#services" className="flex flex-col items-center text-slate-400 hover:text-white transition-colors">
            <span className="text-sm mb-1">Scroll Down</span>
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