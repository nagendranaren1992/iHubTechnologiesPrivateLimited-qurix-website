"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Grid,
  Zap,
  Briefcase,
  MessageSquare,
  FileText,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toggleMobileMenu = (menu: string) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

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
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Home
              </Link>

              {/* Product Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base py-4">
                  Product
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href="#problems"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover/item:bg-red-100 transition-colors">
                      <AlertCircle size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Problems
                      </div>
                      <div className="text-xs text-gray-500">
                        Industry challenges
                      </div>
                    </div>
                  </a>
                  <a
                    href="#why-qurix"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 group-hover/item:bg-purple-100 transition-colors">
                      <HelpCircle size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Why QURIX
                      </div>
                      <div className="text-xs text-gray-500">
                        Our unique value
                      </div>
                    </div>
                  </a>
                  <a
                    href="#modules"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover/item:bg-blue-100 transition-colors">
                      <Grid size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Modules
                      </div>
                      <div className="text-xs text-gray-500">
                        Core components
                      </div>
                    </div>
                  </a>
                  <a
                    href="#features"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover/item:bg-amber-100 transition-colors">
                      <Zap size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Features
                      </div>
                      <div className="text-xs text-gray-500">
                        Key capabilities
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <a
                href="#services"
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Services
              </a>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base py-4">
                  Resources
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href="#testimonials"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-500 group-hover/item:bg-teal-100 transition-colors">
                      <MessageSquare size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Testimonials
                      </div>
                      <div className="text-xs text-gray-500">
                        Client success stories
                      </div>
                    </div>
                  </a>
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover/item:bg-indigo-100 transition-colors">
                      <FileText size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        Blog
                      </div>
                      <div className="text-xs text-gray-500">
                        Latest updates
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors font-medium text-sm lg:text-base"
              >
                Contact
              </a>
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
                className="group flex items-center gap-2 px-8 py-3 bg-[#582974] text-white rounded-lg font-bold hover:bg-[#4a2262] transition-all duration-300 shadow-lg shadow-purple-500/20 cursor-pointer"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors relative z-[1001]"
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7">
                <Menu
                  size={28}
                  className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
                />
                <X
                  size={28}
                  className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}
                />
              </div>
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
        <div className="container-custom pt-32 pb-12 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Home
            <ArrowRight size={20} className="text-primary" />
          </Link>

          {/* Mobile Product Accordion */}
          <div className="border-b border-gray-100 pb-4">
            <button
              onClick={() => toggleMobileMenu("product")}
              className="w-full text-2xl font-bold text-gray-900 flex items-center justify-between"
            >
              Product
              <ChevronDown
                size={20}
                className={`text-primary transition-transform duration-300 ${mobileExpanded === "product" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === "product" ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-4 pl-4">
                <a
                  href="#problems"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-gray-600"
                >
                  <AlertCircle size={18} className="text-red-500" /> Problems
                </a>
                <a
                  href="#why-qurix"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-gray-600"
                >
                  <HelpCircle size={18} className="text-purple-500" /> Why QURIX
                </a>
                <a
                  href="#modules"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-gray-600"
                >
                  <Grid size={18} className="text-blue-500" /> Modules
                </a>
                <a
                  href="#features"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-gray-600"
                >
                  <Zap size={18} className="text-amber-500" /> Features
                </a>
              </div>
            </div>
          </div>

          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Services
            <ArrowRight size={20} className="text-primary" />
          </a>

          {/* Mobile Resources Accordion */}
          <div className="border-b border-gray-100 pb-4">
            <button
              onClick={() => toggleMobileMenu("resources")}
              className="w-full text-2xl font-bold text-gray-900 flex items-center justify-between"
            >
              Resources
              <ChevronDown
                size={20}
                className={`text-primary transition-transform duration-300 ${mobileExpanded === "resources" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === "resources" ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-4 pl-4">
                <a
                  href="#testimonials"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-gray-600"
                >
                  <MessageSquare size={18} className="text-teal-500" />{" "}
                  Testimonials
                </a>
                <Link
                  href="/blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium text-gray-600"
                >
                  <FileText size={18} className="text-indigo-500" /> Blog
                </Link>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold text-gray-900 flex items-center justify-between border-b border-gray-100 pb-4"
          >
            Contact
            <ArrowRight size={20} className="text-primary" />
          </a>

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
              className="group flex items-center justify-center gap-2 w-full px-8 py-5 bg-[#00bed5] text-white rounded-2xl font-black text-xl shadow-2xl shadow-cyan-500/30 active:scale-95 transition-transform cursor-pointer"
            >
              Schedule Demo
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
