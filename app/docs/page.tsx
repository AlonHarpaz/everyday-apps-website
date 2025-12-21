"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { liveApps, AppData } from "@/lib/apps";
import { AppIcon } from "@/components/AppIcon";
import { ArrowRight } from "lucide-react";

function DocCard({ app, index }: { app: AppData; index: number }) {
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
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/docs/${app.slug}`}>
        <Card className="h-full bg-card/50 border-border/50 hover:border-[#FAA1F1]/30 transition-all cursor-pointer group relative overflow-hidden">
          {/* Cursor-following gradient */}
          <div
            className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 161, 241, 0.12), rgba(151, 174, 255, 0.08), transparent 40%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />

          <CardHeader className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <AppIcon icon={app.icon} size={20} />
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">
                {app.name}
              </CardTitle>
            </div>
            <Badge className="w-fit bg-secondary/20 text-secondary border-0">
              Documentation
            </Badge>
          </CardHeader>
          <CardContent className="relative">
            <CardDescription>{app.description}</CardDescription>
            <p className="text-primary text-sm mt-4 group-hover:underline inline-flex items-center gap-1">
              Read the docs <ArrowRight size={14} />
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

export default function DocsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-muted-foreground text-lg">
            Learn how to use Everyday Apps to supercharge your monday.com
            workflows.
          </p>
        </motion.div>

        {/* Apps Documentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">App Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveApps.map((app, index) => (
              <DocCard key={app.slug} app={app} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-card/30 border-border/30">
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">
                More documentation coming soon as we release new apps.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
