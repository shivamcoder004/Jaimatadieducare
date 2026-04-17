"use client";

import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import CounsellingModal from "@/Components/CounsellingForm";
import { useState } from "react";

export default function ContactPage() {
  const [openCounselling, setOpenCounselling] = useState(false);

  return (
    <>
      <CounsellingModal open={openCounselling} setOpen={setOpenCounselling} />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions? Need guidance? Our team is here to help. Reach out to us or book a free counselling session.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side: Info + Map */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-orange-500 w-6 h-6 mt-1"/>
              <div>
                <h3 className="font-semibold text-lg">Our Office</h3>
                <p className="text-gray-600">123,Madhun chowk, Motihari, Bihar, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-orange-500 w-6 h-6 mt-1"/>
              <div>
                <h3 className="font-semibold text-lg">Call / WhatsApp</h3>
                <p className="text-gray-600">+91 8855462687</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-orange-500 w-6 h-6 mt-1"/>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">support@jaimataedi.com</p>
              </div>
            </div>

            {/* Map (Optional Embed) */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.089476242477!2d85.0373912!3d26.581503899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecce91dc4c2ec5%3A0x4b3f8c600437d5c9!2sMotihari%20-%20Madubanighat%20Rd%20%26%20Madhuban%20Rd%2C%20Madhubani%2C%20Bihar%20845429!5e0!3m2!1sen!2sin!4v1770540770064!5m2!1sen!2sin"
                className="w-full h-60 rounded-xl border"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Counselling CTA */}
          <div className="flex flex-col justify-center items-center bg-blue-50 p-8 rounded-2xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-blue-900 text-center">
              Book Your Free Counselling
            </h2>
            <p className="text-gray-600 text-center">
              Fill out the form and our expert counsellor will contact you within 24 hours.
            </p>

            <button
              onClick={() => setOpenCounselling(true)}
              className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition font-semibold shadow-md"
            >
              Free Counselling
            </button>

            <p className="text-gray-500 text-sm text-center">
              Or contact us directly via phone or WhatsApp
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
