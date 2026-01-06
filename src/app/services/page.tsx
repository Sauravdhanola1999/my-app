import Link from "next/link";
import {
  UserCheck,
  ShieldCheck,
  Clock,
  Sofa,
  Sparkles,
  Smile,
} from "lucide-react";
import { services } from "@/src/data/services";

const trustPoints = [
  {
    label: "Trained & verified professionals",
    icon: UserCheck,
  },
  {
    label: "Premium quality materials",
    icon: ShieldCheck,
  },
  {
    label: "On-time completion",
    icon: Clock,
  },
  {
    label: "Furniture & floor protection",
    icon: Sofa,
  },
  {
    label: "Post-service cleaning",
    icon: Sparkles,
  },
  {
    label: "Hassle-free experience",
    icon: Smile,
  },
];

export default function ServicesPage() {
  return (
    <main className="py-20 max-w-7xl mx-auto px-6">
      
      {/* Intro */}
      <section className="mb-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Home Services
        </h1>
        <p className="text-lg text-gray-600">
          From painting and waterproofing to furniture and wall solutions, we
          provide complete home services delivered by trained professionals
          using premium materials.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border rounded-2xl p-6 hover:shadow-lg transition block"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-brand-orange group-hover:scale-110 transition" />
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 text-brand-dark">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.shortDescription}
              </p>
            </Link>
          );
        })}
      </section>

      {/* Trust Section */}
      <section className="mt-20 bg-gray-50 rounded-2xl p-10">
        <h3 className="text-2xl font-semibold mb-8 text-brand-dark">
          Why Choose Our Services?
        </h3>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trustPoints.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
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
