import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Interior wall paint",
    image: "/images/interior-paint.jpg",
    href: "/services/home-painting",
  },
  {
    title: "Exterior wall paint",
    image: "/images/exterior-paint.jpg",
    href: "/services/home-painting",
  },
  {
    title: "Waterproofing Services",
    image: "/images/waterproofing.jpg",
    href: "/services/waterproofing",
  },
  {
    title: "Wood Solutions",
    image: "/images/wood-solutions.jpg",
    href: "/services/wood-polish",
  },
];

export default function ServiceBlocks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Everything a <br /> home needs
          </h2>
          <p className="text-lg text-brand-muted max-w-md">
            One stop solution for all you need to keep your living space intact.
          </p>
        </div>

        {/* RIGHT BLOCKS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-[#FBF7F2] rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-dark">
                  {service.title}
                </h3>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="text-brand-dark group-hover:text-brand-orange transition" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
