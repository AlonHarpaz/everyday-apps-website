"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { apps } from "@/lib/apps";
import { AppType, MondayProduct } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AppIconWithBorder } from "@/components/AppIcon";
import {
  ImportMockup,
  FormMockup,
  ExportMockup,
  MailMockup,
  SignatureMockup,
  MockupWithProducts,
} from "@/components/mockups";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Rocket,
  Shield,
  Lock,
} from "lucide-react";

// Map slugs to app types for the product sidebar
const appTypeMap: Record<string, AppType> = {
  "everyday-import": "import",
  "everyday-form": "form",
  "everyday-export": "export",
  "everyday-mail": "mail",
  "everyday-signature": "signature",
};

// Map slugs to mockup components
const mockupComponentMap: Record<string, React.ComponentType<{ product?: MondayProduct; useCases?: string[] }>> = {
  "everyday-import": ImportMockup,
  "everyday-form": FormMockup,
  "everyday-export": ExportMockup,
  "everyday-mail": MailMockup,
  "everyday-signature": SignatureMockup,
};

export default function AppPage() {
  const params = useParams();
  const slug = params.slug as string;
  const app = apps.find((a) => a.slug === slug);

  if (!app) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-light mb-4">App Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The app you&apos;re looking for doesn&apos;t exist.
        </p>
        <Button asChild>
          <Link href="/apps">View All Apps</Link>
        </Button>
      </div>
    );
  }

  const isLive = app.status === "live";
  const appType = appTypeMap[slug];
  const MockupComponent = mockupComponentMap[slug];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/apps"
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Apps
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-start gap-6 mb-6">
            <AppIconWithBorder icon={app.icon} size="xl" />
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl md:text-5xl font-light">{app.name}</h1>
                <Badge
                  variant={isLive ? "default" : "secondary"}
                  className={
                    isLive
                      ? "bg-[#FAA1F1]/10 text-[#FAA1F1] border border-[#FAA1F1]/20"
                      : "bg-accent/20 text-accent border border-accent/30"
                  }
                >
                  {isLive && (
                    <span className="relative flex h-2 w-2 mr-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  )}
                  {isLive ? "Live" : "Coming Soon"}
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground">{app.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Mockup Section with Product Sidebar */}
        {MockupComponent && appType && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <div className="max-w-4xl mx-auto">
              <MockupWithProducts appType={appType}>
                {({ product, useCases }) => (
                  <MockupComponent product={product} useCases={useCases} />
                )}
              </MockupWithProducts>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-2"
          >
            {/* About */}
            <Card className="bg-card/50 border-border/50 mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {app.longDescription}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-6">Features</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {app.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="text-secondary mt-1 flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Card className="bg-card/50 border-border/50 sticky top-24">
              <CardContent className="pt-6">
                {isLive ? (
                  <>
                    <h3 className="text-xl font-semibold mb-4">
                      Get {app.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Available now on the monday.com marketplace. Install it
                      directly to your workspace.
                    </p>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      <Link
                        href={app.marketplaceUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Marketplace
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold mb-4">
                      Join the Waiting List
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Be the first to know when {app.name} launches. Get early
                      access and exclusive updates.
                    </p>

                    {/* Waiting list form */}
                    <div className="space-y-4">
                      <div className="rounded-xl bg-background/50 border border-border/50 p-6 text-center">
                        <Rocket className="mx-auto mb-3 text-primary" size={32} />
                        <p className="text-sm text-muted-foreground mb-4">
                          Join our waiting list to get notified when we launch
                        </p>
                        {/* Placeholder for monday form embed */}
                        <p className="text-xs text-muted-foreground">
                          monday.com form will be embedded here
                        </p>
                      </div>

                    </div>
                  </>
                )}

                {/* Trust badges */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Lock size={14} className="text-secondary" />
                    <span>Runs on monday.com servers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield size={14} className="text-secondary" />
                    <span>SOC 2 compliant infrastructure</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
