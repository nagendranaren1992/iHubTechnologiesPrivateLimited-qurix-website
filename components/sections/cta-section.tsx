import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#582974] via-[#753a93] to-[#14BBD3]"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">
              Start Your Free Trial Today
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Healthcare Practice?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of healthcare providers who trust Qurix Healthcare to
            deliver exceptional patient care and streamline their operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-[#582974] rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Get Started for Free
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
            <button className="px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white hover:bg-white hover:text-[#582974] transition-all duration-300">
              Schedule a Demo
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              <strong className="text-white">No credit card required</strong> ·
              30-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
