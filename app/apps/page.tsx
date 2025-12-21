"use client";

import { AppCard } from "@/components/AppCard";
import { apps, liveApps, comingSoonApps } from "@/lib/apps";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function AppsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Apps</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful, secure apps built to enhance your monday.com experience.
            All apps run on monday&apos;s infrastructure for enterprise-grade security.
          </p>
        </motion.div>

        {/* Live Apps */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <h2 className="text-2xl font-bold">Available Now</h2>
            <Badge className="bg-[#E871D8] text-white">
              {liveApps.length} App{liveApps.length !== 1 ? "s" : ""}
            </Badge>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveApps.map((app, index) => (
              <AppCard key={app.slug} app={app} index={index} />
            ))}
          </div>
        </section>

        {/* Coming Soon Apps */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <Badge variant="secondary">
              {comingSoonApps.length} App{comingSoonApps.length !== 1 ? "s" : ""}
            </Badge>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonApps.map((app, index) => (
              <AppCard key={app.slug} app={app} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
