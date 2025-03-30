"use client";

import CareerApplicationForm from "../CareersForm" // Import the form component
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-primary text-gray-200 py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Join Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
        >
          We’re excited to hear from you! Fill out the form below to apply for a position or inquire about opportunities.
        </motion.p>
      </section>

      {/* Form Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
            Application Form
          </h2>
          <CareerApplicationForm /> {/* Render the form component here */}
        </motion.div>
      </section>
    </div>
  );
}