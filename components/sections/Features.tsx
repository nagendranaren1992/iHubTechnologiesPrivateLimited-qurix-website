"use client";

import React from "react";
import {
  Heart,
  Activity,
  Sparkles,
  Smartphone,
  Video,
  DollarSign,
  CreditCard,
  Users,
  Home,
  Globe,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Patient Engagement",
    description:
      "Digital patient onboarding, appointment scheduling, communication, and patient experience management — delivering a seamless journey from registration to discharge.",
    icon: <Heart size={24} />,
    isLarge: true,
  },
  {
    title: "Clinical Management",
    description:
      "Streamlined clinical workflows including OPD, IPD, diagnostics, treatment records, and care coordination.",
    icon: <Activity size={24} />,
  },
  {
    title: "Specialty Care Management",
    description:
      "Support for cardiology, orthopedics, radiology, oncology, and more specialized departments.",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Mobile Healthcare Access",
    description:
      "Mobile applications for doctors, staff, and patients to manage care anytime, anywhere.",
    icon: <Smartphone size={24} />,
  },
  {
    title: "Care at Distance",
    description:
      "Telemedicine capabilities for remote consultations and virtual patient monitoring.",
    icon: <Video size={24} />,
  },
  {
    title: "Revenue Cycle Management",
    description:
      "Complete billing lifecycle management from coding to claims processing and revenue tracking.",
    icon: <DollarSign size={24} />,
  },
  {
    title: "Managed Care Programs",
    description:
      "Support for insurance integrations, care programs, and long-term patient care models.",
    icon: <CreditCard size={24} />,
  },
  {
    title: "Population Health Analytics",
    description:
      "Use data-driven insights to manage patient populations and improve healthcare outcomes.",
    icon: <Users size={24} />,
  },
  {
    title: "Community Health Connect",
    description:
      "Enable collaboration between healthcare providers, patients, and community healthcare systems.",
    icon: <Home size={24} />,
  },
  {
    title: "Interoperability Layer",
    description:
      "Seamless integration with existing hospital systems, labs, pharmacies, and third-party platforms.",
    icon: <Globe size={24} />,
  },
  {
    title: "Compliance & Regulations",
    description:
      "Ensure adherence to healthcare regulatory requirements, audit trails, and data security standards.",
    icon: <ShieldCheck size={24} />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-[#F9FAFB]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="inline-block px-6 py-2 rounded-full bg-[#ecfeff] text-[#14bbd3] text-[11px] font-bold uppercase tracking-[0.15em] mb-8">
            Platform Capabilities
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold mb-8 text-[#1a1a1a] leading-[1.15]">
            Powerful Capabilities to Run Modern Healthcare Systems
          </h2>
          <p className="text-[17px] text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            QURIX provides a comprehensive set of modules designed to improve
            efficiency, patient care, and hospital operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group rounded-[24px] p-8 shadow-sm transition-all duration-300 flex flex-col items-start text-left border-2 border-[#14bbd3]/10 hover:bg-[#14bbd3] hover:border-[#14bbd3] hover:shadow-xl hover:shadow-purple-500/5 ${
                feature.isLarge ? "lg:col-span-2" : ""
              }`}
            >
              {/* Icon Box */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#E6F9F7] group-hover:bg-white/10"
              >
                <div className="text-[#14bbd3] group-hover:text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-bold mb-3 leading-tight text-[#1a1a1a] group-hover:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-[13px] text-gray-500 group-hover:text-white/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
