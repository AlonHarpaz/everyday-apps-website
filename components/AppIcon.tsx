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
