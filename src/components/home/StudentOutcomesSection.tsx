import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { TrendingUp, Briefcase, ArrowUpRight } from 'lucide-react';

export const StudentOutcomesSection: React.FC = () => {
  const spotlights = TESTIMONIALS_DATA.slice(0, 3);

  return (
    <section id="outcomes" className="py-20 relative scroll-mt-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Empirical Results & Career Acceleration
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
            Measurable Career & Practical Outcomes
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We don't measure success by empty certificates. We track compensation jumps, project execution, and career advancement achieved by our learners.
          </p>
        </div>

        {/* Spotlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spotlights.map((student) => (
            <div
              key={student.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-5 hover:border-sky-400 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Outcome badge */}
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 w-fit">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="line-clamp-1">{student.outcome}</span>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{student.quote.length > 200 ? student.quote.substring(0, 200) + '...' : student.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{student.name}</h4>
                  <p className="text-sky-700 font-medium">{student.role} · {student.company}</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Briefcase className="w-3 h-3 text-slate-400" />
                  <span>Before: {student.previousRole}</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Track: {student.courseTaken}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Strip */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Are you an employer or team leader looking for talent?
            </h4>
            <p className="text-xs text-slate-600">
              Hire vetted graduates trained on live projects, modern tools, and verified production portfolios.
            </p>
          </div>

          <a
            href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20we%20are%20looking%20to%20hire%20graduates%20from%20your%20alumni%20network."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
          >
            <span>Access Alumni Talent Network</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
