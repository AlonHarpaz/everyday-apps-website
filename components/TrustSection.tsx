"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Globe, ServerOff, LucideIcon } from "lucide-react";

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
      className="relative text-center p-6 rounded-xl bg-card/50 border border-border/50 overflow-hidden hover:border-[#FAA1F1]/30 transition-colors"
    >
      {/* Cursor-following gradient */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 161, 241, 0.12), rgba(151, 174, 255, 0.08), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative">
        <div className="mb-4 flex justify-center">
          <Icon className="w-10 h-10 text-[#FAA1F1]" />
        </div>
        <h3 className="font-semibold mb-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
}

export function TrustSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All Everyday Apps are hosted on monday.com&apos;s secure infrastructure,
            ensuring your data is protected by industry-leading security standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <TrustCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
