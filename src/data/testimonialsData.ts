import { Testimonial, OutcomeMetric } from '../types';

export const OUTCOME_METRICS: OutcomeMetric[] = [
  {
    value: '94.2%',
    label: 'Placement & Advancement Rate',
    context: 'Graduates securing promotions, senior roles, or clients within 120 days'
  },
  {
    value: '+48%',
    label: 'Average Compensation Increase',
    context: 'Direct salary jump reported across full-time cohort alumni'
  },
  {
    value: '$18M+',
    label: 'Combined Annual Ad Spend Managed',
    context: 'Directly managed by alumni across Meta, Google Ads, and TikTok'
  },
  {
    value: '3,800+',
    label: 'Certified Professionals',
    context: 'Leading growth and generative marketing at high-growth global firms'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Julian Sterling',
    role: 'Senior Growth Lead',
    company: 'FinTech Velocity',
    previousRole: 'Junior Media Buyer at Boutique Agency',
    outcome: '+65% compensation bump and doubled managed ad budget to $350k/mo',
    courseTaken: 'Flagship: AI-Driven Growth Marketing',
    quote: 'Beyond Books ruined traditional college education for me. In week 3, our cohort pod was given real budget to run live Meta Advantage+ experiments with server-side CAPI tracking. I stopped guessing and learned how algorithms actually price ad inventory. Within two months of graduating, I transitioned from an overworked agency associate to leading performance at a Series B fintech.'
  },
  {
    id: 'test-2',
    name: 'Sophia Aris',
    role: 'Creative Director',
    company: 'Studio Nova Worldwide',
    previousRole: 'Traditional Brand Designer',
    outcome: 'Cut production turnaround from 14 days to 48 hours for global fashion clients',
    courseTaken: 'Generative AI for Content & Creative Directors',
    quote: 'Most creative AI workshops online just teach surface-level Midjourney prompts that look like plastic toys. Beyond Books taught us node-based ComfyUI workflows, camera control in Runway, and strict brand style tokens. We now produce high-end commercial video concepts and localized photo sets for international brands at a fraction of our past timeline.'
  },
  {
    id: 'test-3',
    name: 'Farhan Siddiqui',
    role: 'Head of Marketing Automation',
    company: 'CloudStack Enterprise',
    previousRole: 'General Marketing Coordinator',
    outcome: 'Automated 120 hours of manual SDR research monthly using autonomous n8n loops',
    courseTaken: 'MarTech Automation & Autonomous Marketing Agents',
    quote: 'The MarTech Automation course paid for itself on day four. I built an autonomous lead enrichment bot connected to Claude and our HubSpot CRM that identifies intent signals and drafts hyper-personalized briefing docs for our sales directors. My CEO called it the highest-leverage internal project of the year.'
  },
  {
    id: 'test-4',
    name: 'Claire Beauchamp',
    role: 'VP of Growth & Acquisition',
    company: 'D2C Wellness Collective',
    previousRole: 'Digital Marketing Manager',
    outcome: 'Scaled monthly DTC ad spend from $45k to $210k while maintaining 2.8x blended ROAS',
    courseTaken: 'E-Commerce Performance Media & Paid Social Scaling',
    quote: 'The emphasis on contribution margin and creative velocity completely reshaped our business. Instead of fighting iOS privacy updates, we built a 40-variant-per-week creative testing machine. The instructors are active practitioners managing seven-figure accounts, not retired theorists.'
  },
  {
    id: 'test-5',
    name: 'Liam Vance',
    role: 'Founder & Managing Director',
    company: 'Nexus Organic Strategy',
    previousRole: 'Freelance SEO Specialist',
    outcome: 'Tripled agency monthly retainers by adding Generative Engine Optimization (GEO)',
    courseTaken: 'Programmatic SEO & AI Search Visibility',
    quote: 'When search shifted toward Perplexity and ChatGPT Search, my clients panicked. Beyond Books provided the exact technical blueprint for entity graph schema and programmatic page architectures. We won 3 enterprise retainers in our first quarter applying their GEO framework.'
  },
  {
    id: 'test-6',
    name: 'Monique Laurent',
    role: 'Chief Marketing Officer',
    company: 'OmniHealth Retail',
    previousRole: 'Marketing Director',
    outcome: 'Consolidated $240k/yr in redundant SaaS subscriptions into streamlined custom agents',
    courseTaken: 'Executive AI Strategy for CMOs & Marketing Leaders',
    quote: 'The Executive Fellowship gave me the confidence and empirical framework to re-architect our 40-person marketing division. We eliminated low-leverage agency retainers, upskilled our internal creative teams, and established airtight data privacy policies that satisfied our corporate board.'
  }
];
