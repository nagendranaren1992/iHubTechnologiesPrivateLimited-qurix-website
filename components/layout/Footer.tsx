import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080414] py-12 md:py-16">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { name: "Product", href: "/#features" },
              { name: "Modules", href: "/#modules" },
              { name: "Services", href: "/#services" },
              { name: "Results", href: "/#results" },
              { name: "Contact", href: "/#contact" },
              { name: "Blog", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white text-[15px] font-bold transition-all duration-300 uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Copyright Row */}
          <div className="text-white/40 text-[14px] leading-relaxed font-normal">
            © {currentYear}{" "}
            <span className="font-bold text-white/80">
              QURIX Healthcare Platform
            </span>{" "}
            — All rights reserved.
          </div>

          {/* SEO Keywords Row */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-white/20 text-[12px] font-medium uppercase tracking-[0.05em]">
            <span>Healthcare Management Platform</span>
            <span className="opacity-50">·</span>
            <span>Hospital Management Software</span>
            <span className="opacity-50">·</span>
            <span>Patient Lifecycle Management</span>
            <span className="opacity-50">·</span>
            <span>Healthcare ERP</span>
            <span className="opacity-50">·</span>
            <span>Clinical Workflow Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
