"use client";

import Link from "next/link";
import Image from "next/image"; // Agar image use karni ho toh

export default function Hero() {
  return (
<>
    {/* Sticky Bar Code */}
<div className="sticky top-0  w-full bg-[#F4B400] py-2 overflow-hidden border-b border-black/10">
  <div className="flex whitespace-nowrap animate-marquee-fast">
    <div className="flex gap-10 items-center">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <span key={i} className="text-black font-bold text-sm flex items-center gap-2">
          <span className="text-lg">★</span> 100% PLACEMENT SUPPORT 
          <span className="text-lg">★</span> ADMISSIONS OPEN 2026-27 
          <span className="text-lg">★</span> TOP COLLEGES ONLY
        </span>
      ))}
    </div>
  </div>
</div>

{/* Correct way to write Style in Next.js JSX */}
<style dangerouslySetInnerHTML={{ __html: `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee-fast {
    display: flex;
    animation: marquee 20s linear infinite;
  }
`}} />
    
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
  Future <span className="text-orange-500">Focus</span> <br />
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
              href="https://wa.me/8409463997"
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
 <div className="relative flex items-center border-y border-white/10 py-8 bg-gradient-to-r from-transparent via-white/5 to-transparent">
    
    {/* Horizontal Marquee Wrapper - Speed slowed down to 40s */}
    <div className="flex whitespace-nowrap animate-[marquee-horizontal_40s_linear_infinite] gap-16 items-center">
      
      {/* Course List with specific icons */}
      {[
        { name: "B.Tech/B.E. (Engineering)", icon: "⚙️" },
        { name: "BCA, BBA", icon: "💻" },
        { name: "MCA, MBA", icon: "📊" },
        { name: "POLYTECHNIC", icon: "🛠️" },
        { name: "BALLB, B.Sc. Nursing", icon: "⚖️" },
        { name: "GNM, B. Pharmacy", icon: "💊" },
        { name: "Hotel Management", icon: "🏨" },
        { name: "B.Sc. Agriculture", icon: "🌾" },
        { name: "Physiotherapy (BPT)", icon: "🩺" }
      ].map((course, index) => (
        <div key={index} className="flex items-center gap-6 group">
          {/* Main Floating Icon */}
          <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(244,180,0,0.5)] animate-bounce" style={{ animationDuration: '3s' }}>
            {course.icon}
          </span>
          
          {/* Divider Icon */}
          <span className="text-orange-500 text-2xl opacity-50">✦</span>
          
          {/* Bold Transparent Styled Text */}
          <span 
            className="text-6xl font-black uppercase italic tracking-tighter transition-all duration-500 group-hover:scale-110"
            style={{
              WebkitTextStroke: '1.5px rgba(255,255,255,0.3)',
              color: 'transparent',
              textShadow: '0 0 20px rgba(255,255,255,0.05)'
            }}
          >
            {course.name}
          </span>
        </div>
      ))}

      {/* Duplicate for Infinite Seamless Loop */}
      {[
        { name: "B.Tech/B.E. (Engineering)", icon: "⚙️" },
        { name: "BCA, BBA", icon: "💻" },
        { name: "MCA, MBA", icon: "📊" },
        { name: "POLYTECHNIC", icon: "🛠️" },
        { name: "BALLB, B.Sc. Nursing", icon: "⚖️" },
        { name: "GNM, B. Pharmacy", icon: "💊" },
        { name: "Hotel Management", icon: "🏨" },
        { name: "B.Sc. Agriculture", icon: "🌾" },
        { name: "Physiotherapy (BPT)", icon: "🩺" }
      ].map((course, index) => (
        <div key={`dup-${index}`} className="flex items-center gap-6 group">
          <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(244,180,0,0.5)] animate-bounce" style={{ animationDuration: '3s' }}>
            {course.icon}
          </span>
          <span className="text-orange-500 text-2xl opacity-50">✦</span>
          <span 
            className="text-6xl font-black uppercase italic tracking-tighter"
            style={{
              WebkitTextStroke: '1.5px rgba(255,255,255,0.3)',
              color: 'transparent'
            }}
          >
            {course.name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* CSS for Horizontal Animation */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes marquee-horizontal {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `}} />
</div>

          {/* 2. DESKTOP ONLY: Grid Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2">
  <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 text-blue-400 text-2xl animate-float">🏥</div>
  <h3 className="text-xl font-bold mb-2">B.ed/Deled</h3>
  <p className="text-gray-400 text-sm leading-relaxed">Complete college guidance &  selection.</p>
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

    </>
  );
}