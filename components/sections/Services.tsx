import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: "/images/features/icons/005-lighthouse.png",
      title: "Implementation",
      description:
        "All the dashboards, actionable insights, easy customizations, flexible reports, data exchange, automations, business processes, standards are at the assistance of organization.",
    },
    {
      icon: "/images/features/icons/002-presentation.png",
      title: "Training",
      description:
        "All the dashboards, actionable insights, easy customizations, flexible reports, data exchange, automations, business processes, standards are at the assistance of organization.",
    },
    {
      icon: "/images/features/icons/004-wrench.png",
      title: "Technical Services",
      description:
        "All the dashboards, actionable insights, easy customizations, flexible reports, data exchange, automations, business processes, standards are at the assistance of organization.",
    },
    {
      icon: "/images/features/icons/003-customer-service.png",
      title: "Ongoing Services",
      description:
        "All the dashboards, actionable insights, easy customizations, flexible reports, data exchange, automations, business processes, standards are at the assistance of organization.",
    },
    {
      icon: "/images/features/icons/001-business.png",
      title: "Cont. Improvement",
      description:
        "All the dashboards, actionable insights, easy customizations, flexible reports, data exchange, automations, business processes, standards are at the assistance of organization.",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-[#f8f9fa] overflow-hidden"
    >
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight">
            Our Services to Help Your <br className="hidden md:block" />
            <span className="text-[#582974] relative inline-block">
              business succeed
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-purple-200"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-500 font-medium tracking-tight">
            Comprehensive healthcare solutions designed for modern medical
            practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 relative">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start max-w-sm">
              <div className="mb-8 w-20 h-20 relative bg-purple-50/50 rounded-2xl flex items-center justify-center p-4 border border-purple-100/50 transition-all hover:scale-110">
                <div className="relative w-full h-full">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-[1.6] font-medium">
                {service.description}
              </p>
            </div>
          ))}

          {/* 6th Slot: Decorative Pattern (Matches Screenshot) */}
          <div className="hidden lg:flex items-center justify-center relative min-h-[300px]">
            <div className="absolute inset-x-0 bottom-0 top-12 opacity-[0.55] pointer-events-none">
              <Image
                src="/images/brand/plus-pattern.svg"
                alt="Background Pattern 1"
                fill
                className="object-contain object-right-bottom scale-125 translate-x-10 translate-y-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
