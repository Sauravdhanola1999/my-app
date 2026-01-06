import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-brand-blue">Colourfull</span>{" "}
              <span className="text-white">Homes</span>
            </h3>
            <p className="text-base leading-relaxed text-gray-400 mb-6">
              Complete home solutions for modern living. Trusted by thousands of homeowners.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/colourfull.homes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-brand-blue flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/colourfull.homes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
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
                <a href="tel:+918050013054" className="hover:text-brand-orange transition-colors">
                  +91 8050013054
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-brand-orange" />
                <a href="mailto:colourfullhomes07@gmail.com" className="hover:text-brand-orange transition-colors">
                  colourfullhomes07@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-brand-orange mt-1 shrink-0" />
                <span>HSR layout, Sec-1, Bengaluru, Karnataka 560102</span>
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
