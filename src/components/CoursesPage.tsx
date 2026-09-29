import React, { useState } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { Course } from '../types';
import { Search, Calendar, Clock, ArrowRight, CheckCircle2, Sparkles, Filter } from 'lucide-react';

interface CoursesPageProps {
  onSelectCourse: (course: Course) => void;
  onOpenConsultation: () => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onSelectCourse,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Growth & Performance',
    'AI & Generative Tools',
    'MarTech & Automation',
    'Executive Strategy'
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Catalogue · Fall 2026 Cohorts</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Flagship Courses & Live Production Labs
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Every Beyond Books program includes live mentor sessions, real platform budgets, sandbox compute access, and verified portfolio credentials.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-400 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tool (e.g. n8n, Claude, Meta)..."
              className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length === 0 ? (
          <div className="p-12 text-center rounded-2xl glass-panel bg-white/[0.02] border border-white/5 space-y-3">
            <p className="text-base font-semibold text-white">No courses match your search.</p>
            <p className="text-xs text-slate-400">Try searching for "Growth", "Video", or "Agents".</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl glass-panel bg-[#090e1a]/80 border border-white/10 flex flex-col justify-between overflow-hidden hover:border-cyan-500/30 transition-all duration-200 group"
              >
                <div className="p-6 space-y-5">
                  {/* Category & Mode */}
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-cyan-400">{course.category}</span>
                    <span>{course.duration}</span>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {course.title}
                    </h2>
                    <p className="mt-2 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {course.shortDesc}
                    </p>
                  </div>

                  {/* Schedule */}
                  <div className="space-y-1.5 py-3 border-y border-white/5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Cohort Starts: {course.cohortDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{course.schedule}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                      Program Distinction:
                    </span>
                    <div className="space-y-1.5">
                      {course.keyHighlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <span className="text-[11px] text-slate-300 block mb-1.5">Tools Mastered:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.tools.slice(0, 4).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-slate-200 border border-white/5"
                        >
                          {tool}
                        </span>
                      ))}
                      {course.tools.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[11px] text-slate-300">
                          +{course.tools.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 px-6 bg-[#060a12] border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-300 block">Tuition</span>
                    <span className="text-sm font-bold text-white tabular-nums">{course.fee}</span>
                  </div>

                  <button
                    onClick={() => onSelectCourse(course)}
                    className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-cyan-950/40 cursor-pointer"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Tuition & Employer Reimbursement Info Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl glass-panel bg-gradient-to-r from-cyan-950/30 via-[#0a101f] to-indigo-950/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg font-bold text-white">
              Over 65% of Beyond Books Students Are Sponsored by Their Employers
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We provide formal course syllabi, corporate sponsorship proposal templates, and invoice documentation compatible with corporate L&D budgets.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors whitespace-nowrap shadow-lg shadow-cyan-950/40 cursor-pointer"
          >
            Download Sponsorship Template & Talk to Advisor
          </button>
        </div>
      </section>
    </div>
  );
};
