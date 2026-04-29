"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useTenant } from "@/app/context/TenantContext";

export default function CategoryPage() {
  const { slug } = useParams(); // URL se category slug lene ke liye
  const { tenant, loading: tenantLoading } = useTenant();
  
  const [category, setCategory] = useState<any>(null);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (tenantLoading || !tenant?.clientId || !slug) return;

      try {
        setLoading(true);

        // 1. Fetch Category Details (Firestore se)
        const categoryQ = query(
          collection(db, "categories"),
          where("adminId", "==", tenant.clientId),
          where("name", "==", slug) // Aapne field 'name' batayi hai (e.g. "medical")
        );

        const catSnap = await getDocs(categoryQ);
        
        if (!catSnap.empty) {
          const catData = catSnap.docs[0].data();
          setCategory(catData);

          // 2. Fetch Courses under this category for THIS Admin
          const coursesQ = query(
            collection(db, "courses"),
            where("adminId", "==", tenant.clientId),
            where("category", "==", slug) // 'medical' matches 'medical'
          );

          const courseSnap = await getDocs(coursesQ);
          const courseList = courseSnap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setCourses(courseList);
        }
      } catch (error) {
        console.error("Error fetching category/courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, tenant, tenantLoading]);

  // Loading State
  if (loading || tenantLoading) {
    return <div className="p-20 text-center font-bold text-blue-600">Loading {slug} courses...</div>;
  }

  // Not Found State
  if (!category) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">Category Not Found ❌</h1>
        <p className="text-gray-500 mt-2">Is admin ke liye ye category available nahi hai.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-black text-gray-800 capitalize">
        {category.title || category.name}
      </h1>

      <p className="mt-3 text-gray-500 max-w-2xl">
        {category.description || `Explore all courses under ${category.name}.`}
      </p>

      {/* Course List Dynamic Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                  {course.intro || course.scope} 
                </p>
              </div>

              <Link
                href={`/course/${course.slug}`}
                className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full py-10 text-center text-gray-400 italic">
            No courses found in this category for this admin.
          </div>
        )}
      </div>

      {/* Counseling Section */}
      <div className="mt-16 text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800">
          Need Help Choosing the Right Course?
        </h2>
        <p className="text-gray-500 mt-2">
          Talk to our expert counselors and get personalized guidance.
        </p>

        <a
          href="https://wa.me/8409463997?text=Hello%20Sir,%20I%20need%20guidance%20for%20admission"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block px-8 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition shadow-lg shadow-green-100"
        >
          Get Free Counseling on WhatsApp
        </a>
      </div>
    </div>
  );
}