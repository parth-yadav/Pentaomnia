"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Award, Calendar, Camera, Diamond, Globe, MessageSquareQuote, Rocket, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AboutPage() {
  // Refs for sections to animate on scroll
  const heroRef = useRef(null)
  const contentRef = useRef(null)
  
  // Parallax scroll effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardHover = {
    rest: { scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  return (
    <div className="bg-gradient-to-r from-black to-primary text-white">
      {/* Hero Section with Parallax Background */}
      <div ref={heroRef} className="relative h-[100vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brand.png"
            alt="Pentaomnia Team"
            fill
            className="object-cover brightness-40 scale-110"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-90"></div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </div>
        
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity, scale: heroScale }}
          className="container relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl font-semibold font-playfair mb-6 text-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Pentaomnia Private Limited
          </motion.h2>
          <motion.p
            className="text-xl italic mb-10 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Where Innovation Meets Execution
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div 
              
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-100 transition-colors"
            >
              <span>Discover our story</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div ref={contentRef} className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Company Introduction */}
        <motion.section
          id="company-intro"
          className="mb-20 mt-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          {/* Decorative element */}
          <div className="absolute left-0 top-0 w-12 h-12 border-l-2 border-t-2 border-blue-400 -ml-6 -mt-6 opacity-70"></div>
          
          <div className="max-w-3xl mx-auto bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-blue-900/30">
            <p className="text-xl font-playfair leading-relaxed text-blue-50">
              Pentaomnia is not just a company; it's a <span className="text-yellow-400 font-semibold">creative powerhouse</span> built by young minds with big ambitions. What
              began as a dynamic student-led initiative at Lovely Professional University has now grown into a
              nationally recognized startup, officially acknowledged by the Government of India under Startup India and
              funded by the Department of Industries, Government of Bihar.
            </p>
          </div>
        </motion.section>

        {/* What We Do Section */}
        <motion.section
          className="mb-28 py-12 px-6 bg-gradient-to-br from-slate-900 to-blue-900/70 rounded-2xl border border-blue-800/30 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.div className="flex items-center mb-10" variants={fadeIn}>
            <div className="bg-blue-500 p-2 rounded-lg mr-3 shadow-md">
              <Diamond className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
          </motion.div>

          <motion.p className="mb-12 text-xl text-blue-100" variants={fadeIn}>
            At Pentaomnia, we specialize in transforming visions into reality:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-7 shadow-xl border border-blue-200 overflow-hidden relative group"
              variants={fadeIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="flex items-center mb-5">
                <div className="bg-blue-600 p-3 rounded-lg mr-3 shadow-md">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">Event Management</h3>
              </div>
              <p className="text-slate-700 mb-6">
                Corporate Events | College Fests | Wedding Planning | Product Launches | Cultural Shows
              </p>
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/brand.png"
                  alt="Event Management"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-7 shadow-xl border border-blue-200 overflow-hidden relative group"
              variants={fadeIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="flex items-center mb-5">
                <div className="bg-blue-600 p-3 rounded-lg mr-3 shadow-md">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">Digital Marketing</h3>
              </div>
              <p className="text-slate-700 mb-6">
                Social Media Handling | Meta Ads | SEO | Content Strategy | Influencer Marketing
              </p>
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/brand.png"
                  alt="Digital Marketing"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-7 shadow-xl border border-blue-200 overflow-hidden relative group"
              variants={fadeIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="flex items-center mb-5">
                <div className="bg-blue-600 p-3 rounded-lg mr-3 shadow-md">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">Web & Tech Solutions</h3>
              </div>
              <p className="text-slate-700 mb-6">Website Development | E-commerce Solutions | UI/UX Design | Mobile Apps</p>
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                <Image src="/images/brand.png" alt="Web Solutions" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-7 shadow-xl border border-blue-200 overflow-hidden relative group"
              variants={fadeIn}
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={cardHover}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="flex items-center mb-5">
                <div className="bg-blue-600 p-3 rounded-lg mr-3 shadow-md">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-900">Creative Services</h3>
              </div>
              <p className="text-slate-700 mb-6">Graphics & Video Editing | Promotional Shoots | Branding | Animation</p>
              <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/brand.png"
                  alt="Creative Services"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          <motion.p className="mt-12 text-xl text-blue-100 text-center max-w-2xl mx-auto italic" variants={fadeIn}>
            Whether it's building a brand or managing a mega event, we ensure every detail speaks excellence.
          </motion.p>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          className="mb-28 py-16 px-8 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl shadow-xl relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          
          <motion.div className="flex items-center mb-12" variants={fadeIn}>
            <div className="bg-yellow-400 p-2 rounded-full mr-3 shadow-md">
              <Award className="h-6 w-6 text-blue-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Achievements</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="space-y-8">
              <motion.div
                className="flex items-start group"
                variants={fadeIn}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 p-3 rounded-full mr-5 shadow-md group-hover:shadow-yellow-400/30 group-hover:shadow-lg transition-shadow">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-300 mb-2">Seed Funding Success</h4>
                  <p className="text-lg text-blue-100">
                    Raised <span className="font-semibold text-white">₹10 Lakh</span> under the Startup Bihar Scheme
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                variants={fadeIn}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 p-3 rounded-full mr-5 shadow-md group-hover:shadow-yellow-400/30 group-hover:shadow-lg transition-shadow">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-300 mb-2">Government Recognition</h4>
                  <p className="text-lg text-blue-100">
                    Recognized under <span className="font-semibold text-white">Startup India</span> and listed as an{" "}
                    <span className="font-semibold text-white">MSME</span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                variants={fadeIn}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 p-3 rounded-full mr-5 shadow-md group-hover:shadow-yellow-400/30 group-hover:shadow-lg transition-shadow">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-300 mb-2">Project Milestones</h4>
                  <p className="text-lg text-blue-100">
                    Successfully executed{" "}
                    <span className="font-semibold text-white">100+ events, campaigns & brand partnerships</span>
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                className="flex items-start group"
                variants={fadeIn}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 p-3 rounded-full mr-5 shadow-md group-hover:shadow-yellow-400/30 group-hover:shadow-lg transition-shadow">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-300 mb-2">Client Success</h4>
                  <p className="text-lg text-blue-100">
                    Boosted client revenue growth by up to <span className="font-semibold text-white">170%</span> through strategic digital
                    solutions
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group"
                variants={fadeIn}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 p-3 rounded-full mr-5 shadow-md group-hover:shadow-yellow-400/30 group-hover:shadow-lg transition-shadow">
                  <Award className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-yellow-300 mb-2">Media Innovation</h4>
                  <p className="text-lg text-blue-100">
                    Launched our exclusive media podcast series –{" "}
                    <span className="font-semibold text-white">Pentaomnia Originals</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="mt-16 relative h-72 w-full rounded-xl overflow-hidden shadow-2xl border border-white/10"
            variants={fadeIn}
          >
            <Image src="/images/brand.png" alt="Team Achievements" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xl text-white font-semibold text-center">Our journey of excellence continues...</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Leadership Section */}
        <motion.section
          className="mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
        >
          <motion.div className="flex items-center mb-12" variants={fadeIn}>
            <div className="bg-blue-500 p-2 rounded-lg mr-3 shadow-md">
              <Diamond className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Leadership</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              className="bg-gradient-to-br from-white/10 to-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 group"
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-72 w-full">
                <Image
                  src="/images/brand.png"
                  alt="Mahammad Shahid"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Mahammad Shahid</h3>
                  <p className="text-blue-300 font-medium">Founder & CEO</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">Founder's Commitment</h3>
                <div className="flex">
                  <MessageSquareQuote className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />
                  <blockquote className="italic text-blue-100">
                    "We're on a mission to redefine how youth-led startups create impact. Pentaomnia isn't just my
                    dream—it's a platform where creativity, commitment, and culture blend together to drive real
                    results."
                  </blockquote>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-white/10 to-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/10 group"
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-72 w-full">
                <Image src="/images/brand.png" alt="Aanchal Kumari" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Aanchal Kumari</h3>
                  <p className="text-blue-300 font-medium">CEO</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">CEO's Vision</h3>
                <div className="flex">
                  <MessageSquareQuote className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />
                  <blockquote className="italic text-blue-100">
                    "As the CEO, I aim to build a company that thrives on innovation and inclusivity—where talent finds
                    space to grow, and every client finds a trusted partner. We are not just delivering services; we're
                    shaping experiences."
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Vision & Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="py-16 px-8 bg-gradient-to-br from-blue-600 to-indigo-800 text-white rounded-2xl shadow-2xl relative overflow-hidden mb-12"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48"></div>
          
          <motion.div className="flex items-center mb-12 relative z-10" variants={fadeIn}>
            <div className="bg-yellow-400 p-2 rounded-full mr-3 shadow-md">
              <Diamond className="h-6 w-6 text-blue-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision & Mission</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20"
              variants={fadeIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="bg-yellow-400 inline-block p-3 rounded-xl shadow-lg mb-6">
                <Diamond className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Vision</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                To become India's most trusted youth-led event and marketing company, known for creativity, commitment,
                and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20"
              variants={fadeIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="bg-yellow-400 inline-block p-3 rounded-xl shadow-lg mb-6">
                <Rocket className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-yellow-300">Mission</h3>
              <ul className="space-y-4 text-white/90 text-lg">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">•</span>
                  <span>To empower brands, businesses, and events with impactful execution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">•</span>
                  <span>To create opportunities for young talent in media, marketing & tech</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-xl">•</span>
                  <span>To deliver value through innovation, design, and data-driven strategies</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 relative h-72 w-full rounded-xl overflow-hidden shadow-2xl border border-white/10"
            variants={fadeIn}
          >
            <Image src="/images/brand.png" alt="Team Vision" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="text-2xl font-semibold text-white mb-2">Join Our Journey</p>
              <p className="text-blue-200">Together, let's create experiences that matter</p>
            </div>
          </motion.div>
        </motion.section>
        
        {/* CTA Section - New */}
        <motion.section
          className="py-12 px-8 bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl border border-white/10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Vision into Reality?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create experiences that leave a lasting impression.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:shadow-yellow-400/30 hover:shadow-xl">
              Get in Touch
            </button>
            <button className="bg-transparent border-2 border-white/70 hover:border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:bg-white/10">
              View Our Portfolio
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}