"use client";

import React from "react";
import { Star } from "lucide-react";

export default function HospitalResults() {
  return (
    <section className="py-20 md:py-32 bg-[#F9FAFB]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Success Story Card */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#4F39B3] to-[#6D58D8] rounded-[40px] p-8 md:p-12 text-white shadow-2xl">
              {/* Branded "Ball" Shapes from Screenshot */}
              <div className="absolute -right-24 -top-12 w-[440px] h-[440px] bg-[#7C66E3] rounded-full opacity-40 blur-[40px] pointer-events-none"></div>
              <div className="absolute -left-20 bottom-[-10%] w-[300px] h-[300px] bg-[#3B2D85] rounded-full opacity-30 blur-[30px] pointer-events-none"></div>

              <div className="relative z-10 space-y-10">
                {/* Success Story Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="12"
                    height="12"
                    className="text-white"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-[11px] font-bold uppercase tracking-[0.1em]">
                    Success Story
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl md:text-[28px] font-extrabold leading-[1.3] tracking-tight">
                  How Avani Hospital Reduced Billing Leakage by 18%
                </h3>

                {/* Card Subtext */}
                <p className="text-white/80 text-[15px] leading-relaxed font-medium">
                  Using QURIX's Revenue Cycle Management and automated claims
                  processing to recover lost revenue.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Content & Metrics */}
          <div className="flex flex-col gap-10 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl lg:text-[32px] font-extrabold text-[#1a1a1a] leading-tight tracking-tight">
                Real Results from Real Hospitals
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium max-w-xl">
                Healthcare organizations across India are transforming their
                operations with QURIX. From reducing billing errors to improving
                patient turnaround, the impact is measurable and significant.
              </p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-[32px] font-black text-[#3B2D85] leading-none tracking-tight">
                  18%
                </div>
                <div className="text-[13px] text-gray-400 font-medium whitespace-nowrap">
                  Billing leakage reduced
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[32px] font-black text-[#3B2D85] leading-none tracking-tight">
                  3x
                </div>
                <div className="text-[13px] text-gray-400 font-medium whitespace-nowrap">
                  Faster claims processing
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[32px] font-black text-[#3B2D85] leading-none tracking-tight">
                  2 weeks
                </div>
                <div className="text-[13px] text-gray-400 font-medium whitespace-nowrap">
                  Implementation time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
