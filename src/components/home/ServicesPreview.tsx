import { services } from "@/src/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section className="py-8 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Our Home Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Complete home solutions delivered by trained professionals with
            premium-quality materials.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBlue = index % 2 === 1;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all border border-gray-100 hover:border-transparent"
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
                <h3 className="text-lg font-semibold mb-2 text-brand-dark group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>

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

        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
