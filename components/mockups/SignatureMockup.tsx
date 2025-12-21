"use client";

import { motion } from "framer-motion";
import { FileText, User, Check, PenTool, Clock } from "lucide-react";
import { MondayProduct } from "@/lib/products";

interface SignatureMockupProps {
  product?: MondayProduct;
  useCases?: string[];
}

// Signature config based on product
const getSignatureConfig = (productId: string, useCases: string[]) => {
  const configs: Record<string, { docName: string; signers: { name: string; email: string; status: "signed" | "pending" }[] }> = {
    "work-management": {
      docName: useCases[0] || "Project Contract.pdf",
      signers: [
        { name: "Project Manager", email: "pm@company.com", status: "signed" },
        { name: "Client Representative", email: "client@external.com", status: "pending" },
      ],
    },
    crm: {
      docName: useCases[0] || "Sales Agreement.pdf",
      signers: [
        { name: "Sales Rep", email: "sales@company.com", status: "signed" },
        { name: "Customer", email: "buyer@client.com", status: "pending" },
      ],
    },
    dev: {
      docName: useCases[0] || "Release Approval.pdf",
      signers: [
        { name: "Tech Lead", email: "lead@company.com", status: "signed" },
        { name: "QA Manager", email: "qa@company.com", status: "pending" },
      ],
    },
    service: {
      docName: useCases[0] || "Service Agreement.pdf",
      signers: [
        { name: "Support Manager", email: "support@company.com", status: "signed" },
        { name: "Customer", email: "customer@client.com", status: "pending" },
      ],
    },
  };
  return configs[productId] || configs["work-management"];
};

export function SignatureMockup({ product, useCases }: SignatureMockupProps) {
  const productColor = product?.color || "#97AEFF";
  const config = getSignatureConfig(product?.id || "work-management", useCases || []);

  return (
    <div className="p-6 space-y-5">
      {/* Document */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
      >
        <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
          <FileText className="text-red-500" size={20} />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{config.docName}</p>
          <p className="text-xs text-muted-foreground">2 pages - 3 signature fields</p>
        </div>
      </motion.div>

      {/* Signers */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-2"
      >
        <p className="text-sm font-medium">Signers</p>
        <div className="space-y-2">
          {config.signers.map((signer, i) => (
            <motion.div
              key={signer.email}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${productColor}15` }}
              >
                <User size={14} style={{ color: productColor }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{signer.name}</p>
                <p className="text-xs text-muted-foreground">{signer.email}</p>
              </div>
              <span
                className="text-xs flex items-center gap-1"
                style={{ color: signer.status === "signed" ? "#00c875" : "#fdab3d" }}
              >
                {signer.status === "signed" ? (
                  <>
                    <Check size={12} /> Signed
                  </>
                ) : (
                  <>
                    <Clock size={12} /> Pending
                  </>
                )}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Signature preview */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-2"
      >
        <p className="text-sm font-medium">Signature Preview</p>
        <div className="p-4 bg-card rounded-lg border border-dashed border-border flex items-center justify-center">
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            style={{ color: productColor }}
          >
            <svg width="120" height="40" viewBox="0 0 120 40">
              <motion.path
                d="M10 30 Q 30 10, 50 25 T 90 20 Q 100 15, 110 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Send button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="w-full py-2.5 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2"
        style={{ backgroundColor: productColor }}
      >
        <PenTool size={16} />
        Send for Signature
      </motion.button>
    </div>
  );
}
