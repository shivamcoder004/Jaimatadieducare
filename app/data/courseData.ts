interface course {
  title: string;
  intro: string;
  eligibility: string;
  entrance: string;
  fees: string;
  scope: string;
  colleges: any[]; // Aap isse aur detail mein bhi define kar sakte hain
}



export const courses = {
  "btech": {
    title: "B.Tech",
    intro: "Bachelor of Technology (B.Tech) is a 4-year undergraduate professional engineering course. It is one of the most popular choices for students who have completed 12th with PCM.",
    eligibility: "12th Pass with Physics, Chemistry, and Mathematics (PCM).",
    entrance: "JEE-Main, MHT-CET, WBJEE, BITSAT.",
    fees: "₹4,00,000 - ₹15,00,000 (depending on college)",
    scope: "Software Engineer, Civil Engineer, Data Scientist, AI Specialist in top MNCs like Google, TCS, and Amazon.",
    colleges: [
      {
        name: "MIT ART, DESIGN AND TECHNOLOGY UNIVERSITY (MIT-ADT)",
        location: "Pune, Maharashtra",
        programs: "132 Courses",
        exams: "JEE-Main / NATA",
        fees: "₹7,000 - ₹8,00,000",
        ranking: "A+ Grade",
        featured: true
      },
      {
        name: "BHARATI VIDYAPEETH DEEMED UNIVERSITY (BVP)",
        location: "Pune, Maharashtra",
        programs: "24 Courses",
        exams: "BVP Exam / NATA",
        fees: "₹56,000 - ₹1,60,000",
        ranking: "NIRF Top 100"
      }
    ]
  },
  "medical": {
    title: "Medical (MBBS)",
    intro: "MBBS is a 5.5-year undergraduate medical degree. It is the dream of every medical aspirant to become a doctor and serve the nation.",
    eligibility: "12th Pass with Physics, Chemistry, and Biology (PCB).",
    entrance: "NEET-UG is the mandatory national level exam.",
    fees: "₹50,000 (Govt) - ₹1 Crore (Private/Deemed)",
    scope: "General Physician, Surgeon, Medical Officer, or Private Practice.",
    colleges: [
      {
        name: "Armed Forces Medical College (AFMC)",
        location: "Pune, Maharashtra",
        programs: "12 Courses",
        exams: "NEET + Interview",
        fees: "₹31,000 (Approx)",
        ranking: "Top 5 in India"
      }
    ]
  },
  "bsc": {
    title: "B.Sc (Bachelor of Science)",
    intro: "B.Sc is a 3-year undergraduate degree for students interested in scientific theory and research. It offers various specializations like IT, Biotech, and Nursing.",
    eligibility: "12th Pass in Science Stream (PCM/PCB).",
    entrance: "CUET, State-level entrance, or Merit Based.",
    fees: "₹20,000 - ₹2,00,000",
    scope: "Research Scientist, Lab Technician, Teacher, or UPSC Aspirant.",
    colleges: [
      {
        name: "Fergusson College",
        location: "Pune, Maharashtra",
        programs: "45 Courses",
        exams: "Merit Based",
        fees: "₹15,000 - ₹50,000",
        ranking: "Heritage Grade A"
      }
    ]
  },
  "mba": {
    title: "MBA (Master of Business Administration)",
    intro: "MBA is a 2-year postgraduate program designed to develop skills in business and management. It is highly valued for career growth in the corporate sector.",
    eligibility: "Bachelor's degree in any discipline with minimum 50% marks.",
    entrance: "CAT, MAT, XAT, SNAP, MAH-CET.",
    fees: "₹5,00,000 - ₹25,00,000",
    scope: "Marketing Manager, Finance Consultant, HR Manager, Entrepreneurship, and Product Management.",
    colleges: [
      {
        name: "Symbiosis Institute of Business Management (SIBM)",
        location: "Pune, Maharashtra",
        programs: "5 Courses",
        exams: "SNAP",
        fees: "₹18,00,000 - ₹22,00,000",
        ranking: "Top 20 B-Schools",
        featured: true
      },
      {
        name: "Pune University (PUMBA)",
        location: "Pune, Maharashtra",
        programs: "3 Courses",
        exams: "MAH-CET / CAT",
        fees: "₹1,30,000 - ₹2,00,000",
        ranking: "NIRF Top 100"
      }
    ]
  },
  "law": {
    title: "Integrated Law (B.A. LL.B.)",
    intro: "An integrated 5-year undergraduate program that combines arts and legal studies. It is the foundation for a career in the judiciary and legal consultancy.",
    eligibility: "12th Pass in any stream with minimum 45% marks.",
    entrance: "CLAT, AILET, MH-CET Law.",
    fees: "₹3,00,000 - ₹12,00,000",
    scope: "Corporate Lawyer, Legal Advisor, Civil Judge, High Court Advocate, and Legal Analyst.",
    colleges: [
      {
        name: "ILS Law College",
        location: "Pune, Maharashtra",
        programs: "8 Courses",
        exams: "MH-CET Law",
        fees: "₹40,000 - ₹2,00,000",
        ranking: "Top 10 Law Colleges in India"
      }
    ]
  },
  "bca": {
    title: "BCA (Bachelor of Computer Applications)",
    intro: "BCA is a 3-year undergraduate course for students who want to delve into the world of computer languages and software development.",
    eligibility: "12th Pass in any stream (Maths preferred in some colleges).",
    entrance: "IPU CET, CUET, Merit-Based, State Entrances.",
    fees: "₹1,50,000 - ₹6,00,000",
    scope: "Web Developer, System Analyst, Software Tester, and IT Support Specialist.",
    colleges: [
      {
        name: "Symbiosis Institute of Computer Studies and Research (SICSR)",
        location: "Pune, Maharashtra",
        programs: "4 Courses",
        exams: "SET",
        fees: "₹5,00,000 - ₹7,00,000",
        ranking: "Best BCA College in India"
      }
    ]
  }
};