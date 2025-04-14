"use client";
import Head from 'next/head';
import { motion } from 'framer-motion';
import WorkshopRegistrationForm from './WorkShop';

export default function Home() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: { 
        yoyo: Infinity,
        duration: 0.5 
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  const bounceVariants = {
    animate: {
      y: [0, -5, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <div className="font-sans text-white bg-black">
      {/* Meta Tags */}
      <Head>
        <title>InnovateX 2.0 - Free Masterclass</title>
        <meta name="description" content="Join InnovateX 2.0, a free 2-day workshop on D2C, Data Analytics, and Generative AI at Lovely Professional University." />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          .gradient-bg {
            background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
          }
        `}</style>
      </Head>

      {/* Header Section */}
     <motion.header 
  className="text-white py-4 sticky top-0 z-10 shadow-md bg-cover bg-center"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: "spring", stiffness: 100 }}
>
  <div className="bg-blue-600 w-full h-full absolute top-0 left-0 z-0"></div>
  <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
    <h1 className="text-2xl font-bold">InnovateX 2.0</h1>
    <motion.a 
      href="#register" 
      className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Register for Free
    </motion.a>
  </div>
</motion.header>


      {/* Hero Section */}
<section
  className="text-white p-10 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhcnR1cHxlbnwwfHwwfHx8MA%3D%3D')",
  }}
>
  <div className=" px-4 text-center  bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10">
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-4"
      variants={floatingVariants}
      animate="animate"
    >
      🚀 InnovateX 2.0
    </motion.h2>

    <motion.p
      className="text-xl md:text-2xl mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      FREE Masterclass on D2C, Data Analytics & Gen AI
    </motion.p>

    <motion.p
      className="text-lg mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      18th – 19th April 2025 | Lovely Professional University
    </motion.p>

    <motion.a
      href="#register"
      className="bg-yellow-400 text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 inline-block"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      Register for free
    </motion.a>
  </div>
</section>


      {/* About Section */}
     <section className="py-20 bg-gradient-to-b from-black to-blue-900">
  <div className="container mx-auto px-6 text-center max-w-4xl">
    <motion.h3 
      className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      🔍 About the Workshop
    </motion.h3>

    <motion.p 
      className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      InnovateX 2.0 is back—bigger, bolder, and this time, absolutely <span className="text-white font-semibold">FREE</span> for all participants. This exclusive 2-Day Workshop is your gateway to mastering the most in-demand skills in the tech and startup space: Direct-to-Consumer (D2C) Models, Data Analytics, and Generative AI.
    </motion.p>

    <motion.p 
      className="text-lg md:text-xl text-gray-300 leading-relaxed"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      Delivered through live, hands-on training sessions, you'll gain real-world knowledge under the mentorship of some of the best minds in the industry.
    </motion.p>
  </div>
</section>


      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
  <div className="container mx-auto px-6 text-center max-w-4xl">
    <motion.h3 
            className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            🎓 What You Will Learn
          </motion.h3>
          <motion.div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
>
            {/* D2C Mastery Card */}
            
  <motion.div 
    className="bg-gray-600/50 p-6 rounded-lg shadow-md text-center"
    variants={cardVariants}
    whileHover="hover"
            >
              <img 
      src="/images/innov20/brandmonkey.jpg" 
      alt="Tisha Singh"
                className="w-48 h-48 mx-auto rounded-full  mb-4 border-2 border-blue-300 shadow-md shadow-white"
    />
   
    <h4 className="text-xl font-bold text-blue-300 mb-2">Day 1: D2C Mastery</h4>
    <p className="text-gray-200">Learn how to build, launch, and grow a D2C brand with Sourav Srivastava, Founder & CEO – Brandmonkey.</p>
  </motion.div>

  {/* Data Analytics Card */}
  <motion.div 
    className="bg-gray-600/50 p-6 rounded-lg shadow-md text-center"
    variants={cardVariants}
    whileHover="hover"
            >
               <img 
      src="/images/innov20/ethicallearn.jpg" 
      alt="Sourav Srivastava"
      className="w-48 h-48 mx-auto rounded-full  mb-4 border-2 border-blue-300"
    />
    
    <h4 className="text-xl font-bold text-blue-300 mb-2">Day 2: Data Analytics</h4>
    <p className="text-gray-200">Discover how data drives smart decisions with Tajwar Khan, CEO & Founder – Ethical Learner.</p>
  </motion.div>

  {/* Generative AI Card */}
  <motion.div 
    className="bg-gray-600/50 p-6 rounded-lg shadow-md text-center"
    variants={cardVariants}
    whileHover="hover"
            >
              <img 
      src="/images/innov20/tisha.jpg" 
      alt="Tajwar Khan"
      className="w-48 h-48 mx-auto rounded-full  mb-4 border-2 border-blue-300"
    />
    
    <h4 className="text-xl font-bold text-blue-300 mb-2">Day 2: Generative AI</h4>
    <p className="text-gray-200">Uncover the power of AI in business and productivity with Tisha Singh, Technical Lead.</p>
  </motion.div>
</motion.div>

        </div>
      </section>

      {/* Why Attend Section */}
        <section className="py-20 bg-gradient-to-b from-black to-blue-900">
  <div className="container mx-auto px-6 text-center max-w-4xl">
     <motion.h3 
           className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            🎯 Why You Can't Miss This
          </motion.h3>
          
        <motion.ul 
  className="flex flex-col md:flex-row justify-center gap-8 text-gray-200 items-center"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
>
  <motion.li 
    className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
    variants={fadeIn}
  >
    <motion.span 
      className="text-blue-600 text-2xl"
      variants={bounceVariants}
      animate="animate"
    >
      💡
    </motion.span>
    Expert-led Live Sessions
  </motion.li>

  <motion.li 
    className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
    variants={fadeIn}
  >
    <motion.span 
      className="text-blue-600 text-2xl"
      variants={bounceVariants}
      animate="animate"
    >
      🛠
    </motion.span>
    Real-World Applications
  </motion.li>

  <motion.li 
    className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
    variants={fadeIn}
  >
    <motion.span 
      className="text-blue-600 text-2xl"
      variants={bounceVariants}
      animate="animate"
    >
      📃
    </motion.span>
    Certificate of Participation
  </motion.li>

  <motion.li 
    className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
    variants={fadeIn}
  >
    <motion.span 
      className="text-blue-600 text-2xl"
      variants={bounceVariants}
      animate="animate"
    >
      🤝
    </motion.span>
    Network with Industry Mentors
  </motion.li>
</motion.ul>

        </div>
      </section>

      {/* Event Details Section */}
            <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
  <div className="container mx-auto px-6 text-center max-w-4xl">
     <motion.h3 
             className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            📅 Event Details
          </motion.h3>
          
          <motion.div 
            className="space-y-4 text-gray-200"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.p variants={fadeIn}>📍 Venue: Lovely Professional University</motion.p>
            <motion.p variants={fadeIn}>📆 Dates: 18th & 19th April 2025</motion.p>
            <motion.p variants={fadeIn}>⏰ Timings: 10:00 AM – 5:00 PM (Both Days)</motion.p>
            <motion.p variants={fadeIn}>💸 Fees: Zero. Nada. Nothing. 100% Free.</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h3 
            className="text-3xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            Limited Seats Available!
          </motion.h3>
          
          <motion.p 
            className="text-lg mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            Don't miss out on this free learning experience. Secure your spot now!
          </motion.p>
          
          <motion.a 
            href="#register" 
            className="bg-yellow-400 text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 inline-block"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Register for Free
          </motion.a>
        </div>
      </section>

    {/* Registration Form Section */}
<div id="register" className="flex justify-center">
  <WorkshopRegistrationForm />
</div>



      {/* Footer Section */}
      
    </div>
  );
}