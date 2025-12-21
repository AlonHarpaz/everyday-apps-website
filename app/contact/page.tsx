"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">
            Have questions? We&apos;d love to hear from you. Fill out the form below
            and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-xl bg-card/50 border border-border/50 p-8">
            {/* monday.com Form Embed Placeholder */}
            <div className="text-center py-12">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <p className="text-muted-foreground mb-4">
                monday.com form will be embedded here
              </p>
              <p className="text-sm text-muted-foreground">
                Replace this placeholder with your monday.com form embed code
              </p>

              {/* Example embed code structure:
              <iframe
                src="https://forms.monday.com/forms/embed/YOUR_FORM_ID"
                width="100%"
                height="600"
                style={{ border: 0 }}
              />
              */}
            </div>
          </div>

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-2">
              Prefer email?
            </p>
            <a
              href="mailto:contact@everydayapps.com"
              className="text-primary hover:underline"
            >
              contact@everydayapps.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
