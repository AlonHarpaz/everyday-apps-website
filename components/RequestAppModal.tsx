"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Lightbulb, Gift, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RequestAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestAppModal({ isOpen, onClose }: RequestAppModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appIdea: "",
    problem: "",
    wantsCommission: true,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call - replace with actual submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setTimeout(() => {
      onClose();
      setStatus("idle");
      setFormData({ name: "", email: "", appIdea: "", problem: "", wantsCommission: true });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 p-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative p-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#97AEFF] to-[#FAA1F1] flex items-center justify-center">
                    <Lightbulb size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-light">Request an App</h2>
                    <p className="text-sm text-muted-foreground">Tell us about your idea</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Commission Program Banner */}
              <div className="mx-6 mt-6 p-4 rounded-xl bg-gradient-to-r from-[#97AEFF]/10 via-[#E871D8]/10 to-[#6161FF]/10 border border-[#FAA1F1]/20">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#97AEFF] to-[#FAA1F1] flex items-center justify-center shrink-0">
                    <Percent size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1 flex items-center gap-2">
                      Earn Commission
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#FAA1F1]/20 text-[#FAA1F1]">New</span>
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Submit your app idea and if we build it, you'll earn a <span className="text-[#FAA1F1] font-medium">$100 one-time commission</span> once the app generates revenue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center mx-auto mb-4">
                      <Gift size={28} className="text-[#FAA1F1]" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">You're In!</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Thanks for sharing your idea. We'll review it and get back to you soon.
                    </p>
                    <p className="text-xs text-[#FAA1F1]/80 bg-[#FAA1F1]/10 px-3 py-2 rounded-lg inline-block">
                      If we build your app, you'll earn $100 once it generates revenue
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FAA1F1]/50 focus:border-[#FAA1F1]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@company.com"
                          className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FAA1F1]/50 focus:border-[#FAA1F1]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">App Idea</label>
                      <input
                        type="text"
                        required
                        value={formData.appIdea}
                        onChange={(e) => setFormData({ ...formData, appIdea: e.target.value })}
                        placeholder="e.g., Time tracking with Slack integration"
                        className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FAA1F1]/50 focus:border-[#FAA1F1]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">What problem does it solve?</label>
                      <textarea
                        required
                        value={formData.problem}
                        onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                        placeholder="Describe the workflow or pain point you're trying to address..."
                        rows={4}
                        className="w-full px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#FAA1F1]/50 focus:border-[#FAA1F1] resize-none"
                      />
                    </div>

                    {/* Commission Opt-in */}
                    <label className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border cursor-pointer hover:border-[#FAA1F1]/30 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.wantsCommission}
                        onChange={(e) => setFormData({ ...formData, wantsCommission: e.target.checked })}
                        className="mt-0.5 h-4 w-4 rounded border-border text-[#FAA1F1] focus:ring-[#FAA1F1]/50"
                      />
                      <div>
                        <span className="text-sm font-medium flex items-center gap-2">
                          I want to earn commission
                          <Gift size={14} className="text-[#FAA1F1]" />
                        </span>
                        <span className="text-xs text-muted-foreground block mt-0.5">
                          If this app goes public, I'll receive $100
                        </span>
                      </div>
                    </label>

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-[#97AEFF] via-[#E871D8] to-[#6161FF] hover:opacity-90 text-white border-0"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={16} />
                          Submit Request
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We review all requests and prioritize based on community demand.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
