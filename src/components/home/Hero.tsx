"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-orange-50 to-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Complete Home Solutions
          <span className="text-orange-500"> Made Simple</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Painting • Waterproofing • Wall Textures • Furniture • Wallpapers
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/contact"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Get Free Consultation
          </a>

          <a
            href="/services"
            className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
