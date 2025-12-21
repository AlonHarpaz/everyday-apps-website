"use client";

import { motion } from "framer-motion";
import { Type, Mail, List, Calendar, ChevronDown, Image, ToggleLeft, Hash } from "lucide-react";
import { MondayProduct } from "@/lib/products";

interface FormMockupProps {
  product?: MondayProduct;
  useCases?: string[];
}

// Form titles based on product
const getFormConfig = (productId: string, useCases: string[]) => {
  const configs: Record<string, { title: string; subtitle: string; fields: { label: string; placeholder: string }[] }> = {
    "work-management": {
      title: useCases[0] || "Request Form",
      subtitle: "Submit your request and we'll process it",
      fields: [
        { label: "Request Title *", placeholder: "Enter request title" },
        { label: "Requester Email *", placeholder: "Enter your email" },
        { label: "Department", placeholder: "Select department" },
        { label: "Priority", placeholder: "Select priority" },
      ],
    },
    crm: {
      title: useCases[0] || "Lead Capture",
      subtitle: "Fill out the form and we'll get back to you",
      fields: [
        { label: "Full Name *", placeholder: "Enter your name" },
        { label: "Email *", placeholder: "Enter your email" },
        { label: "Company", placeholder: "Your company name" },
        { label: "Budget Range", placeholder: "Select budget" },
      ],
    },
    dev: {
      title: useCases[0] || "Bug Report",
      subtitle: "Report an issue or request a feature",
      fields: [
        { label: "Issue Title *", placeholder: "Describe the issue" },
        { label: "Reporter Email *", placeholder: "Enter your email" },
        { label: "Severity", placeholder: "Select severity" },
        { label: "Component", placeholder: "Affected component" },
      ],
    },
    service: {
      title: useCases[0] || "Support Request",
      subtitle: "Submit a ticket and we'll help you",
      fields: [
        { label: "Subject *", placeholder: "Brief description" },
        { label: "Email *", placeholder: "Enter your email" },
        { label: "Category", placeholder: "Select category" },
        { label: "Urgency", placeholder: "Select urgency" },
      ],
    },
  };
  return configs[productId] || configs["work-management"];
};

export function FormMockup({ product, useCases }: FormMockupProps) {
  const productColor = product?.color || "#97AEFF";
  const config = getFormConfig(product?.id || "work-management", useCases || []);

  return (
    <div className="flex">
      {/* Sidebar - Field types */}
      <div className="w-20 md:w-24 bg-card border-r border-border p-3 space-y-2">
        <p className="text-[10px] text-muted-foreground font-medium mb-3 hidden md:block">FIELDS</p>
        {[
          { icon: Type, label: "Text" },
          { icon: Mail, label: "Email" },
          { icon: Hash, label: "Number" },
          { icon: List, label: "Select" },
          { icon: Calendar, label: "Date" },
          { icon: Image, label: "File" },
          { icon: ToggleLeft, label: "Toggle" },
        ].map((field, i) => (
          <motion.div
            key={field.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="p-2 rounded bg-background cursor-pointer transition-colors flex flex-col items-center gap-1"
            style={{
              backgroundColor: i === 0 ? `${productColor}15` : undefined
            }}
          >
            <field.icon
              size={16}
              style={{ color: i === 0 ? productColor : "#9ca3af" }}
            />
            <span
              className="text-[10px]"
              style={{ color: i === 0 ? productColor : "#9ca3af" }}
            >
              {field.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Form preview */}
      <div className="flex-1 p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-1">{config.title}</h3>
          <p className="text-sm text-muted-foreground">{config.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {config.fields.map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="space-y-1.5"
            >
              <label className="text-sm font-medium">{field.label}</label>
              <div className="h-10 bg-card border border-border rounded-md px-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{field.placeholder}</span>
                {field.label.includes("Select") || field.label.includes("Priority") || field.label.includes("Severity") || field.label.includes("Category") || field.label.includes("Urgency") || field.label.includes("Budget") || field.label.includes("Component") ? (
                  <ChevronDown size={16} className="text-muted-foreground" />
                ) : null}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-1.5 md:col-span-2"
          >
            <label className="text-sm font-medium">Description</label>
            <div className="h-24 bg-card border border-border rounded-md px-3 py-2">
              <span className="text-sm text-muted-foreground">Provide more details...</span>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-full md:w-auto mt-6 px-8 py-2.5 text-white rounded-md text-sm font-medium"
          style={{ backgroundColor: productColor }}
        >
          Submit Form
        </motion.button>
      </div>
    </div>
  );
}
