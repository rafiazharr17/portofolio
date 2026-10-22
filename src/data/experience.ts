export interface TimelineItem {
  id: string;
  type: "work" | "education";
  role: {
    id: string;
    en: string;
  };
  organization: string;
  period: {
    id: string;
    en: string;
  };
  points: Array<{
    id: string;
    en: string;
  }>;
}

export const timelineData: TimelineItem[] = [
  {
    id: "inoac-intern",
    type: "work",
    role: {
      id: "MIS / IT Staff Intern",
      en: "MIS / IT Staff Intern",
    },
    organization: "PT. Inoac Polytechno Indonesia — Karawang Plant",
    period: {
      id: "Agu 2026 – Sekarang",
      en: "Aug 2026 – Present",
    },
    points: [
      {
        id: "Mengembangkan frontend enterprise untuk Stock Monitoring & Delivery Control dengan React 19, TypeScript, Vite, dan Tailwind CSS, termasuk Dashboard Plan vs Actual vs On Process serta Shop-Floor TV Display untuk PPIC, Warehouse, dan Logistik.",
        en: "Engineered enterprise frontend for Stock Monitoring & Delivery Control using React 19, TypeScript, Vite, and Tailwind CSS, including Plan vs Actual dashboards and Shop-Floor TV Displays for PPIC, Warehouse, and Logistics.",
      },
      {
        id: "Mengembangkan Job Setup Verification untuk mendigitalisasi verifikasi Form F-PR10-HR09 pada mesin HR7, mencakup validasi parameter Shift 1 & Shift 2, observasi suhu/Release Agent, dan alur approval digital dengan PHP dan MySQL.",
        en: "Developed Job Setup Verification to digitize Form F-PR10-HR09 verification on HR7 machine, covering Shift 1 & 2 validation, temperature/Release Agent logs, and sequential approval with digital signatures using PHP and MySQL.",
      },
      {
        id: "Mengembangkan Management Information System (MIS) Aset untuk mengelola inventaris aset TI, dashboard, pencarian, audit trail, QR code, dan cetak memo aset dengan Python, Django, PostgreSQL, Docker, dan Nginx.",
        en: "Developed Management Information System (MIS) Aset to manage IT asset inventory, dashboards, asset search, audit trails, QR codes, and memo printing using Python, Django, PostgreSQL, Docker, and Nginx.",
      },
    ],
  },
  {
    id: "freelance-dev",
    type: "work",
    role: {
      id: "Freelance Full Stack Developer",
      en: "Freelance Full Stack Developer",
    },
    organization: "Independent",
    period: {
      id: "2026 – Sekarang",
      en: "2026 – Present",
    },
    points: [
      {
        id: "Mengembangkan Website TKQ An Naurah dan sistem PPDB online menggunakan React, Vite, Tailwind CSS, Express.js, Node.js, dan MySQL.",
        en: "Developed TKQ An Naurah Website and online PPDB system using React, Vite, Tailwind CSS, Express.js, Node.js, and MySQL.",
      },
    ],
  },
  {
    id: "umy-final-project",
    type: "work",
    role: {
      id: "Full Stack Web Developer — Tugas Akhir",
      en: "Full Stack Web Developer — Capstone Project",
    },
    organization: "Universitas Muhammadiyah Yogyakarta",
    period: {
      id: "Feb 2026 – Apr 2026",
      en: "Feb 2026 – Apr 2026",
    },
    points: [
      {
        id: "Mengembangkan Aplikasi Manajemen Sekolah untuk MIM Troketon, digitalisasi data siswa, jadwal, dan nilai.",
        en: "Developed School Management App for MIM Troketon, digitizing student records, scheduling, and grading.",
      },
      {
        id: "Mengimplementasikan sistem PPDB online, mengurangi beban pendaftaran manual staf sekolah.",
        en: "Implemented online student enrollment (PPDB), automating paper-based registration workflows.",
      },
      {
        id: "Memvalidasi sistem melalui Black Box Testing dan evaluasi System Usability Scale (SUS).",
        en: "Validated system through Black Box Testing and achieved high usability scores on System Usability Scale (SUS).",
      },
    ],
  },
  {
    id: "diskominfo-bantul",
    type: "work",
    role: {
      id: "Web Development Intern",
      en: "Web Development Intern",
    },
    organization: "Diskominfo Kabupaten Bantul",
    period: {
      id: "Nov 2025 – Des 2025",
      en: "Nov 2025 – Dec 2025",
    },
    points: [
      {
        id: "Membangun Aplikasi Manajemen Antrian Pelayanan Publik dengan pembaruan real-time via WebSocket.",
        en: "Engineered real-time public service Queue Management Application with zero-delay WebSocket updates.",
      },
      {
        id: "Meningkatkan akurasi data dengan validasi form yang kuat dan arsitektur modular berbasis fitur pada React.js.",
        en: "Enhanced data integrity with rigorous input validation and clean feature-based modular React architecture.",
      },
    ],
  },
  {
    id: "lab-assistant",
    type: "work",
    role: {
      id: "Asisten Laboratorium — Basis Data",
      en: "Laboratory Assistant — Database Systems",
    },
    organization: "Universitas Muhammadiyah Yogyakarta",
    period: {
      id: "Sep 2024 – Feb 2025",
      en: "Sep 2024 – Feb 2025",
    },
    points: [
      {
        id: "Membimbing mahasiswa dalam sesi praktikum SQL, pemodelan relasional, dan administrasi database.",
        en: "Mentored students in practical SQL sessions, relational database modeling, and database administration.",
      },
      {
        id: "Mengevaluasi tugas praktikum mahasiswa dan menyusun laporan evaluasi laboratorium.",
        en: "Evaluated lab assignments and compiled comprehensive performance reports.",
      },
    ],
  },
  {
    id: "education-degree",
    type: "education",
    role: {
      id: "S1 Teknologi Informasi",
      en: "Bachelor of Information Technology",
    },
    organization: "Universitas Muhammadiyah Yogyakarta · IPK 3.85 / 4.00",
    period: {
      id: "Sep 2022 – Apr 2026",
      en: "Sep 2022 – Apr 2026",
    },
    points: [
      {
        id: "Spesialisasi di Rekayasa Perangkat Lunak (Web Development). Lulus dengan predikat sangat memuaskan (IPK 3.85/4.00).",
        en: "Specialized in Software Engineering (Web Development). Graduated with honors (GPA 3.85 / 4.00).",
      },
      {
        id: "Aktif di Himpunan Mahasiswa Informatika (KMTI), IT Specta, dan kepanitiaan orientasi kampus.",
        en: "Active contributor in Informatics Student Association (KMTI), IT Specta, and campus orientation committees.",
      },
    ],
  },
];
