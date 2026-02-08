"use client";
import Image from 'next/image';

import React from 'react';
import CounsellingModal from "@/Components/CounsellingForm";
import { useState } from 'react';

// --- Types ---
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

// --- Components ---
const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => (
  <div className={`p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-orange-200/60 transition-all duration-500 hover:-translate-y-2 ${className}`}>
    <div className="text-4xl mb-6 bg-orange-50 w-16 h-16 flex items-center justify-center rounded-2xl ring-1 ring-orange-100">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-medium">{description}</p>
  </div>
);

export default function AboutPage() {
  const [openCounselling, setOpenCounselling] = useState(false);

  return (
    <>
              <CounsellingModal open={openCounselling} setOpen={setOpenCounselling} />

    <main className="bg-[#fafafa] min-h-screen selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* 1. THE IMPACT HERO */}
      <section className="relative pt-24 pb-20 px-6">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-orange-100 shadow-sm animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
              </span>
              <span className="text-sm font-black text-slate-700 tracking-[0.2em] uppercase">Jai Mata Di Educare</span>
            </div>

            <h1 className="text-6xl md:text-[110px] font-black leading-[0.9] tracking-tighter text-slate-900">
              Transforming <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 italic">
                Aspirations 
              </span> 
              Into Reality.
            </h1>

            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-medium leading-relaxed">
              India ke sabse trusted admission counselors. Hum sirf college nahi dilate, hum 
              <span className="text-slate-900 font-bold border-b-4 border-orange-200 ml-2">Sahi Career Design</span> karte hain.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <button className="px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-lg hover:bg-orange-600 transition-all shadow-2xl shadow-slate-300 active:scale-95">
                Explore Our Process
              </button>
              <button className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-[2rem] font-bold text-lg hover:border-orange-500 transition-all shadow-lg">
                Talk to Founder
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BENTO GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Main Legacy Card - Added Texture & Glass Effect */}
    <div className="md:col-span-2 relative overflow-hidden p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-orange-600 to-red-700 text-white shadow-2xl group">
      {/* Texture Overlay (Circles Pattern) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }}>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-6 border border-white/30">
            Since 2012
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Our Legacy of <br/> 
            <span className="text-yellow-300">15,000+</span> Success Stories.
          </h2>
          <p className="text-orange-50 text-lg md:text-xl max-w-md font-medium leading-relaxed opacity-90">
            Pichle 12 saalon se, humne har us student ka haath thama hai jo sapne dekhne ki himmat rakhta hai.
          </p>
        </div>
        
        <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-8">
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-black">500+</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">Top Colleges</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-black">24/7</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-70">Expert Support</span>
          </div>
        </div>
      </div>

      {/* Decorative Transparent Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
    </div>

    {/* Feature Cards - Glassmorphism Style */}
    <div className="space-y-8 h-full flex flex-col">
  
  {/* CARD 1: Scholarship (Desktop Only) */}
  <div className="hidden md:flex flex-1 p-8 rounded-[2.5rem] bg-gradient-to-br from-teal-500 to-emerald-700 text-white shadow-xl relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl group-hover:-translate-y-2 transition-transform">💰</div>
    <div className="relative z-10">
      <div className="text-4xl mb-4">💰</div>
      <h3 className="text-2xl font-black mb-2">Smart Savings</h3>
      <p className="text-teal-50 font-medium leading-relaxed">Hum ensure karte hain ki aapko maximum scholarship aur fees mein relaxation mile.</p>
    </div>
  </div>

  {/* CARD 2: Support (Desktop Only) */}
  <div className="hidden md:flex flex-1 p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-300 transition-all relative overflow-hidden group">
    <div className="absolute -bottom-4 -right-4 p-4 opacity-[0.05] text-9xl group-hover:scale-110 transition-transform">🛠️</div>
    <div className="relative z-10">
      <div className="text-4xl mb-4">🛠️</div>
      <h3 className="text-2xl font-black text-slate-900 mb-2">End-to-End</h3>
      <p className="text-slate-600 font-medium leading-relaxed">Form filling se lekar hostel allotment tak, hamari team har step par saath hai.</p>
    </div>
  </div>

  {/* CARD 3: Trust (Desktop Only) */}
  <div className="hidden md:flex flex-1 p-8 rounded-[2.5rem] bg-orange-500 text-white shadow-xl relative overflow-hidden group">
    <div className="absolute top-1/2 right-0 -translate-y-1/2 p-4 opacity-20 text-8xl group-hover:rotate-12 transition-transform">🛡️</div>
    <div className="relative z-10">
      <div className="text-4xl mb-4">🛡️</div>
      <h3 className="text-2xl font-black mb-2">Verified Only</h3>
      <p className="text-orange-50 font-medium leading-relaxed">Hum sirf UGC/AICTE approved aur high-placement record wale colleges hi suggest karte hain.</p>
    </div>
  </div>

</div>

    {/* Bottom Banner - Transparent Look */}
    <div className="md:col-span-3">
      <div className="relative p-[2px] rounded-[3rem] bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-[2.9rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 flex-col md:flex-row text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-3xl shadow-inner">
              🙏
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-black text-slate-900 italic">
                Mata Rani ki <span className="text-orange-600">Kripa.</span>
              </h3>
              <p className="text-slate-600 font-bold">Har student ko uske khwaab ke hisab se college milna chahiye.</p>
            </div>
          </div>
          <button className="w-full md:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-orange-600 hover:scale-105 transition-all shadow-xl shadow-orange-200">
            Join Us Now
          </button>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* 3. FOUNDER SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2 relative group">
            <div className="absolute inset-0 bg-orange-600 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-all duration-700"></div>
            <div className="relative aspect-[4/5] bg-slate-200 rounded-[4rem] overflow-hidden border-4 border-white shadow-2xl">
               <img 
                 src="/Jai_mata_di_educatee.jpg" 
                 alt="Founder" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-5xl font-black text-slate-900 leading-[1.1]">
              A Message From <br /> <span className="text-orange-600">Our Founder.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-medium italic border-l-8 border-orange-500 pl-8">
              "Humara wada hai ki hum aapko kabhi bhatakne nahi denge. Aapka future hamari zimmedari hai."
            </div>
            <div className="pt-4 font-black tracking-widest text-slate-900 uppercase">
              — Team Jai Mata Di Educate
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
  {/* Inner Container with high-end aesthetic */}
  <div className="max-w-6xl mx-auto relative group">
    
    {/* The Main CTA Card */}
    <div className="relative overflow-hidden bg-[#0A0F1C] rounded-[3rem] p-8 md:p-20 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.3)]">
      
      {/* 1. Animated Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-orange-600 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[120px] opacity-50"></div>
      </div>

      {/* 2. Glassy Grid Texture */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[grid:white_1px_transparent_1px] bg-[size:40px_40px]"></div>

      {/* 3. Content Layout */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Top Mini-Heading */}
        <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="text-orange-400 text-xs font-bold tracking-[0.3em] uppercase">Limited Slots for 2026</span>
        </div>

        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none text-center">
          Your Future <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            Starts Now.
          </span>
        </h2>

        {/* The "Attractive" Button - Magnetic Effect Style */}
        <div className="relative flex flex-col items-center gap-6 w-full max-w-md">
          <button
          onClick={() => setOpenCounselling(true)}
          className="group relative w-full bg-orange-600 hover:bg-orange-500 text-white py-6 rounded-2xl font-black text-xl transition-all duration-300 shadow-[0_0_40px_rgba(234,88,12,0.4)] active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-3">
              BOOK FREE COUNSELLING 
              <span className="bg-white/20 p-1 rounded-md group-hover:translate-x-1 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
              </span>


            </span>
            {/* Shimmer Effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out"></div>
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-60">
            {['1-on-1 Mentorship', 'Expert Counselors', 'Zero Hidden Fees'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                <span className="text-white text-xs font-bold uppercase tracking-widest">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Abstract Geometric Decoration */}
      <div className="absolute top-12 right-12 hidden lg:block opacity-20 border-[20px] border-white w-24 h-24 rounded-full"></div>
      <div className="absolute bottom-12 left-12 hidden lg:block opacity-20 border-[1px] border-white w-48 h-48 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
    </div>

    {/* Floating Card Detail (Optional) */}
    <div className="absolute -bottom-6 -right-6 md:right-12 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 hidden sm:flex items-center gap-4 animate-bounce-slow">
      <div className="flex -space-x-3">
        {[1,2,3].map(i => (
          <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
        ))}
      </div>
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Joined today</p>
        <p className="text-sm font-black text-slate-900">+42 Students</p>
      </div>
    </div>
  </div>
</section>

      <footer className="py-12 text-center text-slate-400 font-bold uppercase tracking-[0.4em] text-xs">
        🚩 Victory Belong to Those Who Believe.
      </footer>
    </main>
    </>
  );
}