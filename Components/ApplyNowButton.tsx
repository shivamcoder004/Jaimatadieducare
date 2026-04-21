"use client";

import { useState } from "react";
import CounsellingModal from "@/Components/CounsellingForm";

export default function ApplyNowButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-5 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600"
      >
        Apply Now
      </button>

      {open && (
        <CounsellingModal open={open} setOpen={setOpen} />
      )}
    </>
  );
}