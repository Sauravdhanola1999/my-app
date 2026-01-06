import { testimonials } from "@/src/data/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-gray-50 border rounded-xl p-6 hover:shadow-md transition"
            >
              {/* Message */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                “{item.message}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
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
