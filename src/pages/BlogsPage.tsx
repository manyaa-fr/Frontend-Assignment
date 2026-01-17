
import React, { useState } from 'react';
import { useBlogs } from '../hooks/useBlogs';
import { useBlogById } from '../hooks/useBlogById';
import BlogCard from '../components/BlogCard';
import BlogDetail from '../components/BlogDetail';
import BlogForm from '../components/BlogForm';

const BlogsPage: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  
  const { data: blogs, isLoading: listLoading, error: listError } = useBlogs();
  const { data: activeBlog, isLoading: detailLoading, error: detailError } = useBlogById(selectedId);

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-start">
      {/* Left Panel: Blog List */}
      <aside className="w-full lg:w-[440px] lg:sticky lg:top-8 h-fit animate-in slide-in-from-left-8 duration-700">
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-10 bg-gradient-to-b from-violet-600 to-fuchsia-600 rounded-full"></div>
            <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">The Treasury</h2>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Knowledge Base</p>
            </div>
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="w-12 h-12 flex items-center justify-center bg-slate-900 text-white rounded-2xl hover:bg-violet-600 hover:rotate-90 transition-all shadow-lg active:scale-95 group"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>

        <div className="space-y-6 max-h-[calc(100vh-150px)] lg:overflow-y-auto pr-6 scrollbar-hide py-2">
          {listLoading && Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-8 bg-white/40 border border-white rounded-[2rem] shadow-sm animate-pulse space-y-6">
              <div className="flex justify-between items-center">
                <div className="h-4 bg-slate-100 rounded-full w-24"></div>
                <div className="h-4 bg-slate-100 rounded-full w-12"></div>
              </div>
              <div className="h-8 bg-slate-100 rounded-xl w-full"></div>
              <div className="h-4 bg-slate-100 rounded-lg w-5/6"></div>
            </div>
          ))}

          {listError && (
            <div className="p-12 bg-white rounded-[2.5rem] border border-red-50 text-center shadow-xl shadow-red-100/20">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <p className="text-slate-900 font-black text-xl tracking-tight">System Desync</p>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed font-medium px-4">The knowledge server is currently unreachable. Ensure local protocols are active.</p>
            </div>
          )}

          {!listLoading && blogs?.length === 0 && (
            <div className="p-20 text-center bg-white/40 border-2 border-dashed border-slate-200 rounded-[3rem]">
              <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Registry Empty</p>
            </div>
          )}

          {!listLoading && blogs?.map((blog, idx) => (
            <div key={blog.id} className="animate-in fade-in slide-in-from-left-4" style={{ animationDelay: `${idx * 100}ms` }}>
                <BlogCard 
                blog={blog} 
                isActive={selectedId === blog.id}
                onClick={() => setSelectedId(blog.id)}
                />
            </div>
          ))}
        </div>
      </aside>

      {/* Right Panel: Blog Detail */}
      <section className="flex-1 min-w-0 w-full animate-in fade-in slide-in-from-right-8 duration-1000">
        <BlogDetail 
          blog={activeBlog} 
          isLoading={detailLoading} 
          error={detailError} 
        />
      </section>

      {/* Blog Creation Modal */}
      {showForm && (
        <BlogForm
            onClose={() => setShowForm(false)}
            onCreated={(id) => setSelectedId(id)}
        />
    )}
    </div>
  );
};

export default BlogsPage;