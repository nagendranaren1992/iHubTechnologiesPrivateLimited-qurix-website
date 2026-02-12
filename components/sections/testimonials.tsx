"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Sridhar",
      role: "Critical care specialist",
      company: "Nandyal Intensive and Trauma Care",
      rating: 5,
      quote:
        "Qurix Healthcare has transformed how we manage patient care. The analytics and reporting features have given us insights we never had before, leading to better outcomes and more efficient operations.",
      avatar: "/images/testimonials/Sreedhar.png",
      bgColor: "from-[#582974] to-[#753a93]",
    },
    {
      name: "Dr.Aasrith",
      role: "Critical Care & emergency Medicine Specialist",
      company: "Jope Hospital",
      rating: 5,
      quote:
        "The telemedicine integration is seamless and our patients love the convenience. We've seen a 40% increase in patient satisfaction scores since implementing Qurix Healthcare.",
      avatar: "/images/testimonials/Aasrith.png",
      bgColor: "from-[#14BBD3] to-[#40d4e8]",
    },
    {
      name: "Dr. Suman",
      role: "MBBS, MD – Paediatrics",
      company: "Avi Clinics",
      rating: 5,
      quote:
        "Implementation was incredibly smooth, and the support team was there every step of the way. The platform has helped us reduce administrative overhead by 30% while improving care quality.",
      avatar: "/images/testimonials/Suman.png",
      bgColor: "from-[#582974] to-[#14BBD3]",
    },
    {
      name: "Dr.Siddarth Reddy",
      role: "Paediatric & Adult Neurologist",
      company: "Sidarth Hospitals",
      rating: 5,
      quote:
        "Navigating complex surgical schedules used to be a nightmare. Qurix's intuitive interface has streamlined our workflow, allowing us to focus more on patient outcomes and less on logistics.",
      avatar: "/images/testimonials/Sidharth.png",
      bgColor: "from-[#14bbd3] to-[#753a93]",
    },
    {
      name: "Dr. Kishore B Reddy",
      role: "HOD Orthopaedics & Ortho Oncology",
      company: "AMOR Hospitals",
      rating: 5,
      quote:
        "Qurix has revolutionized our billing cycle. The automated features have drastically reduced errors and improved our revenue flow, giving us financial stability to expand our services.",
      avatar: "/images/testimonials/Kishorereddy.png",
      bgColor: "from-[#753a93] to-[#582974]",
    },
    {
      name: "Sravani Chettupalli",
      role: "CEO Philanthropist, Educationalist & Entrepreneur",
      company: "Sravani Hospitals",
      rating: 5,
      quote:
        "Having instant access to comprehensive patient history is critical in cardiology. Qurix provides a unified view that helps us make faster, more accurate diagnoses.",
      avatar: "/images/testimonials/Sravani.png",
      bgColor: "from-[#40d4e8] to-[#14bbd3]",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-[#582974]">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by healthcare providers across the country to deliver
            exceptional patient care.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-purple-100">
              <Quote size={80} fill="currentColor" />
            </div>

            {/* Active Testimonial */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ),
                )}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-md">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-700 hover:text-[#582974]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 healthcare-primary"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 text-gray-700 hover:text-[#582974]"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
