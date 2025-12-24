"use client";

import { useRef, useState } from "react";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { BentoGrid } from "@/components/BentoGrid";
import { FAQ } from "@/components/FAQ";
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
  Sparkle,
  Target,
  Download,
  FileSpreadsheet,
  Mail,
  PenTool,
  LayoutDashboard,
  Calendar,
  Link2,
  FileCheck,
  Table,
  Send,
  FileSignature,
  BarChart3,
  CalendarCheck,
  RefreshCw,
  MessageSquare,
  Share2,
} from "lucide-react";
import { AppIcon, AppIconWithBorder } from "@/components/AppIcon";
import { AppSlider } from "@/components/AppSlider";
import { AppsShowcaseGrid } from "@/components/AppsShowcaseGrid";
import {
  ImportMockup,
  FormMockup,
  ExportMockup,
  MailMockup,
  SignatureMockup,
} from "@/components/mockups";

// App showcase data - Categories
const appShowcaseData = [
  {
    id: "data",
    name: "Data Management",
    icon: "import",
    isLive: true,
    features: [
      {
        title: "Import from any source",
        description: "CSV, Excel, Google Sheets - bring all your data into monday.com effortlessly.",
        icon: Upload,
      },
      {
        title: "Export to any format",
        description: "Generate reports in PDF, Excel, or CSV for stakeholders and backups.",
        icon: Download,
      },
      {
        title: "Two-way sync",
        description: "Keep external spreadsheets and monday.com in perfect harmony.",
        icon: RefreshCw,
      },
    ],
  },
  {
    id: "communication",
    name: "Communication",
    icon: "mail",
    isLive: false,
    features: [
      {
        title: "Automated emails",
        description: "Send updates, reminders, and notifications based on board changes.",
        icon: Send,
      },
      {
        title: "E-signatures",
        description: "Collect legally binding signatures on contracts and approvals.",
        icon: PenTool,
      },
      {
        title: "Form submissions",
        description: "Capture leads, feedback, and requests directly into your boards.",
        icon: FileSpreadsheet,
      },
    ],
  },
  {
    id: "analytics",
    name: "Analytics & Reporting",
    icon: "dashboard",
    isLive: false,
    features: [
      {
        title: "Advanced dashboards",
        description: "Visualize KPIs with charts and widgets beyond native monday features.",
        icon: LayoutDashboard,
      },
      {
        title: "Cross-board insights",
        description: "Aggregate data from multiple boards into unified reports.",
        icon: BarChart3,
      },
      {
        title: "Scheduled reports",
        description: "Automatically generate and deliver reports on a schedule.",
        icon: Clock,
      },
    ],
  },
  {
    id: "scheduling",
    name: "Scheduling & Planning",
    icon: "calendar",
    isLive: false,
    features: [
      {
        title: "Resource management",
        description: "Track team availability and prevent overbooking.",
        icon: Users,
      },
      {
        title: "Calendar sync",
        description: "Two-way sync with Google Calendar and Outlook.",
        icon: Calendar,
      },
      {
        title: "Time tracking",
        description: "Log hours against tasks with approval workflows.",
        icon: Clock,
      },
    ],
  },
  {
    id: "integrations",
    name: "Integrations",
    icon: "connect",
    isLive: false,
    features: [
      {
        title: "CRM sync",
        description: "Connect HubSpot, Salesforce, and Pipedrive with monday.com.",
        icon: Link2,
      },
      {
        title: "Accounting tools",
        description: "Sync with QuickBooks and Xero for invoicing automation.",
        icon: FileCheck,
      },
      {
        title: "Marketing platforms",
        description: "Connect Mailchimp, ActiveCampaign, and more.",
        icon: Target,
      },
    ],
  },
];

// Simple mockup components for apps without dedicated mockups
function DashboardMockup() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-lg font-semibold">Project Overview</div>
          <div className="text-sm text-muted-foreground">Real-time metrics</div>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 text-xs rounded-full bg-[#97AEFF]/20 text-[#97AEFF] border border-[#97AEFF]/30">This Week</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Tasks Done", value: "127", color: "#22c55e" },
          { label: "In Progress", value: "43", color: "#FAA1F1" },
          { label: "Blocked", value: "8", color: "#ef4444" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="p-4 bg-card rounded-lg border border-border/80 text-center"
          >
            <div className="text-2xl font-light" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="h-32 bg-card rounded-lg border border-border/80 p-4"
      >
        <div className="flex items-end justify-between h-full gap-2">
          {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t transition-all"
              style={{
                height: `${h}%`,
                background: `linear-gradient(to top, #97AEFF, #FAA1F1)`,
                opacity: 0.7 + i * 0.04,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function CalendarMockup() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = ["9 AM", "10 AM", "11 AM", "12 PM"];
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">Week View</div>
        <div className="flex gap-2 text-xs text-muted-foreground border border-border/50 px-3 py-1 rounded-full">
          <span>Dec 16 - 20, 2024</span>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-1 text-xs border border-border/50 rounded-lg p-3 bg-card/30">
        <div />
        {days.map((day) => (
          <div key={day} className="text-center text-muted-foreground py-2 font-medium">{day}</div>
        ))}
        {hours.map((hour, hi) => (
          <>
            <div key={hour} className="text-muted-foreground py-3 pr-2 text-right">{hour}</div>
            {days.map((day, di) => (
              <motion.div
                key={`${hour}-${day}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + (hi * 5 + di) * 0.02 }}
                className="h-12 bg-card border border-border/80 rounded relative"
              >
                {hi === 0 && di === 1 && (
                  <div className="absolute inset-1 rounded bg-[#97AEFF]/30 border-l-2 border-[#97AEFF] px-1 text-[10px]">
                    Team Sync
                  </div>
                )}
                {hi === 1 && di === 3 && (
                  <div className="absolute inset-1 rounded bg-[#FAA1F1]/30 border-l-2 border-[#FAA1F1] px-1 text-[10px]">
                    Client Call
                  </div>
                )}
                {hi === 2 && di === 0 && (
                  <div className="absolute inset-1 rounded bg-[#6161FF]/30 border-l-2 border-[#6161FF] px-1 text-[10px]">
                    Review
                  </div>
                )}
              </motion.div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

function TimesheetMockup() {
  const entries = [
    { project: "Website Redesign", hours: "3:45", status: "running" },
    { project: "API Integration", hours: "2:30", status: "done" },
    { project: "Client Meeting", hours: "1:00", status: "done" },
  ];
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4 p-4 bg-card/50 rounded-lg border border-border/50">
        <div>
          <div className="text-lg font-semibold">Today&apos;s Time</div>
          <div className="text-sm text-muted-foreground">Monday, Dec 16</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-light text-[#FAA1F1]">7:15</div>
          <div className="text-xs text-muted-foreground">hours logged</div>
        </div>
      </div>
      <div className="space-y-3">
        {entries.map((entry, i) => (
          <motion.div
            key={entry.project}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/80"
          >
            <div className={`w-3 h-3 rounded-full ${entry.status === "running" ? "bg-green-500 animate-pulse" : "bg-muted-foreground"}`} />
            <div className="flex-1">
              <div className="font-medium text-sm">{entry.project}</div>
            </div>
            <div className="text-lg font-mono font-semibold">{entry.hours}</div>
            {entry.status === "running" && (
              <button className="px-2 py-1 text-xs bg-red-500/20 text-red-500 rounded border border-red-500/30">Stop</button>
            )}
          </motion.div>
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full mt-4 py-2.5 rounded-lg text-sm font-medium bg-[#FAA1F1] text-white border border-[#FAA1F1]"
      >
        + Start New Timer
      </motion.button>
    </div>
  );
}

function ConnectMockup() {
  const integrations = [
    { name: "HubSpot", status: "connected", color: "#ff7a59" },
    { name: "Salesforce", status: "connected", color: "#00a1e0" },
    { name: "QuickBooks", status: "pending", color: "#2ca01c" },
  ];
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">Connected Apps</div>
        <div className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-500 border border-green-500/30">3 Active</div>
      </div>
      <div className="space-y-3">
        {integrations.map((app, i) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/80"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-light text-sm border"
              style={{ backgroundColor: app.color, borderColor: `${app.color}80` }}
            >
              {app.name[0]}
            </div>
            <div className="flex-1">
              <div className="font-medium">{app.name}</div>
              <div className="text-xs text-muted-foreground">Last sync: 2 min ago</div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs border ${
              app.status === "connected"
                ? "bg-green-500/20 text-green-500 border-green-500/30"
                : "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
            }`}>
              {app.status === "connected" ? "Connected" : "Setup"}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 p-4 border-2 border-dashed border-[#97AEFF]/50 rounded-lg text-center hover:border-[#97AEFF] hover:bg-[#97AEFF]/5 transition-all cursor-pointer"
      >
        <Link2 className="mx-auto mb-2 text-[#97AEFF]" size={24} />
        <div className="text-sm text-[#97AEFF]">+ Add Integration</div>
      </motion.div>
    </div>
  );
}

// Map app IDs to mockup components
const mockupComponents: Record<string, React.ComponentType> = {
  data: ImportMockup,
  communication: MailMockup,
  analytics: DashboardMockup,
  scheduling: CalendarMockup,
  integrations: ConnectMockup,
};

function AppShowcase() {
  const [selectedApp, setSelectedApp] = useState(appShowcaseData[0]);
  const MockupComponent = mockupComponents[selectedApp.id];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            One Suite, Endless Possibilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our apps designed to supercharge your monday.com experience
          </p>
        </motion.div>

        {/* Main Layout - Sidebar + Content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Vertical Sidebar Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:w-64 flex-shrink-0"
          >
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {appShowcaseData.map((app) => (
                <button
                  key={app.id}
                  onClick={() => setSelectedApp(app)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all whitespace-nowrap w-full text-left ${
                    selectedApp.id === app.id
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <AppIcon icon={app.icon} size={20} />
                  <span>{app.name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="flex-1">
            {/* Video for Data Management */}
            {selectedApp.id === "data" && (
              <motion.div
                key="video-data"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative rounded-2xl overflow-hidden border border-white/10"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[300px] object-cover" style={{ objectPosition: 'center 80%' }}
                >
                  <source src="https://dapulse-res.cloudinary.com/video/upload/v1739947887/remote_mondaycom_static/uploads/Yotam_Ron/ai-2025/hero_bg_3_wm.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            )}

            {/* Image for Communication */}
            {selectedApp.id === "communication" && (
              <motion.div
                key="image-communication"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative rounded-2xl overflow-hidden border border-white/10 flex justify-center"
                style={{ background: 'linear-gradient(to bottom, #0f1535 0%, #080d24 50%, #020408 100%)' }}
              >
                <img
                  src="/Mobile_communication.avif"
                  alt="Communication features"
                  className="w-auto h-auto max-h-[300px] object-contain"
                />
              </motion.div>
            )}

            {/* Video for Analytics & Reporting */}
            {selectedApp.id === "analytics" && (
              <motion.div
                key="video-analytics"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative rounded-2xl overflow-hidden border border-white/10"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[300px] object-cover" style={{ objectPosition: 'center 80%' }}
                >
                  <source src="https://dapulse-res.cloudinary.com/video/upload/v1741088998/remote_mondaycom_static/uploads/Yotam_Ron/ai-2025/hero_bg_1_wm-v2.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            )}

            {/* Video for Integrations */}
            {selectedApp.id === "integrations" && (
              <motion.div
                key="video-integrations"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative rounded-2xl overflow-hidden border border-white/10"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-[300px] object-cover" style={{ objectPosition: 'center 20%' }}
                >
                  <source src="https://dapulse-res.cloudinary.com/video/upload/v1738573581/remote_mondaycom_static/uploads/Yotam_Ron/ai-2025/01_AI_blocks_Workflows_LOOP.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>
            )}

            {/* Features Grid */}
            <motion.div
              key={`features-${selectedApp.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-3 gap-4 mb-8"
            >
              {selectedApp.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-card/30 border border-white/10"
                  >
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center mb-4">
                      <Icon className="text-[#FAA1F1]" size={24} />
                    </div>
                    <h4 className="text-base font-medium mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-[#6B8AFF] via-[#E871D8] to-[#6161FF] hover:opacity-90 border-0 text-white px-8">
                <Link href="/apps">
                  Explore All Apps
                  <Sparkle className="ml-1 -mt-1 fill-current w-[6px] h-[6px]" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShowcaseFeatureCard({ title, description, icon: Icon, index }: { title: string; description: string; icon: React.ElementType; index: number }) {
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
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-4 rounded-xl bg-card/80 border border-border/50 overflow-hidden hover:border-[#FAA1F1]/30 transition-all"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 161, 241, 0.15), rgba(151, 174, 255, 0.1), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative flex items-start gap-4">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center flex-shrink-0">
          <Icon className="text-[#FAA1F1]" size={20} />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

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
      className="relative p-8 rounded-2xl bg-card/50 border border-border/50 overflow-hidden hover:border-[#FAA1F1]/30 transition-colors"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 161, 241, 0.12), rgba(151, 174, 255, 0.08), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center">
            <Icon className="text-[#FAA1F1]" size={28} />
          </div>
          <span className="text-base font-medium text-[#97AEFF]">{step}</span>
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-base">{description}</p>
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
      className="text-center p-2"
    >
      <div className="flex justify-center mb-2">
        <Icon className="text-[#FAA1F1]" size={32} />
      </div>
      <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF] bg-clip-text text-transparent mb-1">
        {value}
      </div>
      <div className="text-muted-foreground text-base">{label}</div>
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
      className="relative p-8 rounded-2xl bg-card/50 border border-border/50 overflow-hidden hover:border-[#FAA1F1]/30 transition-colors"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(250, 161, 241, 0.12), rgba(151, 174, 255, 0.08), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative">
        <div className="h-14 w-14 rounded-xl bg-[#6161FF]/10 flex items-center justify-center mb-5">
          <Icon className="text-[#6161FF]" size={28} />
        </div>
        <h3 className="font-semibold text-lg mb-3">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Apps Grid - peeks into hero */}
      <AppsShowcaseGrid />

      {/* App Showcase Section */}
      <AppShowcase />

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-32 md:gap-44">
            <StatCard value="5x" label="Faster Than Others" icon={Zap} />
            <StatCard value="10x" label="More Secure" icon={Shield} />
            <StatCard value="99.9%" label="Uptime" icon={Clock} />
            <div className="text-center p-2">
              <div className="flex justify-center mb-2">
                <img src="/monday-logo.svg" alt="monday.com" className="h-8" />
              </div>
              <div className="text-4xl md:text-5xl font-light bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF] bg-clip-text text-transparent mb-1">
                Certified
              </div>
              <div className="text-muted-foreground text-base">monday Partner</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started in minutes, not hours. Our apps are designed for simplicity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
      <section className="py-20 bg-card/30 overflow-x-clip">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6">Our Apps</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful tools designed to enhance your monday.com experience
            </p>
          </motion.div>
        </div>

        {/* Slider bleeding off both edges */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
          <div className="pl-4 md:pl-36 lg:pl-56">
            <AppSlider apps={[...liveApps, ...comingSoonApps]} />
          </div>
        </div>

        </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6">
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
              description="SOC 2 compliant with network isolation - connections restricted to approved services only."
              icon={Shield}
              index={1}
            />
            <FeatureCard
              title="Lightning Fast"
              description="Multi-region deployment (US, EU, AU) for optimized performance worldwide."
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

      {/* Bento Grid Section */}
      <BentoGrid />

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#97AEFF]/10 via-card/50 to-[#FAA1F1]/10 border border-border/50">
              <Quote className="absolute top-8 left-8 text-[#FAA1F1]/20" size={56} />
              <div className="relative">
                <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                  "Everyday Import saved us hours of manual data entry. We migrated 5,000+ contacts
                  from our old CRM to monday.com in minutes. The smart column mapping just works!"
                </p>
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#97AEFF] to-[#FAA1F1] flex items-center justify-center text-white font-light text-lg">
                    SK
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Sarah K.</div>
                    <div className="text-base text-muted-foreground">Operations Manager</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6">
                Built for Global Teams
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Enterprise-ready infrastructure designed to serve teams anywhere in the world
                with security and compliance built-in.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Deployed in US, EU & AU regions</span>
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
                  <span>Network isolation enabled</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
                <Globe2 className="mx-auto mb-4 text-[#97AEFF]" size={40} />
                <div className="text-3xl font-light">3</div>
                <div className="text-base text-muted-foreground">Regions</div>
              </div>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
                <Shield className="mx-auto mb-4 text-[#FAA1F1]" size={40} />
                <div className="text-3xl font-light">SOC 2</div>
                <div className="text-base text-muted-foreground">Compliant</div>
              </div>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
                <Clock className="mx-auto mb-4 text-[#6161FF]" size={40} />
                <div className="text-3xl font-light">24/7</div>
                <div className="text-base text-muted-foreground">Monitoring</div>
              </div>
              <div className="p-8 rounded-2xl bg-card/50 border border-border/50 text-center">
                <Zap className="mx-auto mb-4 text-green-500" size={40} />
                <div className="text-3xl font-light">99.9%</div>
                <div className="text-base text-muted-foreground">Uptime</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to supercharge your monday.com?
            </h2>
            <p className="text-muted-foreground text-xl mb-10">
              Install Everyday Import today and see the difference. More apps coming soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#6B8AFF] via-[#E871D8] to-[#6161FF] hover:opacity-90 border-0 text-white text-lg px-10 py-6">
                <Link href="/apps">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-[#FAA1F1]/50 hover:bg-[#FAA1F1]/10 hover:border-[#FAA1F1] text-lg px-10 py-6">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
