import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Interior Painting",
    description: "Transform your living spaces",
    image: "https://res.cloudinary.com/duhtmczhn/image/upload/v1768060257/interiorpainting_h0kvdd.jpg",
    href: "/services/home-painting",
    color: "bg-brand-orange/10",
  },
  {
    title: "Exterior Painting",
    description: "Protect & beautify your home",
    image: "https://res.cloudinary.com/duhtmczhn/image/upload/v1768060566/exteriorpainting_uht6g4.jpg",
    href: "/services/home-painting",
    color: "bg-brand-blue/10",
  },
  {
    title: "Waterproofing",
    description: "Stop leaks & dampness",
    image: "https://res.cloudinary.com/duhtmczhn/image/upload/v1768140900/waterproofing_mmptyk.jpg",
    href: "/services/waterproofing",
    color: "bg-brand-orange/10",
  },
  {
    title: "Wall Textures",
    description: "Add style to your walls",
    image: "https://res.cloudinary.com/duhtmczhn/image/upload/v1768059810/walltextureafter_jhgwvu.jpg",
    href: "/services/wall-textures",
    color: "bg-brand-blue/10",
  },
  {
    title: "Wood Polish",
    description: "Restore & protect wood",
    image: "https://res.cloudinary.com/duhtmczhn/image/upload/v1768060157/woodpolish_neyvaq.jpg",
    href: "/services/wood-polish",
    color: "bg-brand-orange/10",
  },
  {
    title: "Furniture Design",
    description: "Custom furniture solutions",
    image: "https://res.cloudinary.com/duhtmczhn/image/upload/v1768060063/furniturepolish_frch7t.jpg",
    href: "/services/furniture-design",
    color: "bg-brand-blue/10",
  },
];

export default function ServiceBlocks() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Everything Your Home Needs
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Complete home solutions in one place. From painting to waterproofing, we&apos;ve got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-brand-orange/30 hover:shadow-[var(--shadow-card)] transition-all"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-brand-dark mb-1 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <div className={`${service.color} rounded-lg p-2 shrink-0 group-hover:scale-110 transition-transform`}>
                    <ArrowUpRight className="w-5 h-5 text-brand-orange" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold hover:gap-3 transition-all text-base"
          >
            Explore All Services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
