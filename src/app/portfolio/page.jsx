// app/page.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Navbar Component
// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-6'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
//             >
//               Pentaomnia
//             </motion.div>
//           </div>
//           <div className="hidden md:flex items-center space-x-8">
//             {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className="text-slate-300 hover:text-white transition-colors duration-300"
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </div>
//           <div className="md:hidden">
//             <button className="text-slate-300 hover:text-white">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-slate-900/40 z-0"></div>
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 z-[-1]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="px-4 py-1 rounded-full bg-indigo-900/30 text-indigo-300 text-sm font-medium">
              Events & Digital Solutions
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="text-white">Bringing Your </span>
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Vision to Life
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl max-w-3xl mb-10"
          >
            We craft unforgettable events and build cutting-edge digital experiences that elevate your brand and engage your audience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#services" className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity">
              Discover Our Services
            </a>
            <a href="#projects" className="px-8 py-3 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-colors">
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#services" className="flex flex-col items-center text-slate-400 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, index }) => {
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
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
      title: "Corporate Events",
      description: "From conferences to team-building activities, we organize professional events that align with your business goals.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-18 0h18" />
        </svg>
      ),
      title: "Social Gatherings",
      description: "Create memorable moments with thoughtfully designed celebrations for all your important milestones.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
      title: "Product Launches",
      description: "Make a splash with strategic event planning that puts your new product in the spotlight.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
      title: "Website Development",
      description: "Custom-built, responsive websites that showcase your brand and drive conversions.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "Mobile Apps",
      description: "Intuitive and engaging mobile applications that help you connect with your audience on the go.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Strategic campaigns that increase your online visibility and drive meaningful engagement.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            We offer a comprehensive range of event management and digital services to help your brand stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ProjectCard Component with Animation
const ProjectCard = ({ image, category, title, description, index }) => {
  const cardRef = useRef(null);
  
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
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gradient group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-xl pointer-events-none transition-all duration-300"></div>
    </motion.div>
  );
};

// Projects Section with Parallax
const Projects = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const projects = [
    {
      image: "Project Image 1",
      category: "Corporate Event",
      title: "Tech Summit 2024",
      description: "A three-day conference featuring keynote speakers, workshops, and networking opportunities for tech professionals.",
    },
    {
      image: "Project Image 2",
      category: "Website Development",
      title: "Fashion E-commerce",
      description: "A modern, responsive e-commerce platform with seamless shopping experience and secure payment processing.",
    },
    {
      image: "Project Image 3",
      category: "Product Launch",
      title: "EcoFriendly Products",
      description: "Coordinated a high-profile launch event that generated significant media coverage and customer interest.",
    },
    {
      image: "Project Image 4",
      category: "Mobile App",
      title: "Fitness Tracker",
      description: "An intuitive mobile application that helps users track their fitness goals and maintain healthy habits.",
    },
    {
      image: "Project Image 5",
      category: "Social Gathering",
      title: "Charity Gala",
      description: "An elegant evening event that raised funds for environmental conservation efforts.",
    },
    {
      image: "Project Image 6",
      category: "Digital Marketing",
      title: "Restaurant Rebrand",
      description: "A comprehensive digital marketing campaign that increased online visibility and customer engagement.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50 relative overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-slate-900/20 z-0"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Explore our portfolio of successful events and digital projects that have helped our clients achieve their goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/projects" className="px-8 py-3 rounded-lg border border-slate-700 text-white hover:bg-slate-800 transition-colors inline-flex items-center">
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stats Counter with Animation
const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const statsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  const stats = [
    { number: 120, label: "Events Managed" },
    { number: 85, label: "Digital Projects" },
    { number: 50, label: "Happy Clients" },
    { number: 10, label: "Team Members" },
  ];
  
  const Counter = ({ number, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isInView) return;
      
      let start = 0;
      const end = number;
      const incrementTime = (duration / end) * 1000;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => {
        clearInterval(timer);
      };
    }, [number, duration, isInView]);
    
    return <span>{count}</span>;
  };
  
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
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden">
                <div className="h-full w-full flex items-center justify-center text-slate-500">
                  <span>Team Image</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Our Company</span>
            </h2>
            
            <p className="text-slate-400 mb-6">
              At Pentaomnia, we blend creativity with strategic thinking to deliver exceptional events and digital solutions. Our passionate team of experts is dedicated to helping brands connect with their audiences in meaningful ways.
            </p>
            
            <p className="text-slate-400 mb-8">
              With over a decade of industry experience, we've helped businesses of all sizes transform their ideas into reality. Our holistic approach ensures that every project we undertake aligns with our clients' goals and exceeds their expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white">Creative Excellence</span>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white">Innovative Solutions</span>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white">Strategic Approach</span>
              </div>
              
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-indigo-900/30 text-indigo-300 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12
.75l6 6 9-13.5" />
<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-white">Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Component
const TestimonialCard = ({ quote, name, position, company, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
    >
      <div className="mb-4 text-indigo-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 opacity-50" viewBox="0 0 16 16">
          <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
        </svg>
      </div>
      
      <p className="text-slate-300 mb-6 italic">{quote}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-300 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <div>
          <div className="font-medium text-white">{name}</div>
          <div className="text-sm text-slate-400">{position}, {company}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Pentaomnia team exceeded our expectations at every turn. Their attention to detail and creative approach made our corporate event a tremendous success.",
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp",
    },
    {
      quote: "Our new website has significantly increased our online conversions. Their team understood our needs perfectly and delivered a solution that truly works for our business.",
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions",
    },
    {
      quote: "Working with Pentaomnia on our product launch was seamless. Their strategic thinking and flawless execution helped us make a real impact in the market.",
      name: "Jessica Taylor",
      position: "Product Manager",
      company: "EcoLife",
    },
  ];

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
            Client <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Testimonials</span>
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
  );
};

// Contact Form Component
const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Connect</span>
            </h2>
            
            <p className="text-slate-400 mb-8">
              Ready to elevate your events and digital presence? Reach out to us today to discuss how we can help you achieve your goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-indigo-900/30 text-indigo-300 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location</h3>
                  <p className="text-slate-400">123 Business Ave, Suite 200<br />San Francisco, CA 94107</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-indigo-900/30 text-indigo-300 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <p className="text-slate-400">info@Pentaomnia.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-indigo-900/30 text-indigo-300 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-slate-400">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-white font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                    <a 
                      key={social} 
                      href={`#${social}`}
                      className="p-3 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-900/30 hover:text-indigo-300 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us more about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Call-to-Action Section
const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-12 border border-slate-700">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 lg:mb-0 lg:mr-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Create Something <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Amazing?</span>
              </h2>
              <p className="text-slate-300 max-w-2xl">
                Let's collaborate to bring your vision to life. Our team is ready to help you create unforgettable experiences and impactful digital solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity inline-block shadow-lg shadow-purple-500/20"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Pentaomnia
            </div>
            <p className="text-slate-400 mb-6 max-w-xs">
              Creating extraordinary events and digital experiences that help brands connect with their audiences.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-900/30 hover:text-indigo-300 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Projects', 'Team', 'Careers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {['Corporate Events', 'Digital Marketing', 'Website Development', 'Mobile Apps', 'Product Launches', 'Social Media'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-indigo-400 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                123 Business Ave, Suite 200<br />San Francisco, CA 94107
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-indigo-400 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-indigo-400 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@Pentaomnia.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pentaomnia. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
     
      <Hero />
      <Services />
      <Projects />
      <Stats />
      <About />
      <Testimonials />
      <CallToAction />
      <ContactForm />
      {/* <Footer /> */}
      
      {/* Global style for gradient text */}
      <style jsx global>{`
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          background-image: linear-gradient(to right, #a78bfa, #ec4899);
        }
      `}</style>
    </main>
  );
}