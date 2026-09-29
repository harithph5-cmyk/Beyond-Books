import React from 'react';

export const TrustIndicators: React.FC = () => {
  const metrics = [
    {
      index: '01',
      stat: '90%+',
      title: 'PRACTICAL LEARNING',
      description: 'Hands-on assignments, projects and real-world tasks across our career-focused programs.'
    },
    {
      index: '02',
      stat: '20+',
      title: 'INDUSTRY-RELEVANT TOOLS',
      description: 'Learn with modern tools and platforms used in digital marketing, technology and business.'
    },
    {
      index: '03',
      stat: '50+',
      title: 'PRACTICAL PROJECTS',
      description: 'Build websites, marketing campaigns, applications, dashboards and other portfolio-ready projects.'
    },
    {
      index: '04',
      stat: '1000+',
      title: 'LEARNERS & PARTICIPANTS',
      description: 'Students and aspiring professionals developing practical skills through courses and workshops.'
    }
  ];

  return (
    <section className="py-14 border-y border-slate-200/80 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quantitative Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/90 space-y-2.5 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-sky-600 transition-colors">
                  {metric.index} —
                </span>
                <span className="text-3xl font-bold font-heading text-sky-600 tracking-tight tabular-nums">
                  {metric.stat}
                </span>
              </div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {metric.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
