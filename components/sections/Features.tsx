"use client";

import Image from "next/image";
import { ArrowRight, BarChart3, Heart, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Customer Engagment",
      icon: "/images/features/icons/015-chatting.png",
    },
    {
      title: "Clinical Managment",
      icon: "/images/features/icons/013-hospital.png",
    },
    { title: "Speciality Care", icon: "/images/features/icons/008-x-rays.png" },
    { title: "Mobile App", icon: "/images/features/icons/012-smartphone.png" },
    {
      title: "Care at Distance",
      icon: "/images/features/icons/006-ambulance.png",
    },
    {
      title: "Revenue Cycle",
      icon: "/images/features/icons/005-credit-card.png",
    },
    {
      title: "Managed Care",
      icon: "/images/features/icons/004-heart.png",
    },
    {
      title: "Population Health",
      icon: "/images/features/icons/003-medicine.png",
    },
    {
      title: "Community Connect",
      icon: "/images/features/icons/002-molecule.png",
    },
    { title: "Interoperability", icon: "/images/features/icons/worldwide.png" },
    {
      title: "Regulation Compliance",
      icon: "/images/features/icons/007-report-1.png",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] mb-6">
            Boost your business with{" "}
            <span className="text-[#582974]">Powerful Features</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Everything you need to streamline operations, enhance patient care,
            and grow your healthcare practice.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto px-4">
          {features.map((feature, index) => (
            <div key={index} className="relative group aspect-square">
              {/* Hover glow background */}
              <div className="absolute inset-0 bg-[#582974] rounded-md opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>

              <div className="relative h-full bg-white rounded-md p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center border-2 border-gray-50 group-hover:border-transparent">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-6 relative transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#4b5563] leading-tight px-2 group-hover:text-[#582974] transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Schedule Demo CTA Box */}
          <div className="relative group aspect-square">
            <div className="h-full w-full bg-[#f9fafb] rounded-md p-6 shadow-sm flex flex-col items-center justify-between text-center relative overflow-hidden border-2 border-transparent">
              {/* Top Right Icon Decoration */}
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 relative">
                  <Image
                    src="/images/icons/plus-icon.svg"
                    alt="Qurix Plus"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-grow flex items-center justify-center pt-8">
                <p className="text-sm md:text-base text-[#6b7280] leading-relaxed font-medium px-4">
                  Free versions of every Qurix. Start now and upgrade as you
                  grow.
                </p>
              </div>

              <button
                className="group/btn flex items-center justify-center gap-2 cursor-pointer w-full py-4 bg-[#3b125a] hover:bg-[#2d0e45] text-white font-bold text-lg rounded-sm transition-colors mt-6 tracking-wide"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Schedule Demo
                <ArrowRight
                  size={20}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
