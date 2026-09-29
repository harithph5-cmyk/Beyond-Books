import React from 'react';
import { IMAGES } from '../../assets/images';
import { MENTORS_DATA } from '../../data/aboutData';
import { Sparkles } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onOpenConsultation?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOpenConsultation,
}) => {
  const pillars = [
    {
      index: '01',
      title: 'Real Media Spend, Not Mock Slide Decks',
      description: 'Theoretical case studies do not prepare you for ad auction volatility. Every student pod manages live ad accounts with dedicated budget allocations, mastering bid management, CTR optimization, and CAC targets under real market conditions.'
    },
    {
      index: '02',
      title: 'Autonomous MarTech & Agent Loops',
      description: 'We do not teach generic prompt tricks. You build functional agentic architectures using modern automation platforms and frontier LLM APIs that autonomously monitor campaign anomalies, enrich inbound leads, and scale creative variants.'
    },
    {
      index: '03',
      title: 'Active High-Growth Practitioners as Mentors',
      description: 'No retired academics or keynote influencers. Our mentors are currently directing eight-figure media spend, enterprise engineering teams, and digital transformations at leading technology scale-ups.'
    },
    {
      index: '04',
      title: 'High-Impact Placement & Verified Artifacts',
      description: 'You graduate with a verified production portfolio: working API webhooks, audited attribution stacks, and commercial video creative reels. 94.2% of our graduates secure promotions or senior roles within 120 days.'
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-white border-t border-slate-200/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Beyond Books Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
            Why Modern Growth Leaders Choose Beyond Books
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The traditional degree is years behind the modern market. We engineered an academy built exclusively around live production and practical mastery.
          </p>
        </div>

        {/* 2-Zone Layout: Left Editorial Pillars, Right High-Resolution Workstation Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Pillars */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="group flex items-start gap-5 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200"
              >
                <div className="font-heading text-2xl font-bold text-sky-600 shrink-0 tabular-nums">
                  {pillar.index}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              <img
                src={IMAGES.courseWorkstation}
                alt="High-Tech Marketing & Generative AI Lab Workstation"
                className="w-full aspect-[4/3] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-slate-200/80 text-xs space-y-2 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between text-sky-700 font-semibold text-[11px]">
                  <span>LAB BENCHMARK ARCHITECTURE</span>
                  <span className="text-emerald-700 font-semibold">ACTIVE LABS</span>
                </div>
                <div className="space-y-1 text-[11px] text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Server-Side Tagging (CAPI)</span>
                    <span className="text-emerald-700 font-semibold font-mono">100% Match Rate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Autonomous n8n LLM Agent</span>
                    <span className="text-sky-700 font-semibold font-mono">1.2s Response</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Creative Variants Rendered</span>
                    <span className="text-slate-900 font-bold font-mono">48/week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Mentors & Faculty Grid */}
        <div id="mentors" className="space-y-8 pt-6 border-t border-slate-200 scroll-mt-20">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Active Practitioners
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              Learn Directly From Faculty Leading High-Growth Systems
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              No retired theorists. Our mentors review your live campaigns, inspect your automation nodes, and stress-test your projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENTORS_DATA.map((mentor, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center font-bold text-sm text-sky-700 shrink-0">
                    {mentor.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{mentor.name}</h4>
                    <p className="text-[11px] text-sky-700 font-semibold">{mentor.role}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {mentor.background}
                </p>

                <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Focus: </span>
                  <span>{mentor.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
