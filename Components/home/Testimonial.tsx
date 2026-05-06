"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db, auth } from "@/lib/firebase"; // Firebase import karein
import { collection, addDoc, getDocs,query, where, onSnapshot, serverTimestamp } from "firebase/firestore";
import { useTenant } from "@/app/context/TenantContext";
import Link from "next/link";
import Image from "next/image"; // Agar image use karni ho toh



// --- Types ---
interface StudentReview {
  id?: string;
  name: string;
  course:string;
  designation: string;
  rating: number;
  review: string;
  photoURL?: string;
  isPublished: boolean;
}

export default function TestimonialSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn] = useState(true); 
  const scrollRef = useRef<HTMLDivElement>(null);
    const [siteName, setSiteName] = useState("Future Focus");
    const { tenant, loading: tenantLoading } = useTenant();
  

// const { tenant } = useTenant(); // Admin ID lene ke liye
 
const [reviews, setReviews] = useState<StudentReview[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    course:'',
    designation: '',
    rating: 5,
    review: ''
  });

  // const reviews: StudentReview[] = [
  //   {
  //     name: "Swapnil",
  //     designation: "MBBS Student",
  //     rating: 5,
  //     review: "I always recommend Crucial Admission Counselor to others because of their dedication. They work professionally to get me admission in college.",
  //   },
  //   {
  //     name: "Rahul Verma",
  //     designation: "B.Tech CSE",
  //     rating: 5,
  //     review: "The counseling process was so smooth. I was confused between branches, but Educare Ho experts guided me based on my rank.",
  //   },
  //   {
  //     name: "Ananya Iyer",
  //     designation: "Class 12th",
  //     rating: 4,
  //     review: "Professionalism at its best. They don't just suggest colleges; they build your career roadmap. Highly recommended!",
  //   }
  // ];


// --- 1. Fetch ONLY Published Reviews ---
  useEffect(() => {
    if (!tenant?.clientId) return;

    // Sirf wo reviews dikhao jo Published hain aur is Admin ke hain
    const q = query(
      collection(db, "testimonials"),
      where("adminId", "==", tenant.clientId),
      where("isPublished", "==", true) 
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as StudentReview[];
      setReviews(data);
    });

    return () => unsubscribe();
  }, [tenant]);

  // --- 2. Handle Submit (Save as Draft/Unpublished) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenant?.clientId) return alert("System error: Admin not found");

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "testimonials"), {
        ...formData,
        adminId: tenant.clientId,
        isPublished: false, // Default: Admin approve karega tab dikhega
        createdAt: serverTimestamp(),
        photoURL: auth.currentUser?.photoURL || "", 
      });

      alert("✨ Thank you for your appreciation!  It will be live on our wall of fame as soon as possible. Keep inspiring!");
      setFormData({ name: '', course:'', designation: '', rating: 5, review: '' });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving review:", error);
      alert("Submission failed!");
    } finally {
      setIsSubmitting(false);
    }
  };




// --- 2. Fetch Site Name from Firebase ---
  useEffect(() => {
    const fetchSiteName = async () => {
      if (tenantLoading || !tenant?.clientId) return;

      try {
        const q = query(collection(db, "clients"), where("clientId", "==", tenant.clientId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const clientData = querySnapshot.docs[0].data();
          if (clientData.siteName) {
            setSiteName(clientData.siteName);
          }
        }
      } catch (error) {
        console.error("Error fetching siteName:", error);
      }
    };

    fetchSiteName();
  }, [tenant, tenantLoading]);







  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };




  // Site name ko split karna taaki "Focus" ya last word orange dikhe
  const nameParts = siteName.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastWord = nameParts[nameParts.length - 1];

  return (
    <section className="bg-[#fcfaf2] py-20 px-4 md:px-6 relative overflow-hidden group">
      
      {/* --- COLLEGE TEXTURE & LEAF BACKGROUND --- */}
      {/* Blueprint/Grid Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23064e3b' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Floating Leaves (SVG) */}
      <div className="absolute top-10 left-10 text-emerald-900/10 -rotate-12 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,11 17,8 17,8Z" /></svg>
      </div>
      <div className="absolute bottom-10 right-10 text-emerald-900/10 rotate-180 pointer-events-none">
        <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,11 17,8 17,8Z" /></svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-8 bg-emerald-700"></span>
<p className="text-emerald-800 font-bold text-xs tracking-[0.3em] uppercase">
                  {firstName} <span className='text-amber-400'>{lastWord}</span>
                </p>            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900">Student <span className="text-emerald-700 italic">Success Stories</span></h2>
            <p className="text-slate-500 mt-3 font-medium max-w-md">Real experiences from students who found their dream campus with Our counserlor.</p>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => isLoggedIn ? setIsModalOpen(true) : alert("Please login!")}
              className="group relative px-8 py-4 bg-emerald-900 text-white rounded-full font-bold transition-all hover:bg-emerald-800 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Share Your Journey</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </button>
            
            <div className="hidden md:flex gap-3">
              <button onClick={() => scroll('left')} className="p-4 rounded-full bg-white border border-emerald-100 text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all shadow-sm">←</button>
              <button onClick={() => scroll('right')} className="p-4 rounded-full bg-white border border-emerald-100 text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all shadow-sm">→</button>
            </div>
          </div>
        </div>

        {/* --- Scroll Container --- */}
      <div ref={scrollRef} className="flex overflow-x-auto pb-12 pt-4 gap-6 md:gap-10 scrollbar-hide snap-x snap-mandatory scroll-smooth">
          {reviews.length > 0 ? (
            reviews.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl border-b-4 border-emerald-800 shadow-sm p-8 flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[calc(33.33%-1.5rem)] snap-center">
                 <div className="flex items-center gap-4 mb-6">
                  <img src={item.photoURL || `https://ui-avatars.com/api/?name=${item.name}`} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-emerald-700 text-xs font-bold uppercase">{item.designation}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{item.review}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(item.rating)].map((_, i) => <span key={i} className="text-amber-500 text-xs">★</span>)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-400 italic">No stories published yet.</p>
          )}
        </div>
      </div>



      {/* --- Feedback Modal --- */}
    {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-emerald-950/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-white w-full max-w-lg p-10 rounded-[2rem] z-10 shadow-2xl">
            <h3 className="text-2xl font-serif mb-6">Submit Your Story</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
             
             
           <input type="text" placeholder="Full Name" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />

             
              <input type="text" placeholder="College Name" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200" value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} />
               <input type="text" placeholder="Course Name" required className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200" value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} />

              <select className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200" value={formData.rating} onChange={(e) => setFormData({...formData, rating: Number(e.target.value)})}>
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                <option value="4">⭐⭐⭐⭐ 4 Stars</option>
              </select>
              <textarea placeholder="Describe your experience..." required className="w-full p-4 h-32 rounded-xl bg-slate-50 border border-slate-200 resize-none" value={formData.review} onChange={(e) => setFormData({...formData, review: e.target.value})} />
              <button disabled={isSubmitting} className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold uppercase hover:bg-emerald-800 transition-all">
                {isSubmitting ? "Submitting for Approval..." : "Publish Story"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}