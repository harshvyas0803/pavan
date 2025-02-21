"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function EventPath() {
  const ref = useRef<SVGSVGElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const circleScales0 = useTransform(
    scrollYProgress,
    [Math.max(0, (0 - 1) / 4), 0 / 4, Math.min(1, (0 + 1) / 4)],
    [0.5, 1, 0.5],
  )
  const circleScales1 = useTransform(
    scrollYProgress,
    [Math.max(0, (1 - 1) / 4), 1 / 4, Math.min(1, (1 + 1) / 4)],
    [0.5, 1, 0.5],
  )
  const circleScales2 = useTransform(
    scrollYProgress,
    [Math.max(0, (2 - 1) / 4), 2 / 4, Math.min(1, (2 + 1) / 4)],
    [0.5, 1, 0.5],
  )
  const circleScales3 = useTransform(
    scrollYProgress,
    [Math.max(0, (3 - 1) / 4), 3 / 4, Math.min(1, (3 + 1) / 4)],
    [0.5, 1, 0.5],
  )

  const circleScales = [circleScales0, circleScales1, circleScales2, circleScales3]

  return (
    <svg
      ref={ref}
      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full"
      viewBox="0 0 100 1000"
      preserveAspectRatio="xMidYMax meet"
    >
      <motion.path
        d="M50,0 Q60,250 20,375 T50,625 T80,875 T50,1000"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="4"
        style={{
          pathLength,
          opacity,
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {[125, 375, 625, 875].map((y, index) => (
        <motion.circle
          key={index}
          cx="50"
          cy={y}
          r="8"
          fill="url(#gradient)"
          style={{
            opacity,
            scale: circleScales[index],
          }}
        />
      ))}
    </svg>
  )
}

