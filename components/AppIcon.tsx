import {
  Download,
  FileSpreadsheet,
  Upload,
  Mail,
  PenTool,
  LayoutDashboard,
  Calendar,
  Clock,
  Link2,
  Megaphone,
  Package,
  ShieldCheck,
  CloudUpload,
  MessageSquarePlus,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  import: Download,
  form: FileSpreadsheet,
  export: Upload,
  mail: Mail,
  signature: PenTool,
  dashboard: LayoutDashboard,
  calendar: Calendar,
  timesheet: Clock,
  connect: Link2,
  marketing: Megaphone,
  inventory: Package,
  security: ShieldCheck,
  backup: CloudUpload,
  request: MessageSquarePlus,
};

interface AppIconProps {
  icon: string;
  className?: string;
  size?: number;
}

export function AppIcon({ icon, className, size = 24 }: AppIconProps) {
  const Icon = iconMap[icon] || Download;
  return <Icon className={className} size={size} />;
}

interface AppIconWithBorderProps {
  icon: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: { container: "h-10 w-10", icon: 16 },
  md: { container: "h-14 w-14", icon: 24 },
  lg: { container: "h-16 w-16", icon: 28 },
  xl: { container: "h-20 w-20", icon: 40 },
};

export function AppIconWithBorder({ icon, size = "md" }: AppIconWithBorderProps) {
  const { container, icon: iconSize } = sizeClasses[size];

  return (
    <div className={`relative ${container} rounded-2xl p-[1px] bg-gradient-to-br from-[#97AEFF] via-[#E871D8] to-[#6161FF]`}>
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-card text-[#FAA1F1]">
        <AppIcon icon={icon} size={iconSize} />
      </div>
    </div>
  );
}
