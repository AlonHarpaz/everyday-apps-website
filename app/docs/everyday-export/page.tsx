"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AppIconWithBorder } from "@/components/AppIcon";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: `
      <p>Everyday Export allows you to export data from your monday.com boards to CSV and Excel files. Follow these steps to get started:</p>
      <ol>
        <li><strong>Install the app</strong> from the monday.com marketplace</li>
        <li><strong>Open a board</strong> that contains the data you want to export</li>
        <li><strong>Click on the app icon</strong> in the board header or use the apps panel</li>
        <li><strong>Configure your export</strong> and download your file</li>
      </ol>
    `,
  },
  {
    id: "export-formats",
    title: "Export Formats",
    content: `
      <p>Everyday Export supports the following file formats:</p>
      <ul>
        <li><strong>CSV</strong> - Comma-separated values, compatible with all spreadsheet applications</li>
        <li><strong>XLSX</strong> - Microsoft Excel format with formatting preserved</li>
      </ul>
      <p class="note">Excel exports include column headers with styling and proper column widths for better readability.</p>
    `,
  },
  {
    id: "column-selection",
    title: "Column Selection",
    content: `
      <p>Choose which columns to include in your export:</p>
      <ol>
        <li><strong>Select all</strong> - Export all visible columns from your board</li>
        <li><strong>Custom selection</strong> - Pick specific columns to include</li>
        <li><strong>Reorder columns</strong> - Drag and drop to arrange column order in your export</li>
        <li><strong>Save presets</strong> - Save your column selections for future exports</li>
      </ol>
      <p class="note">The item name column is always included in exports.</p>
    `,
  },
  {
    id: "supported-columns",
    title: "Supported Column Types",
    content: `
      <p>Everyday Export supports exporting the following monday.com column types:</p>
      <ul>
        <li><strong>Text</strong> - Plain text values</li>
        <li><strong>Numbers</strong> - Numeric values with formatting</li>
        <li><strong>Status</strong> - Status label names</li>
        <li><strong>Dropdown</strong> - Selected values (comma-separated for multiple)</li>
        <li><strong>Date</strong> - Date values in ISO format</li>
        <li><strong>Email</strong> - Email addresses</li>
        <li><strong>Phone</strong> - Phone numbers</li>
        <li><strong>Link</strong> - URLs</li>
        <li><strong>Long Text</strong> - Multi-line text content</li>
        <li><strong>People</strong> - Team member names</li>
        <li><strong>Timeline</strong> - Start and end dates</li>
        <li><strong>Files</strong> - File names and URLs</li>
      </ul>
    `,
  },
  {
    id: "filtering",
    title: "Filtering & Views",
    content: `
      <p>Control which items are included in your export:</p>
      <ul>
        <li><strong>Export current view</strong> - Respects your board's active filters and sorting</li>
        <li><strong>Export all items</strong> - Ignores filters and exports everything</li>
        <li><strong>Group selection</strong> - Export specific groups only</li>
        <li><strong>Subitems</strong> - Choose whether to include subitems in the export</li>
      </ul>
      <p class="note">Archived and deleted items are not included in exports.</p>
    `,
  },
  {
    id: "scheduling",
    title: "Scheduled Exports",
    content: `
      <p>Set up automatic recurring exports:</p>
      <ol>
        <li><strong>Configure schedule</strong> - Daily, weekly, or monthly exports</li>
        <li><strong>Choose delivery</strong> - Email or webhook notification with download link</li>
        <li><strong>Set recipients</strong> - Add team members to receive export notifications</li>
        <li><strong>Manage schedules</strong> - View, edit, or delete scheduled exports</li>
      </ol>
      <p><strong>Note:</strong> Scheduled exports use the saved column selection and filter settings at the time of creation.</p>
    `,
  },
  {
    id: "large-exports",
    title: "Large Exports",
    content: `
      <p>For boards with many items:</p>
      <ul>
        <li><strong>Background processing</strong> - Large exports run in the background</li>
        <li><strong>Email notification</strong> - Receive a download link when ready</li>
        <li><strong>Download history</strong> - Access recent exports from the app</li>
      </ul>
      <p class="note">Exports with more than 10,000 items are processed in the background. You'll receive an email when the export is ready.</p>
    `,
  },
  {
    id: "tips",
    title: "Tips & Best Practices",
    content: `
      <ul>
        <li><strong>Use views</strong> - Create saved views with filters to quickly export specific data sets</li>
        <li><strong>Save presets</strong> - Create export presets for reports you run regularly</li>
        <li><strong>Check column types</strong> - Some column types export differently than they appear (e.g., people columns show names, not IDs)</li>
        <li><strong>Schedule reports</strong> - Set up scheduled exports for regular reporting needs</li>
        <li><strong>Excel for formatting</strong> - Use XLSX format when you need column formatting and styling</li>
      </ul>
    `,
  },
];

export default function EverydayExportDocsPage() {
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
            href="/docs"
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Docs
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6">
                    <AppIconWithBorder icon="export" size="sm" />
                    <div>
                      <h3 className="font-semibold">Everyday Export</h3>
                      <p className="text-xs text-muted-foreground">
                        Documentation
                      </p>
                    </div>
                  </div>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded hover:bg-primary/5"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </motion.aside>

          {/* Main content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-light mb-4">Everyday Export</h1>
              <p className="text-xl text-muted-foreground">
                Export your monday.com board data to CSV and Excel files with
                flexible column selection and scheduling options.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.section
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="scroll-mt-24"
                >
                  <Card className="bg-card/50 border-border/50">
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-semibold mb-4">
                        {section.title}
                      </h2>
                      <div
                        className="prose prose-invert prose-sm max-w-none
                          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
                          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                          [&_li]:text-muted-foreground
                          [&_p]:text-muted-foreground [&_p]:mb-4
                          [&_.note]:bg-primary/10 [&_.note]:border-l-4 [&_.note]:border-primary [&_.note]:p-4 [&_.note]:rounded-r [&_.note]:mt-4
                          [&_strong]:text-foreground"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </CardContent>
                  </Card>
                </motion.section>
              ))}
            </div>

            {/* Help section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12"
            >
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-border/50">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    Can&apos;t find what you&apos;re looking for? Get in touch
                    with our support team.
                  </p>
                  <Link
                    href="/contact"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Contact Support <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}
