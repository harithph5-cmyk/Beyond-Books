import React, { useState } from 'react';
import { COURSES_DATA } from '../../data/coursesData';
import { Course } from '../../types';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

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
    <section id="courses" className="py-20 relative scroll-mt-20 bg-slate-50/70">
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
              Build skills that businesses actually need with live projects, real tools, and comprehensive career mentoring.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 border border-slate-300/70 rounded-xl self-start md:self-end">
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

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between overflow-hidden group hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-200"
            >
              <div className="p-6 sm:p-7 space-y-5">
                {/* Header: Code & Category Tag */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sky-600 font-bold tracking-wider">
                      {course.code || '01'} —
                    </span>
                    <span className="font-semibold text-slate-800 tracking-wide">
                      {course.categoryName || course.category}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {course.duration}
                  </span>
                </div>

                {/* Course Title */}
                <div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {course.shortDesc}
                  </p>
                </div>

                {/* Learn: Highlights List */}
                {course.learnItems && course.learnItems.length > 0 && (
                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-semibold text-sky-700 uppercase tracking-wider block">
                      Learn:
                    </span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      {course.learnItems.join(' · ')}
                    </p>
                  </div>
                )}

                {/* Quick Meta details */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>Starts {course.cohortDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{course.mode}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Requested CTA */}
              <div className="p-5 px-6 sm:px-7 bg-slate-50/80 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Tuition Fee</span>
                  <span className="text-sm font-bold text-slate-900 tabular-nums">{course.fee}</span>
                </div>

                <button
                  onClick={() => onSelectCourse(course)}
                  className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-all duration-150 shadow-sm shadow-sky-600/20 flex items-center gap-1.5 group-hover:gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
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
