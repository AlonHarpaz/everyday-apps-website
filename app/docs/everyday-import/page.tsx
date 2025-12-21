"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AppIcon } from "@/components/AppIcon";
import { ArrowLeft, ArrowRight } from "lucide-react";

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: `
      <p>Everyday Import allows you to import data from CSV and Excel files directly into your monday.com boards. Follow these steps to get started:</p>
      <ol>
        <li><strong>Install the app</strong> from the monday.com marketplace</li>
        <li><strong>Open a board</strong> where you want to import data</li>
        <li><strong>Click on the app icon</strong> in the board header or use the apps panel</li>
        <li><strong>Upload your file</strong> (CSV, XLSX, or XLS)</li>
      </ol>
    `,
  },
  {
    id: "supported-formats",
    title: "Supported File Formats",
    content: `
      <p>Everyday Import supports the following file formats:</p>
      <ul>
        <li><strong>CSV</strong> - Comma-separated values files</li>
        <li><strong>XLSX</strong> - Microsoft Excel (2007 and later)</li>
        <li><strong>XLS</strong> - Microsoft Excel (97-2003)</li>
      </ul>
      <p class="note">Files can contain up to 10,000 rows per import. For larger datasets, split your file into multiple parts.</p>
    `,
  },
  {
    id: "column-mapping",
    title: "Column Mapping",
    content: `
      <p>After uploading your file, you'll see the column mapping screen:</p>
      <ol>
        <li><strong>Preview your data</strong> - The first few rows of your file are displayed</li>
        <li><strong>Map columns</strong> - Match each column in your file to a column in your monday board</li>
        <li><strong>Auto-detection</strong> - The app automatically suggests mappings based on column names</li>
        <li><strong>Skip columns</strong> - Leave a mapping empty to skip importing that column</li>
      </ol>
      <p class="note">The "Name" column is required. At least one column must be mapped to the item name.</p>
    `,
  },
  {
    id: "column-types",
    title: "Supported Column Types",
    content: `
      <p>Everyday Import supports the following monday.com column types:</p>
      <ul>
        <li><strong>Text</strong> - Plain text values</li>
        <li><strong>Numbers</strong> - Numeric values</li>
        <li><strong>Status</strong> - Status labels (matched by label name)</li>
        <li><strong>Dropdown</strong> - Single or multiple selection</li>
        <li><strong>Date</strong> - Date values (various formats supported)</li>
        <li><strong>Email</strong> - Email addresses</li>
        <li><strong>Phone</strong> - Phone numbers</li>
        <li><strong>Link</strong> - URLs</li>
        <li><strong>Long Text</strong> - Multi-line text</li>
        <li><strong>People</strong> - Team member assignment (by email)</li>
      </ul>
    `,
  },
  {
    id: "status-mapping",
    title: "Status & Dropdown Mapping",
    content: `
      <p>For Status and Dropdown columns, the app matches values by label name:</p>
      <ul>
        <li>Values are matched <strong>case-insensitively</strong></li>
        <li>If a value doesn't match any existing label, it will be <strong>skipped</strong></li>
        <li>Make sure your file values match the labels in your monday board</li>
      </ul>
      <p><strong>Example:</strong> If your board has a Status column with labels "Done", "Working on it", "Stuck", your file should contain these exact values (case doesn't matter: "done", "DONE", "Done" all work).</p>
    `,
  },
  {
    id: "date-formats",
    title: "Date Formats",
    content: `
      <p>The app recognizes various date formats:</p>
      <ul>
        <li><strong>ISO format</strong>: 2024-01-15</li>
        <li><strong>US format</strong>: 01/15/2024 or 1/15/24</li>
        <li><strong>European format</strong>: 15/01/2024 or 15.01.2024</li>
        <li><strong>With time</strong>: 2024-01-15 14:30:00</li>
      </ul>
      <p class="note">For best results, use the ISO format (YYYY-MM-DD) in your files.</p>
    `,
  },
  {
    id: "import-process",
    title: "Import Process",
    content: `
      <p>Once you've mapped your columns:</p>
      <ol>
        <li><strong>Click "Start Import"</strong> to begin the import process</li>
        <li><strong>Monitor progress</strong> - A progress bar shows the import status</li>
        <li><strong>Review results</strong> - See how many items were successfully imported</li>
        <li><strong>Check errors</strong> - Any rows that failed will be listed with the reason</li>
      </ol>
      <p>The import runs on monday.com servers, so you can close the app and come back later to check the results.</p>
    `,
  },
  {
    id: "error-handling",
    title: "Error Handling",
    content: `
      <p>If some rows fail to import:</p>
      <ul>
        <li><strong>Partial success</strong> - Successfully imported rows are saved, failed rows are reported</li>
        <li><strong>Error details</strong> - Each failed row shows the specific error message</li>
        <li><strong>Retry option</strong> - Fix the issues in your file and re-import only the failed rows</li>
      </ul>
      <p><strong>Common errors:</strong></p>
      <ul>
        <li>Invalid date format</li>
        <li>Status/Dropdown value not found</li>
        <li>Required column missing</li>
        <li>Invalid email format</li>
      </ul>
    `,
  },
  {
    id: "tips",
    title: "Tips & Best Practices",
    content: `
      <ul>
        <li><strong>Prepare your data</strong> - Clean your data before importing (remove duplicates, fix formatting)</li>
        <li><strong>Match column names</strong> - Name your file columns the same as your monday columns for automatic mapping</li>
        <li><strong>Use consistent formats</strong> - Keep dates, numbers, and status values consistent throughout your file</li>
        <li><strong>Test with small files</strong> - Import a few rows first to verify your mappings work correctly</li>
        <li><strong>Check status labels</strong> - Ensure your status values exactly match the labels in your monday board</li>
      </ul>
    `,
  },
];

export default function EverydayImportDocsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <AppIcon icon="import" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Everyday Import</h3>
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
              <h1 className="text-4xl font-bold mb-4">Everyday Import</h1>
              <p className="text-xl text-muted-foreground">
                Import CSV and Excel files into your monday.com boards with
                smart column mapping and error handling.
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
