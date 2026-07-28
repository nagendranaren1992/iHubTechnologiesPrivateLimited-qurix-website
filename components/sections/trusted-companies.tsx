import Image from "next/image";
const companies = [
  { name: "Alavi", logo: "/images/clients/alavi.png", id: 1 },
  { name: "Amor", logo: "/images/clients/amor.png", id: 2 },
  { name: "Avani", logo: "/images/clients/avani.png", id: 3 },
  { name: "Sidarth", logo: "/images/clients/sidarth.png", id: 4 },
  { name: "Sravani", logo: "/images/clients/sravani.png", id: 5 },
  { name: "Avi", logo: "/images/clients/avi_clinics_uppal.png", id: 6 },
  {
    name: "Basavatarakam",
    logo: "/images/clients/basavatharakam_hopital.png",
    id: 7,
  },
  { name: "Hope Hospital", logo: "/images/clients/hope_hospital.png", id: 8 },
  { name: "MNJIORCC", logo: "/images/clients/mnj_hospital.png", id: 9 },
  { name: "NITC", logo: "/images/clients/nandyal_hospital.png", id: 10 },
  { name: "Seasons", logo: "/images/clients/seasons2.png", id: 11 },
];

export default function TrustedCompanies() {
  return (
    <section
      className="relative py-6 overflow-hidden border-y border-white/10"
      style={{
        background: "linear-gradient(135deg, #14bbd3 0%, #12a5ba 100%)",
      }}
    >
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#14bbd3] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#12a5ba] to-transparent z-10 pointer-events-none"></div>

      <div className="container-custom">
        <div className="text-center mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            TRUSTED BY
          </p>
        </div>

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
                    alt={`${company.name} Logo - Trusted Qurix Partner`}
                    width={96}
                    height={32}
                    sizes="96px"
                    quality={50}
                    className="h-full w-full object-contain"
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
