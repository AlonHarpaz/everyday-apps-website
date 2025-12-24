"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Everyday Apps?",
    answer: "Everyday Apps is a suite of powerful applications built specifically for monday.com. We help teams automate workflows, import data, create forms, and much more - all directly within their monday.com workspace.",
  },
  {
    question: "How do I install Everyday Apps?",
    answer: "You can install our apps directly from the monday.com marketplace. Simply search for 'Everyday' or visit our apps page and click 'View on Marketplace' for any live app. Installation takes just a few clicks.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. All Everyday Apps run on monday.com's SOC 2 compliant servers. We don't store your data - it stays within monday.com's secure infrastructure. We're also GDPR compliant for our EU customers.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! All our apps offer a free tier or trial period so you can test them before committing. Check each app's marketplace listing for specific details on free features and trial periods.",
  },
  {
    question: "Can I use Everyday Apps with any monday.com plan?",
    answer: "Most of our apps work with all monday.com plans, including Free, Basic, Standard, Pro, and Enterprise. Some advanced features may require higher-tier monday.com plans.",
  },
  {
    question: "How do I get support?",
    answer: "We offer support through our contact form and in-app help. For urgent issues, reach out via the contact page. We typically respond within 24 hours on business days.",
  },
  {
    question: "What file formats does Everyday Import support?",
    answer: "Everyday Import supports CSV, XLSX, and XLS file formats. You can import spreadsheets with thousands of rows and our smart column mapping will automatically match your data to monday.com columns.",
  },
  {
    question: "When will other apps be available?",
    answer: "We're actively developing new apps including Forms, Export, Mail, and more. Join our newsletter to be notified when new apps launch. You can also join the waiting list for specific apps on their pages.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-light mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="border border-border rounded-2xl overflow-hidden bg-card/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-5 flex items-center justify-between text-left hover:bg-card/80 transition-colors"
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`text-muted-foreground transition-transform shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-5 text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
