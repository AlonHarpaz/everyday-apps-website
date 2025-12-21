"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Gradient glow effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(151, 174, 255, 0.15), rgba(250, 161, 241, 0.1), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Border glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(151, 174, 255, 0.3), rgba(250, 161, 241, 0.2), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {children}
    </motion.div>
  );
}
