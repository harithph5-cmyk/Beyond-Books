import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [track, setTrack] = useState('AI-Driven Growth Marketing Flagship');
  const [experience, setExperience] = useState('1-3 years');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions & Corporate Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            Connect With Our Admissions Committee
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Have questions about cohort prerequisites, curriculum depth, or corporate team sponsorships? We answer all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Grid: Left Contact Form, Right Campus & WhatsApp Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel bg-[#090e1a]/90 border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-white">Inquiry Received</h2>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{name}</span>. An admissions mentor has been assigned to your profile. We will email you at <span className="text-cyan-300 font-medium">{email}</span> within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I%20just%20submitted%20an%20inquiry%20under%20the%20name%20${encodeURIComponent(name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold font-heading text-white">
                      Request Consultation or Program Info
                    </h2>
                    <p className="text-xs text-slate-300">
                      Fill out the details below and an admissions director will prepare a customized syllabus overview.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rachel Chen"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Work or Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rachel@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Program of Interest *
                      </label>
                      <select
                        value={track}
                        onChange={(e) => setTrack(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c1220] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                      >
                        <option value="AI-Driven Growth Marketing Flagship">AI-Driven Growth Marketing (Flagship)</option>
                        <option value="Generative AI for Content & Creative">Generative AI for Creative & Content</option>
                        <option value="MarTech Automation & AI Agents">MarTech Automation & AI Agents</option>
                        <option value="Programmatic SEO & GEO Search">Programmatic SEO & GEO Search</option>
                        <option value="Executive AI Strategy for CMOs">Executive AI Strategy (Leadership Track)</option>
                        <option value="Live Weekend Masterclasses">Live Weekend Masterclasses</option>
                        <option value="Custom Corporate Training">Custom Corporate / Team Training</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Experience Level
                      </label>
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c1220] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                      >
                        <option value="0-1 years / Transitioning">Under 1 year / Transitioning</option>
                        <option value="1-3 years">1-3 years (Practitioner)</option>
                        <option value="4-7 years">4-7 years (Senior Specialist / Lead)</option>
                        <option value="8+ years / Leadership">8+ years (Director / VP / Founder)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Goals & Specific Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you are looking to achieve or ask specific questions regarding cohort scheduling..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-cyan-950/40 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Message to Admissions Committee</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Fast Track Card */}
            <div className="p-6 rounded-3xl glass-panel bg-gradient-to-br from-emerald-950/40 via-[#0a121c] to-[#070b14] border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-emerald-500/30" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Direct WhatsApp Hotline</h3>
                  <p className="text-xs text-emerald-400">Average response: Under 5 minutes</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Need immediate answers about cohort seat availability, payment schedules, or syllabus prerequisites? Speak directly with our admissions desk on WhatsApp.
              </p>

              <a
                href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I'd%20like%20to%20learn%20more%20about%20your%20training%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/40"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Open WhatsApp Live Chat</span>
              </a>
            </div>

            {/* Campus & Office Info */}
            <div className="p-6 rounded-3xl glass-panel bg-[#090e1a]/80 border border-white/10 space-y-4">
              <h3 className="text-base font-bold font-heading text-white">
                Executive Campus & Headquarters
              </h3>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Beyond Books Learning Campus</p>
                    <p className="text-slate-300">500 Tech Hub Blvd, Suite 400</p>
                    <p className="text-slate-300">Innovation District, MA 02142</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-300">Admissions Line: </span>
                    <a href="tel:+15552348920" className="text-white hover:text-cyan-400 transition-colors font-medium">
                      +1 (555) 234-8920
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-300">Official Inquiries: </span>
                    <a href="mailto:admissions@beyondbooks.edu" className="text-white hover:text-cyan-400 transition-colors font-medium">
                      admissions@beyondbooks.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1 border-t border-white/5">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Admissions Desk Hours</p>
                    <p className="text-slate-300">Monday – Friday: 8:00 AM – 8:00 PM EST</p>
                    <p className="text-slate-300">Saturday: 9:00 AM – 4:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
