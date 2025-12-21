"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                We use cookies to ensure you have the best experience on our site, to analyze traffic, and enhance our marketing activities.{" "}
                <Link href="/privacy" className="text-foreground underline hover:no-underline">
                  Cookie Policy
                </Link>{" "}
                <Link href="/terms" className="text-foreground underline hover:no-underline">
                  Terms of Service
                </Link>
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessary}
                  className="whitespace-nowrap"
                >
                  Accept necessary cookies only
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={acceptNecessary}
                  className="whitespace-nowrap"
                >
                  Cookie settings
                </Button>
                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="whitespace-nowrap bg-[#00CA72] hover:bg-[#00b066] text-white"
                >
                  Accept all cookies
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
