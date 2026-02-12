"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WhatIsQurix() {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Side: Illustration */}
          <div className="w-full lg:w-[45%] flex justify-center items-center">
            <div className="relative w-full aspect-[16/9] md:aspect-[4/3] max-w-[550px]">
              <Image
                src="/images/services/what-is-qurix.svg"
                alt="Patient Cycle Management Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-[50%] space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-[900] text-[#1a1a1a] leading-[1.15] tracking-tight">
              Manage the entire{" "}
              <span className="text-[#582974]">Patient-cycle</span>{" "}
              <br className="hidden md:block" />
              on one <span className="text-[#582974]">unified platform</span>
            </h2>

            <p className="text-[#64748b] text-sm md:text-base lg:text-[15.5px] leading-[1.6] max-w-2xl font-medium tracking-tight">
              All the dashboards, actionable insights, easy customizations,
              flexible reports, data exchange, automations, business processes,
              standards are at the assistance of organization. iMediHub meets
              all comprehensive IT needs of healthcare industry
            </p>

            <div className="pt-4 md:pt-6">
              <button
                className="px-8 py-4 healthcare-primary text-white font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
