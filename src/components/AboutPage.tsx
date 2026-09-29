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
    <div className="py-12 sm:py-16 space-y-20 bg-slate-50/50">
      {/* Header & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Beyond Books Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            We Built the Academy We Wished Existed When Education Needed Real Impact.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Traditional curricula take years to update. In that time, modern web stacks, digital media, AI tools, and business workflows transformed the landscape. Beyond Books exists to bridge the gap between static theory and live production execution.
          </p>
        </div>
      </section>

      {/* Campus & Studio Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl">
          <img
            src={IMAGES.aboutCampus}
            alt="Beyond Books Campus and Collaborative Learning Lab"
            className="w-full aspect-[21/9] min-h-[300px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-xl space-y-1">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                Innovation Campus & Live Hybrid Labs
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                500 Tech Hub Blvd · Beyond Books Training Campus
              </h2>
              <p className="text-xs sm:text-sm text-slate-200">
                Equipped with modern development workstations, interactive labs, and hands-on tool environments.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs whitespace-nowrap transition-colors shadow-md cursor-pointer"
            >
              Tour Campus & Book Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Pedagogical Difference */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Educational Foundations
          </div>
          <h2 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">
            Our Four Non-Negotiable Training Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <span className="font-mono text-xl font-bold text-sky-600">01</span>
            <h3 className="text-base font-bold text-slate-900">Project-First Learning</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No multiple-choice tests. Every qualification requires building functional projects and deploying verified deliverables.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <span className="font-mono text-xl font-bold text-sky-600">02</span>
            <h3 className="text-base font-bold text-slate-900">Active Practitioners</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mentors are working engineers, marketers, and operators who solve real challenges daily in the industry.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <span className="font-mono text-xl font-bold text-sky-600">03</span>
            <h3 className="text-base font-bold text-slate-900">Modern Tool Stacks</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We teach modern technologies, industry software, automation nodes, and AI workflows that top businesses use.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
            <span className="font-mono text-xl font-bold text-sky-600">04</span>
            <h3 className="text-base font-bold text-slate-900">Direct Career Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              From portfolio reviews to 1-on-1 interview practice, we assist students in achieving measurable career steps.
            </p>
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Faculty & Leadership
          </div>
          <h2 className="text-3xl font-bold font-heading text-slate-900 tracking-tight">
            Learn From Experienced Practitioners
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our instructional leads review your projects, test your workflows, and share proven best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MENTORS_DATA.map((mentor, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 hover:border-sky-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center font-bold text-sm text-sky-700 shrink-0">
                  {mentor.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{mentor.name}</h3>
                  <p className="text-xs text-sky-700 font-semibold">{mentor.role}</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {mentor.background}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Specialization:</span>
                <span className="text-slate-800 font-medium">{mentor.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Ready to Upgrade Your Practical Skills?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore our project-based courses or speak directly with our team to find the best program for your career path.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer"
            >
              Explore Courses
            </button>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors border border-slate-200 cursor-pointer"
            >
              Book Strategy Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
