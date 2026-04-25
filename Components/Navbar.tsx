"use client";

import Link from "next/link";
import Image from "next/image";
import { courses} from "@/app/data/courseData";
import { collegeData } from "@/app/data/collegeData";
import CounsellingModal from "./CounsellingForm";
import { usePathname } from "next/navigation";


import { useState,useEffect } from "react";
import { Menu, X, ChevronDown, User, Home,
    Newspaper,
    BookOpen,
    GraduationCap,
    Stethoscope,
    Pill,
    School,
    Info,
    Phone,
    UserPlus,
    LogIn,
    Briefcase,
    ChevronRight } from "lucide-react";

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [openCounselling, setOpenCounselling] = useState(false);
const pathname = usePathname();

  // body scroll lock
useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);
  
// useEffect(() => {
//   const timer = setTimeout(() => {
//     setOpenCounselling(true);
//   }, 2000); // 2 sec delay (optional)

//   return () => clearTimeout(timer);
// }, []);
useEffect(() => {
  // 👇 condition
  if (pathname === "/" || pathname.startsWith("/course")|| pathname.startsWith("/contact") || pathname.startsWith("/about")) {

    setOpenCounselling(false);

    const timer = setTimeout(() => {
      setOpenCounselling(true);
    }, 1000);

    return () => clearTimeout(timer);
  }

}, [pathname]);

  return (
    
    <>
    
          <CounsellingModal open={openCounselling} setOpen={setOpenCounselling} />

    <header className="sticky top-0 z-50 bg-white shadow-md border-b">


      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LEFT : LOGO */}
        <Link
  href="/"
  className="flex items-center gap-2 sm:gap-3 group select-none"
>

  {/* Logo Image */}
  <div className="relative">
    <Image
      src="/future_focus.png"
      alt="Future Focus Logo"
      width={290}
      height={90}
      priority
      className="h-9 sm:h-10 lg:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Brand Name */}
  <div className="flex flex-col leading-tight">

    <span className="text-[10px] sm:text-xs tracking-[2px] text-orange-500 font-semibold uppercase">
     Future
    </span>

    <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-900 group-hover:text-orange-500 transition-colors duration-300">
      Focus
    </span>

  </div>

</Link>

    


        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex gap-8 items-center font-medium relative">

          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          {/* <Link href="/news" className="hover:text-orange-500 transition">News</Link> */}

          {/* COURSES */}
          <div
            className="relative"
            onMouseEnter={() => setCourseOpen(true)}
            onMouseLeave={() => setCourseOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-orange-500 transition ">
              Courses <ChevronDown size={16}/>
            </button>

            <div className={`dropdown w-64 ${courseOpen ? "dropdown-show" : ""}`}>
              {/* <ul className="space-y-3 border-t-2 border-orange-500 pt-3">
                <li><Link href="/Courses/btech" className="block hover:text-orange-500">B.Tech</Link></li>
                <li><Link href="/courses/bca" className="block hover:text-orange-500">BCA</Link></li>
                <li><Link href="/courses/bba" className="block hover:text-orange-500">BBA</Link></li>
                <li><Link href="/courses/mba" className="block hover:text-orange-500">MBA</Link></li>
                <li><Link href="/courses/mca" className="block hover:text-orange-500">MCA</Link></li>
              </ul> */}


<ul className="space-y-3 border-t-2 border-orange-500 pt-3">
  {(Object.keys(courses) as Array<keyof typeof courses>).map((slug) => (
    <li key={slug}>
      <Link 
        href={`/course/${slug}`} 
        className="block hover:text-orange-500 capitalize"
      >
        {/* Ab TypeScript ko pata hai ki courses[slug] safe hai */}
        {courses[slug].title}
      </Link>
    </li>
  ))}
</ul>
            </div>
          </div>

          {/* COLLEGES */}
          <div
            className="relative"
            onMouseEnter={() => setCollegeOpen(true)}
            onMouseLeave={() => setCollegeOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-orange-500 transition">
              Colleges <ChevronDown size={16}/>
            </button>

            <div className={`dropdown w-72 ${collegeOpen ? "dropdown-show" : ""}`}>
              {/* <ul className="space-y-3 border-t-2 border-orange-500 pt-3">
                <li><Link href="/colleges/engineering" className="block hover:text-orange-500">Engineering</Link></li>
                <li><Link href="/colleges/medical" className="block hover:text-orange-500">Medical</Link></li>
                <li><Link href="/colleges/bpharma" className="block hover:text-orange-500">B Pharma</Link></li>
                <li><Link href="/colleges/bed" className="block hover:text-orange-500">B.Ed</Link></li>
                <li><Link href="/colleges/nursing" className="block hover:text-orange-500">Nursing</Link></li>
              </ul> */}


<ul className="space-y-3 border-t-2 border-orange-500 pt-3">

{Object.entries(collegeData).map(([slug, category]) => (
  <li key={slug}>
    <Link
      href={`/colleges/${slug}`}
      className="block hover:text-orange-500"
    >
      {category.title.replace("Colleges in India", "")}
    </Link>
  </li>
))}

</ul>
            </div>
          </div>

          <Link href="/about" className="hover:text-orange-500 transition">About</Link>
          <Link href="/Job" className="hover:text-orange-500 transition">JOb</Link>

          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </nav>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-4">

          {/* LOGIN */}
          <Link href="/login" className="flex items-center gap-1 text-gray-700 hover:text-orange-500">
            <User size={18}/> Login
          </Link>

          {/* REGISTER */}
          <Link
            href="/register"
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
          >
            Register
          </Link>

          {/* CTA */}
          <button
  onClick={() => setOpenCounselling(true)}
  className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition hover:scale-105 shadow-md"
>
  Free Counselling
</button>

        </div>

        {/* MOBILE MENU BUTTON (RIGHT SIDE) */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={30}/> : <Menu size={30}/>}
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
     {/* ===== MOBILE OVERLAY ===== */}
     <div
  className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 transition-all duration-900 ease-out lg:hidden ${
    mobileOpen ?"opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
  }`}
  onClick={() => setMobileOpen(false)}
/>

{/* ===== MOBILE DRAWER ===== */}
<div
  className={`fixed top-14 right-1 w-80 bg-white z-50 shadow-2xl rounded-2xl
  transform transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden
  ${mobileOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-24 opacity-0 pointer-events-none"}
`}
>

  <div className="p-5 space-y-5">

    {/* Header */}
    <div className="flex justify-between items-center border-b pb-3">
      <h2 className="text-xl font-bold text-blue-900">Menu</h2>
      <button
        onClick={() => setMobileOpen(false)}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <X size={24}/>
      </button>
    </div>

    {/* Home */}
    <Link onClick={()=>setMobileOpen(false)} href="/" 
      className="flex items-center gap-3 text-lg hover:text-orange-500 transition">
      <Home size={20} className="text-blue-600"/>
      Home
    </Link>

    {/* News */}
    {/* <Link onClick={()=>setMobileOpen(false)} href="/news"
      className="flex items-center gap-3 text-lg hover:text-orange-500 transition">
      <Newspaper size={20} className="text-blue-600"/>
      News
    </Link> */}

    {/* Courses */}
    <details className="group">
      <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold hover:text-orange-500">
        <div className="flex items-center gap-3">
          <BookOpen size={20} className="text-blue-600"/>
          Courses
        </div>
        <ChevronDown className="group-open:rotate-180 transition"/>
      </summary>

      {/* <div className="ml-7 mt-3 space-y-3 text-gray-700">

        <Link onClick={()=>setMobileOpen(false)} href="/courses/btech" className="block hover:text-orange-500">
          B.Tech
        </Link>

        <Link onClick={()=>setMobileOpen(false)} href="/courses/bca" className="block hover:text-orange-500">
          BCA
        </Link>

        <Link onClick={()=>setMobileOpen(false)} href="/courses/bba" className="block hover:text-orange-500">
          BBA
        </Link>

        <Link onClick={()=>setMobileOpen(false)} href="/courses/mba" className="block hover:text-orange-500">
          MBA
        </Link>

      </div> */}
      <ul className="space-y-3 border-t-2 border-orange-500 pt-3">
  {(Object.keys(courses) as Array<keyof typeof courses>).map((slug) => (
    <li key={slug}>
      <Link 
        href={`/course/${slug}`}
        onClick={() => setMobileOpen(false)} 
        className="block hover:text-orange-500 capitalize"
      >
        {/* Ab TypeScript ko pata hai ki courses[slug] safe hai */}
        {courses[slug].title}
      </Link>
    </li>
  ))}
</ul>
    </details>

    {/* Colleges */}
    <details className="group">
      <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold hover:text-orange-500">
        <div className="flex items-center gap-3">
          <GraduationCap size={20} className="text-blue-600"/>
          Colleges
        </div>
        <ChevronDown className="group-open:rotate-180 transition"/>
      </summary>

      <ul className="space-y-3 border-t-2 border-orange-500 pt-3">

{Object.entries(collegeData).map(([slug, category]) => (
  <li key={slug}>
    <Link
      href={`/colleges/${slug}`}
      onClick={() => setMobileOpen(false)} 

      className="block hover:text-orange-500"
    >
      {category.title.replace("Colleges in India", "")}
    </Link>
  </li>
))}

</ul>
    </details>

    {/* About */}
    <Link onClick={()=>setMobileOpen(false)} href="/about"
      className="flex items-center gap-3 text-lg hover:text-orange-500 transition">
      <Info size={20} className="text-blue-600"/>
      About
    </Link>
 <Link onClick={()=>setMobileOpen(false)} href="/Job"
      className="flex items-center gap-3 text-lg hover:text-orange-500 transition">
      <Briefcase size={20} className="text-blue-600"/>
      Job
    </Link>

    {/* Contact */}
    <Link onClick={()=>setMobileOpen(false)} href="/contact"
      className="flex items-center gap-3 text-lg hover:text-orange-500 transition">
      <Phone size={20} className="text-blue-600"/>
      Contact
    </Link>

    <hr/>

    {/* Login */}
    <Link
      onClick={()=>setMobileOpen(false)}
      href="/login"
      className="flex items-center justify-center gap-2 border p-3 rounded-xl text-center hover:bg-gray-50"
    >
      <LogIn size={18}/>
      Login
    </Link>

    {/* Register */}
    <Link
      onClick={()=>setMobileOpen(false)}
      href="/register"
      className="flex items-center justify-center gap-2 bg-orange-500 text-white p-3 rounded-xl text-center hover:bg-orange-600 transition"
    >
      <UserPlus size={18}/>
      Register
    </Link>
    <button
  onClick={() => setOpenCounselling(true)}
  className="flex items-center justify-center gap-2 bg-orange-500 text-white p-3 rounded-xl text-center hover:bg-orange-600 transition"
>
  Free Counselling
</button>

    {/* Bottom Contact */}
    <div className="bg-blue-50 rounded-xl p-3text-center mt-2">
      <p className="text-sm text-gray-600">Contact With Us</p>
      <p className="font-semibold text-blue-900 flex items-center justify-center gap-2 mt-1">
        <Phone size={16}/> 656622355
      </p>
    </div>

  </div>
</div>


    </header>
   </>
  );
}
