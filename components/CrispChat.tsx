"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

export function CrispChat() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check for consent
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent === "all") {
        setHasConsent(true);
      }
    };

    // Initial check
    checkConsent();

    // Listen for consent changes
    const handleStorageChange = () => {
      checkConsent();
    };

    window.addEventListener("storage", handleStorageChange);

    // Custom event for same-tab updates
    window.addEventListener("cookie-consent-updated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cookie-consent-updated", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (hasConsent && typeof window !== "undefined") {
      // Load Crisp
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "60dfdb2e-dd05-4e28-b98a-7c88c7f4b9e1";

      const script = document.createElement("script");
      script.src = "https://client.crisp.chat/l.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, [hasConsent]);

  return null;
}
