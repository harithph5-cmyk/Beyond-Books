import { Testimonial, OutcomeMetric } from '../types';
import { IMAGES } from '../assets/images';

export const OUTCOME_METRICS: OutcomeMetric[] = [
  {
    value: '94.2%',
    label: 'Placement & Career Advancement Rate',
    context: 'Graduates securing promotions, senior roles, or clients within 120 days'
  },
  {
    value: '+52%',
    label: 'Average Compensation Jump',
    context: 'Direct salary jump reported across full-time cohort alumni'
  },
  {
    value: '₹12 Cr+',
    label: 'Live Media & Pipeline Budgets Managed',
    context: 'Managed hands-on across Google Ads, Meta Ads Manager, and web systems'
  },
  {
    value: '1,200+',
    label: 'Certified Alumni Working in Tech',
    context: 'Employed at scale-ups, top digital agencies, and modern enterprises'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rohan Sharma',
    role: 'Senior Performance Marketer',
    company: 'FinVelocity Global',
    previousRole: 'Junior SEO Intern',
    outcome: 'Switched from a ₹15k internship to ₹7.5 LPA role managing ₹8L/month Meta ad budgets',
    courseTaken: 'Digital Marketing & Live Ad Spend Lab',
    image: IMAGES.studentRohan,
    rating: 5,
    quote: 'Beyond Books completely changed my career. In week 3, our cohort pod was given live ad budget on Meta Ads Manager with server-side CAPI tracking. I learned how bid management and CAC targets actually work in the real world. Within two months of graduating, I cleared 3 agency interviews with my live portfolio and joined as a senior media buyer.'
  },
  {
    id: 'test-2',
    name: 'Ananya Deshmukh',
    role: 'UI/UX & Web Designer',
    company: 'Studio Craft Digital',
    previousRole: 'Graphic Design Freelancer',
    outcome: 'Built 6 production websites in Figma & WordPress, increasing freelance client retainers by 3x',
    courseTaken: 'Web Designing & Figma Prototyping',
    image: IMAGES.studentAnanya,
    rating: 5,
    quote: 'Most design tutorials online only teach surface aesthetics. Beyond Books taught us real Figma design tokens, auto-layout hierarchies, and developing pixel-perfect responsive WordPress Elementor themes with SEO audits. My clients were blown away by the quality of work I delivered immediately after the program.'
  },
  {
    id: 'test-3',
    name: 'Karthik Nair',
    role: 'Full Stack Engineer',
    company: 'NextScale Technologies',
    previousRole: 'B.Tech Graduate with No Practical Coding',
    outcome: 'Built and deployed 4 full stack React & Node apps to GitHub; hired as SDE-1 within 45 days',
    courseTaken: 'Full Stack Web Development',
    image: IMAGES.studentKarthik,
    rating: 5,
    quote: 'College taught us old C++ syntax on paper. Beyond Books had us writing React components, Express REST APIs, PostgreSQL schemas, and Docker containers from day one. In my technical coding interview, the interviewer asked me about database indexing and JWT security—topics I had already built into my capstone project.'
  },
  {
    id: 'test-4',
    name: 'Priya Menon',
    role: 'Corporate Accountant & GST Specialist',
    company: 'Apex Advisory & Audit',
    previousRole: 'Fresh B.Com Graduate',
    outcome: 'Secured full-time accountant role after passing practical Tally Prime & GST e-invoicing simulation',
    courseTaken: 'Tally Prime & Business Accounting',
    image: IMAGES.studentPriya,
    rating: 5,
    quote: 'I had theoretical accounting knowledge from college, but zero idea how to actually handle Tally Prime voucher entries, payroll slips, or GSTR-1 and 3B returns. The mentor at Beyond Books gave us real business invoices and bank statements to reconcile. I walked into my interview 100% confident.'
  },
  {
    id: 'test-5',
    name: 'Aditya Patel',
    role: 'SaaS Product Builder & Founder',
    company: 'MetricPulse Labs',
    previousRole: 'Non-Technical Product Associate',
    outcome: 'Built and launched an AI-powered SaaS starter kit with Stripe billing in under 10 weeks',
    courseTaken: 'SaaS Product Development & Next.js',
    image: IMAGES.studentRohan,
    rating: 5,
    quote: 'The SaaS curriculum gave me the end-to-end blueprint: Next.js App Router, multi-tenant databases with Supabase, and Stripe webhook handling. Having mentors who have actually built software companies review your codebase is an unfair advantage you can\'t find anywhere else.'
  },
  {
    id: 'test-6',
    name: 'Neha Kapoor',
    role: 'Marketing Automation Lead',
    company: 'CloudFlow Solutions',
    previousRole: 'Content Specialist',
    outcome: 'Automated 120+ monthly hours of lead enrichment and CRM syncing using n8n and Claude AI',
    courseTaken: 'AI & Workflow Automation Lab',
    image: IMAGES.studentAnanya,
    rating: 5,
    quote: 'Learning how to orchestrate autonomous AI agents with n8n and LLM webhooks turned me into the most valuable team member at my agency. Tasks that used to take three people two days now run automatically in seconds. The practical workflow templates alone are worth ten times the course fee.'
  }
];
