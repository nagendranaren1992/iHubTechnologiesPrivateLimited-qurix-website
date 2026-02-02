"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center h-full">
            <video
              src="/images/qurix_logo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              suppressHydrationWarning
              className="w-auto h-full max-h-[64px] md:max-h-[70px] object-contain pointer-events-none"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#582974] transition-colors font-medium"
            >
              Home
            </Link>
            <a
              href="#features"
              className="text-gray-700 hover:text-[#582974] transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-[#582974] transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-[#582974] transition-colors font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#582974] transition-colors font-medium"
            >
              Contact
            </a>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[#582974] transition-colors font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Desktop Spacer - Maintains layout balance after removing CTA button */}
          <div className="hidden md:block w-[130px]" aria-hidden="true" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#582974] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-transform duration-300 md:hidden overflow-y-auto ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ top: "64px" }}
        >
          <div className="container-custom py-8 flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-[#582974] transition-colors"
            >
              Home
            </Link>
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-[#582974] transition-colors"
            >
              Features
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-[#582974] transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-[#582974] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-[#582974] transition-colors"
            >
              Contact
            </a>
            {/* Blog Link */}
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-[#582974] transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
