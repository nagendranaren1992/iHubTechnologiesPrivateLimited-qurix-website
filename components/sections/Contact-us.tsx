"use client";

import { useState } from "react";
import {
  Calendar,
  ChevronRight,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  Shield,
  ArrowRight,
} from "lucide-react";
import { submitDemoRequest, DemoFormData } from "@/lib/api";

import NotificationModal from "@/components/ui/notification-modal";

export default function ContactUs() {
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    designation: "",
    email: "",
    mobileNumber: "",
    organizationName: "",
    noOfBeds: "",
    intrestedModulesList: [],
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    // Capitalize first letter for text fields
    if (
      ["name", "designation", "organizationName", "comments"].includes(name) &&
      value.length > 0
    ) {
      newValue = value.charAt(0).toUpperCase() + value.slice(1);
    }

    // Restrict mobile number to 10 digits
    if (name === "mobileNumber") {
      newValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleCheckboxChange = (module: string) => {
    setFormData((prev) => {
      let modules = [...prev.intrestedModulesList];

      if (module === "Full Platform") {
        // If clicking Full Platform, just set it to Full Platform or empty
        modules = modules.includes("Full Platform") ? [] : ["Full Platform"];
      } else {
        // If clicking any other module
        if (modules.includes(module)) {
          // Uncheck
          modules = modules.filter((m) => m !== module);
        } else {
          // Check and remove Full Platform if it exists
          modules = [...modules.filter((m) => m !== "Full Platform"), module];
        }
      }

      return { ...prev, intrestedModulesList: modules };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitDemoRequest(formData);

      if (result.status === "Success" || result.responseCode === 200) {
        setNotification({
          isOpen: true,
          type: "success",
          title: "Request Received!",
          message: `Thank you, ${formData.name}. We've received your request for ${formData.organizationName} and our team will contact you shortly.`,
        });
        setFormData({
          name: "",
          designation: "",
          email: "",
          mobileNumber: "",
          organizationName: "",
          noOfBeds: "",
          intrestedModulesList: [],
          comments: "",
        });
      } else {
        throw new Error("Server returned non-success status");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotification({
        isOpen: true,
        type: "error",
        title: "Submission Failed",
        message: "We encountered an error while processing your request. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Form Card (8 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden ring-1 ring-slate-100">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#14bbd3] to-[#14bbd3]"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 text-[#14bbd3] mb-6 border border-purple-100/50">
                  <Calendar size={14} className="text-[#14bbd3]" />
                  <span className="text-[12px] font-bold uppercase tracking-wider">
                    Schedule a Demo
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-6 tracking-tight">
                  See QURIX in Action
                </h2>
                <p className="text-gray-500 text-[16px] leading-relaxed max-w-2xl font-medium">
                  Book a personalized walkthrough with our healthcare solutions
                  team. We'll show you how QURIX fits your hospital's specific
                  needs.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#374151]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14bbd3]/10 focus:border-[#14bbd3] transition-all text-[#111827] placeholder:text-slate-300 font-medium"
                    />
                  </div>
                  {/* Designation */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#374151]">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      placeholder="e.g. Chief Medical Officer"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14bbd3]/10 focus:border-[#14bbd3] transition-all text-[#111827] placeholder:text-slate-300 font-medium"
                    />
                  </div>
                  {/* Work Email */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#374151]">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@hospital.com"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14bbd3]/10 focus:border-[#14bbd3] transition-all text-[#111827] placeholder:text-slate-300 font-medium"
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#374151]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit mobile number"
                      maxLength={10}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14bbd3]/10 focus:border-[#14bbd3] transition-all text-[#111827] placeholder:text-slate-300 font-medium"
                    />
                  </div>
                  {/* Hospital */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#374151]">
                      Hospital / Organization{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      placeholder="Enter hospital / clinic name"
                      required
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14bbd3]/10 focus:border-[#14bbd3] transition-all text-[#111827] placeholder:text-slate-300 font-medium"
                    />
                  </div>
                  {/* Number of Beds */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-[#374151]">
                      Number of Beds
                    </label>
                    <div className="relative">
                      <select
                        name="noOfBeds"
                        value={formData.noOfBeds}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14bbd3]/10 focus:border-[#14bbd3] transition-all text-[#111827] appearance-none font-medium"
                      >
                        <option value="">Select range</option>
                        <option value="Under 50">Under 50</option>
                        <option value="50 - 100">50 - 100</option>
                        <option value="100 - 500">100 - 500</option>
                        <option value="500+">500+</option>
                      </select>
                      <ChevronRight
                        className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none"
                        size={18}
                      />
                    </div>
                  </div>
                </div>

                {/* Modules of Interest */}
                <div className="space-y-4">
                  <label className="text-[14px] font-bold text-[#374151]">
                    Modules of Interest
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "EMR",
                      "Billing & Revenue",
                      "Pharmacy",
                      "Lab / LIS",
                      "Inventory",
                      "Full Platform",
                    ].map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#f8f9ff] border border-[#eff1ff] cursor-pointer group hover:bg-white hover:border-[#14bbd3]/20 hover:shadow-sm transition-all"
                      >
                        <input
                          type="checkbox"
                          checked={formData.intrestedModulesList.includes(item)}
                          onChange={() => handleCheckboxChange(item)}
                          className="w-5 h-5 rounded-md border-[#b4b7c1] text-[#14bbd3] focus:ring-[#14bbd3] focus:ring-offset-0 bg-white transition-all cursor-pointer"
                        />
                        <span className="text-[14px] font-medium text-[#4b5563] group-hover:text-[#111827] transition-colors">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Anything specific */}
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-[#374151]">
                    Anything specific you'd like to see?
                  </label>
                  <textarea
                    rows={4}
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    placeholder="Mention any specific requirements or questions"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#14bbd3]/10 focus:border-[#14bbd3] transition-all text-[#111827] placeholder:text-slate-300 font-medium resize-none"
                  ></textarea>
                </div>

                {/* Footer Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#14bbd3] text-white font-bold text-[15px] hover:bg-[#12a5ba] transition-all shadow-lg shadow-purple-200 group w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Book My Demo"}
                    {!isSubmitting && (
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                      <ShieldCheck size={16} className="text-[#14bbd3]" />
                    </div>
                    <p className="text-[12px] text-slate-400 font-medium leading-tight">
                      Your data is safe. We never share your <br /> information
                      with third parties.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <NotificationModal
            isOpen={notification.isOpen}
            type={notification.type}
            title={notification.title}
            message={notification.message}
            onClose={() => setNotification((prev) => ({ ...prev, isOpen: false }))}
          />

          {/* Right Column - Info Cards (4/5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Talk To Experts Card */}
            <div className="bg-[#0F0A1E] rounded-[32px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Accent decoration */}
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#14bbd3]/20 rounded-full blur-[60px]"></div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    Talk to Our Experts
                  </h2>
                  <p className="text-white/50 text-[15px] leading-relaxed font-medium">
                    Prefer a direct conversation? Reach our healthcare solutions
                    team through any of these channels.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Call Sales */}
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex items-center gap-5 transition-all hover:bg-white/10 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#14bbd3] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-white mb-0.5">
                        Call Sales Directly
                      </div>
                      <div className="text-[13px] text-white/40 font-medium">
                        +91 - 7075740042 (Mon-Sat, 9am-7pm)
                      </div>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex items-center gap-5 transition-all hover:bg-white/10 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#14bbd3] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-white mb-0.5">
                        Email Our Team
                      </div>
                      <div className="text-[13px] text-white/40 font-medium">
                        hello@qurix.com
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex items-center gap-5 transition-all hover:bg-white/10 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageSquare size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-white mb-0.5">
                        WhatsApp Us
                      </div>
                      <div className="text-[13px] text-white/40 font-medium">
                        Quick response, instant support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side by side small white cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                  <Clock size={18} className="text-[#14bbd3]" />
                </div>
                <h4 className="text-[14px] font-bold text-[#111827] mb-2">
                  30-Minute Demo
                </h4>
                <p className="text-[12px] text-slate-400 font-medium leading-relaxed">
                  Quick, focused walkthrough tailored to your hospital's
                  workflow
                </p>
              </div>

              <div className="bg-white p-8 rounded-[24px] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center mb-6">
                  <Shield size={18} className="text-[#14bbd3]" />
                </div>
                <h4 className="text-[14px] font-bold text-[#111827] mb-2">
                  No Obligation
                </h4>
                <p className="text-[12px] text-slate-400 font-medium leading-relaxed">
                  Free consultation with zero commitment or hidden costs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
