"use client"

import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center opacity-10 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-12 ">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 lg:mb-0 lg:mr-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Create Something{" "}
                <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Amazing?
                </span>
              </h2>
              <p className="text-slate-300 max-w-2xl">
                Let's collaborate to bring your vision to life. Our team is ready to help you create unforgettable
                experiences and impactful digital solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#contact"
                className=" mx-4 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity inline-block shadow-lg shadow-purple-500/20"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
