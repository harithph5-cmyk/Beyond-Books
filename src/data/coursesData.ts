import { Course } from '../types';
import { IMAGES } from '../assets/images';

export const COURSES_DATA: Course[] = [
  {
    id: 'digital-marketing',
    code: '01',
    categoryName: 'Digital Marketing',
    category: 'Digital Marketing',
    title: 'Master Digital Marketing from Strategy to Execution',
    image: IMAGES.courseDigitalMarketing,
    shortDesc: 'Learn SEO, Social Media Marketing, Google Ads, Meta Ads, Content Marketing, Analytics, AI tools and digital marketing automation.',
    longDesc: 'A comprehensive, project-driven program designed to take you from foundational marketing concepts to advanced omnichannel campaign execution. Work with real ad budgets, optimize search rankings, analyze user funnels in GA4, and automate marketing pipelines with state-of-the-art AI tools.',
    learnItems: [
      'SEO',
      'Google Ads',
      'Meta Ads',
      'SMM',
      'Content Marketing',
      'GA4',
      'AI Marketing'
    ],
    ctaText: 'Explore Digital Marketing',
    duration: '10 Weeks',
    schedule: 'Mon, Wed & Fri (7:00 PM - 9:00 PM)',
    level: 'Beginner to Advanced',
    cohortDate: 'October 15, 2026',
    mode: 'Live Hybrid Labs',
    tools: ['Google Ads', 'Meta Ads Manager', 'GA4', 'Semrush', 'Canva Pro', 'ChatGPT', 'HubSpot'],
    keyHighlights: [
      'Live ad spend simulation and real conversion tracking',
      'Comprehensive keyword research and on-page/off-page SEO projects',
      'Meta & Google partner-aligned campaign optimization',
      'Direct interview preparation and portfolio review'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-2',
        title: 'Digital Marketing Fundamentals & SEO Mastery',
        topics: [
          'Search Engine Optimization (On-Page, Off-Page & Technical SEO)',
          'Keyword research, competitor analysis & content planning',
          'Google Search Console and site auditing frameworks'
        ]
      },
      {
        week: 'Weeks 3-5',
        title: 'Paid Advertising on Google & Meta Networks',
        topics: [
          'Google Search, Display & Performance Max campaigns',
          'Meta Ads Manager, Advantage+ targeting & custom audiences',
          'A/B testing ad creatives, copy hooks & landing pages'
        ]
      },
      {
        week: 'Weeks 6-7',
        title: 'Social Media, Content & Email Marketing',
        topics: [
          'Organic social growth strategies on Instagram, LinkedIn & YouTube',
          'Content marketing funnels and copywriting frameworks',
          'Email marketing automation, segmentation & lifecycle drips'
        ]
      },
      {
        week: 'Weeks 8-10',
        title: 'Web Analytics (GA4) & AI-Powered Marketing',
        topics: [
          'Google Analytics 4 setup, event tracking & conversion attribution',
          'AI-driven creative generation, prompt workflows & automated reporting',
          'Capstone project: Launching an end-to-end multi-channel campaign'
        ]
      }
    ],
    prerequisites: 'No prior marketing experience required. Passion for digital media and technology.',
    certification: 'Beyond Books Certified Digital Marketing Professional',
    fee: '₹24,999',
    featured: true
  },
  {
    id: 'web-designing',
    code: '02',
    categoryName: 'Web Designing',
    category: 'Web Designing',
    title: 'Design & Build Modern Websites',
    image: IMAGES.courseWebDesigning,
    shortDesc: 'Learn to create responsive, professional and SEO-friendly websites using modern design and development tools.',
    longDesc: 'Master the art and science of web design. From user research and wireframing in Figma to developing responsive, fast-loading, SEO-ready websites with HTML5, CSS3, modern JavaScript, and WordPress/Elementor.',
    learnItems: [
      'UI/UX',
      'HTML',
      'CSS',
      'JavaScript',
      'WordPress',
      'Elementor',
      'Responsive Design',
      'SEO'
    ],
    ctaText: 'Explore Web Designing',
    duration: '8 Weeks',
    schedule: 'Tue & Thu (6:30 PM - 8:30 PM), Sat (10:00 AM - 1:00 PM)',
    level: 'Beginner to Intermediate',
    cohortDate: 'October 22, 2026',
    mode: 'Hands-on Design Lab',
    tools: ['Figma', 'HTML5/CSS3', 'JavaScript', 'WordPress', 'Elementor Pro', 'Tailwind CSS', 'VS Code'],
    keyHighlights: [
      'Build 5 production-ready responsive website projects',
      'Master UI/UX wireframing, typography, color theory & design systems',
      'Dynamic WordPress development with custom Elementor themes',
      'Technical SEO, speed optimization & web performance audits'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-2',
        title: 'UI/UX Design Principles & Figma Prototyping',
        topics: [
          'User experience fundamentals, information architecture & user journeys',
          'Wireframing, high-fidelity design systems & auto-layout in Figma',
          'Design tokens, accessibility (WCAG) & mobile-first layouts'
        ]
      },
      {
        week: 'Weeks 3-4',
        title: 'Modern HTML5, CSS3 & Responsive Layouts',
        topics: [
          'Semantic HTML5 structure and clean markup standards',
          'Flexbox, CSS Grid, media queries & responsive animations',
          'Introduction to modern Tailwind CSS and utility-first styling'
        ]
      },
      {
        week: 'Weeks 5-6',
        title: 'Interactive JavaScript & Dynamic Elements',
        topics: [
          'DOM manipulation, event listeners & form validation',
          'Interactive navigation menus, sliders, modals & dark mode',
          'Connecting forms with backend webhooks and third-party APIs'
        ]
      },
      {
        week: 'Weeks 7-8',
        title: 'WordPress & Elementor Professional Development',
        topics: [
          'WordPress installation, theme architecture & database setup',
          'Building custom pixel-perfect pages using Elementor Pro',
          'On-page SEO, caching, SSL setup, and live hosting deployment'
        ]
      }
    ],
    prerequisites: 'Basic computer literacy. No coding experience needed.',
    certification: 'Beyond Books Certified Web Designer',
    fee: '₹19,999',
    featured: true
  },
  {
    id: 'full-stack-development',
    code: '03',
    categoryName: 'Full Stack Development',
    category: 'Full Stack Development',
    title: 'Become a Full Stack Developer',
    image: IMAGES.courseFullStackDev,
    shortDesc: 'Build complete web applications from frontend to backend while working on real-world development projects.',
    longDesc: 'A rigorous full stack engineering curriculum. Learn modern frontend libraries (React/TypeScript), scalable backend servers (Node.js/Express), relational and NoSQL databases, RESTful APIs, Git workflows, and cloud deployment on Vercel and AWS.',
    learnItems: [
      'Frontend',
      'Backend',
      'Databases',
      'APIs',
      'Git',
      'Deployment',
      'Full Stack Projects'
    ],
    ctaText: 'Explore Full Stack',
    duration: '16 Weeks',
    schedule: 'Mon to Thu (6:00 PM - 8:30 PM)',
    level: 'Beginner to Pro',
    cohortDate: 'November 02, 2026',
    mode: 'Live Engineering Pods',
    tools: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Git / GitHub', 'Docker'],
    keyHighlights: [
      '4 full stack production applications added to your GitHub',
      'Authentication, role-based access control & secure session handling',
      'Database schema design, indexing & ORM integration',
      'Mock technical coding interviews & algorithmic problem solving'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-4',
        title: 'Modern Frontend with React & TypeScript',
        topics: [
          'ES6+ JavaScript, TypeScript types, interfaces & type safety',
          'React components, hooks, state management & routing',
          'Building reusable component libraries with Tailwind CSS'
        ]
      },
      {
        week: 'Weeks 5-8',
        title: 'Backend Engineering & RESTful APIs',
        topics: [
          'Node.js runtime, asynchronous architecture & Express server setup',
          'REST API design, middleware, request validation & error handling',
          'JWT authentication, password hashing & security best practices'
        ]
      },
      {
        week: 'Weeks 9-12',
        title: 'Databases, ORMs & Data Modeling',
        topics: [
          'Relational databases (PostgreSQL) and SQL queries',
          'NoSQL data stores (MongoDB) and schema design patterns',
          'Prisma / Drizzle ORM integration and database migrations'
        ]
      },
      {
        week: 'Weeks 13-16',
        title: 'Full Stack Integration, DevOps & Capstone App',
        topics: [
          'End-to-end integration between React frontend and Node backend',
          'CI/CD pipelines with GitHub Actions, containerization & deployment',
          'Live capstone presentation: Full stack SaaS or marketplace platform'
        ]
      }
    ],
    prerequisites: 'Basic understanding of programming logic or completion of an intro coding tutorial.',
    certification: 'Beyond Books Certified Full Stack Engineer',
    fee: '₹34,999',
    featured: true
  },
  {
    id: 'tally-accounting',
    code: '04',
    categoryName: 'Tally & Accounting',
    category: 'Tally & Accounting',
    title: 'Build Job-Ready Accounting Skills',
    image: IMAGES.courseTallyAccounting,
    shortDesc: 'Learn practical accounting, GST, Tally Prime, invoicing and business financial management skills.',
    longDesc: 'Developed in consultation with chartered accountants and corporate finance controllers. Master practical business accounting from voucher entries and bank reconciliations to comprehensive GST filings, TDS, payroll processing, and executive financial reporting in Tally Prime.',
    learnItems: [
      'Tally Prime',
      'GST',
      'Accounting',
      'Payroll',
      'Inventory',
      'Business Reports'
    ],
    ctaText: 'Explore Tally Course',
    duration: '6 Weeks',
    schedule: 'Mon, Wed & Fri (10:00 AM - 12:00 PM)',
    level: 'Beginner to Job-Ready',
    cohortDate: 'October 12, 2026',
    mode: 'Practical Accounting Lab',
    tools: ['Tally Prime 4.0', 'MS Excel Advanced', 'GST Portal Simulation', 'Income Tax Filing Tools'],
    keyHighlights: [
      '100% case-study based practical voucher entries and ledgers',
      'Live GST invoice generation, e-Way bills & GSTR-1/3B filing workflows',
      'Complete company setup, payroll & inventory management from scratch',
      'Placement support for corporate accountant and executive finance roles'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-2',
        title: 'Accounting Fundamentals & Tally Prime Setup',
        topics: [
          'Double-entry bookkeeping, debit/credit rules & accounting terminology',
          'Company creation, group ledgers & chart of accounts in Tally Prime',
          'Voucher types: Payment, Receipt, Contra, Journal, Sales & Purchase'
        ]
      },
      {
        week: 'Weeks 3-4',
        title: 'Inventory Management & GST Accounting',
        topics: [
          'Stock groups, stock items, units of measure & godown tracking',
          'CGST, SGST, IGST calculations, tax ledgers & billing configurations',
          'E-invoicing, e-Way bill generation & reverse charge mechanism'
        ]
      },
      {
        week: 'Weeks 5-6',
        title: 'Payroll, Banking & Financial Reports',
        topics: [
          'Bank reconciliation statements (BRS) and cash flow management',
          'Employee payroll processing, salary slips, PF & ESI calculations',
          'Generating Balance Sheets, Profit & Loss statements and Trial Balance'
        ]
      }
    ],
    prerequisites: 'Open to commerce, business, and non-commerce students wanting practical accounting skills.',
    certification: 'Beyond Books Certified Professional Accountant',
    fee: '₹14,999',
    featured: true
  },
  {
    id: 'saas-development',
    code: '05',
    categoryName: 'SaaS Development',
    category: 'SaaS Development',
    title: 'Learn How SaaS Products Are Built',
    image: IMAGES.courseSaasDev,
    shortDesc: 'Understand the process of turning an idea into a scalable software product—from product planning and UI to development, deployment and growth.',
    longDesc: 'A complete product-to-code blueprint for aspiring SaaS founders and product engineers. Learn how multi-tenant architectures operate, integrate Stripe subscription billing, build intuitive customer dashboards, implement webhooks, and scale software products from MVP to profitability.',
    learnItems: [
      'SaaS Architecture',
      'UI/UX',
      'Web Development',
      'APIs',
      'Databases',
      'Deployment',
      'Product Development'
    ],
    ctaText: 'Explore SaaS',
    duration: '12 Weeks',
    schedule: 'Tue & Thu (7:00 PM - 9:30 PM)',
    level: 'Intermediate',
    cohortDate: 'November 10, 2026',
    mode: 'Product Incubator Lab',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe Billing', 'Supabase / PostgreSQL', 'PostHog', 'Vercel'],
    keyHighlights: [
      'Build and launch a production multi-tenant SaaS starter kit',
      'End-to-end Stripe subscription checkout, billing portal & webhook handling',
      'Product analytics, activation metrics & onboarding funnel optimization',
      'Mentorship from founders who have built six-figure ARR software products'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-3',
        title: 'SaaS Product Architecture & Multi-Tenancy',
        topics: [
          'Validating SaaS ideas, user personas & feature scoping for MVPs',
          'Multi-tenant database architectures and workspace organization',
          'UI/UX patterns for SaaS: Onboarding wizards, settings & team invites'
        ]
      },
      {
        week: 'Weeks 4-6',
        title: 'Core Application Engine & APIs',
        topics: [
          'Next.js App Router, server actions & API route handlers',
          'Database CRUD operations, relation modeling & real-time updates',
          'Role-based permissions (Admin, Member, Viewer) & secure workspaces'
        ]
      },
      {
        week: 'Weeks 7-9',
        title: 'Monetization, Billing & Third-Party Integrations',
        topics: [
          'Stripe recurring billing, pricing tiers, usage-based metering & trials',
          'Handling Stripe webhooks (subscription created, updated, canceled)',
          'Connecting email providers (Resend), analytics (PostHog), and AI APIs'
        ]
      },
      {
        week: 'Weeks 10-12',
        title: 'Deployment, Monitoring & Product Growth',
        topics: [
          'Production deployment on Vercel, custom domains & SSL',
          'Error monitoring, logging (Sentry) and database backups',
          'SaaS growth metrics: MRR, CAC, Churn, LTV, and launch checklists'
        ]
      }
    ],
    prerequisites: 'Basic knowledge of web development (HTML/CSS/JS or React).',
    certification: 'Beyond Books Certified SaaS Product Builder',
    fee: '₹29,999',
    featured: true
  },
  {
    id: 'ai-automation',
    code: '06',
    categoryName: 'AI & Automation',
    category: 'AI & Automation',
    title: 'Use AI to Work Smarter',
    image: IMAGES.courseAiAutomation,
    shortDesc: 'Learn how to use modern AI tools for content, marketing, research, productivity, automation and business workflows.',
    longDesc: 'Empower yourself with autonomous agents and frontier AI capabilities. Learn to orchestrate LLMs, connect apps with n8n and Make, automate lead enrichment, build customer service bots, and eliminate repetitive tasks with custom AI workflows.',
    learnItems: [
      'Generative AI',
      'Prompt Engineering',
      'AI Tools',
      'Automation',
      'AI Marketing',
      'AI Workflows'
    ],
    ctaText: 'Explore AI Training',
    duration: '8 Weeks',
    schedule: 'Saturdays & Sundays (2:00 PM - 5:00 PM)',
    level: 'All Levels',
    cohortDate: 'October 25, 2026',
    mode: 'AI Automation Studio',
    tools: ['n8n', 'Make.com', 'ChatGPT / Claude', 'Midjourney', 'Zapier', 'Notion AI', 'OpenAI API'],
    keyHighlights: [
      'Build 8 functional AI agent loops and automated business workflows',
      'Advanced prompt engineering frameworks (chain-of-thought, few-shot, system prompts)',
      'Automated marketing content pipelines from idea to publishing',
      'Downloadable workflow JSON templates ready to deploy in any company'
    ],
    syllabusModules: [
      {
        week: 'Weeks 1-2',
        title: 'Generative AI & Advanced Prompt Engineering',
        topics: [
          'How LLMs think: Tokens, context windows, temperature & embeddings',
          'System prompt design, few-shot prompting & role framing for business',
          'AI tools for deep research, data synthesis, and business document drafting'
        ]
      },
      {
        week: 'Weeks 3-4',
        title: 'AI for Creative, Marketing & Content Systems',
        topics: [
          'High-speed visual content generation with Midjourney & Canva AI',
          'AI-assisted copywriting for ads, landing pages, and email sequences',
          'Automated video scriptwriting and synthetic voiceover workflows'
        ]
      },
      {
        week: 'Weeks 5-6',
        title: 'Workflow Automation with n8n & Make',
        topics: [
          'Connecting tools without code: Webhooks, triggers & routers',
          'Automated lead qualification and CRM enrichment using AI',
          'Social media auto-scheduling and RSS-to-content pipelines'
        ]
      },
      {
        week: 'Weeks 7-8',
        title: 'Autonomous AI Agents & Enterprise Workflows',
        topics: [
          'Building custom AI customer support agents with document grounding',
          'Multi-step agent loops that plan, execute, and verify tasks',
          'Capstone project: Deploying a customized AI productivity system'
        ]
      }
    ],
    prerequisites: 'No coding needed. Open to professionals, marketers, founders, and students.',
    certification: 'Beyond Books Certified AI & Automation Specialist',
    fee: '₹22,999',
    featured: true
  }
];
