"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Rocket, ArrowRight, Clock, TrendingUp } from "lucide-react";

const pricingTiers = [
  {
    name: "Alpha",
    stage: "Early Access",
    price: "Free",
    priceNote: "Forever for early adopters",
    description: "Be the first to try new features and shape the product with your feedback.",
    color: "from-[#00CA72] to-[#00A0A0]",
    borderColor: "border-[#00CA72]/50",
    badgeColor: "bg-[#00CA72]/10 text-[#00CA72] border-[#00CA72]/20",
    icon: Sparkles,
    features: [
      "Full access to all features",
      "Direct influence on product roadmap",
      "Priority support channel",
      "Early adopter badge",
      "Lock in free pricing forever",
      "Join our feedback community",
    ],
    cta: "Join Alpha",
    ctaLink: "/apps",
    highlighted: true,
    note: "Limited spots available",
  },
  {
    name: "Beta",
    stage: "Testing Phase",
    price: "$4.99",
    priceNote: "per seat / month",
    description: "Stable features at a fraction of the cost. Perfect for teams ready to commit.",
    color: "from-[#97AEFF] to-[#6161FF]",
    borderColor: "border-[#97AEFF]/50",
    badgeColor: "bg-[#97AEFF]/10 text-[#97AEFF] border-[#97AEFF]/20",
    icon: Zap,
    features: [
      "All Alpha features",
      "Stable, tested functionality",
      "Standard support",
      "Beta tester recognition",
      "50% off production pricing",
      "Price locked until GA release",
    ],
    cta: "Start Beta",
    ctaLink: "/apps",
    highlighted: false,
    note: "Best value for early teams",
  },
  {
    name: "Production",
    stage: "General Availability",
    price: "$9.99",
    priceNote: "per seat / month",
    description: "Full-featured, battle-tested apps for teams who need reliability at scale.",
    color: "from-[#E871D8] to-[#FAA1F1]",
    borderColor: "border-[#FAA1F1]/50",
    badgeColor: "bg-[#FAA1F1]/10 text-[#FAA1F1] border-[#FAA1F1]/20",
    icon: Rocket,
    features: [
      "All Beta features",
      "99.9% uptime SLA",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Coming Soon",
    ctaLink: "#",
    highlighted: false,
    note: "Available after GA release",
    disabled: true,
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Lock in Early Pricing",
    description: "Alpha users keep their free access forever. Beta users keep their discounted rate even after production launch.",
  },
  {
    icon: Sparkles,
    title: "Shape the Product",
    description: "Early adopters have direct influence on features, priorities, and the product roadmap. Your feedback matters.",
  },
  {
    icon: TrendingUp,
    title: "Grow With Us",
    description: "Start free, scale when ready. No pressure, no hidden fees. Upgrade only when your team needs more.",
  },
];

export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Badge className="mb-4 bg-[#00CA72]/10 text-[#00CA72] border border-[#00CA72]/20">
            <Sparkles size={14} className="mr-1" />
            Early Adopter Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Simple, Stage-Based Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The earlier you join, the more you save. Lock in your rate and grow with us.
          </p>
        </motion.div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-[#00CA72]/10 via-[#97AEFF]/10 to-[#FAA1F1]/10 border border-[#00CA72]/20 rounded-2xl p-6 text-center">
            <p className="text-lg font-medium mb-2">
              Everyday Import is currently in <span className="text-[#00CA72] font-light">Alpha</span>
            </p>
            <p className="text-muted-foreground">
              Join now and keep free access forever, even when we launch to production.
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className={tier.highlighted ? "md:-mt-4 md:mb-4" : ""}
            >
              <Card className={`relative h-full border-2 ${tier.borderColor} bg-card/50 overflow-hidden ${tier.highlighted ? "shadow-lg shadow-[#00CA72]/10" : ""}`}>
                {tier.highlighted && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tier.color}`} />
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={tier.badgeColor}>
                      {tier.stage}
                    </Badge>
                    <tier.icon size={24} className="text-muted-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-light">{tier.price}</span>
                    {tier.priceNote && (
                      <span className="text-muted-foreground ml-2 text-sm">{tier.priceNote}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild={!tier.disabled}
                    disabled={tier.disabled}
                    className={`w-full ${tier.highlighted ? `bg-gradient-to-r ${tier.color} hover:opacity-90 text-white border-0` : ""}`}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    {tier.disabled ? (
                      <span>{tier.cta}</span>
                    ) : (
                      <Link href={tier.ctaLink}>
                        {tier.cta}
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    )}
                  </Button>
                  {tier.note && (
                    <p className="text-xs text-muted-foreground text-center mt-3">{tier.note}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-light text-center mb-8">
            Why Join Early?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 mb-4">
                  <benefit.icon size={24} className="text-[#FAA1F1]" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-light text-center mb-8">
            Pricing FAQ
          </h2>
          <div className="space-y-4">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What happens when an app moves from Alpha to Beta?</h3>
                <p className="text-muted-foreground text-sm">
                  If you joined during Alpha, you keep your free access forever. New users joining during Beta will pay the Beta price. Your rate is locked to when you first joined.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is there a limit on Alpha users?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we limit Alpha spots to ensure we can provide quality support and incorporate feedback. Once spots fill up, the app moves to Beta pricing.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade?</h3>
                <p className="text-muted-foreground text-sm">
                  You can upgrade anytime. Downgrading keeps your original rate if you rejoin within 30 days. We believe in flexibility for growing teams.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of teams already using Everyday Apps.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-[#00CA72] to-[#00A0A0] hover:opacity-90 text-white border-0">
            <Link href="/apps">
              Try Free During Alpha
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
