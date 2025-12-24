"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call - replace with actual newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(0, 210, 210, 0.3) 0%, rgba(150, 120, 255, 0.3) 50%, rgba(250, 161, 241, 0.3) 100%)",
        }}
      >
        <div className="py-20 px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6 text-foreground">
            Subscribe for updates
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Keep up on all the latest: news, product updates, events, guides, resources, and more.
          </p>

          {status === "success" ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-400 font-medium text-lg"
            >
              Thanks for subscribing!
            </motion.p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your-email@example.com"
                required
                className="flex-1 px-6 py-4 text-base rounded-full bg-background/80 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="px-12 py-5 text-lg rounded-full bg-primary hover:bg-primary/90 text-white font-medium h-auto"
              >
                {status === "loading" ? "..." : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
      </div>
    </section>
  );
}
