import { testimonials } from "@/src/data/testimonials";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            What Our Customers Say
          </h2>
          <p className="text-base md:text-lg text-gray-600">Trusted by thousands of homeowners across the city</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-lg transition-all border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{item.message}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                <div>
                  <div className="font-semibold text-brand-dark text-sm">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.city}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
