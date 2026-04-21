


import { courses } from "@/app/data/courseData";
import { notFound } from "next/navigation";
import CounsellingModal from "@/Components/CounsellingForm";
import ApplyNowButton from "@/Components/ApplyNowButton";

// Next.js ko batana padega kaun kaun se pages exist karte hain
export async function generateStaticParams() {
  return Object.keys(courses).map((slug) => ({
    slug,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  // Next 15 fix (VERY IMPORTANT)
  const { slug } = await params;

  const course = courses[slug as keyof typeof courses];
   


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
  <h2 className="text-3xl font-bold">Top Colleges</h2>

  {course.colleges?.map((college, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 border"
    >
      <h3 className="text-xl font-bold text-blue-900">
        {college.name}
      </h3>

      <p className="text-gray-600">{college.location}</p>

      <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <p className="font-semibold">Study Programs</p>
          <p>{college.programs}</p>
        </div>

        <div>
          <p className="font-semibold">Entrance Exams</p>
          <p>{college.exams}</p>
        </div>

        <div>
          <p className="font-semibold">Fee Range</p>
          <p>{college.fees}</p>
        </div>

        <div>
          <p className="font-semibold">Ranking</p>
          <p>{college.ranking}</p>
        </div>
      </div>

      {/* <button 

      className="mt-5 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600">
        Apply Now
      </button> */}
      <ApplyNowButton />
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
