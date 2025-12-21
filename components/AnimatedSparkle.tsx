"use client";

import { motion } from "framer-motion";

export function AnimatedSparkle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Large star - mostly frozen, animates briefly every 8 seconds */}
      <motion.svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: [1, 1, 1, 1.3, 1, 1, 1],
          opacity: [0.8, 0.8, 0.8, 1, 0.8, 0.8, 0.8],
          rotate: [0, 0, 0, 20, 0, 0, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 1],
        }}
      >
        <defs>
          <linearGradient id="sparkleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#97AEFF"/>
            <stop offset="50%" stopColor="#FAA1F1"/>
            <stop offset="100%" stopColor="#6161FF"/>
          </linearGradient>
        </defs>
        <path
          d="M12 0L13.5 9L22.5 10.5L13.5 12L12 21L10.5 12L1.5 10.5L10.5 9L12 0Z"
          fill="url(#sparkleGradient1)"
        />
      </motion.svg>

      {/* Small star - mostly frozen, animates briefly every 8 seconds (offset) */}
      <motion.svg
        width="7"
        height="7"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-1 right-0"
        animate={{
          scale: [1, 1, 1, 1.5, 1, 1, 1],
          opacity: [0.6, 0.6, 0.6, 1, 0.6, 0.6, 0.6],
          rotate: [0, 0, 0, -25, 0, 0, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.45, 0.5, 0.55, 0.6, 1],
          delay: 4,
        }}
      >
        <defs>
          <linearGradient id="sparkleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAA1F1"/>
            <stop offset="100%" stopColor="#6161FF"/>
          </linearGradient>
        </defs>
        <path
          d="M12 0L13.5 9L22.5 10.5L13.5 12L12 21L10.5 12L1.5 10.5L10.5 9L12 0Z"
          fill="url(#sparkleGradient2)"
        />
      </motion.svg>
    </div>
  );
}
