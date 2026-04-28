"use client";

import { auth, db, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp, arrayUnion } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogIn } from "lucide-react";
import { useTenant } from "@/app/context/TenantContext"; // TenantContext ko import kiya

export default function LoginPage() {
  const router = useRouter();
  const { tenant } = useTenant(); // Current Admin ki details nikal li
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    if (!tenant?.clientId) {
      alert("System Error: Admin ID not found.");
      return;
    }

    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // --- Naya User ---
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "user",
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
          // Jis admin ki site par login kiya, uska ID store kiya
          registeredUnder: tenant.clientId, 
          // Saari sites ki list jahan user ne login kiya (Array)
          joinedSites: [tenant.clientId] 
        });
        console.log("New user registered under admin:", tenant.clientId);
      } else {
        // --- Purana User ---
        // Hum update karenge ki user ne is naye admin ki site par bhi login kar liya hai
        await setDoc(userRef, { 
          lastLogin: serverTimestamp(),
          // arrayUnion se duplicate nahi hoga, sirf naya admin list mein jud jayega
          joinedSites: arrayUnion(tenant.clientId) 
        }, { merge: true });
        console.log("Existing user logged in to site:", tenant.clientId);
      }

      alert(`Welcome ${user.displayName}!`);
      router.push("/");
    } catch (error) {
      console.error("Login Error:", error);
      alert("Login failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1425] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#1e293b] p-8 rounded-[2.5rem] border border-white/10 shadow-2xl text-center">
        <div className="w-20 h-20 bg-orange-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-orange-500">
          <LogIn size={40} />
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
        <p className="text-gray-400 mb-8 font-medium">
          Logging in to <span className="text-orange-500">{tenant?.name || "the portal"}</span>
        </p>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-black font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all disabled:opacity-50"
        >
          {loading ? "Connecting..." : (
            <>
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/split-google.svg" alt="G" className="w-6 h-6" />
              Sign in with Google
            </>
          )}
        </button>
      </div>
    </div>
  );
}