import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-brand-blue">Colourfull</span>{" "}
              <span className="text-white">Homes</span>
            </h3>
            <p className="text-base leading-relaxed text-gray-400 mb-4">
              Complete home solutions for modern living. Trusted by thousands of homeowners.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-lg">Services</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/services/home-painting" className="hover:text-white transition-colors">
                  Home Painting
                </Link>
              </li>
              <li>
                <Link href="/services/waterproofing" className="hover:text-white transition-colors">
                  Waterproofing
                </Link>
              </li>
              <li>
                <Link href="/services/wall-textures" className="hover:text-white transition-colors">
                  Wall Textures
                </Link>
              </li>
              <li>
                <Link href="/services/furniture-design" className="hover:text-white transition-colors">
                  Furniture Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-orange hover:text-brand-blue transition-colors font-medium">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-lg">Company</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-brand-orange" />
                +91 XXXXX XXXXX
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-orange" />
                info@colourfullhomes.com
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-brand-orange" />
                Residential & Commercial
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} Colourfull Homes. All rights reserved.
            </p>
            <div className="flex gap-6 text-base">
              <Link href="/about" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="text-gray-500 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
