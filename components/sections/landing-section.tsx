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
      className="relative pt-32 md:pt-48 pb-32 bg-white overflow-hidden"
    >
      {/* Immersive Background Canvas */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[1000px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(88,41,116,0.08)_0%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

        {/* Floating Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom relative">
        {/* Centered Typography Cluster */}
        <div
          className={`max-w-5xl mx-auto text-center space-y-6 md:space-y-10 mb-12 md:mb-32 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#582974]/5 border border-[#582974]/10 rounded-full backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#582974]">
              The Next Era of Healthcare OS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-[900] text-[#1a1a1a] leading-[1.1] md:leading-[0.9] tracking-tighter px-4">
            Precision Care <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#582974] via-[#753a93] to-[#00bed5] relative inline-block">
              Orchestrated.
              <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1 md:h-1.5 bg-gradient-to-r from-[#582974] to-[#00bed5] rounded-full opacity-20"></span>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto px-6">
            Unify your entire clinical ecosystem with an intelligent operating
            system built for scale, security, and world-class patient outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-4 px-6">
            <button className="w-full sm:w-auto group px-8 md:px-12 py-4 md:py-5 bg-[#582974] text-white rounded-2xl font-bold text-lg md:text-xl shadow-[0_20px_50px_rgba(88,41,116,0.2)] hover:shadow-[0_30px_60px_rgba(88,41,116,0.4)] hover:-translate-y-2 transition-all duration-500 active:scale-95 flex items-center justify-center gap-3">
              Get Started
              <ArrowRight
                size={24}
                strokeWidth={3}
                className="group-hover:translate-x-1.5 transition-transform"
              />
            </button>
            <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white text-gray-900 rounded-2xl font-bold text-lg md:text-xl border-2 border-gray-100 hover:border-[#582974]/20 hover:bg-gray-50 transition-all duration-500 flex items-center justify-center gap-3 group">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#582974]/5 transition-colors">
                <Play
                  size={18}
                  className="fill-[#582974] text-[#582974] ml-1"
                />
              </div>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Immersive Product Command Center */}
        <div className="relative max-w-7xl mx-auto h-[400px] sm:h-[600px] md:h-[850px] perspective-2000">
          {/* Main Central Dashboard - Large Centerpiece */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[98%] sm:w-[95%] lg:w-[85%] aspect-[1.6] bg-white rounded-xl sm:rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] md:shadow-[0_80px_150px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden transform transition-all duration-1000 rotate-x-[8deg] md:rotate-x-[12deg] z-20 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            {/* Window Decor */}
            <div className="h-8 md:h-12 bg-gray-50/80 backdrop-blur-md border-b border-gray-100 flex items-center px-4 md:px-6 gap-2">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400/80 shadow-inner"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400/80 shadow-inner"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400/80 shadow-inner"></div>
              </div>
              <div className="bg-white/50 px-3 md:px-6 py-1 rounded-full text-[9px] md:text-[11px] font-bold text-gray-400 flex-grow mx-4 md:mx-12 text-center border border-gray-200/50 tracking-wide uppercase truncate">
                os.qurix.healthcare
              </div>
            </div>

            <div className="relative w-full h-full">
              <Image
                src="/images/screenshots/dashboard-showcase.png"
                alt="Qurix OS Main View"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
          </div>

          {/* Floating UI Satellites */}

          {/* 1. Analytics Satellite (Bottom Left) */}
          <div className="absolute bottom-4 sm:bottom-10 left-0 md:left-0 w-[50%] md:w-[42%] aspect-square bg-white rounded-2xl md:rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] md:shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-white z-40 animate-float-medium overflow-hidden hidden sm:block">
            <div className="p-3 md:p-5 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
              <span className="text-[8px] md:text-[10px] font-black tracking-[0.2em] text-[#582974] uppercase">
                Real-time Analytics
              </span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#14BBD3]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#582974]"></div>
              </div>
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/images/screenshots/dashboard-desktop.png"
                alt="Advanced Analytics"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent backdrop-blur-[1px]"></div>
            </div>
          </div>

          {/* 2. Mobile Satellite (Bottom Right) */}
          <div className="absolute -bottom-10 md:-bottom-20 right-2 md:-right-4 w-[28%] sm:w-[24%] aspect-[0.48] bg-white rounded-2xl md:rounded-[3rem] shadow-[10px_20px_50px_rgba(0,0,0,0.15)] md:shadow-[20px_40px_100px_rgba(0,0,0,0.2)] border-[4px] md:border-[10px] border-white z-50 animate-float-slow overflow-hidden">
            <Image
              src="/images/screenshots/mobile-app.png"
              alt="Mobile Experience"
              fill
              className="object-cover"
            />
          </div>

          {/* 3. Live Monitor Cluster (Top Left) */}
          <div
            className="absolute top-20 -left-12 z-30 bg-white/90 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-white animate-reveal-zoom hidden xl:block"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                <span className="text-[11px] font-black tracking-widest text-[#582974]">
                  SERVER MESH: ONLINE
                </span>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-black text-gray-900 italic tracking-tighter">
                  99.99<span className="text-[#00bed5]">%</span>
                </div>
                <div className="text-[11px] font-bold text-gray-400 tracking-[0.15em] uppercase">
                  Architecture Uptime
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Brand Plus Patterns */}
          <div className="absolute -top-10 -right-10 md:-right-20 w-32 h-32 md:w-64 md:h-64 opacity-20 animate-pulse-slow pointer-events-none">
            <Image
              src="/images/brand/plus-pattern.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div
            className="absolute -bottom-20 md:-bottom-40 -left-10 md:-left-20 w-48 h-48 md:w-96 md:h-96 opacity-10 animate-pulse-slow pointer-events-none"
            style={{ animationDelay: "3s" }}
          >
            <Image
              src="/images/brand/plus-pattern.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Social Proof Bar */}
        <div
          className={`mt-12 sm:mt-20 flex flex-col items-center gap-6 md:gap-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.4em] text-center px-4">
            Engineered for World-Class Institutions
          </p>
          <div className="flex -space-x-3 md:-space-x-5">
            {[
              "/images/testimonials/Sreedhar.png",
              "/images/testimonials/Aasrith.png",
              "/images/testimonials/Suman.png",
              "/images/testimonials/Sidharth.png",
              "/images/testimonials/Kishorereddy.png",
            ].map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white bg-gray-100 overflow-hidden shadow-xl"
              >
                <img
                  src={src}
                  alt="healthcare provider"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                />
              </div>
            ))}
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white bg-[#00bed5] flex items-center justify-center text-white font-black text-[10px] md:text-xs shadow-xl">
              +5k
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
