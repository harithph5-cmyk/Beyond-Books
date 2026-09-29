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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-slate-50">
          <div className="space-y-2 pr-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="font-semibold text-sky-700">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {post.readTime}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                {post.date}
              </span>
            </div>
            <h2 id="blog-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-tight">
              {post.title}
            </h2>
            <div className="flex items-center gap-2 text-xs text-slate-600 pt-1">
              <User className="w-3.5 h-3.5 text-sky-600" />
              <span>By {post.author.name} · {post.author.role}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors shrink-0 cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-700 leading-relaxed text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium">
            {post.summary}
          </div>

          <div
            className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <BookmarkCheck className="w-4 h-4 text-emerald-600" />
              <span>Beyond Books Research Publication</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onExploreCourses();
              }}
              className="text-xs text-sky-700 font-semibold hover:text-sky-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore related programs</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-600">
          <span>Author: {post.author.name}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
