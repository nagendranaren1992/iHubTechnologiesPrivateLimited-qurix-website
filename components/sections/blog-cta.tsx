import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogCta() {
  return (
    <section className="py-16 md:py-20 bg-[#f8fafc] border-t border-slate-100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] leading-tight">
            Insights from the Qurix Blog
          </h2>
          <p className="text-[16px] md:text-[17px] text-gray-500 leading-relaxed font-medium">
            Practical guidance on hospital operations, EMR, revenue cycle, and
            digital health — written for healthcare leaders.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#14bbd3] text-white rounded-xl font-bold text-[14px] hover:bg-[#12a5ba] transition-all duration-300 shadow-xl shadow-cyan-500/10"
          >
            Read the Blog
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
