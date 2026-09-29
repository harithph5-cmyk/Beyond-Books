import React from 'react';
import { Course, Workshop } from '../types';
import { HeroSection } from './home/HeroSection';
import { TrustIndicators } from './home/TrustIndicators';
import { FeaturedCoursesSection } from './home/FeaturedCoursesSection';
import { WhyChooseUsSection } from './home/WhyChooseUsSection';
import { StudentOutcomesSection } from './home/StudentOutcomesSection';
import { WorkshopsSection } from './home/WorkshopsSection';
import { TestimonialsSection } from './home/TestimonialsSection';
import { FaqSection } from './home/FaqSection';
import { ContactSection } from './home/ContactSection';
import { CtaSection } from './home/CtaSection';

interface HomePageProps {
  onSelectCourse: (course: Course) => void;
  onSelectWorkshop: (workshop: Workshop) => void;
  onOpenConsultation: () => void;
  onContactSuccess?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectCourse,
  onSelectWorkshop,
  onOpenConsultation,
  onContactSuccess,
}) => {
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <HeroSection
        onExploreCourses={() => scrollToAnchor('courses')}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 2. Trust indicators */}
      <TrustIndicators />

      {/* 3. Featured courses & Labs */}
      <FeaturedCoursesSection
        onSelectCourse={onSelectCourse}
      />

      {/* 4. Why choose us & Executive Mentors */}
      <WhyChooseUsSection onOpenConsultation={onOpenConsultation} />

      {/* 5. Student outcomes & compensation acceleration */}
      <StudentOutcomesSection />

      {/* 6. Workshops & Intensive Masterclasses */}
      <WorkshopsSection
        onSelectWorkshop={onSelectWorkshop}
      />

      {/* 7. Testimonials */}
      <TestimonialsSection />

      {/* 8. FAQ */}
      <FaqSection />

      {/* 9. Direct Application & Contact Form */}
      <ContactSection onSuccess={onContactSuccess} />

      {/* 10. CTA */}
      <CtaSection
        onOpenConsultation={onOpenConsultation}
        onExploreCourses={() => scrollToAnchor('courses')}
      />
    </div>
  );
};
