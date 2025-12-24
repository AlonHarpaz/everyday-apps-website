"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BorderBeam } from "@/components/BorderBeam";
import {
  Bell,
  BarChart3,
  Target,
  Flag,
  ListOrdered,
  CheckSquare,
  Copy,
  Briefcase,
  Map,
  Sparkles,
  Puzzle,
  Zap,
  LayoutDashboard,
  RefreshCw,
  Plug,
  GitBranch,
  Bot,
  PenTool,
  Mail,
  FileSpreadsheet,
  Calendar,
  Layers,
  Workflow,
  Clock,
  Columns,
  Timer,
  FileText,
  MessageSquare,
  PenSquare,
  GanttChart,
  Inbox,
  Users,
  Brain,
  Bookmark,
  Database,
  Globe,
  Share2,
  Lock,
  Eye,
  Download,
  Upload,
} from "lucide-react";

export function AppsShowcaseGrid() {
  return (
    <section className="relative -mt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Powering every monday product
            </h2>
            <p className="text-muted-foreground text-lg">
              Our apps work seamlessly across all monday.com products
            </p>
          </motion.div>

          {/* Grid Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Grid with lines */}
            <div className="relative">
              {/* Left fade */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background via-background/70 to-transparent z-10 pointer-events-none backdrop-blur-[2px]" style={{ maskImage: 'linear-gradient(to right, black 50%, transparent)' }} />
              {/* Right fade */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background via-background/70 to-transparent z-10 pointer-events-none backdrop-blur-[2px]" style={{ maskImage: 'linear-gradient(to left, black 50%, transparent)' }} />

              {/* Mobile Grid - 4 columns */}
              <div className="grid grid-cols-4 md:hidden border-y border-white/10 overflow-hidden bg-card/20 backdrop-blur-sm">
                <GridItem name="Reporting" icon={BarChart3} slug="apps" />
                <GridItem name="Goals" icon={Target} slug="apps" />
                <GridItem name="Dashboard" icon={LayoutDashboard} slug="everyday-dashboard" />
                <GridItem name="Automations" icon={Zap} slug="apps" />
                <GridItem name="Signature" icon={PenTool} slug="everyday-signature" />
                <GridItem name="Mail" icon={Mail} slug="everyday-mail" />
                <GridItem name="Form" icon={FileSpreadsheet} slug="everyday-form" />
                <GridItem name="Sync" icon={RefreshCw} slug="everyday-sync" />
                <GridItem name="Timesheet" icon={Clock} slug="everyday-timesheet" />
                <GridItem name="Kanban" icon={Columns} slug="apps" />
                <GridItem name="Calendar" icon={Calendar} slug="everyday-calendar" />
                <GridItem name="Teams" icon={Users} slug="apps" />
              </div>

              {/* Desktop Grid - 10 columns with centered products */}
              <div className="hidden md:grid grid-cols-10 border-y border-white/10 overflow-hidden bg-card/20 backdrop-blur-sm">
                {/* Row 1 */}
                <GridItem name="Reminders" icon={Bell} slug="apps" />
                <GridItem name="Reporting" icon={BarChart3} slug="apps" />
                <GridItem name="Goals" icon={Target} slug="apps" />
                <GridItem name="Milestones" icon={Flag} slug="apps" />
                <GridItem name="Priorities" icon={ListOrdered} slug="apps" />
                <GridItem name="Checklists" icon={CheckSquare} slug="apps" />
                <GridItem name="Templates" icon={Copy} slug="apps" />
                <GridItem name="Portfolios" icon={Briefcase} slug="apps" />
                <GridItem name="Roadmaps" icon={Map} slug="apps" />
                <GridItem name="AI Writer" icon={Sparkles} slug="apps" />

                {/* Row 2 */}
                <GridItem name="API Calls" icon={Puzzle} slug="apps" />
                <GridItem name="Automations" icon={Zap} slug="apps" />
                <GridItem name="Dashboard" icon={LayoutDashboard} slug="everyday-dashboard" />
                <GridItem name="Sync" icon={RefreshCw} slug="everyday-sync" />
                <GridItem name="Integrations" icon={Plug} slug="everyday-connect" />
                <GridItem name="Sprints" icon={GitBranch} slug="apps" />
                <GridItem name="AI Q&A" icon={Bot} slug="apps" />
                <GridItem name="Signature" icon={PenTool} slug="everyday-signature" />
                <GridItem name="Mail" icon={Mail} slug="everyday-mail" />
                <GridItem name="Form" icon={FileSpreadsheet} slug="everyday-form" />

                {/* Row 3 - with products starting */}
                <GridItem name="Workflows" icon={Workflow} slug="apps" />
                <GridItem name="Timesheet" icon={Clock} slug="everyday-timesheet" />
                <GridItem name="Kanban" icon={Columns} slug="apps" />

                {/* Monday Products - centered, spans cols 4-7 and rows 3-4 */}
                <div className="col-start-4 col-span-4 row-start-3 row-span-2 bg-background flex items-center justify-center">
                  <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
                    <div className="border-r border-b border-white/10 flex items-center justify-center bg-background relative overflow-hidden">
                      <BorderBeam colorFrom="#6161FF" colorTo="#6161FF" duration={4} delay={0} size={100} cycleDuration={16} />
                      <Image src="/logos/Logo_WorkManagement.svg" alt="monday work management" width={160} height={35} className="scale-90 relative z-10" />
                    </div>
                    <div className="border-r border-b border-white/10 flex items-center justify-center bg-background relative overflow-hidden">
                      <BorderBeam colorFrom="#00D2D2" colorTo="#00D2D2" duration={4} delay={4} size={100} cycleDuration={16} />
                      <Image src="/logos/Logo_CRM.svg" alt="monday CRM" width={130} height={42} className="relative z-10" />
                    </div>
                    <div className="border-r border-b border-white/10 flex items-center justify-center bg-background relative overflow-hidden">
                      <BorderBeam colorFrom="#00CA72" colorTo="#00CA72" duration={4} delay={8} size={100} cycleDuration={16} />
                      <Image src="/logos/Logo_Dev.svg" alt="monday dev" width={140} height={38} className="relative z-10" />
                    </div>
                    <div className="border-r border-b border-white/10 flex items-center justify-center bg-background relative overflow-hidden">
                      <BorderBeam colorFrom="#FF4D77" colorTo="#FF4D77" duration={4} delay={12} size={100} cycleDuration={16} />
                      <Image src="/logos/Logo_Service.svg" alt="monday service" width={130} height={47} className="relative z-10" />
                    </div>
                  </div>
                </div>

                <GridItem name="Time Track" icon={Timer} slug="apps" className="col-start-8 row-start-3" />
                <GridItem name="Docs" icon={FileText} slug="apps" className="col-start-9 row-start-3" />
                <GridItem name="Chat" icon={MessageSquare} slug="apps" className="col-start-10 row-start-3" />

                {/* Row 4 - products continue */}
                <GridItem name="Whiteboards" icon={PenSquare} slug="apps" className="col-start-1 row-start-4" />
                <GridItem name="Gantt" icon={GanttChart} slug="apps" className="col-start-2 row-start-4" />
                <GridItem name="Calendar" icon={Calendar} slug="everyday-calendar" className="col-start-3 row-start-4" />
                {/* Products occupy cols 4-7 */}
                <GridItem name="Roadmaps" icon={Map} slug="apps" className="col-start-8 row-start-4" />
                <GridItem name="Inbox" icon={Inbox} slug="apps" className="col-start-9 row-start-4" />
                <GridItem name="Custom Status" icon={Layers} slug="apps" className="col-start-10 row-start-4" />

                {/* Row 5 */}
                <GridItem name="Teams" icon={Users} slug="apps" />
                <GridItem name="Brain" icon={Brain} slug="apps" />
                <GridItem name="Tags" icon={Bookmark} slug="apps" />
                <GridItem name="Support" icon={MessageSquare} slug="apps" />
                <GridItem name="Notes" icon={FileText} slug="apps" />
                <GridItem name="Settings" icon={Layers} slug="apps" />
                <GridItem name="Archive" icon={Database} slug="apps" />
                <GridItem name="Search" icon={Globe} slug="apps" />
                <GridItem name="Sharing" icon={Share2} slug="apps" />
                <GridItem name="Permissions" icon={Lock} slug="apps" />

                {/* Row 6 */}
                <GridItem name="Views" icon={Eye} slug="apps" />
                <GridItem name="Exports" icon={Download} slug="apps" />
                <GridItem name="Imports" icon={Upload} slug="apps" />
                <GridItem name="Activity" icon={Zap} slug="apps" />
                <GridItem name="Filters" icon={ListOrdered} slug="apps" />
                <GridItem name="Updates" icon={Bell} slug="apps" />
                <GridItem name="Tracking" icon={Target} slug="apps" />
                <GridItem name="Reports" icon={BarChart3} slug="apps" />
                <GridItem name="Alerts" icon={Bell} slug="apps" />
                <GridItem name="Backups" icon={Database} slug="apps" />
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-10"
          >
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 text-[#FAA1F1] hover:text-[#FAA1F1]/80 font-medium transition-colors"
            >
              View all apps →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GridItem({
  name,
  icon: Icon,
  slug,
  isLive = false,
  className = ""
}: {
  name: string;
  icon: React.ElementType;
  slug: string;
  isLive?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/apps/${slug}`}
      className={`flex flex-col items-center justify-center p-5 md:p-8 border-r border-b border-white/10 hover:bg-card/50 transition-all group ${className}`}
    >
      <div className="relative mb-3">
        <Icon
          size={28}
          className="text-muted-foreground group-hover:text-foreground transition-colors"
          strokeWidth={1.5}
        />
        {isLive && (
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
        )}
      </div>
      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
        {name}
      </span>
    </Link>
  );
}
