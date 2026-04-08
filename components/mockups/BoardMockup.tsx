"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { MondayProduct } from "@/lib/products";

interface BoardMockupProps {
  product?: MondayProduct;
  useCases?: string[];
}

// Get board columns based on product type
const getBoardColumns = (productId: string) => {
  const columns: Record<string, string[]> = {
    "work-management": ["Item", "Owner", "Status", "Due Date"],
    crm: ["Item", "Contact", "Status", "Value"],
    dev: ["Item", "Assignee", "Priority", "Sprint"],
    service: ["Item", "Customer", "Priority", "SLA"],
  };
  return columns[productId] || columns["work-management"];
};

// Get group names based on product type
const getGroups = (productId: string): { name: string; color: string; rows: number }[] => {
  const groups: Record<string, { name: string; color: string; rows: number }[]> = {
    "work-management": [
      { name: "Active Projects", color: "#579BFC", rows: 4 },
      { name: "Completed", color: "#00C875", rows: 1 },
    ],
    crm: [
      { name: "New Leads", color: "#579BFC", rows: 4 },
      { name: "Closed Won", color: "#00C875", rows: 1 },
    ],
    dev: [
      { name: "In Progress", color: "#579BFC", rows: 4 },
      { name: "Done", color: "#00C875", rows: 1 },
    ],
    service: [
      { name: "Open Tickets", color: "#579BFC", rows: 4 },
      { name: "Resolved", color: "#00C875", rows: 1 },
    ],
  };
  return groups[productId] || groups["work-management"];
};

export function BoardMockup({ product }: BoardMockupProps) {
  const productId = product?.id || "work-management";
  const columns = getBoardColumns(productId);
  const groups = getGroups(productId);

  return (
    <div className="bg-[#1a1a2e] rounded-lg border border-border/50 overflow-hidden">
      {/* Board header */}
      <div className="px-4 py-3 border-b border-border/30">
        <div className="h-3 w-32 bg-muted-foreground/30 rounded" />
      </div>

      {/* Board content */}
      <div className="p-2">
        {groups.map((group, groupIndex) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.15 }}
            className="mb-4 last:mb-0"
          >
            {/* Group header */}
            <div className="flex items-center gap-2 mb-2 px-1">
              <div
                className="h-4 w-1 rounded-full"
                style={{ backgroundColor: group.color }}
              />
              <div
                className="h-2.5 w-24 rounded"
                style={{ backgroundColor: group.color }}
              />
            </div>

            {/* Table */}
            <div
              className="rounded-lg overflow-hidden border-l-[3px]"
              style={{ borderColor: group.color }}
            >
              {/* Header row */}
              <div className="flex bg-card/80 border-b border-border/30">
                {columns.map((col, colIndex) => (
                  <div
                    key={col}
                    className={`flex-1 px-3 py-2 text-xs text-muted-foreground/70 ${
                      colIndex === 0 ? "flex-[1.5]" : ""
                    }`}
                  >
                    <div className="h-2 w-full max-w-[60px] bg-muted-foreground/20 rounded" />
                  </div>
                ))}
                <div className="w-8 px-2 py-2 flex items-center justify-center">
                  <Plus size={12} className="text-muted-foreground/40" />
                </div>
              </div>

              {/* Data rows */}
              {Array.from({ length: group.rows }).map((_, rowIndex) => (
                <motion.div
                  key={rowIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: groupIndex * 0.15 + rowIndex * 0.05 + 0.2 }}
                  className="flex bg-card/50 border-b border-border/20 last:border-b-0 hover:bg-card/70 transition-colors"
                >
                  {columns.map((_, colIndex) => (
                    <div
                      key={colIndex}
                      className={`flex-1 px-3 py-2.5 ${
                        colIndex === 0 ? "flex-[1.5]" : ""
                      }`}
                    >
                      <div
                        className="h-2 bg-muted-foreground/15 rounded"
                        style={{
                          width: colIndex === 0 ? "80%" : `${50 + Math.random() * 30}%`,
                        }}
                      />
                    </div>
                  ))}
                  <div className="w-8" />
                </motion.div>
              ))}

              {/* Add item row */}
              <div className="flex items-center gap-2 px-3 py-2 bg-card/30 text-xs text-muted-foreground/50 hover:bg-card/50 transition-colors cursor-pointer">
                <Plus size={12} />
                <span className="text-[10px]">Add item</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
