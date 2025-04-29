"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

interface ProjectCardProps {
  image: string
  category: string
  title: string
  description: string
  index: number
}

export default function ProjectCard({ image, category, title, description, index }: ProjectCardProps) {
  const cardRef = useRef(null)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm"
    >
      <div className="aspect-video overflow-hidden">
        <div className="h-full w-full bg-slate-700 flex items-center justify-center text-slate-400">
          <span>{image}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm font-medium text-indigo-400">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gradient group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">
          {title}
        </h3>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-xl pointer-events-none transition-all duration-300"></div>
    </motion.div>
  )
}
