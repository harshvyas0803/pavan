
"use client";

import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <div className="flex justify-center items-center">
      <svg
        width="600"
        height="220"
        viewBox="0 0 600 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF8A00" />
            <stop offset="100%" stopColor="#E52E71" />
          </linearGradient>
        </defs>

        {/* "VIGNAN'S" - left aligned but moved to the right */}
        <motion.text
          x="150"
          y="60"
          textAnchor="start"
          fill="url(#gradient)"
          fontFamily="'Dancing Script', cursive"
          fontSize="36"
          fontWeight="bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          VIGNAN'S
        </motion.text>

        {/* Adding gap by moving "VANSH" slightly lower */}
        {/* "VANSH" - right aligned, larger and very bold */}
        <motion.text
          x="550"
          y="120" /* Increased y value to add more gap */
          textAnchor="end"
          fill="url(#gradient)"
          fontFamily="'Dancing Script', cursive"
          fontSize="72"
          fontWeight="900"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          VANSH
        </motion.text>

        {/* "2K25" - right aligned */}
        <motion.text
          x="550"
          y="175" /* Slightly increased y value for better spacing */
          textAnchor="end"
          fill="url(#gradient)"
          fontFamily="'Dancing Script', cursive"
          fontSize="48"
          fontWeight="bold"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          2K25
        </motion.text>
      </svg>
    </div>
  );
}
