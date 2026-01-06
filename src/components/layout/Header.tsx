"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { services } from "@/src/data/services";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Map service titles to match the dropdown names
const serviceNames: Record<string, string> = {
  "Home Painting": "Home Painting",
  "Waterproofing": "Waterproofing Services",
  "Wall Textures": "Wall Texture",
  "Wallpapers & Panels": "Wallpaper & Wall Panel",
  "Wood Polish": "Wood Polish",
  "Furniture Design": "Furniture Designing & Manufacturing",
};

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

            if (item.hasDropdown) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "text-base font-medium transition-colors relative flex items-center gap-1",
                      isActive
                        ? "text-brand-orange"
                        : "text-gray-700 hover:text-brand-orange"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={clsx(
                      "w-4 h-4 transition-transform",
                      servicesDropdownOpen && "rotate-180"
                    )} />
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-orange"></span>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {services.map((service) => {
                        const Icon = service.icon;
                        const displayName = serviceNames[service.title] || service.title;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-orange transition-colors"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <Icon className="w-5 h-5 text-brand-orange" />
                            <span className="text-sm font-medium">{displayName}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

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

              if (item.hasDropdown) {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={clsx(
                        "w-full flex items-center justify-between py-3 px-4 text-base font-medium transition-colors rounded-lg",
                        isActive
                          ? "text-brand-orange bg-brand-orange/10"
                          : "text-gray-700 hover:text-brand-orange hover:bg-gray-50"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={clsx(
                        "w-4 h-4 transition-transform",
                        mobileServicesOpen && "rotate-180"
                      )} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 mt-2 space-y-1">
                        {services.map((service) => {
                          const Icon = service.icon;
                          const displayName = serviceNames[service.title] || service.title;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="flex items-center gap-3 py-2 px-4 text-sm text-gray-600 hover:text-brand-orange hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <Icon className="w-4 h-4 text-brand-orange" />
                              <span>{displayName}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

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
