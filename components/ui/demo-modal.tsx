"use client";

import { X, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

import { submitDemoRequest, DemoFormData } from "@/lib/api";

import NotificationModal from "@/components/ui/notification-modal";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    setIsMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
        // Close the demo modal after showing success
        setTimeout(() => {
          onClose();
        }, 1500);
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

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-[560px] max-h-[90vh] bg-white rounded-[24px] overflow-hidden shadow-[0_30px_80px_rgba(15,10,30,0.3)] transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] animate-in fade-in zoom-in-95"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button - Fixed in parent */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors z-[20]"
        >
          <X size={18} />
        </button>

        {/* Scrollable Content Wrapper */}
        <div className="w-full h-full max-h-[90vh] overflow-y-auto px-6 py-8 sm:px-[40px] sm:py-[44px] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#4B2982] [&::-webkit-scrollbar-thumb]:rounded-full">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4eff8] text-[#582974] mb-6">
              <Calendar size={14} className="stroke-[2.5]" />
              <span className="text-xs font-bold tracking-wide">
                Quick Demo Request
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
              Book a Personalized Demo
            </h2>
            <p className="text-slate-500 text-[15px] sm:text-base">
              Fill in your details and our team will set up a demo within 24
              hours.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#111827]">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-300 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
                  required
                />
              </div>

              {/* Designation */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#111827]">
                  Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="e.g. Chief Medical Officer"
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-300 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
                />
              </div>

              {/* Work Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#111827]">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@hospital.com"
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-300 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#111827]">
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
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-300 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
                  required
                />
              </div>

              {/* Hospital / Organization */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#111827]">
                  Hospital / Organization{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  placeholder="Enter hospital / clinic name"
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-300 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px]"
                  required
                />
              </div>

              {/* Number of Beds */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#111827]">
                  Number of Beds
                </label>
                <div className="relative">
                  <select
                    name="noOfBeds"
                    value={formData.noOfBeds}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 pr-10 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px] appearance-none"
                  >
                    <option value="">Select range</option>
                    <option value="Under 50">Under 50</option>
                    <option value="50 - 100">50 - 100</option>
                    <option value="100 - 500">100 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Modules of Interest */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-[#111827]">
                Modules of Interest
              </label>
              <div className="flex flex-wrap gap-2">
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
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/50 cursor-pointer hover:bg-white hover:border-[#582974]/30 hover:shadow-sm transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={formData.intrestedModulesList.includes(item)}
                      onChange={() => handleCheckboxChange(item)}
                      className="w-4 h-4 rounded border-slate-300 text-[#582974] focus:ring-[#582974] focus:ring-offset-0 transition-all cursor-pointer"
                    />
                    <span className="text-[13px] font-medium text-slate-600">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Anything specific */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#111827]">
                Anything specific you'd like to see?
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={3}
                placeholder="Mention any specific requirements or questions"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder:text-slate-300 focus:bg-white focus:border-[#582974] focus:ring-2 focus:ring-[#582974]/20 outline-none transition-all text-[15px] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 bg-[#4B2982] hover:bg-[#3d2169] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors mt-8 shadow-lg shadow-[#4B2982]/20 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Request Demo"}
            {!isSubmitting && <ArrowRight size={20} className="stroke-[2.5]" />}
          </button>

          {/* Privacy note */}
          <div className="flex items-center justify-center gap-2 mt-6 text-slate-400">
            <ShieldCheck size={16} />
            <span className="text-[13px] font-medium tracking-wide">
              We respect your privacy. No spam, ever.
            </span>
          </div>
        </form>
      </div>

      <NotificationModal
        isOpen={notification.isOpen}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        onClose={() => setNotification((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  </div>
  );
}
