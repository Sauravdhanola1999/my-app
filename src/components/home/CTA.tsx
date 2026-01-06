import { Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-8 md:py-10 bg-brand-blue text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Planning to Upgrade Your Home?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-2">
            Talk to our experts and get a free consultation today.
          </p>
          <p className="text-xs md:text-sm text-white/80">
            No hidden charges • Quick response • Quality guaranteed
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-[var(--shadow-button)] hover:shadow-xl text-sm md:text-base"
          >
            <Phone className="w-4 h-4" />
            Get Free Consultation
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="flex items-center justify-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-brand-light transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
