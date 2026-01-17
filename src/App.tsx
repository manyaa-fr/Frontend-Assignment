
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './context/queryClient';
import BlogsPage from './pages/BlogsPage';

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <nav className="w-full h-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-lg">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332-.477-4.5-1.253"
                  />
                </svg>
              </div>

              <span className="text-sm font-extrabold tracking-wide text-slate-900">
                CA MONK
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <button className="hover:text-slate-900 transition-colors">
                Tools
              </button>
              <button className="hover:text-slate-900 transition-colors">
                Practice
              </button>
              <button className="hover:text-slate-900 transition-colors">
                Events
              </button>
              <button className="hover:text-slate-900 transition-colors">
                Job Board
              </button>
              <button className="hover:text-slate-900 transition-colors">
                Points
              </button>
            </div>
            <div>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors">
                Profile
              </button>
            </div>

          </div>
        </nav>
        <header className="py-16 text-center overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-4">
              CA Monk <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Blog</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-xl mx-auto font-medium leading-relaxed">
                Stay updated with the latest trends in finance, accounting, and career growth
            </p>
        </header>
        
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <BlogsPage />
        </main>

        <footer className="bg-slate-950 text-white py-20 mt-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-black tracking-tighter">CA MONK</h2>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">Empowering the next generation of financial leaders with deep technical insights and community-driven knowledge.</p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 bg-slate-900 rounded-full border border-slate-800 flex items-center justify-center hover:bg-violet-600 hover:border-violet-500 transition-all cursor-pointer">
                    <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-violet-500 mb-6">Resources</h3>
              <ul className="space-y-4 text-slate-400 text-sm font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Digital Library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Expert Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-violet-500 mb-6">Ecosystem</h3>
              <ul className="space-y-4 text-slate-400 text-sm font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Job Placement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Skill Assessments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Peer Mentorship</a></li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-sm font-bold mb-4">Subscribe to our Briefing</h3>
              <div className="flex gap-2">
                <input type="text" placeholder="Email" className="bg-slate-800 border-none rounded-xl px-4 py-2 text-sm w-full focus:ring-2 focus:ring-violet-500 outline-none" />
                <button className="bg-violet-600 p-2 rounded-xl hover:bg-violet-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth={2.5} /></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-black uppercase tracking-widest">
            <p>© 2024 CA MONK GLOBAL. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
};

export default App;