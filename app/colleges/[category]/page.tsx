"use client"; 
import React, { useState, useEffect, use } from 'react';
import { MapPin, GraduationCap, Trophy, Search,LocateIcon,Info,Building2 ,Phone, MessageCircle, ArrowRight} from 'lucide-react'; 
import Link from 'next/link'; // ✅ Link import kiya
import { collegeData } from "@/app/data/collegeData"; 
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useTenant } from "../../context/TenantContext";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {  params 

  const { tenant, loading: tenantLoading } = useTenant();
  const unwrappedParams = use(params);
  const categorySlug = unwrappedParams.category;

  
  const category = (collegeData as any)[categorySlug];
  const [colleges, setColleges] = useState<any[]>([]);
  const [categoryInfo, setCategoryInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("All");
  
  if (!category) return <div className="p-20 text-center font-bold">Category Not Found</div>;

  // ✅ Hum Object.entries use karenge taaki humein 'slug' mil sake navigation ke liye
  const collegesEntry = Object.entries(category.colleges || {});
  
const cities = ["All", ...new Set(colleges.map(c => {
  // Agar location "Patna, Bihar" hai toh sirf "Patna" lega
  return c.location ? c.location.split(',')[0].trim() : "Unknown";
}))];

  const filteredColleges = selectedCity === "All" 
  ? colleges 
  : colleges.filter(c => c.location?.toLowerCase().includes(selectedCity.toLowerCase()));

// if (loading) return <div className="p-20 text-center">Loading Colleges...</div>;

useEffect(() => {
    const fetchData = async () => {
      if (tenantLoading || !tenant?.clientId) return;

      try {
        setLoading(true);
        
        // 1. Fetch Category Details (For Title & Intro)
        const catQ = query(
          collection(db, "categories"), 
          where("adminId", "==", tenant.clientId),
          where("slug", "==", categorySlug)
        );
        const catSnap = await getDocs(catQ);
        if (!catSnap.empty) {
          setCategoryInfo(catSnap.docs[0].data());
        }

        // 2. Fetch Colleges for this Category
        const colQ = query(
          collection(db, "colleges"),
          where("adminId", "==", tenant.clientId),
          where("categorySlug", "==", categorySlug)
        );
        const colSnap = await getDocs(colQ);
        const colList = colSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setColleges(colList);

      } catch (err) {
        console.error("Error fetching colleges:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categorySlug, tenant, tenantLoading]);


  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white">

{/* Background Glow */}
<div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>

{/* Pattern */}
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]"></div>

<div className="relative max-w-6xl mx-auto px-4 py-24 text-center">

  {/* Tagline */}
  <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-sm mb-6">
    India's Trusted Admission Counsellor
  </span>

  {/* Heading */}
  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
{categoryInfo?.title || `${categorySlug} Colleges`}  </h1>

  {/* Description */}
  <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10">
{categoryInfo?.description || `Explore top-rated ${categorySlug} institutions and find the best fit for your career.`}
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">

    {/* Call Now */}
    {/* <a
      href="tel:+919876543210"
      className="flex items-center justify-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
    >
      <Phone className="w-5 h-5" />
      Call Now
    </a> */}

    {/* WhatsApp */}
    <a
      href="https://wa.me/6207541303"
      target="_blank"
      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
    >
      <MessageCircle className="w-5 h-5" />
      WhatsApp Counselling
    </a>

    {/* Explore */}
    {/* <button className="flex items-center justify-center gap-2 border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10 transition">
      Explore Colleges
      <ArrowRight className="w-5 h-5" />
    </button> */}

  </div>

</div>
</div>

      <div className="max-w-6xl mx-auto px-4 -mt-0">
        {/* --- FILTER BAR --- */}
        <div className="bg-white p-5 rounded-2xl shadow-xl flex flex-wrap gap-4 items-center justify-between border">
          <div className="flex items-center gap-3">
            <Search className="text-blue-600" size={20} />
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="font-bold text-gray-800 border-none focus:ring-0 outline-none"
            >
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
          </div>
          <p className="text-sm font-medium text-gray-500">Found {filteredColleges.length} Colleges</p>
        </div>

        {/* --- COLLEGE CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pb-24">
          {filteredColleges.map((college) => (
            <Link key={college.id} href={`/colleges/${categorySlug}/${college.id}`} className="group">
              <CollegeCard college={college} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Card Component (Sirf Design ke liye) ---
function CollegeCard({ college }: any) {
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full">
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:rotate-6 transition-transform">
             <GraduationCap className="text-blue-800" size={28} />
          </div>
          {college.featured && (
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
          {college.name}
        </h3>
        
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-2">
          <MapPin size={16} className="text-red-400" />
          {college.location}
         

        </div>
        <p className="flex gap-2 text-sm text-gray-600">
  <Building2 className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
  <span>{college.about}</span>
</p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 mt-auto">
          <div className="bg-slate-50 p-4 border-r border-gray-100">
            <p className="text-[10px] text-gray-400 uppercase font-black mb-1">Fees</p>
            <p className="text-blue-900 font-bold text-sm">{college.fees}</p>
          </div>
          <div className="bg-slate-50 p-4">
            <p className="text-[10px] text-gray-400 uppercase font-black mb-1">Placement</p>
            <p className="text-gray-700 font-bold text-sm truncate">{college.placementpercentage}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold text-center group-hover:bg-orange-500 transition-colors shadow-lg">
            View Details →
          </div>
        </div>
      </div>
    </div>
  );
}