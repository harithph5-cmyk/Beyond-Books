import React, { useState } from 'react';
import { WORKSHOPS_DATA } from '../../data/workshopsData';
import { Workshop } from '../../types';
import { IMAGES } from '../../assets/images';
import { Calendar, Clock, Ticket, ChevronDown, ChevronUp } from 'lucide-react';

interface WorkshopsSectionProps {
  onSelectWorkshop: (workshop: Workshop) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  onSelectWorkshop,
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedWorkshops = showAll ? WORKSHOPS_DATA : WORKSHOPS_DATA.slice(0, 2);

  return (
    <section id="workshops" className="py-20 border-t border-slate-200/80 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Weekend Masterclasses & Skill Sprints
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Hands-On Live Intensives
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Master a specific production pipeline, modern tool, or automation workflow in an intensive live interactive lab session.
            </p>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="self-start md:self-end px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-semibold transition-colors border border-slate-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-xs"
          >
            <span>{showAll ? 'Show Fewer Masterclasses' : `View All ${WORKSHOPS_DATA.length} Masterclasses`}</span>
            {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Masterclass Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              <img
                src={IMAGES.workshopMasterclass}
                alt="Beyond Books Executive Masterclass Session"
                className="w-full aspect-[16/11] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-slate-200/80 text-xs space-y-1.5 backdrop-blur-md shadow-lg">
                <p className="text-sky-700 font-semibold text-[11px] uppercase tracking-wider">
                  Interactive Lab Environment
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  All masterclass seats include live step-by-step guidance, real tools access, and downloadable workflow templates.
                </p>
              </div>
            </div>
          </div>

          {/* Workshop Cards List */}
          <div className="lg:col-span-7 space-y-5">
            {displayedWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-4 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sky-700">{workshop.format}</span>
                    <span aria-hidden="true">·</span>
                    <span>{workshop.duration}</span>
                  </div>
                  <span className="text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80 font-semibold font-mono text-[11px]">
                    {workshop.seatsRemaining} seats remaining
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    {workshop.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {workshop.summary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 py-2 border-y border-slate-200/70">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{workshop.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Registration Fee</span>
                    <span className="text-base font-bold text-slate-900 tabular-nums">
                      {workshop.fee}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectWorkshop(workshop)}
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Reserve Pass</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
