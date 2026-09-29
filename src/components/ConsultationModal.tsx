import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Digital Marketing');
  const [date, setDate] = useState('Tomorrow (Afternoon)');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-sky-700 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Free 1-on-1 Career Strategy Call</span>
            </div>
            <h2 id="consultation-modal-title" className="text-xl font-bold font-heading text-slate-900 mt-1">
              Talk with an Admissions Mentor
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Get an honest diagnostic of your current skills and discover which Beyond Books program fits your career goals.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="p-6 text-center space-y-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Strategy Call Confirmed!</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We have assigned an admissions specialist to connect with you. Confirmation details have been dispatched to <span className="text-slate-900 font-semibold">{email}</span>.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I%20just%20scheduled%20a%20strategy%20call%20under%20the%20name%20${encodeURIComponent(name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Quick Confirmation via WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Taylor Smith"
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
                    placeholder="taylor@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
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
                  Primary Program of Interest
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:bg-white focus:border-sky-500"
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
                  Preferred Call Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Today (Evening)', 'Tomorrow (Morning)', 'Tomorrow (Afternoon)', 'This Weekend'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setDate(slot)}
                      className={`p-2 rounded-lg border text-left transition-colors flex items-center gap-1.5 cursor-pointer ${
                        date === slot
                          ? 'border-sky-600 bg-sky-50 text-sky-800 font-semibold shadow-xs'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Clock className="w-3 h-3 text-sky-600 shrink-0" />
                      <span className="truncate">{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Free Strategy Session</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
