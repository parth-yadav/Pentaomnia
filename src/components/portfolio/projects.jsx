"use client"

import { useState } from "react"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import projects from "@/constants/projects"


const ImageViewerModal = ({ images, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  
  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute top-4 right-4">
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="aspect-video bg-slate-800 flex items-center justify-center rounded-lg"
          >
           <Image
  src="/2.jpg"
  alt={images[index]}
  width={1000}
  height={600}
  className="w-full h-full object-contain"
/>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-between mt-4">
          <button 
            onClick={prevImage}
            className="p-3 rounded-full border  bg-white text-black hover:bg-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextImage}
            className="p-3 rounded-full border  bg-white text-black hover:bg-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectItem = ({ project, index }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleImageClick = (idx) => {
    setSelectedImageIndex(idx);
    setModalOpen(true);
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        delay: index * 0.1 % 0.2
      } 
    }
  };

  return (
    <>
      <motion.div 
        className="group relative  backdrop-blur-sm hover:bg-slate-800/60  hover:border-purple-500/30 rounded-xl overflow-hidden transition-all duration-300"
        variants={itemVariant}
      >
        {/* Flexbox Layout: Text Left | Image Right */}
        <div className="flex flex-col md:flex-row p-3">
          {/* Text Content */}
          <div className="md:w-1/2 p-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs text-slate-500">{project.duration}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all">
              {project.title}
            </h3>
            <div className="relative mb-3">
              <p className={`text-slate-400 text-sm ${isExpanded ? "" : "line-clamp-2"}`}>
                {project.description}
              </p>
              {project.description.length > 100 && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-purple-400 text-xs mt-1 hover:text-purple-300 font-medium"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 text-xs rounded-md bg-slate-700 text-slate-300 text-[10px]"
                >
                  {tech}
                </span>
              ))}
            
            </div>
            
          </div>

          {/* Image Stack Row */}
          <div className="md:w-1/2 p-2 flex items-center justify-center">
            <ImageStackRow 
              images={project.images} 
              onImageClick={handleImageClick}
            />
          </div>
        </div>
      </motion.div>

      {/* Image viewer modal */}
      <AnimatePresence>
        {modalOpen && (
          <ImageViewerModal 
            images={project.images} 
            currentIndex={selectedImageIndex} 
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// Add this above ProjectItem
const ImageStackRow = ({ images, onImageClick }) => {
  return (
    <div className="relative flex h-40 mx-4 overflow-visible">
      {images.map((img, index) => {
        // Rotate angle based on index
        const rotate = (index - (images.length - 1) / 2) * 5
        return (
          <motion.div
            key={index}
            initial={{
              zIndex: images.length - index,
              rotate: rotate,
              x: index * 20,
            }}
            whileHover={{
              scale: 1.1,
              zIndex: 10,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
              rotate: 0,
              x: 0,
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
            className="absolute w-40 h-40 rounded-lg overflow-hidden cursor-pointer bg-slate-700 shadow-md flex-shrink-0 origin-center"
            onClick={() => onImageClick(index)}
            style={{
              left: `${index * 20}px`,
              top: `${Math.abs(rotate) * 2}px`, // slight vertical offset based on rotation
            }}
          >
            <Image
              src="/2.jpg"
              alt={img}
              fill
              className="object-cover"
            />
          </motion.div>
        )
      })}
    </div>
  )
}
export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.2, 0]);
  
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    }
  };
  
  

  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-slate-900/0 z-0"
      ></motion.div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-pink-600/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-4"
          >
            Our Work
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
           
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Portfolio
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Explore our showcase of successful projects that demonstrate our creative approach
            and technical expertise. Each project features multiple views to give you a comprehensive look.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1  gap-6"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectItem key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 inline-flex items-center font-medium"
            >
              Start Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4 ml-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}