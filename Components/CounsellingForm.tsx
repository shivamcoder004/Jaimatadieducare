"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
interface CounsellingModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function CounsellingModal({ open, setOpen }: CounsellingModalProps) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [mainCourse, setMainCourse] = useState("");
  const [course, setCourse] = useState("");

  // COURSE DATA (MAIN LOGIC)
  const courseData = {
    Engineering: ["B.Tech", "Diploma", "BCA", "MCA"],
    Medical: ["MBBS", "BDS", "BAMS", "BHMS", "Nursing"],
    Management: ["BBA", "MBA", "PGDM"],
    Pharmacy: ["B.Pharma", "D.Pharma"],
    Education: ["B.Ed", "D.El.Ed"]
  };

  // ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  if (!open) return null;

  // submit
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log({
//       name,
//       phone,
//       location,
//       mainCourse,
//       course
//     });

//     alert("Thank you! Our counsellor will call you soon.");

//     // reset
//     setName("");
//     setPhone("");
//     setLocation("");
//     setMainCourse("");
//     setCourse("");
//     setOpen(false);
//   };


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const whatsappNumber = "8271563199"; // <-- apna number yaha daalo
  
    // message auto generate
    const message = `
  🎓 *New Admission Enquiry*
  
  👤 Name: ${name}
  📞 Phone: ${phone}
  📍 Preferred Location: ${location}
  
  📚 Stream: ${mainCourse}
  🏫 Course: ${course}
    `;
  
    // encode (VERY IMPORTANT)
    const encodedMessage = encodeURIComponent(message);
  
    // whatsapp url
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
    // open whatsapp
    window.open(whatsappURL, "_blank");
  
    // reset form
    setName("");
    setPhone("");
    setLocation("");
    setMainCourse("");
    setCourse("");
    setOpen(false);
  };
  






  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-[fadeIn_.25s_ease]">

        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-10 right-0 text-white"
        >
          <X size={30}/>
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-5 text-center">
          Free Admission Counselling
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* PHONE */}
          <input
            type="tel"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required
            pattern="[0-9]{10}"

            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* LOCATION */}
          <select
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Preferred Study Location</option>
            <option>Delhi NCR</option>
            <option>Uttar Pradesh</option>
            <option>Bihar</option>
            <option>Punjab</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            <option>Other</option>

          </select>

          {/* MAIN COURSE */}
          <select
            value={mainCourse}
            onChange={(e)=>{
              setMainCourse(e.target.value);
              setCourse(""); // reset course when category changes
            }}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Stream</option>
            <option>Engineering</option>
            <option>Medical</option>
            <option>Management</option>
            <option>Pharmacy</option>
            <option>Education</option>
          </select>

          {/* SUB COURSE (DYNAMIC) */}
          <select
            value={course}
            onChange={(e)=>setCourse(e.target.value)}
            required
            disabled={!mainCourse}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:bg-gray-100"
          >
            <option value="">Select Course</option>

            {/* {mainCourse &&
              courseData[mainCourse].map((c, index)=>(
                <option key={index}>{c}</option>
              ))
            } */}

{mainCourse &&
  courseData[mainCourse as keyof typeof courseData].map((c, index) => (
    <option key={index} value={c}>{c}</option>
  ))
}
          </select>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 font-semibold"
          >
            Get Free Counselling
          </button>

        </form>
      </div>
    </div>
  );
}
