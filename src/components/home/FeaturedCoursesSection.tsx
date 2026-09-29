import React, { useState } from 'react';
import { COURSES_DATA } from '../../data/coursesData';
import { Course } from '../../types';
import { ArrowRight, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface FeaturedCoursesSectionProps {
  onSelectCourse: (course: Course) => void;
}

export const FeaturedCoursesSection: React.FC<FeaturedCoursesSectionProps> = ({
  onSelectCourse,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
    if (selectedCategory === 'All') return true;
    return course.category === selectedCategory;
  });

  return (
    <section id="courses" className="py-20 relative scroll-mt-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              INDUSTRY-READY CURRICULUM & LIVE PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Practical, Project-Based Career Courses
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Build skills that businesses actually need with live projects, real tools, practical labs, and comprehensive career mentoring.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 border border-slate-300 rounded-xl self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-sky-700 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Course Cards Grid with Dedicated Images and Tuition Fees in Rs. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between overflow-hidden group hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/70 transition-all duration-300"
            >
              <div>
                {/* Course Image Header */}
                {course.image && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                    {/* Top overlay category & code tags */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md bg-white/95 text-sky-700 font-bold text-[11px] shadow-sm tracking-wide">
                        {course.categoryName || course.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-900/80 text-white font-mono text-[11px] font-semibold backdrop-blur-xs">
                        {course.code || '01'}
                      </span>
                    </div>

                    {/* Bottom overlay duration & mode */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-white font-medium drop-shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-sky-300" />
                        <span>{course.duration}</span>
                      </div>
                      <span className="bg-sky-600/90 text-white px-2 py-0.5 rounded text-[10px] font-semibold">
                        {course.mode}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content Area */}
                <div className="p-6 space-y-4">
                  {/* Course Title */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {course.shortDesc}
                    </p>
                  </div>

                  {/* Learn: Highlights List */}
                  {course.learnItems && course.learnItems.length > 0 && (
                    <div className="pt-1 space-y-1.5">
                      <span className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider block">
                        Core Modules:
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                        {course.learnItems.join(' · ')}
                      </p>
                    </div>
                  )}

                  {/* Cohort start info */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      <span>Starts {course.cohortDate}</span>
                    </div>
                    <span className="text-[11px] text-slate-500">{course.level}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Tuition Fee in Rupees and CTA */}
              <div className="p-5 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block">
                    Tuition Fee
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base sm:text-lg font-bold font-heading text-slate-900 tracking-tight tabular-nums">
                      {course.fee}
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">/ full track</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectCourse(course)}
                  className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-all duration-150 shadow-xs shadow-sky-600/20 flex items-center gap-1.5 group-hover:gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <span>{course.ctaText || 'Explore Course'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
