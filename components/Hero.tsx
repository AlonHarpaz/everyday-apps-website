"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#97AEFF]/5 via-transparent to-[#6161FF]/5" />

      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#97AEFF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FAA1F1]/5 rounded-full blur-3xl" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAA1F1]/10 border border-[#FAA1F1]/20 text-sm text-[#FAA1F1] mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Now live on monday.com Marketplace
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
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
            <Button size="lg" asChild className="text-base bg-gradient-to-r from-[#6B8AFF] via-[#E871D8] to-[#6161FF] hover:opacity-90 border-0 text-white font-medium">
              <Link href="/apps">Explore Apps</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base border-[#FAA1F1]/50 hover:bg-[#FAA1F1]/10 hover:border-[#FAA1F1]">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
