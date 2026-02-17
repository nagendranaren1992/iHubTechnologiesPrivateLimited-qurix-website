"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 lg:py-32 bg-white"
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
            <div className="inline-flex items-center gap-2 bg-[#582974]/10 text-[#582974] px-4 py-2 rounded-full text-sm font-medium">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Healthcare Innovation Platform
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a1a]">
              Manage the entire{" "}
              <span className="text-[#582974]">Patient-cycle</span>
              <br />
              on one <span className="text-[#582974]">unified platform</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              All the dashboards, actionable insights, easy customizations,
              flexible reports, data exchange, automations, business processes,
              standards are at the assistance of organization. iMediHub meets
              all comprehensive IT needs of healthcare industry
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="cursor-pointer group bg-[#582974] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6b3a8a] hover:shadow-xl hover:shadow-[#582974]/25 transition-all duration-300 flex items-center gap-2">
                Schedule Demo
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="cursor-pointer border-2 border-[#582974] text-[#582974] px-8 py-4 rounded-full font-semibold hover:bg-[#582974]/5 transition-all duration-300">
                View Features
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-[#14bbd3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-[#14bbd3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Free trial available</span>
              </div>
            </div>
          </div>

          {/* Right Side - Floating Card Illustration */}
          <div
            className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative animate-float">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#582974]/10">
                  <div className="space-y-6">
                    {/* Card Header */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#582974] rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Billing & Revenue */}
                      <div className="bg-[#582974]/5 rounded-xl p-4 border border-[#582974]/10">
                        <svg
                          className="w-8 h-8 text-[#582974] mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div className="h-2 bg-[#582974]/15 rounded-full w-3/4 mb-2"></div>
                        <div className="h-2 bg-[#582974]/10 rounded-full w-1/2"></div>
                      </div>

                      {/* Inventory */}
                      <div className="bg-[#582974]/5 rounded-xl p-4 border border-[#582974]/10">
                        <svg
                          className="w-8 h-8 text-[#582974] mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <div className="h-2 bg-[#582974]/15 rounded-full w-3/4 mb-2"></div>
                        <div className="h-2 bg-[#582974]/10 rounded-full w-1/2"></div>
                      </div>

                      {/* Diagnostics */}
                      <div className="bg-[#582974]/5 rounded-xl p-4 border border-[#582974]/10">
                        <svg
                          className="w-8 h-8 text-[#582974] mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                        <div className="h-2 bg-[#582974]/15 rounded-full w-3/4 mb-2"></div>
                        <div className="h-2 bg-[#582974]/10 rounded-full w-1/2"></div>
                      </div>

                      {/* Clinic Management */}
                      <div className="bg-[#582974]/5 rounded-xl p-4 border border-[#582974]/10">
                        <svg
                          className="w-8 h-8 text-[#582974] mb-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <div className="h-2 bg-[#582974]/15 rounded-full w-3/4 mb-2"></div>
                        <div className="h-2 bg-[#582974]/10 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background blur orbs */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#582974]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-[#14bbd3]/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
