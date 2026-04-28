"use client";

import Link from "next/link";
import Image from "next/image";
import { courses} from "@/app/data/courseData";
import { collegeData } from "@/app/data/collegeData";
import CounsellingModal from "./CounsellingForm";
import { usePathname } from "next/navigation";
import { useTenant } from "../app/context/TenantContext";
import { db } from "@/lib/firebase"; // Apna firebase path check karein
import { collection, query, where, getDocs } from "firebase/firestore";

import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

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


  const [user, setUser] = useState<any>(null); // User state
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { tenant, loading } = useTenant();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [openCounselling, setOpenCounselling] = useState(false);
const [dbCourses, setDbCourses] = useState<{slug: string, title: string}[]>([]);
const pathname = usePathname();

const [dbCategories, setDbCategories] = useState<{slug: string, title: string}[]>([]);
const nameParts = tenant?.siteName ? tenant.siteName.split("  ") : ["Future", "Focus"];
  const firstPart = nameParts[0]; 
  const secondPart = nameParts.slice(1).join(" ");


useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setUserMenuOpen(false);
  };







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


useEffect(() => {
  const fetchNavCourses = async () => {
    // Jab tak tenant load na ho ya clientId na mile, wait karein
    if (loading || !tenant?.clientId) return;

    try {
      const q = query(
        collection(db, "courses"),
        where("adminId", "==", tenant.clientId)
      );
      const snap = await getDocs(q);
      const list = snap.docs.map(doc => ({
        slug: doc.data().slug || doc.id, // Fallback to doc.id if slug missing
        title: doc.data().title
      }));
      
      console.log("📌 Navbar Courses Loaded:", list);
      setDbCourses(list);
    } catch (err) {
      console.error("Error loading nav courses:", err);
    }
  };

  fetchNavCourses();
}, [tenant, loading]);



useEffect(() => {
  const fetchNavData = async () => {
    if (loading || !tenant?.clientId) return;

    try {
      // Colleges ki Categories fetch karo
      const catQ = query(
        collection(db, "categories"), 
        where("adminId", "==", tenant.clientId)
      );
      const catSnap = await getDocs(catQ);
      const catList = catSnap.docs.map(doc => ({
        slug: doc.data().slug || doc.id,
        title: doc.data().title || doc.data().name
      }));
      
      setDbCategories(catList);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  fetchNavData();
}, [tenant, loading]);




// Isse humein pata chalega ki aakhir data mein aa kya raha hai
useEffect(() => {
  if (tenant) {
    console.log("Full Tenant Object:", tenant);
    console.log("Permissions Map:", tenant.permissions);
    console.log("Can Post Jobs Value:", tenant.permissions?.canPostJobs);
  }
}, [tenant]);

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
                src={tenant?.branding?.logoUrl || "/future_focus.png"}
                alt="Logo"
                width={290}
                height={90}
                priority
                className="h-9 sm:h-10 lg:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
  </div>

  {/* Brand Name */}
 <div className="flex flex-col leading-tight group">
              {/* First Part (e.g., Future / Jai) */}
<span className="text-xs sm:text-lg lg:text-[20px] tracking-[2px] text-orange-500 font-semibold uppercase">  
                {loading ? "Loading..." : firstPart}
              </span>

              {/* Second Part (e.g., Focus / Mata Di) */}
<span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-900! transition-colors duration-300">                {loading ? "" : secondPart}
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
  {dbCourses.length > 0 ? (
    dbCourses.map((course) => (
      <li key={course.slug}>
        <Link href={`/course/${course.slug}`} className="block hover:text-orange-500">
          {course.title}
        </Link>
      </li>
    ))
  ) : (
    // Agar DB khali hai toh purana JSON (Local) wala dikhao
    Object.keys(courses).map((slug) => (
      <li key={slug}>
        <Link href={`/course/${slug}`} className="block hover:text-orange-500 capitalize">
          {courses[slug as keyof typeof courses].title}
        </Link>
      </li>
    ))
  )}
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
  {dbCategories.length > 0 ? (
    // Firebase wala data
    dbCategories.map((cat) => (
      <li key={cat.slug}>
        <Link
          href={`/colleges/${cat.slug}`}
          className="block hover:text-orange-500 capitalize"
        >
          {cat.title.replace("Colleges in India", "")}
        </Link>
      </li>
    ))
  ) : (
    // Fallback: Agar Firebase khali ho toh purana JSON dikhao
    Object.entries(collegeData).map(([slug, category]) => (
      <li key={slug}>
        <Link
          href={`/colleges/${slug}`}
          className="block hover:text-orange-500"
        >
          {category.title.replace("Colleges in India", "")}
        </Link>
      </li>
    ))
  )}
</ul>
            </div>
          </div>

          <Link href="/about" className="hover:text-orange-500 transition">About</Link>
{/* Navbar ke andar Link section mein aisa likhein */}

{/* Navbar ke andar Link section mein isse replace karein */}

{/* Desktop Menu - Job Link */}
{/* Navbar Logic */}
{!loading && tenant?.permissions?.canPostJobs === true && (
  <Link href="/Job" className="hover:text-orange-500 transition  ">
    Job
  </Link>
)}
          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </nav>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-4">


{user ? (
    /* Humne 'group' class add ki hai jo hover handle karegi */
    <div className="relative group py-2"> 
      <div className="flex items-center gap-2 cursor-pointer">
        {/* User Photo */}
        <div className="w-10 h-10 rounded-full border-2 border-orange-500 overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-sm">
          {user.photoURL ? (
            <img 
              src={user.photoURL} 
              alt="Profile" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          ) : (
            <div className="bg-blue-900 text-white w-full h-full flex items-center justify-center font-bold">
              {user.displayName?.charAt(0) || "U"}
            </div>
          )}
        </div>
      </div>

      {/* Profile Dropdown - 'hidden group-hover:block' se ye hover par dikhega */}
      <div className="absolute right-0 mt-0 w-52 pt-4 hidden group-hover:block z-[100] animate-in fade-in slide-in-from-top-2 duration-300">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-50 mb-1">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Account</p>
            <p className="text-sm font-bold truncate text-blue-900">{user.displayName}</p>
            <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
          </div>
          
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors font-semibold"
          >
            <span className="text-lg">Logout</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Link href="/login" className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-bold transition-colors">
       Login
    </Link>
  )}






        

          {/* REGISTER */}
          {/* <Link
            href="/register"
            className="border border-orange-500 text-orange-500 px-4 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition"
          >
            Register
          </Link> */}

          {/* CTA */}
       <button
              onClick={() => setOpenCounselling(true)}
              style={{ backgroundColor: 'var(--primary-color)' }} // 4. Dynamic Color
              className="text-white px-5 py-2 rounded-xl hover:opacity-90 transition hover:scale-105 shadow-md"
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
  {dbCourses.length > 0 ? (
    dbCourses.map((course) => (
      <li key={course.slug}>
        <Link href={`/course/${course.slug}`} className="block hover:text-orange-500">
          {course.title}
        </Link>
      </li>
    ))
  ) : (
    // Agar DB khali hai toh purana JSON (Local) wala dikhao
    Object.keys(courses).map((slug) => (
      <li key={slug}>
        <Link href={`/course/${slug}`} className="block hover:text-orange-500 capitalize">
          {courses[slug as keyof typeof courses].title}
        </Link>
      </li>
    ))
  )}
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
  {dbCategories.length > 0 ? (
    // Firebase wala data
    dbCategories.map((cat) => (
      <li key={cat.slug}>
        <Link
          href={`/colleges/${cat.slug}`}
          className="block hover:text-orange-500 capitalize"
        >
          {cat.title.replace("Colleges in India", "")}
        </Link>
      </li>
    ))
  ) : (
    // Fallback: Agar Firebase khali ho toh purana JSON dikhao
    Object.entries(collegeData).map(([slug, category]) => (
      <li key={slug}>
        <Link
          href={`/colleges/${slug}`}
          className="block hover:text-orange-500"
        >
          {category.title.replace("Colleges in India", "")}
        </Link>
      </li>
    ))
  )}
</ul>
    </details>

    {/* About */}
    <Link onClick={()=>setMobileOpen(false)} href="/about"
      className="flex items-center gap-3 text-lg hover:text-orange-500 transition">
      <Info size={20} className="text-blue-600"/>
      About
    </Link>
{/* Mobile Drawer - Job Link with Permission Check */}
{!loading && tenant?.permissions?.canPostJobs === true && (
  <Link 
    onClick={() => setMobileOpen(false)} 
    href="/Job"
    className="flex items-center gap-3 text-lg hover:text-orange-500 transition"
  >
    <Briefcase size={20} className="text-blue-600"/>
    Job
  </Link>
)}

    {/* Contact */}
    <Link onClick={()=>setMobileOpen(false)} href="/contact"
      className="flex items-center gap-3 text-lg hover:text-orange-500 transition">
      <Phone size={20} className="text-blue-600"/>
      Contact
    </Link>

    <hr/>

    {/* Mobile Login/User Section */}
{user ? (
  <div className="flex flex-col gap-4 p-3 bg-blue-50 rounded-2xl">
    <div className="flex items-center gap-3">
      <Image src={user.photoURL || "/default-avatar.png"} alt="User" width={40} height={40} className="rounded-full" />
      <div>
        <p className="text-sm font-bold text-blue-900">{user.displayName}</p>
        <p className="text-[10px] text-gray-500">{user.email}</p>
      </div>
    </div>
    <button onClick={handleLogout} className="text-sm text-red-600 font-bold text-center border border-red-200 py-2 rounded-xl">
      Logout
    </button>
  </div>
) : (
  <div className="flex flex-col gap-3">
    <Link onClick={()=>setMobileOpen(false)} href="/login" className="flex items-center justify-center gap-2 border p-3 rounded-xl">
      <LogIn size={18}/> Login
    </Link>
    {/* <Link onClick={()=>setMobileOpen(false)} href="/register" className="flex items-center justify-center gap-2 bg-orange-500 text-white p-3 rounded-xl">
      <UserPlus size={18}/> Register
    </Link> */}
  </div>
)}

    {/* Register */}
    {/* <Link
      onClick={()=>setMobileOpen(false)}
      href="/register"
      className="flex items-center justify-center gap-2 bg-orange-500 text-white p-3 rounded-xl text-center hover:bg-orange-600 transition"
    >
      <UserPlus size={18}/>
      Register
    </Link> */}
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
        <Phone size={16}/> 8409463997
      </p>
    </div>

  </div>
</div>


    </header>
   </>
  );
}
