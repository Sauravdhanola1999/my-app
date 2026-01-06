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
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <section className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT COLUMN */}
        <div>
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
            Contact Us
          </h1>

          {/* Helper text */}
          <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
            Have a project in mind? Fill out the form and our team will get back
            to you shortly.
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
                  <div className="font-medium">+91 XXXXX XXXXX</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">Email</div>
                  <div className="font-medium">info@colourfullhomes.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">Service Areas</div>
                  <div className="font-medium">Residential & Commercial</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          {/* Trust Icons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              Trusted Professionals
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
              <Clock className="w-4 h-4 text-brand-orange" />
              Quick Response
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
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
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-block w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}
