"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const companies = [
  { name: "Alavi", logo: "/clients/alavi.png", id: 1 },
  { name: "Amor", logo: "/clients/amor.png", id: 2 },
  { name: "Avani", logo: "/clients/avani.png", id: 3 },
  { name: "BlockArt", logo: "/clients/blockart.svg", id: 4 },
  { name: "Demmand", logo: "/clients/demmand.svg", id: 5 },
  { name: "Dielco", logo: "/clients/dielco.svg", id: 6 },
  { name: "Digicom", logo: "/clients/digicom.svg", id: 7 },
  { name: "DSymbol", logo: "/clients/dsymbol.svg", id: 8 },
  { name: "Sidarth", logo: "/clients/sidarth.png", id: 9 },
  { name: "Sravani", logo: "/clients/sravani.png", id: 10 },
];

export default function TrustedCompanies() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        className="py-16 overflow-hidden border-y border-white/10"
        style={{
          background: "linear-gradient(135deg, #582974 0%, #753a93 100%)",
        }}
      >
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
              Trusted by Industry Leaders
            </p>
          </div>
          <div className="h-20" />
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative py-16 overflow-hidden border-y border-white/10"
      style={{
        background: "linear-gradient(135deg, #582974 0%, #753a93 100%)",
      }}
    >
      {/* Edge Masking (Fades) - Full Width */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#582974] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#753a93] to-transparent z-10 pointer-events-none"></div>

      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* Logo Animation Wrapper */}
        <div className="relative pause-hover">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 px-12 group flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default hover:scale-110"
              >
                <div className="relative h-12 w-32 md:h-16 md:w-40 lg:h-20 lg:w-48">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
