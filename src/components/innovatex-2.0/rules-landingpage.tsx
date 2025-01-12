import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RulesCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="container relative z-10 mx-auto px-4 py-24 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-600 opacity-75 blur-xl "></div>
            <h2 className="relative bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
              Check the Rules First
            </h2>
          </div>
          <p className="mt-10 max-w-[600px] text-yellow-600 md:text-lg">
            Before you register, make sure to review our hackathon guidelines. We want everyone to have a fair and exciting experience!
          </p>
          <Link href="innovatex/rules" className="mt-8">
            <Button
              className="relative h-12 overflow-hidden rounded-full bg-yellow-400 px-8 text-black transition-colors hover:bg-white/90"
            >
              <span className="relative z-10">View Rules</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-800 to-yellow-600 opacity-0 transition-opacity duration-300 hover:opacity-10"></div>
            </Button>
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-purple-500/30 opacity-20 blur-3xl"></div>
      </div>
    </section>
  )
}

