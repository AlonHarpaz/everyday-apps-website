"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

const lastUpdated = "December 21, 2024";

const sections = [
  {
    title: "1. Introduction",
    content: `
      <p>Everyday Apps ("we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, and protect information when you use our applications on the monday.com platform.</p>
      <p>Our applications run entirely on monday.com's secure infrastructure, meaning we do not store your data on external servers. This policy complies with the General Data Protection Regulation (GDPR) and other applicable data protection laws.</p>
    `,
  },
  {
    title: "2. Data Controller",
    content: `
      <p>Everyday Apps acts as a data processor on behalf of monday.com and its users. monday.com acts as the data controller for data stored within their platform.</p>
      <p>For questions about this privacy policy, please use our contact form.</p>
    `,
  },
  {
    title: "3. Data We Process",
    content: `
      <p><strong>Data processed through our apps:</strong></p>
      <ul>
        <li><strong>Board data</strong> - Column names, item names, and values you choose to import/export</li>
        <li><strong>File data</strong> - Contents of CSV/Excel files you upload for import (processed temporarily)</li>
        <li><strong>User identifiers</strong> - monday.com user IDs for authentication purposes</li>
      </ul>
      <p><strong>Data we do NOT collect:</strong></p>
      <ul>
        <li>Personal contact information (unless you contact us directly)</li>
        <li>Payment or financial information (handled by monday.com)</li>
        <li>Data from boards you don't explicitly use with our apps</li>
      </ul>
    `,
  },
  {
    title: "4. How We Process Data",
    content: `
      <p>All data processing occurs on monday.com's secure servers. We:</p>
      <ul>
        <li><strong>Do not store</strong> your monday.com data on external servers</li>
        <li><strong>Do not transfer</strong> your data to third parties</li>
        <li><strong>Do not sell</strong> your data under any circumstances</li>
        <li><strong>Process data temporarily</strong> only during active app operations</li>
      </ul>
      <p>When you upload a file for import, the file is processed in memory, data is written to your monday.com board, and the file is immediately discarded.</p>
    `,
  },
  {
    title: "5. Legal Basis for Processing (GDPR)",
    content: `
      <p>Under GDPR, we process your data based on:</p>
      <ul>
        <li><strong>Contract performance</strong> - To provide the services you've requested through our apps</li>
        <li><strong>Legitimate interests</strong> - To improve our apps and ensure security</li>
        <li><strong>Consent</strong> - When you explicitly choose to use our apps and upload data</li>
      </ul>
    `,
  },
  {
    title: "6. Data Security",
    content: `
      <p>Your data is protected by monday.com's enterprise-grade security infrastructure:</p>
      <ul>
        <li><strong>SOC 2 Type II certified</strong> infrastructure</li>
        <li><strong>ISO 27001 certified</strong> information security management</li>
        <li><strong>Encryption</strong> in transit (TLS 1.2+) and at rest (AES-256)</li>
        <li><strong>Regular security audits</strong> and penetration testing</li>
        <li><strong>GDPR compliant</strong> data centers in the EU and US</li>
      </ul>
      <p>Since our apps run on monday.com servers, no data leaves their secure environment.</p>
    `,
  },
  {
    title: "7. Your Rights (GDPR)",
    content: `
      <p>Under GDPR, you have the following rights:</p>
      <ul>
        <li><strong>Right of access</strong> - Request information about your data processing</li>
        <li><strong>Right to rectification</strong> - Correct inaccurate personal data</li>
        <li><strong>Right to erasure</strong> - Request deletion of your data ("right to be forgotten")</li>
        <li><strong>Right to restrict processing</strong> - Limit how we use your data</li>
        <li><strong>Right to data portability</strong> - Receive your data in a structured format</li>
        <li><strong>Right to object</strong> - Object to certain types of processing</li>
        <li><strong>Right to withdraw consent</strong> - Withdraw consent at any time</li>
      </ul>
      <p>To exercise these rights, use our contact form or manage your data directly through monday.com's platform.</p>
    `,
  },
  {
    title: "8. Data Retention",
    content: `
      <p>We do not retain your monday.com data. All data:</p>
      <ul>
        <li>Is processed in real-time during app operations</li>
        <li>Remains stored only within monday.com's platform</li>
        <li>Is not copied or backed up to external systems</li>
      </ul>
      <p>If you uninstall our app, no data persists on our side as we never stored it externally.</p>
    `,
  },
  {
    title: "9. International Data Transfers",
    content: `
      <p>Our apps operate within monday.com's infrastructure. monday.com maintains data centers in:</p>
      <ul>
        <li>European Union (for EU customers)</li>
        <li>United States</li>
      </ul>
      <p>monday.com ensures appropriate safeguards for international transfers, including Standard Contractual Clauses (SCCs) where applicable.</p>
    `,
  },
  {
    title: "10. Cookies and Tracking",
    content: `
      <p>Our apps within monday.com do not use cookies or tracking technologies. The Everyday Apps website may use:</p>
      <ul>
        <li><strong>Essential cookies</strong> - Required for website functionality</li>
        <li><strong>Analytics</strong> - Anonymous usage statistics (if enabled)</li>
      </ul>
      <p>You can control cookie preferences through your browser settings.</p>
    `,
  },
  {
    title: "11. Third-Party Services",
    content: `
      <p>Our apps interact only with:</p>
      <ul>
        <li><strong>monday.com</strong> - Platform provider and data controller</li>
      </ul>
      <p>We do not integrate with or share data with any other third-party services.</p>
    `,
  },
  {
    title: "12. Children's Privacy",
    content: `
      <p>Our services are not directed at children under 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us immediately.</p>
    `,
  },
  {
    title: "13. Changes to This Policy",
    content: `
      <p>We may update this Privacy Policy from time to time. We will notify users of significant changes through:</p>
      <ul>
        <li>Email notification (for registered users)</li>
        <li>Notice on our website</li>
        <li>In-app notification</li>
      </ul>
      <p>Continued use of our apps after changes constitutes acceptance of the updated policy.</p>
    `,
  },
  {
    title: "14. Contact Us",
    content: `
      <p>For privacy-related inquiries or to exercise your GDPR rights, please use our contact form.</p>
      <p>We aim to respond to all privacy requests within 30 days.</p>
    `,
  },
];

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </motion.div>

        {/* GDPR Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">GDPR Compliant</h2>
                  <p className="text-muted-foreground text-sm">
                    Our apps run entirely on monday.com&apos;s secure, SOC 2 certified servers.
                    We do not store your data externally.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.5 }}
            >
              <Card className="bg-card/50 border-border/50">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <div
                    className="prose prose-invert prose-sm max-w-none
                      [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1
                      [&_li]:text-muted-foreground
                      [&_p]:text-muted-foreground [&_p]:mb-3
                      [&_strong]:text-foreground"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </CardContent>
              </Card>
            </motion.section>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Questions about our privacy practices?
          </p>
          <Link
            href="/contact"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            Contact Us <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
