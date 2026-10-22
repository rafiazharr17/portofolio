export type Language = "id" | "en";

export interface TranslationStrings {
  // Navigation
  nav_about: string;
  nav_projects: string;
  nav_certificates: string;
  nav_experience: string;
  nav_testimonials: string;
  nav_contact: string;
  nav_cta: string;

  // Hero
  hero_eyebrow: string;
  hero_available: string;
  hero_title_prefix: string;
  hero_desc: string;
  hero_btn_projects: string;
  hero_btn_cv: string;
  hero_btn_contact: string;
  hero_scroll_explore: string;
  hero_phrases: string[];

  // About
  about_eyebrow: string;
  about_title: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  tech_stack_title: string;
  info_location: string;
  info_education: string;
  info_gpa: string;
  info_toefl: string;
  info_certs: string;
  info_status: string;
  info_email: string;

  // Projects
  projects_eyebrow: string;
  projects_title: string;
  filter_all: string;
  filter_fullstack: string;
  filter_frontend: string;
  btn_demo: string;
  link_github: string;
  fallback_badge: string;
  fallback_hint_default: string;

  // Certificates
  certs_eyebrow: string;
  certs_title: string;
  cert_view_modal: string;
  cert_close_modal: string;

  // Experience
  exp_eyebrow: string;
  exp_title: string;

  // Testimonials
  testi_eyebrow: string;
  testi_title: string;

  // Contact
  contact_eyebrow: string;
  contact_title: string;
  contact_sub: string;
  contact_email_label: string;
  contact_copy_email: string;
  contact_copied_email: string;
  contact_open_mail: string;
  contact_whatsapp_label: string;
  contact_github_label: string;
  contact_linkedin_label: string;

  // Footer
  footer_text: string;

  // Theme & Language
  theme_dark: string;
  theme_light: string;
  theme_toggle_aria: string;
  language_toggle_aria: string;
  reduced_motion_active: string;
}

export const translations: Record<Language, TranslationStrings> = {
  id: {
    nav_about: "Tentang",
    nav_projects: "Proyek",
    nav_certificates: "Sertifikasi",
    nav_experience: "Pengalaman",
    nav_testimonials: "Testimoni",
    nav_contact: "Kontak",
    nav_cta: "Hire Me",

    hero_eyebrow: "DIGITAL WORKSPACE",
    hero_available: "Tersedia untuk Posisi Penuh Waktu",
    hero_title_prefix: "Halo, saya",
    hero_desc:
      "Full Stack Web Developer berbasis di Karawang, Jawa Barat. Membangun aplikasi web enterprise yang scalable, responsif, dan kaya performa menggunakan Django, Node.js, React, dan Laravel. Bersertifikasi BNSP dan Certiport.",
    hero_btn_projects: "Lihat Proyek",
    hero_btn_cv: "Download CV",
    hero_btn_contact: "Hubungi Saya",
    hero_scroll_explore: "Scroll untuk Menjelajah",
    hero_phrases: [
      "Full Stack Web Developer.",
      "Spesialis Python Django, Node.js & React.",
      "Terbuka untuk Posisi Penuh Waktu.",
    ],

    about_eyebrow: "01 / PROFIL",
    about_title: "Tentang Saya",
    about_p1:
      "Saya adalah Full Stack Web Developer yang berorientasi pada detail, dengan dasar yang kuat dalam rekayasa perangkat lunak web, perancangan arsitektur sistem, dan integrasi API enterprise.",
    about_p2:
      "Terbiasa membangun aplikasi skala produksi di sisi frontend maupun backend, menerapkan optimasi performa, database relational modeling, serta version control kolaboratif melalui Git & GitHub.",
    about_p3:
      "Menyelesaikan studi S1 Teknologi Informasi di Universitas Muhammadiyah Yogyakarta dengan IPK 3.85 / 4.00 dan skor TOEFL Equivalent 601.",
    tech_stack_title: "Tech Stack & Spesialisasi",
    info_location: "Lokasi",
    info_education: "Pendidikan",
    info_gpa: "IPK Kelulusan",
    info_toefl: "Bahasa Inggris",
    info_certs: "Sertifikasi",
    info_status: "Status",
    info_email: "Email Utama",

    projects_eyebrow: "02 / PORTFOLIO",
    projects_title: "Proyek Pilihan & Sistem Web",
    filter_all: "Semua",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    btn_demo: "Live Demo",
    link_github: "Lihat di GitHub →",
    fallback_badge: "Project Preview",
    fallback_hint_default: "Screenshot Segera Hadir",

    certs_eyebrow: "03 / KREDENSIAL",
    certs_title: "Sertifikasi & Pencapaian",
    cert_view_modal: "Lihat Dokumen Sertifikat",
    cert_close_modal: "Tutup Sertifikat",

    exp_eyebrow: "04 / PERJALANAN",
    exp_title: "Pengalaman Kerja & Pendidikan",

    testi_eyebrow: "05 / REKOMENDASI",
    testi_title: "Testimoni & Rekomendasi",

    contact_eyebrow: "06 / KOLABORASI",
    contact_title: "Mari Bangun Sesuatu yang Berdampak",
    contact_sub:
      "Saya aktif membuka peluang kerja penuh waktu sebagai Web Developer / Full Stack Engineer. Baik untuk mendiskusikan peluang karir, project baru, atau sekadar bertukar wawasan teknis — inbox saya selalu terbuka.",
    contact_email_label: "Kirim Email Langsung",
    contact_copy_email: "Salin Email",
    contact_copied_email: "Email Tersalin!",
    contact_open_mail: "Buka Email Client",
    contact_whatsapp_label: "WhatsApp Chat",
    contact_github_label: "GitHub Profile",
    contact_linkedin_label: "LinkedIn Profile",

    footer_text:
      "Dirancang & Dibangun oleh Rafi Alif Azhar — Karawang, Indonesia © 2026",

    theme_dark: "Mode Gelap",
    theme_light: "Mode Terang",
    theme_toggle_aria: "Ganti mode tampilan",
    language_toggle_aria: "Ganti bahasa (ID / EN)",
    reduced_motion_active: "Reduced motion aktif",
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_certificates: "Certificates",
    nav_experience: "Experience",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    nav_cta: "Hire Me",

    hero_eyebrow: "DIGITAL WORKSPACE",
    hero_available: "Available for Full-Time Roles",
    hero_title_prefix: "Hello, I'm",
    hero_desc:
      "Full Stack Web Developer based in Karawang, West Java. Engineering scalable, high-performance web applications using Django, Node.js, React, and Laravel. Certified by BNSP & Certiport.",
    hero_btn_projects: "View Projects",
    hero_btn_cv: "Download CV",
    hero_btn_contact: "Contact Me",
    hero_scroll_explore: "Scroll to Explore",
    hero_phrases: [
      "Full Stack Web Developer.",
      "Python Django, Node.js & React Specialist.",
      "Open to Full-Time Roles.",
    ],

    about_eyebrow: "01 / PROFILE",
    about_title: "About Me",
    about_p1:
      "I am a detail-oriented Full Stack Web Developer with a rigorous foundation in web engineering, software system architecture, and enterprise API integration.",
    about_p2:
      "Proficient in engineering production-grade systems across both frontend and backend, relational database schema modeling, and collaborative GitHub version control workflows.",
    about_p3:
      "Graduated with a Bachelor of Information Technology degree from Universitas Muhammadiyah Yogyakarta with a 3.85 / 4.00 GPA and a 601 TOEFL Equivalent score.",
    tech_stack_title: "Tech Stack & Expertise",
    info_location: "Location",
    info_education: "Education",
    info_gpa: "Graduation GPA",
    info_toefl: "English Proficiency",
    info_certs: "Certifications",
    info_status: "Status",
    info_email: "Primary Email",

    projects_eyebrow: "02 / PORTFOLIO",
    projects_title: "Featured Projects & Web Systems",
    filter_all: "All",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    btn_demo: "Live Demo",
    link_github: "View on GitHub →",
    fallback_badge: "Project Preview",
    fallback_hint_default: "Screenshot Coming Soon",

    certs_eyebrow: "03 / CREDENTIALS",
    certs_title: "Certifications & Achievements",
    cert_view_modal: "View Certificate Document",
    cert_close_modal: "Close Certificate",

    exp_eyebrow: "04 / JOURNEY",
    exp_title: "Experience & Education",

    testi_eyebrow: "05 / ENDORSEMENTS",
    testi_title: "Testimonials & Recommendations",

    contact_eyebrow: "06 / COLLABORATE",
    contact_title: "Let's Build Something Impactful",
    contact_sub:
      "I am actively seeking full-time roles as a Web Developer / Full Stack Software Engineer. Whether you have an open opportunity, an interesting project, or simply want to connect — my inbox is always open.",
    contact_email_label: "Direct Email",
    contact_copy_email: "Copy Email",
    contact_copied_email: "Copied!",
    contact_open_mail: "Open Mail App",
    contact_whatsapp_label: "WhatsApp Chat",
    contact_github_label: "GitHub Profile",
    contact_linkedin_label: "LinkedIn Profile",

    footer_text:
      "Designed & Engineered by Rafi Alif Azhar — Karawang, Indonesia © 2026",

    theme_dark: "Dark Mode",
    theme_light: "Light Mode",
    theme_toggle_aria: "Toggle color theme",
    language_toggle_aria: "Switch language (ID / EN)",
    reduced_motion_active: "Reduced motion active",
  },
};
