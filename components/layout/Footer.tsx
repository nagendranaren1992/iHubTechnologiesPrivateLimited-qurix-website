import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/qurix_logo.svg"
                alt="Qurix Healthcare"
                width={160}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              All the dashboards, actionable insights, easy customizations,
              flexible reports.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white hover:text-[#14BBD3] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#14BBD3] transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#14BBD3] transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#14BBD3] transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-slate-400 hover:text-[#14BBD3] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-slate-400 hover:text-[#14BBD3] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-[#14BBD3] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-slate-400 hover:text-[#14BBD3] transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#14BBD3] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#14BBD3] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#14BBD3] transition-colors"
                >
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-[#14BBD3] transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-400">
            © {new Date().getFullYear()} Qurix Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
