
import React from 'react';
import type { Blog } from '../types/Blog';

interface BlogCardProps {
  blog: Blog;
  isActive: boolean;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, isActive, onClick }) => {
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-3xl transition-all duration-500 group relative overflow-hidden ${
        isActive 
          ? 'bg-white shadow-[0_20px_50px_rgba(109,40,217,0.15)] ring-1 ring-violet-100 -translate-y-1' 
          : 'bg-white/40 border border-white hover:bg-white hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-600 to-fuchsia-600"></div>
      )}
      
      <div className="flex justify-between items-center mb-4">
        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full transition-colors ${
          isActive ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-violet-100 group-hover:text-violet-600'
        }`}>
          {blog.category[0]}
        </span>
        <time className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
          {formattedDate}
        </time>
      </div>
      
      <h3 className={`text-xl font-extrabold mb-3 leading-tight tracking-tight transition-colors ${
        isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'
      }`}>
        {blog.title}
      </h3>
      
      <p className={`text-sm line-clamp-2 leading-relaxed font-medium transition-colors ${
        isActive ? 'text-slate-600' : 'text-slate-400 group-hover:text-slate-500'
      }`}>
        {blog.description}
      </p>
      
      <div className={`mt-4 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
        isActive ? 'text-violet-600 translate-x-0 opacity-100' : 'text-slate-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
      }`}>
        Read Insight
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </button>
  );
};

export default BlogCard;