"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// --- Types ---
interface StudentReview {
  name: string;
  designation: string;
  rating: number;
  review: string;
  photoURL?: string;
}

export default function TestimonialSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn] = useState(true); 
  const scrollRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    rating: 5,
    review: ''
  });

  const reviews: StudentReview[] = [
    {
      name: "Swapnil",
      designation: "MBBS Student",
      rating: 5,
      review: "I always recommend Crucial Admission Counselor to others because of their dedication. They work professionally to get me admission in college.",
    },
    {
      name: "Rahul Verma",
      designation: "B.Tech CSE",
      rating: 5,
      review: "The counseling process was so smooth. I was confused between branches, but Educare Ho experts guided me based on my rank.",
    },
    {
      name: "Ananya Iyer",
      designation: "Class 12th",
      rating: 4,
      review: "Professionalism at its best. They don't just suggest colleges; they build your career roadmap. Highly recommended!",
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <section className="bg-[#fcfaf2] py-20 px-4 md:px-6 relative overflow-hidden group">
      
      {/* --- COLLEGE TEXTURE & LEAF BACKGROUND --- */}
      {/* Blueprint/Grid Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23064e3b' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Floating Leaves (SVG) */}
      <div className="absolute top-10 left-10 text-emerald-900/10 -rotate-12 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,11 17,8 17,8Z" /></svg>
      </div>
      <div className="absolute bottom-10 right-10 text-emerald-900/10 rotate-180 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,11 17,8 17,8Z" /></svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-8 bg-emerald-700"></span>
                <p className="text-emerald-800 font-bold text-xs tracking-[0.3em] uppercase">Future <span className='text-amber-300'>Focus</span></p>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900">Student <span className="text-emerald-700 italic">Success Stories</span></h2>
            <p className="text-slate-500 mt-3 font-medium max-w-md">Real experiences from students who found their dream campus with Educare Ho.</p>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => isLoggedIn ? setIsModalOpen(true) : alert("Please login!")}
              className="group relative px-8 py-4 bg-emerald-900 text-white rounded-full font-bold transition-all hover:bg-emerald-800 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Share Your Journey</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </button>
            
            <div className="hidden md:flex gap-3">
              <button onClick={() => scroll('left')} className="p-4 rounded-full bg-white border border-emerald-100 text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all shadow-sm">←</button>
              <button onClick={() => scroll('right')} className="p-4 rounded-full bg-white border border-emerald-100 text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all shadow-sm">→</button>
            </div>
          </div>
        </div>

        {/* --- Scroll Container --- */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-12 pt-4 gap-6 md:gap-10 scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl border-b-4 border-emerald-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[calc(33.33%-1.5rem)] snap-center"
            >
              {/* College Stamp Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <img
                  src={item.photoURL || `https://ui-avatars.com/api/?name=${item.name}&background=064e3b&color=fff`}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-emerald-50"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg leading-tight">{item.name}</h4>
                  <p className="text-emerald-700 text-xs font-bold uppercase tracking-wider">{item.designation}</p>
                </div>
              </div>

              <div className="relative">
                <span className="text-6xl text-emerald-100 absolute -top-6 -left-4 font-serif">“</span>
                <p className="text-slate-600 font-medium leading-relaxed relative z-10 italic">
                  {item.review}
                </p>
                <div className="flex gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < item.rating ? "text-amber-500" : "text-slate-200"}`}>★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Feedback Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-emerald-950/40 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="relative bg-white w-full max-w-lg p-10 rounded-[2rem] shadow-2xl z-10 border-t-8 border-emerald-800"
          >
            <h3 className="text-3xl font-serif mb-1 text-slate-900">Submit Your Story</h3>
            <p className="text-emerald-700 text-xs font-bold mb-8 tracking-widest uppercase">Jai Mata Di • Helping others decide</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input type="text" placeholder="College Name" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none" value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} />
              </div>
              <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 outline-none" value={formData.rating} onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}>
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                <option value="4">⭐⭐⭐⭐ 4 Stars</option>
              </select>
              <textarea placeholder="How was your counseling experience?" required className="w-full p-4 h-32 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none resize-none" value={formData.review} onChange={(e) => setFormData({...formData, review: e.target.value})} />
              <button disabled={isSubmitting} className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-800 transition-all">
                {isSubmitting ? "Uploading..." : "Publish Story"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}