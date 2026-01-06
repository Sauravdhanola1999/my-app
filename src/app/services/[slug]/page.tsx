import { services } from "@/src/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Colourfull Homes`,
    description: service.description,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <main className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-brand-orange" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600">{service.shortDescription}</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            What We Offer
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Our Process
          </h2>
          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-brand-orange/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 font-semibold text-brand-orange">
                  {index + 1}
                </div>
                <p className="text-gray-700 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 bg-gradient-to-br from-brand-orange/5 to-brand-blue/5 rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
            Benefits
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white border-2 border-brand-orange rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts will help you understand the best solutions for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
