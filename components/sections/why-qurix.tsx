import React from "react";
import { Shield, Layers, Rocket } from "lucide-react";

const features = [
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: "Operational Command Center",
    description:
      "Gain complete visibility across hospital operations with real-time dashboards, analytics, and intelligent reporting.",
  },
  {
    icon: <Layers size={24} strokeWidth={1.5} />,
    title: "Modular Platform Architecture",
    description:
      "Adopt only the modules you need and expand as your healthcare organization grows.",
  },
  {
    icon: <Rocket size={24} strokeWidth={1.5} />,
    title: "Rapid Implementation",
    description:
      "Deploy in weeks instead of months with minimal disruption to clinical and administrative workflows.",
  },
];

export default function WhyQurix() {
  return (
    <section id="why-qurix" className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block px-6 py-2 rounded-full bg-[#EFE9F4] text-[#582974] text-[11px] font-bold uppercase tracking-[0.15em] mb-8">
            Why QURIX
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold mb-8 text-[#1a1a1a] leading-[1.15]">
            Why Healthcare Organizations Choose QURIX
          </h2>
          <p className="text-[18px] text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Purpose-built healthcare technology designed for scalability,
            operational visibility, and rapid adoption.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white hover:bg-[#582974] rounded-[24px] border-2 border-[#582974]/10 hover:border-[#582974] hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start text-left p-10"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 bg-[#F8F5FA] group-hover:bg-white/10 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110">
                <div className="text-[#582974] group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold mb-4 text-[#1a1a1a] group-hover:text-white transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 group-hover:text-white/90 leading-relaxed text-[16px] font-medium transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
