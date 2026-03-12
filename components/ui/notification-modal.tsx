"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

interface NotificationProps {
  isOpen: boolean;
  type: "success" | "error";
  title: string;
  message: string;
  onClose: () => void;
}

export default function NotificationModal({
  isOpen,
  type,
  title,
  message,
  onClose,
}: NotificationProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            {type === "success" ? (
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center animate-bounce-slow">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
            ) : (
              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
                <XCircle size={40} className="text-red-500" />
              </div>
            )}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-500 leading-relaxed mb-8">{message}</p>

          <button
            onClick={onClose}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg hover:shadow-xl active:scale-95 ${
              type === "success" 
                ? "bg-green-600 hover:bg-green-700 shadow-green-200" 
                : "bg-red-600 hover:bg-red-700 shadow-red-200"
            }`}
          >
            {type === "success" ? "Great, thank you!" : "Try Again"}
          </button>
        </div>
      </div>
    </div>
  );
}
