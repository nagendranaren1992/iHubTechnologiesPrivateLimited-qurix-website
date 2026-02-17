"use client";

import React from "react";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Operational Control Positioning",
    description:
      "Complete visibility and control over every aspect of your healthcare operations from a single dashboard",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Modular Adoption Model",
    description:
      "Start with what you need, scale as you grow. No forced bundling or unnecessary complexity",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
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
    ),
    title: "Fast Implementation",
    description:
      "Go live in weeks, not months. Minimal disruption with maximum impact on your operations",
  },
];

export default function WhyQurix() {
  return (
    <section id="why-qurix" className="py-16 md:py-24 bg-[#582974]/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            Why <span className="text-[#582974]">QURIX</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Built for healthcare, designed for growth, optimized for results
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group h-full">
              {/* Hover glow background */}
              <div className="absolute inset-0 bg-[#582974] rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 border-2 border-[#582974]/10 group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#582974] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#582974] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
