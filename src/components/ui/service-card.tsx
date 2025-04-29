"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 group"
    >
      <div className="mb-4 p-3 rounded-lg bg-indigo-900/30 text-indigo-300 inline-block group-hover:bg-indigo-800/40 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  )
}
