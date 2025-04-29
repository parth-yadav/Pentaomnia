"use client"

import Hero from "@/components/portfolio/hero"
import Services from "@/components/portfolio/services"
import Projects from "@/components/portfolio/projects"
import Stats from "@/components/portfolio/stat"
import About from "@/components/portfolio/about"
import Testimonials from "@/components/portfolio/testimonials"
import CallToAction from "@/components/portfolio/call-to-action"
//import ContactForm from "@/components/portfolio/contact-form"
// import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      {/* <Services /> */}
      <Projects />
      <Stats />
      <About />
      <Testimonials />
      <CallToAction />
      
      {/* <ContactForm /> */}
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
    </div>
  )
}
