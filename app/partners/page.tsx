"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Gift,
  Target,
  Bell,
  TrendingUp,
  DollarSign,
  Rocket,
  Building2,
  Briefcase,
  GraduationCap,
  Check,
  ArrowRight,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  items: string[];
  footnote?: string;
}

const benefits: Benefit[] = [
  {
    icon: Gift,
    title: "Free App Licenses",
    items: [
      "Everyday Import",
      "Everyday Form (when launched)",
      "All future Everyday Apps",
    ],
  },
  {
    icon: Target,
    title: "Sales Enablement",
    items: [
      "Product training sessions",
      "Access to sales materials",
      "Quarterly business reviews",
      "Roadmap updates & previews",
    ],
  },
  {
    icon: Bell,
    title: "Priority Support",
    items: [
      "Dedicated partner support",
      "Pre-sales technical assistance",
      "Direct access to dev team",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing Benefits",
    items: [
      "Partner directory listing",
      "Co-marketing opportunities",
      "Social media features",
      "Case study collaboration",
    ],
  },
  {
    icon: DollarSign,
    title: "Partner Commission",
    items: [
      "Up to $5k: 10% commission",
      "Above $5k: 15% commission",
    ],
    footnote: "Based on annual revenue generated",
  },
  {
    icon: Rocket,
    title: "Early Access",
    items: [
      "Beta access to new apps",
      "Feature request priority",
      "Exclusive partner events",
    ],
  },
];

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
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

  const Icon = benefit.icon;

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
      <Card className="h-full bg-card/50 border-border/50 hover:border-[#FAA1F1]/30 transition-colors relative overflow-hidden">
        {/* Cursor-following gradient */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 161, 241, 0.12), rgba(151, 174, 255, 0.08), transparent 40%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        <CardContent className="pt-6 relative">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <Icon className="text-primary" size={24} />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            {benefit.title}
          </h3>
          <ul className="space-y-2">
            {benefit.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <Check size={14} className="text-secondary mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {benefit.footnote && (
            <p className="text-xs text-muted-foreground mt-4 italic">
              * {benefit.footnote}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function PartnersPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Partner Program
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Join our partner program and grow your business with Everyday Apps.
            Help your clients succeed with powerful monday.com integrations.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">
              Become a Partner
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">
            Partner Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Who Should Partner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-border/50">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Who Should Partner With Us?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">monday.com Partners</h3>
                  <p className="text-muted-foreground text-sm">
                    Implementation partners and consultants helping clients
                    optimize their monday.com workflows.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">System Integrators</h3>
                  <p className="text-muted-foreground text-sm">
                    IT consultancies and SIs delivering enterprise solutions
                    with monday.com at the core.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Resellers</h3>
                  <p className="text-muted-foreground text-sm">
                    Software resellers looking to expand their monday.com
                    ecosystem offerings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-card/50 border-border/50 max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Partner?
              </h2>
              <p className="text-muted-foreground mb-6">
                Get in touch with our partnership team to discuss how we can
                work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href="/contact">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:partners@everydayapps.com">
                    partners@everydayapps.com
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
