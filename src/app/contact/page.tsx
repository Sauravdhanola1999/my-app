import ContactForm from "@/src/components/home/ContactForm";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us | Colourfull Homes",
  description:
    "Get in touch with Colourfull Homes for painting, waterproofing, and home solutions.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Have a project in mind? Fill out the form and our team will get back to
          you shortly.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Reach Us</h2>

          <div className="space-y-4 text-gray-700">
            <p>📞 <strong>Phone:</strong> +91 XXXXX XXXXX</p>
            <p>📧 <strong>Email:</strong> info@colourfullhomes.com</p>
            <p>📍 <strong>Service Areas:</strong> Residential & Commercial</p>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </section>
    </main>
  );
}
