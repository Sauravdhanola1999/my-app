import { services } from "@/src/data/services";

export default function ServicesPage() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <a
            key={service.slug}
            href={`/services/${service.slug}`}
            className="border rounded-xl p-6 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">
              {service.shortDescription}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
