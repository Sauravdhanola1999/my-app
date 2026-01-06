"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-brand-blue">Colourfull</span>{" "}
          <span className="text-brand-dark">Homes</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "text-base font-medium transition-colors relative",
                  isActive
                    ? "text-brand-orange"
                    : "text-gray-700 hover:text-brand-orange"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange"></span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:block bg-brand-orange text-white px-6 py-3 rounded-lg text-base font-semibold hover:opacity-90 transition-all shadow-sm hover:shadow"
          >
            Get Quote
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white animate-in slide-in-from-top">
          <nav className="px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "block py-3 px-4 text-base font-medium transition-colors rounded-lg",
                    isActive
                      ? "text-brand-orange bg-brand-orange/10"
                      : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 bg-brand-orange text-white px-6 py-3 rounded-lg text-base font-semibold text-center hover:opacity-90 transition-all"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
