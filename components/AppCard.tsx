"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AppIcon, AppIconWithBorder } from "@/components/AppIcon";
import { RequestAppModal } from "@/components/RequestAppModal";

export interface AppData {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  status: "live" | "coming-soon";
  marketplaceUrl?: string;
  icon: string;
}

interface AppCardProps {
  app: AppData;
  index?: number;
}

export function AppCard({ app, index = 0 }: AppCardProps) {
  const isLive = app.status === "live";
  const isPlaceholder = app.icon === "request";
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Placeholder card for "Request an App"
  if (isPlaceholder) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Card
            onClick={() => setIsModalOpen(true)}
            className="group relative overflow-hidden border-2 border-dashed border-border/60 bg-transparent hover:border-[#FAA1F1]/50 hover:bg-card/30 transition-all duration-300 h-full cursor-pointer rounded-3xl"
          >
            <CardHeader className="relative p-10 pb-6">
              {/* Icon */}
              <div className="mb-8 h-20 w-20 rounded-2xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-muted-foreground group-hover:text-[#FAA1F1] group-hover:border-[#FAA1F1]/50 transition-colors">
                <AppIcon icon={app.icon} size={36} />
              </div>

              {/* Title */}
              <CardTitle className="text-2xl mb-2 text-muted-foreground group-hover:text-foreground transition-colors">
                {app.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative p-10 pt-0 flex flex-col flex-1">
              <CardDescription className="text-lg mb-8 flex-1">
                {app.description}
              </CardDescription>

              <div className="w-full py-3 text-center">
                <span className="text-base text-muted-foreground group-hover:text-[#FAA1F1] transition-colors">
                  Share Your Idea →
                </span>
                <span className="block text-sm text-[#FAA1F1]/60 mt-2">
                  Earn $100 if we build it
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <RequestAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="group relative overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm hover:border-[#FAA1F1]/30 transition-all duration-300 h-full rounded-3xl pb-16">
        {/* Cursor-following gradient */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(151, 174, 255, 0.08), rgba(250, 161, 241, 0.05), transparent 40%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Large centered icon area */}
        <div className="relative pt-12 pb-8 flex items-center justify-center">
          <div className="relative">
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-br from-[#97AEFF] to-[#FAA1F1] rounded-full scale-75" />
            <div className="relative h-32 w-32 rounded-2xl bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center border border-white/10">
              <AppIcon icon={app.icon} size={64} className="text-[#FAA1F1]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative px-6 pb-4 text-center">
          {/* Badge */}
          <div className="flex justify-center mb-3">
            <Badge
              variant={isLive ? "default" : "secondary"}
              className={isLive
                ? "bg-green-500/10 text-green-500 border border-green-500/20 text-xs px-2 py-0.5"
                : "bg-muted/50 text-muted-foreground border border-border/50 text-xs px-2 py-0.5"
              }
            >
              {isLive && (
                <span className="relative flex h-1.5 w-1.5 mr-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
              )}
              {isLive ? "Live" : "Coming Soon"}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-4">{app.name}</h3>

          {/* Use Cases / Features */}
          <div className="space-y-2">
            {app.features.slice(0, 3).map((feature, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-[#FAA1F1] flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer link - absolute positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 h-16 flex items-center justify-center">
          <Link
            href={`/apps/${app.slug}`}
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-[#FAA1F1] transition-colors"
          >
            {isLive ? "Learn more" : "Join waiting list"}
            <span className="text-[#FAA1F1]">→</span>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
