import type { Metadata } from "next";
import {
  UserCheck,
  ShieldCheck,
  Clock,
  Sparkles,
  Headset,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Colourfull Homes",
  description:
    "Learn about Colourfull Homes, our mission, values, and commitment to delivering high-quality home solutions.",
};

const values = [
  {
    label: "Experienced & trained professionals",
    icon: UserCheck,
  },
  {
    label: "Premium materials & trusted brands",
    icon: ShieldCheck,
  },
  {
    label: "Transparent timelines & execution",
    icon: Clock,
  },
  {
    label: "Clean workmanship & quality checks",
    icon: Sparkles,
  },
  {
    label: "Dedicated customer support",
    icon: Headset,
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      
      {/* Hero / Intro */}
      <section className="mb-20 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Colourfull Homes
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Colourfull Homes is a home solutions brand focused on delivering
          reliable, high-quality services with transparency, professionalism,
          and long-lasting results.
        </p>
      </section>

      {/* Who We Are + Mission */}
      <section className="mb-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We specialize in end-to-end home improvement services including
            painting, waterproofing, wall textures, furniture solutions, and
            interior upgrades. Our approach combines skilled craftsmanship,
            modern techniques, and premium materials to ensure consistent
            quality across every project.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to simplify home improvement by offering services
            that are easy to understand, clearly priced, and professionally
            executed—so homeowners can upgrade their spaces without stress.
          </p>
        </div>
      </section>

      {/* Values / Why Choose Us */}
      <section className="bg-gray-50 rounded-2xl p-10">
        <h2 className="text-2xl font-semibold mb-8">
          Why Choose Colourfull Homes
        </h2>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center shrink-0">
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
