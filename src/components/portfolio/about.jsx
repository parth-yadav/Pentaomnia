"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden">
                <div className="h-full w-full flex items-center justify-center text-slate-500">
                  <span>Team Image</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"></div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About{" "}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Our Company
              </span>
            </h2>

            <p className="text-slate-400 mb-6">
              At Pentaomnia, we blend creativity with strategic thinking to deliver exceptional events and digital
              solutions. Our passionate team of experts is dedicated to helping brands connect with their audiences in
              meaningful ways.
            </p>

            <p className="text-slate-400 mb-8">
              With over a decade of industry experience, we've helped businesses of all sizes transform their ideas into
              reality. Our holistic approach ensures that every project we undertake aligns with our clients' goals and
              exceeds their expectations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white">Creative Excellence</span>
              </div>

              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white">Innovative Solutions</span>
              </div>

              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white">Strategic Approach</span>
              </div>

              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
