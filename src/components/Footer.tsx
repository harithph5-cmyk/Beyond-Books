import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', targetId: 'hero' },
    { label: 'About Us', targetId: 'about-us' },
    { label: 'Courses', targetId: 'courses' },
    { label: 'Workshops', targetId: 'workshops' },
    { label: 'Faqs', targetId: 'faq' },
    { label: 'Contact us', targetId: 'contact' },
  ];

  return (
    <footer id="footer" className="bg-slate-100/90 border-t border-slate-200 text-slate-600 text-sm">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <img
                src={IMAGES.logo}
                alt="Beyond Books Logo"
                className="w-10 h-10 rounded-lg object-cover shadow-xs border border-slate-200 group-hover:border-sky-500/50 transition-all shrink-0"
                referrerPolicy="no-referrer"
              />
              <span className="font-heading text-2xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                Beyond Books
              </span>
            </button>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              The career-focused technology academy for practical digital skills, web designing, full stack engineering, modern tools, and AI automation workflows.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/15552348920"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>Admissions WhatsApp</span>
              </a>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500">Active Mentorship</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.targetId}>
                  <button
                    onClick={() => scrollToAnchor(link.targetId)}
                    className="text-slate-600 hover:text-sky-700 transition-colors text-sm text-left flex items-center gap-1 group cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-600" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Career Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => scrollToAnchor('courses')}
                  className="hover:text-sky-700 transition-colors text-left cursor-pointer"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToAnchor('courses')}
                  className="hover:text-sky-700 transition-colors text-left cursor-pointer"
                >
                  Web Designing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToAnchor('courses')}
                  className="hover:text-sky-700 transition-colors text-left cursor-pointer"
                >
                  Full Stack Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToAnchor('courses')}
                  className="hover:text-sky-700 transition-colors text-left cursor-pointer"
                >
                  Tally & Accounting
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToAnchor('courses')}
                  className="hover:text-sky-700 transition-colors text-left cursor-pointer"
                >
                  SaaS Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToAnchor('courses')}
                  className="hover:text-sky-700 transition-colors text-left cursor-pointer"
                >
                  AI & Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Weekly Practical Dispatch
            </h4>
            <p className="text-xs text-slate-600">
              Actionable design workflows, coding tips, and digital marketing strategies delivered to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You are subscribed. Check your inbox for updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-l-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs rounded-r-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-[11px] text-slate-500">Zero spam. Unsubscribe anytime with 1 click.</p>
              </form>
            )}

            <div className="pt-2 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>500 Tech Hub Blvd, Suite 400 · Innovation District</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Admissions Desk: +1 (555) 234-8920</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>admissions@beyondbooks.edu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Accreditations & Copyright */}
      <div className="border-t border-slate-200 bg-slate-200/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>© {new Date().getFullYear()} Beyond Books Academy Inc.</span>
            <span aria-hidden="true">·</span>
            <span>All Rights Reserved</span>
            <span aria-hidden="true">·</span>
            <span>Career-Focused Practical Education</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <button
              onClick={() => scrollToAnchor('contact')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Privacy & Data Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => scrollToAnchor('contact')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              Terms of Enrollment
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/15552348920"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              Direct WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
