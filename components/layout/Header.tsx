"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <img
              src="/images/brand/logo.svg"
              alt="Qurix Logo"
              className="w-auto h-full max-h-[50px] md:max-h-[60px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <a
              href="#features"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Blog
            </Link>
          </div>

          {/* Desktop Sales & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-cyan-100/50 flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 overflow-hidden p-1.5">
                <img
                  src="/images/icons/sales.svg"
                  alt="Sales"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-bold text-gray-700">
                  Sales: 040-328 8324
                </span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>

            <Link
              href="/#contact"
              className="px-8 py-3 bg-[#00bed5] text-white rounded-lg font-bold hover:bg-[#00a7bc] transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Get started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
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
              className="text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
            >
              Contact
            </a>
            {/* Blog Link */}
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold text-gray-800 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            {/* Mobile Sales & CTA */}
            <div className="mt-4 space-y-6">
              <div className="flex items-center gap-4 px-4 py-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center overflow-hidden p-2">
                  <img
                    src="/images/icons/sales.svg"
                    alt="Sales"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Sales Inquiry
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-800">
                      040-328 8324
                    </span>
                    <ChevronDown size={16} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-8 py-4 bg-[#00bed5] text-white rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/20"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
