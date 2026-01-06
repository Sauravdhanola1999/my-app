import { projects } from "@/src/data/projects";
import Image from "next/image";

export default function BeforeAfterGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Before & After Projects
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          See how we transform homes with professional painting and
          home solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden border hover:shadow-md transition"
            >
              {/* Images */}
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative h-40">
                  <Image
                    src={project.before}
                    alt={`${project.title} before`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Before
                  </span>
                </div>

                {/* After */}
                <div className="relative h-40">
                  <Image
                    src={project.after}
                    alt={`${project.title} after`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-brand-orange text-white text-xs px-2 py-1 rounded">
                    After
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="p-4 text-center">
                <p className="font-medium text-brand-dark text-sm">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Get Similar Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
