"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, BriefcaseIcon, UsersIcon, HeartIcon, LightbulbIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      location: "Remote / New York",
      description: "Build intuitive and responsive user interfaces using React and Tailwind CSS.",
      link: "/careers/frontend-developer",
    },
    {
      title: "Backend Developer",
      location: "San Francisco, CA",
      description: "Design scalable APIs and backend systems using Node.js and PostgreSQL.",
      link: "/careers/backend-developer",
    },
    {
      title: "Product Designer",
      location: "Austin, TX",
      description: "Create engaging designs and prototypes for web and mobile applications.",
      link: "/careers/product-designer",
    },
    {
      title: "Marketing Specialist",
      location: "London, UK",
      description: "Develop and execute marketing campaigns to grow brand awareness.",
      link: "/careers/marketing-specialist",
    },
    {
      title: "Customer Success Manager",
      location: "Remote",
      description: "Support and guide customers to ensure their success with our platform.",
      link: "/careers/customer-success-manager",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-primary bg-center  text-gray-200 py-16">
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
          We’re looking for talented individuals who are passionate about innovation, teamwork, and making an impact. Explore open positions and take the next step in your career.
        </motion.p>
        <Link href="#openings" passHref>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
          >
            View Open Positions <ArrowRightIcon className="inline-block ml-2 w-5 h-5" />
          </motion.button>
        </Link>
      </section>

      {/* Why Work With Us Section */}
      <section id="why-us" className="container mx-auto px-4 md:px-8 lg:px-16 mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <BriefcaseIcon size={40} className="mb-4 text-primary" />
            <h3 className="text-xl text-gray-800  font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We invest in your professional development with training and mentorship programs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <UsersIcon size={40} className="mb-4 text-primary" />
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Collaborative Culture</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Work alongside talented teammates in an inclusive and supportive environment.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <HeartIcon size={40} className="mb-4 text-primary" />
            <h3 className="text-xl text-gray-800 font-semibold mb-2">Work-Life Balance</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Flexible schedules and remote work options to suit your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="container mx-auto px-4 md:px-8 lg:px-16 mt-20">
  <h2 className="text-3xl font-bold text-center mb-12">Current Openings</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {jobOpenings.map((job, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl text-gray-800 dark:text-gray-200 font-semibold">{job.title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
    
      </motion.div>
    ))}
  </div>
</section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 md:px-8 lg:px-16 mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Make an Impact?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
        >
          We’re excited to hear from you! Apply today and become part of our growing team.
        </motion.p>
        <Link href="/careers/apply" passHref>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
          >
            Apply Now <ArrowRightIcon className="inline-block ml-2 w-5 h-5" />
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default CareersPage;