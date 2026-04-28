"use client";
import React, { useState, useEffect, Suspense } from 'react';

import { useTenant } from "@/app/context/TenantContext";
import Link from 'next/link';
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useSearchParams, useRouter } from "next/navigation";
import { LogIn, Send } from "lucide-react";
 function ApplyJobContent() {
  const { tenant } = useTenant();

  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams.get('jobId'); // URL se Job ID nikalna

  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

 

const [formData, setFormData] = useState({
    phone: "",
    qualification: "B.Tech / B.E.",
    resumeLink: "",
    message: ""
  });


  // 1. Check Login Status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);


const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return alert("Please login first!");
if (!tenant?.clientId) return alert("System Error: Admin ID missing.");

    setSubmitting(true);
    try {
      // 2. Save Application to Firestore
      await addDoc(collection(db, "job_applications"), {
        jobId: jobId || "General Application",
        adminId: tenant.clientId,
        userId: user.uid,
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
        ...formData,
        status: "pending",
        appliedAt: serverTimestamp(),
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Login Check UI
  if (authLoading) return <div className="min-h-screen bg-[#0a1425] flex items-center justify-center text-white">Verifying Session...</div>;



if (!user) {
    return (
      <div className="min-h-screen bg-[#0a1425] flex items-center justify-center px-6">
        <div className="text-center bg-white/5 p-10 rounded-3xl border border-white/10 max-w-md">
          <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
            <LogIn size={40} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Login Required</h2>
          <p className="text-gray-400 mb-8">Sirf logged in users hi job ke liye apply kar sakte hain. Pehle login karein.</p>
          <button onClick={() => router.push("/login")} className="w-full bg-[#F4B400] text-black font-bold py-3 rounded-xl">
            Go to Login
          </button>
        </div>
      </div>
    );
  }


  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a1425] flex items-center justify-center px-6">
        <div className="text-center bg-white/5 p-10 rounded-3xl border border-white/10 max-w-md">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-white mb-4">Application Sent!</h2>
          <p className="text-gray-400 mb-8">Humari team aapki profile review karke 24-48 hours mein contact karegi.</p>
          <Link href="/Job" className="bg-[#F4B400] text-black px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block">
           Explore More Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1425] text-white pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/Job" className="text-[#F4B400] flex items-center gap-2 mb-8 hover:underline">
          ← Back to All Jobs
        </Link>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Job <span className="text-orange-500">Application</span></h1>
          <p className="text-gray-400 mb-10">Details bhariye, humari placement team aapko guide karegi.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <input required type="text"  value={user?.displayName || ""} readOnly placeholder="Rahul Kumar" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input required type="email" 
                placeholder="rahul@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number (WhatsApp)</label>
                <input required type="tel" placeholder="+91 00000 00000"
                onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Highest Qualification</label>
                <select 
                value={formData.qualification}
  onChange={(e) => setFormData({...formData, qualification: e.target.value})}
                className="w-full bg-[#1a2435] border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none transition-all text-white">
                  <option>B.Tech / B.E.</option>
                  <option>MBA / PGDM</option>
                  <option>BCA / MCA</option>
                  <option>B.Sc Nursing</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

          <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Resume Link (Google Drive/Dropbox)</label>
              <input required type="url" placeholder="https://drive.google.com/..." 
                onChange={(e) => setFormData({...formData, resumeLink: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Skills & Cover Letter</label>
              <textarea rows={4} placeholder="Briefly describe your experience..." 
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#F4B400] outline-none resize-none"></textarea>
            </div>

           <button type="submit" disabled={submitting} className="w-full bg-[#F4B400] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-orange-500 transition-all">
              {submitting ? "Submitting..." : <><Send size={18} /> Submit Application</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default function ApplyJobPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a1425] flex items-center justify-center text-white">
        Verifying Session...
      </div>
    }>
      <ApplyJobContent />
    </Suspense>
  );}