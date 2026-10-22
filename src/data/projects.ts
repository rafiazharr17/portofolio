export interface ProjectItem {
  id: string;
  type: "fullstack" | "frontend";
  year: string;
  title: string;
  subtitle: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  stack: string[];
  image?: string;
  fallbackTitle: string;
  fallbackHint: {
    id: string;
    en: string;
  };
  demoUrl?: string;
  githubUrl?: string;
  githubBackendUrl?: string;
  githubFrontendUrl?: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "tkq-annaurah",
    type: "fullstack",
    year: "2026",
    title: "Website TKQ An Naurah",
    subtitle: {
      id: "Website Resmi & Sistem Informasi PPDB Online",
      en: "Official Website & Online PPDB Information System",
    },
    description: {
      id: "Website resmi TKQ An Naurah dengan profil lembaga dan sistem PPDB online berbasis React, Express.js, Node.js, dan MySQL.",
      en: "Official TKQ An Naurah website with institutional information and an online PPDB system built with React, Express.js, Node.js, and MySQL.",
    },
    stack: [
      "React.js",
      "Vite",
      "Express.js",
      "Node.js",
      "MySQL",
      "Tailwind CSS",
      "JWT",
    ],
    image: "/images/projects/tkq-annaurah.jpeg",
    fallbackTitle: "Website TKQ An Naurah",
    fallbackHint: {
      id: "Portal sekolah & PPDB online",
      en: "School portal & online admissions",
    },
    demoUrl: "https://annaurahislamicschool.sch.id/",
    featured: true,
  },
  {
    id: "mis-asset",
    type: "fullstack",
    year: "2026",
    title: "Management Information System (MIS) Aset",
    subtitle: {
      id: "Manajemen Inventaris Aset TI Terpusat",
      en: "Centralized IT Asset Inventory Management",
    },
    description: {
      id: "Sistem Django terpusat untuk mengelola inventaris aset TI, dashboard, pencarian, audit trail, QR code, dan pencetakan memo aset.",
      en: "Centralized Django system for IT asset inventory, dashboards, multi-attribute search, audit trails, QR codes, and asset memo printing.",
    },
    stack: [
      "Python 3.11",
      "Django 5.2",
      "Django REST Framework",
      "PostgreSQL 14",
      "Tailwind CSS",
      "Docker",
      "Nginx",
    ],
    image: "/images/projects/asset-mis.jpeg",
    fallbackTitle: "Management Information System (MIS) Aset",
    fallbackHint: {
      id: "Sistem manajemen aset",
      en: "Asset management system",
    },
    featured: true,
  },
  {
    id: "job-setup",
    type: "fullstack",
    year: "2026",
    title: "Job Setup Verification",
    subtitle: {
      id: "Kontrol & Alur Approval Job Setup",
      en: "Digital Job Setup Control & Approval Workflow",
    },
    description: {
      id: "Sistem web untuk memvalidasi parameter Job Setup Shift 1 dan Shift 2 serta mengelola approval digital berurutan pada mesin HR7.",
      en: "Web system for validating Shift 1 and Shift 2 Job Setup parameters and managing sequential digital approval on the HR7 machine.",
    },
    stack: ["PHP", "MySQL", "Session Auth", "Responsive UI"],
    image: "/images/projects/job-setup-verification.jpeg",
    fallbackTitle: "Job Setup Verification",
    fallbackHint: {
      id: "Sistem alur kerja produksi",
      en: "Production workflow system",
    },
    featured: true,
  },
  {
    id: "stock-monitoring",
    type: "frontend",
    year: "2026",
    title: "Stock Monitoring & Delivery Control",
    subtitle: {
      id: "Sistem Kontrol Pabrik & Traceability End-to-End",
      en: "Real-Time Production, Inventory & Logistics Monitoring System",
    },
    description: {
      id: "Platform kontrol pabrik untuk memantau delivery, produksi, inventory, inbound, outbound, dan dokumen BMB/BPB secara real-time.",
      en: "Replaces manual spreadsheet records at PT. Inoac Polytechno Indonesia Plant #2 with an enterprise real-time monitoring platform built with React 19, TypeScript, and Tailwind CSS integrated via REST API. Features Recharts data visualization and Shop-Floor TV Displays to deliver instant Plan vs Actual metrics and accelerate Finish Good inventory reconciliation across divisions (PPIC, Warehouse, Logistics).",
    },
    stack: [
      "React 19",
      "Vite 8",
      "TypeScript 6",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
      "React Router 7",
      "Axios",
      "Laravel REST API",
    ],
    image: "/images/projects/dashboard-logistic-flex.png",
    fallbackTitle: "Stock Monitoring & Delivery Control",
    fallbackHint: {
      id: "Sistem monitoring industri",
      en: "Industrial monitoring system",
    },
    featured: true,
  },
  {
    id: "school-management",
    type: "fullstack",
    year: "2026",
    title: "School Management App",
    subtitle: {
      id: "Final Project, Universitas Muhammadiyah Yogyakarta",
      en: "Final Project, Universitas Muhammadiyah Yogyakarta",
    },
    description: {
      id: "Aplikasi manajemen sekolah untuk PPDB online, penjadwalan, dan pengelolaan nilai dengan validasi Black Box Testing dan SUS.",
      en: "Full-stack school management web app using Node.js, React.js, Tailwind CSS, and MySQL featuring online PPDB, grade management, and integrated scheduling with SUS evaluations.",
    },
    stack: ["Node.js", "React.js", "MySQL", "Tailwind CSS", "SUS Testing"],
    fallbackTitle: "School Management App",
    fallbackHint: {
      id: "Aplikasi manajemen akademik",
      en: "Academic management system",
    },
  },
  {
    id: "queue-management",
    type: "fullstack",
    year: "2025",
    title: "Queue Management App",
    subtitle: {
      id: "Magang, Diskominfo Kab. Bantul",
      en: "Internship, Bantul Regency Dept. of Communications & IT",
    },
    description: {
      id: "Aplikasi antrean layanan publik real-time berbasis WebSocket dengan backend Node.js dan antarmuka React.js.",
      en: "Real-time queue management system with WebSockets, a Node.js backend, and a feature-based React.js modular interface for zero-delay calling.",
    },
    stack: ["Node.js", "WebSocket", "React.js", "MySQL"],
    fallbackTitle: "Queue Management App",
    fallbackHint: {
      id: "Antrean real-time publik",
      en: "Real-time public service queue",
    },
  },
  {
    id: "materiku",
    type: "fullstack",
    year: "2025",
    title: "MateriKu: Learning Platform",
    subtitle: {
      id: "Full Stack Web Developer",
      en: "Full Stack Web Developer",
    },
    description: {
      id: "Platform LMS terpusat berbasis Laravel dengan autentikasi Breeze dan akses berbeda untuk Admin, Guru, dan Siswa.",
      en: "Centralized LMS platform using Laravel, MySQL, and Tailwind CSS with secure Laravel Breeze authentication and RBAC for 3 user roles.",
    },
    stack: ["Laravel", "Breeze", "MySQL", "Tailwind CSS"],
    fallbackTitle: "MateriKu: Learning Platform",
    fallbackHint: {
      id: "Platform e-learning terpadu",
      en: "Integrated e-learning platform",
    },
  },
  {
    id: "cloud-hotstar",
    type: "frontend",
    year: "2024",
    title: "Cloud Hotstar",
    subtitle: {
      id: "Movie Discovery Platform",
      en: "Movie Discovery Platform",
    },
    description: {
      id: "Platform penemuan film berbasis React.js dengan pencarian genre, autentikasi Supabase, dan animasi Framer Motion.",
      en: "Modern movie discovery web app using React.js and Tailwind CSS with smooth micro-animations and Supabase user authentication.",
    },
    stack: ["React.js", "Supabase", "Framer Motion", "Tailwind CSS"],
    fallbackTitle: "Cloud Hotstar",
    fallbackHint: {
      id: "Katalog penjelajah film",
      en: "Movie discovery platform",
    },
  },
  {
    id: "canela-dessert",
    type: "frontend",
    year: "2024",
    title: "Canela Dessert",
    subtitle: {
      id: "Brand Landing Page",
      en: "Brand Landing Page",
    },
    description: {
      id: "Landing page multi-halaman responsif untuk Canela Dessert dengan validasi form JavaScript dan deployment GitHub Pages.",
      en: "Responsive multi-page website built with HTML, CSS, and interactive vanilla JavaScript form validation, deployed to GitHub Pages.",
    },
    stack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    fallbackTitle: "Canela Dessert",
    fallbackHint: {
      id: "Website profil UMKM",
      en: "Culinary brand landing page",
    },
  },
];
