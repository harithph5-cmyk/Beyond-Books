import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [track, setTrack] = useState('Digital Marketing');
  const [experience, setExperience] = useState('1-3 years');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 bg-slate-50/70 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions & Advisory Committee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
            Apply for Cohort or Request Consultation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about syllabus modules, prerequisites, or schedules? Submit your profile below or chat directly on WhatsApp.
          </p>
        </div>

        {/* Grid: Left Form, Right Campus & WhatsApp Fast Track */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-slate-900 font-semibold">{name}</span>. An admissions mentor has received your inquiry. We will contact you at <span className="text-sky-700 font-semibold">{email}</span> within 24 hours.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I%20just%20submitted%20an%20inquiry%20under%20the%20name%20${encodeURIComponent(name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rachel Chen"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
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
                        placeholder="rachel@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Program of Interest *
                      </label>
                      <select
                        value={track}
                        onChange={(e) => setTrack(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      >
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Web Designing">Web Designing</option>
                        <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Tally & Accounting">Tally & Accounting</option>
                        <option value="SaaS Development">SaaS Development</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Live Weekend Masterclasses">Live Weekend Masterclasses</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Experience Level
                      </label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                      >
                        <option value="0-1 years / Transitioning">Under 1 year / Beginner</option>
                        <option value="1-3 years">1-3 years (Practitioner)</option>
                        <option value="4-7 years">4-7 years (Senior / Lead)</option>
                        <option value="8+ years / Leadership">8+ years (Management / Founder)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Career Goals or Questions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you are looking to achieve..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-md shadow-sky-600/20 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Application / Request Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Fast Track */}
            <div className="p-6 rounded-3xl bg-white border border-emerald-300/80 shadow-md space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Direct WhatsApp Admissions Desk</h3>
                  <p className="text-[11px] text-emerald-700 font-semibold">Online now · Fast response</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Need immediate answers regarding cohort seat availability or corporate invoicing? Speak directly with our admissions team.
              </p>

              <a
                href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I'd%20like%20to%20learn%20more%20about%20your%20training%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Live Chat</span>
              </a>
            </div>

            {/* Campus Info */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3.5">
              <h3 className="text-sm font-bold font-heading text-slate-900">
                Executive Campus & Headquarters
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">Beyond Books Learning Campus</p>
                    <p className="text-slate-500">500 Tech Hub Blvd, Suite 400 · Innovation District</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-slate-500">Admissions Line: </span>
                    <a href="tel:+15552348920" className="text-slate-900 hover:text-sky-600 transition-colors font-medium">
                      +1 (555) 234-8920
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <span className="text-slate-500">Official Inquiries: </span>
                    <a href="mailto:admissions@beyondbooks.edu" className="text-slate-900 hover:text-sky-600 transition-colors font-medium">
                      admissions@beyondbooks.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-500">Mon – Fri: 8:00 AM – 8:00 PM EST · Sat: 9:00 AM – 4:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
