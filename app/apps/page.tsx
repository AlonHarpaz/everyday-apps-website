"use client";

import { liveApps, comingSoonApps } from "@/lib/apps";
import { AppSlider } from "@/components/AppSlider";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AppsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Monday Marketplace Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-white/10">
            <span className="text-sm text-muted-foreground">Building apps for</span>
            <div className="flex items-center gap-1.5">
              <Image src="/monday-logo.svg" alt="monday.com" width={18} height={18} />
              <span><span className="text-white font-medium">monday</span><span className="text-white/60 font-light">marketplace</span></span>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">Our Apps</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful, secure apps built to enhance your monday.com experience.
            All apps run on monday&apos;s infrastructure for enterprise-grade security.
          </p>
        </motion.div>

        {/* Live Apps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <h2 className="text-2xl font-light">Available Now</h2>
            </div>
            <Badge className="bg-[#E871D8] text-white">
              {liveApps.length} App{liveApps.length !== 1 ? "s" : ""}
            </Badge>
          </div>
          <AppSlider apps={liveApps} />
        </motion.section>

        {/* Coming Soon Apps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-light">Coming Soon</h2>
            <Badge variant="secondary">
              {comingSoonApps.length} App{comingSoonApps.length !== 1 ? "s" : ""}
            </Badge>
          </div>
          <AppSlider apps={comingSoonApps} />
        </motion.section>
      </div>
    </div>
  );
}
