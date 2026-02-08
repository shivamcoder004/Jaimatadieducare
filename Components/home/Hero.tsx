"use client";

import Link from "next/link";
import Image from "next/image"; // Agar image use karni ho toh

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-[#0a1425] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#F4B400]/5 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#F4B400] text-xs lg:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4B400] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4B400]"></span>
            </span>
            Admissions Open for 2026-27
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
  Jai Mata Di <span className="text-orange-500">Educare</span> <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D03F] to-orange-500">
    Shaping Successful Careers
  </span>
</h1>

<p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl mt-4">
  Join 15,000+ students who achieved their dream college through our 
  personalized counseling for MBBS, MBA, and Engineering. 
  Your journey to excellence starts here.
</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <button className="bg-[#F4B400] hover:bg-[#ffb107] text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#F4B400]/20 transition-all hover:scale-105 active:scale-95">
              Get Free Consultation
            </button>
            <Link
              href="https://wa.me/919876543210"
              className="group border border-white/20 hover:bg-white/5 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              WhatsApp Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Mini Stats - Horizontal on all screens */}
          <div className="flex gap-6 lg:gap-10 pt-8 border-t border-white/5 w-full justify-center lg:justify-start">
            <div>
              <h4 className="text-2xl lg:text-3xl font-bold text-white">12+</h4>
              <p className="text-gray-500 text-[10px] lg:text-sm uppercase tracking-wider">Years Exp.</p>
            </div>
            <div className="w-[1px] bg-white/10 h-10" />
            <div>
              <h4 className="text-2xl lg:text-3xl font-bold text-white">200+</h4>
              <p className="text-gray-500 text-[10px] lg:text-sm uppercase tracking-wider">Colleges</p>
            </div>
            <div className="w-[1px] bg-white/10 h-10" />
            <div>
              <h4 className="text-2xl lg:text-3xl font-bold text-white">100%</h4>
              <p className="text-gray-500 text-[10px] lg:text-sm uppercase tracking-wider">Trust</p>
            </div>
          </div>
        </div>

        {/* Right Side: Responsive Logic */}
        <div className="relative flex justify-center items-center">
          
          {/* 1. MOBILE ONLY: Attractive Image/Illustration */}
          <div className="block lg:hidden w-full max-w-[320px] md:max-w-[400px] animate-float">
  <div className="relative aspect-square">
    
    {/* 1. Background Glow/Circle Layer */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-orange-400/20 rounded-full border border-white/10 shadow-2xl"></div>

    {/* 2. Image Container - Isko rounded-full kiya hai taaki image circle bane */}
    <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/20 shadow-inner">
      <img 
        src="/Jai_mata_di_educatee.jpg" 
        alt="Founder" 
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 hover:scale-100"
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/400x400?text=Check+Extension";
        }}
      />
    </div>

    {/* 3. Floating Elements for Mobile Beauty */}
    <div className="absolute -top-2 -right-2 z-20 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl animate-bounce">
      <span className="text-2xl">⭐</span>
    </div>
    
    <div className="absolute bottom-6 -left-4 z-20 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-xl animate-pulse">
      <span className="text-2xl">📖</span>
    </div>

    {/* Optional: Founder Tag */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-900/20">
    Lead Counselor    </div>
  </div>
</div>

          {/* 2. DESKTOP ONLY: Grid Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 text-blue-400 text-2xl animate-float">🏥</div>
              <h3 className="text-xl font-bold mb-2">Medical (MBBS)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Complete NEET guidance & college selection.</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 mt-8">
              <div className="w-12 h-12 bg-[#F4B400]/20 rounded-2xl flex items-center justify-center mb-4 text-[#F4B400] text-2xl animate-float">⚙️</div>
              <h3 className="text-xl font-bold mb-2">Engineering</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Top private and govt college counseling.</p>
            </div>

            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 text-purple-400 text-2xl animate-float">🎓</div>
              <h3 className="text-xl font-bold mb-2">MBA / PGDM</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Profile building and interview prep support.</p>
            </div>

            <div className="group bg-gradient-to-br from-[#F4B400] to-orange-500 p-6 rounded-3xl transition-all hover:-translate-y-2 mt-8 flex flex-col justify-between">
              <h3 className="text-black text-xl font-black">Confused?</h3>
              <p className="text-black/80 text-sm font-medium">Talk to our experts directly.</p>
              <button className="mt-4 bg-black text-white text-xs py-2 px-4 rounded-xl font-bold">Call Now</button>
            </div>
          </div>

        </div>











      </div>

      {/* Tailwind Custom Animation Style */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}