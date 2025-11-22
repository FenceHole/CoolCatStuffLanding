"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-between overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src="/images/frances-fence.jpg"
          alt="Frances peeking through the fence - where it all began"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      <div className="container relative z-10 px-4 lg:px-8 text-center">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white"
          style={{
            textShadow: "3px 3px 0 #000, -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 0 0 20px rgba(0,0,0,0.5)",
          }}
        >
          Frances and Family
        </h1>
      </div>

      <div className="container relative z-10 px-4 lg:px-8 text-center pb-12">
        <p
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 italic max-w-4xl mx-auto"
          style={{
            textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 0 15px rgba(0,0,0,0.5)",
          }}
        >
          "Sometimes being a little broken is how the love finds its way in"
        </p>
        <a href="#intro" className="inline-block animate-bounce">
          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
