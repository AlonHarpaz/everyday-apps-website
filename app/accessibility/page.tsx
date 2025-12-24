"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const accessibilityFeatures = [
  "Keyboard navigation support throughout all applications",
  "Screen reader compatibility with ARIA labels",
  "High contrast mode support",
  "Resizable text without loss of functionality",
  "Focus indicators for interactive elements",
  "Alternative text for all images and icons",
  "Consistent and predictable navigation",
  "Error identification and suggestions",
];

const sections = [
  {
    title: "Our Commitment",
    content: `Everyday Apps is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards to achieve this.`,
  },
  {
    title: "Conformance Status",
    content: `We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.`,
  },
  {
    title: "Compatibility",
    content: `Our applications are designed to be compatible with assistive technologies including screen readers (NVDA, JAWS, VoiceOver), screen magnification software, and speech recognition software. We support the latest versions of major browsers including Chrome, Firefox, Safari, and Edge.`,
  },
  {
    title: "Technical Specifications",
    content: `Accessibility of Everyday Apps relies on the following technologies: HTML, CSS, JavaScript, WAI-ARIA, and SVG. These technologies are relied upon for conformance with the accessibility standards used.`,
  },
  {
    title: "Limitations",
    content: `While we strive for full accessibility, some third-party content or features may have limitations. We are continuously working to identify and resolve any accessibility barriers. If you encounter any issues, please let us know.`,
  },
  {
    title: "Feedback",
    content: `We welcome your feedback on the accessibility of Everyday Apps. If you encounter accessibility barriers or have suggestions for improvement, please contact us through our contact page. We take accessibility feedback seriously and will respond within 5 business days.`,
  },
  {
    title: "Assessment Approach",
    content: `Everyday Apps assesses the accessibility of our applications through self-evaluation, automated testing tools, and user feedback. We regularly review our applications to ensure ongoing compliance with accessibility standards.`,
  },
];

export default function AccessibilityPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Accessibility Statement
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Last updated: December 2024
          </p>

          {/* Key Features */}
          <Card className="bg-card/50 border-border/50 mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">
                Accessibility Features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {accessibilityFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="text-green-500 mt-0.5 shrink-0" size={18} />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
