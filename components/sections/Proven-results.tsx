"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const results = [
  {
    value: 35,
    suffix: "%",
    label: "Faster Billing Cycles",
    description:
      "From patient discharge to claim clearance — reducing revenue collection timelines significantly.",
  },
  {
    value: 40,
    suffix: "%",
    label: "Reduction in Admin Workload",
    description:
      "Automated workflows eliminate manual data entry, freeing staff to focus on patient care.",
  },
  {
    value: 20,
    suffix: "%",
    label: "Patient Turnaround Improvement",
    description:
      "Streamlined OPD flows, faster diagnostics, and better care coordination reduce wait times.",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-none mb-4"
    >
      {count}
      {suffix}
    </span>
  );
};

export default function ProvenResults() {
  return (
    <section
      id="results"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-[#14bbd3] to-[#0d99ad]"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-black/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="inline-block px-6 py-2 rounded-full bg-white/10 text-white/80 text-[11px] font-bold uppercase tracking-[0.15em] mb-10 border border-white/10">
            Proven Results
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold mb-8 text-white leading-[1.15]">
            Real Impact Across <br className="hidden lg:block" /> Every Hospital
            We Partner With
          </h2>
          <p className="text-[18px] text-white/60 max-w-3xl mx-auto leading-relaxed font-medium">
            Hospitals using QURIX see measurable improvements in operational
            efficiency, patient experience, and financial performance.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-[32px] p-10 md:p-12 transition-all duration-500 hover:bg-white/[0.15] hover:border-white/25 h-full flex flex-col items-center text-center shadow-2xl"
            >
              <Counter value={result.value} suffix={result.suffix} />

              <h3 className="text-[22px] font-bold mb-4 text-white leading-tight">
                {result.label}
              </h3>

              <p className="text-white/60 leading-relaxed text-[15px] font-normal">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
