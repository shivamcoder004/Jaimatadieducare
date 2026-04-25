"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Baad mein ye data Firebase se aayega
const JOBS_DATA = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Tech Mahindra",
    location: "Bangalore / Remote",
    salary: "₹6 - ₹12 LPA",
    type: "Full-Time",
    category: "Engineering"
  },
  {
    id: 2,
    role: "Staff Nurse",
    company: "Apollo Hospital",
    location: "Hyderabad",
    salary: "₹4 - ₹7 LPA",
    type: "Full-Time",
    category: "Nursing"
  },
  {
    id: 3,
    role: "Marketing Manager",
    company: "Edu-Tech Corp",
    location: "Delhi NCR",
    salary: "₹8 - ₹15 LPA",
    type: "Contract",
    category: "Management"
  },
];

export default function JobsPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Engineering", "Nursing", "Management", "MBA"];

  const filteredJobs = filter === "All" 
    ? JOBS_DATA 
    : JOBS_DATA.filter(job => job.category === filter);

  return (
    <div className="min-h-screen bg-[#0a1425] text-white pt-24 pb-12 px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Direct <span className="text-orange-500">Placement</span> Portal
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We don't just provide admissions; we secure your future. Explore exclusive job opportunities for our alumni and students.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === cat 
              ? "bg-[#F4B400] text-black" 
              : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div 
            key={job.id} 
            className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-[#F4B400]/50 transition-all hover:-translate-y-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="bg-[#F4B400]/10 text-[#F4B400] text-xs px-3 py-1 rounded-lg font-bold uppercase tracking-wider">
                  {job.type}
                </span>
                <span className="text-gray-500 text-sm">{job.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F4B400] transition-colors">
                {job.role}
              </h3>
              <p className="text-gray-400 font-medium mb-4">{job.company}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>📍</span> {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>💰</span> {job.salary}
                </div>
              </div>
            </div>

          <Link href="/Job/apply" className="w-full block">
  <button className="w-full bg-white/10 group-hover:bg-[#F4B400] text-white group-hover:text-black py-3 rounded-xl font-bold transition-all">
    Apply Now
  </button>
</Link>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No jobs found in this category. Stay tuned!
        </div>
      )}
    </div>
  );
}