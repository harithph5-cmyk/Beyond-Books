import React from 'react';
import { IMAGES } from '../../assets/images';
import { ArrowRight, MessageCircle, Check, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourses,
  onOpenConsultation,
}) => {
  return (
    <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/50 via-[#f8fafc] to-[#f8fafc]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-sky-200/40 via-indigo-100/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold tracking-wider text-sky-700 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
              <span>CAREER-FOCUSED TECHNOLOGY ACADEMY</span>
            </div>

            {/* H1 & Focus Area */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.1] text-balance">
                Learn. Build.{' '}
                <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                  Get Industry-Ready.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug">
                Master Digital Marketing, Web Designing, Full Stack Development, Tally & SaaS with practical, project-based training.
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Go beyond classroom theory with hands-on learning, real-world projects, modern tools, expert guidance and career-focused training designed to help you build skills that businesses actually need.
            </p>

            {/* USP Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Practical Project-Based Learning</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Industry-Ready Skills & Tools</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>AI-Powered Learning Approach</span>
              </div>
            </div>

            {/* CTA Buttons & Secondary CTA */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onExploreCourses}
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm transition-all duration-150 shadow-md shadow-sky-600/25 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>Explore Our Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors border border-slate-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              >
                <span>Talk to a Career Expert</span>
              </button>

              <a
                href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I'd%20like%20to%20learn%20more%20about%20your%20practical%20project-based%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 transition-colors flex items-center justify-center gap-2 text-xs font-semibold shadow-xs"
                title="Chat directly on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-500/20 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Resolution Campus Architecture Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl group">
              <img
                src={IMAGES.heroStudio}
                alt="Beyond Books Modern Technology Academy Flagship Campus"
                className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

              {/* In-image live overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-slate-200/80 text-xs space-y-1.5 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sky-700 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>Beyond Books Flagship Campus</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 font-mono">
                    Open for Admissions
                  </span>
                </div>
                <p className="text-slate-600 text-[11px] leading-snug">
                  Modern technology labs, collaborative workshops, and practical development workstations built for industry-ready learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
