"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Heart, Check, TrendingUp, Activity } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-25 pb-20 md:pt-25 md:pb-24 lg:pt-40 lg:pb-32 bg-white"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[#582974]/[0.02] pointer-events-none"></div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EFE9F4] text-[#582974] px-5 py-2.5 rounded-full text-sm font-bold border border-[#DCD0E6]">
              <Heart size={16} fill="#582974" className="text-[#582974]" />
              Healthcare Innovation Platform
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-[54px] font-bold leading-tight text-[#1a1a1a]">
              Manage the entire{" "}
              <span className="text-[#582974]">Patient Journey</span>
              <br />
              on one{" "}
              <span className="text-[#582974]">Intelligent Platform</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-[17px] text-gray-600 leading-relaxed max-w-xl">
              QURIX is a unified healthcare operations platform designed to
              streamline hospital workflows — from patient engagement and
              clinical management to billing, inventory, and population health.
            </p>
            <p className="landing-section-desc">
              Built for modern healthcare organizations that want{" "}
              <strong>
                efficiency, visibility, and scalable digital transformation.
              </strong>
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="cursor-pointer group bg-[#582974] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6b3a8a] hover:shadow-xl hover:shadow-[#582974]/25 transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#features"
                className="cursor-pointer border-2 border-[#582974] text-[#582974] px-8 py-4 rounded-full font-semibold hover:bg-[#582974]/5 transition-all duration-300"
              >
                Explore Features
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-[#14bbd3]" strokeWidth={3} />
                <span className="text-[15px] text-[#64748b] font-medium">
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-[#14bbd3]" strokeWidth={3} />
                <span className="text-[15px] text-[#64748b] font-medium">
                  Go live in weeks
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-[#14bbd3]" strokeWidth={3} />
                <span className="text-[15px] text-[#64748b] font-medium">
                  Free trial available
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Floating Card Illustration */}
          <div
            className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="relative z-10 bg-[#0F0A1E] rounded-[32px] p-6 shadow-2xl border border-white/5 overflow-hidden">
                {/* Header Dots */}
                <div className="flex items-center gap-6 mb-10">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em]">
                    Hospital Operations Dashboard
                  </div>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {/* Patients Card */}
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4 sm:p-6">
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      Patients Today
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">
                      2,840
                    </div>
                    <div className="text-[10px] text-white/30 font-medium">
                      OPD, IPD & Emergency
                    </div>
                  </div>

                  {/* Revenue Card */}
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4 sm:p-6">
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      Revenue Today
                    </div>
                    <div className="text-3xl font-bold text-[#14bbd3] mb-1">
                      ₹1.2Cr
                    </div>
                    <div className="text-[10px] text-white/30 font-medium">
                      Billing & collections
                    </div>
                  </div>

                  {/* Bed Occupancy Card */}
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4 sm:p-6">
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      Bed Occupancy
                    </div>
                    <div className="text-3xl font-bold text-[#FFBD2E] mb-1">
                      97.2%
                    </div>
                    <div className="text-[10px] text-white/30 font-medium">
                      Real-time ward visibility
                    </div>
                  </div>

                  {/* Claims Card */}
                  <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4 sm:p-6">
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2">
                      Claims Processed
                    </div>
                    <div className="text-3xl font-bold text-[#27C93F] mb-1">
                      340
                    </div>
                    <div className="text-[10px] text-white/30 font-medium">
                      Insurance cleared today
                    </div>
                  </div>
                </div>

                {/* Bottom Chart Mockup */}
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-4 sm:p-6 relative overflow-hidden h-24">
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#14bbd3]/10 to-transparent"></div>
                  <svg
                    className="absolute bottom-0 left-0 w-full h-12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 40 Q 50 20, 100 35 T 200 15 T 300 30 T 400 10 L 400 50 L 0 50 Z"
                      fill="none"
                      stroke="#14bbd3"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Floating Improvement Badge */}
              <div className="absolute -top-10 right-4 lg:-right-10 z-20 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-xl bg-[#E6F9F7] flex items-center justify-center">
                  <TrendingUp className="text-[#14bbd3]" size={24} />
                </div>
                <div>
                  <div className="text-[16px] font-black text-[#14bbd3]">
                    +35% Faster Billing
                  </div>
                  <div className="text-[12px] text-gray-400 font-medium">
                    Avg. improvement
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#582974]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#14bbd3]/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
