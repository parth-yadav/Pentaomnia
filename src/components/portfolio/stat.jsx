"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function Stats() {
  const [isInView, setIsInView] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const stats = [
    { number: 120, label: "Events Managed" },
    { number: 85, label: "Digital Projects" },
    { number: 50, label: "Happy Clients" },
    { number: 10, label: "Team Members" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
      <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                {isInView ? <Counter number={stat.number} /> : 0}+
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ number, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = number
    const incrementTime = (duration / end) * 1000

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start === end) clearInterval(timer)
    }, incrementTime)

    return () => {
      clearInterval(timer)
    }
  }, [number, duration])

  return <span>{count}</span>
}
