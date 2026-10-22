# DESIGN.md — Visual & Technical Design

> Panduan desain visual, interaksi, komponen, dan arsitektur frontend untuk Portfolio Rafi Alif Azhar berbasis Next.js dan Vercel.

## 1. Design Direction

### Konsep
**Modern Developer Portfolio — Editorial Minimalism with Subtle 3D**

Portfolio harus terasa profesional, rapi, teknis, dan personal. Visual utama menggabungkan tipografi tegas, whitespace yang cukup, permukaan bersih, aksen biru, detail monospaced yang terinspirasi terminal, serta satu elemen Three.js yang halus sebagai identitas visual.

Jangan mengubah website menjadi landing page penuh efek yang sulit dibaca. Pengunjung harus bisa memahami siapa Rafi, proyek apa yang pernah dibuat, dan cara menghubunginya dalam waktu singkat.

### Prinsip desain
1. **Content first:** informasi karier dan proyek selalu menjadi fokus.
2. **Quiet confidence:** animasi dan dekorasi tidak mendominasi.
3. **Consistent system:** spacing, radius, warna, dan tipografi menggunakan token.
4. **Responsive by default:** desain mobile bukan versi desktop yang diperkecil.
5. **Accessible motion:** setiap animasi harus memiliki alasan dan fallback.
6. **Performance-aware 3D:** Three.js bersifat progresif dan dekoratif.

## 2. Identitas Visual

### Warna

Pertahankan aksen biru dari website lama sebagai penghubung identitas visual. Nilai berikut adalah titik awal yang boleh disesuaikan setelah uji kontras.

| Token | Light mode | Dark mode | Penggunaan |
|---|---|---|---|
| `--background` | `#FAFAF9` | `#0B0D12` | Latar utama |
| `--surface` | `#FFFFFF` | `#121722` | Kartu dan panel |
| `--surface-muted` | `#F4F3F0` | `#171D29` | Area section alternatif |
| `--foreground` | `#1A1A1A` | `#F4F6FA` | Heading dan teks utama |
| `--muted` | `#626875` | `#A2A9B8` | Deskripsi dan teks sekunder |
| `--border` | `rgba(0,0,0,.09)` | `rgba(255,255,255,.10)` | Border |
| `--primary` | `#1A6EF7` | `#5B94FF` | CTA, link, highlight |
| `--primary-hover` | `#1050C8` | `#8AB2FF` | Hover/focus |
| `--success` | `#0B8A47` | `#55D68A` | Status tersedia |

Jangan menggunakan warna aksen pada semua elemen. Biru digunakan untuk CTA utama, link aktif, highlight nama, fokus, dan detail 3D tertentu.

### Tipografi
- **Sans utama:** Plus Jakarta Sans atau font sans modern yang tersedia secara lokal.
- **Monospace:** JetBrains Mono untuk label section, metadata, stack teknologi, dan detail kecil.
- Gunakan `next/font/google` atau font lokal melalui Next.js agar font dimuat dengan pengaturan yang terkontrol.
- Heading memakai weight 700–800 dengan letter spacing sedikit negatif.
- Body text menggunakan ukuran yang nyaman dibaca, line-height sekitar 1.65–1.85.
- Hindari terlalu banyak ukuran dan ketebalan font.

Skala tipografi awal:
- Hero name: `clamp(2.8rem, 6vw, 5rem)`
- Section heading: `clamp(1.8rem, 3.5vw, 2.6rem)`
- Card title: `1.05rem–1.25rem`
- Body: `0.95rem–1rem`
- Eyebrow/metadata: `0.7rem–0.8rem`

## 3. Layout dan Spacing

- Lebar konten maksimal: sekitar `1180px`.
- Padding horizontal desktop: `24–32px`.
- Padding horizontal mobile: `18–22px`.
- Jarak antar section desktop: `80–112px`.
- Jarak antar section mobile: `56–76px`.
- Grid proyek desktop: 3 kolom jika ruang memadai; tablet 2 kolom; mobile 1 kolom.
- About: dua kolom di desktop, satu kolom pada layar sempit.
- Hero: teks dan foto/visual di dua kolom pada desktop, bertumpuk di mobile.
- Gunakan `scroll-margin-top` agar anchor tidak tertutup navbar.

Gunakan sistem spacing konsisten berbasis kelipatan 4 atau 8. Hindari margin acak per komponen.

## 4. Page Structure

### 4.1 Navbar
**Desktop**
- Fixed atau sticky di bagian atas.
- Tinggi sekitar 64–72px.
- Latar semi-opaque dengan blur ringan dan border bawah.
- Nama/logo di kiri, section links di tengah, theme/language toggle dan CTA di kanan.
- Tautan aktif ditandai dengan perubahan warna/latar yang subtil.

**Mobile**
- Tampilkan logo/nama dan tombol menu.
- Menu terbuka harus memiliki fokus keyboard yang jelas dan dapat ditutup dengan mudah.
- Theme dan language toggle tetap dapat ditemukan tanpa memenuhi seluruh navbar.
- Jangan biarkan menu melampaui viewport.

### 4.2 Hero
Hero merupakan area paling penting dan harus langsung menjelaskan profil.

**Konten**
- Status availability dalam pill kecil.
- Heading besar: “Rafi Alif Azhar.”
- Role/title yang jelas.
- Ringkasan profesional singkat.
- CTA utama: “Lihat Proyek” / “View Projects”.
- CTA sekunder: “Download CV” dan “Hubungi Saya”.
- Statistik ringkas seperti repositories, GPA, jumlah proyek, dan sertifikasi hanya jika nilainya sudah diverifikasi.
- Foto profil yang sudah tersedia.

**Komposisi**
- Desktop: copy di kiri, foto dan/atau 3D visual di kanan.
- Mobile: heading dan copy terlebih dahulu; foto/visual diletakkan setelahnya sesuai keseimbangan layout.
- CTA utama paling menonjol; tombol lain menggunakan surface/border.
- Hindari teks panjang atau animasi typewriter yang menghilangkan konteks role utama.

**Three.js**
- Gunakan canvas sebagai layer dekoratif di area visual Hero, misalnya di belakang atau di samping foto.
- Arah visual yang disarankan: bentuk geometris abstrak, orb/wireframe, partikel kecil, atau bentuk 3D yang merepresentasikan teknologi.
- Gunakan warna biru sebagai highlight dan material dengan pencahayaan lembut.
- Animasi lambat, gerakan pointer kecil pada desktop, tanpa gerakan agresif atau kamera yang berputar cepat.
- Canvas tidak boleh menutupi teks, CTA, atau kontrol.
- `pointer-events: none` untuk layer dekoratif kecuali ada interaksi 3D yang benar-benar dibutuhkan.
- Beri batas waktu/kompleksitas scene yang masuk akal dan fallback CSS/static image ketika WebGL tidak tersedia.

### 4.3 About
- Heading section dengan eyebrow kecil bergaya monospace.
- Ringkasan profil 2–3 paragraf.
- Kelompok skill sebagai chip yang dapat dipindai cepat.
- Panel informasi ringkas untuk lokasi, pendidikan, IPK, TOEFL, sertifikasi, status, dan email.
- Jangan membuat daftar teknologi terlalu padat; kelompokkan secara logis jika jumlahnya banyak.

### 4.4 Projects
- Judul section dan intro singkat.
- Filter berbentuk segmented controls atau pill: All/Semua, Full Stack, Frontend.
- Grid kartu dengan rasio gambar konsisten.
- Kartu berisi preview, kategori, tahun jika tersedia, judul, ringkasan masalah/solusi, stack, serta link.
- Berikan hover state berupa border/shadow atau translasi kecil, bukan zoom berlebihan.
- Gambar yang tidak tersedia menggunakan fallback desain berisi judul proyek, bukan ikon rusak.
- Link demo/repository hanya ditampilkan jika URL telah dikonfirmasi.

**Project card states**
- Default: border halus dan surface.
- Hover: border aksen atau elevasi kecil.
- Focus-visible: outline yang jelas.
- Missing image: placeholder yang konsisten.
- External link: label yang menjelaskan tujuan.

### 4.5 Certificates & Achievements
- Gunakan grid sederhana atau list kartu.
- Nama sertifikasi dan penerbit harus terbaca tanpa membuka gambar.
- Jika tersedia, tampilkan tanggal/credential ID dan tombol untuk melihat sertifikat.
- Jangan menampilkan credential palsu atau informasi yang belum terverifikasi.
- Thumbnail sertifikat dapat dibuka pada tab baru atau dialog accessible bila implementasi membutuhkannya.

### 4.6 Experience & Education
- Timeline vertikal atau kelompok kartu berdasarkan pengalaman dan pendidikan.
- Role dan organisasi menjadi hierarki utama.
- Periode ditempatkan sebagai metadata sekunder.
- Bullet menekankan kontribusi, fitur, teknologi, dan dampak yang benar-benar didukung data.
- Di mobile, hindari timeline dua sisi yang terlalu sempit.

### 4.7 Testimonials
- Kartu kutipan dengan line-height nyaman.
- Nama organisasi/role pemberi testimoni menjadi metadata.
- Hindari carousel otomatis. Jika memakai carousel, kontrol harus tersedia dan perpindahan otomatis harus dihindari.
- Kutipan hanya boleh berasal dari materi yang disetujui untuk publikasi.

### 4.8 Contact
- Penutup yang jelas, misalnya “Mari Berkolaborasi”.
- Satu kalimat singkat mengenai peluang kerja/proyek.
- Email menjadi CTA utama.
- GitHub dan tautan sosial ditampilkan sebagai tautan sekunder.
- Jangan membuat formulir kontak yang tampak aktif jika belum memiliki backend pengiriman.

### 4.9 Footer
- Nama, lokasi, tahun, dan link penting.
- Teks ringkas, kontras cukup, dan tidak mengambil terlalu banyak ruang.
- Tahun dapat dihasilkan dinamis dengan aman.

## 5. Komponen UI dan States

Komponen yang disarankan:
- `Navbar`
- `MobileNav`
- `ThemeToggle`
- `LanguageToggle`
- `HeroSection`
- `ProfileImage`
- `HeroScene`
- `SectionHeading`
- `AboutSection`
- `SkillChip`
- `InfoList`
- `ProjectsSection`
- `ProjectFilter`
- `ProjectCard`
- `CertificatesSection`
- `CertificateCard`
- `ExperienceTimeline`
- `TestimonialCard`
- `ContactSection`
- `Footer`
- `ThreeFallback`

Semua kontrol interaktif perlu memiliki:
- Default state.
- Hover state (untuk perangkat yang mendukung hover).
- Focus-visible state.
- Active/selected state bila relevan.
- Disabled state bila relevan.

Gunakan radius secara konsisten:
- Small: `6–8px`
- Medium: `10–14px`
- Large: `18–24px`
- Pill: `999px`

Shadow harus halus dan jarang digunakan. Border dan perubahan surface lebih diutamakan daripada shadow tebal.

## 6. Motion Design

- Gunakan fade-up ringan saat section masuk viewport.
- Durasi transisi umum sekitar `160–300ms`.
- Animasi hero boleh berlangsung sedikit lebih lama, tetapi konten inti harus langsung tersedia.
- Hover pada kartu/tombol cukup berupa perubahan warna, border, atau translasi 1–3px.
- Hindari parallax besar, animasi scroll yang mengunci scrolling, dan animasi yang memindahkan layout.
- Hormati `prefers-reduced-motion: reduce`: nonaktifkan typewriter, scroll reveal yang tidak perlu, pointer-follow, dan gerakan 3D berkelanjutan.
- Hindari layout shift saat font, foto, atau scene dimuat.

## 7. Theme dan Language Behavior

### Theme
- Dua tema: light dan dark.
- Ikon dan label toggle harus menjelaskan aksi atau tema yang dipilih.
- Persistensi tema harus dilakukan dengan strategi yang tidak menimbulkan flash atau hydration mismatch.
- Gunakan CSS variables/design tokens agar warna konsisten.
- Pastikan kontras tombol, chip, border, dan metadata memadai pada kedua tema.

### Language
- Bahasa default Indonesia; English tersedia melalui toggle.
- Simpan terjemahan dalam struktur data terpusat, bukan menyebarkan ternary di seluruh JSX.
- Terjemahkan label navigasi, CTA, section heading, deskripsi, filter, metadata UI, dan footer.
- Nama proyek, teknologi, sertifikasi, dan organisasi tidak perlu diterjemahkan jika nama resminya memang demikian.
- Sinkronkan atribut `lang` dengan bahasa aktif.

## 8. Accessibility

- Gunakan `header`, `nav`, `main`, `section`, dan `footer` secara semantik.
- Setiap section memiliki heading yang logis.
- Foto profil dan preview proyek memiliki alt text yang bermakna; gambar dekoratif memakai alt kosong.
- Semua kontrol dapat diakses dengan keyboard.
- Fokus keyboard terlihat pada tombol, link, filter, dan toggle.
- Jangan menggunakan `div` sebagai tombol.
- Jangan menggunakan warna saja untuk menunjukkan filter aktif.
- Pastikan menu mobile dapat dioperasikan dengan keyboard.
- Scene Three.js dekoratif harus diabaikan oleh screen reader (`aria-hidden`) dan tidak mengambil fokus.
- Konten inti harus tetap tersedia jika JavaScript/3D gagal, sejauh arsitektur memungkinkan.

## 9. Responsive Behavior

Breakpoint awal (sesuaikan dengan kebutuhan konten):
- Mobile: `< 640px`
- Tablet: `640–1023px`
- Desktop: `≥ 1024px`

### Mobile
- Hero satu kolom.
- Heading menggunakan ukuran fluid.
- Tombol wrap atau stack bila ruang tidak cukup.
- Statistik menjadi grid 2 kolom atau susunan yang tetap terbaca.
- About dan timeline satu kolom.
- Project card satu kolom.
- Three.js dikurangi detailnya atau diganti fallback jika performa terbatas.
- Navbar memakai menu ringkas.
- Tidak ada overflow horizontal.

### Tablet
- Grid proyek dua kolom bila lebar cukup.
- Hero dapat tetap dua kolom hanya jika teks dan visual memiliki ruang yang cukup.
- Hindari ukuran font desktop yang terlalu besar.

### Desktop
- Konten menggunakan max-width.
- About dapat dua kolom.
- Project grid tiga kolom jika kartu masih memiliki lebar yang memadai.
- Three.js dapat menggunakan kualitas visual lebih tinggi dengan tetap memperhatikan performa.

## 10. Arsitektur Next.js

Gunakan Next.js App Router dengan TypeScript. Komponen konten statis sebaiknya tetap Server Components. Tandai `"use client"` hanya pada komponen yang memerlukan state browser, event handler, theme/language interaction, filter, atau Three.js.

Contoh struktur:

```text
public/
  images/
    profile/
    projects/
    certificates/
    og-image.png
  documents/
    cv-rafi-alif-azhar.pdf

src/
  app/
    layout.tsx
    page.tsx
    globals.css
    icon.tsx                 # opsional
  components/
    layout/
      navbar.tsx
      mobile-nav.tsx
      footer.tsx
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
  lib/
    utils.ts
```

### Aturan implementasi
- Hindari satu file `page.tsx` yang berisi seluruh website.
- Simpan data konten dalam file terpisah dengan tipe TypeScript.
- Jangan memindahkan semua HTML lama secara mentah ke satu komponen.
- Jangan menggunakan `dangerouslySetInnerHTML` hanya untuk mempermudah terjemahan.
- Gunakan `next/image` untuk gambar, dengan ukuran/aspect ratio yang stabil.
- Untuk komponen Three.js, gunakan dynamic import dengan `ssr: false` dari Client Component bila diperlukan.
- Pastikan resource WebGL dan animation loop dibersihkan ketika komponen unmount.
- Gunakan `metadata` API Next.js untuk metadata SEO.
- Perbarui canonical dan `metadataBase` ketika domain produksi sudah diputuskan.

## 11. Three.js — Batasan Visual dan Teknis

### Tujuan
Memberi sentuhan visual yang khas dan memperkuat kesan teknologi, bukan membangun demo 3D interaktif yang terpisah dari portfolio.

### Rekomendasi scene
- Satu komposisi 3D utama pada Hero.
- Objek geometris abstrak atau wireframe dengan aksen biru.
- Pencahayaan sederhana, latar transparan bila sesuai, dan jumlah objek terkendali.
- Animasi idle yang lambat dan halus.
- Interaksi pointer opsional pada desktop; tidak wajib pada mobile.

### Batasan
- Jangan menaruh teks penting di dalam canvas.
- Jangan mewajibkan pengguna berinteraksi dengan objek 3D untuk menemukan konten.
- Jangan menjalankan banyak canvas WebGL sekaligus tanpa kebutuhan.
- Jangan memuat Three.js sebelum diperlukan jika bisa di-lazy-load.
- Sediakan fallback statis/CSS ketika WebGL tidak tersedia atau scene gagal.
- Kurangi atau matikan animasi untuk `prefers-reduced-motion`.
- Perhatikan penggunaan CPU/GPU, konsumsi baterai, dan perangkat mobile.
- Jangan menambahkan model 3D eksternal besar tanpa alasan dan lisensi yang jelas.

## 12. Image & Asset Guidelines

- Audit semua file gambar dari website lama sebelum migrasi.
- Gunakan nama file yang jelas, misalnya `profile-desktop.webp`, `project-mis-asset.webp`, dan `certificate-bnsp.webp`.
- Gunakan WebP/AVIF jika memungkinkan tanpa mengorbankan kualitas yang dibutuhkan.
- Tentukan dimensi/aspect ratio agar tidak terjadi layout shift.
- Foto profil menggunakan crop yang konsisten dan focal point yang sesuai.
- Preview proyek sebaiknya memiliki rasio konsisten; gambar yang berbeda rasio tetap ditempatkan dalam container dengan `object-fit: cover`.
- CV ditempatkan di `public/documents/` dan tautannya harus diuji.
- Jangan menganggap aset lama tersedia hanya karena path tercantum di HTML; pastikan file benar-benar dipindahkan ke repository Next.js.

## 13. SEO & Sharing Design

- Title: `Rafi Alif Azhar — Web Developer`
- Description harus ringkas, akurat, dan menjelaskan spesialisasi utama.
- Gunakan canonical URL domain final, bukan URL GitHub Pages lama.
- Open Graph image dibuat dengan rasio yang sesuai untuk social preview, umumnya 1200 × 630.
- Gunakan heading semantik dan alt text yang relevan.
- Pastikan preview link tidak menggunakan path aset yang sudah tidak valid.
- Hindari keyword stuffing dan klaim yang tidak didukung isi website.

## 14. Performance Budget dan QA

### Target praktis
- Hindari memasukkan semua komponen ke client bundle.
- Lazy-load Three.js dan animasi yang berat.
- Kompres gambar dan gunakan ukuran responsif.
- Tidak ada autoplay video berat pada Hero.
- Pastikan layout tetap berguna sebelum scene 3D selesai dimuat.
- Uji pada perangkat mobile nyata jika memungkinkan.

### Checklist visual
- [ ] Navbar berfungsi di desktop dan mobile.
- [ ] Hero tetap mudah dibaca dengan scene aktif dan fallback.
- [ ] Foto profil dan gambar proyek tidak menyebabkan layout shift.
- [ ] Grid proyek responsif dan filter berfungsi.
- [ ] Semua section memiliki jarak dan hierarki visual konsisten.
- [ ] Light dan dark mode memiliki kontras memadai.
- [ ] Bahasa ID/EN tidak memotong teks atau merusak layout.
- [ ] Reduced motion dihormati.
- [ ] Focus-visible terlihat.
- [ ] Tidak ada horizontal overflow pada lebar 320px.
- [ ] Semua CTA dan external link berfungsi.
- [ ] SEO/social preview menggunakan URL yang valid.
- [ ] Production build dan deployment Vercel berhasil.

## 15. Definition of Done

Desain dinyatakan selesai ketika:
1. Implementasi sesuai dengan arah visual dan struktur section dalam dokumen ini.
2. Konten lama yang masih relevan telah dipindahkan dan diverifikasi.
3. Semua interaksi yang ditampilkan benar-benar berfungsi.
4. Layout telah diperiksa pada mobile, tablet, dan desktop.
5. Aksesibilitas dasar, reduced motion, dan fallback Three.js tersedia.
6. Build production berhasil.
7. Deployment Vercel lolos pemeriksaan fungsional dan visual.

**Prioritas akhir:** keterbacaan, akurasi konten, navigasi, dan performa didahulukan. Efek visual harus mendukung identitas profesional Rafi, bukan mengalihkan perhatian dari proyek dan pengalaman.
