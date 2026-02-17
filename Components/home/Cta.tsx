"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden bg-[#003d66] rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl">
        
        {/* --- Background Illustrations (Left & Right) --- */}
        {/* Left Student Line Art */}
        <div className="absolute left-[-20px] bottom-[-20px] opacity-30 md:opacity-100 hidden sm:block pointer-events-none">
          <svg width="280" height="350" viewBox="0 0 200 250" fill="none" className="text-yellow-400">
            {/* Student figure */}
            <circle cx="100" cy="70" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M100 90 L100 140" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 110 L70 90" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 110 L130 90" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 140 L80 190" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 140 L120 190" stroke="currentColor" strokeWidth="2"/>
            {/* Book in hand */}
            <rect x="130" y="85" width="15" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M130 95 L145 95" stroke="currentColor" strokeWidth="1"/>
            <path d="M130 100 L145 100" stroke="currentColor" strokeWidth="1"/>
            {/* Graduation cap */}
            <path d="M70 50 L130 50 L125 40 L75 40 Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M80 40 L120 40 L115 30 L85 30 Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M95 50 L95 70" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Right Student Line Art */}
        <div className="absolute right-[-20px] bottom-[-20px] opacity-30 md:opacity-100 hidden sm:block pointer-events-none">
          <svg width="280" height="350" viewBox="0 0 200 250" fill="none" className="text-yellow-400">
            {/* Student figure */}
            <circle cx="100" cy="70" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M100 90 L100 140" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 110 L70 90" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 110 L130 90" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 140 L80 190" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 140 L120 190" stroke="currentColor" strokeWidth="2"/>
            {/* Laptop/Tablet */}
            <rect x="60" y="85" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
            <rect x="63" y="88" width="14" height="9" stroke="currentColor" strokeWidth="1"/>
            {/* Magnifying glass/search icon */}
            <circle cx="145" cy="60" r="12" stroke="currentColor" strokeWidth="2"/>
            <path d="M155 70 L165 80" stroke="currentColor" strokeWidth="2"/>
            {/* Thought bubble */}
            <path d="M145 40 Q150 30 160 35 Q165 25 175 30 Q180 40 170 45 Q175 55 165 50 Q160 60 145 55 Q140 45 145 40Z" 
                  stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* --- Content --- */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Start Your <span className="text-yellow-400 italic">Journey?</span>
          </h2>

          <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed font-light">
            Join lakhs of students who trust <span className="font-bold text-white underline decoration-yellow-400 decoration-2 underline-offset-4">Jai Mata Di Educare</span> for their college and course selection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Search Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-yellow-400 border-2 border-yellow-400 text-[#003d66] rounded-xl font-bold text-lg hover:bg-yellow-300 hover:border-yellow-300 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
            >
              Search Now 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>

            {/* Contact Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#003d66] transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
            >
              Contact Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.button>
          </div>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        
        {/* Small decorative dots/patterns */}
        <div className="absolute top-10 left-10 opacity-10">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-white">
            <circle cx="10" cy="10" r="2" fill="currentColor"/>
            <circle cx="30" cy="15" r="2" fill="currentColor"/>
            <circle cx="50" cy="10" r="2" fill="currentColor"/>
            <circle cx="70" cy="20" r="2" fill="currentColor"/>
            <circle cx="15" cy="40" r="2" fill="currentColor"/>
            <circle cx="40" cy="35" r="2" fill="currentColor"/>
            <circle cx="65" cy="45" r="2" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-10 opacity-10">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-yellow-400">
            <circle cx="70" cy="70" r="2" fill="currentColor"/>
            <circle cx="50" cy="65" r="2" fill="currentColor"/>
            <circle cx="30" cy="70" r="2" fill="currentColor"/>
            <circle cx="10" cy="60" r="2" fill="currentColor"/>
            <circle cx="65" cy="40" r="2" fill="currentColor"/>
            <circle cx="40" cy="45" r="2" fill="currentColor"/>
            <circle cx="15" cy="35" r="2" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>
  );
}