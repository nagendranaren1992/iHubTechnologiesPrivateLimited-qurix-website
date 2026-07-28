import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/landing-section";
import TrustedCompanies from "@/components/sections/trusted-companies";
import IndustryProblems from "@/components/sections/industry-problems";
import WhyQurix from "@/components/sections/why-qurix";
import Features from "@/components/sections/Features";
import CoreModules from "@/components/sections/core-modules";
import ProvenResults from "@/components/sections/Proven-results";
import Services from "@/components/sections/Services";
import HospitalResults from "@/components/sections/Hospital-results";
import ContactUs from "@/components/sections/Contact-us";
import BlogCta from "@/components/sections/blog-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedCompanies />
        <IndustryProblems />
        <WhyQurix />
        <Features />
        <CoreModules />
        <ProvenResults />
        <HospitalResults />
        <Services />
        <BlogCta />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
