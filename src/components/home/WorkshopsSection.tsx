import React, { useState } from 'react';
import { IMAGES } from '../../assets/images';
import { Workshop } from '../../types';
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  Building2,
  X,
  MessageCircle,
  ChevronRight
} from 'lucide-react';

interface CollegeEvent {
  id: string;
  collegeName: string;
  location: string;
  topic: string;
  category: 'auditorium' | 'labs' | 'certificates';
  date: string;
  attendees: string;
  image: string;
  summary: string;
  highlights: string[];
}

const INITIAL_COLLEGE_EVENTS: CollegeEvent[] = [
  {
    id: 'event-1',
    collegeName: 'St. Xavier\'s Institute of Engineering & Technology',
    location: 'Central Campus Auditorium',
    topic: 'Frontier AI, Autonomous Workflows & Modern Web Tech',
    category: 'auditorium',
    date: 'August 18, 2026',
    attendees: '380+ Engineering Students',
    image: IMAGES.collegeWorkshopAuditorium,
    summary: 'A packed 4-hour immersive keynote and live demonstration where our founders walked 380+ computer science and IT students through building and deploying autonomous LLM workflows and React components.',
    highlights: [
      'Live code deployment on the auditorium projection screen',
      'Interactive Q&A on breaking into tech and building GitHub proof',
      'Official appreciation letter awarded by the Head of Computer Engineering'
    ]
  },
  {
    id: 'event-2',
    collegeName: 'Apex College of Commerce & Management',
    location: 'Digital Marketing & Accounting Lab',
    topic: 'Hands-On Performance Marketing & Tally GST Sprint',
    category: 'labs',
    date: 'July 24, 2026',
    attendees: '140+ Commerce & BBA Students',
    image: IMAGES.collegeWorkshopComputerLab,
    summary: 'Conducted in the college computer lab where every student configured live Meta ad campaigns, set up Google Analytics 4 tracking funnels, and executed Tally Prime GST reconciliation cases.',
    highlights: [
      '100% hands-on workstations with real tools access',
      'Live ad spend simulation and keyword ranking experiments',
      'Individual mentor guidance for every pod of 4 students'
    ]
  },
  {
    id: 'event-3',
    collegeName: 'City Metropolitan University Tech Faculty',
    location: 'Main University Convocation Hall',
    topic: 'Full Stack Web Development & Career Placement Drive',
    category: 'certificates',
    date: 'June 12, 2026',
    attendees: '220+ Certified Participants',
    image: IMAGES.collegeCertificateCeremony,
    summary: 'Joint certificate presentation ceremony with the Dean of Student Affairs celebrating students who completed our 2-day intensive full stack coding hackathon and portfolio review.',
    highlights: [
      'Official Beyond Books and College co-branded certificates',
      '18 students selected for direct summer project internships',
      'MoU signed for ongoing technical workshops and guest lectures'
    ]
  }
];

interface WorkshopsSectionProps {
  onSelectWorkshop?: (workshop: Workshop) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = () => {
  const [events] = useState<CollegeEvent[]>(INITIAL_COLLEGE_EVENTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProofModal, setActiveProofModal] = useState<CollegeEvent | null>(null);

  const filteredEvents = events.filter((ev) => {
    if (selectedCategory === 'all') return true;
    return ev.category === selectedCategory;
  });

  return (
    <section id="workshops" className="py-20 border-t border-slate-200/80 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold uppercase tracking-wider text-sky-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>COLLEGE WORKSHOPS & CAMPUS PROOFS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            Workshops We Held in Colleges: Proofs & Photos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We regularly visit universities, engineering colleges, and management institutes across the region to conduct hands-on bootcamps, practical coding sprints, and live marketing workshops.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80 w-fit">
          {[
            { id: 'all', label: 'All Campus Events' },
            { id: 'auditorium', label: 'Auditorium Keynotes' },
            { id: 'labs', label: 'Hands-On Computer Labs' },
            { id: 'certificates', label: 'Certificate Distributions' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-white text-sky-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* College Workshop Cards Grid with Verified Proofs & Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Event Image with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={event.image}
                    alt={event.collegeName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />

                  {/* Top tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-white/95 text-sky-700 font-bold text-[11px] shadow-sm">
                      {event.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Bottom venue info */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                    <div className="flex items-center gap-1.5 drop-shadow-sm">
                      <Building2 className="w-3.5 h-3.5 text-sky-300" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <span className="bg-slate-900/80 px-2 py-0.5 rounded text-[11px] font-semibold backdrop-blur-xs">
                      {event.attendees}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-sky-700 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>{event.date}</span>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                      {event.collegeName}
                    </h3>
                    <p className="text-xs font-semibold text-slate-700">
                      Topic: {event.topic}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-1">
                      {event.summary}
                    </p>
                  </div>

                  {/* Highlights Bullet Proofs */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 block">
                      Event Highlights & Verified Proofs:
                    </span>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      {event.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer with Quick Proof Preview Button */}
              <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  Verified On-Campus Event
                </span>
                <button
                  onClick={() => setActiveProofModal(event)}
                  className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-sky-50 text-sky-700 hover:text-sky-800 text-xs font-bold transition-colors border border-slate-200 shadow-2xs flex items-center gap-1 cursor-pointer"
                >
                  <span>View Proof Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View Proof Details Deep Dive Modal */}
      {activeProofModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <img
                src={activeProofModal.image}
                alt={activeProofModal.collegeName}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveProofModal(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/70 hover:bg-slate-950 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="bg-sky-600 px-2.5 py-1 rounded-md font-bold">
                  {activeProofModal.collegeName}
                </span>
                <span className="bg-slate-900/80 px-2.5 py-1 rounded-md font-medium">
                  {activeProofModal.attendees}
                </span>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider block">
                  {activeProofModal.category.toUpperCase()} PROOF
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  {activeProofModal.topic}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Conducted on {activeProofModal.date} at {activeProofModal.location}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeProofModal.summary}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Verified Event Highlights:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {activeProofModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500">Beyond Books Institutional Outreach</span>
                <a
                  href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I'd%20like%20to%20inquire%20about%20a%20similar%20workshop%20for%20my%20college."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire for Your Campus</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
