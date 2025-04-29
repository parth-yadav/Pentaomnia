"use client"

import { motion } from "framer-motion"
import TestimonialCard from "@/components/ui/testimonial-card"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The Pentaomnia team exceeded our expectations at every turn. Their attention to detail and creative approach made our corporate event a tremendous success.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp",
    },
    {
      quote:
        "Our new website has significantly increased our online conversions. Their team understood our needs perfectly and delivered a solution that truly works for our business.",
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions",
    },
    {
      quote:
        "Working with Pentaomnia on our product launch was seamless. Their strategic thinking and flawless execution helped us make a real impact in the market.",
      name: "Jessica Taylor",
      position: "Product Manager",
      company: "EcoLife",
    },
  ]

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Client{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Testimonials
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear what our clients have to say about their experience working with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
