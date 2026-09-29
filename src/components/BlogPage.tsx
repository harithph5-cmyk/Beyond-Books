import React, { useState } from 'react';
import { BLOG_DATA } from '../data/blogData';
import { BlogPost } from '../types';
import { Clock, Calendar, ArrowRight, Sparkles, BookOpen, User } from 'lucide-react';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
  onExploreCourses: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onSelectPost,
  onExploreCourses,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Automation',
    'Performance Marketing',
    'Search & AI Discovery',
    'Creative Strategy',
    'Executive Strategy'
  ];

  const filteredPosts = BLOG_DATA.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Field Notes & Research Papers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
            The Beyond Books Growth Dispatch
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            In-depth technical guides, algorithm analyses, and agentic MarTech blueprints authored by our active faculty and growth fellows.
          </p>
        </div>

        {/* Category Pills */}
        <div className="pt-6 flex flex-wrap items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-400 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured / Marquee Article */}
      {filteredPosts.length > 0 && selectedCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => onSelectPost(filteredPosts[0])}
            className="p-8 sm:p-10 rounded-3xl glass-panel bg-gradient-to-br from-[#0c152a] via-[#090e1a] to-[#070b14] border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer group shadow-2xl"
          >
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="font-semibold text-cyan-400 uppercase tracking-wider">
                  Featured Research
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">{filteredPosts[0].category}</span>
                <span aria-hidden="true">·</span>
                <span>{filteredPosts[0].readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {filteredPosts[0].title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {filteredPosts[0].summary}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <User className="w-3.5 h-3.5 text-cyan-400" />
                  <span>By {filteredPosts[0].author.name} ({filteredPosts[0].author.role})</span>
                </div>

                <div className="text-xs font-bold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Field Note</span>
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
              className="p-6 rounded-2xl glass-panel bg-[#090e1a]/80 border border-white/10 flex flex-col justify-between space-y-5 hover:border-cyan-500/30 transition-all duration-200 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-cyan-400">{post.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold font-heading text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-300">{post.author.name}</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
