"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    
    // 1. Change: once ko false karein
    const isInView = useInView(ref, { once: false, margin: "-50px" }); 
    const springValue = useSpring(0, { stiffness: 45, damping: 20 });
    
    const displayValue = useTransform(springValue, (current) => 
      Math.round(current).toLocaleString() + suffix
    );
  
    useEffect(() => {
      if (isInView) {
        springValue.set(value);
      } else {
        // 2. Change: Jab view se bahar jaye toh wapas 0 kar dein
        springValue.set(0); 
      }
    }, [isInView, springValue, value]);
  
    return <motion.span ref={ref}>{displayValue}</motion.span>;
  }


// Update these to match your actual college names from the image
const COLLEGES = [
  { id: 1, name: "BABA FARID", logo: "/future_focus.jpeg" },
  { id: 2, name: "GURU KASHI UNIVERSITY", logo: "/Gurukashi.png" },
  { id: 3, name: "RIT ROORKEE", logo: "/rit.png" },
  { id: 4, name: "SHRI RAM", logo: "" },
  { id: 5, name: "TULA'S INSTITUTE", logo: "" },
  { id: 6, name: "JAIPUR NATIONAL UNIVERSITY", logo: "" },
  { id: 7, name: "JAGANNATH UNIVERSITY", logo: "" },
  { id: 8, name: "VGU JAIPUR", logo: "" },
];

const STATS = [
    { id: 1, label: "STUDENT ENROLLED", value: 2600, suffix: "+" },
    { id: 2, label: "CLASS COMPLETED", value: 5900, suffix: "+" },
    { id: 3, label: "SATISFACTION RATE", value: 100, suffix: "%" },
    { id: 4, label: "TOP COLLEGES", value: 354, suffix: "+" },
  ];

const FeaturedColleges = () => {
  const duplicatedColleges = [...COLLEGES, ...COLLEGES];

  return (
    <section className="relative py-10 overflow-hidden bg-[#f8b44f]">
      {/* 1. Background Texture - Circular Mandala Pattern like your image */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3Ccircle cx='50' cy='50' r='30' stroke='%23ffffff' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='50' cy='50' r='20' stroke='%23ffffff' stroke-width='2' stroke-dasharray='2,2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-md">
            Our Featured <span className="text-[#333]">——</span> Partner <span className="text-[#333]">Colleges</span>
          </h2>
          <p className="mt-2 text-white/90 font-medium max-w-2xl mx-auto">
            We collaborate with top-tier institutions worldwide to bring the best opportunities to our students.
          </p>
        </div>

        {/* 2. Enrollment Stats Section (Semi-Transparent Pill Style) */}
       {/* Enrollment Stats - Auto Counting */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-10">
          {STATS.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white/10 backdrop-blur-md border border-white/20 py-4 px-2 rounded-2xl shadow-sm text-center"
            >
              <h3 className="text-2xl md:text-3xl font-black text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-[#222] uppercase tracking-tighter mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>





        {/* 3. Scrolling Header for Logos (Optional text above scroller) */}
        <div className="mb-4 flex items-center justify-between border-b border-white/20 pb-4">
            <span className="text-white font-bold tracking-widest text-sm uppercase">Our University Network</span>
            <div className="h-[2px] flex-grow mx-4 bg-white/20"></div>
        </div>
      </div>

      {/* 4. Auto-Scrolling Logos (Glassmorphism Cards) */}
      <div className="relative flex items-center mt-10">
        <motion.div
          className="flex whitespace-nowrap gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {duplicatedColleges.map((college, index) => (
            <div
              key={`${college.id}-${index}`}
              className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl min-w-[200px] md:min-w-[280px] hover:bg-white/20 transition-all group"
            >
              {/* Logo Placeholder - Container looks like the image */}
              <div className="w-32 h-32 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center  mb-4 shadow-inner overflow-hidden group-hover:scale-110 transition-transform duration-500">
                {college.logo ? (
                    <img src={college.logo} alt={college.name} className="w-full h-full object-cover " />
                ) : (
                    <div className="text-[#F9A825] font-black text-xl">{college.name.charAt(0)}</div>
                )}
              </div>
              <span className="text-xs md:text-sm font-black text-white text-center leading-tight whitespace-normal max-w-[180px]">
                {college.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Visual Polish: Side Fades */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#F9A825] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#F9A825] to-transparent z-10" />
      </div>
    </section>
  );
};

export default FeaturedColleges;