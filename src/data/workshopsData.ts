import { Workshop } from '../types';

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'ai-creative-sprint',
    title: 'AI Video Ad Sprint: From Script to 10 High-Converting Ads in 3 Hours',
    badge: 'Trending Live Intensive',
    date: 'Saturday, October 10, 2026',
    time: '11:00 AM - 3:00 PM EST',
    format: 'Live Virtual Lab',
    duration: '4 Hours (Hands-on)',
    seatsTotal: 25,
    seatsRemaining: 6,
    instructor: {
      name: 'Marcus Vance',
      role: 'Creative Director & AI Video Lead',
      company: 'Ex-VaynerMedia / Beyond Books Lab Lead',
      avatar: 'MV'
    },
    summary: 'A fast-paced, hands-on workshop where every attendee builds and exports 10 production-ready video ads using Runway Gen-3, Midjourney, and ElevenLabs.',
    takeaways: [
      'Master prompt formulas for photorealistic cinematic commercial scenes',
      'Generate consistent brand actors and sync photorealistic lip movement',
      'Deploy dynamic captions, transitions, and audio beds in under 15 minutes',
      'Walk away with 10 high-resolution video ad variants for your brand'
    ],
    prerequisites: 'Laptop with modern browser. Free workshop sandbox credits provided.',
    fee: '$149'
  },
  {
    id: 'n8n-marketing-automation',
    title: 'Zero-Code Autonomous Growth Engine with n8n & Claude',
    badge: 'Popular Masterclass',
    date: 'Wednesday, October 14, 2026',
    time: '6:00 PM - 9:30 PM EST',
    format: 'Live Virtual Lab',
    duration: '3.5 Hours (Interactive)',
    seatsTotal: 30,
    seatsRemaining: 4,
    instructor: {
      name: 'Elena Rostova',
      role: 'Head of Growth Engineering',
      company: 'Beyond Books & MarTech Advisory',
      avatar: 'ER'
    },
    summary: 'Construct an autonomous inbound engine that monitors competitors, enriches inbound leads via web scraping, drafts bespoke outreach emails, and updates your CRM automatically.',
    takeaways: [
      'Understand webhook listeners and API authentication',
      'Deploy Claude 3.7 tool-use nodes to synthesize competitive intelligence',
      'Connect n8n workflows directly to Slack, Airtable, and HubSpot',
      'Receive full exportable JSON templates of 4 enterprise workflows'
    ],
    prerequisites: 'Curiosity about automation. No coding experience needed.',
    fee: '$179'
  },
  {
    id: 'cookieless-attribution-mastery',
    title: 'Surviving Cookieless Paid Ads: Server-Side Tracking & First-Party Data',
    badge: 'Technical Masterclass',
    date: 'Saturday, October 24, 2026',
    time: '1:00 PM - 5:00 PM EST',
    format: 'Campus Immersion',
    duration: '4 Hours (Deep-dive)',
    seatsTotal: 20,
    seatsRemaining: 3,
    instructor: {
      name: 'Devin Thorne',
      role: 'Chief Analytics Architect',
      company: 'Beyond Books Analytics Institute',
      avatar: 'DT'
    },
    summary: 'In-person and hybrid deep-dive into configuring Server-Side Google Tag Manager (sGTM) and Meta Conversions API (CAPI) to reclaim up to 28% missing conversion signals.',
    takeaways: [
      'Step-by-step sGTM deployment on Google Cloud Run',
      'Deduplication and Event Quality Score optimization for Meta & TikTok',
      'Setting up offline conversion imports from CRM pipelines',
      'Attribution validation checklist and troubleshooting guide'
    ],
    prerequisites: 'Basic knowledge of Google Tag Manager or advertising pixels.',
    fee: '$225'
  },
  {
    id: 'geo-search-bootcamp',
    title: 'Generative Engine Optimization (GEO): Getting Cited in Perplexity & ChatGPT',
    badge: 'New Breakthrough Lab',
    date: 'Sunday, November 01, 2026',
    time: '10:00 AM - 2:00 PM EST',
    format: 'Live Virtual Lab',
    duration: '4 Hours',
    seatsTotal: 25,
    seatsRemaining: 8,
    instructor: {
      name: 'Aria Chen',
      role: 'Director of Search & Information Architecture',
      company: 'Beyond Books Faculty',
      avatar: 'AC'
    },
    summary: 'Traditional SEO alone is dying. Learn how AI answer engines choose which brands to cite, and how to restructure your digital footprint to win 1st-position AI recommendations.',
    takeaways: [
      'Audit your current brand footprint inside ChatGPT Search & Perplexity',
      'Deploy entity-level structured data markup that LLM bots prioritize',
      'Create high-authority citation seed content that feeds AI knowledge graphs',
      'Access our proprietary GEO tracking and ranking benchmark tool'
    ],
    prerequisites: 'Foundational understanding of content marketing or website management.',
    fee: '$165'
  }
];
