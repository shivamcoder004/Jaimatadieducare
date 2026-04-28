"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useTenant } from "@/app/context/TenantContext"; // Tenant context se adminId lenge

export default function JobsPage() {
  const { tenant, loading: tenantLoading } = useTenant();
  const [dbJobs, setDbJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Engineering", "Nursing", "Management", "MBA", "BCA"];

  useEffect(() => {
    const fetchJobs = async () => {
      // 1. Check if tenant is loaded
      if (tenantLoading || !tenant?.clientId) return;

      try {
        setLoading(true);
        // 2. Query Firebase: Get jobs for this specific admin
        const jobsRef = collection(db, "jobs");
        const q = query(
          jobsRef, 
          where("adminId", "==", tenant.clientId),
          orderBy("createdAt", "desc") // Latest jobs pehle dikheingi
        );

        const querySnapshot = await getDocs(q);
        const jobsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setDbJobs(jobsList);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [tenant, tenantLoading]);

  // 3. Client-side Filtering
  const filteredJobs = filter === "All" 
    ? dbJobs 
    : dbJobs.filter(job => job.category === filter);

  if (loading || tenantLoading) {
    return <div className="min-h-screen bg-[#0a1425] flex items-center justify-center text-white">Loading Careers...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0a1425] text-white pt-24 pb-12 px-6">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Direct <span className="text-orange-500">Placement</span> Portal
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We secure your future. Explore exclusive job opportunities for our students.
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
                <span className="bg-[#F4B400]/10 text-[#F4B400] text-[10px] px-3 py-1 rounded-lg font-bold uppercase tracking-wider">
                  {job.type || "Full-Time"}
                </span>
                <span className="text-gray-500 text-xs font-bold uppercase">{job.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F4B400] transition-colors">
                {job.role}
              </h3>
              <p className="text-gray-400 font-medium mb-4">{job.company}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-orange-500">📍</span> {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-orange-500">💰</span> {job.salary}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-orange-500">🎓</span> {job.qualification}
                </div>
              </div>
            </div>

            {/* Apply Button - Pass Job ID in URL if needed */}
            <Link href={`/Job/apply?jobId=${job.id}`} className="w-full block">
              <button className="w-full bg-white/10 group-hover:bg-[#F4B400] text-white group-hover:text-black py-3 rounded-xl font-bold transition-all">
                Apply Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {!loading && filteredJobs.length === 0 && (
        <div className="text-center py-20 text-gray-500 bg-white/5 rounded-3xl border border-dashed border-white/10 max-w-6xl mx-auto">
          No jobs found in this category. Stay tuned!
        </div>
      )}
    </div>
  );
}