import { services } from "@/src/data/services";
import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Home Services
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Complete home solutions delivered by trained professionals with
          premium-quality materials.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold mb-2 text-brand-dark">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
