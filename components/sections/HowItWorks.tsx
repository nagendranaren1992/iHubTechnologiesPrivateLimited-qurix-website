"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";

export default function HowItWorks() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVideoOpen]);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Video Thumbnail */}
          <div className="relative group">
            {/* Image Container with decoration */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-[4/3] relative cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <Image
                  src="https://img.youtube.com/vi/CD2hQkYYeXM/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

                {/* Play Button */}
                <button
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-20 group/btn"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 bg-[#582974] rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1 fill-current" />
                  </div>
                </button>
              </div>
            </div>

            {/* Decorative background blur */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 opacity-70"></div>
          </div>

          {/* Right Column: Content */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How it works to help <br />
              <span className="text-[#582974]">your business</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Unlock the secrets to business success! Click the button to watch
              our exclusive video and uncover the seamless process that can
              elevate your business to new heights.
            </p>

            <Link
              href="/request-a-demo"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#582974] border-2 border-[#582974] rounded-xl hover:bg-[#4a2262] hover:border-[#4a2262] transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              Schedule Demo
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/CD2hQkYYeXM?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
