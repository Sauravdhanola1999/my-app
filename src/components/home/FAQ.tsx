"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/src/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-12 bg-brand-light">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-orange/10 mb-4">
            <HelpCircle className="w-8 h-8 text-brand-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600">Find answers to common questions about our services</p>
        </div>

        <div className="space-y-3 mb-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-brand-orange/30 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left px-6 py-5 hover:bg-brand-light transition-colors group"
                >
                  <span className="font-semibold text-brand-dark pr-4 text-base group-hover:text-brand-orange transition-colors">
                    {faq.question}
                  </span>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                    isOpen ? 'bg-brand-orange/10' : 'bg-brand-light group-hover:bg-brand-orange/10'
                  } transition-all shrink-0`}>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-orange transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4 animate-in slide-in-from-top-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mini CTA */}
          <div className="text-center bg-white rounded-xl p-8 border border-gray-200 shadow-[var(--shadow-card)]">
          <p className="text-gray-700 mb-4 text-lg font-medium">
            Still have questions?
          </p>
          <p className="text-gray-600 mb-6 text-sm">
            Our experts are here to help you with all your home solution needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-[var(--shadow-button)] hover:shadow-xl"
          >
            Talk to Our Expert
          </a>
        </div>
      </div>
    </section>
  );
}
