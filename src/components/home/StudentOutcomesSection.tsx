import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS_DATA, OUTCOME_METRICS } from '../../data/testimonialsData';
import {
  TrendingUp,
  Briefcase,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';

export const StudentOutcomesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = TESTIMONIALS_DATA.length;
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto-play sliding feature
  useEffect(() => {
    if (!isPaused) {
      slideInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 6000);
    }
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const currentStudent = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="outcomes"
      className="py-20 relative scroll-mt-20 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold uppercase tracking-wider text-sky-700 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>STUDENT TESTIMONIALS & OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Real Stories from Beyond Books Graduates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how students, career changers, and working professionals transformed their careers through live projects, modern tools, and mentor guidance.
            </p>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs font-mono font-bold text-slate-500 tabular-nums">
              <span className="text-sky-700 text-sm">0{currentIndex + 1}</span> / 0{totalSlides}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-white border border-slate-300 hover:border-sky-400 hover:bg-sky-50 text-slate-700 hover:text-sky-700 flex items-center justify-center transition-all shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center transition-all shadow-md shadow-sky-600/20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Testimonial Stage */}
        <div className="relative">
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Visual Portrait & Student Card */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                <div className="relative">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 border-4 border-white shadow-xl">
                    <img
                      src={currentStudent.image}
                      alt={`Photo of ${currentStudent.name}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Verified graduate badge */}
                  <div className="absolute -bottom-2.5 -right-2.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Verified Alum</span>
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <h3 className="text-xl font-bold font-heading text-slate-900">
                    {currentStudent.name}
                  </h3>
                  <p className="text-xs font-bold text-sky-700">
                    {currentStudent.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {currentStudent.company}
                  </p>

                  {/* 5-star rating */}
                  <div className="flex items-center justify-center sm:justify-start gap-1 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[11px] font-bold text-slate-700 ml-1">5.0 / 5.0</span>
                  </div>
                </div>

                {/* Course badge */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 w-full text-xs space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Program Completed:
                  </span>
                  <p className="font-semibold text-slate-800 line-clamp-1">
                    {currentStudent.courseTaken}
                  </p>
                </div>
              </div>

              {/* Right Column: Narrative Quote & Career Transformation */}
              <div className="lg:col-span-8 space-y-6">
                <Quote className="w-10 h-10 text-sky-500/25" />

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic font-normal">
                  "{currentStudent.quote}"
                </p>

                {/* Measurable Career Outcome Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-emerald-900">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Measurable Career Outcome</span>
                    </div>
                    <p className="text-sm font-semibold text-emerald-950">
                      {currentStudent.outcome}
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white text-emerald-800 font-bold text-xs border border-emerald-300 shadow-2xs whitespace-nowrap">
                    Verified Promotion
                  </span>
                </div>

                {/* Before & After comparison strip */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 text-[10px] uppercase font-semibold block">Background Before</span>
                      <span className="font-medium text-slate-700">{currentStudent.previousRole}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-200/70 flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-sky-600 shrink-0" />
                    <div>
                      <span className="text-sky-600 text-[10px] uppercase font-semibold block">Current Placement</span>
                      <span className="font-bold text-slate-900">{currentStudent.role} at {currentStudent.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Graduate Thumbnails Selector */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-slate-500 text-center sm:text-left">
            Select a student to view their journey:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TESTIMONIALS_DATA.map((student, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={student.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                    isActive
                      ? 'bg-white border-sky-400 shadow-md ring-2 ring-sky-500/20'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-10 h-10 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <p className={`text-xs font-bold truncate ${isActive ? 'text-sky-700' : 'text-slate-800'}`}>
                      {student.name}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate">
                      {student.company}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Aggregate Proof Numbers & Hire Graduates Prompt */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
          {OUTCOME_METRICS.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
              <span className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight block">
                {metric.value}
              </span>
              <span className="text-xs font-bold text-sky-700 block">
                {metric.label}
              </span>
              <p className="text-[11px] text-slate-500 leading-snug">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* Talent Network Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900">
              Are you an employer looking for job-ready graduates?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Hire vetted alumni trained on live projects, modern tools, and verified production portfolios.
            </p>
          </div>

          <a
            href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20we%20are%20looking%20to%20hire%20graduates%20from%20your%20alumni%20network."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm"
          >
            <span>Access Alumni Talent Network</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
