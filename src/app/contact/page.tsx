import ContactForm from "@/src/components/home/ContactForm";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Colourfull Homes",
  description:
    "Get in touch with Colourfull Homes for painting, waterproofing, and complete home solutions.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8 md:py-16">
      <section className="grid md:grid-cols-2 gap-8 items-start">
        
        {/* LEFT COLUMN */}
        <div>
          {/* Heading – desktop only */}
          <h1 className="hidden md:block text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          {/* Helper text – all screens */}
          <p className="text-base md:text-lg text-gray-600 max-w-md md:mb-10">
            Have a project in mind? Fill out the form and our team will get back
            to you shortly.
          </p>

          {/* Reach Us – desktop only */}
          <div className="hidden md:block">
            <h2 className="text-2xl font-semibold mb-6">Reach Us</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange" />
                <span>
                  <strong>Phone:</strong> +91 XXXXX XXXXX
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange" />
                <span>
                  <strong>Email:</strong> info@colourfullhomes.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>
                  <strong>Service Areas:</strong> Residential & Commercial
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Trust Icons (desktop only) */}
          <div className="hidden md:flex gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              Trusted Professionals
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-brand-orange" />
              Quick Response
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              Clean Execution
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Response Note */}
          <p className="text-xs text-gray-500 text-center mt-3">
            We usually respond within 24 hours.
          </p>

          {/* WhatsApp CTA – mobile only */}
          <div className="mt-6 text-center md:hidden">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-block w-full bg-green-500 text-white py-3 rounded-lg font-semibold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
