import Link from "next/link";
import { categories } from "@/app/data/categoryData";
import { courses } from "@/app/data/courseData";


type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const category = categories[slug as keyof typeof categories];

  if (!category) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">
          Category Not Found ❌
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">

      <h1 className="text-3xl md:text-4xl font-black text-gray-800">
        {category.title} Courses
      </h1>

      <p className="mt-3 text-gray-500 max-w-2xl">
        Explore all courses under {category.title}. Click on any course to see
        full details, eligibility, fees, entrance exams and career scope.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {category.courses.map((courseSlug) => {
          const course = courses[courseSlug as keyof typeof courses];

          if (!course) return null;

          return (
            <div
              key={courseSlug}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-gray-800">
                {course.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {course.intro}
              </p>

              <Link
                href={`/course/${courseSlug}`}
                className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          Need Help Choosing the Right Course?
        </h2>

        <p className="text-gray-500 mt-2">
          Talk to our expert counselors and get personalized guidance.
        </p>

       <a
  href="https://wa.me/8409463997?text=Hello%20Sir,%20I%20need%20guidance%20for%20course%20admission"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-block px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
>
  Get Free Counseling on WhatsApp
</a>
      </div>
    </div>
  );
}