import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Colourfull Homes",
  description:
    "Learn about Colourfull Homes, our mission, values, and commitment to quality home solutions.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Colourfull Homes
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          We provide complete home solutions with a focus on quality,
          transparency, and long-lasting results.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Colourfull Homes is a professional home solutions brand offering
            painting, waterproofing, wall textures, furniture design, and
            interior upgrades. Our team combines skilled craftsmanship with
            premium materials to deliver reliable, hassle-free services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to simplify home improvement by offering end-to-end
            solutions that are transparent, timely, and tailored to each
            customer’s needs.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 rounded-2xl p-10">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose Colourfull Homes?
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>✔ Experienced & trained professionals</li>
          <li>✔ Premium materials & trusted brands</li>
          <li>✔ Transparent pricing & clear timelines</li>
          <li>✔ Clean execution & quality checks</li>
          <li>✔ Dedicated customer support</li>
        </ul>
      </section>
    </main>
  );
}
