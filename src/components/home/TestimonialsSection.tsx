import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { Quote, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'growth' | 'creative' | 'martech'>('all');

  const filteredTestimonials = TESTIMONIALS_DATA.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'growth') return t.courseTaken.toLowerCase().includes('growth') || t.courseTaken.toLowerCase().includes('marketing');
    if (filter === 'creative') return t.courseTaken.toLowerCase().includes('creative') || t.courseTaken.toLowerCase().includes('design');
    if (filter === 'martech') return t.courseTaken.toLowerCase().includes('stack') || t.courseTaken.toLowerCase().includes('saas') || t.courseTaken.toLowerCase().includes('automation');
    return true;
  });

  return (
    <section id="testimonials" className="py-20 relative scroll-mt-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header with Interactive Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Verified Student Stories & Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              From Beginners to Industry-Ready Professionals
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Read how learners leveraged Beyond Books project-driven courses to master modern tools and transform their careers.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 border border-slate-300 rounded-xl self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-sky-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Cohorts
            </button>
            <button
              onClick={() => setFilter('growth')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'growth'
                  ? 'bg-white text-sky-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Digital Marketing
            </button>
            <button
              onClick={() => setFilter('creative')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'creative'
                  ? 'bg-white text-sky-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Web & UI Design
            </button>
            <button
              onClick={() => setFilter('martech')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'martech'
                  ? 'bg-white text-sky-700 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Full Stack & AI
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-5 hover:border-sky-300 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-6 h-6 text-sky-600/30" />
                  <span className="text-[11px] font-mono text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60">
                    Verified Graduate
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  "{item.quote}"
                </p>

                {/* Outcome callout */}
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-start gap-2 text-xs text-emerald-800">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug font-medium">{item.outcome}</span>
                </div>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-100 space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                <p className="text-xs text-slate-600">
                  <span className="text-sky-700 font-medium">{item.role}</span> at {item.company}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1 font-mono">
                  <span>Track: {item.courseTaken}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
