"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Globe, ServerOff, LucideIcon, Sparkles } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    title: "Hosted on monday.com",
    description: "All our apps run on monday's secure infrastructure",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 Compliant",
    description: "Enterprise-grade security and compliance",
  },
  {
    icon: Globe,
    title: "GDPR Ready",
    description: "Fully compliant with data protection regulations",
  },
  {
    icon: ServerOff,
    title: "No External Storage",
    description: "Your data never leaves monday's servers",
  },
];

function TrustCard({ item, index }: { item: { icon: LucideIcon; title: string; description: string }; index: number }) {
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

  const Icon = item.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-center p-8 rounded-2xl bg-card/50 border border-border/50 overflow-hidden hover:border-[#00CA72]/30 transition-colors"
    >
      {/* Cursor-following gradient */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 202, 114, 0.12), rgba(0, 160, 160, 0.08), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative">
        <div className="mb-6 flex justify-center">
          <Icon className="w-14 h-14 text-[#00CA72]" />
        </div>
        <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
        <p className="text-base text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
}

// Sparkle component for decoration
function Sparkle({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      viewport={{ once: true }}
      transition={{ delay, duration: 2, repeat: Infinity, repeatDelay: 3 }}
      className={className}
    >
      <div className="w-1.5 h-1.5 bg-white rounded-full" />
    </motion.div>
  );
}

export function TrustSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Large background padlock */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Padlock SVG */}
          <svg
            viewBox="0 0 200 260"
            className="w-[300px] h-[390px] md:w-[400px] md:h-[520px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Shackle (top arc) */}
            <path
              d="M45 120 V80 C45 35 100 0 100 0 C100 0 155 35 155 80 V120"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
            />
            {/* Lock body */}
            <rect
              x="20"
              y="110"
              width="160"
              height="130"
              rx="20"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
            />
            {/* Keyhole */}
            <circle cx="100" cy="165" r="15" fill="rgba(255,255,255,0.06)" />
            <rect x="94" y="170" width="12" height="30" rx="6" fill="rgba(255,255,255,0.06)" />
          </svg>

          {/* Sparkles around the lock */}
          <Sparkle className="absolute top-10 left-1/4" delay={0} />
          <Sparkle className="absolute top-1/4 right-10" delay={0.5} />
          <Sparkle className="absolute top-1/3 left-5" delay={1} />
          <Sparkle className="absolute bottom-1/3 right-1/4" delay={1.5} />
          <Sparkle className="absolute top-20 right-1/3" delay={2} />
          <Sparkle className="absolute bottom-1/4 left-1/3" delay={0.8} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 mb-8"
            >
              <Lock className="w-4 h-4 text-[#00CA72]" />
              <span className="text-sm text-white/90">Privacy & Compliance</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-white">
              Enterprise-grade peace of mind
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Your data stays secure and private with Everyday Apps.
              All apps run on monday.com&apos;s infrastructure—no external servers.
            </p>
          </motion.div>

          {/* Trust cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, index) => (
              <TrustCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
