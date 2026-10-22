export interface ProfileData {
  name: string;
  initials: string;
  role: {
    id: string;
    en: string;
  };
  location: {
    id: string;
    en: string;
  };
  email: string;
  phone: string;
  whatsappUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  cvUrl: string;
  status: {
    id: string;
    en: string;
    available: boolean;
  };
  education: {
    degree: string;
    institution: string;
    period: string;
    gpa: string;
    toefl: string;
  };
  photos: {
    desktop: string;
    mobile: string;
    full: string;
  };
  stats: Array<{
    value: string;
    label: {
      id: string;
      en: string;
    };
  }>;
}

export const profileData: ProfileData = {
  name: "Rafi Alif Azhar",
  initials: "RA",
  role: {
    id: "Full Stack Web Developer",
    en: "Full Stack Web Developer",
  },
  location: {
    id: "Karawang, Jawa Barat, Indonesia",
    en: "Karawang, West Java, Indonesia",
  },
  email: "rafipilo17@gmail.com",
  phone: "+6281315887085",
  whatsappUrl: "https://wa.me/6281315887085",
  githubUrl: "https://github.com/rafiazharr17",
  linkedinUrl: "https://linkedin.com/in/rafiazharr17",
  cvUrl: "/documents/cv-rafi-alif-azhar.pdf",
  status: {
    id: "Terbuka untuk posisi penuh waktu",
    en: "Available for full-time roles",
    available: true,
  },
  education: {
    degree: "S1 Teknologi Informasi",
    institution: "Universitas Muhammadiyah Yogyakarta",
    period: "2022 – 2026",
    gpa: "3.85 / 4.00",
    toefl: "TOEFL Equivalent Skor 601",
  },
  photos: {
    desktop: "/images/profile/photo-desktop.webp",
    mobile: "/images/profile/photo-mobile.webp",
    full: "/images/profile/photo.jpg",
  },
  stats: [
    {
      value: "3.85",
      label: { id: "IPK Kelulusan (4.00)", en: "Graduation GPA (4.00)" },
    },
    {
      value: "601",
      label: { id: "Skor TOEFL Equivalent", en: "TOEFL Equivalent Score" },
    },
    {
      value: "8+",
      label: { id: "Proyek Web Dibangun", en: "Web Projects Built" },
    },
    {
      value: "2",
      label: { id: "Sertifikasi Kompetensi", en: "Professional Certifications" },
    },
  ],
};
