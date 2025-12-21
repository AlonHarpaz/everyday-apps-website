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
} from "lucide-react";
import { AppIcon } from "@/components/AppIcon";
import {
  ImportMockup,
  FormMockup,
  ExportMockup,
  MailMockup,
  SignatureMockup,
} from "@/components/mockups";

// App showcase data
const appShowcaseData = [
  {
    id: "import",
    name: "Everyday Import",
    icon: "import",
    isLive: true,
    features: [
      {
        title: "Import any spreadsheet in seconds",
        description: "Upload CSV or Excel files and watch them transform into monday.com items automatically.",
        icon: Upload,
      },
      {
        title: "Smart column mapping",
        description: "Our AI detects your columns and maps them to the right monday.com fields.",
        icon: Table,
      },
      {
        title: "Batch processing for large datasets",
        description: "Import thousands of rows without breaking a sweat. Progress tracking included.",
        icon: FileCheck,
      },
    ],
  },
  {
    id: "form",
    name: "Everyday Form",
    icon: "form",
    isLive: false,
    features: [
      {
        title: "Build forms without coding",
        description: "Drag and drop form builder that creates beautiful, branded forms in minutes.",
        icon: FileSpreadsheet,
      },
      {
        title: "Direct monday.com integration",
        description: "Form submissions create items directly in your boards. No Zapier needed.",
        icon: ArrowRight,
      },
      {
        title: "Conditional logic & branching",
        description: "Show or hide fields based on answers. Create smart, dynamic forms.",
        icon: RefreshCw,
      },
    ],
  },
  {
    id: "export",
    name: "Everyday Export",
    icon: "export",
    isLive: false,
    features: [
      {
        title: "Export to any format",
        description: "CSV, Excel, PDF - get your data out of monday.com in the format you need.",
        icon: Download,
      },
      {
        title: "Custom export templates",
        description: "Create reusable templates for consistent exports every time.",
        icon: FileCheck,
      },
      {
        title: "Scheduled automated exports",
        description: "Set it and forget it. Get your reports delivered automatically.",
        icon: Clock,
      },
    ],
  },
  {
    id: "mail",
    name: "Everyday Mail",
    icon: "mail",
    isLive: false,
    features: [
      {
        title: "Trigger-based emails",
        description: "Send emails automatically when items change status or meet conditions.",
        icon: Send,
      },
      {
        title: "Dynamic templates",
        description: "Personalize emails with data from your monday.com items.",
        icon: Mail,
      },
      {
        title: "Track opens & clicks",
        description: "Know when your emails are read and which links get clicked.",
        icon: BarChart3,
      },
    ],
  },
  {
    id: "signature",
    name: "Everyday Signature",
    icon: "signature",
    isLive: false,
    features: [
      {
        title: "Legally binding e-signatures",
        description: "Collect signatures that hold up in court, directly from monday.com.",
        icon: PenTool,
      },
      {
        title: "Document templates",
        description: "Generate contracts and documents with data from your boards.",
        icon: FileSignature,
      },
      {
        title: "Multi-party signing",
        description: "Send documents to multiple signers with custom signing order.",
        icon: Users,
      },
    ],
  },
  {
    id: "dashboard",
    name: "Everyday Dashboard",
    icon: "dashboard",
    isLive: false,
    features: [
      {
        title: "Advanced visualizations",
        description: "Gantt charts, heatmaps, and more - beyond monday's native widgets.",
        icon: LayoutDashboard,
      },
      {
        title: "Cross-board analytics",
        description: "Aggregate data from multiple boards into unified dashboards.",
        icon: BarChart3,
      },
      {
        title: "Real-time updates",
        description: "Dashboards refresh automatically as your data changes.",
        icon: RefreshCw,
      },
    ],
  },
  {
    id: "calendar",
    name: "Everyday Calendar",
    icon: "calendar",
    isLive: false,
    features: [
      {
        title: "Multi-board calendar view",
        description: "See items from all your boards in one unified calendar.",
        icon: Calendar,
      },
      {
        title: "Resource scheduling",
        description: "Track team availability and prevent double-booking.",
        icon: CalendarCheck,
      },
      {
        title: "Sync with Google & Outlook",
        description: "Two-way sync keeps everything in harmony.",
        icon: RefreshCw,
      },
    ],
  },
  {
    id: "connect",
    name: "Everyday Connect",
    icon: "connect",
    isLive: false,
    features: [
      {
        title: "Connect your favorite tools",
        description: "HubSpot, Salesforce, QuickBooks - sync them all with monday.com.",
        icon: Link2,
      },
      {
        title: "Two-way data sync",
        description: "Changes flow both directions. Always stay in sync.",
        icon: RefreshCw,
      },
      {
        title: "No-code field mapping",
        description: "Connect fields between apps with simple drag and drop.",
        icon: ArrowRight,
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
          <div className="px-3 py-1 text-xs rounded-full bg-[#97AEFF]/20 text-[#97AEFF]">This Week</div>
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
            className="p-4 bg-card rounded-lg border border-border text-center"
          >
            <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="h-32 bg-card rounded-lg border border-border p-4"
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
        <div className="flex gap-2 text-xs text-muted-foreground">
          <span>Dec 16 - 20, 2024</span>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-1 text-xs">
        <div />
        {days.map((day) => (
          <div key={day} className="text-center text-muted-foreground py-2">{day}</div>
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
                className="h-12 bg-card border border-border rounded relative"
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
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-lg font-semibold">Today&apos;s Time</div>
          <div className="text-sm text-muted-foreground">Monday, Dec 16</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[#FAA1F1]">7:15</div>
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
            className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
          >
            <div className={`w-3 h-3 rounded-full ${entry.status === "running" ? "bg-green-500 animate-pulse" : "bg-muted-foreground"}`} />
            <div className="flex-1">
              <div className="font-medium text-sm">{entry.project}</div>
            </div>
            <div className="text-lg font-mono font-semibold">{entry.hours}</div>
            {entry.status === "running" && (
              <button className="px-2 py-1 text-xs bg-red-500/20 text-red-500 rounded">Stop</button>
            )}
          </motion.div>
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full mt-4 py-2.5 rounded-lg text-sm font-medium bg-[#FAA1F1] text-white"
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
      <div className="text-lg font-semibold mb-4">Connected Apps</div>
      <div className="space-y-3">
        {integrations.map((app, i) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: app.color }}
            >
              {app.name[0]}
            </div>
            <div className="flex-1">
              <div className="font-medium">{app.name}</div>
              <div className="text-xs text-muted-foreground">Last sync: 2 min ago</div>
            </div>
            <div className={`px-2 py-1 rounded-full text-xs ${
              app.status === "connected"
                ? "bg-green-500/20 text-green-500"
                : "bg-yellow-500/20 text-yellow-500"
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
        className="mt-4 p-4 border-2 border-dashed border-border rounded-lg text-center"
      >
        <Link2 className="mx-auto mb-2 text-muted-foreground" size={24} />
        <div className="text-sm text-muted-foreground">+ Add Integration</div>
      </motion.div>
    </div>
  );
}

// Map app IDs to mockup components
const mockupComponents: Record<string, React.ComponentType> = {
  import: ImportMockup,
  form: FormMockup,
  export: ExportMockup,
  mail: MailMockup,
  signature: SignatureMockup,
  dashboard: DashboardMockup,
  calendar: CalendarMockup,
  timesheet: TimesheetMockup,
  connect: ConnectMockup,
};

function AppShowcase() {
  const [selectedApp, setSelectedApp] = useState(appShowcaseData[0]);
  const MockupComponent = mockupComponents[selectedApp.id];

  return (
    <section className="py-20 bg-card/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Suite, Endless Possibilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our apps designed to supercharge your monday.com experience
          </p>
        </motion.div>

        {/* App Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 p-2 rounded-2xl bg-background/50 border border-border/50">
            {appShowcaseData.map((app) => (
              <button
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedApp.id === app.id
                    ? "bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF] text-white shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/80"
                }`}
              >
                <AppIcon icon={app.icon} size={18} />
                <span className="hidden sm:inline">{app.name.replace("Everyday ", "")}</span>
                {app.isLive && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Mockup + Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Mockup */}
            <motion.div
              key={`mockup-${selectedApp.id}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl bg-background border border-border/50 overflow-hidden shadow-2xl"
            >
              {/* Window controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">{selectedApp.name}</span>
                </div>
              </div>
              {/* Mockup content */}
              <div className="min-h-[400px]">
                {MockupComponent && <MockupComponent />}
              </div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              key={`features-${selectedApp.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center">
                  <AppIcon icon={selectedApp.icon} size={24} className="text-[#FAA1F1]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{selectedApp.name}</h3>
                  <div className="flex items-center gap-2">
                    {selectedApp.isLive ? (
                      <span className="inline-flex items-center gap-1.5 text-xs text-green-500">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Live on Marketplace
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>

              {selectedApp.features.map((feature, index) => (
                <ShowcaseFeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              ))}

              {/* App CTA */}
              <div className="pt-4">
                <Button asChild size="lg" className={`w-full ${selectedApp.isLive ? "bg-gradient-to-r from-[#6B8AFF] via-[#E871D8] to-[#6161FF] hover:opacity-90 border-0 text-white" : ""}`}>
                  <Link href={`/apps/${selectedApp.id === "import" ? "everyday-import" : `everyday-${selectedApp.id}`}`}>
                    {selectedApp.isLive ? "Get Started Free" : "Join Waiting List"}
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
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

      {/* App Showcase Section */}
      <AppShowcase />

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
