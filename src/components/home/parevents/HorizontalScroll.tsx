"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useDrag } from "@use-gesture/react"

interface Project {
  title: string
  description: string
  src: string
  url: string
  color: string
}

const projects: Project[] = [
  {
    title: "Alephium Workshop",
    description:
      "On 31st August 2024, Pentaomnia introduced a cutting-edge Web3 Technology workshop and training session conducted by Alephium officials at LPU. The workshop provided students with hands-on experience in blockchain technology, equipping them with skills that are highly relevant in the evolving tech industry. The event marked a significant step towards bridging the gap between academic learning and industry demands.",
    src: "alpheum.jpg",
    url: "/promos",
    color: "#FFE699",
  },
  {
    title: "Arm Wrestling Championship 3.0",
    description:
      "Held on 16th and 17th September 2024, the Arm Wrestling Championship 3.0 brought together over 300 participants from across India to compete in this national-level event at LPU. The fierce competition showcased remarkable strength, determination, and sportsmanship, culminating in the crowning of the 'Champion of Champions.' The event drew a large audience and elevated the profile of arm wrestling as a competitive sport.",
    src: "armwrestle.jpg",
    url: "/promos",
    color: "#FFDB70",
  },
  {
    title: "Arcana 2.0",
    description:
      "From *12th to 14th November 2024, Pentaomnia Private Limited orchestrated *Arcana 2.0, a *National Level Quiz Competition* that brought together talented students from across the country. Competing fiercely to showcase their intellect and skills, participants vied for coveted certificates and exciting goodies. The event fostered healthy competition, celebrated knowledge, and left an indelible mark of excellence.",
    src: "arcana20.jpg",
    url: "/promos",
    color: "#FFD147",
  },
  {
    title: "InnovateX",
    description:
      "InnovateX, a 24-hour hackathon held on 30th and 31st March 2024, challenged participants to innovate and develop impactful projects. The event concluded with the selection of three exceptional participants who earned placement offers with ZillionsofTech. InnovateX highlighted the creative and problem-solving capabilities of the students while offering them a pathway to professional success.",
    src: "innovateex.jpg",
    url: "/promos",
    color: "#FFCC33",
  },
  {
    title: "Kuchh Khatta Ho Jaye",
    description:
      "Pentaomnia conducted a movie promotion event for Guru Randhawa's movie 'Kuchh Khatta Ho Jaye' at LPU. The event brought together students and film enthusiasts, offering them an exclusive glimpse into the movie and its making.",
    src: "kuchkhattahojaye.jpg",
    url: "/promos",
    color: "#FFC20A",
  },
  {
    title: "Muscle Mania: Punjab's Fitness Fiesta",
    description:
      "In *March 2024, Pentaomnia Private Limited championed the cause of health and fitness by hosting *Muscle Mania, an adrenaline-pumping event that attracted fitness enthusiasts from across Punjab. Over the course of a thrilling week, participants engaged in *15+ competitions* designed to test their strength, endurance, and athleticism. With lakhs worth of goodies distributed, this event truly celebrated the spirit of fitness and determination.",
    src: "musclemania.jpg",
    url: "/promos",
    color: "#F5B800",
  },
]

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length
  }

  const bind = useDrag(
    ({ down, movement: [mx], direction: [xDir], velocity, cancel }) => {
      setIsDragging(down)
      if (down) {
        if (Math.abs(mx) > 50) {
          if (xDir > 0) {
            prevProject()
          } else {
            nextProject()
          }
          cancel()
        }
      } else {
        if (velocity[0] > 0.2) {
          if (xDir > 0) {
            prevProject()
          } else {
            nextProject()
          }
        }
      }
    },
    { axis: "x", threshold: 10 },
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevProject()
      } else if (e.key === "ArrowRight") {
        nextProject()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const getBackgroundClass = (offset: number) => {
    if (offset === 0) return 'bg-gray-800'; // Focused card - lightest
    if (Math.abs(offset) === 1) return 'bg-gray-600'; // Adjacent cards - medium
    return 'bg-gray-500'; // Outer cards - darkest
  }

  return (
    <section
      id="events"
      className="relative w-full bg-gradient-to-r from-black to-primary py-12 text-gray-800 dark:bg-slate-900 dark:text-white md:py-24 lg:py-32"
    >
      <h2 className="text-5xl font-bold mb-8 text-white text-center">Recent Events</h2>
      <div
        ref={containerRef}
        className="flex justify-center items-center h-[600px] cursor-grab active:cursor-grabbing px-4"
        {...bind()}
      >
        {[-2, -1, 0, 1, 2].map((offset) => {
          const projectIndex = getProjectIndex(offset)
          const project = projects[projectIndex]
          if (!project) return null

          return (
            <div
              key={projectIndex}
              className={`absolute transition-all duration-300 ease-in-out ${
                offset === 0
                  ? "w-80 md:w-96 z-30 opacity-100"
                  : Math.abs(offset) === 1
                    ? "w-64 md:w-80 z-20 opacity-70"
                    : "w-48 md:w-64 z-10 opacity-40"
              }`}
              style={{
                transform: `translateX(${offset * 110}%) scale(${1 - Math.abs(offset) * 0.15})`,
                pointerEvents: offset === 0 ? "auto" : "none",
              }}
            >
              <div className="rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={`/images/eventimages/${project.src}`}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={`p-6 bg-black ${getBackgroundClass(offset)}`}>
                  <h3 className="font-bold text-gray-200 text-xl mb-2 truncate">{project.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{project.description}</p>
                  {offset === 0 && !isDragging && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-yellow-300 hover:text-blue-800"
                      onClick={(e) => isDragging && e.preventDefault()}
                    >
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Button
        onClick={prevProject}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-40"
        aria-label="Previous project"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <Button
        onClick={nextProject}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-40"
        aria-label="Next project"
      >
        <ArrowRight className="h-6 w-6" />
      </Button>
    </section>
  )
}