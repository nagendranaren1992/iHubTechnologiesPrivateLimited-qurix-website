"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WhatIsQurix() {
  const features = [
    "On-premise or cloud deployment",
    "Business Intelligence",
    "Queue Management",
    "Health Records",
  ];

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            What is<span className="text-[#582974]"> Qurix ?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            A single, affordable comprehensive healthcare management solution to
            manage your entire business – from appointments, sales, purchasing,
            inventory, revenue cycle, patient relationship to reporting and
            analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side - Synced with Hero */}
          <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center p-4">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#582974]/10 to-[#14bbd3]/10 blur-3xl rounded-full opacity-60"></div>

            {/* Desktop Dashboard View */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[85%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white z-10 transition-transform duration-500 hover:scale-[1.01] group">
              <Image
                src="/images/qurix-dashboard-real-2.png"
                alt="Qurix Desktop Dashboard"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Mobile App View */}
            <div className="absolute -right-4 md:-right-8 bottom-8 md:bottom-12 w-[30%] md:w-[28%] aspect-[9/18] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-[6px] border-white bg-gray-900 z-20 transition-transform duration-500 hover:translate-y-[-10px]">
              <Image
                src="/images/qurix-mobile-app-4k.png"
                alt="Qurix Mobile App"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 15vw"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 pl-0 lg:pl-10">
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Gain greater control over your business or subsidiary and grow
              with Qurix. Streamline key processes, gain greater insight into
              your business, and make decisions based on real-time information –
              so you can drive profitable growth.
            </p>

            <ul className="space-y-4 mt-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#582974]/10 flex items-center justify-center group-hover:bg-[#582974] transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#582974] group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                  <span className="text-lg text-gray-800 font-medium tracking-wide">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
