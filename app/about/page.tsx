"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Rocket, LucideIcon } from "lucide-react";

function ValueCard({ icon: Icon, title, description, color }: { icon: LucideIcon; title: string; description: string; color: string }) {
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
    <div
      ref={cardRef}
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
        <div className="flex justify-center mb-4">
          <div className={`h-12 w-12 rounded-xl bg-[${color}]/10 flex items-center justify-center`} style={{ backgroundColor: `${color}15` }}>
            <Icon style={{ color }} size={24} />
          </div>
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Everyday Apps</h1>
          <p className="text-muted-foreground text-lg">
            We&apos;re building the tools that make monday.com even more powerful
          </p>
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            At Everyday Apps, we believe that great software should be simple, secure, and powerful.
            We build apps that seamlessly integrate with monday.com, helping teams work more efficiently
            without compromising on security or data privacy.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every app we create runs on monday.com&apos;s secure infrastructure, ensuring your data
            never leaves the platform you trust. We&apos;re committed to building tools that meet
            enterprise-grade security standards while remaining easy to use.
          </p>
        </motion.section>

        {/* Why monday.com */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">Why monday.com?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            monday.com has become the go-to work operating system for teams around the world.
            Its flexibility and power make it an ideal platform for building apps that truly
            make a difference in how people work.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            By hosting our apps on monday&apos;s infrastructure, we can offer enterprise-grade
            security, SOC 2 compliance, and GDPR readiness out of the box. Your data stays
            where it belongs - on the platform you already trust.
          </p>
        </motion.section>

        {/* Future */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">Looking Ahead</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We&apos;re just getting started. With Everyday Import already helping teams
            bring their data into monday.com, we&apos;re working on a suite of apps
            that will cover forms, exports, email automation, and e-signatures.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            In the future, we plan to expand to other platforms like Atlassian,
            bringing our commitment to security and simplicity to even more teams.
          </p>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={Shield}
              title="Security First"
              description="Your data security is our top priority. Every app we build is designed with enterprise-grade security in mind."
              color="#FAA1F1"
            />
            <ValueCard
              icon={Sparkles}
              title="Simplicity"
              description="Powerful doesn't have to mean complicated. We focus on creating intuitive experiences that anyone can use."
              color="#97AEFF"
            />
            <ValueCard
              icon={Rocket}
              title="Innovation"
              description="We're constantly exploring new ways to help teams work better and more efficiently."
              color="#6161FF"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
