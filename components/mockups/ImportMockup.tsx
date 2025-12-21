"use client";

import { motion } from "framer-motion";
import { Upload, FileSpreadsheet, ArrowRight, Check, Table } from "lucide-react";
import { MondayProduct } from "@/lib/products";

interface ImportMockupProps {
  product?: MondayProduct;
  useCases?: string[];
}

// File name mapping based on product use cases
const getFileName = (useCases: string[]): string => {
  const name = useCases[0]?.toLowerCase() || "data";
  return `${name}.xlsx`;
};

// Board name mapping based on product
const getBoardName = (product: MondayProduct, useCases: string[]): string => {
  return `${product.name} ${useCases[0] || "Board"}`;
};

// Column mappings based on product type
const getColumnMappings = (productId: string) => {
  const mappings: Record<string, { from: string; to: string }[]> = {
    "work-management": [
      { from: "Project Name", to: "Item Name" },
      { from: "Owner", to: "Person" },
      { from: "Status", to: "Status" },
      { from: "Due Date", to: "Date" },
      { from: "Priority", to: "Priority" },
    ],
    crm: [
      { from: "Name", to: "Item Name" },
      { from: "Email", to: "Email" },
      { from: "Status", to: "Status" },
      { from: "Due Date", to: "Date" },
      { from: "Company", to: "Text" },
    ],
    dev: [
      { from: "Issue Title", to: "Item Name" },
      { from: "Assignee", to: "Person" },
      { from: "Priority", to: "Priority" },
      { from: "Sprint", to: "Dropdown" },
      { from: "Story Points", to: "Numbers" },
    ],
    service: [
      { from: "Ticket Title", to: "Item Name" },
      { from: "Customer", to: "Text" },
      { from: "Priority", to: "Priority" },
      { from: "SLA Due", to: "Date" },
      { from: "Agent", to: "Person" },
    ],
  };
  return mappings[productId] || mappings["work-management"];
};

export function ImportMockup({ product, useCases }: ImportMockupProps) {
  const productColor = product?.color || "#97AEFF";
  const fileName = useCases ? getFileName(useCases) : "contacts.xlsx";
  const boardName = product && useCases ? getBoardName(product, useCases) : "CRM Contacts";
  const columnMappings = getColumnMappings(product?.id || "crm");

  return (
    <div className="p-6 md:p-8">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-2 md:gap-4 text-xs mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-medium">
            <Check size={14} />
          </div>
          <span className="text-muted-foreground hidden sm:inline">Upload</span>
        </motion.div>
        <div className="w-8 md:w-16 h-px bg-border" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2"
        >
          <div
            className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white font-medium text-xs"
            style={{ backgroundColor: productColor }}
          >
            2
          </div>
          <span className="text-foreground font-medium hidden sm:inline">Map Columns</span>
        </motion.div>
        <div className="w-8 md:w-16 h-px bg-border" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-2"
        >
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-medium text-xs">
            3
          </div>
          <span className="text-muted-foreground hidden sm:inline">Import</span>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Left: File & Board info */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <FileSpreadsheet className="text-green-500" size={24} />
            </div>
            <div className="flex-1">
              <p className="font-medium">{fileName}</p>
              <p className="text-sm text-muted-foreground">156 rows - 8 columns</p>
            </div>
            <Check className="text-secondary" size={20} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 p-4 bg-card rounded-lg border"
            style={{ borderColor: `${productColor}80` }}
          >
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${productColor}15` }}
            >
              <Table style={{ color: productColor }} size={24} />
            </div>
            <div className="flex-1">
              <p className="font-medium">{boardName}</p>
              <p className="text-sm text-muted-foreground">Target board</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Column mapping */}
        <div className="space-y-3">
          <p className="text-sm font-medium">Column Mapping</p>
          <div className="space-y-2">
            {columnMappings.map((mapping, i) => (
              <motion.div
                key={mapping.from}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 p-3 bg-card rounded border border-border"
              >
                <div className="flex-1 text-sm">
                  <span className="text-muted-foreground">{mapping.from}</span>
                </div>
                <ArrowRight size={14} className="text-muted-foreground" />
                <div className="flex-1 text-sm">
                  <span className="text-foreground">{mapping.to}</span>
                </div>
                <Check size={16} className="text-secondary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Import button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="w-full mt-8 py-3 text-white rounded-lg font-medium transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
        style={{ backgroundColor: productColor }}
      >
        <Upload size={18} />
        Start Import
      </motion.button>
    </div>
  );
}
