export type PageId = 'home' | 'about' | 'courses' | 'workshops' | 'blog' | 'contact';

export interface Course {
  id: string;
  code?: string;
  categoryName?: string;
  title: string;
  category: string;
  image?: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
  schedule: string;
  level: string;
  cohortDate: string;
  mode: string;
  tools: string[];
  learnItems?: string[];
  ctaText?: string;
  keyHighlights: string[];
  syllabusModules: {
    week: string;
    title: string;
    topics: string[];
  }[];
  prerequisites: string;
  certification: string;
  fee: string;
  featured?: boolean;
}

export interface Workshop {
  id: string;
  title: string;
  badge?: string;
  date: string;
  time: string;
  format: 'Live Virtual Lab' | 'Campus Immersion' | 'Weekend Intensive';
  duration: string;
  seatsTotal: number;
  seatsRemaining: number;
  instructor: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  summary: string;
  takeaways: string[];
  prerequisites: string;
  fee: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  content: string[];
  keyTakeaway: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  previousRole: string;
  outcome: string;
  courseTaken: string;
  quote: string;
  image?: string;
  rating?: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Curriculum & Labs' | 'Career & Placement' | 'Corporate Training';
}

export interface OutcomeMetric {
  value: string;
  label: string;
  context: string;
}

export interface Mentor {
  name: string;
  role: string;
  background: string;
  specialty: string;
  image?: string;
}
