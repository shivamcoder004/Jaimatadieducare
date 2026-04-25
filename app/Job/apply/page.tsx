"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ApplyJobPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan Firebase logic aayega baad mein
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a1425] flex items-center justify-center px-6">
        <div className="text-center bg-white/5 p-10 rounded-3xl border border-white/10 max-w-md">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-white mb-4">Application Sent!</h2>
          <p className="text-gray-400 mb-8">Humari team aapki profile review karke 24-48 hours mein contact karegi.</p>
          <Link href="/jobs" className="bg-[#F4B400] text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block">
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1425] text-white pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/jobs" className="text-[#F4B400] flex items-center gap-2 mb-8 hover:underline">
          ← Back to All Jobs
        </Link>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Job <span className="text-orange-500">Application</span></h1>
          <p className="text-gray-400 mb-10">Details bhariye, humari placement team aapko guide karegi.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <input required type="text" placeholder="Rahul Kumar" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input required type="email" placeholder="rahul@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number (WhatsApp)</label>
                <input required type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Highest Qualification</label>
                <select className="w-full bg-[#1a2435] border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all text-white">
                  <option>B.Tech / B.E.</option>
                  <option>MBA / PGDM</option>
                  <option>BCA / MCA</option>
                  <option>B.Sc Nursing</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Upload Resume (Link or Drive Link)</label>
              <input type="url" placeholder="https://drive.google.com/your-resume" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all" />
              {/* <p className="text-[10px] text-gray-500 italic">*Abhi ke liye Google Drive link dein, Firebase storage baad mein add karenge.</p> */}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Why should we hire you?</label>
              <textarea rows={4} placeholder="Briefly describe your skills..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#F4B400] text-black font-bold py-4 rounded-2xl text-lg hover:bg-orange-500 transition-all shadow-xl shadow-orange-500/10">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}