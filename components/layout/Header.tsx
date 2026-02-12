"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md shadow-sm">
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
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors relative z-[1001]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Sibling of Header to avoid stacking context issues */}
      <div
        className={`fixed inset-0 z-[999] bg-white transition-all duration-500 md:hidden overflow-y-auto ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="container-custom pt-32 pb-12 flex flex-col gap-8">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Home
            <ArrowRight size={20} className="text-primary" />
          </Link>
          <a
            href="#features"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Features
            <ArrowRight size={20} className="text-primary" />
          </a>
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Services
            <ArrowRight size={20} className="text-primary" />
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Testimonials
            <ArrowRight size={20} className="text-primary" />
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Contact
            <ArrowRight size={20} className="text-primary" />
          </a>
          <Link
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Blog
            <ArrowRight size={20} className="text-primary" />
          </Link>

          {/* Mobile Sales & CTA */}
          <div className="mt-6 space-y-8">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center p-3 animate-pulse">
                  <img
                    src="/images/icons/sales.svg"
                    alt="Sales"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-black text-[#582974] uppercase tracking-[0.2em]">
                    Expert Assistance
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-black text-gray-900">
                      040-328 8324
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center px-8 py-5 bg-[#00bed5] text-white rounded-2xl font-black text-xl shadow-2xl shadow-cyan-500/30 active:scale-95 transition-transform"
            >
              Get started now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
