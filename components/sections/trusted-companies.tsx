"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const companies = [
  { name: "Alavi", logo: "/images/clients/alavi.png", id: 1 },
  { name: "Amor", logo: "/images/clients/amor.png", id: 2 },
  { name: "Avani", logo: "/images/clients/avani.png", id: 3 },
  { name: "BlockArt", logo: "/images/clients/blockart.svg", id: 4 },
  { name: "Demmand", logo: "/images/clients/demmand.svg", id: 5 },
  { name: "Dielco", logo: "/images/clients/dielco.svg", id: 6 },
  { name: "Digicom", logo: "/images/clients/digicom.svg", id: 7 },
  { name: "DSymbol", logo: "/images/clients/dsymbol.svg", id: 8 },
  { name: "Sidarth", logo: "/images/clients/sidarth.png", id: 9 },
  { name: "Sravani", logo: "/images/clients/sravani.png", id: 10 },
];

export default function TrustedCompanies() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        className="relative py-6 overflow-hidden border-y border-white/10"
        style={{
          background: "linear-gradient(135deg, #582974 0%, #753a93 100%)",
        }}
      >
        {/* Same structure as real version for hydration match */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#582974] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#753a93] to-transparent z-10 pointer-events-none"></div>

        <div className="container-custom">
          <div className="text-center mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
              TRUSTED BY
            </p>
          </div>
          <div className="h-10" />
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative py-6 overflow-hidden border-y border-white/10"
      style={{
        background: "linear-gradient(135deg, #582974 0%, #753a93 100%)",
      }}
    >
      {/* Edge Masking (Fades) - Full Width */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#582974] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#753a93] to-transparent z-10 pointer-events-none"></div>

      <div className="container-custom">
        <div className="text-center mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
            TRUSTED BY
          </p>
        </div>

        {/* Logo Animation Wrapper */}
        <div className="relative pause-hover">
          <div className="flex animate-marquee whitespace-nowrap w-max">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 px-8 group flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default hover:scale-110"
              >
                <div className="relative h-8 w-24 md:h-10 md:w-32 lg:h-12 lg:w-36">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 144px"
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
