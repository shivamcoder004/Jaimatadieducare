
import Image from "next/image";
import Hero from "@/Components/home/Hero";
import Services from "@/Components/home/Services";
import FeaturedColleges from "@/Components/home/FeaturedColleges";
import After12thPage from "@/Components/home/Aftre12";
import TestimonialPage from "@/Components/home/Testimonial";
import CTASection from "@/Components/home/Cta";
export default function Homee() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedColleges/>
      <After12thPage/>
      <TestimonialPage/>
      <CTASection/>
       {/*<WhyChooseUs />
      <Process />
      
      <CTA /> */}
    </>
  );
}
