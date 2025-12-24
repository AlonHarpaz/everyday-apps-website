"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 md:pt-20 pb-48 md:pb-56">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#97AEFF]/5 via-transparent to-[#6161FF]/5" />

      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#97AEFF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FAA1F1]/5 rounded-full blur-3xl" />

      {/* Bottom fade - extends further for grid peek */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Monday Marketplace Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10 mb-8"
          >
            <span className="text-sm text-muted-foreground">Building apps for</span>
            <div className="flex items-center gap-1.5">
              <Image src="/monday-logo.svg" alt="monday.com" width={18} height={18} />
              <span><span className="text-white font-medium">monday</span><span className="text-white/60 font-light">marketplace</span></span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-6"
          >
            Apps that make{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF]">
              monday.com
            </span>{" "}
            even better
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            We build powerful, secure, and compliant apps for the monday.com ecosystem.
            All apps run on monday&apos;s infrastructure for enterprise-grade security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Gradient border button */}
            <div className="relative p-[2px] rounded-full bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF] hover:opacity-80 transition-opacity">
              <Link
                href="/apps"
                className="block px-8 py-3 rounded-full bg-background text-base font-medium text-white hover:bg-background/90 transition-colors"
              >
                Explore Apps
              </Link>
            </div>
            {/* Outline button - matching size */}
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full border-2 border-white/20 text-base font-medium text-white hover:bg-white/5 hover:border-white/30 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
