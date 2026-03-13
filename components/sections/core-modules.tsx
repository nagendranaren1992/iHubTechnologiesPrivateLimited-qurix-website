"use client";

import React from "react";
import {
  FileText,
  DollarSign,
  Hexagon,
  Activity,
  Box,
  Users,
} from "lucide-react";

const modules = [
  {
    icon: <FileText size={22} strokeWidth={1.5} />,
    title: "Electronic Medical Records",
    description:
      "Centralized digital patient records enabling efficient clinical decision-making.",
    isFeatured: true,
  },
  {
    icon: <DollarSign size={22} strokeWidth={1.5} />,
    title: "Billing & Revenue",
    description:
      "Automated billing systems with coding support, claim management, and revenue analytics.",
  },
  {
    icon: <Hexagon size={22} strokeWidth={1.5} />,
    title: "Pharmacy Management",
    description:
      "Digital prescription management, pharmacy inventory tracking, and medicine dispensing workflows.",
  },
  {
    icon: <Activity size={22} strokeWidth={1.5} />,
    title: "Laboratory Information System",
    description:
      "Integrated diagnostic workflows with test management, reporting, and lab analytics.",
  },
  {
    icon: <Box size={22} strokeWidth={1.5} />,
    title: "Inventory Control",
    description:
      "Real-time tracking of medical supplies, automated stock alerts, and supply chain optimization.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Hospital Administration",
    description:
      "Staff management, scheduling, department coordination, and operational analytics.",
  },
];

export default function CoreModules() {
  return (
    <section id="modules" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="inline-block px-6 py-2 rounded-full bg-[#ecfeff] text-[#14bbd3] text-[11px] font-bold uppercase tracking-[0.15em] mb-8">
            Core Modules
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold mb-8 text-[#1a1a1a] leading-[1.15]">
            Comprehensive Modules for End-to-End{" "}
            <br className="hidden lg:block" /> Hospital Management
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            QURIX offers modular healthcare solutions designed to cover the
            entire hospital ecosystem.
          </p>
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group rounded-[24px] p-8 transition-all duration-300 flex items-start gap-5 shadow-sm border-2 border-[#14bbd3]/10 hover:bg-[#14bbd3] hover:border-[#14bbd3] hover:shadow-xl hover:shadow-purple-500/5"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-[#F3E8FF] group-hover:bg-white/10">
                <div className="text-[#14bbd3] group-hover:text-white">
                  {module.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-[16px] font-bold mb-2 leading-tight text-[#1a1a1a] group-hover:text-white">
                  {module.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-gray-500 group-hover:text-white/60">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
