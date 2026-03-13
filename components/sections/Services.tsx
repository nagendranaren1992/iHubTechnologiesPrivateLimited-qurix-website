"use client";

import React from "react";
import { Book, Wrench, Coffee, TrendingUp, Hexagon } from "lucide-react";

const services = [
  {
    title: "Implementation",
    description:
      "Complete platform deployment including configuration, integrations, and hospital workflow alignment.",
    icon: <Hexagon size={20} className="text-[#14bbd3]" strokeWidth={1.5} />,
  },
  {
    title: "Training",
    description:
      "Comprehensive staff training programs to ensure smooth platform adoption.",
    icon: <Book size={20} className="text-[#14bbd3]" strokeWidth={1.5} />,
  },
  {
    title: "Technical Services",
    description:
      "Dedicated technical support, platform customization, and infrastructure optimization.",
    icon: <Wrench size={20} className="text-[#14bbd3]" strokeWidth={1.5} />,
  },
  {
    title: "Managed Support",
    description:
      "Ongoing system monitoring, upgrades, and performance improvements.",
    icon: <Coffee size={20} className="text-[#14bbd3]" strokeWidth={1.5} />,
  },
  {
    title: "Continuous Optimization",
    description:
      "Regular platform improvements based on evolving healthcare requirements.",
    icon: <TrendingUp size={20} className="text-[#14bbd3]" strokeWidth={1.5} />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-[#fff] relative overflow-hidden"
    >
      {/* Subtle Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-[10%] -right-24 w-96 h-96 bg-[#14bbd3]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] -left-24 w-96 h-96 bg-[#14bbd3]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="inline-block px-5 py-2 rounded-full bg-[#ecfeff] text-[#14bbd3] text-[11px] font-bold uppercase tracking-[0.15em] mb-8 border border-[#14bbd3]/10">
            Our Services
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold mb-8 text-[#1a1a1a] leading-[1.15] tracking-tight">
            Services to Ensure Successful <br className="hidden lg:block" />{" "}
            Healthcare Transformation
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Beyond software, QURIX provides expert services to ensure seamless{" "}
            <br className="hidden md:block" /> implementation and continuous
            optimization.
          </p>
        </div>

        {/* Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white hover:bg-[#14bbd3] rounded-[24px] border-2 border-[#14bbd3]/10 hover:border-[#14bbd3] hover:shadow-xl p-8 transition-all duration-300 flex flex-col items-start min-h-[300px]"
            >
              {/* Icon Box - Circular to match premium aesthetic */}
              <div className="w-12 h-12 rounded-full border border-[#14bbd3]/20 bg-[#f0fdfa] flex items-center justify-center mb-10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110">
                <div className="text-[#14bbd3] group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(
                    service.icon as React.ReactElement<{ className?: string }>,
                    {
                      className: undefined,
                    },
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold mb-4 text-[#1a1a1a] group-hover:text-white transition-colors duration-300 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-[13px] leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
