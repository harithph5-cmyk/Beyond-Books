import React, { useState } from 'react';
import { Workshop } from '../types';
import { X, Calendar, Clock, Users, CheckCircle2, Ticket } from 'lucide-react';

interface WorkshopModalProps {
  workshop: Workshop | null;
  onClose: () => void;
  onReserveSuccess?: (workshopTitle: string) => void;
}

export const WorkshopModal: React.FC<WorkshopModalProps> = ({
  workshop,
  onClose,
  onReserveSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!workshop) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    if (onReserveSuccess) onReserveSuccess(workshop.title);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="workshop-modal-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="font-semibold text-emerald-700">{workshop.format}</span>
              <span aria-hidden="true">·</span>
              <span>{workshop.duration}</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-700 font-semibold">Only {workshop.seatsRemaining} seats left</span>
            </div>
            <h2 id="workshop-modal-title" className="text-xl font-bold font-heading text-slate-900 mt-1">
              {workshop.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close workshop reservation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {confirmed ? (
            <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Workshop Pass Reserved!</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We've reserved your pass for <span className="text-emerald-700 font-semibold">{workshop.title}</span> under <span className="text-slate-900 font-semibold">{email}</span>. You will receive calendar invites, prep requirements, and interactive sandbox access instructions.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <Users className="w-3.5 h-3.5 text-sky-600" />
                    <span>Instructor: {workshop.instructor.name} ({workshop.instructor.company})</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  What You Will Build & Take Away
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {workshop.takeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:bg-white focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div>
                  <p className="text-xs font-bold text-slate-900">Workshop Pass Fee</p>
                  <p className="text-[11px] text-slate-500">Includes live recordings and templates</p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-slate-900">{workshop.fee}</span>
                  <span className="text-xs text-slate-500"> / seat</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Ticket className="w-4 h-4" />
                <span>Confirm Workshop Registration</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
