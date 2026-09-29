import React, { useState } from 'react';
import { BLOG_DATA } from '../data/blogData';
import { BlogPost } from '../types';
import { Clock, Calendar, ArrowRight, User, Sparkles, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
  onOpenConsultation: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onSelectPost,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Automation',
    'Digital Marketing',
    'Web Development',
    'Tech Careers'
  ];

  const filteredPosts = BLOG_DATA.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="py-12 sm:py-16 space-y-12 bg-slate-50/50">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Practical Insights & Industry Guides</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight">
            Field Notes, Tutorials & Industry Analysis
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Practical walkthroughs, workflow breakdowns, and honest technical commentary published weekly by our faculty and mentors.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white font-semibold shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && selectedCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => onSelectPost(filteredPosts[0])}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-200 cursor-pointer group shadow-sm"
          >
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-sky-700 uppercase tracking-wider">
                  Featured Guide
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-700 font-medium">{filteredPosts[0].category}</span>
                <span aria-hidden="true">·</span>
                <span>{filteredPosts[0].readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                {filteredPosts[0].title}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {filteredPosts[0].summary}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <User className="w-3.5 h-3.5 text-sky-600" />
                  <span>By {filteredPosts[0].author.name} ({filteredPosts[0].author.role})</span>
                </div>

                <div className="text-xs font-bold text-sky-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-5 hover:border-sky-400 hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-sky-700">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-sky-600 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.date}</span>
                </div>

                <div className="text-sky-700 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
