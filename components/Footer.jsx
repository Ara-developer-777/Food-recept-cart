'use client'
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#e7750a] text-white mt-16">
      <div className="max-w-[1500px] mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-3xl font-bold">Food</h2>
          <p className="mt-3 text-sm text-white/80">
            Discover delicious recipes from around the world.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Food App. All rights reserved.
      </div>
    </footer>
  );
}
