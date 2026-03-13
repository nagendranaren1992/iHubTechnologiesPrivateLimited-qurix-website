import Header from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Qurix - Healthcare Technology Insights",
  description:
    "Explore the latest insights on healthcare technology, interoperability, and AI from the Qurix team.",
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Why do AI Agents Fail on EHR Data?",
      excerpt:
        "Benchmark results and a failure deep-dive expose the real gap in healthcare data: missing semantic models, and the value-set workarounds they force.",
      author: "Sidharth Ramesh",
      date: "January 27, 2026",
      tag: "Opinion",
      image: "/images/blog/ai_agents_ehr_v2.png",
      imageAlt: "AI Agents and EHR Data",
    },
    {
      id: 2,
      title: "What is openEHR and why does healthcare need it?",
      excerpt:
        "Tired of EHR vendors holding your data hostage? openEHR separates clinical meaning from software, ensuring health records outlive any application.",
      author: "Shobhan Karthick",
      date: "January 13, 2026",
      tag: "openEHR",
      image: "/images/blog/openehr_blocks_v2.png",
      imageAlt: "openEHR illustration",
    },
    {
      id: 3,
      title: "XDS Explained: Build a Working Document Exchange on Your Laptop",
      excerpt:
        "A simple XDS tutorial: understand Registry vs Repository and run the core XDS flow end-to-end with the NIST XDS Toolkit, Docker, and Postman.",
      author: "Leola Lopes Lobo",
      date: "January 2, 2026",
      tags: ["How To", "Guide"],
      image: "/images/blog/xds_network_v2.png",
      imageAlt: "XDS Explained diagram",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-[#14bbd3] to-[#0d99ad] text-white overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/20 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-black/10 rounded-full blur-[120px]"></div>
          </div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="container-custom relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Insights & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Exploring the future of healthcare technology, interoperability,
              and AI.
            </p>
          </div>
        </section>

        {/* Blog List Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom max-w-5xl mx-auto px-4">
            <div className="space-y-12">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col md:flex-row gap-6 items-start bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  {/* Image Section */}
                  <div className="w-full md:w-1/3 shrink-0 overflow-hidden rounded-xl">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full md:w-2/3 flex flex-col justify-start pt-1">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-medium">
                      <span className="text-[#14bbd3]">{post.date}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>

                    <div className="flex gap-2 mb-3">
                      {post.tags ? (
                        post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[#14bbd3]/5 text-[#14bbd3] text-xs font-semibold rounded-full border border-[#14bbd3]/10"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="px-3 py-1 bg-[#14bbd3]/5 text-[#14bbd3] text-xs font-semibold rounded-full border border-[#14bbd3]/10">
                          {post.tag}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#14bbd3] transition-colors duration-300">
                      <a href="#" className="block">
                        {post.title}
                      </a>
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-4">
                      {post.excerpt}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center text-[#14bbd3] font-bold hover:text-[#12a5ba] transition-colors group/link text-sm"
                    >
                      Read more
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
