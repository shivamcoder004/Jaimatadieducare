import { collegeData } from "@/app/data/collegeData";
import { notFound } from "next/navigation";
import { MapPin, BookOpen, IndianRupee, GraduationCap, Phone } from "lucide-react";

export  function generateStaticParams() {
  const paths: { category: string; college: string }[] = [];
  Object.entries(collegeData).forEach(([category, data]) => {
    Object.keys(data.colleges).forEach((college) => {
      paths.push({ category, college });
    });
  });
  return paths;
}

// export default async function CollegeDetail({
//   params,
// }: {
//   params: Promise<{ category: string; college: string }>;
// }) {
//   const { category: categorySlug, college: collegeSlug } = await params;
//   const category = collegeData[categorySlug as keyof typeof collegeData];
//   if (!category) return notFound();
//   const college = category.colleges[collegeSlug as keyof typeof category.colleges];
//   if (!college) return notFound();



export default async function CollegeDetail({
  params,
}: {
  params: Promise<{ category: string; college: string }>;
}) {
  const { category: categorySlug, college: collegeSlug } = await params;

  // 1. Get the category safely
  const category = collegeData[categorySlug as keyof typeof collegeData];
  
  // 2. Add an early return if category doesn't exist (guards against 'never')
  if (!category) return notFound();

  // 3. Cast the college selection so TS knows it's a specific college object
  // This assumes your colleges are stored in an object called 'colleges'
  const college = (category.colleges as any)[collegeSlug];

  if (!college) return notFound();

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-10">

        {/* ================= LEFT BLOG CONTENT ================= */}
        <article className="lg:col-span-2">

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
            {college.name} Admission 2026: Fees, Courses, Eligibility & Placement
          </h1>

          {/* ⭐ ADS SLOT 1: Below Title (Horizontal Banner) */}
          {/* <div className="my-6">
            <AdSensePlaceholder format="horizontal" label="In-Article Top" />
          </div> */}

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {college.about}
          </p>

          {/* About Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 text-gray-800">
              About {college.name}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {college.about}
            </p>
          </section>

          {/* Courses */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 flex items-center gap-2 text-gray-800">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Courses Offered
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              {college.courses}
            </div>
          </section>

          {/* ⭐ ADS SLOT 2: Mid-Content (Rectangular) */}
          {/* <div className="my-10">
            <AdSensePlaceholder format="rectangle" label="Mid-Content Ad" />
          </div> */}

          {/* Fees */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 flex items-center gap-2 text-gray-800">
              <IndianRupee className="w-5 h-5 text-green-600" />
              Fee Structure
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              {college.fees}
            </div>
          </section>

          {/* Eligibility & Placement */}
          <section className="grid md:grid-cols-2 gap-6 mb-10">
             <div>
                <h2 className="text-xl font-bold mb-4 border-l-4 border-purple-600 pl-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                    Eligibility
                </h2>
                <div className="bg-white p-5 rounded-xl border border-gray-200 h-full">
                    {college.eligibility}
                </div>
             </div>
             <div>
                <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-600 pl-3">
                    Placement
                </h2>
                <div className="bg-white p-5 rounded-xl border border-gray-200 h-full">
                    {college.placement}
                </div>
             </div>
          </section>

          {/* ⭐ ADS SLOT 3: Bottom of Article */}
          {/* <div className="mt-10 border-t pt-8">
            <AdSensePlaceholder format="horizontal" label="Bottom Banner" />
          </div> */}

        </article>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="space-y-6">

          {/* Quick Info Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-24">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Information</h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                <span>{college.location}</span>
              </div>
              <div className="flex gap-2">
                <BookOpen className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                <span>{college.courses}</span>
              </div>
              <div className="flex gap-2 border-t pt-3 font-semibold text-gray-900">
                <IndianRupee className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                <span>Total Fees: {college.fees}</span>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-100">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Get Free Counselling</h3>
            <p className="text-xs text-gray-500 mb-4">Join 5000+ students who applied this month</p>
            <input className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-orange-200 outline-none" placeholder="Your Name" />
            <input className="w-full border p-3 rounded-lg mb-3 focus:ring-2 focus:ring-orange-200 outline-none" placeholder="Mobile Number" />
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]">
              <Phone className="w-4 h-4" />
              Apply Now
            </button>
          </div>

          {/* ⭐ ADS SLOT 4: Sidebar Sticky Ad */}
          {/* <div className="sticky top-24">
             <AdSensePlaceholder format="vertical" label="Sidebar Sticky Ad" />
             <p className="text-[10px] text-center text-gray-400 mt-2 uppercase tracking-widest">Sponsored Content</p>
          </div> */}

        </aside>
      </div>
    </div>
  );
}

// Helper Component for Ads
function AdSensePlaceholder({ format, label }: { format: 'horizontal' | 'vertical' | 'rectangle', label: string }) {
  const styles = {
    horizontal: "w-full h-24",
    vertical: "w-full h-[600px]",
    rectangle: "w-full h-64"
  };

  return (
    <div className={`${styles[format]} bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 overflow-hidden`}>
      <span className="text-xs font-bold uppercase mb-1">Ad Unit</span>
      <span className="text-[10px] italic">{label}</span>
      {/* In the future, you will replace this div with your AdSense code:
          <ins className="adsbygoogle" ... /> 
      */}
    </div>
  );
}