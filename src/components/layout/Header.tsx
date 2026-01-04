"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Colourfull Homes
        </Link>

        <nav className="hidden md:flex gap-6">
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
                  "font-medium transition",
                  isActive
                    ? "text-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600"
        >
          Get Quote
        </Link>
      </div>
    </header>
  );
}
