"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  GraduationCap,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "About Us", href: "/about" },
      { name: "Browse Colleges", href: "/colleges" },
      { name: "Latest Updates", href: "/updates" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy & Policy", href: "/privacy" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
    categories: [
      { name: "Engineering Admissions", href: "/category/engineering" },
      { name: "Medical (NEET) Guidance", href: "/category/medical" },
      { name: "Management (MBA) Experts", href: "/category/management" },
      { name: "Arts & Humanities", href: "/category/arts" },
      { name: "Science Streams", href: "/category/science" },
    ]
  };

  return (
    <footer className="bg-[#002b4d] text-white pt-16 pb-6 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm1 1h18v18H1V1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section - SEO Focused */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <GraduationCap size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase">
                JAI MATA DI <span className="text-orange-500 underline decoration-2">EDUCARE</span>
              </h2>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed italic">
              "Your trusted platform for college admissions, course information, and government exam updates across India. We bridge the gap between dreams and top-tier campuses."
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  whileHover={{ y: -3, color: '#f97316' }}
                  className="bg-white/10 p-2 rounded-full transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-orange-500 w-fit">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-blue-100/70 hover:text-orange-400 text-sm flex items-center gap-2 transition-all group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories - Keyword Rich */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-orange-500 w-fit">Top Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-blue-100/70 hover:text-orange-400 text-sm flex items-center gap-2 transition-all group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold mb-6 border-b-2 border-orange-500 w-fit">Reach Us</h3>
            <div className="space-y-4">
              {/* Added Location Motihari */}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 shrink-0 mt-1" />
                <div className="text-sm text-blue-100/70">
                  <p className="font-bold text-white">Our Office</p>
                  <p>Madhubani Chowk, Motihari,</p>
                  <p>Bihar - 845401</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-orange-500 shrink-0" />
                <div className="text-sm text-blue-100/70">
                  <p className="font-bold text-white">Email Us</p>
                  <a href="mailto:jai@gmail.com" className="hover:text-orange-400 transition-colors">jai@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="text-orange-500 shrink-0" />
                <div className="text-sm text-blue-100/70">
                  <p className="font-bold text-white">Call Experts</p>
                  <a href="tel:+917304455555" className="hover:text-orange-400 transition-colors">+6207541303</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-[10px] text-blue-100/30 uppercase tracking-[0.2em] font-bold mb-4">India's Best Admission Counselor in Motihari</p>
         <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-blue-100/40 leading-relaxed">

  <span>B.Tech Admission 2026</span> •
  <span>Polytechnic Admission Bihar</span> •
  <span>BCA / BBA Counselling</span> •
  <span>MBA / MCA College Selection</span> •
  <span>B.Sc Agriculture Admission</span> •
  <span>B.Sc Nursing & GNM Admission</span> •
  <span>B. Pharmacy Guidance</span> •
  <span>BPT Physiotherapy Admission</span> •
  <span>Hotel Management Colleges</span> •
  <span>Law (BALLB) Admission Help</span> •
  <span>Top Engineering Colleges Bihar</span> •
  <span>Career Counselling after 12th</span> •
  <span>Direct Admission Guidance</span> •
  <span>Jai Mata Di Education Services</span>

</div>
        </div>

        {/* Bottom Bar with Dasynoma Credits */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-blue-100/50 text-center md:text-left">
             <p>© {currentYear} Jai Mata Di Educare. All rights reserved.</p>
             <p className="mt-1 flex items-center justify-center md:justify-start gap-2">
                Made with ❤️ for Indian Students 
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             </p>
          </div>





          {/* DASYNOMA BRANDING SECTION */}
          {/* <motion.a 
            href="https://dasynoma.in" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center md:items-end gap-1 px-4 py-2 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all"
          >
            <span className="text-[10px] uppercase tracking-widest text-blue-100/40 font-bold group-hover:text-orange-500 transition-colors">
              Designed & Developed By
            </span>
            <div className="flex items-center gap-2">
               <span className="text-lg font-black tracking-tighter text-white">
                  DASY<span className="text-orange-500">NOMA</span>
                  
               </span>
               <ExternalLink size={14} className="text-blue-100/40 group-hover:text-white" />
            </div>
          </motion.a> */}
        </div>
      </div>
    </footer>
  );
}