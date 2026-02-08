



interface College {
    name: string;
    location: string;
    about: string;
    courses: string;
    fees: string;
    eligibility: string;
    placement: string;
    placementpercentage?: string;
    hostel?: string;
    admission: string;
  }
  
  interface CollegeCategory {
    title: string;
    intro: string;
    colleges: Record<string, College>;
  }

export const collegeData = {
    engineering: {
      title: "Engineering Colleges in India",
      intro:
        "Engineering is one of the most popular career options after 12th science. Students can pursue B.Tech in various specializations like Computer Science, Mechanical, Civil and Electrical Engineering.",
  
      colleges: {
        "nit-patna": {
          name: "NIT Patna",
          location: "Patna, Bihar",
          about:
            "National Institute of Technology Patna is one of the oldest engineering institutes in India. It offers undergraduate and postgraduate engineering programs with excellent placements.",
          courses: "B.Tech, M.Tech, PhD",
          fees: "₹1.4 Lakh per year",
          eligibility: "12th PCM with JEE Main qualification",
          placement: "Average package ₹10 LPA, Highest ₹50 LPA",
          placementpercentage:"80%",
          hostel: "Separate hostel available for boys and girls",
          admission:
            "Admission is done through JoSAA counselling based on JEE Main rank.",
        },
  
        lpu: {
          name: "Lovely Professional University (LPU)",
          location: "Punjab",
          about:
            "LPU is a private university known for modern campus, industry tie-ups and good placements in CSE branch.",
          courses: "B.Tech CSE, Mechanical, Civil, ECE",
          fees: "₹1.8 Lakh per year",
          eligibility: "12th PCM + LPUNEST / JEE Main",
          placement: "Average ₹6 LPA",
          placementpercentage:"85%",

          hostel: "Fully furnished hostel available",
          admission: "Direct admission + entrance test LPUNEST",
        },
      },
    },
  
    medical: {
      title: "Medical Colleges in India",
      intro:
        "Medical courses like MBBS and BDS are the most respected career options in India. Students must qualify NEET exam for admission.",
  
      colleges: {
        "aiims-delhi": {
          name: "AIIMS Delhi",
          location: "New Delhi",
          about:
            "AIIMS Delhi is the top medical college in India providing world class medical education and hospital facilities.",
          courses: "MBBS, MD, MS",
          fees: "₹5,000 per year",
          eligibility: "12th PCB + NEET",
          placement: "Internship in AIIMS Hospital",
          hostel: "Hostel available",
          admission: "Admission through NEET counselling MCC",
        },
      },
    },

    

  management: {
    title: "Management Colleges in India",
    intro: "Management education prepares students for leadership roles in the corporate world. MBA is the flagship course offered by top B-schools.",
    colleges: {
      "iim-ahmedabad": {
        name: "IIM Ahmedabad",
        location: "Ahmedabad, Gujarat",
        about: "IIMA is consistently ranked as the #1 management institute in India, famous for its case-study pedagogy.",
        courses: "MBA (PGP), PGP-FABM, PhD",
        fees: "₹12.5 Lakh per year",
        eligibility: "Graduation + CAT Exam + Interview (PI/WAT)",
        placement: "Average package ₹32 LPA, Highest ₹1 Crore+",
        placementpercentage: "100%",
        hostel: "High-end residential dormitories on campus",
        admission: "Strictly through CAT score followed by AWT and Personal Interview."
      },
      "iim-bodh-gaya": {
        name: "IIM Bodh Gaya",
        location: "Bodh Gaya, Bihar",
        about: "One of the newer IIMs (Third Generation), it offers a blend of modern management and cultural heritage.",
        courses: "MBA, IPM (Integrated Program in Management)",
        fees: "₹7 Lakh per year",
        eligibility: "Graduation + CAT (for MBA) or 12th + JIPMAT (for IPM)",
        placement: "Average package ₹15 LPA",
        placementpercentage: "98%",
        hostel: "Well-equipped hostels with Wi-Fi and sports facilities",
        admission: "CAP (Common Admission Process) based on CAT score."
      }
    }
  },
  bed: {
    title: "B.Ed (Bachelor of Education) Colleges in India",
    intro:
      "B.Ed is a professional degree that qualifies students to work as teachers in schools. It is mandatory for teaching in government and many private schools in India.",

    colleges: {
      "cusb-gaya": {
        name: "Central University of South Bihar (CUSB)",
        location: "Gaya, Bihar",
        about:
          "CUSB is a premier central university offering integrated and regular B.Ed programs with a focus on modern pedagogy and research.",
        courses: "B.A. B.Ed, B.Sc. B.Ed (4-Year Integrated), M.Ed",
        fees: "₹15,000 per year",
        eligibility: "12th Pass with 50% + CUET qualification",
        placement: "Average package ₹4.5 LPA in Kendriya Vidyalayas and Private Schools",
        placementpercentage: "75%",
        hostel: "State-of-the-art hostel facilities for boys and girls",
        admission: "Admission through CUET (UG) followed by university counselling.",
      },

      "patna-womens-college": {
        name: "Patna Women's College (PWC)",
        location: "Patna, Bihar",
        about:
          "The first women's college in Bihar, PWC is renowned for its disciplined environment and excellent teacher training department.",
        courses: "B.Ed (2-Year Program)",
        fees: "₹75,000 per year",
        eligibility: "Graduation with 50% marks + Bihar B.Ed CET",
        placement: "Campus recruitment by top schools like DPS and DAV",
        placementpercentage: "85%",
        hostel: "On-campus secure hostel available for girls",
        admission: "Admission through Bihar B.Ed Common Entrance Test (CET).",
      },

      "amity-noida": {
        name: "Amity University",
        location: "Noida, Uttar Pradesh",
        about:
          "Amity Institute of Education is known for its world-class infrastructure and global exposure in teacher training.",
        courses: "B.Ed, B.Ed (Special Education)",
        fees: "₹1.38 Lakh per year",
        eligibility: "Graduation with 50% marks + Interview",
        placement: "Average package ₹5 LPA, Highest ₹8 LPA",
        placementpercentage: "90%",
        hostel: "Premium AC and Non-AC hostel options",
        admission: "Direct admission based on merit and personal interview.",
      },
    },
  },
  };
  