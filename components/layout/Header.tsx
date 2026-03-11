"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import DemoModal from "../ui/demo-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const navLinks = [
    { name: "Product", href: "#features" },
    { name: "Modules", href: "#modules" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center h-full"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  window.history.pushState(null, "", "/");
                }
              }}
            >
              <img
                src="/images/brand/logo.svg"
                alt="Qurix Logo"
                className="w-auto h-full max-h-[45px] md:max-h-[55px] object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#4b5563] hover:text-[#582974] transition-all font-bold text-[15px] tracking-tight py-2 px-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#582974] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right Side - Phone & Demo CTA */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-3 group cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#582974] group-hover:text-white transition-all duration-300 border border-slate-100">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-extrabold text-[#111827] leading-none">
                    +91 - 7075740042
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="group flex items-center gap-2 px-8 py-4 bg-[#582974] text-white rounded-xl font-bold text-[14px] hover:bg-[#4a2262] transition-all duration-300 shadow-xl shadow-purple-500/10 active:scale-[0.98]"
              >
                Schedule Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#111827] hover:text-[#582974] transition-colors relative z-[1001]"
              aria-label="Toggle menu"
            >
              <div className="relative w-7 h-7">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-white transition-all duration-500 md:hidden overflow-y-auto ${
          isMenuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="container-custom pt-32 pb-12 flex flex-col gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-black text-[#111827] hover:text-[#582974] transition-colors border-b border-slate-50 pb-4"
            >
              {link.name}
            </a>
          ))}

          <div className="mt-8 space-y-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#582974] flex items-center justify-center text-white">
                  <Phone size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xl font-black text-[#111827]">
                    +91 - 7075740042
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsDemoModalOpen(true);
              }}
              className="flex items-center justify-center w-full px-8 py-5 bg-[#582974] text-white rounded-2xl font-black text-xl shadow-2xl shadow-purple-500/20 active:scale-95 transition-transform"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
