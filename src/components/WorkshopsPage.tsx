import React from 'react';
import { WORKSHOPS_DATA } from '../data/workshopsData';
import { Workshop } from '../types';
import { Calendar, Clock, Ticket, CheckCircle2, Sparkles, Users, MessageCircle } from 'lucide-react';

interface WorkshopsPageProps {
  onSelectWorkshop: (workshop: Workshop) => void;
  onOpenConsultation: () => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({
  onSelectWorkshop,
  onOpenConsultation,
}) => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Intensives & Masterclasses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Upcoming Live Workshops & Sprints
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            High-velocity, 3 to 4-hour hands-on masterclasses designed to equip you with specific production workflows, prompt engineering systems, and automated agent loops.
          </p>
        </div>
      </section>

      {/* Workshop Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKSHOPS_DATA.map((workshop) => (
            <div
              key={workshop.id}
              className="p-6 rounded-2xl glass-panel bg-[#090e1a]/80 border border-white/10 flex flex-col justify-between space-y-6 hover:border-cyan-500/30 transition-all duration-200 group"
            >
              <div className="space-y-4">
                {/* Format & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-cyan-400">{workshop.format}</span>
                    <span aria-hidden="true">·</span>
                    <span>{workshop.duration}</span>
                  </div>
                  <span className="text-amber-400 font-medium font-mono text-[11px]">
                    {workshop.seatsRemaining} of {workshop.seatsTotal} seats open
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {workshop.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {workshop.summary}
                  </p>
                </div>

                {/* Date & Time */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 py-3 border-y border-white/5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{workshop.time}</span>
                  </div>
                </div>

                {/* Takeaways */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                    What You Will Build & Export:
                  </span>
                  <div className="space-y-1.5">
                    {workshop.takeaways.map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructor */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-900/50 border border-cyan-500/30 flex items-center justify-center text-xs font-bold text-cyan-300">
                    {workshop.instructor.avatar}
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-white">{workshop.instructor.name}</p>
                    <p className="text-[11px] text-slate-300">{workshop.instructor.role} · {workshop.instructor.company}</p>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-300 block">Registration</span>
                  <span className="text-base font-bold text-emerald-400 tabular-nums">
                    {workshop.fee}
                  </span>
                </div>

                <button
                  onClick={() => onSelectWorkshop(workshop)}
                  className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 shadow-md shadow-emerald-950/40 cursor-pointer"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Reserve Seat</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Workshop Request Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl glass-panel bg-gradient-to-r from-[#0a101f] to-[#0c152a] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold font-heading text-white">
              Want a Dedicated Masterclass for Your Marketing Team?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We deliver custom on-site and remote masterclasses for marketing departments scaling past 10+ people. Tailored to your ad accounts, brand guidelines, and proprietary tech stacks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-cyan-950/40 cursor-pointer"
            >
              Request Corporate Training Syllabus
            </button>
            <a
              href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20we%20want%20to%20inquire%20about%20a%20corporate%20AI%20workshop%20for%20our%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 text-xs font-semibold transition-colors border border-white/10 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Corporate Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
