"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;

      if (scrollPercentage >= 50) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position in case user refreshes mid-page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
    // Notify other components that consent was given
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setIsVisible(false);
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:right-auto md:left-6 md:max-w-md z-50 rounded-2xl bg-[#1a1a3e] shadow-2xl"
        >
          <div className="p-8 relative">
            {/* Close button */}
            <button
              onClick={acceptNecessary}
              className="absolute top-4 right-4 text-[#6161FF] hover:text-[#6161FF]/80 transition-colors"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <p className="text-white/90 text-base leading-relaxed mb-8 pr-6">
              This website uses cookies and tracking tools to improve your experience and analyze site performance. We share usage data with social media, advertising, and analytics partners. If an opt-out signal is detected, we will honor it. Learn more in our{" "}
              <Link href="/privacy" className="text-[#6161FF] hover:text-[#6161FF]/80 underline">
                Privacy Policy.
              </Link>
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button
                onClick={acceptAll}
                className="w-full bg-[#FAA1F1] hover:bg-[#FAA1F1]/90 text-black font-medium py-6 rounded-full text-base"
              >
                Acknowledge
              </Button>
              <button
                onClick={acceptNecessary}
                className="text-white underline hover:text-white/80 transition-colors"
              >
                Cookies Settings
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
