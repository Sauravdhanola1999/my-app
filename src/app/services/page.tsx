import Link from "next/link";
import {
  UserCheck,
  ShieldCheck,
  Clock,
  Sofa,
  Sparkles,
  Smile,
  ArrowRight,
} from "lucide-react";
import { services } from "@/src/data/services";

const trustPoints = [
  {
    label: "Trained professional painters",
    icon: UserCheck,
  },
  {
    label: "On-time completion",
    icon: Clock,
  },
  {
    label: "Top-notch quality (Asian Paints, Berger, Dulux, Birla Opus)",
    icon: ShieldCheck,
  },
  {
    label: "Furniture safety with packing & masking",
    icon: Sofa,
  },
  {
    label: "Post-service cleaning",
    icon: Sparkles,
  },
  {
    label: "Hassle-free service (all materials procured by us)",
    icon: Smile,
  },
];

export default function ServicesPage() {
  return (
    <main className="py-12 md:py-20 max-w-7xl mx-auto px-6">
      
      {/* Intro */}
      <section className="mb-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">
          Our Home Services
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          From painting and waterproofing to furniture and wall solutions, we
          provide complete home services delivered by trained professionals
          using premium materials.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBlue = index % 2 === 1;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl p-6 hover:shadow-[var(--shadow-card)] transition-all border border-gray-200 hover:border-brand-orange/30"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${
                  isBlue ? 'bg-brand-blue/10' : 'bg-brand-orange/10'
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${
                    isBlue ? 'text-brand-blue' : 'text-brand-orange'
                  }`} />
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold mb-2 text-brand-dark group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-brand-orange font-medium text-sm group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-brand-light rounded-2xl p-10 md:p-12">
        <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-brand-dark">
          Why Choose Our Services?
        </h3>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {trustPoints.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-4 bg-white rounded-xl p-5 hover:shadow-[var(--shadow-card)] transition-all border border-gray-200 hover:border-brand-orange/30"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}
