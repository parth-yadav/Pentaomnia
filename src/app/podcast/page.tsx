"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Headphones, Music, Radio, Youtube } from "lucide-react";

// Define podcast/video data
interface Podcast {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  date: string;
  category: string;
}

const podcastData: Podcast[] = [
  {
    id: "1",
    title: "Event Planning Essentials",
    description: "Tips and tricks for planning successful corporate events in 2025",
    youtubeId: "VIDEO_ID_1",
    date: "2025-04-15",
    category: "Event Planning"
  },
  {
    id: "2",
    title: "Digital Marketing Strategies",
    description: "Latest trends in digital marketing for event promotion",
    youtubeId: "VIDEO_ID_2",
    date: "2025-04-01",
    category: "Digital Marketing"
  },
  {
    id: "3",
    title: "Tech Solutions for Events",
    description: "How to leverage technology for seamless event execution",
    youtubeId: "VIDEO_ID_3",
    date: "2025-03-20",
    category: "Technology"
  },
  {
    id: "4",
    title: "Client Relationship Management",
    description: "Building lasting relationships with clients in the events industry",
    youtubeId: "VIDEO_ID_4",
    date: "2025-03-10",
    category: "Client Management"
  }
];

export default function PodcastPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>(podcastData);
  const [activePodcast, setActivePodcast] = useState<Podcast | null>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  // Filter podcasts based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPodcasts(podcastData);
    } else {
      setFilteredPodcasts(
        podcastData.filter(podcast => podcast.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(podcastData.map(podcast => podcast.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section with Animated Background */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative h-96 overflow-hidden flex items-center justify-center"
      >
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500 rounded-full opacity-20"
          animate={{ 
            x: [0, 10, 0], 
            y: [0, 15, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-20 w-96 h-96 bg-blue-500 rounded-full opacity-20"
          animate={{ 
            x: [0, -15, 0], 
            y: [0, 10, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
        <div className="z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Podcasts & Videos
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert insights on event management and digital solutions
          </motion.p>
        </div>
        
        {/* Animated Icons */}
        <motion.div 
          className="absolute bottom-10 left-10"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: "easeInOut" 
          }}
        >
          <Headphones size={48} className="text-purple-400 opacity-60" />
        </motion.div>
        
        <motion.div 
          className="absolute top-20 right-16"
          animate={{ 
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut" 
          }}
        >
          <Youtube size={42} className="text-red-400 opacity-60" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-24 right-32"
          animate={{ 
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 7,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Music size={38} className="text-blue-400 opacity-60" />
        </motion.div>
      </motion.div>

      {/* Category Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Podcast List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPodcasts.map((podcast, index) => (
            <motion.div
              key={podcast.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <div className="relative h-0 pb-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${podcast.youtubeId}`}
                  title={podcast.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-medium bg-purple-600 text-white px-3 py-1 rounded-full">
                    {podcast.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {podcast.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{podcast.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{podcast.description}</p>
                <motion.button
                  onClick={() => setActivePodcast(podcast)}
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={16} /> Watch Full Video
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        <motion.div 
          className="absolute left-0 top-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-xl"
          animate={{ 
            x: [0, 50, 0], 
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute right-10 bottom-20 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-20 blur-xl"
          animate={{ 
            y: [0, -30, 0], 
            scale: [1, 1.3, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Newsletter Section */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <motion.div 
            className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "easeInOut" 
            }}
          />
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">Subscribe to get notified about our latest episodes and events.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-purple-500 focus:outline-none flex-grow"
              />
              <motion.button 
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Event Management & Digital Solutions</h3>
              <p className="text-sm">Transforming ideas into remarkable experiences</p>
            </div>
            <div className="flex gap-6">
              <motion.a href="#" whileHover={{ scale: 1.2, color: "#fff" }}>
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2, color: "#fff" }}>
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2, color: "#fff" }}>
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </motion.a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Event Management & Digital Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}