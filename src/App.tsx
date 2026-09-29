import React, { useState } from 'react';
import { Course, Workshop } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './components/HomePage';
import { CourseModal } from './components/CourseModal';
import { WorkshopModal } from './components/WorkshopModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-sky-100 selection:text-sky-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 p-4 rounded-xl bg-white border border-emerald-500/40 text-slate-900 text-xs shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
          <div>
            <p className="font-semibold text-slate-900">Action Confirmed</p>
            <p className="text-slate-600 mt-0.5">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Sticky Navigation with Landing Page Anchors */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Single Landing Page Content */}
      <main className="flex-1">
        <HomePage
          onSelectCourse={(course) => setSelectedCourse(course)}
          onSelectWorkshop={(workshop) => setSelectedWorkshop(workshop)}
          onOpenConsultation={() => setConsultationOpen(true)}
          onContactSuccess={() => {
            showToast('Application sent to our admissions committee! We will reach out shortly.');
          }}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />

      {/* Deep-Dive Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnrollSuccess={(courseTitle) => {
          showToast(`Application submitted for ${courseTitle}! Our admissions team will reach out shortly.`);
        }}
      />

      <WorkshopModal
        workshop={selectedWorkshop}
        onClose={() => setSelectedWorkshop(null)}
        onReserveSuccess={(workshopTitle) => {
          showToast(`Pass reserved for ${workshopTitle}! Check your email for prep details.`);
        }}
      />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
