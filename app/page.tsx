"use client";

import { useRef, useState } from "react";
import { Hero } from "@/components/Hero";
import { AppCard } from "@/components/AppCard";
import { TrustSection } from "@/components/TrustSection";
import { liveApps, comingSoonApps } from "@/lib/apps";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Upload,
  MousePointerClick,
  Zap,
  CheckCircle2,
  ArrowRight,
  Quote,
  Users,
  Building2,
  Globe2,
  Clock,
  Shield,
  Sparkles,
  Target,
} from "lucide-react";

function StepCard({ step, title, description, icon: Icon, index }: { step: string; title: string; description: string; icon: React.ElementType; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 rounded-xl bg-card/50 border border-border/50 overflow-hidden hover:border-[#FAA1F1]/30 transition-colors"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 161, 241, 0.12), rgba(151, 174, 255, 0.08), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center">
            <Icon className="text-[#FAA1F1]" size={24} />
          </div>
          <span className="text-sm font-medium text-[#97AEFF]">{step}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6"
    >
      <div className="flex justify-center mb-3">
        <Icon className="text-[#FAA1F1]" size={28} />
      </div>
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF] bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
}

function FeatureCard({ title, description, icon: Icon, index }: { title: string; description: string; icon: React.ElementType; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 rounded-xl bg-card/50 border border-border/50 overflow-hidden hover:border-[#FAA1F1]/30 transition-colors"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 161, 241, 0.12), rgba(151, 174, 255, 0.08), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative">
        <div className="h-10 w-10 rounded-lg bg-[#6161FF]/10 flex items-center justify-center mb-4">
          <Icon className="text-[#6161FF]" size={20} />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="10K+" label="Items Imported" icon={Upload} />
            <StatCard value="500+" label="Happy Users" icon={Users} />
            <StatCard value="99.9%" label="Uptime" icon={Zap} />
            <StatCard value="<1s" label="Avg. Response" icon={Clock} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started in minutes, not hours. Our apps are designed for simplicity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StepCard
              step="Step 1"
              title="Install the App"
              description="Find our app in the monday.com marketplace and install it with one click. No complex setup required."
              icon={MousePointerClick}
              index={0}
            />
            <StepCard
              step="Step 2"
              title="Connect Your Data"
              description="Upload your files or connect your tools. Our smart mapping does the heavy lifting for you."
              icon={Upload}
              index={1}
            />
            <StepCard
              step="Step 3"
              title="You're Done!"
              description="Watch your data flow seamlessly into monday.com. It's really that simple."
              icon={CheckCircle2}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-500 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available Now
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Apps</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful tools designed to enhance your monday.com experience
            </p>
          </motion.div>

          {/* Live Apps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {liveApps.map((app, index) => (
              <AppCard key={app.slug} app={app} index={index} />
            ))}
          </div>

          {/* Coming Soon Apps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#97AEFF]/10 border border-[#97AEFF]/20 text-sm text-[#97AEFF] mb-4">
              Coming Soon
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {comingSoonApps.slice(0, 6).map((app, index) => (
              <AppCard key={app.slug} app={app} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-10"
          >
            <Button asChild variant="outline" size="lg">
              <Link href="/apps">
                View All Apps <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Everyday Apps?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're not just another app developer. We're your monday.com productivity partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <FeatureCard
              title="Built for monday.com"
              description="Native apps designed specifically for the monday.com ecosystem."
              icon={Target}
              index={0}
            />
            <FeatureCard
              title="Enterprise Security"
              description="SOC 2 compliant with data that never leaves monday's servers."
              icon={Shield}
              index={1}
            />
            <FeatureCard
              title="Lightning Fast"
              description="Optimized for performance with sub-second response times."
              icon={Zap}
              index={2}
            />
            <FeatureCard
              title="Always Improving"
              description="Regular updates based on user feedback and requests."
              icon={Sparkles}
              index={3}
            />
          </div>
        </div>
      </section>

      <TrustSection />

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#97AEFF]/10 via-card/50 to-[#FAA1F1]/10 border border-border/50">
              <Quote className="absolute top-6 left-6 text-[#FAA1F1]/20" size={48} />
              <div className="relative">
                <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                  "Everyday Import saved us hours of manual data entry. We migrated 5,000+ contacts
                  from our old CRM to monday.com in minutes. The smart column mapping just works!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#97AEFF] to-[#FAA1F1] flex items-center justify-center text-white font-bold">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold">Sarah K.</div>
                    <div className="text-sm text-muted-foreground">Operations Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Teams Worldwide
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                From startups to enterprises, teams across the globe rely on Everyday Apps
                to streamline their monday.com workflows.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Used in 50+ countries</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>GDPR compliant for EU customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>24/7 automated monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Multi-language support coming soon</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center">
                <Globe2 className="mx-auto mb-3 text-[#97AEFF]" size={32} />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center">
                <Building2 className="mx-auto mb-3 text-[#FAA1F1]" size={32} />
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center">
                <Users className="mx-auto mb-3 text-[#6161FF]" size={32} />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-border/50 text-center">
                <Zap className="mx-auto mb-3 text-green-500" size={32} />
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to supercharge your monday.com?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Install Everyday Import today and see the difference. More apps coming soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#6B8AFF] via-[#E871D8] to-[#6161FF] hover:opacity-90 border-0 text-white">
                <Link href="/apps">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[#FAA1F1]/50 hover:bg-[#FAA1F1]/10 hover:border-[#FAA1F1]">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
