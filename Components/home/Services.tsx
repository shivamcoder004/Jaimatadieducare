"use client";

import React, { useRef } from "react";
import { 
  GraduationCap, 
  Stethoscope, 
  Globe, 
  Briefcase, 
  Book,
  Leaf,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "Engineering Admissions",
    description: "B.Tech, Diploma, Private & Government colleges guidance.",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    color: "from-emerald-400 to-teal-600",
    bgText: "ENGG"
  },
  {
    title: "Medical Admissions",
    description: "MBBS, BDS, BAMS, BHMS guidance for top colleges.",
    icon: <Stethoscope className="w-8 h-8 text-white" />,
    color: "from-rose-400 to-red-600",
    bgText: "MED"
  },
  {
    title: "Study Abroad",
    description: "Guidance for UK, USA, Canada, Australia admission.",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "from-sky-400 to-blue-600",
    bgText: "INTL"
  },
  {
    title: "MBA & Management",
    description: "MBA, PGDM, BBA counselling with top institutes.",
    icon: <Briefcase className="w-8 h-8 text-white" />,
    color: "from-amber-400 to-orange-600",
    bgText: "MGMT"
  },
  {
    title: "Career Counselling",
    description: "Personalized career guidance for students & parents.",
    icon: <Book className="w-8 h-8 text-white" />,
    color: "from-violet-400 to-purple-600",
    bgText: "GROW"
  },
];

export default function Services() {
  // const scrollRef = useRef(null);

  // const scroll = (direction) => {
  //   if (scrollRef.current) {
  //     const { scrollLeft, clientWidth } = scrollRef.current;
  //     const scrollTo = direction === 'left' 
  //       ? scrollLeft - clientWidth / 2 
  //       : scrollLeft + clientWidth / 2;
      
  //     scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  //   }
  // };


// 1. Update the Ref type to point to an HTMLDivElement
const scrollRef = useRef<HTMLDivElement>(null);

// 2. Define the type for the 'direction' parameter
const scroll = (direction: 'left' | 'right') => {
  if (scrollRef.current) {
    const { scrollLeft, clientWidth } = scrollRef.current;
    
    // Logic remains the same
    const scrollTo = direction === 'left' 
      ? scrollLeft - clientWidth / 2 
      : scrollLeft + clientWidth / 2;
    
    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  }
};















  return (
    <section className="relative bg-[#fdfbf7] py-24 overflow-hidden">
      
      {/* 1. Background Texture & Large Typography */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stitched-wool.png")` }}>
      </div>

      {/* Floating "EDUCATION" background text */}
      <div className="absolute top-20 left-[-5%] text-[15rem] font-black text-slate-900/[0.03] select-none pointer-events-none whitespace-nowrap leading-none">
        ACADEMICS
      </div>
      <div className="absolute bottom-10 right-[-5%] text-[15rem] font-black text-teal-900/[0.03] select-none pointer-events-none whitespace-nowrap leading-none">
        FUTURE
      </div>

      {/* 2. Scattered Leaf Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <Leaf size={140} className="absolute -top-10 left-[10%] rotate-45 text-teal-900 opacity-[0.05] animate-pulse" />
         <Leaf size={80} className="absolute top-[40%] right-[5%] -rotate-90 text-emerald-900 opacity-[0.05]" />
         <Leaf size={180} className="absolute -bottom-20 left-[20%] rotate-12 text-green-900 opacity-[0.07] blur-sm" />
         <Leaf size={60} className="absolute top-[20%] left-[45%] rotate-[160deg] text-teal-800 opacity-[0.04]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-4 tracking-tighter">
              Our Specialist <span className="text-teal-600">Services</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-lg font-medium border-l-4 border-teal-500 pl-4">
              Navigating your path to academic excellence with expert precision.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="group p-5 rounded-full bg-white border border-slate-200 shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group p-5 rounded-full bg-white border border-slate-200 shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3. Cards with Unique Inner Text Design */}
        <div 
  ref={scrollRef}
  className="flex flex-nowrap overflow-x-auto pb-12 gap-6 scrollbar-hide snap-x snap-mandatory px-4"
>
  {services.map((service) => (
    <div
      key={service.title}
      className="group relative flex-shrink-0 w-[260px] md:w-[280px] snap-center bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-xl shadow-slate-200/50 border border-white transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Smaller, subtle Vertical Background Text */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-5xl font-black text-slate-100 select-none pointer-events-none writing-vertical opacity-40 group-hover:text-teal-50 transition-colors">
        {service.bgText}
      </div>

      {/* Compact Icon Container */}
      <div className="relative mb-6">
        <div className={`absolute inset-0 blur-2xl opacity-30 rounded-full bg-gradient-to-br ${service.color}`}></div>
        <div className={`relative z-10 p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg animate-float group-hover:scale-110 transition-transform duration-500`}>
          {/* Reduced icon size slightly if needed, e.g., className="w-6 h-6" */}
          {React.cloneElement(service.icon, { className: "w-7 h-7 text-white" })}
        </div>
      </div>

      <h3 className="relative z-10 text-lg font-bold text-slate-800 mb-2 leading-tight">
        {service.title}
      </h3>
      
      <p className="relative z-10 text-slate-500 text-xs leading-relaxed mb-6 flex-grow font-medium line-clamp-3">
        {service.description}
      </p>

      <button className="relative z-10 w-full py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-teal-600 hover:shadow-lg active:scale-95">
        Explore Details
      </button>
    </div>
  ))}
</div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}