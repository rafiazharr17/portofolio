# PRD.md — Portfolio Rafi Alif Azhar

> Product Requirements Document untuk migrasi dan pengembangan ulang portfolio pribadi menjadi aplikasi Next.js yang siap di-deploy ke Vercel.
>
> **Status:** Draft untuk implementasi  
> **Pemilik produk:** Rafi Alif Azhar  
> **Produk:** Personal Developer Portfolio  
> **Target deployment:** Vercel

## 1. Ringkasan Produk

Portfolio pribadi Rafi Alif Azhar akan dibangun ulang menggunakan Next.js dari website HTML, CSS, dan JavaScript saat ini. Website berfungsi sebagai profil profesional, showcase proyek, bukti kompetensi, pengalaman, serta kanal kontak untuk recruiter, perusahaan, dan calon klien.

Versi baru harus mempertahankan informasi inti dan fitur yang masih relevan dari website lama, sekaligus meningkatkan struktur kode, performa, aksesibilitas, SEO, responsivitas, dan pengalaman visual. Website akan memiliki visual modern dengan aksen biru dan elemen 3D berbasis Three.js yang digunakan secara terukur, bukan sampai mengganggu keterbacaan atau performa.

## 2. Latar Belakang dan Masalah

Website saat ini memakai `index.html`, `style.css`, dan `script.js` secara langsung. Interaksi seperti pergantian bahasa, tema, animasi teks, filter proyek, serta reveal saat scroll dikelola melalui JavaScript DOM.

Migrasi ke Next.js ditujukan untuk:
- Memiliki struktur komponen dan data yang lebih terorganisasi.
- Memudahkan pemeliharaan konten proyek, sertifikasi, dan pengalaman.
- Mendukung metadata per halaman, Open Graph, dan SEO yang lebih baik.
- Menyediakan proses build dan deployment yang sederhana melalui Vercel.
- Menjaga pengalaman mobile dan aksesibilitas.
- Menambahkan elemen Three.js tanpa menjadikan animasi sebagai hambatan utama.

## 3. Tujuan Produk

### 3.1 Tujuan utama
1. Menampilkan identitas profesional dan spesialisasi Rafi sebagai Web Developer.
2. Menampilkan proyek yang relevan, teknologi yang digunakan, pengalaman, pendidikan, sertifikasi, dan testimoni.
3. Memudahkan recruiter atau calon klien menghubungi pemilik portfolio.
4. Memberikan pengalaman visual yang modern, responsif, dan profesional.
5. Memastikan website dapat di-deploy di Vercel tanpa membutuhkan server khusus.

### 3.2 Indikator keberhasilan
- Semua section utama dapat diakses melalui navigasi dan tautan anchor.
- Seluruh tombol dan interaksi yang ditampilkan bekerja dengan benar.
- Tampilan tidak mengalami horizontal overflow pada ukuran mobile.
- Build production berhasil dan dapat di-deploy ke Vercel.
- Metadata, title, description, canonical, dan Open Graph terkonfigurasi.
- Animasi 3D tidak menghalangi konten, navigasi, atau interaksi utama.
- Pengguna tetap dapat memahami isi website ketika animasi dinonaktifkan atau WebGL tidak tersedia.

## 4. Target Pengguna

| Pengguna | Kebutuhan |
|---|---|
| Recruiter / HR | Menilai profil, skill, pengalaman, pendidikan, dan CV dengan cepat |
| Engineering manager / developer | Memahami kontribusi, stack, dan ruang lingkup proyek |
| Calon klien | Melihat hasil pekerjaan dan menemukan cara menghubungi pemilik |
| Pengunjung umum | Mengenal profil dan karya Rafi |

## 5. Ruang Lingkup

### 5.1 Termasuk dalam MVP
- One-page portfolio dengan navigasi ke section.
- Hero section dengan nama, role, status ketersediaan, foto, CTA, dan statistik.
- About / profil singkat.
- Daftar teknologi dan skill.
- Project portfolio dengan filter kategori.
- Sertifikasi dan pencapaian.
- Pengalaman dan pendidikan.
- Testimoni.
- Contact section dan tautan eksternal.
- Download CV dalam format PDF.
- Toggle bahasa Indonesia / English.
- Toggle light / dark mode.
- Animasi ringan dan efek 3D Three.js yang bersifat dekoratif.
- Responsive layout untuk desktop, tablet, dan mobile.
- SEO metadata dan deployment Vercel.
- Fallback jika foto, preview proyek, atau WebGL tidak tersedia.

### 5.2 Tidak termasuk dalam MVP
- CMS atau dashboard admin untuk mengubah konten.
- Database dan autentikasi pengguna.
- Backend API khusus.
- Form kontak yang menyimpan pesan ke database.
- Blog atau sistem artikel.
- Analytics berbayar atau pelacakan pengguna yang invasif.
- 3D scene kompleks yang wajib dimuat sebelum halaman dapat digunakan.

Kontak pada MVP dapat menggunakan `mailto:` dan tautan sosial yang sudah diverifikasi. Form server-side baru ditambahkan jika ada kebutuhan dan layanan pengiriman yang dipilih.

## 6. Informasi dan Konten

Konten awal diambil dari website saat ini. Data harus disimpan dalam modul data terpisah agar pembaruan tidak memerlukan perubahan layout.

### 6.1 Identitas
- Nama: Rafi Alif Azhar
- Peran: Full Stack Web Developer / Web Developer
- Lokasi: Karawang, Jawa Barat, Indonesia
- Email: `rafipilo17@gmail.com`
- Pendidikan: S1 Teknologi Informasi, Universitas Muhammadiyah Yogyakarta
- IPK yang tercantum di website saat ini: 3.85 / 4.00
- TOEFL Prediction yang tercantum: 601
- Sertifikasi yang tercantum: BNSP Web Developer dan Certiport HTML5 Application Development
- GitHub: `https://github.com/rafiazharr17`

Informasi di atas adalah konten sumber awal dan harus diverifikasi pemilik sebelum rilis publik, terutama status “Open to Work”, periode pengalaman, angka statistik, dan informasi yang dapat berubah.

### 6.2 Section website
1. Navbar
2. Hero
3. About
4. Projects
5. Certificates & Achievements
6. Experience & Education
7. Testimonials
8. Contact
9. Footer

### 6.3 Proyek yang sudah ditampilkan
Konten sumber mencakup antara lain:
- Management Information System (MIS) Aset
- Job Setup Verification
- Stock Monitoring & Delivery Control
- Website TKQ An Naurah dan sistem PPDB online
- School Management App
- Aplikasi antrean pelayanan publik
- Learning Management System
- Movie Discovery Platform
- Brand Landing Page Canela Dessert

Nama, deskripsi, tahun, stack, thumbnail, demo URL, dan repository URL harus diambil dari data sumber yang tersedia dan diverifikasi sebelum dipublikasikan. Jangan membuat tautan atau klaim hasil yang belum terkonfirmasi.

## 7. Kebutuhan Fungsional

### FR-01 — Navigasi
- Navbar menyediakan tautan ke section About, Projects, Certificates, Experience, Testimonials, dan Contact.
- Logo/nama mengarah kembali ke Hero.
- Navigasi menggunakan anchor yang valid dan memperhitungkan tinggi navbar fixed/sticky.
- Pada layar kecil, menu harus menjadi mobile navigation yang mudah digunakan.

### FR-02 — Hero dan CTA
- Menampilkan nama, profesi, deskripsi singkat, foto, status ketersediaan, dan statistik.
- Menyediakan CTA untuk melihat proyek, mengunduh CV, dan menghubungi pemilik.
- Efek teks berganti (typewriter) boleh digunakan, tetapi teks utama profesi tetap dapat dibaca tanpa menunggu animasi.
- CV mengarah ke berkas lokal yang benar di folder `public`.

### FR-03 — About dan Skills
- Menampilkan ringkasan profil, pendidikan, IPK, TOEFL, sertifikasi, lokasi, status, dan email sesuai data yang telah diverifikasi.
- Menampilkan skill/teknologi dalam chip atau kelompok kategori.
- Tidak boleh menyatakan kemampuan atau sertifikasi yang belum dikonfirmasi.

### FR-04 — Project Portfolio
- Proyek ditampilkan dalam grid kartu yang responsif.
- Kartu berisi judul, kategori, tahun (jika tersedia), deskripsi, stack, preview gambar, dan tautan yang relevan.
- Filter minimal: Semua, Full Stack, Frontend.
- Filter harus memperbarui hasil secara langsung dan memiliki status aktif yang jelas.
- Gambar gagal dimuat harus menampilkan fallback yang rapi.
- Tautan eksternal dibuka dengan konfigurasi keamanan yang tepat.

### FR-05 — Sertifikasi
- Menampilkan nama sertifikasi/pencapaian dan informasi pendukung yang tersedia.
- Gambar sertifikat, penerbit, tanggal, credential ID, atau tautan verifikasi hanya ditampilkan jika datanya tersedia dan benar.
- Jangan membuat credential ID atau tanggal sendiri.

### FR-06 — Experience & Education
- Menampilkan pengalaman kerja/magang/freelance serta pendidikan dalam format timeline atau daftar terstruktur.
- Setiap item dapat memiliki role, organisasi, periode, dan bullet tanggung jawab.
- Periode dan status pekerjaan harus diperiksa sebelum rilis.

### FR-07 — Testimonials
- Menampilkan kutipan, nama organisasi, dan identitas pemberi testimoni jika memang tersedia dan mendapat izin untuk dipublikasikan.
- Jangan menambah atau mengubah kutipan menjadi klaim baru.

### FR-08 — Internationalization
- Bahasa Indonesia dan English tersedia melalui toggle.
- Bahasa default: Indonesia.
- Preferensi bahasa disimpan di browser dan dipulihkan pada kunjungan berikutnya.
- Seluruh teks UI utama harus memiliki terjemahan yang sepadan.
- Atribut `lang` dokumen mengikuti bahasa yang aktif.
- Implementasi tidak boleh menimbulkan hydration mismatch pada Next.js.

### FR-09 — Theme
- Light mode dan dark mode tersedia.
- Preferensi awal mengikuti pilihan tersimpan, jika ada; jika tidak, gunakan preferensi sistem.
- Preferensi disimpan di browser.
- Perubahan tema harus berlaku konsisten untuk semua section, komponen, dan elemen 3D yang relevan.
- Hindari kilatan tema yang salah saat halaman pertama kali dimuat.

### FR-10 — Motion dan Three.js
- Elemen 3D berfungsi sebagai visual pendukung, misalnya objek abstrak, titik/partikel, wireframe, atau bentuk geometris di area Hero.
- Scene tidak boleh menutupi teks atau menangkap klik pada CTA.
- Sediakan fallback visual non-WebGL.
- Hormati `prefers-reduced-motion`.
- Kurangi kompleksitas atau nonaktifkan scene pada perangkat dengan kemampuan terbatas bila diperlukan.
- Bersihkan renderer, event listener, observer, dan animation loop saat komponen dilepas.
- Three.js dimuat secara client-side dan tidak menjadi syarat untuk merender konten utama.

### FR-11 — Contact dan External Links
- Email membuka aplikasi email melalui `mailto:`.
- Link GitHub dan profil sosial menggunakan URL yang telah diverifikasi.
- Semua tautan harus memiliki label yang jelas dan dapat digunakan melalui keyboard.

### FR-12 — SEO dan Sharing
- Menyediakan title dan meta description yang spesifik.
- Menyediakan canonical URL sesuai domain produksi setelah ditetapkan.
- Menyediakan Open Graph dan Twitter/X card metadata.
- Menyediakan favicon dan social preview image yang valid.
- Struktur heading semantik dan teks konten utama harus tersedia pada HTML hasil render.

## 8. Kebutuhan Nonfungsional

### NFR-01 — Performa
- Utamakan Server Components untuk konten statis.
- Gunakan Client Components hanya untuk interaksi yang membutuhkan state, browser API, atau WebGL.
- Gunakan `next/image` untuk gambar yang sesuai.
- Lazy-load scene Three.js dan komponen yang berat.
- Hindari memuat banyak library animasi yang melakukan fungsi serupa.
- Target Core Web Vitals: LCP ≤ 2.5 detik, INP ≤ 200 ms, CLS ≤ 0.1 pada kondisi pengukuran yang layak. Ini merupakan target, bukan jaminan otomatis.

### NFR-02 — Responsivitas
- Mendukung lebar layar sekitar 320 px hingga layar desktop besar.
- Tidak ada horizontal scroll yang tidak disengaja.
- CTA, menu, filter, dan toggle mudah disentuh pada layar mobile.

### NFR-03 — Aksesibilitas
- Gunakan HTML semantik.
- Semua kontrol interaktif memiliki accessible name.
- Fokus keyboard terlihat.
- Kontras teks memenuhi WCAG AA sejauh memungkinkan.
- Jangan mengandalkan warna saja untuk menunjukkan status.
- Hormati `prefers-reduced-motion`.
- Scene dekoratif diberi `aria-hidden="true"` dan tidak masuk urutan fokus.

### NFR-04 — Keamanan dan privasi
- Tidak menyimpan rahasia di client-side.
- Tidak memerlukan environment secret untuk website statis kecuali fitur tambahan nantinya membutuhkan.
- Hindari penggunaan `dangerouslySetInnerHTML` untuk data konten yang tidak tepercaya.
- Tidak mengumpulkan data pribadi pengunjung pada MVP.

### NFR-05 — Maintainability
- Konten dipisahkan dari komponen presentasi.
- Komponen digunakan ulang untuk kartu proyek, skill, sertifikasi, timeline, dan tombol.
- TypeScript digunakan untuk mengurangi kesalahan data dan props.
- Tidak ada tautan placeholder atau tombol yang tidak berfungsi.

## 9. Rekomendasi Teknologi

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D:** Three.js; React Three Fiber dan Drei boleh dipakai jika memang menyederhanakan integrasi React
- **Animation:** CSS transitions / Framer Motion hanya jika diperlukan; pilih solusi minimal
- **Icons:** Lucide React atau SVG yang konsisten
- **Images:** `next/image`
- **Hosting:** Vercel
- **Content:** file TypeScript/JSON lokal; tidak memerlukan database untuk MVP

Versi paket harus mengikuti versi stabil yang kompatibel saat implementasi. Hindari menambahkan dependensi yang tidak memberikan manfaat jelas.

## 10. Struktur Konten dan Aset

Contoh struktur direktori yang disarankan:

```text
public/
  images/
    profile/
    projects/
    certificates/
    og-image.png
  documents/
    cv-rafi-alif-azhar.pdf
  favicon.ico

src/
  app/
    layout.tsx
    page.tsx
    globals.css
    opengraph-image.tsx        # opsional
  components/
    layout/
      navbar.tsx
      footer.tsx
      mobile-nav.tsx
    sections/
      hero.tsx
      about.tsx
      projects.tsx
      certificates.tsx
      experience.tsx
      testimonials.tsx
      contact.tsx
    ui/
      button.tsx
      section-heading.tsx
      project-card.tsx
      skill-chip.tsx
    three/
      hero-scene.tsx
      three-fallback.tsx
  data/
    profile.ts
    projects.ts
    certificates.ts
    experience.ts
    testimonials.ts
    translations.ts
  hooks/
    use-theme.ts
    use-language.ts
```

Struktur ini merupakan rekomendasi; boleh disesuaikan selama pemisahan tanggung jawab tetap jelas.

## 11. Deployment dan Environment

- Repository dihubungkan ke Vercel.
- Framework preset Next.js harus terdeteksi dengan benar.
- Build command dan output directory mengikuti default Next.js kecuali ada alasan kuat untuk mengubahnya.
- Domain produksi dan `metadataBase` diatur setelah domain final diketahui.
- File CV, foto, preview, dan aset lainnya disimpan di `public/` dengan path yang konsisten.
- Tidak diperlukan environment variable untuk fitur statis MVP.
- Setelah deployment, verifikasi halaman production, metadata, tautan, gambar, mode tema, bahasa, dan tampilan mobile.

## 12. Acceptance Criteria

- [ ] Aplikasi dibangun dengan Next.js App Router dan TypeScript.
- [ ] Seluruh section utama tampil dan navigasi anchor berfungsi.
- [ ] Konten proyek, sertifikasi, pengalaman, testimoni, dan skill berasal dari data terstruktur.
- [ ] Filter proyek berfungsi untuk semua kategori yang tersedia.
- [ ] Toggle ID/EN menerjemahkan semua teks utama dan persist setelah refresh.
- [ ] Toggle light/dark berfungsi dan preferensi tersimpan.
- [ ] Tombol download CV menunjuk ke PDF yang benar.
- [ ] Link email, GitHub, demo, dan repository sudah diverifikasi.
- [ ] Layout berjalan di mobile, tablet, dan desktop tanpa overflow horizontal.
- [ ] Scene Three.js memiliki fallback, tidak menghalangi konten, dan menghormati reduced motion.
- [ ] Metadata SEO dan social sharing tersedia.
- [ ] `npm run build` berhasil.
- [ ] Deployment Vercel berhasil dan semua aset tersedia di production.
- [ ] Tidak ada error runtime penting di browser console.

## 13. Tahapan Implementasi

1. **Audit & content migration** — inventaris konten, gambar, CV, sertifikasi, demo, dan repository.
2. **Project setup** — Next.js App Router, TypeScript, Tailwind, linting, dan struktur folder.
3. **Core layout** — metadata, font, navbar, footer, container, dan design tokens.
4. **Content sections** — hero, about, projects, certificates, experience, testimonials, contact.
5. **Interactions** — filter proyek, bahasa, tema, mobile nav, dan animasi ringan.
6. **Three.js** — implementasi scene dekoratif yang lazy-loaded dan memiliki fallback.
7. **Quality checks** — responsivitas, aksesibilitas, SEO, tautan, dan build.
8. **Vercel deployment** — deploy preview, QA, lalu production.

## 14. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Three.js menambah beban halaman | Lazy-load, kurangi objek, fallback statis, evaluasi perangkat mobile |
| Tema atau bahasa menyebabkan hydration mismatch | Render state awal yang konsisten dan sinkronkan preferensi setelah mount atau gunakan strategi cookie yang tepat |
| Aset lama tidak ikut dipindahkan | Audit semua path relatif dan pindahkan aset ke `public/` |
| Link demo/repository sudah berubah | Verifikasi setiap URL sebelum rilis |
| Konten profesional tidak lagi akurat | Konfirmasi angka, status, periode, dan klaim kepada pemilik |
| Motion mengganggu pengguna | Hormati reduced motion dan sediakan pengalaman tanpa animasi |
| Metadata masih memakai URL GitHub Pages | Perbarui canonical dan metadataBase setelah domain Vercel/domain custom ditetapkan |

## 15. Keputusan yang Masih Perlu Dikonfirmasi

- Domain final yang akan digunakan.
- Apakah semua konten dan susunan section dipertahankan persis atau boleh disederhanakan.
- URL sosial, demo, dan repository final untuk setiap proyek.
- Aset final untuk foto profil, sertifikat, preview proyek, dan CV.
- Tingkat kompleksitas scene Three.js yang sesuai dengan performa target.

**Prinsip utama:** konten profesional dan kemudahan menghubungi pemilik portfolio lebih penting daripada efek visual. Three.js harus memperkuat identitas visual tanpa mengorbankan performa, aksesibilitas, atau kejelasan informasi.
