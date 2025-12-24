"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    $crisp: unknown[];
  }
}

export default function ContactPage() {
  const openChat = () => {
    if (typeof window !== "undefined" && window.$crisp) {
      window.$crisp.push(["do", "chat:open"]);
    }
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have questions? We&apos;d love to hear from you. Reach out to us
            and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-xl bg-card/50 border border-border/50 p-8">
            <div className="text-center py-8">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-[#FAA1F1]" size={32} />
              </div>
              <h2 className="text-2xl font-light mb-3">Chat with us</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Our support team is here to help. Start a conversation and we&apos;ll respond as quickly as possible.
              </p>
              <Button
                onClick={openChat}
                size="lg"
                className="bg-gradient-to-r from-[#6B8AFF] via-[#E871D8] to-[#6161FF] hover:opacity-90 border-0 text-white px-8"
              >
                <MessageCircle className="mr-2" size={20} />
                Start a Conversation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
