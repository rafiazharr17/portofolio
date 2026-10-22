export interface TestimonialItem {
  id: string;
  name: string;
  role: {
    id: string;
    en: string;
  };
  quote: {
    id: string;
    en: string;
  };
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "diskominfo",
    name: "Diskominfo Kab. Bantul",
    role: {
      id: "Dinas Komunikasi dan Informatika",
      en: "Department of Communications & Information Technology",
    },
    quote: {
      id: "Rafi menunjukkan dedikasi dan inisiatif tinggi saat magang. Aplikasi manajemen antrean real-time berbasis WebSocket yang ia bangun berjalan responsif, stabil, dan sangat membantu kelancaran loket pelayanan publik kami.",
      en: "Rafi demonstrated great dedication and initiative during his internship. The real-time queue management system with WebSockets he developed proved responsive, stable, and greatly aided our public service counters.",
    },
  },
  {
    id: "umy",
    name: "Universitas Muhammadiyah Yogyakarta",
    role: {
      id: "Program Studi Teknologi Informasi",
      en: "Information Technology Department",
    },
    quote: {
      id: "Pengerjaan tugas akhir School Management App untuk MIM Troketon dieksekusi dengan sangat terencana, mulai dari perancangan arsitektur hingga pengujian SUS. Rafi memiliki dasar rekayasa web yang kuat dan kode yang terstruktur rapi.",
      en: "The School Management App capstone project for MIM Troketon was executed with excellence from architecture to SUS evaluation. Rafi has a solid foundation in web engineering and clean, organized code.",
    },
  },
  {
    id: "tkq-annaurah",
    name: "TKQ An Naurah Islamic School",
    role: {
      id: "Pengelola Lembaga Pendidikan",
      en: "Institutional Administration",
    },
    quote: {
      id: "Kami sangat terbantu dengan kehadiran website resmi dan sistem PPDB online TKQ An Naurah. Aplikasinya memudahkan pendaftaran santri baru secara online, mudah diakses orang tua, dan pengelolaan datanya sangat tertata.",
      en: "We are extremely grateful for the official website and online PPDB system for TKQ An Naurah. It made new student enrollment seamless, accessible for parents, and keeps records secure and organized.",
    },
  },
];
