import { FAQItem, Mentor } from '../types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions',
    question: 'How selective is the admissions process for Beyond Books cohorts?',
    answer: 'We limit every cohort pod to 20-25 students to ensure rigorous mentorship and meaningful peer collaboration. We evaluate applications based on existing professional foundation, curiosity, and commitment to completing real lab sprints. Prior marketing or technical experience is helpful, but motivation and analytical drive matter most.'
  },
  {
    id: 'faq-2',
    category: 'Curriculum & Labs',
    question: 'What makes Beyond Books different from other online AI and marketing courses?',
    answer: 'Most online bootcamps rely on pre-recorded videos and theoretical slide decks. Beyond Books is built on "Real Capital & Live Systems". In our growth programs, students manage real ad budgets in live ad managers, deploy actual webhooks and APIs using n8n and Claude, and build working production assets. You leave with verified portfolio artifacts, not just a completion certificate.'
  },
  {
    id: 'faq-3',
    category: 'Curriculum & Labs',
    question: 'Do I need a computer science or coding background to succeed?',
    answer: 'No. While our programs are highly technical in their marketing depth, our frameworks use intuitive visual low-code/no-code platforms (such as n8n, Make, and ComfyUI) alongside natural-language LLM orchestration. We teach you how to think like an engineer and direct AI systems without requiring previous programming experience.'
  },
  {
    id: 'faq-4',
    category: 'Career & Placement',
    question: 'What career support and placement assistance is included?',
    answer: 'Every student receives dedicated 1-on-1 portfolio reviews with executive hiring managers, resume optimization for AI-native marketing roles, salary negotiation coaching, and direct introductions through our alumni hiring network representing over 120+ top tech companies and high-growth agencies.'
  },
  {
    id: 'faq-5',
    category: 'Admissions',
    question: 'What if I miss a live lab session due to work commitments?',
    answer: 'All live hybrid sessions are recorded in ultra-high definition and uploaded to your student portal within 4 hours, accompanied by timestamped chapters, code/workflow JSON snippets, and lab exercise rubrics. You also have 24/7 access to mentor office hours and our private technical community.'
  },
  {
    id: 'faq-6',
    category: 'Corporate Training',
    question: 'Does Beyond Books offer customized corporate or team upskilling programs?',
    answer: 'Yes. Over 40 enterprise marketing teams have trained with us via bespoke team bootcamps. We customize the curriculum to your exact tech stack (e.g., Salesforce, HubSpot, custom LLM APIs) and conduct private executive sessions. Contact our enterprise advisory team via the contact form.'
  },
  {
    id: 'faq-7',
    category: 'Admissions',
    question: 'Are installment payment plans and company reimbursement supported?',
    answer: 'Yes. We offer flexible zero-interest 3-month and 4-month installment plans. Furthermore, over 65% of our students have their tuition fully or partially reimbursed by their employers using professional development budgets. We provide comprehensive employer sponsorship packets and syllabus documentation.'
  }
];

export const MENTORS_DATA: Mentor[] = [
  {
    name: 'Kavita Patel',
    role: 'Co-Founder & Dean of Executive Programs',
    background: 'Former VP of Growth at Global FinTech, 14+ years scaling performance marketing and marketing analytics engines.',
    specialty: 'Marketing Operating Models & AI Transformation'
  },
  {
    name: 'Marcus Vance',
    role: 'Creative Director & Lead AI Video Fellow',
    background: 'Award-winning creative director with 10+ years directing global campaigns across Cannes Lions and D&AD.',
    specialty: 'Generative Storytelling, ComfyUI, Runway Gen-3'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Growth Engineering & Labs',
    background: 'Growth architect and systems engineer who built automation pipelines processing 1M+ monthly inbound events.',
    specialty: 'Autonomous Agents, n8n, CRM Architecture'
  },
  {
    name: 'Devin Thorne',
    role: 'Chief Analytics Architect',
    background: 'Principal Measurement Architect; pioneered server-side tagging pipelines for high-growth e-commerce brands.',
    specialty: 'First-Party Data, CAPI, MMM & Incrementality'
  },
  {
    name: 'Aria Chen',
    role: 'Director of Search & GEO Research',
    background: 'Organic search strategist who grew multiple media properties past 10M monthly organic visits.',
    specialty: 'Generative Engine Optimization (GEO) & Programmatic SEO'
  },
  {
    name: 'Tariq Al-Mansoor',
    role: 'Senior Media Buying Fellow',
    background: 'Managed over $25M in cumulative paid media across Meta, Google Ads, and TikTok for high-velocity DTC brands.',
    specialty: 'Advantage+ Architecture, Algorithmic Bidding'
  }
];

export const TRUST_PARTNERS = [
  { name: 'Meta Marketing Partner', type: 'Official Accreditation' },
  { name: 'Google Marketing Platform', type: 'Certified Institute Partner' },
  { name: 'HubSpot Academy Partner', type: 'Enterprise Education Network' },
  { name: 'TikTok for Business', type: 'Creative Lab Partner' },
  { name: 'Triple Whale', type: 'Attribution Excellence Circle' },
  { name: 'Make & n8n Verified', type: 'Automation Certification' }
];

export const HIRING_PARTNERS = [
  'Stripe', 'Canva', 'Shopify', 'Brex', 'Ramp', 'Klarna', 'VaynerMedia', 'DEPT', 'Omnicom Group', 'Publicis'
];
