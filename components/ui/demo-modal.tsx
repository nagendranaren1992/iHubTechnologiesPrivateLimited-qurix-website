"use client";

import { X, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-[560px] max-h-[90vh] bg-white rounded-[24px] overflow-y-auto px-6 py-8 sm:px-[40px] sm:py-[44px] shadow-[0_30px_80px_rgba(15,10,30,0.3)] transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] animate-in fade-in zoom-in-95"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors z-10"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4eff8] text-[#582974] mb-6">
            <Calendar size={14} className="stroke-[2.5]" />
            <span className="text-xs font-bold tracking-wide">
              Quick Demo Request
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Book a Personalized Demo
          </h2>
          <p className="text-slate-500 text-[15px] sm:text-base">
            Fill in your details and our team will set up a demo within 24
            hours.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111827]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Dr. Priya Sharma"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
                required
              />
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111827]">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="priya@hospital.com"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111827]">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
                required
              />
            </div>

            {/* Hospital Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111827]">
                Hospital Name
              </label>
              <input
                type="text"
                placeholder="Hospital / Clinic name"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
              />
            </div>
          </div>

          {/* Number of Beds */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#111827]">
              Number of Beds
            </label>
            <div className="relative">
              <select
                className="w-full h-12 px-4 pr-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px] appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="text-slate-400">
                  Select range
                </option>
                <option value="1-50">1-50 Beds</option>
                <option value="51-200">51-200 Beds</option>
                <option value="201-500">201-500 Beds</option>
                <option value="500+">500+ Beds</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-14 bg-[#4B2982] hover:bg-[#3d2169] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors mt-8 shadow-lg shadow-[#4B2982]/20"
          >
            Request Demo
            <ArrowRight size={20} className="stroke-[2.5]" />
          </button>

          {/* Privacy note */}
          <div className="flex items-center justify-center gap-2 mt-6 text-slate-400">
            <ShieldCheck size={16} />
            <span className="text-[13px] font-medium tracking-wide">
              We respect your privacy. No spam, ever.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
