# DESIGN.md — Immersive 3D Portfolio Rafi Alif Azhar

> Dokumen desain visual dan teknis untuk membangun ulang portofolio Rafi Alif Azhar dengan Next.js, Three.js, dan animasi 3D yang terhubung langsung dengan scroll halaman. Dokumen ini menjadi acuan implementasi, bukan sekadar inspirasi visual.

## 1. Design Direction

### 1.1 Konsep utama

**Immersive Scroll-Driven 3D Portfolio — “Rafi's Digital Workspace”**

Website harus terasa seperti perjalanan interaktif melewati sebuah ruang digital yang menggambarkan cara Rafi mengubah ide menjadi produk web. Ini bukan website biasa yang hanya menempelkan model 3D di Hero. **Pergerakan kamera, posisi objek, pencahayaan, dan kemunculan elemen 3D harus berubah secara sinkron dengan progres scroll.**

Pengunjung tetap membaca konten portofolio dalam halaman web yang normal. Di belakang atau di samping konten, dunia 3D berevolusi dari satu bab ke bab berikutnya. Dengan begitu, visual terasa sinematik tanpa membuat navigasi, aksesibilitas, atau informasi karier menjadi korban efek visual.

### 1.2 Cara menggunakan referensi

Referensi untuk bahasa visual dan interaksi:

- Musée — https://musee.barvian.me/ : inspirasi untuk pengalaman 3D sinematik, perubahan sudut pandang kamera, dan storytelling yang mengikuti progres scroll.
- David Heckhoff — https://david-hckh.com/ : inspirasi untuk membuat dunia/objek 3D menjadi bagian dari identitas personal seorang developer.

**Jangan menyalin** layout, model, ilustrasi, aset, atau identitas visual dari kedua website. Ambil prinsip interaksinya lalu bangun scene yang khas untuk Rafi dan proyek-proyek yang benar-benar ada di portofolionya.

### 1.3 Prinsip desain

1. **Scroll drives the story:** perubahan utama pada scene 3D harus dipicu oleh posisi scroll, bukan hanya animasi idle yang terus berulang.
2. **One connected world:** scene terasa sebagai satu dunia yang berkelanjutan; kamera berpindah ke area yang relevan untuk setiap section.
3. **Portfolio remains readable:** teks, tombol, project details, dan navigasi adalah HTML normal, bukan teks penting yang dirender ke dalam canvas.
4. **Meaningful 3D:** setiap objek punya alasan visual yang berkaitan dengan profil, skill, proyek, pengalaman, atau kontak.
5. **Premium, not noisy:** gunakan lighting, kedalaman, material, dan gerakan yang terkontrol; hindari neon berlebihan atau elemen acak.
6. **Responsive and accessible:** perjalanan scroll tetap dapat dipahami di mobile, keyboard, perangkat lambat, dan mode reduced motion.
7. **Progressive enhancement:** portofolio tetap lengkap dan dapat digunakan ketika WebGL atau animasi 3D tidak aktif.

## 2. Creative Direction: Rafi's Digital Workspace

### 2.1 Ide visual

Bangun ruang digital abstrak yang memadukan studio developer modern dengan visualisasi sistem perangkat lunak. Bentuk ruang tidak harus menyerupai kamar realistis; pilih gaya **stylized 3D / product visualization** agar menarik, ringan, dan mudah dioptimalkan untuk web.

Elemen utama yang dapat digunakan:

- **Central project core:** objek geometris utama yang menjadi titik orientasi scene, dengan detail garis dan material biru.
- **Floating application screens:** panel seperti jendela browser yang menampilkan representasi visual aplikasi/proyek Rafi.
- **Data pathways:** garis bercahaya dan node yang menghubungkan objek, sebagai metafora API, database, dan alur sistem.
- **Developer artifacts:** blok kode abstrak, terminal panel, database cylinders, browser windows, dan modular UI cards.
- **Milestone objects:** panel atau penanda 3D untuk pengalaman, pendidikan, sertifikat, dan pencapaian.
- **Contact portal:** komposisi akhir ketika garis/node berkumpul menjadi satu bentuk visual yang mengarahkan perhatian ke CTA kontak.

Bentuk-bentuk ini tidak perlu semuanya hadir sekaligus. Scene sebaiknya berubah bertahap: objek yang relevan muncul, menjadi pusat perhatian, lalu mundur atau berubah ketika pengunjung memasuki bab selanjutnya.

### 2.2 Mood dan karakter

- Modern, digital, sinematik, dan profesional.
- Mengutamakan warna gelap dan pencahayaan volumetrik ringan pada scene 3D, dengan aksen biru/cyan.
- Layout HTML menggunakan tipografi yang bersih dan ruang kosong yang cukup.
- Detail 3D menyampaikan kompetensi teknis, tetapi bukan menjadikan portofolio seperti game yang wajib dimainkan.
- Tidak perlu avatar realistis yang menyerupai Rafi kecuali ada model yang dibuat secara khusus dan disetujui. Identitas dapat diwakili oleh workspace, project screens, dan data pathways.

## 3. Scroll Experience — Storyboard Utama

### 3.1 Aturan pengalaman

- Scroll biasa adalah kontrol utama; **jangan mengambil alih mouse wheel, memaksa scroll-snap, atau mengunci pengunjung dalam urutan tertentu**.
- Scene 3D tetap berada pada layer visual yang konsisten selama bagian pengalaman berlangsung. Camera rig membaca progres scroll dan bergerak dengan transisi yang halus.
- Setiap section menjadi sebuah “chapter”. Ketika chapter masuk viewport, kamera, target kamera, rotasi objek, pencahayaan, dan elemen scene bertransisi ke keadaan yang sudah dirancang.
- Scroll ke atas harus membalik transisi dengan benar. Pengunjung harus bebas kembali ke bagian sebelumnya.
- Konten HTML harus tetap terbaca ketika scene bergerak. Gunakan gradient, scrim, panel transparan, atau pergantian komposisi untuk menjaga kontras.
- Interaksi pointer boleh menambah sedikit parallax di desktop, tetapi tidak boleh bersaing dengan kontrol scroll.

### 3.2 Peta chapter dan pergerakan 3D

Rentang di bawah adalah **perkiraan awal untuk perencanaan**, bukan persentase yang harus dikunci secara literal. Saat implementasi, gunakan ScrollTrigger berbasis section/anchor sehingga pergerakan tetap sinkron ketika tinggi konten, bahasa, atau ukuran viewport berubah.

| Chapter | Konten HTML | Aksi scene 3D saat scroll | Peran visual |
|---|---|---|---|
| 01 — Intro / Hero | Nama, title Web Developer, ringkasan, CTA proyek dan kontak | Kamera melakukan dolly-in perlahan menuju central project core. Panel aplikasi melayang masuk dari sisi berbeda; titik cahaya dan garis data menyala bertahap. Saat scroll pertama, kamera mulai bergerak meninggalkan komposisi hero. | Memperkenalkan Rafi dan mengundang pengunjung menjelajahi dunia digitalnya. |
| 02 — About | Ringkasan profil, lokasi, pendidikan, dan fakta terverifikasi | Kamera bergerak ke samping dan sedikit mengorbit central core. Objek utama membuka komposisi yang lebih lapang; satu panel profil/identity card masuk ke foreground 3D sebagai metafora, sementara teks About tetap HTML. | Mengubah fokus dari identitas visual ke manusia di balik proyek. |
| 03 — Skills / Expertise | Kelompok skill web development, backend, frontend, database, dan tools yang memang dikuasai | Node teknologi tersambung menjadi jalur data. Cluster berubah posisi/menyala mengikuti kelompok skill yang masuk viewport; jangan menampilkan logo teknologi yang belum digunakan atau belum dikonfirmasi. | Menunjukkan bahwa teknologi saling membentuk sebuah sistem, bukan hanya daftar badge. |
| 04 — Selected Projects | Proyek unggulan dan grid/filter seluruh proyek | Camera dolly/track menuju floating browser screens. Satu layar bergerak ke depan ketika proyek terkait menjadi fokus, sedangkan layar lain berputar atau bergeser ke belakang. Panel menampilkan preview proyek asli jika aset tersedia, bukan screenshot palsu. | Menjadikan proyek sebagai klimaks visual utama dan bukti kemampuan. |
| 05 — Experience & Education | Timeline pengalaman, internship, pendidikan, dan kontribusi | Kamera mengikuti data pathway menuju beberapa milestone. Milestone menyala berurutan; garis rute memberi kontinuitas tanpa mengubah informasi timeline HTML. | Menceritakan perkembangan pengalaman secara runtut. |
| 06 — Certificates & Achievements | Sertifikasi dan pencapaian terverifikasi | Kamera mengarah ke kumpulan certificate panels seperti objek display. Panel terdekat sedikit berotasi dan mendapat lighting lebih kuat ketika section masuk viewport. | Memberi ruang visual bagi bukti kompetensi. |
| 07 — Contact / Outro | CTA kolaborasi, email, GitHub, dan sosial yang valid | Kamera perlahan mundur untuk memperlihatkan keseluruhan workspace. Jalur data berkumpul menjadi bentuk loop/portal bercahaya yang membingkai area CTA. Gerakan berhenti dalam komposisi akhir yang tenang. | Membawa cerita kembali ke satu ajakan tindakan yang jelas. |

### 3.3 Prioritas chapter

Jika biaya implementasi atau performa menjadi kendala, prioritaskan animasi scroll pada **Hero → Projects → Contact**. Chapter lain tetap dapat memakai camera movement yang lebih sederhana atau animasi objek ringan. Jangan membuat tujuh scene terpisah dengan tujuh canvas WebGL.

## 4. Visual Identity and Design Tokens

### 4.1 Warna

Pertahankan aksen biru dari website lama sebagai penghubung identitas. Scene 3D boleh punya pencahayaan yang lebih dramatis daripada UI HTML, tetapi keduanya tetap memakai palet yang konsisten.

| Token | Light mode | Dark mode | Kegunaan |
|---|---|---|---|
| `--background` | `#FAFAF9` | `#080D18` | Latar dasar halaman |
| `--surface` | `#FFFFFF` | `#101827` | Panel dan kartu konten |
| `--surface-muted` | `#F1F4F8` | `#141F31` | Section sekunder |
| `--foreground` | `#171B25` | `#F4F7FC` | Teks utama |
| `--muted` | `#626B7A` | `#A6B1C3` | Deskripsi dan metadata |
| `--border` | `rgba(14,24,40,.12)` | `rgba(220,235,255,.13)` | Border |
| `--primary` | `#1A6EF7` | `#62A0FF` | CTA, link, highlight |
| `--primary-strong` | `#1355C9` | `#8CB9FF` | Hover/focus |
| `--scene-base` | `#101A2B` | `#080D18` | Basis visual scene 3D |
| `--scene-glow` | `#42C8FF` | `#42C8FF` | Emissive line/node |

Aturan warna:
- Biru/cyan untuk jalur data, fokus objek, link, dan CTA; jangan memberi glow pada semua elemen.
- Gunakan warm white atau abu netral untuk teks/permukaan agar tidak seluruh halaman terasa neon.
- Glow dan bloom harus subtil. Hindari bloom penuh layar, saturasi cyan berlebihan, dan partikel berjumlah besar.
- Tema light/dark memengaruhi UI dan parameter warna scene, tetapi tidak memaksa seluruh model di-load ulang.

### 4.2 Tipografi

- Sans utama: Plus Jakarta Sans atau alternatif sans modern yang tersedia dan mudah dimuat melalui `next/font`.
- Monospace: JetBrains Mono atau alternatif setara untuk label chapter, koordinat dekoratif, metadata, dan detail teknologi.
- Nama di Hero: `clamp(3rem, 7vw, 6.5rem)` dengan weight 700–800 dan letter-spacing sedikit negatif.
- Heading section: `clamp(2rem, 4vw, 3.25rem)`.
- Body: `0.95rem–1.05rem`, line-height 1.6–1.8.
- Eyebrow / chapter index: `0.7rem–0.8rem`, tracking lebar secukupnya.
- Jangan menggunakan font display dekoratif pada isi paragraf.

### 4.3 Spacing, container, dan radius

- Konten maksimal sekitar `1180–1240px`.
- Padding horizontal desktop: `24–36px`; mobile: `18–22px`.
- Jarak antar-section konten biasa: `80–120px` desktop, `56–80px` mobile.
- Section yang ikut chapter 3D dapat memakai tinggi visual minimal `80–100svh` bila sesuai, tetapi jangan memaksa section teks yang pendek menjadi satu layar penuh tanpa tujuan.
- Gunakan unit spacing kelipatan 4 atau 8.
- Radius: small `6–8px`, medium `12–16px`, large `20–28px`, pill `999px`.

## 5. Page Composition and Layering

### 5.1 Struktur layer

Layering wajib direncanakan agar scene 3D dan isi halaman tidak saling menutupi:

1. **Background / 3D canvas:** dunia 3D, depth, lighting, data pathways, dan objek scene.
2. **Content layer:** section, heading, paragraph, project grid, timeline, dan CTA dalam HTML normal.
3. **Navigation layer:** navbar, chapter/progress indicator jika digunakan, theme toggle, dan language toggle.
4. **Interaction feedback:** focus rings, active nav, tooltip, dan state tombol.

Gunakan `z-index` yang terkontrol dan dokumentasikan layering pada komponen utama. Canvas dekoratif harus `aria-hidden="true"`. Pastikan `pointer-events` tidak menghalangi link/tombol HTML. Bila objek 3D dibuat interaktif, batasi hit-area interaksi ke komponen khusus dan jangan sampai canvas mengambil semua input pointer.

### 5.2 Pilihan layout canvas

- Desktop: gunakan satu canvas persisten di area scroll experience, dengan `position: sticky` atau layer fixed yang direncanakan agar camera travel terlihat menyatu lintas chapter.
- Hindari re-mount canvas setiap section karena dapat menyebabkan flicker, reset state, atau biaya GPU tambahan.
- Section yang membutuhkan kontras tinggi boleh menggunakan gradient scrim atau surface semi-opaque, tetapi jangan menutup scene secara tidak sengaja dengan background solid di setiap section.
- Pada section proyek, pastikan thumbnail dan detail asli tetap dapat dibaca. Scene 3D menjadi panggung visual di belakang atau sisi konten, bukan pengganti kartu proyek.
- Pada mobile, gunakan canvas dengan kompleksitas lebih rendah dan framing kamera yang disesuaikan.

## 6. Detailed Section Design

### 6.1 Navbar

**Desktop**
- Tinggi sekitar `64–76px`; fixed atau sticky.
- Logo/wordmark “RA” atau nama Rafi di kiri; gunakan teks jika belum ada logo final.
- Section links di tengah/kanan: About, Projects, Experience, Certificates, Contact.
- Theme/language toggle tersedia tetapi tidak mengambil porsi visual terlalu besar.
- Background awal dapat transparan dengan scrim/blur; setelah scroll, kontras dan permukaan dinaikkan.
- Active link mengikuti section yang sedang dibaca, bukan hanya hover.

**Mobile**
- Wordmark dan tombol menu yang jelas.
- Menu keyboard-accessible, dapat ditutup, dan tidak melampaui viewport.
- Jangan menempatkan progress indicator, theme toggle, language toggle, dan menu sehingga header menjadi terlalu padat.

### 6.2 Hero — First Impression

Konten HTML:
- Label seperti “WEB DEVELOPER / FULL-STACK DEVELOPMENT” sesuai wording yang memang ingin dipakai.
- Nama: “Rafi Alif Azhar”.
- Satu kalimat yang jelas menjelaskan fokus pada pembangunan aplikasi web/digital solutions.
- CTA utama: “Lihat Proyek” / “View Projects”.
- CTA sekunder: “Hubungi Saya” / “Contact Me”, dan “Download CV” hanya bila PDF CV tersedia dan sudah diperiksa.
- Status, statistik, atau klaim hanya boleh ditampilkan jika benar dan terverifikasi.

Komposisi:
- Teks tetap menjadi elemen pertama yang dipindai; scene 3D mengisi sisi kanan/belakang pada desktop.
- Judul tidak menunggu animasi untuk muncul. Konten utama harus terlihat sejak render pertama.
- Berikan prompt scroll yang ringkas, misalnya “Scroll to explore”, tanpa memaksa pengguna melakukan scroll untuk menemukan navigasi.
- Scene pembuka: central project core dan floating app windows. Gunakan depth, shadow, rim light, dan gerakan kamera yang lambat untuk menciptakan kesan ruang.
- Hindari intro loading panjang, layar hitam berlebihan, logo animation yang menunda konten, atau interstitial “click to enter” wajib.

### 6.3 About

- Heading dengan chapter label, misalnya `01 / ABOUT`.
- Profil 2–3 paragraf singkat; prioritaskan fakta yang membantu recruiter atau klien memahami peran Rafi.
- Skill/pendidikan/lokasi dalam kelompok ringkas.
- Camera movement: orbit atau track samping dengan perubahan perspektif yang terasa, bukan sekadar zoom in/out yang sama pada setiap section.
- Identity panel 3D boleh muncul sebagai objek pendamping, tetapi teks profil asli tetap berada di DOM.

### 6.4 Skills / Expertise

- Kelompokkan teknologi menurut fungsi: Frontend, Backend, Database, Tools/Workflow.
- Jangan menampilkan semua teknologi secara serentak dalam visual 3D. Aktifkan sebagian saat kelompok skill masuk viewport.
- Node dan garis dapat menggambarkan keterhubungan alur aplikasi/API/database. Visualisasi harus abstrak dan tidak memberi kesan sebagai diagram arsitektur dari sistem tertentu kecuali memang benar.
- Label skill HTML harus tetap dapat dipindai dengan cepat dan keyboard/screen-reader friendly.

### 6.5 Projects — Visual Centerpiece

Projects adalah salah satu bagian yang paling penting untuk diberi perhatian visual.

**HTML layer**
- Heading dan pengantar singkat.
- Filter: All/Semua, Full Stack, Frontend, atau kategori lain yang benar-benar cocok dengan dataset.
- Kartu normal yang berisi judul, ringkasan masalah/solusi, stack, dan link demo/repository yang valid.
- Pertahankan detail proyek yang dapat dibaca tanpa harus memahami 3D.

**3D layer**
- Bangun tiga atau beberapa browser/project screens sebagai objek modular di ruang virtual.
- Saat pengunjung scroll ke project chapter, kamera mendekat dan satu screen berada di depan, sementara screen lain bergeser ke sisi/belakang.
- Setiap perpindahan project menggunakan transformasi yang halus: `position`, `rotation`, `scale`, serta lighting. Jangan membuat semua objek meledak, berputar cepat, atau melintas menutupi konten.
- Project screen menggunakan screenshot/aset proyek asli bila tersedia. Jika aset tidak ada, gunakan abstraksi UI generik yang jelas dianggap dekorasi; jangan mengarang screenshot seolah-olah itu tampilan aplikasi sebenarnya.
- Klik kartu proyek HTML membuka link yang valid. Tidak boleh mewajibkan pengguna mengklik objek 3D untuk mengakses repository/demo.
- Filter proyek harus tetap bekerja pada grid HTML. Scene boleh sinkron ke proyek yang difokuskan, tetapi fungsi filter tidak boleh bergantung pada canvas.

Contoh kandidat proyek dari konten yang sudah ada di portofolio perlu diaudit ulang sebelum dipilih sebagai featured items: aplikasi antrean pelayanan, MIS Aset, Stock Monitoring & Delivery Control, Job Setup Verification, sistem manajemen sekolah, website PPDB/TKQ, LMS, Movie Discovery Platform, dan Canela Dessert. Urutan final ditentukan berdasarkan validitas data, kualitas aset, dan relevansi profesional—bukan berdasarkan daftar ini secara otomatis.

### 6.6 Experience & Education

- Timeline vertikal yang mudah dipindai, bukan layout dua kolom sempit.
- Jabatan, organisasi, periode, dan kontribusi nyata ditampilkan dalam HTML.
- Scene menampilkan milestone yang terhubung oleh jalur data/cahaya.
- Ketika milestone masuk viewport, kamera bergerak mengikuti jalur tersebut atau node terkait mendapat highlight.
- Jangan membuat gerakan kamera begitu jauh atau cepat hingga pengunjung kehilangan orientasi terhadap teks.

### 6.7 Certificates & Achievements

- Grid atau list yang memiliki judul sertifikat, penerbit, dan tanggal jika tersedia.
- Sertifikat asli dapat diperbesar/dibuka melalui kontrol yang aksesibel.
- Visual 3D: certificate panels tertata seperti display gallery, dengan pergerakan kecil dan lighting selektif.
- Tidak perlu membuat setiap sertifikat menjadi model 3D berat. Beberapa panel yang berbagi satu material/geometry lebih baik daripada banyak mesh kompleks.
- Jangan menampilkan sertifikat atau credential yang belum dapat diverifikasi.

### 6.8 Testimonials

- Kutipan menggunakan HTML dengan ukuran dan line-height nyaman.
- Hindari auto-carousel.
- Bila testimonial tidak tersedia atau belum disetujui untuk publikasi, section boleh dihilangkan atau diganti dengan bagian relevan yang memiliki konten terverifikasi. Jangan mengisi dengan kutipan buatan.
- Pergerakan 3D di area ini sebaiknya minimal supaya kutipan tetap menjadi pusat perhatian.

### 6.9 Contact / Outro

- Headline ringkas, misalnya “Mari Bangun Sesuatu yang Berguna.” / “Let's Build Something Useful.”
- Email adalah CTA utama; GitHub dan sosial yang valid sebagai tautan sekunder.
- Form kontak hanya ditampilkan jika ada implementasi pengiriman yang benar-benar berfungsi.
- Outro 3D: kamera perlahan menarik diri, objek yang sebelumnya terpisah terlihat sebagai satu ekosistem, dan data pathway mengarahkan pandangan menuju CTA.
- Akhiri dalam posisi stabil. Jangan membuat animasi tanpa akhir terlalu aktif pada bagian yang meminta pengunjung melakukan tindakan.

### 6.10 Footer

- Nama, lokasi jika masih relevan, tahun dinamis, dan tautan penting.
- Ringkas, tanpa efek scroll besar.
- Pastikan footer tetap dapat dicapai dengan keyboard dan tidak tertutup canvas.

## 7. Motion Design System

### 7.1 Hierarki gerak

Gunakan tiga tingkat motion:

1. **Scroll-driven scene motion (utama):** pergerakan kamera, perubahan sudut pandang, transformasi objek, perubahan lighting, dan pergantian fokus antarchapter.
2. **DOM reveal (sekunder):** fade/translate kecil untuk heading dan konten ketika masuk viewport.
3. **Micro-interactions (tersier):** hover, focus, button feedback, dan parallax pointer halus.

Jangan memberi setiap elemen animasi berbeda yang saling bersaing. Pergerakan utama adalah kamera/scene; animasi HTML memperjelas hierarki konten.

### 7.2 Prinsip scroll-linked motion

- Progress scroll menentukan progres timeline animasi. Kamera dan objek harus punya keyframe yang ditentukan, bukan berubah secara acak berdasarkan setiap event scroll.
- Gunakan scrub/timeline yang dapat di-reverse sehingga scroll ke atas mengembalikan scene ke keadaan sebelumnya.
- Pergerakan harus memakai easing/interpolasi yang halus; nilai posisi kamera tidak boleh meloncat saat memasuki section.
- Perubahan target `lookAt` perlu diinterpolasi bersama posisi kamera. Mengubah posisi tanpa mengatur target kamera dapat membuat scene terlihat seperti berputar liar.
- Untuk transisi antarobjek, prioritaskan perpindahan posisi dan perubahan scale yang terkontrol dibanding rotasi penuh 360 derajat.
- Jangan memindahkan atau menskalakan elemen teks untuk meniru perspektif 3D secara berlebihan. Konten DOM harus tetap stabil dan mudah dibaca.
- Jika menggunakan section pinning pada chapter tertentu, batasi hanya untuk bagian yang memang membutuhkannya. Jangan mem-pin seluruh halaman hingga tinggi dokumen dan posisi scrollbar terasa tidak wajar.

### 7.3 Timing dan movement

Nilai awal yang dapat disesuaikan saat prototyping:
- DOM reveal: `0.35–0.7s`.
- Hover/button feedback: `0.16–0.28s`.
- Transisi kamera lintas chapter: mengikuti scroll progress selama section aktif; jangan menggunakan durasi tetap yang selesai sebelum scroll mencapai target.
- Idle movement: kecil, lambat, amplitudo rendah, dan tidak boleh mengganggu hubungan antara posisi scroll dan posisi scene.
- Parallax pointer: sudut kecil dan kecepatan rendah, hanya pada perangkat yang mendukung hover.
- Gunakan `prefers-reduced-motion` untuk menonaktifkan atau menyederhanakan motion yang tidak penting.

### 7.4 Interaksi tambahan

- Pointer move boleh memiringkan objek atau camera target sedikit, tetapi scroll tetap menjadi kontrol dominan.
- Tidak ada sound autoplay.
- Tidak perlu WASD/game controls.
- Bila terdapat cursor khusus, pastikan tidak menghilangkan cursor/focus affordance penting dan tersedia di mobile tanpa hover.
- Tampilkan indikator scroll/progress secara halus jika membantu orientasi. Jangan memenuhi layar dengan HUD, koordinat, angka, dan label teknis yang tidak memberi nilai.

## 8. Recommended Frontend Animation Architecture

### 8.1 Stack yang disarankan

- **Next.js App Router + TypeScript:** struktur halaman, metadata, server rendering, deployment.
- **Three.js melalui React Three Fiber (`@react-three/fiber`):** scene 3D di ekosistem React.
- **Drei (`@react-three/drei`):** hanya helper yang dibutuhkan, misalnya asset loading, controls internal untuk prototyping, atau komponen environment.
- **GSAP + ScrollTrigger:** orchestration timeline dan sinkronisasi animasi dengan progress scroll.
- **Framer Motion (opsional untuk DOM):** reveal section dan micro-interaction HTML. Jika GSAP sudah mengelola motion DOM tertentu, jangan juga menganimasikan target yang sama menggunakan Framer Motion.
- **Tailwind CSS:** layout, typography utilities, responsive behavior; design tokens disimpan sebagai CSS variables.

Jaga pembagian tanggung jawab: R3F/Three.js menggambar scene; GSAP/ScrollTrigger memetakan scroll ke timeline; CSS/DOM mengurus teks, tombol, kartu, dan accessibility. Hindari beberapa library mengontrol properti animasi yang sama.

### 8.2 Arsitektur komponen

Saran struktur, dapat disesuaikan dengan repository aktual:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      navbar.tsx
      mobile-nav.tsx
      footer.tsx
    sections/
      hero.tsx
      about.tsx
      skills.tsx
      projects.tsx
      experience.tsx
      certificates.tsx
      testimonials.tsx
      contact.tsx
    three/
      portfolio-canvas.tsx       # satu Canvas persisten
      portfolio-scene.tsx        # scene dan layer utama
      camera-rig.tsx             # kamera dan target kamera
      scene-controller.tsx       # scene state/timeline bridge
      project-screens.tsx        # objek browser/project screens
      data-pathways.tsx          # garis dan node
      milestones.tsx             # objek milestone
      scene-fallback.tsx         # fallback tanpa WebGL
    ui/
      button.tsx
      section-heading.tsx
      project-card.tsx
      skill-chip.tsx
  data/
    profile.ts
    projects.ts
    skills.ts
    experience.ts
    certificates.ts
    testimonials.ts
    translations.ts
    scene-chapters.ts            # target kamera dan state tiap chapter
  hooks/
    use-theme.ts
    use-language.ts
  lib/
    utils.ts
```

### 8.3 Rancangan chapter data

Letakkan target animasi di konfigurasi terpusat, bukan menyebarkannya sebagai angka magic di setiap komponen. Contoh skema konseptual:

```ts
// Ilustrasi bentuk data; nilai final ditentukan setelah camera composition diuji.
type SceneChapter = {
  id: string;
  sectionId: string;
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  focusObject: string;
  sceneMood: "intro" | "profile" | "skills" | "projects" | "timeline" | "gallery" | "outro";
};
```

Posisi dan target kamera perlu diuji bersama ukuran viewport. Jangan menganggap koordinat contoh sebagai posisi final. Jika mobile menggunakan framing berbeda, sediakan konfigurasi camera chapter untuk breakpoint sempit.

### 8.4 Implementasi dan lifecycle

- Scene 3D adalah Client Component dan harus di-load melalui dynamic import bila diperlukan agar tidak dipaksa dieksekusi saat SSR.
- Jangan memindahkan seluruh website menjadi Client Components hanya karena scene menggunakan Three.js.
- Daftarkan dan bersihkan GSAP/ScrollTrigger saat komponen mount/unmount. Pastikan tidak ada timeline atau listener yang menumpuk setelah route transition atau hot reload.
- Jangan membuat state React baru pada setiap frame. Untuk pergerakan per-frame, gunakan refs/useFrame atau mekanisme animasi yang sesuai.
- Gunakan `Suspense` dan loading state non-blocking yang tidak menyembunyikan konten utama.
- Disposelah geometri, material, texture, render target, dan resource yang dibuat secara manual ketika sudah tidak digunakan.
- Pastikan fallback tetap tampil apabila WebGL tidak didukung, konteks WebGL hilang, atau asset gagal dimuat.

## 9. UI States and Interaction

Setiap kontrol interaktif harus memiliki default, hover (bila didukung), focus-visible, active/selected, dan disabled state bila relevan.

Komponen UI utama:
- `Navbar`, `MobileNav`, `ThemeToggle`, `LanguageToggle`
- `HeroSection`, `SectionHeading`, `ChapterLabel`
- `ProjectsSection`, `ProjectFilter`, `ProjectCard`
- `SkillGroup`, `SkillChip`, `InfoList`
- `ExperienceTimeline`, `CertificateCard`, `TestimonialCard`
- `ContactSection`, `Footer`
- `PortfolioCanvas`, `SceneFallback`, `ScrollProgress` jika memang diperlukan

Project card tidak boleh terlihat clickable apabila link-nya tidak tersedia. Filter aktif harus ditandai oleh teks/icon/border, bukan warna saja. Focus ring harus terlihat bahkan ketika canvas berada di belakang elemen.

## 10. Theme and Language Behavior

### Theme
- Pertahankan light/dark mode apabila fitur tersebut masih digunakan pada website lama.
- Tentukan default theme yang konsisten dengan first impression. Dark mode dapat menjadi tampilan pembuka yang sinematik, tetapi jangan menghapus light mode tanpa alasan produk yang jelas.
- Simpan palet tema sebagai CSS variables; scene membaca tema melalui prop/state yang stabil.
- Hindari kedipan tema saat initial load dan hydration mismatch.
- Perubahan tema tidak boleh membuat camera progress reset atau memuat ulang seluruh world.

### Language
- Bahasa default Indonesia dan English tersedia jika toggle lama tetap dipertahankan.
- Simpan salinan terjemahan di data terpusat; hindari ternary yang berulang di seluruh JSX.
- Pastikan perpindahan bahasa tidak mengubah section ID/trigger scroll dan tidak membuat animasi terpicu dua kali.
- Sinkronkan `lang` pada elemen HTML dengan bahasa aktif.
- Karena teks dua bahasa bisa memiliki panjang berbeda, uji camera placement serta responsive layout untuk kedua bahasa.

## 11. Responsive 3D Behavior

### Mobile: `< 640px`
- Tetap berikan pengalaman scroll 3D, tetapi kurangi detail geometri, jumlah partikel, resolusi tekstur, efek post-processing, dan jumlah objek aktif.
- Gunakan posisi dan target kamera khusus mobile; jangan hanya mengecilkan canvas desktop.
- Objek utama ditempatkan agar tidak bertabrakan dengan teks dan tombol.
- Nonaktifkan pointer-follow yang tidak relevan; gestur touch tetap digunakan untuk scroll normal.
- Hindari pinning panjang yang membuat pengguna merasa halaman macet.
- Jika perangkat lemah atau WebGL tidak tersedia, gunakan background/fallback statis yang sesuai tema.

### Tablet: `640–1023px`
- Pilih framing antara mobile dan desktop berdasarkan ruang nyata, bukan hanya breakpoint CSS.
- Kurangi bloom/particle serta jumlah object yang dirender bersamaan.
- Uji orientasi portrait dan landscape.

### Desktop: `>= 1024px`
- Tampilkan komposisi ruang yang lebih luas, parallax pointer ringan, dan jumlah detail lebih kaya jika performa memungkinkan.
- Jaga scene tetap halus saat scroll cepat, saat pengunjung membalik arah scroll, serta saat ukuran jendela berubah.

Breakpoint ini merupakan acuan awal. Gunakan `svh`/`dvh` dengan fallback yang sesuai untuk menghindari masalah viewport browser mobile.

## 12. Accessibility and Reduced Motion

- Gunakan landmark semantik `header`, `nav`, `main`, `section`, dan `footer`.
- Semua konten penting, link, filter, toggle, dan CTA tersedia sebagai HTML yang dapat difokuskan dan dibaca screen reader.
- Canvas 3D dekoratif tidak boleh mengambil fokus keyboard; tandai `aria-hidden="true"` bila tidak menyediakan informasi esensial.
- Jangan memakai warna saja untuk menunjukkan status.
- Teks tetap punya kontras yang memadai ketika background scene terang atau berubah.
- Hormati `prefers-reduced-motion: reduce`: hilangkan camera travel yang intens, parallax, idle animation, smooth scrolling tambahan, dan reveal yang tidak penting. Gunakan versi scene statis atau background 3D yang minim gerak.
- Jangan mematikan scroll normal ketika scene dimatikan.
- Tidak ada autoplay audio atau flash yang berisiko.
- Sediakan skip link menuju konten utama bila cocok dengan struktur halaman.

## 13. Asset Pipeline and 3D Optimization

### Asset selection
- Utamakan geometri procedural sederhana untuk node, garis, platform, panel, dan objek abstrak.
- Gunakan model GLB/GLTF hanya bila benar-benar memperkuat cerita, ukurannya masuk akal, dan lisensinya jelas.
- Hindari model karakter realistis yang berat pada versi pertama.
- Preview proyek harus menggunakan aset asli dari repository bila tersedia; audit semua path sebelum migrasi ke Next.js.
- Gunakan tekstur terkompresi dan resolusi yang proporsional terhadap ukuran objek di layar.

### Performance rules
- Satu Canvas untuk pengalaman utama; jangan membuat Canvas terpisah untuk tiap section/kartu.
- Lazy-load scene/asset 3D setelah diperlukan, tetapi jangan menunda nama, CTA, navigasi, atau informasi penting.
- Batasi `devicePixelRatio` dan gunakan kualitas adaptif untuk layar kecil/perangkat lambat.
- Hindari banyak shadow-casting lights, material transparan yang bertumpuk, post-processing mahal, dan ribuan partikel.
- Reuse geometry/material bila objek sejenis berulang.
- Hindari animasi state React setiap frame; gunakan refs dan render loop R3F.
- Pause atau kurangi update saat tab tidak terlihat jika tepat.
- Uji scroll yang panjang agar memory usage tidak meningkat terus.
- Target pengalaman: transisi terasa stabil di perangkat desktop umum dan fallback tetap nyaman di ponsel menengah/bawah. Jangan mengorbankan scroll normal demi angka FPS.

## 14. Next.js and Vercel Considerations

- Gunakan Next.js App Router + TypeScript.
- Server Components untuk bagian konten/data yang statis; Client Components hanya untuk interaksi, theme/language state, filter, ScrollTrigger, dan scene 3D.
- Gunakan `next/image` untuk gambar dengan dimensi atau aspect ratio yang pasti.
- Metadata dikelola melalui Metadata API Next.js; title, description, Open Graph, canonical, dan favicon wajib diperiksa.
- Scene/asset tidak boleh menjadi dependency wajib untuk menghasilkan halaman inti.
- Pastikan environment lokal dan Vercel memakai versi Node yang kompatibel dengan dependency yang dipilih.
- Jangan memakai API browser (`window`, `document`, WebGL) saat render server.
- Build production harus berhasil; uji bundle dan browser console setelah deploy.
- Jika contact form membutuhkan backend/email service, gunakan environment variables dan jangan menaruh secret di client bundle. Jangan menampilkan form pura-pura aktif.

## 15. SEO and Content Integrity

- Suggested title: `Rafi Alif Azhar — Web Developer`.
- Meta description harus spesifik, singkat, dan sesuai konten aktual.
- Gunakan domain produksi sebagai canonical setelah final.
- Open Graph image dengan rasio yang sesuai, misalnya `1200 × 630`.
- Foto profil dan project preview memiliki alt text bermakna; elemen 3D dekoratif diabaikan screen reader.
- Audit data profil, IPK, TOEFL, sertifikasi, periode pengalaman, repository, demo, dan link sosial sebelum rilis.
- Jangan menampilkan penghargaan, angka statistik, testimoni, atau hasil proyek yang belum diverifikasi.

## 16. Implementation Plan

1. **Audit website lama:** inventarisasi konten, gambar, file CV, link demo/repository, tema, dan language toggle. Tandai aset yang ada dan yang perlu dibuat.
2. **Foundation Next.js:** setup App Router, TypeScript, Tailwind, font, design tokens, layout semantik, dan deploy preview awal ke Vercel.
3. **Functional HTML portfolio:** migrasikan semua section dan interaksi dasar sebelum scene 3D lengkap dibuat.
4. **Greybox 3D:** bangun world dengan geometri sederhana, satu Canvas, camera rig, dan placeholder untuk chapter utama.
5. **Scroll choreography:** sambungkan Hero, Projects, dan Contact ke ScrollTrigger; pastikan reverse-scroll berfungsi sebelum menambah detail.
6. **Add content chapters:** Skills, About, Experience, Certificates, dan section relevan lainnya.
7. **Visual polish:** material, lighting, project screens, data pathways, camera easing, micro-interactions, dan responsive composition.
8. **Accessibility/performance:** reduced motion, fallback, mobile tuning, lifecycle cleanup, image/texture optimization, dan QA.
9. **Release:** validasi link, SEO, production build, Vercel preview, dan pemeriksaan visual lintas ukuran layar.

**Jangan mulai dengan membuat model 3D detail terlebih dahulu.** Validasi dulu alur scroll, posisi kamera, keterbacaan teks, serta perpindahan chapter menggunakan bentuk sederhana. Setelah alur ini terasa bagus, tingkatkan kualitas model, material, dan lighting.

## 17. Quality Assurance Checklist

### Scroll and scene
- [ ] Pergerakan kamera benar-benar berubah mengikuti scroll, bukan hanya animasi idle.
- [ ] Camera position dan look-at target bertransisi dengan halus pada setiap chapter.
- [ ] Scroll ke atas membalik animasi secara benar.
- [ ] Tidak ada scroll hijacking atau pinning berlebihan.
- [ ] Tidak ada flicker atau reset scene saat pergantian section/tema/bahasa.
- [ ] Gerakan objek tidak menutupi heading, tombol, atau teks proyek.
- [ ] Progress/loading state tidak memblokir konten utama.

### Portfolio behavior
- [ ] Semua section dan data yang masih relevan dari website lama sudah diaudit.
- [ ] Filter project, theme, language, mobile nav, CTA, dan external links bekerja.
- [ ] Hanya proyek/sertifikat/testimonial yang memiliki data valid ditampilkan.
- [ ] CV dan semua aset yang dirujuk benar-benar ada.
- [ ] Nav link membawa pengguna ke section yang benar.

### Responsive and accessibility
- [ ] Tampilan diuji di mobile portrait, mobile landscape, tablet, dan desktop.
- [ ] Tidak ada horizontal overflow, termasuk pada lebar 320px.
- [ ] Konten dapat dipakai tanpa interaksi pada objek 3D.
- [ ] Keyboard focus terlihat dan menu bisa ditutup dengan benar.
- [ ] `prefers-reduced-motion` memberi versi minim gerak yang usable.
- [ ] Canvas gagal/WebGL nonaktif tetap menampilkan website yang lengkap.
- [ ] Kontras teks stabil pada semua chapter.

### Performance and production
- [ ] Satu Canvas utama digunakan kembali sepanjang pengalaman.
- [ ] Asset 3D dan project images dikompresi.
- [ ] Tidak ada error WebGL, hydration mismatch, atau warning listener/timeline yang menumpuk.
- [ ] Render loop/resource dibersihkan sesuai lifecycle.
- [ ] Production build berhasil.
- [ ] Deployment Vercel berhasil dan seluruh rute/asset penting bekerja.

## 18. Definition of Done

Desain dianggap siap rilis ketika:

1. Website sudah memakai Next.js App Router dan mempertahankan konten portofolio yang relevan serta terverifikasi.
2. Ada **scroll-driven 3D experience yang nyata**: kamera dan objek berubah mengikuti posisi scroll pada chapter yang ditetapkan.
3. Minimal Hero, Projects, dan Contact memiliki transisi 3D yang terasa berbeda dan saling terhubung.
4. Animasi dapat dibalik dengan scroll ke atas dan tidak mengambil alih kontrol scroll browser.
5. Semua informasi penting tetap berupa HTML yang mudah dibaca, diakses, dan digunakan tanpa canvas.
6. Mobile, reduced-motion, dan fallback tanpa WebGL mendapat pengalaman yang layak.
7. Performance, link, metadata, production build, dan deployment Vercel telah diperiksa.

**Keputusan desain final:** buat pengalaman 3D yang terasa sinematik dan interaktif seperti perjalanan melalui dunia digital Rafi, dengan scroll sebagai pengarah utama. Efek visual harus punya hubungan dengan cerita portfolio; bukan sekadar menambahkan efek 3D di atas template biasa.