import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Colourfull Homes
          </h3>
          <p className="text-sm">
            Complete home solutions for modern living.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Home Painting</li>
            <li>Waterproofing</li>
            <li>Wall Textures</li>
            <li>Furniture</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm">📞 +91 XXXXX XXXXX</p>
          <p className="text-sm">📧 info@colourfullhomes.com</p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} Colourfull Homes. All rights reserved.
      </div>
    </footer>
  );
}
