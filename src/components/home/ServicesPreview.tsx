// import { services } from "@/data/services";

import { services } from "@/src/data/services";

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Home Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.shortDescription}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
