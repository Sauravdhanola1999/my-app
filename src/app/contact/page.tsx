import ContactForm from "@/src/components/home/ContactForm";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Colourfull Homes",
  description:
    "Get in touch with Colourfull Homes for painting, waterproofing, and complete home solutions.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-20">
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        
        {/* LEFT COLUMN - Hidden on mobile */}
        <div className="hidden md:block">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">
            Colourfull Homes
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-brand-dark">
            Home Painting Services
          </h2>

          {/* Helper text */}
          <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
            Hassle-free home painting with expert supervision, premium materials, and on-time execution.
          </p>

          {/* Reach Us */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-brand-dark">Reach Us</h2>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">Phone</div>
                  <a href="tel:+918050013054" className="font-medium hover:text-brand-orange transition-colors">
                    +91 8050013054
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">Email</div>
                  <a href="mailto:colourfullhomes07@gmail.com" className="font-medium hover:text-brand-orange transition-colors">
                    colourfullhomes07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">Address</div>
                  <div className="font-medium">HSR layout, Sec-1, Bengaluru, Karnataka 560102</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Mobile Heading - Only visible on mobile */}
          <div className="md:hidden mb-6">
            <h1 className="text-3xl font-bold mb-2 text-brand-dark">
              Colourfull Homes
            </h1>
            <h2 className="text-xl font-semibold mb-3 text-brand-dark">
              Home Painting Services
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Hassle-free home painting with expert supervision, premium materials, and on-time execution.
            </p>
          </div>

          {/* Trust Icons - Hidden on mobile */}
          <div className="hidden md:flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-brand-light px-3 py-2 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              Trusted Professionals
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-brand-light px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-brand-orange" />
              Quick Response
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-brand-light px-3 py-2 rounded-lg">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              Clean Execution
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Response Note */}
          <p className="text-sm text-gray-500 text-center mt-4">
            We usually respond within 24 hours.
          </p>

          {/* WhatsApp CTA – mobile only */}
          <div className="mt-6 text-center md:hidden">
            <a
              href="https://wa.me/918050013054"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-[var(--shadow-button)]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </section>

      {/* Why Choose Colourfull Homes Section */}
      <section className="mt-12 md:mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">
            Why Choose Colourfull Homes?
          </h2>
          <div className="space-y-4 md:space-y-5">
            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-[var(--shadow-card)] transition-all hover:border-brand-orange/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-base">
                  Trained professional painters with verified skills and expertise.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-[var(--shadow-card)] transition-all hover:border-brand-orange/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-base">
                  On-time completion—projects finished as promised without delays.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-[var(--shadow-card)] transition-all hover:border-brand-orange/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-base">
                  Top-notch quality with genuine branded products: Asian Paints, Berger, Dulux, Birla Opus.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-[var(--shadow-card)] transition-all hover:border-brand-orange/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-base">
                  Furniture safety with proper packing and masking to prevent damage during work.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-[var(--shadow-card)] transition-all hover:border-brand-orange/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-base">
                  Post-service cleaning to leave your space spotless and ready to enjoy.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 hover:shadow-[var(--shadow-card)] transition-all hover:border-brand-orange/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-base">
                  Hassle-free service—all materials procured by us, so you don&apos;t have to worry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
