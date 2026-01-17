
import React from 'react';
import type { Blog } from '../types/Blog';

interface BlogDetailProps {
  blog?: Blog;
  isLoading: boolean;
  error: Error | null;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-100 animate-pulse space-y-12">
        <div className="h-[500px] bg-slate-50 rounded-[2.5rem]"></div>
        <div className="space-y-6">
          <div className="h-16 bg-slate-50 rounded-2xl w-3/4"></div>
          <div className="h-6 bg-slate-50 rounded-full w-1/4"></div>
        </div>
        <div className="space-y-4 pt-8">
          {[1,2,3,4,5].map(i => <div key={i} className="h-4 bg-slate-50 rounded w-full"></div>)}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[700px] flex flex-col items-center justify-center text-center p-16 bg-white rounded-[3rem] border border-red-50 shadow-2xl">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mb-8 rotate-12">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className="text-2xl font-black text-slate-900">Content Temporarily Unavailable</h3>
        <p className="text-slate-500 mt-4 max-w-xs mx-auto leading-relaxed">{error.message}</p>
        <button onClick={() => window.location.reload()} className="mt-8 px-8 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-violet-600 transition-all">Retry Connection</button>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="h-[750px] flex flex-col items-center justify-center text-center p-12 bg-white/40 rounded-[3.5rem] border-2 border-dashed border-slate-200 backdrop-blur-sm">
        <div className="relative mb-12">
            <div className="absolute -inset-4 bg-violet-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl border border-slate-100 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <svg className="w-12 h-12 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                </svg>
            </div>
        </div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight">Expand Your Knowledge</h3>
        <p className="text-slate-500 max-w-sm mt-6 text-lg leading-relaxed font-medium italic">Select an article from the treasury to unveil the full technical analysis.</p>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <article className="bg-white rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="relative group">
        <img 
          src={blog.coverImage || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&h=600'} 
          alt={blog.title} 
          className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12">
            <span className="px-6 py-2 bg-violet-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-2xl">
              {blog.category[0]}
            </span>
        </div>
      </div>
      
      <div className="px-16 py-16 -mt-24 relative z-10 bg-white rounded-t-[4rem]">
        <header className="mb-16">
          <h1 className="text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-10">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-8 border-y border-slate-100 py-8 mb-12">
            <div className="flex items-center gap-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-500 mb-1">Timeline</span>
                <span className="font-extrabold text-slate-900">{formattedDate}</span>
              </div>
              <div className="w-px h-10 bg-slate-100"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-500 mb-1">Reading Time</span>
                <span className="font-extrabold text-slate-900">8 min read</span>
              </div>
            </div>
            
            <div className="flex gap-4">
               <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-violet-600 transition-all hover:shadow-2xl hover:shadow-violet-200">
                 Share Insight
               </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -left-12 top-0 bottom-0 w-2 bg-gradient-to-b from-violet-600 to-fuchsia-600 rounded-full group-hover:w-3 transition-all"></div>
            <p className="text-2xl text-slate-800 font-semibold leading-relaxed pl-4">
              {blog.description}
            </p>
          </div>
        </header>

        <section className="prose prose-2xl max-w-none">
          <div className="whitespace-pre-wrap text-slate-600 leading-[2] text-xl font-medium">
            {blog.content}
          </div>
        </section>

        <footer className="mt-24 pt-16 border-t border-slate-100">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-wrap gap-3">
                {blog.category.map((cat, idx) => (
                  <span key={idx} className="px-5 py-3 bg-violet-50 text-violet-700 text-xs font-black uppercase tracking-widest rounded-2xl border border-violet-100">
                    #{cat.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                 <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">End of article</p>
                    <p className="font-black text-slate-900 group-hover:text-violet-600 transition-colors">Back to Treasury</p>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-violet-100 group-hover:text-violet-600 transition-all">
                    <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
                 </div>
              </div>
           </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogDetail;