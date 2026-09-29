import React from 'react';
import { BlogPost } from '../types';
import { X, Calendar, Clock, User, BookmarkCheck, ArrowRight } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onExploreCourses: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  onExploreCourses,
}) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl glass-panel bg-[#090e1a]/95 border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-start justify-between bg-gradient-to-r from-cyan-950/20 to-indigo-950/20">
          <div className="space-y-2 pr-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="font-semibold text-cyan-400">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
            </div>
            <h2 id="blog-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-white leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span>By {post.author.name} · {post.author.role}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-300 leading-relaxed text-sm">
          {/* Key takeaway card */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <BookmarkCheck className="w-4 h-4" />
              <span>Core Takeaway for Practitioners</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {post.keyTakeaway}
            </p>
          </div>

          {post.content.map((paragraph, index) => (
            <p key={index} className="text-slate-300 text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Internal CTA inside article */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">Want to apply these systems in live labs?</h4>
              <p className="text-xs text-slate-300 mt-0.5">Explore our flagship courses with real media spend and 1-on-1 mentorship.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onExploreCourses();
              }}
              className="px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-white/10 bg-[#060a12] flex items-center justify-between text-xs text-slate-400">
          <span>Published by Beyond Books Research Institute</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 font-medium transition-colors"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
