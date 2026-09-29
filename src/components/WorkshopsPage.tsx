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
    <div className="py-12 sm:py-16 space-y-12 bg-slate-50/50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Intensives & Masterclasses</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight">
            Upcoming Live Workshops & Sprints
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            High-velocity hands-on masterclasses designed to equip you with specific production workflows, practical tool setups, and automation loops.
          </p>
        </div>
      </section>

      {/* Workshop Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKSHOPS_DATA.map((workshop) => (
            <div
              key={workshop.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-6 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-200 group"
            >
              <div className="space-y-4">
                {/* Format & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sky-700">{workshop.format}</span>
                    <span aria-hidden="true">·</span>
                    <span>{workshop.duration}</span>
                  </div>
                  <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 font-semibold font-mono text-[11px]">
                    {workshop.seatsRemaining} of {workshop.seatsTotal} seats open
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {workshop.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {workshop.summary}
                  </p>
                </div>

                {/* Practical Takeaways */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider block">
                    What You Will Build & Deploy:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {workshop.takeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Date & Time Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>Lead: {workshop.instructor.name} ({workshop.instructor.role})</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Registration Fee</span>
                  <span className="text-lg font-bold text-slate-900 tabular-nums">
                    {workshop.fee}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I'd%20like%20to%20register%20for%20the%20${encodeURIComponent(workshop.title)}%20workshop.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                    title="Inquire via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => onSelectWorkshop(workshop)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Reserve Seat</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Training Prompt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Need a dedicated private workshop for your team?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              We deliver custom on-site and remote masterclasses for growth marketing departments, creative studios, and product engineering teams.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            Request Team Training
          </button>
        </div>
      </section>
    </div>
  );
};
