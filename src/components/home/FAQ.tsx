"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/src/data/faq";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="bg-white border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left px-5 py-4"
                >
                  <span className="font-medium text-brand-dark">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mini CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Talk to Our Expert
          </a>
        </div>
      </div>
    </section>
  );
}
