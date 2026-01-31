"use client";

import { useState } from "react";
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
              className="w-auto h-full max-h-[64px] md:max-h-[70px] object-contain pointer-events-none"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-[#582974] transition-colors font-medium"
            >
              Home
            </a>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Features
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Services
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
