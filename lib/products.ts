import { Briefcase, Users, Code, Headphones, LucideIcon } from "lucide-react";

export type AppType = "import" | "form" | "export" | "mail" | "signature";

export interface MondayProduct {
  id: string;
  name: string;
  color: string;
  hoverColor: string;
  icon: LucideIcon;
  useCases: Record<AppType, string[]>;
}

export const mondayProducts: MondayProduct[] = [
  {
    id: "work-management",
    name: "Work Management",
    color: "#97AEFF",
    hoverColor: "#6161FF",
    icon: Briefcase,
    useCases: {
      import: ["Projects", "Tasks", "Timelines"],
      form: ["Request Forms", "Intake Forms", "Surveys"],
      export: ["Project Reports", "Task Lists", "Timelines"],
      mail: ["Task Updates", "Project Notifications", "Deadline Reminders"],
      signature: ["Contracts", "Approvals", "SOWs"],
    },
  },
  {
    id: "crm",
    name: "CRM",
    color: "#00c875",
    hoverColor: "#00a862",
    icon: Users,
    useCases: {
      import: ["Contacts", "Leads", "Deals"],
      form: ["Lead Capture", "Contact Forms", "Quote Requests"],
      export: ["Contact Lists", "Pipeline Reports", "Sales Data"],
      mail: ["Follow-ups", "Deal Updates", "Welcome Emails"],
      signature: ["Sales Contracts", "NDAs", "Proposals"],
    },
  },
  {
    id: "dev",
    name: "Dev",
    color: "#784bd1",
    hoverColor: "#6a3fc4",
    icon: Code,
    useCases: {
      import: ["Issues", "Bugs", "Sprints"],
      form: ["Bug Reports", "Feature Requests", "Feedback"],
      export: ["Sprint Reports", "Bug Lists", "Release Notes"],
      mail: ["Bug Assignments", "Sprint Updates", "Release Alerts"],
      signature: ["Code Reviews", "Release Approvals", "Vendor Contracts"],
    },
  },
  {
    id: "service",
    name: "Service",
    color: "#ff5ac4",
    hoverColor: "#e54db0",
    icon: Headphones,
    useCases: {
      import: ["Tickets", "Customers", "SLAs"],
      form: ["Support Requests", "Feedback Forms", "CSAT Surveys"],
      export: ["Ticket Reports", "SLA Reports", "Customer Data"],
      mail: ["Ticket Updates", "Resolution Notices", "Survey Requests"],
      signature: ["Service Agreements", "SLA Documents", "Warranties"],
    },
  },
];

export const getProductById = (id: string): MondayProduct => {
  return mondayProducts.find((p) => p.id === id) || mondayProducts[0];
};
