'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Users, Code, Award, Shield } from 'lucide-react'

const rules = [
  {
    icon: Clock,
    title: 'Time Limit',
    description: 'The hackathon will run for 48 hours. All projects must be submitted by the deadline.'
  },
  {
    icon: Users,
    title: 'Team Size',
    description: 'Teams can consist of 1-4 members. No exceptions will be made for larger teams.'
  },
  {
    icon: Code,
    title: 'Original Work',
    description: 'All code must be written during the hackathon. Use of open source libraries is allowed.'
  },
  {
    icon: Award,
    title: 'Judging Criteria',
    description: 'Projects will be judged on creativity, technical difficulty, polish, and usefulness.'
  },
  {
    icon: Shield,
    title: 'Code of Conduct',
    description: 'All participants must adhere to our code of conduct throughout the event.'
  }
]

export default function RulesContent() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Hackathon Rules
      </motion.h1>

      <motion.div 
        className="bg-white rounded-lg shadow-xl p-8 mb-12"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center mb-6">
          <AlertTriangle className="text-yellow-600 mr-4" size={24} />
          <h2 className="text-2xl font-semibold text-yellow-800">Important Notice</h2>
        </div>
        <p className="text-gray-700 mb-4">
          Please read all rules carefully. Failure to comply with any of these rules may result in disqualification from the hackathon.
        </p>
        <p className="text-gray-700">
          If you have any questions about the rules, please contact the organizers before the event starts.
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6"
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 rounded-full p-3 mr-4">
                <rule.icon className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-yellow-800">{rule.title}</h3>
            </div>
            <p className="text-gray-700">{rule.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-xl text-yellow-500 font-semibold">
          By participating in the hackathon, you agree to abide by these rules.
        </p>
        <p className="mt-4 text-yellow-500">
          Let's create, innovate, and have fun while respecting these guidelines!
        </p>
      </motion.div>
    </div>
  )
}

