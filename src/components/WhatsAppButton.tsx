import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '15552348920',
  defaultMessage = "Hi Beyond Books team, I'm interested in learning more about your courses. Could you share cohort details?"
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded quick-chat bubble */}
      {isOpen && (
        <div 
          className="mb-3 w-80 rounded-2xl bg-white p-4 shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-3 duration-200"
          role="dialog"
          aria-label="WhatsApp quick chat"
        >
          <div className="flex items-start justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                BB
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Beyond Books Admissions</p>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online · Average reply: 5 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="py-3 text-xs text-slate-600 leading-relaxed">
            Have questions about syllabus modules, prerequisites, or schedules? Speak directly with our admissions advisors on WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Open WhatsApp Chat</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 h-12 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-700/20 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
        aria-label="Chat on WhatsApp"
        aria-expanded={isOpen}
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600 shrink-0" />
        <span className="hidden sm:inline-block font-bold text-xs whitespace-nowrap tracking-wide">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
};
