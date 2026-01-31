import Image from "next/image";
import { MonitorSmartphone, FileText, Stethoscope } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Stethoscope size={32} className="text-white" />,
      title: "Patient Management",
      description:
        "Comprehensive patient records, appointment scheduling, and care coordination in one unified platform.",
      image: "/service_management_1769842784243.png",
      gradient: "from-[#582974] to-[#753a93]",
    },
    {
      icon: <MonitorSmartphone size={32} className="text-white" />,
      title: "Telemedicine Solutions",
      description:
        "Enable virtual consultations with secure video conferencing and remote patient monitoring capabilities.",
      gradient: "from-[#14BBD3] to-[#40d4e8]",
    },
    {
      icon: <FileText size={32} className="text-white" />,
      title: "Smart Reporting",
      description:
        "Automated reporting, clinical documentation, and intelligent insights to improve decision-making.",
      gradient: "from-[#582974] to-[#14BBD3]",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services to Help Your
            <span className="relative inline-block ml-2">
              <span className="absolute -top-10 -right-10 animate-float-diagonal block">
                <Image
                  src="/service_icon.svg"
                  alt="Service Decor"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </span>
            </span>{" "}
            <span className="gradient-text">business succeed</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive healthcare solutions designed for modern medical
            practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Service Image/Icon */}
              <div
                className={`h-48 bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                {service.image ? (
                  <div className="relative w-40 h-40 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                )}

                {/* Decorative Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-[#582974] font-semibold hover:text-[#753a93] transition-colors flex items-center gap-2 group-hover:gap-3">
                  Learn More
                  <span className="transition-all">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
