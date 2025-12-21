"use client";

import { motion } from "framer-motion";
import { FileText, Table, FileSpreadsheet, Check, Download, Filter } from "lucide-react";
import { MondayProduct } from "@/lib/products";

interface ExportMockupProps {
  product?: MondayProduct;
  useCases?: string[];
}

// Board and columns based on product
const getExportConfig = (productId: string, useCases: string[]) => {
  const configs: Record<string, { boardName: string; itemCount: number; columns: string[] }> = {
    "work-management": {
      boardName: useCases[0] || "Project Tasks",
      itemCount: 248,
      columns: ["Name", "Status", "Owner", "Due Date", "Priority", "Timeline"],
    },
    crm: {
      boardName: useCases[0] || "Contact List",
      itemCount: 1250,
      columns: ["Name", "Email", "Company", "Status", "Deal Value", "Last Contact"],
    },
    dev: {
      boardName: useCases[0] || "Sprint Backlog",
      itemCount: 86,
      columns: ["Issue", "Priority", "Assignee", "Sprint", "Story Points", "Status"],
    },
    service: {
      boardName: useCases[0] || "Support Tickets",
      itemCount: 432,
      columns: ["Ticket", "Customer", "Priority", "SLA Due", "Agent", "Status"],
    },
  };
  return configs[productId] || configs["work-management"];
};

export function ExportMockup({ product, useCases }: ExportMockupProps) {
  const productColor = product?.color || "#97AEFF";
  const config = getExportConfig(product?.id || "work-management", useCases || []);

  return (
    <div className="p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Left column */}
        <div className="space-y-5">
          {/* Board selection */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-sm font-medium">Select Board</p>
            <div
              className="p-4 bg-card rounded-lg border flex items-center gap-3"
              style={{ borderColor: productColor }}
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center"
                style={{ backgroundColor: `${productColor}15` }}
              >
                <Table size={20} style={{ color: productColor }} />
              </div>
              <div className="flex-1">
                <p className="font-medium">{config.boardName}</p>
                <p className="text-sm text-muted-foreground">{config.itemCount} items - {config.columns.length} columns</p>
              </div>
              <Check size={18} style={{ color: productColor }} />
            </div>
          </motion.div>

          {/* Export format */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-sm font-medium">Export Format</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { icon: FileSpreadsheet, label: "Excel", ext: ".xlsx", selected: true },
                { icon: FileText, label: "CSV", ext: ".csv", selected: false },
                { icon: FileText, label: "PDF", ext: ".pdf", selected: false },
              ].map((format, i) => (
                <motion.div
                  key={format.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-3 rounded-lg border cursor-pointer transition-colors text-center"
                  style={{
                    backgroundColor: format.selected ? `${productColor}15` : undefined,
                    borderColor: format.selected ? productColor : undefined,
                  }}
                >
                  <format.icon
                    size={24}
                    className="mx-auto mb-1"
                    style={{ color: format.selected ? productColor : "#9ca3af" }}
                  />
                  <p
                    className="text-sm font-medium"
                    style={{ color: format.selected ? productColor : undefined }}
                  >
                    {format.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{format.ext}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          {/* Columns to export */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Columns to Export</p>
              <span className="text-xs text-muted-foreground">5 selected</span>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border space-y-2">
              {config.columns.map((col, i) => (
                <motion.div
                  key={col}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div
                    className="w-4 h-4 rounded border flex items-center justify-center"
                    style={{
                      backgroundColor: i < 5 ? productColor : undefined,
                      borderColor: i < 5 ? productColor : undefined,
                    }}
                  >
                    {i < 5 && <Check size={10} className="text-white" />}
                  </div>
                  <span className="text-sm">{col}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="p-4 bg-card rounded-lg border border-border"
          >
            <div className="flex items-center gap-2 text-sm">
              <Filter size={14} className="text-muted-foreground" />
              <span className="text-muted-foreground">Filter:</span>
              <span
                className="px-2 py-0.5 rounded text-xs"
                style={{ backgroundColor: `${productColor}15`, color: productColor }}
              >
                Status = Done
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Export button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="w-full md:w-auto mt-8 px-8 py-3 text-white rounded-lg font-medium flex items-center justify-center gap-2"
        style={{ backgroundColor: productColor }}
      >
        <Download size={18} />
        Export to Excel
      </motion.button>
    </div>
  );
}
