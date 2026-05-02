"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import CounsellingModal from "@/Components/CounsellingForm";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [openCounselling, setOpenCounselling] = useState(false);

  return (
    <>
      <CounsellingModal open={openCounselling} setOpen={setOpenCounselling} />

      <div className="relative min-h-screen bg-[#fafafa] overflow-hidden selection:bg-orange-500 selection:text-white">
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-100/50 to-transparent rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-[0.3em] uppercase bg-orange-100 text-orange-600 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
              Let's Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Future Together.</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Admission confusion? Stress mat lijiye. Humari expert team har step par aapke saath hai. 
              Niche diye gaye options se humse connect karein.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Left Side: Interactive Contact Info (Spans 3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Office Card */}
                <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Purnea Office</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">
                    Old sipahi tola, near Canara Bank ATM,<br /> Purnea (Bihar) - 845401
                  </p>
                </motion.div>

                {/* Support Card */}
                <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Working Hours</h3>
                  <p className="text-slate-500 font-medium">Monday - Saturday</p>
                  <p className="text-slate-900 font-bold">10:00 AM - 07:00 PM</p>
                </motion.div>
              </div>

              {/* Call & WhatsApp Box */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden group">
  {/* Decorative Background Glow */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-orange-600/30 transition-all" />
  
  <div className="relative z-10">
    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
      Quick Connect
    </h3>
    
    {/* Main Container: Stacked Vertically */}
    <div className="flex flex-col gap-4">
      
      {/* Top Row: Phone and WhatsApp side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* WhatsApp Button */}
        <a href="https://wa.me/918409463997" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-md border border-white/10 transition-all">
          <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/40">
            <MessageSquare size={20} />
          </div>
          <div>
            <p className="text-xs font-bold opacity-60 uppercase tracking-widest">WhatsApp</p>
            <p className="text-lg font-black">Chat with Us</p>
          </div>
        </a>

        {/* First Phone Button */}
        <a href="tel:+918409463997" className="flex items-center gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-md border border-white/10 transition-all">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/40">
            <Phone size={20} />
          </div>
          <div>
            <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Call Expert</p>
            <p className="text-lg font-black">+91 8252895483</p>
          </div>
        </a>
      </div>

      {/* Bottom Row: Second Phone Button (Full Width) */}
      <a href="tel:+918409463997" className="flex items-center    gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-md border border-white/10 transition-all">
        <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-600/40">
          <Phone size={20} />
        </div>
        <div>
          <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Support Line</p>
          <p className="text-lg font-black">+91 84094 63997</p>
        </div>
      </a>

    </div>
  </div>
</div>

              {/* Email & Map */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="sm:col-span-1 bg-white p-6 rounded-3xl border border-slate-100 shadow-lg flex flex-col items-center justify-center text-center">
                  <Mail className="text-orange-500 mb-3" size={28} />
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Email Us</p>
                  <p className="text-sm font-bold text-slate-800 break-all">futurefocus199703@gmail.com</p>
                </div>
                
                <div className="sm:col-span-2 relative h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.447551065673!2d87.471!3d25.779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ2JzQ0LjQiTiA4N8KwMjgnMTUuNiJF!5e0!3m2!1sen!2sin!4v1625000000000"
                    className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Side: High-Conversion CTA Card (Spans 2 cols) */}
            <div className="lg:col-span-2 sticky top-24">
              <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-[3rem] p-10 text-white shadow-[0_30px_100px_-20px_rgba(234,88,12,0.4)] relative overflow-hidden group">
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute top-0 right-0 p-8 opacity-20 text-9xl font-black">?</div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-8 border border-white/30 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-4xl">🎓</span>
                  </div>
                  
                  <h2 className="text-3xl font-black mb-4 leading-tight">
                    Confusion ho rahi hai? <br /> Humse puchiye!
                  </h2>
                  <p className="text-orange-100 font-medium mb-10 opacity-90 leading-relaxed">
                    Hamare experts aapke profile ke hisab se best college suggest karenge. Yeh bilkul free hai!
                  </p>

                  <button
                    onClick={() => setOpenCounselling(true)}
                    className="group w-full bg-white text-orange-600 py-6 rounded-2xl font-black text-xl transition-all duration-300 hover:bg-slate-900 hover:text-white flex items-center justify-center gap-3 shadow-xl"
                  >
                    FREE COUNSELLING 
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </button>

                  <div className="mt-10 pt-8 border-t border-white/20 w-full">
                    <p className="text-sm font-bold text-orange-200 uppercase tracking-widest mb-4">Trusted by 15,000+ Students</p>
                    <div className="flex justify-center -space-x-3">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-orange-600 bg-orange-200 flex items-center justify-center text-[10px] font-bold text-orange-800">👤</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}