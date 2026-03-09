import React from "react";
import { Monitor, DollarSign, Hexagon, Zap } from "lucide-react";

const problems = [
  {
    icon: <Monitor size={24} strokeWidth={1.5} className="text-[#F15A2B]" />,
    title: "Legacy System Complexity",
    description:
      "Many hospitals still rely on disconnected systems that create operational silos and inefficiencies across departments.",
  },
  {
    icon: <DollarSign size={24} strokeWidth={1.5} className="text-[#F15A2B]" />,
    title: "Revenue Leakage",
    description:
      "Billing errors, missed procedures, and delayed claims processing often lead to significant revenue loss.",
  },
  {
    icon: <Hexagon size={24} strokeWidth={1.5} className="text-[#F15A2B]" />,
    title: "Inventory & Supply Visibility",
    description:
      "Lack of real-time inventory tracking leads to stockouts, wastage, and poor medical supply management.",
  },
  {
    icon: <Zap size={24} strokeWidth={1.5} className="text-[#F15A2B]" />,
    title: "Slow Digital Transformation",
    description:
      "Traditional HMS implementations take months and require heavy infrastructure, delaying operational improvements.",
  },
];

export default function IndustryProblems() {
  return (
    <section id="problems" className="py-20 md:py-32 bg-[#F9FAFB]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block px-6 py-2 rounded-full bg-[#EFE9F4] text-[#582974] text-[11px] font-bold uppercase tracking-[0.15em] mb-8">
            Industry Challenges
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold mb-8 text-[#1a1a1a] leading-[1.15]">
            Healthcare Systems Face Complex Operational Challenges
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Hospitals today struggle with fragmented systems, manual workflows,
            and lack of real-time visibility across departments — impacting
            revenue, patient experience, and operational control.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-[32px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 border border-transparent hover:border-gray-100 h-full min-h-[380px] flex flex-col items-start text-left"
            >
              {/* Top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F15A2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Box */}
              <div className="w-12 h-12 bg-[#FFF2F0] rounded-xl flex items-center justify-center mb-6 relative z-10">
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="text-[20px] font-bold mb-4 text-[#1a1a1a] leading-tight">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748b] leading-[1.6] text-[15px] font-normal max-w-[210px] line-clamp-4">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
