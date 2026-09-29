import React from 'react';
import { MENTORS_DATA, TRUST_PARTNERS } from '../data/aboutData';
import { IMAGES } from '../assets/images';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Award } from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onExploreCourses: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
  onExploreCourses,
}) => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      {/* Header & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Beyond Books Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
            We Built the Institute We Wished Existed When Marketing Changed Forever.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            Traditional universities take four years to update a textbook. In that time, generative AI, privacy shifts, and algorithmic bidding transformed digital acquisition three times over. Beyond Books exists to bridge the gap between static theory and live production execution.
          </p>
        </div>
      </section>

      {/* Campus & Studio Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
          <img
            src={IMAGES.aboutCampus}
            alt="Beyond Books Executive Campus and Collaborative Learning Lab"
            className="w-full aspect-[21/9] min-h-[300px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Innovation Campus & Live Hybrid Labs
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                500 Tech Hub Blvd · Executive Training Campus
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Equipped with high-performance workstation pods, multi-display analytics studios, and isolated API sandbox environments.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs whitespace-nowrap transition-colors shadow-lg shadow-cyan-950/40 cursor-pointer"
            >
              Tour Campus & Book Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-left space-y-2 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Our Four Pedagogy Invariants
          </span>
          <h2 className="text-3xl font-bold font-heading text-white tracking-tight">
            How We Structure Every Program
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-panel bg-[#090e1a]/80 border border-white/10 space-y-3">
            <span className="font-heading text-xl font-bold text-cyan-400">01. Real Capital Exposure</span>
            <h3 className="text-base font-bold text-white">No Synthetic Simulators</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every cohort is allocated live ad budget to run real traffic campaigns on Meta Advantage+, Google Ads 360, and TikTok. You face actual click fraud, audience saturation, and CPA shifts under realistic stakes.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel bg-[#090e1a]/80 border border-white/10 space-y-3">
            <span className="font-heading text-xl font-bold text-cyan-400">02. Autonomous Architecture</span>
            <h3 className="text-base font-bold text-white">Building Systems, Not Busywork</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We teach marketers how to construct automated n8n pipelines, webhook monitors, and LLM reasoning agents so teams can operate with 10x leverage without adding headcount.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel bg-[#090e1a]/80 border border-white/10 space-y-3">
            <span className="font-heading text-xl font-bold text-cyan-400">03. Active Industry Fellows</span>
            <h3 className="text-base font-bold text-white">Practitioners Over Academics</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our instructors are active CMOs, creative directors, and growth architects running campaigns right now. If a platform algorithm changes on Tuesday, our syllabus reflects it by Thursday.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel bg-[#090e1a]/80 border border-white/10 space-y-3">
            <span className="font-heading text-xl font-bold text-cyan-400">04. Lifelong Peer Network</span>
            <h3 className="text-base font-bold text-white">Selective Executive Circle</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Admission is selective, strictly capped at 25 seats per pod. You learn alongside motivated peers from high-growth startups and global enterprises who become lifelong collaborators.
            </p>
          </div>
        </div>
      </section>

      {/* Mentors & Faculty */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Faculty & Lab Fellows
          </span>
          <h2 className="text-3xl font-bold font-heading text-white tracking-tight">
            Learn From the Minds Directing Millions in Media & AI
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our fellows don't teach from slides—they review your code, audit your campaigns, and refine your creative prompts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENTORS_DATA.map((mentor, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel bg-[#090e1a]/80 border border-white/10 space-y-4 hover:border-cyan-500/30 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-900 to-indigo-900 border border-cyan-500/30 flex items-center justify-center font-bold text-base text-cyan-300">
                  {mentor.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{mentor.name}</h3>
                  <p className="text-xs text-cyan-400 font-medium">{mentor.role}</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {mentor.background}
              </p>

              <div className="pt-2 border-t border-white/5 text-[11px] text-slate-300">
                <span className="font-semibold text-slate-300 block">Core Specialty:</span>
                <span>{mentor.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accreditations & Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel bg-gradient-to-r from-[#090e1a] to-[#0d1424] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Accreditation & Quality Standards</span>
            </div>
            <h2 className="text-2xl font-bold font-heading text-white">
              Recognized Worldwide by Leading Ad Platforms
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Beyond Books is an accredited educational partner with Meta, Google Marketing Platform, and TikTok for Business. Our credentials carry direct weight in hiring decisions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onExploreCourses}
              className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs transition-colors border border-white/10"
            >
              Admissions Diagnostic
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
