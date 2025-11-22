"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"

interface ParallaxSectionProps {
  imageSrc: string
  imageAlt: string
  speed?: number
  children?: React.ReactNode
  className?: string
}

export function ParallaxSection({ imageSrc, imageAlt, speed = 0.5, children, className = "" }: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0)
  const [offsetTop, setOffsetTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = (scrollY - offsetTop) * speed

  return (
    <div ref={(el) => el && setOffsetTop(el.offsetTop)} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${parallaxOffset}px)` }}>
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  )
}
