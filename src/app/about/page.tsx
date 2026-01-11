import type { Metadata } from "next";
import {
  UserCheck,
  ShieldCheck,
  Clock,
  Sparkles,
  Headset,
  Sofa,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Colourfull Homes",
  description:
    "Learn about Colourfull Homes, our mission, values, and commitment to delivering high-quality home solutions.",
     alternates: {
     canonical: "https://colourfullhomes.com/about",
  },
};

const values = [
  {
    label: "Trained professional painters",
    icon: UserCheck,
  },
  {
    label: "On-time completion",
    icon: Clock,
  },
  {
    label: "Top-notch quality (Asian Paints, Berger, Dulux, Birla Opus)",
    icon: ShieldCheck,
  },
  {
    label: "Furniture safety with packing & masking",
    icon: Sofa,
  },
  {
    label: "Post-service cleaning",
    icon: Sparkles,
  },
  {
    label: "Hassle-free service (all materials procured by us)",
    icon: Headset,
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      
      {/* Hero / Intro */}


      {/* About Us Section */}
      <section className="mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark text-center">
            About Us
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 space-y-6">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              At Colourfull Homes, we believe every space deserves character, comfort, and craftsmanship. We are a professional home improvement and interior solutions brand specializing in home painting, waterproofing, wood polishing, wall textures, wallpapers, wall panels, and custom furniture design & manufacturing.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              With a strong focus on quality and detail, our team of trained professionals transforms homes into beautiful, long-lasting living spaces. From vibrant wall finishes to elegant furniture and durable protective solutions, we combine modern techniques with premium materials to deliver results you can trust.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              What sets us apart is our end-to-end service approach—from consultation and design to execution and post-service cleanup. We ensure timely completion, furniture safety with proper masking, and a hassle-free experience for every client.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Whether you&apos;re renovating, upgrading, or building from scratch, Colourfull Homes is committed to adding value, style, and durability to your interiors—making your house truly feel like home.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark text-center">
            Who We Are
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We specialize in end-to-end home improvement services including
              painting, waterproofing, wall textures, furniture solutions, and
              interior upgrades. Our approach combines skilled craftsmanship,
              modern techniques, and premium materials to ensure consistent
              quality across every project.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16 md:mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark text-center">
            Our Mission
          </h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Our mission is to simplify home improvement by offering services
              that are easy to understand, clearly priced, and professionally
              executed—so homeowners can upgrade their spaces without stress.
            </p>
          </div>
        </div>
      </section>

      {/* Values / Why Choose Us */}
      <section className="bg-brand-light rounded-2xl p-10 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-brand-dark">
          Why Choose Colourfull Homes
        </h2>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {values.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-4 bg-white rounded-xl p-5 hover:shadow-[var(--shadow-card)] transition-all border border-gray-200 hover:border-brand-orange/30"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}
