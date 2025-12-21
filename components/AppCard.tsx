"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AppIcon } from "@/components/AppIcon";

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-[#FAA1F1]/30 transition-all duration-300">
        {/* Cursor-following gradient */}
        <div
          className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(151, 174, 255, 0.12), rgba(250, 161, 241, 0.08), transparent 40%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        <CardHeader className="relative">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAA1F1]/10 text-[#FAA1F1]">
                <AppIcon icon={app.icon} size={24} />
              </div>
              <div>
                <CardTitle className="text-lg">{app.name}</CardTitle>
                <Badge
                  variant={isLive ? "default" : "secondary"}
                  className={isLive
                    ? "bg-[#FAA1F1]/10 text-[#FAA1F1] border border-[#FAA1F1]/20"
                    : "bg-accent/20 text-accent border border-accent/30"
                  }
                >
                  {isLive && (
                    <span className="relative flex h-2 w-2 mr-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  )}
                  {isLive ? "Live" : "Coming Soon"}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative">
          <CardDescription className="text-base mb-4">
            {app.description}
          </CardDescription>

          <Button asChild variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-[#6B8AFF] group-hover:via-[#E871D8] group-hover:to-[#6161FF] group-hover:text-white group-hover:border-transparent transition-all">
            <Link href={`/apps/${app.slug}`}>
              {isLive ? "Learn More" : "Join Waiting List"}
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
