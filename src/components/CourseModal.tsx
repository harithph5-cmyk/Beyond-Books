import React, { useState } from 'react';
import { Course } from '../types';
import { X, Calendar, Clock, CheckCircle2, Download, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnrollSuccess?: (courseTitle: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onEnrollSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'syllabus' | 'apply'>('syllabus');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('1-3 years');
  const [submitted, setSubmitted] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!course) return null;

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onEnrollSuccess) onEnrollSuccess(course.title);
  };

  const handleDownloadSyllabus = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div className="space-y-2 pr-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="font-semibold text-sky-700">{course.category}</span>
              <span aria-hidden="true">·</span>
              <span>{course.duration}</span>
              <span aria-hidden="true">·</span>
              <span>{course.level}</span>
            </div>
            <h2 id="course-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              {course.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>Next Cohort: {course.cohortDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>{course.schedule}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-colors shrink-0 cursor-pointer"
            aria-label="Close course details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center border-b border-slate-200 bg-slate-100/60 px-6">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`py-3 px-4 text-xs font-semibold cursor-pointer border-b-2 transition-colors ${
              activeTab === 'syllabus'
                ? 'border-sky-600 text-sky-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Full Curriculum & Labs
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`py-3 px-4 text-xs font-semibold cursor-pointer border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'apply'
                ? 'border-sky-600 text-sky-700 bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Apply for Seat</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'syllabus' ? (
            <>
              {/* Course Banner Image */}
              {course.image && (
                <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold">{course.category}</span>
                    <span className="bg-sky-600 px-2 py-0.5 rounded text-[11px] font-bold">
                      Fee: {course.fee}
                    </span>
                  </div>
                </div>
              )}

              {/* Program Overview */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Program Overview
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {course.longDesc}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>Program Distinctions & Live Labs</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Covered */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Tools & Platforms Mastered
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {course.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Syllabus Modules */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Weekly Syllabus Breakdown
                </h4>
                <div className="space-y-3">
                  {course.syllabusModules.map((mod, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-sky-700">{mod.week}</span>
                        <span className="text-slate-500 font-medium">Hands-on Lab Sprint</span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900">{mod.title}</h5>
                      <ul className="space-y-1.5 pt-1">
                        {mod.topics.map((t, tIdx) => (
                          <li key={tIdx} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="text-sky-600 font-bold">›</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites & Certification */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900">Prerequisites:</p>
                  <p className="text-slate-600">{course.prerequisites}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                    <span>Credential Awarded:</span>
                  </p>
                  <p className="text-slate-700 font-medium">{course.certification}</p>
                </div>
              </div>
            </>
          ) : (
            /* Enrollment Application Form */
            <div className="space-y-6 max-w-xl mx-auto py-2">
              {submitted ? (
                <div className="p-8 text-center space-y-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Application Received</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you for applying for <span className="text-sky-700 font-semibold">{course.title}</span>. Our admissions team reviews applications within 24 hours. We will contact you via email and phone to schedule your diagnostic intake.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I%20just%20submitted%20my%20application%20for%20${encodeURIComponent(course.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Fast-Track on WhatsApp</span>
                    </a>
                    <button
                      onClick={onClose}
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
                    >
                      Return to Website
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">
                      Cohort Admission: {course.cohortDate}
                    </h3>
                    <p className="text-xs text-slate-600">
                      Tuition Fee: <span className="font-semibold text-slate-900">{course.fee}</span> (Installment plans available at 0% interest).
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Jordan Miller"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jordan@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number (WhatsApp preferred) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Experience Level
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-sky-500"
                    >
                      <option value="Beginner / Career Transitioner">Beginner / Career Transitioner (&lt; 1 yr)</option>
                      <option value="1-3 years">Practitioner (1-3 years)</option>
                      <option value="4-7 years">Senior / Lead (4-7 years)</option>
                      <option value="8+ years / Executive">Management / Founder (8+ years)</option>
                    </select>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                    By submitting, your seat reservation request is sent to our faculty committee. No upfront payment is required until after your diagnostic interview.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    Submit Application for {course.title}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 px-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-600">
            <span>Tuition: </span>
            <span className="font-bold text-slate-900 text-sm">{course.fee}</span>
            <span className="text-slate-500"> (Installment plans available)</span>
          </div>

          <div className="flex items-center gap-3">
            {downloadSuccess ? (
              <span className="text-xs text-emerald-700 flex items-center gap-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Syllabus PDF downloaded!</span>
              </span>
            ) : (
              <button
                onClick={handleDownloadSyllabus}
                className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-200 shadow-xs cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Download PDF Syllabus</span>
              </button>
            )}

            {activeTab === 'syllabus' ? (
              <button
                onClick={() => setActiveTab('apply')}
                className="px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Apply for Cohort
              </button>
            ) : (
              <button
                onClick={() => setActiveTab('syllabus')}
                className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                Review Syllabus
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
