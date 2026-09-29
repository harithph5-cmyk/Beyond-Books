import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

interface CtaSectionProps {
  onOpenConsultation: () => void;
  onExploreCourses: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenConsultation,
  onExploreCourses,
}) => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-sky-50 via-white to-blue-50/70 border border-sky-200 shadow-xl overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl -z-10" />

          <div className="max-w-3xl space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Upcoming Cohort Admissions Open</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
              Start Building Practical Skills That Matter.{' '}
              <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                Enroll Today.
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Join motivated students and aspiring professionals developing practical skills through project-based courses, modern tools, and dedicated mentor guidance.
            </p>

            {/* Micro value guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Small Interactive Pods</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Flexible Installment Plans</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Certificate & Portfolio</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm transition-all duration-150 shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>Schedule Free 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCourses}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors border border-slate-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Browse All 6 Curricula</span>
              </button>

              <a
                href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I%20want%20to%20apply%20for%20the%20upcoming%20cohort."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 font-semibold shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Direct WhatsApp Apply</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
