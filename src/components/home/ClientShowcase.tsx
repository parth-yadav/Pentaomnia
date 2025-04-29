"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

// Sample client data - replace with your actual client data
const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    description:
      "Helped Acme increase their online sales by 150% through strategic digital transformation and innovative UI design.",
    image: "/images/logos/castrol.png",
    storyLink: "/clients/acme",
  },
  {
    id: 2,
    name: "TechVision",
    description:
      "Redesigned TechVision's entire platform, resulting in a 35% improvement in user engagement and retention rates.",
    image: "/images/logos/cocacola.png",
    storyLink: "/clients/techvision",
  },
  {
    id: 3,
    name: "EcoFriendly",
    description:
      "Created a sustainability-focused e-commerce platform that helped EcoFriendly reach 200,000 new customers.",
    image: "/images/logos/dominos-logo-vector.png",
    storyLink: "/clients/ecofriendly",
  },
  {
    id: 4,
    name: "FinanceHub",
    description:
      "Developed an intuitive financial dashboard that simplified complex data visualization for FinanceHub's clients.",
    image: "/images/logos/cocacola.png",
    storyLink: "/clients/financehub",
  },
]

export default function ClientShowcase() {
  const [activeClient, setActiveClient] = useState<number | null>(null)
  const observerRefs = useRef<(HTMLDivElement | null)[]>([])

  // Set up observer refs with useCallback for better performance
  const setObserverRef = useCallback((el: HTMLDivElement | null, index: number) => {
    observerRefs.current[index] = el
  }, [])

  // Handle navigation to a specific client
  const navigateToClient = (index: number) => {
    if (observerRefs.current[index]) {
      observerRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }

  // Set up Intersection Observer to detect which client is most visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Element is considered visible when 60% visible
    }

    const callback: IntersectionObserverCallback = (entries) => {
      let currentActiveIndex: number | null = null

      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute("data-index"))

        if (entry.isIntersecting) {
          // Only mark one active client at a time — the one with highest intersection ratio
          if (
            currentActiveIndex === null ||
            entry.intersectionRatio > (observerRefs.current[currentActiveIndex]?.getBoundingClientRect().top || 0)
          ) {
            currentActiveIndex = index
          }
        }
      })

      if (currentActiveIndex !== null && currentActiveIndex !== activeClient) {
        setActiveClient(currentActiveIndex)
      }
    }

    const observer = new IntersectionObserver(callback, options)

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [activeClient])

  return (
    <div className="relative bg-gray-900 text-white">
      {clients.map((client, index) => (
        <div
          key={client.id}
          ref={(el) => setObserverRef(el as HTMLDivElement, index)}
          data-index={index}
          className="sticky top-0 h-screen flex items-center overflow-hidden"
        >
          {/* Background image with optimized loading */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative w-full h-full">
              <Image
                src={client.image || "/placeholder.svg"}
                alt={`${client.name} background`}
                fill
                priority={index === 0}
                className={`object-cover transition-all duration-1000 ${
                  activeClient === index ? "scale-105 opacity-100" : "scale-100 opacity-50"
                }`}
                sizes="100vw"
              />
            </div>
          </div>

          {/* Client content */}
          <div
            className={`relative container mx-auto px-6 md:px-12 z-20 transition-all duration-700 ${
              activeClient === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{client.name}</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200">{client.description}</p>
              <Link
                href={client.storyLink}
                className="group inline-flex items-center gap-2 bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Read their story
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation indicators */}
      {/* <div className="fixed bottom-12 left-0 right-0 z-30">
        <div className="flex justify-center space-x-3">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => navigateToClient(i)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 ${
                i === activeClient ? "bg-white scale-125" : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`View client ${i + 1}`}
              aria-current={i === activeClient ? "true" : "false"}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}