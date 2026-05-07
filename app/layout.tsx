// //"use client"; // Add this at the top

// import "./globals.css";
// import Navbar from "@/Components/Navbar";
//  import Footer from "@/Components/Fotter";
//  import { TenantProvider } from "./context/TenantContext";

// export const metadata = {
//   title: "FutureFocuss – Career & Admission Counselling in Patna, Bihar | Nursing,BTech, MBBS, MBA",
//   description:
//     "FutureFocuss provides free admission counselling in Patna and Bihar for BTech, MBBS, MBA, B.Ed, and other professional courses. Get college selection, fee guidance, and 100% placement support.",
//   keywords:
//     "admission counselling Patna, career counselling Bihar, FutureFocuss career guidance, BTech counselling Patna, MBBS counselling Bihar",
//   // Optional: Open Graph (social sharing ke liye)
//   openGraph: {
//     title: "FutureFocuss – Career & Admission Counselling in Patna, Bihar",
//     description:
//       "Free admission counselling for BTech, MBBS, MBA, B.Ed and more in Patna, Bihar. Top college selection and placement support.",
//     url: "https://www.futurefocuss.in",
//     siteName: "FutureFocuss",
//     images: [
//       {
//         url: "https://www.futurefocuss.in/future_focus.png",
//         width: 800,
//         height: 600,
//         alt: "FutureFocuss Admission Counselling",
//       },
//     ],
//     type: "website",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="bg-white text-gray-900">
//         <TenantProvider>
//         <Navbar />
//         {children}
//         {/* --- Floating WhatsApp Button --- */}



//         <a
//           href="https://wa.me/918252895483" 
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center"
//         >





//           <svg
//             width="35"
//             height="35"
//             viewBox="0 0 24 24"
//             fill="white"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//           </svg>
//         </a>
//         <Footer />
//         </TenantProvider>
//       </body>
//     </html>
//   );
// }









import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Fotter";
import { TenantProvider } from "./context/TenantContext";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { Metadata } from "next";
import { headers } from "next/headers";
import WhatsAppButton from "@/Components/WhatsAppButton";

// Next.js ko bol rha hai ki har request pe naya data fetch karo
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Reusable data fetching function
async function getClientData() {
  const headerList = await headers();
  const host = headerList.get("host") || "";
  const cleanHost = host.split(":")[0];

  const domainToSearch = (cleanHost === "localhost" || cleanHost === "127.0.0.1")
    ? "collegecounselling.testyug.in"
    : cleanHost;

  try {
    const q = query(collection(db, "clients"), where("domain", "==", domainToSearch), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    }
  } catch (error) {
    console.error("Firebase fetch error:", error);
  }
  return null;
}

const getDirectLink = (url: string) => {
  if (!url || !url.includes("drive.google.com")) return url;
  const fileId = url.split("/d/")[1]?.split("/")[0] || url.split("id=")[1]?.split("&")[0];
  return fileId ? `https://drive.google.com/uc?export=view&id=${fileId}` : url;
};

export async function generateMetadata(): Promise<Metadata> {
  const data = await getClientData();
  const headerList = await headers();
  const host = headerList.get("host") || "";

  // Defaults
  let siteTitle = "Expert Career & Admission Counselling | Direct Admission Guidance";
  let siteDescription = "Expert admission guidance for Nursing, MBBS, B.Tech, MBA, BCA, B.Ed, and D.El.Ed across India. Get complete details on eligibility, fees, top colleges, entrance exams, and direct admission support near you.";
  let faviconUrl = "/favicon.ico";

  if (data) {
    siteTitle = data.title || data.siteName || siteTitle;
    siteDescription = data.description || siteDescription;
    const rawLogo = data.branding?.logoUrl || data.favicon;
    if (rawLogo) {
      faviconUrl = getDirectLink(rawLogo);
    }
  }

  return {
    title: siteTitle,
    description: siteDescription,
    icons: {
      icon: [
        { url: faviconUrl },
        { url: faviconUrl, rel: "apple-touch-icon" }
      ],
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: `https://${host}`,
      images: [{ url: faviconUrl }],
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Layout ke andar bhi check kar sakte hain agar zaroorat ho
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <TenantProvider>
          <Navbar />
          <main>{children}</main>
          <WhatsAppButton />
          <Footer />
        </TenantProvider>
      </body>
    </html>
  );
}