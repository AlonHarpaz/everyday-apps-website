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
  Lightbulb,
  Percent,
  Calculator,
  Users,
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
      "Up to 25% lifetime commission",
      "$100 one-time for app ideas",
    ],
    footnote: "Commission rate based on tier and volume",
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

function CommissionCalculator() {
  const [customers, setCustomers] = useState(5);
  const [avgSpend, setAvgSpend] = useState(50);
  const [appIdeas, setAppIdeas] = useState(1);

  // Commission tiers based on customer count
  const getCommissionRate = (customerCount: number) => {
    if (customerCount >= 50) return 0.25; // 25%
    if (customerCount >= 20) return 0.20; // 20%
    if (customerCount >= 10) return 0.15; // 15%
    return 0.10; // 10%
  };

  const commissionRate = getCommissionRate(customers);
  const monthlyRevenue = customers * avgSpend;
  const monthlyCommission = monthlyRevenue * commissionRate;
  const yearlyCommission = monthlyCommission * 12;
  const appIdeaCommission = appIdeas * 100;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.6 }}
      className="mb-16"
    >
      <Card className="overflow-hidden border-border/50 bg-card/50">
        <CardContent className="p-0">
          <div className="p-8 md:p-10 border-b border-border/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#97AEFF] to-[#6161FF] flex items-center justify-center">
                <Calculator size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light">Commission Calculator</h2>
                <p className="text-sm text-muted-foreground">See how much you can earn as a partner</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Inputs */}
            <div className="p-8 md:p-10 space-y-8">
              {/* Customer Referrals */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Users size={16} className="text-[#97AEFF]" />
                    Customers You Refer
                  </label>
                  <span className="text-sm text-muted-foreground">{customers} customers</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={customers}
                  onChange={(e) => setCustomers(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-[#97AEFF]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Average Spend */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <DollarSign size={16} className="text-[#FAA1F1]" />
                    Avg. Monthly Spend per Customer
                  </label>
                  <span className="text-sm text-muted-foreground">{formatCurrency(avgSpend)}/mo</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={avgSpend}
                  onChange={(e) => setAvgSpend(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-[#FAA1F1]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$10</span>
                  <span>$500</span>
                </div>
              </div>

              {/* App Ideas */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Lightbulb size={16} className="text-[#E871D8]" />
                    App Ideas Submitted
                  </label>
                  <span className="text-sm text-muted-foreground">{appIdeas} ideas</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={appIdeas}
                  onChange={(e) => setAppIdeas(Number(e.target.value))}
                  className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-[#E871D8]"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0</span>
                  <span>10</span>
                </div>
              </div>

              {/* Commission Rate Indicator */}
              <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Your Commission Rate</span>
                  <span className="text-lg font-medium text-[#97AEFF]">{(commissionRate * 100).toFixed(0)}%</span>
                </div>
                <div className="mt-2 flex gap-1">
                  {[10, 15, 20, 25].map((rate) => (
                    <div
                      key={rate}
                      className={`flex-1 h-2 rounded-full transition-colors ${
                        commissionRate * 100 >= rate
                          ? 'bg-gradient-to-r from-[#97AEFF] to-[#FAA1F1]'
                          : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {customers < 10 && "Refer 10+ customers to unlock 15%"}
                  {customers >= 10 && customers < 20 && "Refer 20+ customers to unlock 20%"}
                  {customers >= 20 && customers < 50 && "Refer 50+ customers to unlock 25%"}
                  {customers >= 50 && "You've unlocked the maximum rate!"}
                </p>
              </div>
            </div>

            {/* Right side - Results */}
            <div className="bg-gradient-to-br from-[#97AEFF]/5 via-[#E871D8]/5 to-[#6161FF]/5 p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/50">
              <h3 className="text-lg font-medium mb-6 text-center">Your Potential Earnings</h3>

              <div className="space-y-4">
                {/* Monthly from referrals */}
                <div className="p-4 rounded-xl bg-card border border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Monthly (Referrals)</p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {customers} customers × {formatCurrency(avgSpend)} × {(commissionRate * 100).toFixed(0)}%
                      </p>
                    </div>
                    <p className="text-2xl font-light text-[#97AEFF]">{formatCurrency(monthlyCommission)}</p>
                  </div>
                </div>

                {/* Yearly from referrals */}
                <div className="p-4 rounded-xl bg-card border border-border/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Yearly (Referrals)</p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {formatCurrency(monthlyCommission)} × 12 months
                      </p>
                    </div>
                    <p className="text-2xl font-light text-[#FAA1F1]">{formatCurrency(yearlyCommission)}</p>
                  </div>
                </div>

                {/* App Ideas bonus */}
                {appIdeas > 0 && (
                  <div className="p-4 rounded-xl bg-card border border-border/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">App Ideas Bonus</p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {appIdeas} idea{appIdeas > 1 ? 's' : ''} × $100 (one-time)
                        </p>
                      </div>
                      <p className="text-2xl font-light text-[#E871D8]">{formatCurrency(appIdeaCommission)}</p>
                    </div>
                  </div>
                )}

                {/* Total first year */}
                <div className="p-5 rounded-xl bg-gradient-to-r from-[#97AEFF]/20 via-[#E871D8]/20 to-[#6161FF]/20 border border-[#FAA1F1]/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">First Year Total</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Referrals + App Ideas
                      </p>
                    </div>
                    <p className="text-3xl font-light bg-gradient-to-r from-[#97AEFF] via-[#E871D8] to-[#6161FF] bg-clip-text text-transparent">
                      {formatCurrency(yearlyCommission + appIdeaCommission)}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-6">
                * Referral commission is lifetime, paid monthly as long as customers remain active
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

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
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">
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

        {/* App Idea Commission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-[#FAA1F1]/30 bg-gradient-to-br from-[#97AEFF]/5 via-[#E871D8]/5 to-[#6161FF]/5">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#97AEFF] to-[#FAA1F1] flex items-center justify-center">
                      <Lightbulb size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-light">App Idea Commission</h2>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAA1F1]/20 text-[#FAA1F1]">New Program</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    Got an app idea for monday.com? Share it with us and if we build it,
                    you'll earn a <span className="text-[#FAA1F1] font-medium">$100 one-time commission</span> once the app generates revenue.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#FAA1F1]/20 flex items-center justify-center">
                        <Check size={12} className="text-[#FAA1F1]" />
                      </div>
                      <span className="text-sm">Submit any app idea - no development required</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#FAA1F1]/20 flex items-center justify-center">
                        <Check size={12} className="text-[#FAA1F1]" />
                      </div>
                      <span className="text-sm"><strong>$100</strong> one-time commission once the app generates revenue</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#FAA1F1]/20 flex items-center justify-center">
                        <Check size={12} className="text-[#FAA1F1]" />
                      </div>
                      <span className="text-sm">Get early access and recognition as idea contributor</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#FAA1F1]/20 flex items-center justify-center">
                        <Check size={12} className="text-[#FAA1F1]" />
                      </div>
                      <span className="text-sm">Bring customers for <strong>up to 25%</strong> lifetime commission</span>
                    </li>
                  </ul>

                  <Button asChild className="bg-gradient-to-r from-[#97AEFF] via-[#E871D8] to-[#6161FF] hover:opacity-90 text-white border-0">
                    <Link href="/apps">
                      Submit Your App Idea
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </div>

                {/* Right side - Commission Info */}
                <div className="bg-card/50 p-8 md:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-border/50">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#97AEFF] to-[#FAA1F1] flex items-center justify-center mx-auto mb-4">
                      <Percent size={32} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-light mb-2">Two Ways to Earn</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Choose how you want to earn with Everyday Apps
                    </p>

                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                        <p className="text-2xl font-medium text-[#FAA1F1]">$100</p>
                        <p className="text-xs text-muted-foreground">One-time for app ideas</p>
                      </div>
                      <div className="p-4 rounded-xl bg-background/50 border border-border/50">
                        <p className="text-2xl font-medium text-[#97AEFF]">Up to 25%</p>
                        <p className="text-xs text-muted-foreground">Lifetime for customer referrals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Commission Calculator */}
        <CommissionCalculator />

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-light text-center mb-8">
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
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
