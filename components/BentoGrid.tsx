"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Clock, Heart, Settings } from "lucide-react";

const bentoItems = [
  {
    id: 1,
    icon: Settings,
    title: "",
    description: "",
    color: "bg-card",
    textColor: "text-[#97AEFF]",
    iconOnly: true,
    className: "col-span-1 row-span-1",
  },
  {
    id: 2,
    icon: null,
    title: "Powerful yet simple",
    description: "Build complex workflows with an intuitive interface. No coding required, just drag, drop, and automate.",
    color: "bg-gradient-to-br from-[#97AEFF] to-[#6161FF]",
    textColor: "text-white",
    className: "col-span-2 row-span-1",
  },
  {
    id: 3,
    icon: null,
    title: "Apps teams love to use",
    description: "Intuitive tools that your entire organization will adopt quickly and use daily.",
    color: "bg-gradient-to-br from-[#E871D8] to-[#FAA1F1]",
    textColor: "text-white",
    className: "col-span-2 row-span-1",
  },
  {
    id: 4,
    icon: Heart,
    title: "",
    description: "",
    color: "bg-card",
    textColor: "text-[#FAA1F1]",
    iconOnly: true,
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    icon: Zap,
    title: "",
    description: "",
    color: "bg-card",
    textColor: "text-[#00CA72]",
    iconOnly: true,
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    icon: null,
    title: "Fast time to value",
    description: "See results immediately with apps that are quick to set up and even easier to master.",
    color: "bg-gradient-to-br from-[#00CA72] to-[#00A0A0]",
    textColor: "text-white",
    className: "col-span-2 row-span-1",
  },
];

export function BentoGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-5">
            Why teams choose Everyday Apps
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Built for monday.com power users who want more from their workspace
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${item.className} ${item.color} rounded-3xl p-8 border border-border/50 flex flex-col justify-center min-h-[200px]`}
            >
              {item.iconOnly ? (
                <div className="flex items-center justify-center h-full">
                  {item.icon && <item.icon size={80} className={item.textColor} strokeWidth={1.5} />}
                </div>
              ) : (
                <div className={item.textColor}>
                  <h3 className="text-2xl md:text-4xl font-light mb-3">{item.title}</h3>
                  <p className="text-base md:text-lg opacity-90">{item.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
