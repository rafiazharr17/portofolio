
# PRD.md — Portfolio Rafi Alif Azhar

> Product Requirements Document untuk migrasi dan pengembangan ulang portfolio pribadi menjadi aplikasi Next.js yang siap di-deploy ke Vercel.
>
> **Status:** Draft untuk implementasi  
> **Pemilik produk:** Rafi Alif Azhar  
> **Produk:** Personal Developer Portfolio  
> **Target deployment:** Vercel

## 1. Ringkasan Produk

Portfolio pribadi Rafi Alif Azhar akan dibangun ulang menggunakan Next.js dari website HTML, CSS, dan JavaScript saat ini. Website berfungsi sebagai profil profesional, showcase proyek, bukti kompetensi, pengalaman, serta kanal kontak untuk recruiter, perusahaan, dan calon klien.

Versi baru harus mempertahankan informasi inti dan fitur yang masih relevan dari website lama, sekaligus meningkatkan struktur kode, performa, aksesibilitas, SEO, responsivitas, dan pengalaman visual. Website akan memiliki pengalaman 3D yang mengikuti scroll, tetapi tidak boleh terasa seperti template generatif. Arah visual spesifik ditetapkan di `DESIGN.md`: satu scene berkesinambungan berupa *systems workbench* yang menampilkan representasi dari proyek Rafi yang benar-benar ada, dengan kamera bergerak di antara modul proyek saat halaman digulir. Musée dan David Heckhoff hanya menjadi referensi interaksi; jangan menyalin bentuk, layout, atau identitasnya. Terapkan anti-slop sebagai filter kualitas visual, copywriting, aksesibilitas, responsivitas, dan interaksi.

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
6. Menghasilkan identitas visual yang spesifik untuk Rafi, bukan UI generik dengan pola dekorasi yang lazim dihasilkan AI.

### 3.2 Indikator keberhasilan
- Semua section utama dapat diakses melalui navigasi dan tautan anchor.
- Seluruh tombol dan interaksi yang ditampilkan bekerja dengan benar.
- Tampilan tidak mengalami horizontal overflow pada ukuran mobile.
- Build production berhasil dan dapat di-deploy ke Vercel.
- Metadata, title, description, canonical, dan Open Graph terkonfigurasi.
- Animasi 3D tidak menghalangi konten, navigasi, atau interaksi utama.
- Elemen visual, gerakan, dan copywriting punya alasan yang bisa dijelaskan; tidak ada statistik, testimoni, screenshot, atau klaim yang dibuat-buat.
- Review anti-slop selesai dan temuan kritis diperbaiki sebelum rilis.
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
- Hero section dengan nama, role, ringkasan, CTA, serta foto/status/statistik hanya jika aset dan datanya tersedia serta sudah diverifikasi.
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
- Pengalaman 3D scroll-driven menggunakan Three.js/React Three Fiber dan GSAP ScrollTrigger (atau pendekatan setara yang dipilih secara konsisten).
- Storyboard visual per chapter: Hero, About, Skills, Projects, Experience/Certificates, dan Contact.
- Satu arah seni yang konsisten dan personal: *systems workbench* dengan screenshot/prototype proyek asli, komposisi asimetris, palet netral hangat + aksen biru yang sudah digunakan website lama, serta bentuk yang punya fungsi jelas.
- Proses review anti-slop untuk UI, copy, aksesibilitas, mobile layout, dan semua interaksi sebelum rilis.
- Pergerakan kamera, objek, pencahayaan, serta transisi visual yang disinkronkan dengan progres scroll.
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
- Interaksi 3D yang menjadi satu-satunya cara untuk membaca konten atau menavigasi website.

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
- Menampilkan nama, profesi, dan deskripsi singkat. Foto, status ketersediaan, atau statistik hanya muncul jika tersedia dan sudah diverifikasi.
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

### FR-10 — Pengalaman 3D Scroll-Driven
- Scene 3D adalah bagian utama identitas visual, bukan hanya ornamen yang bergerak otomatis di Hero.
- Progres scroll harus mengendalikan animasi: posisi/rotasi kamera, posisi dan skala objek, perubahan komposisi, pencahayaan, serta transisi antar-chapter.
- Animasi harus scrubbed atau dipetakan ke progres scroll sehingga scroll ke bawah menjalankan adegan ke depan dan scroll ke atas mengembalikan adegan secara koheren. Hindari animasi yang hanya berjalan berdasarkan timer dan tidak sinkron dengan posisi scroll.
- Gunakan storyboard minimal berikut sebagai acuan; detail visual boleh disempurnakan selama fungsi setiap chapter tetap terjaga:
  1. **Hero / Entry:** kamera memperlihatkan panggung *systems workbench* dan satu preview proyek asli; nama, role, ringkasan, dan CTA tetap terlihat sebagai HTML.
  2. **About:** kamera bergeser ke bagian panggung yang lebih lapang; profil tetap disampaikan lewat teks DOM, bukan avatar atau model manusia buatan.
  3. **Skills:** modul teknologi tersusun secara terukur dan hanya memakai skill yang ada di data portofolio. Hindari node acak yang sekadar menyimbolkan 'AI' atau jaringan.
  4. **Projects:** menjadi chapter visual utama. Preview browser memakai screenshot/aset proyek asli bila tersedia, dengan satu proyek unggulan sebagai fokus dan proyek lain sebagai daftar/indeks HTML yang tidak seragam secara paksa.
  5. **Experience & Certificates:** kamera mengikuti rail/timeline sederhana; kredensial berupa bukti yang terverifikasi, bukan koleksi medali 3D dekoratif.
  6. **Contact / Outro:** kamera menjauh untuk menunjukkan hubungan antara beberapa modul proyek, lalu berhenti pada komposisi tenang yang mengarahkan perhatian ke kontak.
- Setiap chapter harus memiliki rentang scroll yang jelas dan transisi yang halus; hindari kamera bergerak terlalu cepat, gerakan tanpa tujuan, atau perpindahan yang membuat pengguna kehilangan konteks.
- Gunakan GSAP ScrollTrigger atau solusi scroll-driven setara. Pilih satu pendekatan utama untuk mengorkestrasi timeline; hindari menumpuk beberapa library animasi untuk pekerjaan yang sama.
- Teks, tombol, link, dan konten utama harus tetap berupa DOM/HTML semantik, bukan dirender sebagai tekstur di dalam canvas.
- Scene tidak boleh menutupi teks atau menangkap klik pada CTA. Interaksi pointer pada canvas tidak boleh mengganggu scroll normal.
- Sediakan fallback non-WebGL yang mempertahankan urutan konten dan identitas visual dasar.
- Hormati `prefers-reduced-motion`: nonaktifkan scrub/transisi besar atau sediakan pengalaman alternatif yang lebih tenang.
- Kurangi detail, partikel, resolusi render, atau gunakan versi scene yang lebih sederhana pada perangkat mobile/perangkat berkemampuan terbatas.
- Three.js dimuat secara client-side dan lazy-loaded; konten utama tetap dapat dibaca sebelum scene siap atau jika WebGL tidak tersedia.
- Bersihkan renderer, event listener, observer, timeline, dan animation loop saat komponen dilepas; hindari memory leak saat navigasi atau resize.
- Perubahan scroll harus tetap stabil pada refresh di tengah halaman, deep link/anchor navigation, resize, dan perubahan orientasi layar.

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
- Gunakan Client Components hanya untuk interaksi yang membutuhkan state, browser API, animasi scroll, atau WebGL.
- Gunakan `next/image` untuk gambar yang sesuai.
- Lazy-load scene Three.js dan komponen yang berat; jangan memblokir render konten teks utama.
- Batasi jumlah objek, material, tekstur, shadow, partikel, dan draw calls; gunakan model/tekstur teroptimasi jika aset eksternal digunakan.
- Hindari memuat banyak library animasi yang melakukan fungsi serupa.
- Scene 3D harus menjaga scroll tetap responsif dan tidak menyebabkan long task berkepanjangan; uji pada perangkat mobile nyata atau emulasi throttling.
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
- Canvas 3D yang bersifat visual diberi `aria-hidden="true"` dan tidak masuk urutan fokus; seluruh informasi dan kontrol penting tetap tersedia di DOM semantik.

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

### NFR-06 — Anti-Slop dan Keaslian Visual
- `DESIGN.md` adalah sumber arah visual; anti-slop berfungsi sebagai filter untuk membuang pola generik, bukan alasan untuk membuat desain menjadi kosong atau monoton.
- Sebelum implementasi, coding agent harus memeriksa apakah skill anti-slop tersedia di environment. Jika tersedia, baca core `antislop` dan skill yang relevan: `antislop-ui`, `antislop-copywriting`, `antislop-human`, dan `antislop-layoutmobile`. Jika tidak tersedia, gunakan guardrail dan checklist di dokumen ini tanpa mengklaim skill sudah dijalankan.
- Hindari default UI generatif tanpa alasan: gradient biru-ungu/cyan, glow-orb, partikel acak, glassmorphism di semua panel, radius seragam di setiap komponen, bayangan besar pada semua kartu, dekorasi terminal palsu, status dot tanpa makna, kartu statistik palsu, dan grid kartu identik di semua section.
- Setiap objek 3D harus berhubungan dengan konten yang nyata atau punya fungsi komposisi yang dijelaskan. Jangan membuat screenshot, kode, data dashboard, logo, testimoni, credential, metrik hasil, atau kontribusi proyek yang tidak bersumber.
- Copy harus ringkas, manusiawi, dan spesifik pada fakta yang terverifikasi. Hindari jargon promosi, klaim bombastis, frasa kosong seperti “revolutionary”, “next-level”, “seamless experience”, dan tagline template.
- Jangan menerapkan pola visual yang sama ke setiap section hanya demi konsistensi; konsistensi datang dari token warna, tipografi, ritme, dan kualitas motion, sementara bentuk layout mengikuti fungsi konten.
- Sebelum release, lakukan review anti-slop dengan hasil PASS/FAIL dan perbaiki temuan kritis, termasuk mengeklik dan menguji setiap kontrol interaktif satu per satu.

## 9. Rekomendasi Teknologi

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **3D:** Three.js dengan React Three Fiber dan Drei bila menyederhanakan integrasi React
- **Scroll animation:** GSAP + ScrollTrigger sebagai pilihan utama untuk timeline yang tersinkron dengan scroll; jangan menambahkan library scroll-animation lain tanpa alasan kuat
- **UI motion:** CSS transitions untuk interaksi kecil; Framer Motion hanya bila ada kebutuhan UI yang tidak ditangani dengan baik oleh GSAP/CSS
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
      portfolio-scene.tsx
      scene-canvas.tsx
      scene-fallback.tsx
      scroll-scene-controller.tsx
      chapters/
        hero-chapter.tsx
        about-chapter.tsx
        skills-chapter.tsx
        projects-chapter.tsx
        experience-chapter.tsx
        contact-chapter.tsx
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
    motion-config.ts
    three-config.ts
```

Struktur ini merupakan rekomendasi; boleh disesuaikan selama pemisahan tanggung jawab tetap jelas. Implementasi boleh menggunakan satu canvas persisten untuk beberapa chapter atau beberapa scene yang ditukar secara terkontrol; pilih berdasarkan performa dan kemudahan sinkronisasi scroll, bukan sekadar jumlah komponen.

## 11. Git Ignore, Deployment, dan Environment

### 11.1 File `.gitignore` wajib

Repository harus memiliki file `.gitignore` di root project. Minimal, gunakan aturan berikut dan sesuaikan jika struktur project membutuhkan pengecualian tambahan:

```gitignore
# Dependencies
/node_modules
/.pnp
.pnp.*

# Next.js build output
/.next/
/out/
/build/

# Production build output
/dist/

# Local environment variables and secrets
.env
.env.*
!.env.example

# Deployment/platform local state
.vercel

# Logs
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*
lerna-debug.log*

# OS/editor files
.DS_Store
Thumbs.db
*.swp
*.swo
.idea/
.vscode/*
!.vscode/extensions.json

# TypeScript build cache
*.tsbuildinfo
next-env.d.ts

# Test and coverage output
/coverage/
/playwright-report/
/test-results/

# Local-only notes or temporary files
*.local
*.tmp
```

Ketentuan `.gitignore`:
- Jangan commit `node_modules`, `.next`, output build, cache, log, atau file environment berisi rahasia.
- Sediakan `.env.example` hanya jika ada environment variable yang benar-benar diperlukan; isi dengan nama variabel dan nilai contoh non-rahasia, bukan credential asli.
- Jangan mengabaikan aset portfolio yang memang dibutuhkan website, seperti gambar, model 3D, tekstur, CV publik, dan file di `public/`. Optimalkan ukuran aset sebelum commit.
- Jika file rahasia pernah terlanjur di-commit, menambahkannya ke `.gitignore` saja tidak menghapusnya dari riwayat Git; cabut/rotasi secret dan bersihkan riwayat bila diperlukan.

### 11.2 Deployment dan environment

- Repository dihubungkan ke Vercel.
- Framework preset Next.js harus terdeteksi dengan benar.
- Build command dan output directory mengikuti default Next.js kecuali ada alasan kuat untuk mengubahnya.
- Domain produksi dan `metadataBase` diatur setelah domain final diketahui.
- File CV, foto, preview, dan aset lainnya disimpan di `public/` dengan path yang konsisten.
- Tidak diperlukan environment variable untuk fitur statis MVP. Jika fitur tambahan membutuhkannya, daftarkan variabel yang dibutuhkan di Vercel dan dokumentasikan nama variabelnya di `.env.example` tanpa secret.
- Setelah deployment, verifikasi halaman production, metadata, tautan, gambar, model/tekstur 3D, mode tema, bahasa, animasi scroll, dan tampilan mobile.

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
- [ ] Animasi 3D mengikuti progres scroll dan bisa bergerak maju/mundur saat pengguna scroll ke bawah/atas.
- [ ] Setiap chapter utama memiliki transisi kamera/objek yang dirancang, termasuk chapter Projects sebagai fokus visual.
- [ ] Konten teks dan CTA tetap HTML semantik, dapat diakses, dan tidak bergantung pada canvas.
- [ ] Scene Three.js memiliki fallback, tidak menghalangi konten, menghormati reduced motion, dan tetap usable pada mobile.
- [ ] `.gitignore` tersedia di root dan mengabaikan dependency, build output, cache, log, dan environment secrets tanpa mengabaikan aset publik yang diperlukan.
- [ ] Metadata SEO dan social sharing tersedia.
- [ ] `npm run build` berhasil.
- [ ] Deployment Vercel berhasil dan semua aset tersedia di production.
- [ ] Tidak ada error runtime penting di browser console.
- [ ] Tidak ada statistik, testimonial, UI screenshot, logo, atau klaim yang dibuat-buat; semua konten promosi bisa ditelusuri ke data sumber.
- [ ] Layout antar-section punya variasi yang sesuai dengan fungsi konten, bukan satu template kartu yang diulang untuk semuanya.
- [ ] Tidak ada dekorasi glow/gradient/terminal/partikel yang ditambahkan tanpa fungsi desain yang jelas.
- [ ] Anti-slop Delivery Gate memuat hasil PASS/FAIL untuk visual, copy/content integrity, aksesibilitas/responsivitas, dan perilaku interaksi; setiap temuan kritis sudah ditutup.

## 13. Tahapan Implementasi

1. **Anti-slop setup & audit konten** — periksa skill anti-slop yang tersedia di environment; audit konten, gambar, CV, sertifikasi, demo, repository, dan pola visual website lama. Jangan membuat klaim/aset pengganti jika data belum tersedia.
2. **Project setup** — Next.js App Router, TypeScript, Tailwind, linting, dan struktur folder.
3. **Core layout** — metadata, font, navbar, footer, container, dan design tokens.
4. **Content sections** — hero, about, projects, certificates, experience, testimonials, contact.
5. **Interactions** — filter proyek, bahasa, tema, mobile nav, dan interaksi UI.
6. **Scroll-driven 3D** — bangun storyboard chapter, scene/camera rig, timeline GSAP ScrollTrigger, sinkronisasi dengan scroll, fallback, serta reduced-motion/mobile mode.
7. **Repository hygiene** — tambahkan dan verifikasi `.gitignore`; pastikan tidak ada secrets atau build artifacts yang ikut dilacak.
8. **Quality checks + anti-slop Delivery Gate** — responsivitas, aksesibilitas, SEO, validitas copy/aset, perilaku semua kontrol, performa scene, dan production build. Laporkan PASS/FAIL dan bukti pemeriksaan, jangan hanya menyatakan 'sudah dicek'.
9. **Vercel deployment** — deploy preview, QA seluruh chapter scroll di desktop/mobile, lalu production.

## 14. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Scene scroll-driven terlalu berat | Lazy-load, optimalkan geometri/tekstur, batasi shadow dan partikel, sederhanakan scene di mobile, sediakan fallback |
| Tema atau bahasa menyebabkan hydration mismatch | Render state awal yang konsisten dan sinkronkan preferensi setelah mount atau gunakan strategi cookie yang tepat |
| Aset lama tidak ikut dipindahkan | Audit semua path relatif dan pindahkan aset ke `public/` |
| Link demo/repository sudah berubah | Verifikasi setiap URL sebelum rilis |
| Konten profesional tidak lagi akurat | Konfirmasi angka, status, periode, dan klaim kepada pemilik |
| Scroll animation mengganggu pengguna atau mengacaukan navigasi | Gunakan scrub yang stabil, sediakan reduced-motion mode, pastikan anchor/deep link dan scroll ke atas tetap berfungsi |
| File rahasia atau artefak build masuk repository | Terapkan `.gitignore`, audit `git status`, dan gunakan `.env.example` tanpa credential |
| Metadata masih memakai URL GitHub Pages | Perbarui canonical dan metadataBase setelah domain Vercel/domain custom ditetapkan |

## 15. Keputusan yang Masih Perlu Dikonfirmasi

- Domain final yang akan digunakan.
- Apakah semua konten dan susunan section dipertahankan persis atau boleh disederhanakan.
- URL sosial, demo, dan repository final untuk setiap proyek.
- Aset final untuk foto profil, sertifikat, preview proyek, dan CV.
- Tingkat kompleksitas scene Three.js yang sesuai dengan performa target.

**Prinsip utama:** pengalaman 3D yang mengikuti scroll adalah ciri visual utama portofolio, tetapi tidak boleh menghalangi tujuan profesional website. Setiap gerakan kamera dan objek harus mendukung narasi profil serta karya Rafi; konten, navigasi, dan CTA harus tetap jelas, aksesibel, dan tersedia meskipun WebGL atau animasi dinonaktifkan.
