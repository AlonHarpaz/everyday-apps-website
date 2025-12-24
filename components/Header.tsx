"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatedSparkle } from "@/components/AnimatedSparkle";
import { AppIcon } from "@/components/AppIcon";

const products = [
  {
    name: "Everyday Import",
    slug: "everyday-import",
    description: "Import CSV & Excel files with smart mapping",
    icon: "import",
    isLive: true,
  },
  {
    name: "Everyday Export",
    slug: "everyday-export",
    description: "Export boards to CSV, Excel, PDF formats",
    icon: "export",
    isLive: true,
  },
  {
    name: "Everyday Form",
    slug: "everyday-form",
    description: "Create forms that feed into your boards",
    icon: "form",
    isLive: true,
  },
  {
    name: "Everyday Sync",
    slug: "everyday-sync",
    description: "Two-way sync with Google Sheets & more",
    icon: "connect",
    isLive: true,
  },
];

const solutions = [
  { name: "Data Migration", href: "/apps/everyday-import" },
  { name: "Workflow Automation", href: "/apps" },
  { name: "Reporting & Analytics", href: "/apps/everyday-export" },
  { name: "Team Collaboration", href: "/apps" },
  { name: "External Data Collection", href: "/apps/everyday-form" },
];

const resources = [
  { name: "Documentation", href: "/docs" },
  { name: "Getting Started", href: "/docs/everyday-import" },
  { name: "API Reference", href: "/docs" },
  { name: "Blog", href: "/about" },
  { name: "Support", href: "/contact" },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header
      ref={headerRef}
      onMouseMove={handleMouseMove}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg overflow-visible"
    >
      {/* Cursor-following gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(151, 174, 255, 0.06), rgba(250, 161, 241, 0.04), transparent 40%)`,
        }}
      />

      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8 lg:px-12 max-w-7xl relative">
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

        <nav ref={navRef} className="hidden md:flex items-center space-x-1">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("products")}
              className="flex items-center gap-1 px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all">
              Products
              <ChevronDown size={16} className={`transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "products" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] rounded-2xl bg-card border border-border/50 shadow-2xl overflow-hidden">
                <div className="flex">
                  {/* Left side - Categories */}
                  <div className="w-[280px] p-6 border-r border-border/50 bg-card/50">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Categories</h3>
                    <div className="space-y-1">
                      <Link href="/apps" onClick={() => setOpenDropdown(null)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group">
                        <AppIcon icon="import" size={20} className="text-[#FAA1F1]" />
                        <span className="text-sm">Data Import & Export</span>
                      </Link>
                      <Link href="/apps" onClick={() => setOpenDropdown(null)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group">
                        <AppIcon icon="form" size={20} className="text-[#FAA1F1]" />
                        <span className="text-sm">Forms & Data Collection</span>
                      </Link>
                      <Link href="/apps" onClick={() => setOpenDropdown(null)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group">
                        <AppIcon icon="connect" size={20} className="text-[#FAA1F1]" />
                        <span className="text-sm">Integrations & Sync</span>
                      </Link>
                      <Link href="/apps" onClick={() => setOpenDropdown(null)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group">
                        <AppIcon icon="dashboard" size={20} className="text-[#FAA1F1]" />
                        <span className="text-sm">Analytics & Reporting</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right side - Products */}
                  <div className="flex-1 p-6">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-4">Our Apps</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/apps/${product.slug}`}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group"
                        >
                          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center flex-shrink-0 border border-white/10">
                            <AppIcon icon={product.icon} size={24} className="text-[#FAA1F1]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm group-hover:text-foreground">{product.name}</span>
                              {product.isLive && (
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border/50 px-6 py-4 bg-card/30 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Explore all our monday.com apps</span>
                  <div className="flex items-center gap-4">
                    <Link href="/apps" onClick={() => setOpenDropdown(null)} className="text-sm font-medium hover:text-[#FAA1F1] transition-colors">
                      View All Apps →
                    </Link>
                    <Link href="/contact" onClick={() => setOpenDropdown(null)} className="text-sm font-medium text-[#FAA1F1] hover:text-[#FAA1F1]/80 transition-colors">
                      Contact Sales →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("solutions")}
              className="flex items-center gap-1 px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all">
              Solutions
              <ChevronDown size={16} className={`transition-transform ${openDropdown === "solutions" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "solutions" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-2xl bg-card border border-border/50 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Solutions by Use Case</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center">
                          <AppIcon icon="connect" size={20} className="text-[#FAA1F1]" />
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border/50 px-6 py-4 bg-card/30">
                  <Link href="/contact" onClick={() => setOpenDropdown(null)} className="text-sm font-medium text-[#FAA1F1] hover:text-[#FAA1F1]/80 transition-colors">
                    Need a custom solution? Contact us →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all"
          >
            Pricing
          </Link>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("resources")}
              className="flex items-center gap-1 px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all">
              Resources
              <ChevronDown size={16} className={`transition-transform ${openDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "resources" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] rounded-2xl bg-card border border-border/50 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Resources & Support</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center">
                          <AppIcon icon="form" size={20} className="text-[#FAA1F1]" />
                        </div>
                        <span className="text-sm font-medium">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border/50 px-6 py-4 bg-card/30">
                  <Link href="/contact" onClick={() => setOpenDropdown(null)} className="text-sm font-medium text-[#FAA1F1] hover:text-[#FAA1F1]/80 transition-colors">
                    Can't find what you need? Get help →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="flex items-center gap-1 px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all">
              Company
              <ChevronDown size={16} className={`transition-transform ${openDropdown === "company" ? "rotate-180" : ""}`} />
            </button>

            {openDropdown === "company" && (
              <div className="absolute top-full right-0 mt-2 w-[400px] rounded-2xl bg-card border border-border/50 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-4">Company</h3>
                  <div className="space-y-1">
                    <Link href="/about" onClick={() => setOpenDropdown(null)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center">
                        <AppIcon icon="dashboard" size={20} className="text-[#FAA1F1]" />
                      </div>
                      <div>
                        <span className="text-sm font-medium block">About Us</span>
                        <span className="text-xs text-muted-foreground">Learn about our mission</span>
                      </div>
                    </Link>
                    <Link href="/partners" onClick={() => setOpenDropdown(null)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center">
                        <AppIcon icon="connect" size={20} className="text-[#FAA1F1]" />
                      </div>
                      <div>
                        <span className="text-sm font-medium block">Partners</span>
                        <span className="text-xs text-muted-foreground">Join our partner program</span>
                      </div>
                    </Link>
                    <Link href="/contact" onClick={() => setOpenDropdown(null)} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#97AEFF]/20 to-[#FAA1F1]/20 flex items-center justify-center">
                        <AppIcon icon="mail" size={20} className="text-[#FAA1F1]" />
                      </div>
                      <div>
                        <span className="text-sm font-medium block">Contact</span>
                        <span className="text-xs text-muted-foreground">Get in touch with us</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Gradient border button */}
          <div className="relative p-[2px] rounded-full bg-gradient-to-r from-[#97AEFF] via-[#FAA1F1] to-[#6161FF] hover:opacity-80 transition-opacity">
            <Link
              href="/apps"
              className="block px-5 py-2 rounded-full bg-background text-sm font-medium text-white hover:bg-background/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
