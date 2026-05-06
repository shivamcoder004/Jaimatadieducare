"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const TenantContext = createContext<any>(null);

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenant] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectTenant = async () => {
      try {
        // 1. Hostname nikaalo (e.g. 'www.jaimata.com' ya 'jaimata.com')
        let hostname = window.location.hostname;

        // 2. Clean hostname (www. hata do taaki DB query hamesha match kare)
        const cleanDomain = hostname.replace(/^www\./, "");
        
        // 3. Localhost fallback
        const currentDomain = cleanDomain === "localhost" ? "collegecounselling.testyug.in" : cleanDomain;

        console.log("🔍 Browser Hostname:", hostname);
        console.log("🌐 Cleaned Domain for DB Query:", currentDomain);

        // Firestore query
        const q = query(collection(db, "clients"), where("domain", "==", currentDomain));
        const snap = await getDocs(q);

        if (!snap.empty) {
          const tenantData = snap.docs[0].data();
          console.log("✅ Tenant Found:", tenantData.siteName, "| ID:", tenantData.clientId);

// Note: Admin collection mein clientId "11" hona chahiye match karne ke liye
      const adminQ = query(
        collection(db, "admin"), 
        where("clientId", "==", tenantData.clientId) 
      );
      const adminSnap = await getDocs(adminQ);

      let finalPermissions = { canPostJobs: false }; // Default false

      if (!adminSnap.empty) {
        const adminData = adminSnap.docs[0].data();
        finalPermissions = adminData.permissions || finalPermissions;
        console.log("✅ Admin Permissions Found:", finalPermissions);
      }

      // 3. Dono data ko merge karke set karo
      const fullTenantData = {
        ...tenantData,
        permissions: finalPermissions
      };

      setTenant(fullTenantData);


          // CSS variables
          const primaryColor = tenantData.branding?.primaryColor || '#F4B400';
          document.documentElement.style.setProperty('--primary-color', primaryColor);
          console.log("🎨 Applied Primary Color:", primaryColor);
        
        
        
        
        } else {
          console.error("❌ No client found in Firestore for:", currentDomain);
          console.log("💡 Tip: Check if the domain in SuperAdmin matches exactly (case-sensitive).");
        }
      } catch (err: any) {
        console.error("🔥 Tenant Detection Error:", err.message);
      } finally {
        setLoading(false);
      }
    };

    detectTenant();
  }, []);

  return (
    <TenantContext.Provider value={{ tenant, loading }}>
      {children}
    </TenantContext.Provider>
  );
}

export const useTenant = () => useContext(TenantContext);