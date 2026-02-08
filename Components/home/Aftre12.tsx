import React from 'react';
import Link from 'next/link';

// --- Types ---
interface CourseCategory {
  title: string;
  courses: string[];
  icon: string;
  color: string;
}

const coursesAfter12th: CourseCategory[] = [
  { title: "Engineering", courses: ["B.Tech", "BE"], icon: "⚙️", color: "bg-blue-50/90 text-blue-700 border-blue-200" },
  { title: "Medical", courses: ["MBBS", "BDS", "BAMS", "BHMS"], icon: "🩺", color: "bg-red-50/90 text-red-700 border-red-200" },
  { title: "Management", courses: ["BBA", "BMS"], icon: "💼", color: "bg-amber-50/90 text-amber-700 border-amber-200" },
  { title: "Law", courses: ["BA-LLB", "BBA-LLB", "B.Com-LLB", "B.Sc-LLB"], icon: "⚖️", color: "bg-purple-50/90 text-purple-700 border-purple-200" },
  { title: "Architecture", courses: ["B.Arch", "B.Planning"], icon: "🏗️", color: "bg-emerald-50/90 text-emerald-700 border-emerald-200" },
  { title: "Pharmacy", courses: ["B.Pharma", "D.Pharma", "Pharma-D"], icon: "💊", color: "bg-lime-50/90 text-lime-700 border-lime-200" },
  { title: "Design", courses: ["B.Des"], icon: "🎨", color: "bg-fuchsia-50/90 text-fuchsia-700 border-fuchsia-200" },
  { title: "Paramedical", courses: ["BPT", "B.Optom", "B.Sc. Radio"], icon: "🚑", color: "bg-sky-50/90 text-sky-700 border-sky-200" },
];

export default function After12thPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] relative overflow-hidden font-sans">
      
      {/* 1. DIAGONAL WATERMARK LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] rotate-[-12deg] scale-125 flex flex-col gap-12 select-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="whitespace-nowrap text-6xl md:text-8xl font-black tracking-tighter text-indigo-900">
            JAI MATA DI EDUCATE HO • JAI MATA DI EDUCATE HO • JAI MATA DI EDUCATE HO • JAI MATA DI EDUCATE 
          </div>
        ))}
      </div>

      {/* 2. BACKGROUND TEXTURE LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large Decorative Text - Academics */}
        <div className="absolute top-[-5%] left-[-5%] text-[10rem] md:text-[20rem] font-black text-indigo-900/[0.03] select-none whitespace-nowrap leading-none italic uppercase">
          ACADEMICS
        </div>
        
        {/* Large Decorative Text - Future */}
        <div className="absolute bottom-10 right-[-5%] text-[10rem] md:text-[15rem] font-black text-teal-900/[0.03] select-none whitespace-nowrap leading-none uppercase">
          FUTURE
        </div>

        {/* Circular Academic Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%234f46e5' stroke-width='1' fill='none'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%234f46e5' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='20' stroke='%234f46e5' stroke-width='2' stroke-dasharray='2,2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px'
          }}
        ></div>
      </div>

      {/* NAVIGATION */}
     

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-24 mt-8 md:mt-12">
        {/* HERO SECTION */}
        <header className="mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-widest uppercase bg-indigo-600 text-white rounded-md shadow-lg shadow-indigo-200">
            Roadmap 2026
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter">
            Choose Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Excellence.</span>
          </h1>
          <p className="mt-6 text-sm md:text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
            The transition from school to professional life is vital. Explore the most prestigious degrees for your future.
          </p>
        </header>

        {/* 2 CARDS PER ROW ON MOBILE (grid-cols-2) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {coursesAfter12th.map((category) => (
            <div 
              key={category.title} 
              className={`group relative flex flex-col p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white/90 backdrop-blur-sm ${category.color}`}
            >
              <div className="text-2xl md:text-4xl mb-3 md:mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {category.icon}
              </div>
              
              <h2 className="text-[13px] md:text-xl font-black mb-2 md:mb-4 tracking-tight leading-tight uppercase">
                {category.title}
              </h2>
              
              <ul className="space-y-1.5 mb-5 flex-grow">
                {category.courses.map((course) => (
                  <li key={course} className="flex items-center text-[10px] md:text-sm font-bold opacity-80 leading-tight">
                    <span className="mr-1.5 text-indigo-500">→</span>
                    {course}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-2.5 bg-white border border-current/20 rounded-xl text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent active:scale-95 shadow-sm">
                Details
              </button>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-2 flex flex-col items-center justify-center gap-6">
           <div className="h-px w-24 bg-slate-200"></div>
           <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.2em]">Have questions? We are here</p>
           <button className="group relative flex items-center gap-4 bg-slate-900 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl md:rounded-3xl transition-all hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-200 active:scale-95">
              <span className="text-sm md:text-lg font-black uppercase tracking-widest">Get In Touch</span>
              <div className="h-8 w-8 md:h-10 md:w-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
           </button>
           <p className="text-[10px] font-bold text-slate-400 italic">Jai Mata Di | Educate</p>
        </div>
      </main>
    </div>
  );
}