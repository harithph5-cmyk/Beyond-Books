import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Courses', href: '#courses' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Faqs', href: '#faq' },
    { label: 'Contact us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = ['hero', 'about-us', 'courses', 'workshops', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Logo & Wordmark */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg cursor-pointer group"
          title="Beyond Books Home"
        >
          <img
            src={IMAGES.logo}
            alt="Beyond Books Logo"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover shadow-sm border border-slate-200 group-hover:border-sky-500/50 transition-all shrink-0"
            referrerPolicy="no-referrer"
          />
          <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
            Beyond Books
          </span>
        </button>

        {/* Zone 2: Navigation Links (Smooth Anchor Scrolling) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
          aria-label="Landing Page Navigation"
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors py-1 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded relative ${
                  isActive
                    ? 'text-sky-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I'd%20like%20to%20inquire%20about%20upcoming%20AI%20and%20Digital%20Marketing%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-emerald-600 transition-colors rounded-lg hover:bg-slate-100 flex items-center gap-1.5 text-xs"
            title="Chat directly on WhatsApp"
            aria-label="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-500/20 text-emerald-600" />
            <span className="text-slate-600 hover:text-emerald-600 font-medium">WhatsApp</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-all duration-150 shadow-sm shadow-sky-600/20 whitespace-nowrap flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenConsultation}
            className="px-3 py-1.5 text-[11px] font-semibold text-white bg-sky-600 rounded-lg whitespace-nowrap shadow-sm"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I'd%20like%20to%20inquire%20about%20your%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center gap-2 border border-slate-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
