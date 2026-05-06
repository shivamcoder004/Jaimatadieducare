"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTenant } from "../app/context/TenantContext";
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

  const { tenant, loading } = useTenant();

  // Loading state handle karna taaki blank na dikhe
  if (loading) return <div className="h-20 bg-[#111827]" />;


  const footerData = tenant?.footer;

  const getDirectLink = (url: string) => {
    if (!url) return "";
    if (url.includes("drive.google.com")) {
      const fileId = url.split("/d/")[1]?.split("/")[0];
      return fileId ? `https://lh3.googleusercontent.com/u/0/d/${fileId}` : url;
    }
    return url;
  };
  const branding = tenant?.branding;
  const getValue = (key: string, defaultValue: string) => {
    return footerData?.[key] || branding?.[key] || defaultValue;
  };

  const rawLogoUrl = footerData?.footerLogoUrl || tenant?.logoUrl;
  const finalLogoUrl = getDirectLink(rawLogoUrl);

  const footerLinks = {
    quickLinks: [
      { name: "About Us", href: "/about" },
      // { name: "Browse Colleges", href: "/colleges" },
      // { name: "Latest Updates", href: "/updates" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy & Policy", href: "/privacy" },
      // { name: "Disclaimer", href: "/disclaimer" },
    ],
    categories: [
      { name: "Engineering Admissions", href: "/category/engineering" },
      { name: "Medical (NEET) Guidance", href: "/category/medical" },
      { name: "Management (MBA) Experts", href: "/category/management" },
      // { name: "Arts & Humanities", href: "/category/arts" },
      { name: "Science Streams", href: "/category/science" },
    ]
  };

  return (
    <footer className=" text-white pt-16 pb-6 px-4 md:px-6 relative overflow-hidden transition-all duration-500"
    
    style={{ backgroundColor: getValue('footerColor', '#002b4d') }}
    >
      {/* Decorative Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm1 1h18v18H1V1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section - SEO Focused */}
          {/* <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <GraduationCap size={28} className="text-white" />
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase">
                Future  <span className="text-orange-500 underline decoration-2">  Focus</span>
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
          </div> */}


<div className="space-y-6">
            <div className="flex items-center gap-2">
            {(footerData?.footerLogoUrl || tenant?.logoUrl) ? (
    <div className="relative h-12 w-auto flex items-center">
      <img 
        src={getDirectLink(footerData?.footerLogoUrl || tenant?.logoUrl)} 
        alt="Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Agar link invalid ho toh fallback icon dikhao
          (e.target as HTMLImageElement).style.display = 'none';
          (e.target as HTMLImageElement).parentElement!.classList.add("bg-orange-500", "p-2", "rounded-lg");
        }}
      />
    </div>
  ) : (
    <div className="p-2 rounded-lg" style={{ backgroundColor: getValue('themePrimary', '#F4B400') }}>
      <GraduationCap size={28} className="text-white" />
    </div>
  )}
              <h2 className="text-2xl font-black tracking-tighter uppercase">
                {tenant?.siteName?.split(' ')[0] || "Future"} 
                <span className="underline decoration-2 ml-2" style={{ color: getValue('themePrimary', '#F4B400') }}>
                   {tenant?.siteName?.split(' ')[1] || "Focus"}
                </span>
              </h2>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed italic">
              {tenant?.description || "Your trusted platform for college admissions, course information, and government exam updates across India. We bridge the gap between dreams and top-tier campuses."}
            </p>
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
            <h3 className="text-lg font-bold mb-6 border-b-2 w-fit" style={{ borderColor: getValue('themePrimary', '#F4B400') }}>Reach Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="shrink-0 mt-1" style={{ color: getValue('themePrimary', '#F4B400') }} />
                <div className="text-sm text-blue-100/70">
                  <p className="font-bold text-white">Our Office</p>
                  <p>{getValue('address', 'Purnea, Bihar')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="shrink-0" style={{ color: getValue('themePrimary', '#F4B400') }} />
                <div className="text-sm text-blue-100/70">
                  <p className="font-bold text-white">Email Us</p>
                  <a href={`mailto:${getValue('email', '')}`} className="hover:text-orange-400">
                    {getValue('email', 'info@futurefocus.in')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="shrink-0" style={{ color: getValue('themePrimary', '#F4B400') }} />
                <div className="text-sm text-blue-100/70">
                  <p className="font-bold text-white">Call Experts</p>
                  <a href={`tel:${getValue('phone1', '')}`} className="font-semibold hover:text-orange-400">
                    {getValue('phone1', '+91 84094 63997')}
                  </a>
                  {footerData?.phone2 && (
                    <p className='mt-1'>
                      <a href={`tel:${footerData.phone2}`} className="font-semibold hover:text-orange-400">
                        {footerData.phone2}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-[10px] text-blue-100/30 uppercase tracking-[0.2em] font-bold mb-4">India's Best Admission Counselor in Motihari</p>
   {tenant?.keywords && (
          <div className="border-t border-white/10 pt-8 mb-8">
             <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-blue-100/40">
              {tenant.keywords.split(',').map((kw: string, i: number) => (
                <span key={i} className="hover:text-white cursor-default transition-colors">
                  {kw.trim()} {i < tenant.keywords.split(',').length - 1 ? '•' : ''}
                </span>
              ))}
            </div>
          </div>
        )}
        </div>

        {/* Bottom Bar with Dasynoma Credits */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-blue-100/50 text-center md:text-left">
            <div className="text-xs text-blue-100/50">
             <p>{tenant?.footerText || `© ${currentYear} ${tenant?.siteName}. All rights reserved.`}</p>
          </div>
             <p className="mt-1 flex items-center justify-center md:justify-start gap-2">
                Made with ❤️ for Indian Students 
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             </p>
          </div>





          {/* DASYNOMA BRANDING SECTION */}
          {/* <motion.a 
            href="https://www.dasynoma.in" 
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