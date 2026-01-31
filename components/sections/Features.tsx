import Image from "next/image";
import { BarChart3, Heart, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <BarChart3 size={40} className="text-[#582974]" />,
      title: "Advanced Analytics",
      description:
        "Gain deep insights into patient data and healthcare trends with our powerful analytics dashboard and reporting tools.",
      image: "/feature_analytics_1769842736341.png",
    },
    {
      icon: <Heart size={40} className="text-[#14BBD3]" />,
      title: "Patient-Centric Care",
      description:
        "Deliver personalized care experiences with comprehensive patient profiles and intelligent care coordination.",
      image: "/feature_patient_care_1769842751487.png",
    },
    {
      icon: <Shield size={40} className="text-[#582974]" />,
      title: "HIPAA Compliant Security",
      description:
        "Enterprise-grade security ensuring complete HIPAA compliance and protecting sensitive patient information.",
      image: "/feature_security_1769842766922.png",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Boost your business with{" "}
            <span className="gradient-text">powerful features</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to streamline operations, enhance patient care,
            and grow your healthcare practice.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-100 rounded-3xl p-4 md:p-8">
          {[
            { title: "Customer Engagment", icon: "/features/015-chatting.png" },
            { title: "Clinical Managment", icon: "/features/013-hospital.png" },
            { title: "speciality Care", icon: "/features/002-molecule.png" },
            { title: "Mobile App", icon: "/features/001-business.png" },
            { title: "Care at Distance", icon: "/features/005-lighthouse.png" },
            { title: "Revenue Cycle", icon: "/features/005-credit-card.png" },
            { title: "Managed Care", icon: "/features/002-presentation.png" },
            { title: "Population Health", icon: "/features/worldwide.png" },
            { title: "Community Connect", icon: "/features/002-molecule.png" },
            { title: "Interoperability", icon: "/features/worldwide.png" },
            {
              title: "Regulation Compliance",
              icon: "/features/001-business.png",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-center border border-gray-100 h-full"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[#582974] mb-2">
                {feature.title}
              </h3>
            </div>
          ))}

          {/* Schedule Demo Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center h-full">
            <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
              {/* Placeholder for verify icon in the screenshot, using existing or recreating logic */}
              <div className="w-8 h-8 border-2 border-[#14BBD3] rounded-full flex items-center justify-center">
                <span className="text-[#14BBD3] font-bold">✓</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Free versions of every Qurix. Start now and upgrade as you grow.
            </p>
            <button className="bg-[#582974] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#4a2262] transition-colors w-full">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
