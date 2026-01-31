"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-purple-50 via-white to-cyan-50 overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Transform Healthcare with{" "}
              <span className="gradient-text">Intelligent Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Empower your medical practice with cutting-edge technology.
              Streamline patient care, enhance efficiency, and deliver
              exceptional healthcare experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="group px-8 py-4 healthcare-primary text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get Started Free
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button className="px-8 py-4 bg-transparent text-gray-700 rounded-full font-semibold border-2 border-gray-200 hover:border-[#582974]/30 hover:text-[#582974] transition-all duration-300 flex items-center justify-center gap-2">
                <Play size={20} className="text-[#582974]" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right - Professional Saasonic-Style Image Collage */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/20 blur-[100px] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-200/20 blur-[80px] rounded-full translate-x-20"></div>

            <div className="relative w-full h-full p-4 lg:p-8">
              {mounted && (
                <>
                  {/* Image 1: Main Dashboard (Top Left) */}
                  <div
                    className="absolute top-0 left-0 w-[70%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/50 z-20 animate-reveal-up group"
                    style={{ animationDelay: "0.1s" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 pointer-events-none"></div>
                    <Image
                      src="/landing-section-1.png"
                      alt="Healthcare Dashboard"
                      fill
                      sizes="(max-width: 1024px) 70vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 animate-float-subtle"
                    />
                  </div>

                  {/* Image 2: Feature Mobile/Panel (Top Right) */}
                  <div
                    className="absolute top-12 right-0 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/40 z-30 animate-reveal-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Image
                      src="/landing-section-2.png"
                      alt="Patient Records"
                      fill
                      sizes="(max-width: 1024px) 45vw, 25vw"
                      className="object-cover animate-float-subtle-reverse"
                      style={{ animationDelay: "-2s" }}
                    />
                  </div>

                  {/* Image 3: Analytics Detail (Bottom Left) */}
                  <div
                    className="absolute bottom-4 left-4 w-[50%] aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/40 z-30 animate-reveal-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <Image
                      src="/landing-section-3.png"
                      alt="Healthcare Analytics"
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover animate-float-subtle"
                      style={{ animationDelay: "-4s" }}
                    />
                  </div>

                  {/* Image 4: Supplementary View (Bottom Right) */}
                  <div
                    className="absolute bottom-16 right-4 w-[55%] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/50 z-20 animate-reveal-up"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <Image
                      src="/landing-section-4.jpg"
                      alt="Medical Consultation"
                      fill
                      sizes="(max-width: 1024px) 55vw, 35vw"
                      className="object-cover animate-float-subtle-reverse"
                      style={{ animationDelay: "-1s" }}
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-1/4 -right-4 w-12 h-12 healthcare-primary rounded-full blur-2xl opacity-40 animate-pulse"></div>
                  <div
                    className="absolute -bottom-4 left-1/3 w-16 h-16 healthcare-secondary rounded-full blur-2xl opacity-40 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Stats Badge */}
                  <div
                    className="absolute top-1/2 right-1/4 z-40 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/50 shadow-xl animate-reveal-up"
                    style={{ animationDelay: "1.2s" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 font-medium">
                          Uptime Status
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          99.9% Reliable
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
