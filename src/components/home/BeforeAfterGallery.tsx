import { projects } from "@/src/data/projects";
import Image from "next/image";

export default function BeforeAfterGallery() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
            Before & After Projects
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            See how we transform homes with professional painting and
            home solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-[var(--shadow-card)] transition-all hover:border-brand-orange/30"
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
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-2.5 py-1 rounded-md font-medium">
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
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                  />
                  <span className="absolute bottom-2 right-2 bg-brand-orange text-white text-xs px-2.5 py-1 rounded-md font-medium">
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
        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-[var(--shadow-button)] hover:shadow-xl text-sm md:text-base"
          >
            Get Similar Transformation
          </a>
        </div>
      </div>
    </section>
  );
}
