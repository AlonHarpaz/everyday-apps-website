"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Lock, Shield, Activity } from "lucide-react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative border-t border-border/40 bg-card/50 overflow-hidden"
    >
      {/* Cursor-following gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(151, 174, 255, 0.04), rgba(250, 161, 241, 0.03), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="Everyday Apps"
              width={180}
              height={40}
            />
            <p className="text-sm text-muted-foreground">
              Building powerful apps for the monday.com ecosystem.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/monday-certified-partner.svg"
              alt="monday.com Certified Partner"
              width={180}
              height={48}
              className="mt-4"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-4">Apps</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/apps/everyday-import" className="hover:text-foreground transition-colors">
                  Everyday Import
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground/60">Everyday Form (Soon)</span>
              </li>
              <li>
                <span className="text-muted-foreground/60">Everyday Export (Soon)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-foreground transition-colors">
                  Partner Program
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Security</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Lock size={14} className="text-secondary" />
                Hosted on monday.com
              </li>
              <li className="flex items-center gap-2">
                <Shield size={14} className="text-secondary" />
                SOC 2 Compliant
              </li>
              <li className="flex items-center gap-2">
                <Check size={14} className="text-secondary" />
                GDPR Ready
              </li>
              <li className="mt-3">
                <a
                  href="https://status.everyday-m.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  System Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Everyday Apps. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <a
              href="https://status.everyday-m.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              <Activity size={14} />
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
