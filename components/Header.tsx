"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSparkle } from "@/components/AnimatedSparkle";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg overflow-hidden"
    >
      {/* Cursor-following gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(151, 174, 255, 0.06), rgba(250, 161, 241, 0.04), transparent 40%)`,
        }}
      />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
        <Link href="/" className="relative flex items-center">
          <Image
            src="/logo.svg"
            alt="Everyday Apps"
            width={180}
            height={40}
            priority
          />
          <AnimatedSparkle className="absolute top-0 -right-2" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            href="/apps"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Apps
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/partners"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Partners
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            href="/apps"
            className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 group"
          >
            {/* Gradient border */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF] p-[1px]">
              <span className="absolute inset-[1px] rounded-[7px] bg-background" />
            </span>
            {/* Text with gradient on hover */}
            <span className="relative bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF] bg-clip-text text-transparent">
              View Apps
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
