"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Paintbrush, 
  Calculator, 
  Droplets, 
  Palette, 
  Palette as ShadeIcon,
  UserCheck
} from "lucide-react";

const quickServices = [
  { icon: Paintbrush, label: "Painting services", href: "/services/home-painting" },
  { icon: Calculator, label: "Painting costs", href: "/contact" },
  { icon: Droplets, label: "Waterproofing costs", href: "/services/waterproofing" },
  { icon: Palette, label: "Interior decor solutions", href: "/services" },
  { icon: ShadeIcon, label: "Get a personalised shade", href: "/contact" },
  { icon: UserCheck, label: "Find a contractor", href: "/contact" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/duhtmczhn/image/upload/v1768061729/homepage_b79qb7.jpg"
          alt="Professional home painting and renovation services"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Complete Home Solutions
              <span className="text-brand-orange block mt-2">Made Simple</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
              Professional home painting, waterproofing, wall textures & furniture solutions.
            </p>

            <p className="text-base text-white/80 mb-8">
              One-stop solution for all your home improvement needs
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-[var(--shadow-button)] hover:shadow-xl"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Browse Services
              </Link>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-[var(--shadow-card)] border border-gray-200"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
              Quick Services
            </h2>
            <p className="text-gray-600 mb-8 text-sm">
              Explore our range of home solutions
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {quickServices.map((service, index) => {
                const Icon = service.icon;
                const isBlue = index % 2 === 1;
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-brand-light transition-all hover:scale-105 border border-transparent hover:border-brand-blue/20"
                  >
                    <div className={`w-14 h-14 rounded-xl ${
                      isBlue ? 'bg-brand-blue/10' : 'bg-brand-orange/10'
                    } flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${
                        isBlue ? 'text-brand-blue' : 'text-brand-orange'
                      }`} />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 font-medium leading-tight group-hover:text-brand-orange transition-colors">
                      {service.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
