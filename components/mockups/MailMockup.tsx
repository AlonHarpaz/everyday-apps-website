"use client";

import { motion } from "framer-motion";
import { Mail, User, Zap, Send, MousePointerClick, Eye } from "lucide-react";
import { MondayProduct } from "@/lib/products";

interface MailMockupProps {
  product?: MondayProduct;
  useCases?: string[];
}

// Email config based on product
const getMailConfig = (productId: string, useCases: string[]) => {
  const configs: Record<string, { trigger: string; subject: string; body: string }> = {
    "work-management": {
      trigger: 'Status changes to "Done"',
      subject: `Task Completed: {{Item Name}}`,
      body: "Great news! The task has been marked as complete.",
    },
    crm: {
      trigger: 'Deal stage changes to "Won"',
      subject: `Deal Closed: {{Item Name}}`,
      body: "Congratulations! The deal has been successfully closed.",
    },
    dev: {
      trigger: 'Bug status changes to "Fixed"',
      subject: `Bug Resolved: {{Item Name}}`,
      body: "The reported bug has been fixed and verified.",
    },
    service: {
      trigger: 'Ticket status changes to "Resolved"',
      subject: `Ticket Resolved: {{Item Name}}`,
      body: "Your support ticket has been resolved.",
    },
  };
  return configs[productId] || configs["work-management"];
};

export function MailMockup({ product, useCases }: MailMockupProps) {
  const productColor = product?.color || "#97AEFF";
  const config = getMailConfig(product?.id || "work-management", useCases || []);

  return (
    <div className="p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Left: Trigger & Settings */}
        <div className="space-y-5">
          {/* Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <Zap size={16} style={{ color: productColor }} />
              <p className="text-sm font-medium">Trigger</p>
            </div>
            <div
              className="p-4 bg-card rounded-lg border"
              style={{ borderColor: `${productColor}50` }}
            >
              <p className="text-xs text-muted-foreground mb-1">When</p>
              <p className="font-medium">{config.trigger}</p>
            </div>
          </motion.div>

          {/* Recipients */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2">
              <User size={16} style={{ color: productColor }} />
              <p className="text-sm font-medium">Recipients</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className="px-2 py-1 rounded text-xs"
                  style={{ backgroundColor: `${productColor}15`, color: productColor }}
                >
                  {"{{Owner}}"}
                </span>
                <span className="text-sm text-muted-foreground">Item owner</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs">
                  {"{{Creator}}"}
                </span>
                <span className="text-sm text-muted-foreground">Item creator</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-3"
          >
            {[
              { label: "Sent", value: "1,234", icon: Send },
              { label: "Opened", value: "89%", icon: Eye },
              { label: "Clicked", value: "34%", icon: MousePointerClick },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-3 bg-card rounded-lg border border-border text-center"
              >
                <stat.icon size={16} className="text-muted-foreground mx-auto mb-1" />
                <p className="text-lg font-semibold">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Email preview */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2">
            <Mail size={16} style={{ color: productColor }} />
            <p className="text-sm font-medium">Email Preview</p>
          </div>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="p-4 border-b border-border space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground w-16">To:</span>
                <span
                  className="px-2 py-0.5 rounded text-xs"
                  style={{ backgroundColor: `${productColor}15`, color: productColor }}
                >
                  {"{{Owner Email}}"}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground w-16">Subject:</span>
                <span>{config.subject}</span>
              </div>
            </div>
            <div className="p-4 text-sm text-muted-foreground space-y-3">
              <p>Hi {"{{Owner Name}}"},</p>
              <p>
                {config.body.split("{{Item Name}}")[0]}
                <span className="text-foreground font-medium">&quot;{"{{Item Name}}"}&quot;</span>
                {config.body.split("{{Item Name}}")[1] || ""}
              </p>
              <p>
                Updated by:{" "}
                <span className="text-foreground">{"{{Changed By}}"}</span>
              </p>
              <p className="text-muted-foreground/60 text-xs pt-2 border-t border-border mt-4">
                — Sent via Everyday Mail
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Save button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="w-full md:w-auto mt-8 px-8 py-3 text-white rounded-lg font-medium"
        style={{ backgroundColor: productColor }}
      >
        Save Automation
      </motion.button>
    </div>
  );
}
