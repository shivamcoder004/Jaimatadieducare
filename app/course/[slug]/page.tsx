
"use client";

import { useEffect, useState } from "react";
import { courses as localCourses } from "@/app/data/courseData";
import { notFound,useParams } from "next/navigation";


import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useTenant } from "../../context/TenantContext";

import CounsellingModal from "@/Components/CounsellingForm";
import ApplyNowButton from "@/Components/ApplyNowButton";

// Next.js ko batana padega kaun kaun se pages exist karte hain
// export async function generateStaticParams() {
//   return Object.keys(courses).map((slug) => ({
//     slug,
//   }));
// }

export default function CoursePage() {  


  const { slug } = useParams();
  const { tenant, loading: tenantLoading } = useTenant();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

   


useEffect(() => {
  const fetchFullData = async () => {
    // 1. Check karo ki tenant load hua hai ya nahi
    if (tenantLoading || !slug) return;

    try {
      setLoading(true);
      let finalCourseData = null;

      // 2. FIREBASE SE COURSE FETCH KARO
      if (tenant?.clientId) {
        console.log("🔍 Fetching Course for:", slug);
        
        const courseQ = query(
          collection(db, "courses"),
          where("adminId", "==", tenant.clientId),
          where("slug", "==", slug) // Make sure Firestore mein 'slug' field hai
        );

        const courseSnap = await getDocs(courseQ);

        if (!courseSnap.empty) {
          const courseData = courseSnap.docs[0].data();
          console.log("✅ Course Found:", courseData.title);

          // 3. AB IS COURSE KI CATEGORY KE COLLEGES FETCH KARO
          const collegeQ = query(
            collection(db, "colleges"),
            where("adminId", "==", tenant.clientId),
            where("categorySlug", "==", courseData.category) // 'engineering' ya 'medical'
          );

          const collegeSnap = await getDocs(collegeQ);
          const collegeList = collegeSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          // Course aur Colleges ko merge kar do
          finalCourseData = { ...courseData, colleges: collegeList };
        }
      }

      // 4. FALLBACK TO JSON (Agar Firebase mein ye course nahi mila)
      if (!finalCourseData) {
        console.log("📚 Firebase empty, trying JSON fallback...");
        const localData = localCourses[slug as keyof typeof localCourses];
        if (localData) {
          finalCourseData = localData;
        }
      }

      setCourse(finalCourseData);
    } catch (err) {
      console.error("🔥 Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchFullData();
}, [slug, tenant, tenantLoading]);

  if (loading || tenantLoading) return <div className="p-20 text-center">Loading Course Details...</div>;
  if (!course) return notFound();
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {course.title} Admission 2026
          </h1>

          <p className="text-lg text-blue-100 max-w-3xl">
            Complete guidance about {course.title} admission, eligibility,
            entrance exams, fees structure and top colleges in India.
          </p>

          <button className="mt-6 bg-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600">
            Get Free Counselling
          </button>
        </div>
      </div>


      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-10">

        {/* BLOG CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          {/* About Course */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              What is {course.title} ?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {course.title} is a professional degree program. Students learn
              practical and theoretical knowledge related to the industry.
              After completing {course.title}, students can get jobs in private
              companies, government sector and also can pursue higher studies.
            </p>
          </section>

          {/* Eligibility */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Minimum qualification: {course.eligibility}</li>
              <li>Minimum 45% – 60% marks required</li>
              <li>Entrance exam may be required</li>
            </ul>
          </section>

          {/* Entrance Exams */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">Entrance Exams</h2>
            <p className="text-gray-700">
              {course.entrance}
            </p>
          </section>

          {/* Fees */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">Fees Structure</h2>
            <p className="text-gray-700">{course.fees}</p>
          </section>

          {/* Career Scope */}
          <section className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-bold mb-4">Career Scope</h2>
            <p className="text-gray-700">{course.scope}</p>
          </section>


          {/* ================= TOP COLLEGES ================= */}
         
<section className="space-y-6">
  <h2 className="text-3xl font-bold">Top Colleges for {course.title}</h2>

{course.colleges?.map((college: any, index: number) => (
         <div key={index} className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-orange-500">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-blue-900">{college.name}</h3>
          <p className="text-gray-500 flex items-center gap-1">
             📍 {college.location}
          </p>
        </div>
        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
          Placement: {college.placementpercentage}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 bg-gray-50 p-4 rounded-xl text-sm">
        <div>
          <p className="text-gray-400">Fees</p>
          <p className="font-semibold text-gray-700">{college.fees}</p>
        </div>
        <div>
          <p className="text-gray-400">Avg. Package</p>
          <p className="font-semibold text-gray-700">{college.placement?.split(',')[0] || "N/A"}</p>
        </div>
        <div>
          <p className="text-gray-400">Admission</p>
          <p className="font-semibold text-gray-700 text-xs">{college.admission}</p>
        </div>
        <div>
          <p className="text-gray-400">Hostel</p>
          <p className="font-semibold text-gray-700">Available</p>
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <ApplyNowButton />
        <button className="text-blue-900 font-semibold text-sm hover:underline">
          View Details
        </button>
      </div>
    </div>
  ))}
</section>









        </div>


        {/* RIGHT SIDEBAR (LEAD FORM) */}
        <aside className="space-y-6">

          {/* Counselling Form */}
          <div className="bg-white p-6 rounded-2xl shadow sticky top-24">
            <h3 className="text-xl font-bold mb-4">
              Free Counselling
            </h3>

            <input className="w-full border p-3 rounded mb-3" placeholder="Your Name"/>
            <input className="w-full border p-3 rounded mb-3" placeholder="Mobile Number"/>
            <input className="w-full border p-3 rounded mb-3" placeholder="Preferred Course"/>

            <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600">
              Submit
            </button>
          </div>

        </aside>

      </div>
    </div>
  );
}
