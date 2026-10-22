export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  date: {
    id: string;
    en: string;
  };
  validity: {
    id: string;
    en: string;
  };
  image: string;
}

export const certificatesData: CertificateItem[] = [
  {
    id: "bnsp-web",
    name: "Web Development",
    issuer: "BNSP — Badan Nasional Sertifikasi Profesi",
    date: {
      id: "Maret 2026",
      en: "March 2026",
    },
    validity: {
      id: "Berlaku s/d 2029",
      en: "Valid thru 2029",
    },
    image: "/images/certificates/BNSP.jpg",
  },
  {
    id: "certiport-html5",
    name: "HTML5 Application Development",
    issuer: "IT Specialist — Certiport / CertNexus / Pearson VUE",
    date: {
      id: "Juni 2026",
      en: "June 2026",
    },
    validity: {
      id: "Berlaku s/d 2031",
      en: "Valid thru 2031",
    },
    image: "/images/certificates/HTML5.jpg",
  },
  {
    id: "excel-admin",
    name: "Dasar Microsoft Excel — Administrasi Perkantoran",
    issuer: "yec.co.id — Yureka Edukasi Cipta",
    date: {
      id: "Juli 2026",
      en: "July 2026",
    },
    validity: {
      id: "Terverifikasi",
      en: "Verified",
    },
    image: "/images/certificates/Excel.jpg",
  },
  {
    id: "tlab-deployment",
    name: "Software Deployment",
    issuer: "TLab — Universitas Muhammadiyah Yogyakarta",
    date: {
      id: "Juli 2025",
      en: "July 2025",
    },
    validity: {
      id: "Terverifikasi",
      en: "Verified",
    },
    image: "/images/certificates/TLab.jpg",
  },
  {
    id: "toefl-score",
    name: "TOEFL Equivalent — Skor 601",
    issuer: "HOPE — Higher Objectives of Professional Education",
    date: {
      id: "Juli 2025",
      en: "July 2025",
    },
    validity: {
      id: "Intermediate",
      en: "Intermediate",
    },
    image: "/images/certificates/TOEFL.jpg",
  },
];
