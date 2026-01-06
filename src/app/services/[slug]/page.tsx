import { services } from "@/src/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, Home } from "lucide-react";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://colourfullhomes.com";
  const url = `${baseUrl}/services/${slug}`;
  const keywords = [
    service.title.toLowerCase(),
    "home solutions",
    "home painting",
    "waterproofing",
    "interior design",
    "home renovation",
    "professional services",
    "Colourfull Homes",
  ].join(", ");

  return {
    title: `${service.title} Services | Colourfull Homes`,
    description: `${service.description} Get professional ${service.title.toLowerCase()} services with premium materials and expert craftsmanship. Free consultation available.`,
    keywords: keywords,
    authors: [{ name: "Colourfull Homes" }],
    openGraph: {
      title: `${service.title} Services | Colourfull Homes`,
      description: service.description,
      url: url,
      siteName: "Colourfull Homes",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services | Colourfull Homes`,
      description: service.description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;

    const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const Icon = service.icon;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://colourfullhomes.com";
  const url = `${baseUrl}/services/${slug}`;

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Colourfull Homes",
      description: "Complete home solutions for modern living",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: service.title,
    offers: {
      "@type": "Offer",
      description: service.description,
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumbs Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: baseUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${baseUrl}/services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: service.title,
                item: url,
              },
            ],
          }),
        }}
      />

      <main className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-brand-orange transition-colors flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-brand-orange font-medium">{service.title}</li>
            </ol>
          </nav>

          {/* Hero Section */}
          <article className="mb-12" itemScope itemType="https://schema.org/Service">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center" aria-hidden="true">
                <Icon className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-2" itemProp="name">
                  {service.title}
                </h1>
                <p className="text-lg text-gray-600" itemProp="description">{service.shortDescription}</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl" itemProp="description">
              {service.description}
            </p>
          </article>

          {/* Pricing Section - For Home Painting and Waterproofing */}
          {service.slug === "home-painting" && (
            <section className="mb-12 bg-white border-2 border-brand-orange/20 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                Home Painting Price List
              </h2>
              <p className="text-gray-600 mb-6">
                We offer transparent and affordable pricing based on flat size, with no hidden charges.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-orange/10">
                      <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-brand-dark">Flat Type</th>
                      <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-brand-dark">Starting From (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-brand-light">
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">1 BHK</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-brand-orange">₹5,999</td>
                    </tr>
                    <tr className="hover:bg-brand-light">
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">2 BHK</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-brand-orange">₹8,999</td>
                    </tr>
                    <tr className="hover:bg-brand-light">
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">3 BHK</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-brand-orange">₹11,999</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">💡 Note:</span> Prices may vary based on paint brand, wall condition, design requirements, and total area. A free site inspection helps us give you the most accurate quote.
                </p>
              </div>
            </section>
          )}

          {service.slug === "waterproofing" && (
            <section className="mb-12 bg-white border-2 border-brand-orange/20 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
                Waterproofing Pricing
              </h2>
              <p className="text-gray-600 mb-6">
                We offer cost-effective and transparent waterproofing solutions based on area and treatment type.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-brand-orange/10">
                      <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-brand-dark">Service Type</th>
                      <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-brand-dark">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-brand-light">
                      <td className="border border-gray-300 px-6 py-4 text-gray-700">Waterproofing Work</td>
                      <td className="border border-gray-300 px-6 py-4 font-semibold text-brand-orange">₹30 / sq. ft.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">💡 Note:</span> Final pricing may vary depending on surface condition, leakage severity, waterproofing method, and material used. A free site inspection helps us provide an accurate estimate.
                </p>
              </div>
            </section>
          )}

          {/* Why Section - Only for Waterproofing */}
          {service.slug === "waterproofing" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Why Waterproofing Is Essential
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Water seepage can silently damage your home by weakening walls, ceilings, and foundations. Common problems such as peeling paint, mold growth, unpleasant odors, and wall cracks are often signs of poor or failed waterproofing. If left untreated, these issues can lead to expensive repairs and even compromise the safety of your structure.
              </p>
            </section>
          )}

          {/* Why Wood Polishing Is Important Section - Only for Wood Polish */}
          {service.slug === "wood-polish" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Why Wood Polishing Is Important
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wood polishing is not just about appearance; it&apos;s about preservation. Regular polishing helps seal the surface, protects against moisture damage, prevents cracks, and extends the life of your furniture. Whether it&apos;s a dining table, wardrobe, doors, bed frames, or wooden flooring, proper polishing keeps wood strong and visually appealing for years.
              </p>
            </section>
          )}

          {/* What Are Wall Textures Section - Only for Wall Textures */}
          {service.slug === "wall-textures" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                What Are Wall Textures?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wall textures are decorative finishes applied to walls to create patterns, designs, or subtle effects using specialized materials and techniques. From soft, minimal textures to bold and artistic patterns, wall textures bring dimension and uniqueness that paint alone cannot achieve. They are ideal for accent walls, living rooms, bedrooms, lobbies, and even commercial spaces.
              </p>
            </section>
          )}

          {/* Why Choose Section - Only for Wallpapers & Panels */}
          {service.slug === "wallpapers-panels" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Why Choose Wallpaper & Wall Panels?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wallpapers and wall panels are a smart alternative to traditional painting. They add depth, pattern, and personality while offering durability and easy maintenance. Wallpapers allow you to introduce colors, prints, and themes, while wall panels add structure, texture, and a premium architectural feel to your space. Together, they create interiors that look stylish, modern, and well-designed.
              </p>
            </section>
          )}

          {/* Custom Designs Section - Only for Furniture Design */}
          {service.slug === "furniture-design" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Custom Designs That Reflect Your Style
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every home is unique, and so should be its furniture. At Colourfull Homes, we believe in personalized design solutions. Our expert designers work closely with you to understand your needs, preferences, and vision. Whether you prefer modern minimalism, classic elegance, or contemporary luxury, we design furniture that complements your interiors seamlessly.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each piece is thoughtfully designed to maximize both beauty and functionality.
              </p>
            </section>
          )}

          {/* Wallpaper Services Section - Only for Wallpapers & Panels */}
          {service.slug === "wallpapers-panels" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Our Wallpaper Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Colourfull Homes, we provide professional wallpaper installation using high-quality, branded wallpapers that ensure long-lasting beauty. Our experts help you choose the right wallpaper based on room size, lighting, and interior style.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our team ensures proper wall preparation, accurate alignment, and bubble-free installation for a flawless finish.
              </p>
            </section>
          )}

          {/* Wall Panel Solutions Section - Only for Wallpapers & Panels */}
          {service.slug === "wallpapers-panels" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Our Wall Panel Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wall panels add a sense of luxury and depth that instantly elevates interiors. We offer a variety of wall panel options to suit different aesthetics and budgets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each panel is installed with precision to ensure strength, symmetry, and a refined look.
              </p>
            </section>
          )}

          {/* Expert Wood Polishing Solutions Section - Only for Wood Polish */}
          {service.slug === "wood-polish" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Our Expert Wood Polishing Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Colourfull Homes, we use high-quality, branded polish materials and proven techniques to achieve a flawless finish. Our trained professionals assess the condition of the wood before recommending the right polish type—ensuring the best results without damaging the surface.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each project is handled with care, from surface preparation and sanding to final polishing and buffing.
              </p>
            </section>
          )}

          {/* Wall Texture Solutions Section - Only for Wall Textures */}
          {service.slug === "wall-textures" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Our Wall Texture Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Colourfull Homes, we offer a wide range of wall texture finishes to suit different tastes and interior themes. Our experts help you choose the right texture based on lighting, room size, and overall décor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each texture is applied with precision to ensure a smooth, uniform, and long-lasting finish.
              </p>
            </section>
          )}

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              {service.slug === "home-painting" 
                ? "Our Home Painting Services" 
                : service.slug === "waterproofing"
                ? "Our Comprehensive Waterproofing Solutions"
                : service.slug === "furniture-design"
                ? "We create customized solutions for:"
                : service.slug === "wallpapers-panels"
                ? "We offer:"
                : service.slug === "wall-textures"
                ? "Our services include:"
                : service.slug === "wood-polish"
                ? "We offer:"
                : "What We Offer"}
            </h2>
            {service.slug === "waterproofing" && (
              <p className="text-gray-600 mb-6">
                At Colourfull Homes, we offer end-to-end waterproofing services for both new constructions and existing buildings. Our solutions include:
              </p>
            )}
            {service.slug === "wallpapers-panels" && (
              <p className="text-gray-600 mb-6">
                They are ideal for homeowners who want quick yet impactful interior upgrades.
              </p>
            )}
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 bg-brand-light rounded-xl border border-gray-200"
                >
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Materials Section - Only for Waterproofing */}
          {service.slug === "waterproofing" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Advanced Materials & Trusted Brands
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use only high-quality, industry-approved waterproofing materials from trusted brands such as <strong>Asian Paints</strong>, <strong>Berger</strong>, <strong>Dr. Fixit</strong>, and <strong>Fosroc</strong>. Depending on the site condition, we apply the most suitable method—whether it&apos;s chemical waterproofing, membrane systems, cementitious coatings, PU coatings, or elastomeric solutions. This ensures long-lasting protection and excellent performance.
              </p>
            </section>
          )}

          {/* Premium Materials Section - Only for Wood Polish */}
          {service.slug === "wood-polish" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Premium Materials & Safe Process
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We believe quality matters. That&apos;s why we use genuine, eco-friendly, and low-odor products that are safe for your family and pets. Our process includes proper masking and protection of surrounding areas, ensuring a clean and hassle-free experience.
              </p>
            </section>
          )}

          {/* Quality Materials Section - Only for Wall Textures */}
          {service.slug === "wall-textures" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Quality Materials & Professional Application
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use premium-quality, branded texture materials that are durable, crack-resistant, and easy to maintain. Our trained professionals follow a step-by-step process that includes surface preparation, leveling, texture application, and final finishing. Proper masking and protection are done to keep your furniture and floors safe throughout the process.
              </p>
            </section>
          )}

          {/* Precision Manufacturing Section - Only for Furniture Design */}
          {service.slug === "furniture-design" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Precision Manufacturing with Quality Materials
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our furniture manufacturing process focuses on quality and longevity. We use premium-grade materials, including solid wood, engineered wood, laminates, veneers, and high-quality hardware, sourced from trusted suppliers. Every stage—from cutting and shaping to polishing and finishing—is handled with precision by skilled craftsmen.
              </p>
              <div className="mt-6">
                <p className="text-gray-700 font-semibold mb-3">We ensure:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Strong structural integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Smooth finishes and fine detailing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Durable joints and fittings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>High-quality polish and coatings</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                This attention to detail ensures furniture that not only looks good but also lasts for years.
              </p>
            </section>
          )}

          {/* Functional Solutions Section - Only for Furniture Design */}
          {service.slug === "furniture-design" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Functional, Space-Smart Solutions
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Modern homes demand smart furniture solutions. Our custom-designed furniture is built to optimize space while maintaining elegance. From compact storage units to multifunctional furniture, we help you make the most of every corner of your home without compromising on style.
              </p>
            </section>
          )}

          {/* Safe Execution Section - Only for Furniture Design */}
          {service.slug === "furniture-design" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Safe, Clean & Hassle-Free Execution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Colourfull Homes, we follow a professional and organized approach. During installation, we ensure proper protection of floors, walls, and existing furniture. Our team works efficiently, completes projects on time, and conducts thorough post-installation cleanup—so you enjoy a smooth, stress-free experience.
              </p>
            </section>
          )}

          {/* Perfect for Every Space Section - Only for Wallpapers & Panels */}
          {service.slug === "wallpapers-panels" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Perfect for Every Space
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our wallpaper and wall panel services are suitable for:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Living rooms and bedrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>TV unit and accent walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Dining areas and hallways</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Offices, showrooms, and commercial spaces</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We customize every project to match your design preferences and functional needs.
              </p>
            </section>
          )}

          {/* Suitable for All Wooden Surfaces Section - Only for Wood Polish */}
          {service.slug === "wood-polish" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Suitable for All Wooden Surfaces
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our wood polishing services are ideal for:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Wooden furniture (beds, sofas, tables, cabinets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Doors and window frames</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Wardrobes and kitchen units</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Wooden wall panels and flooring</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                No matter the size of the project, we deliver consistent quality and attention to detail.
              </p>
            </section>
          )}

          {/* Suitable for Every Space Section - Only for Wall Textures */}
          {service.slug === "wall-textures" && (
            <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Suitable for Every Space
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our wall texture services are ideal for:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Living rooms and bedrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>TV unit and feature walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Staircase walls and hallways</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Offices, showrooms, and commercial interiors</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Whether you want a bold statement wall or a soft textured finish, we customize the design to match your vision.
              </p>
            </section>
          )}

          {/* Process Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              {service.slug === "home-painting" 
                ? "Our Painting Process" 
                : service.slug === "waterproofing"
                ? "Our Expert Process"
                : "Our Process"}
            </h2>
            {service.slug === "waterproofing" && (
              <p className="text-gray-600 mb-6">
                Our waterproofing process begins with a detailed site inspection to identify the root cause of leakage or dampness. Based on our assessment, we recommend the most effective solution tailored to your property. Skilled professionals then execute the work with proper surface preparation, application techniques, and curing processes to ensure durability and reliability.
              </p>
            )}
            <ol className="space-y-4">
              {service.process.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-brand-orange/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 font-semibold text-brand-orange" aria-label={`Step ${index + 1}`}>
                    {index + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
            {service.slug === "home-painting" && (
              <p className="mt-6 text-gray-600 italic">
                We ensure minimal disruption and a clean handover.
              </p>
            )}
          </section>

          {/* Benefits Section */}
          <section className="mb-12 bg-brand-light rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-6">
              {service.slug === "home-painting" 
                ? "Why Choose Colourfull Homes for Home Painting?" 
                : service.slug === "waterproofing"
                ? "Benefits of Choosing Colourfull Homes"
                : service.slug === "furniture-design"
                ? "Why Choose Colourfull Homes for Furniture Design & Manufacturing?"
                : service.slug === "wallpapers-panels"
                ? "Benefits of Wallpaper & Wall Panels"
                : service.slug === "wall-textures"
                ? "Benefits of Wall Textures"
                : service.slug === "wood-polish"
                ? "Why Choose Colourfull Homes?"
                : "Benefits"}
            </h2>
            {service.slug === "home-painting" && (
              <p className="text-gray-700 mb-6">
                We focus on quality workmanship and customer satisfaction at every step.
              </p>
            )}
            {service.slug === "waterproofing" && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                Waterproofing not only extends the life of your building but also improves indoor air quality and overall comfort. Whether you are dealing with active leakage or planning preventive treatment, Colourfull Homes is your trusted partner for reliable waterproofing solutions.
              </p>
            )}
            {service.slug === "furniture-design" && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                We combine creativity with technical expertise to deliver furniture that enhances everyday living.
              </p>
            )}
            {service.slug === "wallpapers-panels" && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                They are ideal for homeowners who want quick yet impactful interior upgrades.
              </p>
            )}
            {service.slug === "wall-textures" && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wall textures are not just visually appealing; they offer practical advantages too. Textured walls also work beautifully with lighting, creating shadows and highlights that add richness to your space.
              </p>
            )}
            {service.slug === "wood-polish" && (
              <p className="text-gray-700 mb-6 leading-relaxed">
                We take pride in transforming homes with craftsmanship you can trust.
              </p>
            )}
            <ul className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why Choose Section - Only for Wall Textures */}
          {service.slug === "wall-textures" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Why Choose Colourfull Homes?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We focus on quality, creativity, and customer satisfaction in every project.
              </p>
            </section>
          )}

          {/* Why Choose Section - Only for Wallpapers & Panels */}
          {service.slug === "wallpapers-panels" && (
            <section className="mb-12 bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                Why Choose Colourfull Homes?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Customer satisfaction and quality workmanship are at the heart of everything we do.
              </p>
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-white border-2 border-brand-orange rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
              {service.slug === "home-painting" 
                ? "Get a Free Painting Quote Today" 
                : service.slug === "waterproofing"
                ? "Protect Your Home for Years to Come"
                : service.slug === "furniture-design"
                ? "Furniture That Completes Your Home"
                : service.slug === "wallpapers-panels"
                ? "Upgrade Your Interiors with Style"
                : service.slug === "wall-textures"
                ? "Redefine Your Walls with Texture"
                : service.slug === "wood-polish"
                ? "Bring Back the Natural Shine"
                : "Ready to Get Started?"}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {service.slug === "home-painting" 
                ? "Transform your home with professional painting services you can trust. Contact Colourfull Homes today for a free site visit and expert advice."
                : service.slug === "waterproofing"
                ? "📞 Get in touch today for a professional inspection and a hassle-free waterproofing service that keeps your home safe, dry, and damage-free for years."
                : service.slug === "furniture-design"
                ? "Well-designed furniture brings harmony to your interiors and improves daily comfort. With Furniture Designing & Manufacturing by Colourfull Homes, you get thoughtfully crafted pieces that reflect your personality and elevate your home's overall look."
                : service.slug === "wallpapers-panels"
                ? "If you're looking to give your home a refined and modern look, Wallpaper & Wall Panel Services by Colourfull Homes are the perfect choice. From subtle elegance to bold design statements, we bring your walls to life with style and precision."
                : service.slug === "wall-textures"
                ? "If you're looking to upgrade your interiors without major renovations, wall textures are the perfect solution. With Colourfull Homes Wall Texture Services, you get stylish walls that stand out and leave a lasting impression."
                : service.slug === "wood-polish"
                ? "If your wooden furniture looks dull or worn out, it's time to refresh it. With Colourfull Homes Wood Polish Services, you get durability, elegance, and a smooth finish that enhances your interiors instantly."
                : "Contact us today for a free consultation and quote. Our experts will help you understand the best solutions for your home."}
            </p>
            {service.slug === "home-painting" && (
              <p className="text-gray-700 mb-6 font-medium">
                Whether it&apos;s a single room, a full home makeover, or a new property, Colourfull Homes delivers reliable and affordable painting solutions tailored to your needs.
              </p>
            )}
            {service.slug === "furniture-design" && (
              <p className="text-gray-700 mb-6 font-medium">
                Get in touch with Colourfull Homes today to design and manufacture furniture that&apos;s made exclusively for you—beautiful, functional, and built to last.
              </p>
            )}
            {service.slug === "wallpapers-panels" && (
              <p className="text-gray-700 mb-6 font-medium">
                Contact Colourfull Homes today and transform your walls into works of art.
              </p>
            )}
            {service.slug === "wall-textures" && (
              <p className="text-gray-700 mb-6 font-medium">
                Get in touch with Colourfull Homes today and give your walls the texture and character they deserve.
              </p>
            )}
            {service.slug === "wood-polish" && (
              <p className="text-gray-700 mb-6 font-medium">
                Contact Colourfull Homes today for a professional wood polish service and give your furniture the care it truly deserves.
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all shadow-[var(--shadow-button)] hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-all"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
    </section>
        </div>
      </main>
    </>
  );
}
