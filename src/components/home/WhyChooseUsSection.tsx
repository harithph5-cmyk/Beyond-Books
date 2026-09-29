import React from 'react';
import { IMAGES } from '../../assets/images';
import { Sparkles, HeartHandshake, Compass, Users2, Award, CheckCircle2, ArrowRight, Quote, MessageCircle } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onOpenConsultation?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOpenConsultation,
}) => {
  const milestones = [
    {
      year: 'The Spark',
      title: 'Frustration with Rote Learning',
      description: 'We watched talented graduates complete degrees with top marks, yet struggle when asked to set up a live Meta ad campaign, deploy a React app, or reconcile a GST ledger. We set out to change that.'
    },
    {
      year: 'The First Batch',
      title: 'Project-First Experiment',
      description: 'We launched our first cohort with just 15 seats. Every student was given real marketing budgets, real code repositories, and real client problems. 100% of that initial batch secured practical job roles.'
    },
    {
      year: 'The Campus',
      title: 'Modern Learning Labs',
      description: 'We opened our flagship learning campus equipped with high-speed development workstations, collaborative review studios, and specialized accounting and automation software.'
    },
    {
      year: 'Today & Beyond',
      title: '1,000+ Careers Transformed',
      description: 'With over 1,000 alumni across marketing, design, full stack development, accounting, and AI automation, Beyond Books is recognized for producing genuinely industry-ready talent.'
    }
  ];

  const values = [
    {
      icon: Compass,
      title: 'Practical Over Theory',
      desc: 'No endless memorization. You spend 90%+ of your time building, testing, designing, and deploying.'
    },
    {
      icon: Users2,
      title: 'Mentor-Led Guidance',
      desc: 'Learn directly from active industry leads and practitioners who work on real systems every day.'
    },
    {
      icon: Award,
      title: 'Job-Ready Portfolios',
      desc: 'Graduate with tangible proof of your skills: live websites, verified ad audits, and working apps.'
    },
    {
      icon: HeartHandshake,
      title: 'Career Placement Support',
      desc: 'Resume coaching, interview preparation, and direct alumni access to help you land your dream opportunity.'
    }
  ];

  const founders = [
    {
      name: 'Arjun Mehta',
      role: 'Co-Founder & CEO · Head of Growth & Marketing',
      image: IMAGES.founderMale,
      experience: '10+ Years in Performance Marketing & Omnichannel Growth',
      quote: 'We started Beyond Books because memorizing textbooks never got anyone hired. Our students don\'t write exams on paper; they run real ad campaigns with live budgets, analyze real conversion metrics in GA4, and build undeniable proof of their abilities before stepping into an interview.',
      background: 'Former Growth Director at scale-up fintech & e-commerce ventures managing over ₹15 Cr in annual media spend. Passionate about empowering aspiring marketers with practical digital authority.',
      specialties: ['Google & Meta Ads Strategy', 'Server-Side Tagging & Analytics', 'Content Marketing Funnels', 'Student Career Mentorship']
    },
    {
      name: 'Pooja Nair',
      role: 'Co-Founder & CTO · Head of Technology & Curricula',
      image: IMAGES.founderFemale,
      experience: '9+ Years in Full Stack Architecture & AI Automations',
      quote: 'Modern software development and UI/UX design are practical crafts. We designed our curricula to throw you straight into the deep end with modern stacks like React, Next.js, Node, and n8n AI workflows—so when you graduate, you hit the ground running on day one.',
      background: 'Senior Full Stack Software Architect and ex-Engineering Lead who built multi-tenant SaaS platforms and enterprise automation engines. Dedicated to making engineering education hands-on.',
      specialties: ['React & Next.js Ecosystem', 'SaaS Multi-Tenant Architecture', 'n8n & Autonomous AI Agents', 'UI/UX Design Systems']
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-white border-t border-slate-200/80 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold uppercase tracking-wider text-sky-700 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>ABOUT US · STORY OF OUR BUSINESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            The Story of Beyond Books: Reimagining Education Beyond Books & Textbooks
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We started Beyond Books because textbooks and lecture slides alone don't prepare you for the fast-evolving tech and business landscape. We built the academy we wished existed when we entered the industry.
          </p>
        </div>

        {/* Story Narrative: 2-Column Split with Rich Image Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: The Narrative Story */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-snug">
                Why We Named It <span className="text-sky-600">"Beyond Books"</span>
              </h3>
              <p>
                In 2022, our founders noticed a growing disconnect. Universities and traditional coaching centers were teaching 5-year-old marketing theory and obsolete programming concepts. Meanwhile, companies urgently needed professionals skilled in modern tools like <strong className="text-slate-800">Google Ads, Meta Advantage+, React, Next.js, Tally Prime GST, and AI Agent Automations</strong>.
              </p>
              <p>
                The name <em>Beyond Books</em> was born from our simple founding philosophy: <strong>Real mastery begins where textbooks end.</strong> To become a capable marketer, designer, developer, or accountant, you have to get your hands dirty with real projects.
              </p>
            </div>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 hover:bg-sky-50/40 hover:border-sky-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sky-700 font-bold text-xs">
                      <IconComponent className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Strategy Call Prompt */}
            {onOpenConsultation && (
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                >
                  <span>Talk with an Admissions Advisor</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Visual Storytelling Montage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Photo 1: Founders & Mentors Brainstorming Curriculum */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES.storyFoundingMentors}
                    alt="Beyond Books founders and faculty planning practical course roadmaps"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-100 space-y-0.5">
                  <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider block">
                    Our Faculty & Mentors
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-snug">
                    Active industry leads designing project curricula based on what hiring managers need.
                  </p>
                </div>
              </div>

              {/* Photo 2: Students in Interactive Collaborative Classroom */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES.storyStudentCollaboration}
                    alt="Beyond Books students collaborating on live code and marketing projects"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-100 space-y-0.5">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                    Hands-On Collaborative Labs
                  </span>
                  <p className="text-xs text-slate-700 font-medium leading-snug">
                    Students working in small pods, pairing up on live campaigns, web apps, and data workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo 3: Full-Width Flagship Learning Hub Banner */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg group">
              <div className="aspect-[21/9] sm:aspect-[24/9] overflow-hidden">
                <img
                  src={IMAGES.aboutCampus}
                  alt="Beyond Books Modern Learning Campus and Innovation Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-white space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs text-sky-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Flagship Learning Campus · 500 Tech Hub Blvd</span>
                  </div>
                  <p className="text-[11px] text-slate-200">
                    High-speed computing pods, dual-monitor stations, and dedicated studio rooms for live hybrid sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline: How We Grew */}
        <div className="space-y-8 pt-6 border-t border-slate-200">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">
              Our Journey & Milestones
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              From Humble Beginnings to a Flagship Tech Hub
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              How our commitment to hands-on learning fueled our expansion into 6 core industry career disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2.5 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="inline-block px-2.5 py-1 rounded-md bg-sky-100 text-sky-700 font-mono text-xs font-bold">
                  {item.year}
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Two Founders Section (Targeted by User) */}
        <div id="mentors" className="space-y-10 pt-6 border-t border-slate-200 scroll-mt-20">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-xs font-semibold uppercase tracking-wider text-sky-700 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>FOUNDING LEADERSHIP · VISION & PASSION</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Meet the Founders of Beyond Books
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Passionate educators and active practitioners who left high-growth tech roles to build a modern career academy centered on real-world projects, direct mentorship, and tangible student outcomes.
            </p>
          </div>

          {/* Two Founders Grid with Images, Quotes, and Credentials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {founders.map((founder, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  {/* Top Profile Header: Portrait Image + Credentials */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 border-2 border-sky-100 shadow-md shrink-0">
                      <img
                        src={founder.image}
                        alt={`Portrait of ${founder.name}, Co-Founder of Beyond Books`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <div className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200/70 text-sky-700 text-[11px] font-bold">
                        Co-Founder
                      </div>
                      <h4 className="text-2xl font-bold font-heading text-slate-900">
                        {founder.name}
                      </h4>
                      <p className="text-xs font-semibold text-sky-600 leading-snug">
                        {founder.role}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium pt-0.5">
                        {founder.experience}
                      </p>
                    </div>
                  </div>

                  {/* Founder's Personal Quote */}
                  <div className="relative p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <Quote className="w-5 h-5 text-sky-600/40 shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-normal">
                      "{founder.quote}"
                    </p>
                  </div>

                  {/* Founder's Professional Background */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {founder.background}
                  </p>

                  {/* Key Areas of Direct Mentorship */}
                  <div className="space-y-2 pt-1 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                      Core Areas of Direct Student Mentorship:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {founder.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-sky-50/70 border border-sky-200/60 text-sky-800 text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Connect Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Beyond Books Leadership</span>
                  <a
                    href="https://wa.me/15552348920?text=Hi%20Beyond%20Books,%20I'd%20like%20to%20connect%20with%20the%20founders%20regarding%20the%20curriculum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200/80 transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Connect with Admissions Desk</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Shared Founders' Personal Pledge */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-sky-50 via-white to-blue-50/70 border border-sky-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left max-w-2xl">
              <h4 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                Our Personal Guarantee to Every Enrolled Learner
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                "When you join Beyond Books, you are not just a roll number. We personally audit project briefs, host weekly open office hours, and inspect capstone submissions to ensure every graduate is genuinely proud of what they built."
              </p>
              <p className="text-xs font-bold text-sky-700 pt-1">
                — Arjun Mehta & Pooja Nair, Co-Founders
              </p>
            </div>

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs transition-colors whitespace-nowrap shadow-sm cursor-pointer"
              >
                Schedule Diagnostic Call
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
