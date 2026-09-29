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
    'Digital Marketing',
    'Web Designing',
    'Full Stack Development',
    'Tally & Accounting',
    'SaaS Development',
    'AI & Automation'
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
    <div className="py-12 sm:py-16 space-y-12 bg-slate-50/50">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Academic Catalogue · Upcoming Cohorts</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight">
            Flagship Courses & Practical Labs
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Every Beyond Books program includes live mentor sessions, real tools and projects, practical assignments, and verified portfolio credentials.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="pt-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white font-semibold shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, skills, tools..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between overflow-hidden hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-200 group"
            >
              <div>
                {course.image && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 text-sky-700 font-bold text-[11px] shadow-xs">
                        {course.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sky-700">{course.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.duration}</span>
                  </div>
                  <span className="font-mono text-slate-400 font-semibold">{course.level}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                    {course.shortDesc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider block">
                    Core Technologies & Platforms:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.slice(0, 4).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] text-slate-700 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[11px] text-slate-400">
                        +{course.tools.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider block">
                    What You Will Build:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {course.keyHighlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>Cohort: {course.cohortDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{course.schedule}</span>
                  </div>
                </div>
              </div>
              </div>

              <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Tuition Fee</span>
                  <span className="text-sm font-bold text-slate-900 tabular-nums">{course.fee}</span>
                </div>

                <button
                  onClick={() => onSelectCourse(course)}
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <span>Explore Curriculum</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Consultation Prompt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Not sure which track aligns with your current level?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Schedule a 15-minute diagnostic call with an admissions mentor. We'll assess your career background and recommend the optimal track.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            Schedule 1-on-1 Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
