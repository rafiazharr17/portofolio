
# DESIGN.md — Immersive 3D Portfolio Rafi Alif Azhar

> Dokumen desain visual dan teknis untuk membangun ulang portofolio Rafi Alif Azhar dengan Next.js, Three.js, dan animasi 3D yang terhubung langsung dengan scroll halaman. Dokumen ini menjadi acuan implementasi, bukan sekadar inspirasi visual.

## 0. Anti-Slop Contract

Dokumen ini menetapkan **arah desain yang spesifik**; anti-slop adalah filter untuk menolak pola UI, copy, dan implementasi yang generik. Jangan menafsirkan “anti-slop” sebagai “buat semuanya minimal, kosong, dan aman”. Hasil akhir harus tetap punya karakter, ritme, dan momen visual yang kuat.

### Sebelum implementasi

1. Periksa apakah coding agent memiliki skill anti-slop yang sudah terpasang. Jika ada, baca core `antislop` beserta `antislop-ui`, `antislop-copywriting`, `antislop-human`, dan `antislop-layoutmobile` sesuai lokasi skill yang ditemukan agent.
2. Gunakan dokumen ini untuk arah visual, lalu gunakan anti-slop sebagai filter. Jangan mengganti arah seni di sini dengan selera default model.
3. Jika skill tidak tersedia di environment, terapkan aturan dan checklist dalam dokumen ini. Jangan mengklaim bahwa skill telah dimuat atau dijalankan bila tidak benar.
4. Referensi sistem anti-slop: https://github.com/miqdadbadjuber/anti-slop. Jangan menyalin komponen atau hasil contoh repo secara membabi buta.

### Pola yang dilarang sebagai default

- Gradient biru-ungu/cyan yang membentang sebagai identitas utama, glow-orb besar di belakang Hero, dan neon pada semua elemen.
- Partikel acak, jaringan node generik, sphere abstrak, dan kubus berputar yang tidak berkaitan dengan proyek nyata.
- Terminal palsu, kode filler, dashboard dengan angka rekaan, browser window tanpa isi relevan, logo teknologi yang tidak dipakai, serta screenshot aplikasi yang dibuat seolah-olah asli.
- Glassmorphism di navbar, kartu, dialog, dan panel secara bersamaan. Blur hanya boleh digunakan sebagai aksen terbatas bila ada alasan komposisi.
- Kartu dengan radius, shadow, padding, dan susunan yang sama di setiap section; badge pill untuk setiap label; status dot dekoratif yang tidak menandai status nyata.
- Tagline promosi kosong, testimoni, metrik, jumlah pengguna, persentase, tahun, atau klaim dampak yang tidak terverifikasi.
- Reveal, parallax, cursor custom, dan animasi hover yang ditambahkan hanya karena mudah dibuat.

Setiap pola yang mendekati daftar di atas harus punya alasan visual/UX yang ditulis singkat, atau dihapus. Konsistensi bukan berarti semua section harus terlihat sama.

## 1. Design Direction

### 1.1 Konsep utama

**Scroll-Driven 3D Portfolio — “Rafi's Systems Workbench”**

Bayangkan satu *workbench* digital tiga dimensi yang merangkum pekerjaan Rafi sebagai Web Developer. Bentuknya berupa alas arsitektural yang rapi, rail untuk perpindahan kamera, dan panel proyek yang menampilkan **screenshot atau aset proyek sungguhan**. Saat pengunjung scroll, kamera bergerak dari satu bagian workbench ke bagian berikutnya; modul panel berubah fungsi dari profil, peta skill, proyek, sampai kontak.

Ini bukan scene sci-fi generik dan bukan simulasi kamar realistis. Karakter visual berasal dari benda-benda yang menjelaskan pekerjaan web: bingkai browser, susunan halaman, modul data, dan detail koneksi yang hanya digunakan ketika konteksnya memang tepat. Konten karier tetap berada di HTML normal, sedangkan scene 3D memberi konteks spasial dan ritme visual.

### 1.2 Referensi dan batas pemakaian

- Musée — https://musee.barvian.me/ : ambil gagasan camera choreography dan hubungan antara scroll dengan urutan adegan.
- David Heckhoff — https://david-hckh.com/ : ambil gagasan bahwa 3D dapat menjadi bagian dari identitas developer.
- Anti-slop — https://github.com/miqdadbadjuber/anti-slop : gunakan sebagai filter untuk pola generik, copy yang kosong, aksesibilitas, dan kualitas responsive; bukan sebagai template visual.

Jangan menyalin bentuk, layout, kode, aset, atau identitas visual referensi. Jangan menganggap referensi sebagai instruksi untuk memakai model 3D tertentu. Semua panel proyek dan copy harus diturunkan dari konten portofolio Rafi yang ada dan sudah diaudit.

### 1.3 Design read: energi, ritme, dan motion

- **Energy: 3/5.** Profesional dengan beberapa momen visual berani. Jangan membuat setiap piksel bersinar atau setiap section terasa seperti trailer game.
- **Rhythm: 4/5.** Komposisi sengaja tidak seragam: Hero asimetris, Skills lebih terstruktur, Projects punya satu featured project besar disertai daftar yang lebih rapat, Experience berupa timeline, Certificates berupa indeks bukti, Contact lapang dan tenang.
- **Motion: 4/5.** Scroll-driven camera movement menjadi karakter utama, tetapi setiap chapter juga punya jeda/pose stabil agar mata bisa membaca. Motion intensitas tinggi hanya pada perpindahan yang memang membawa cerita.

### 1.4 Prinsip desain

1. **Scroll drives the scene:** posisi scroll mengendalikan timeline kamera/objek; idle motion hanya aksen kecil.
2. **One connected workbench:** scene tetap terasa sebagai satu konstruksi, bukan rangkaian demo 3D yang ditempel per section.
3. **Actual work over decoration:** proyek nyata, screenshot terverifikasi, dan informasi profil lebih penting daripada efek visual abstrak.
4. **Asymmetry with purpose:** grid dan komposisi menyesuaikan jenis konten; jangan mengulang komponen kartu yang identik di semua section.
5. **Contrast through restraint:** biru dipakai sebagai aksen, permukaan UI netral dan mudah dibaca; bukan semua hal diberi glow, gradient, glass, atau shadow.
6. **Readable HTML first:** semua teks, link, filter, dan CTA tetap tersedia di DOM, bukan hanya di canvas.
7. **Progressive enhancement:** website tetap lengkap saat WebGL mati, reduced motion aktif, atau scene belum selesai dimuat.

## 2. Creative Direction: Rafi's Systems Workbench

### 2.1 Scene yang dibangun

Bangun satu objek dasar seperti **meja kerja/board sistem modular dalam perspektif isometrik**, bukan kamar penuh dekorasi. Di atasnya terdapat beberapa modul yang dapat berubah posisi atau sudut saat kamera bergerak:

- **Featured project frame:** satu bingkai browser lebar yang menggunakan screenshot proyek asli yang tersedia di website/repository. Gunakan tekstur screenshot asli, jangan membuat UI palsu sebagai pengganti.
- **Project index rail:** jalur fisik sederhana tempat panel proyek lain tersusun lebih kecil. Hanya panel yang sedang dibahas yang maju ke foreground; panel lain tetap tenang.
- **System blocks:** bentuk blok yang mewakili lapisan Frontend, API/Backend, dan Database pada level abstrak. Gunakan hanya saat menjelaskan skill atau struktur proyek yang memang memiliki sumber. Jangan membuat diagram seolah-olah menjelaskan arsitektur aktual tanpa bukti.
- **Timeline rail:** penanda kecil pada satu jalur untuk Experience/Education; teks tanggal, organisasi, dan tanggung jawab tetap HTML.
- **Evidence panels:** format panel datar untuk sertifikat yang tersedia. Dokumen/credential bukan medali atau objek 3D fantasi.
- **Contact frame:** komposisi akhir yang memberi ruang kosong di samping CTA. Tidak perlu portal bercahaya atau ledakan partikel untuk menandakan penutup.

Jangan tampilkan semua modul sekaligus dengan bobot visual yang sama. Kembangkan scene bertahap melalui posisi kamera dan fokus, bukan dengan menambah banyak objek baru.

### 2.2 Visual personality

- **Bentuk:** rangka modular, panel persegi panjang, rail, garis tipis, dan volume rendah. Bentuk organik hanya jika berasal dari aset proyek yang nyata.
- **Material:** matte charcoal, warm-white enamel, metal/graphite, dan aksen cobalt. Material glossy hanya pada bagian kecil yang memang perlu menangkap cahaya.
- **Lighting:** satu key light lembut dan satu rim light terbatas. Hindari bloom layar penuh, rim-light pada setiap objek, dan cyan glow di semua tepi.
- **Background:** bidang netral/gelap yang stabil dengan tekstur sangat halus jika dibutuhkan; bukan kabut gradient atau kumpulan radial orb.
- **Detail personal:** gunakan judul/preview proyek, stack, atau potongan interface yang benar-benar berasal dari pekerjaan Rafi sebagai penanda identitas. Jangan mengarang avatar realistis.

### 2.3 Cara scene menyampaikan identitas

Keunikan scene berasal dari **jenis pekerjaan yang ditampilkan**, bukan dari ornamentasi. Contoh aset kandidat yang perlu diperiksa: aplikasi antrean pelayanan publik, MIS Aset, Stock Monitoring & Delivery Control, Job Setup Verification, School Management App, website TKQ/PPDB, LMS, Movie Discovery Platform, dan Canela Dessert. Pilih hanya aset yang memang tersedia, masih relevan, dan layak ditampilkan. Bila aset tidak ada, gunakan label teks HTML atau abstraksi yang jelas dekoratif; jangan berpura-pura itu screenshot produk.

## 3. Scroll Experience — Storyboard Utama

### 3.1 Aturan pengalaman

- Scroll biasa adalah kontrol utama; **jangan mengambil alih mouse wheel, memaksa scroll-snap, atau mengunci pengunjung dalam urutan tertentu**.
- Scene 3D tetap berada pada layer visual yang konsisten selama bagian pengalaman berlangsung. Camera rig membaca progres scroll dan bergerak dengan transisi yang halus.
- Setiap section menjadi sebuah “chapter”. Ketika chapter masuk viewport, kamera, target kamera, rotasi objek, pencahayaan, dan elemen scene bertransisi ke keadaan yang sudah dirancang.
- Scroll ke atas harus membalik transisi dengan benar. Pengunjung harus bebas kembali ke bagian sebelumnya.
- Konten HTML harus tetap terbaca ketika scene bergerak. Utamakan perubahan posisi kamera, ruang kosong, permukaan solid, dan scrim netral yang tipis. Gradient boleh dipakai untuk satu fungsi spesifik, bukan sebagai background otomatis tiap section.
- Interaksi pointer boleh menambah sedikit parallax di desktop, tetapi tidak boleh bersaing dengan kontrol scroll.

### 3.2 Peta chapter dan pergerakan 3D

Rentang di bawah adalah **perkiraan awal untuk perencanaan**, bukan persentase yang harus dikunci secara literal. Saat implementasi, gunakan ScrollTrigger berbasis section/anchor sehingga pergerakan tetap sinkron ketika tinggi konten, bahasa, atau ukuran viewport berubah.

| Chapter | Konten HTML | Aksi scene 3D saat scroll | Peran visual |
|---|---|---|---|
| 01 — Intro / Hero | Nama, title Web Developer, ringkasan, CTA proyek dan kontak | Kamera mendekati featured project frame di atas workbench. Satu panel browser berisi screenshot proyek asli terlihat dari sudut 3/4; saat scroll, kamera meninggalkan Hero melalui rail yang sama, tanpa partikel acak atau panel yang masuk dari segala arah. | Memperkenalkan Rafi dan mengundang pengunjung menjelajahi dunia digitalnya. |
| 02 — About | Ringkasan profil, lokasi, pendidikan, dan fakta terverifikasi | Kamera menggeser sudut pandang ke area workbench yang sengaja lebih kosong. Profil dibaca melalui layout HTML; jangan membuat kartu identitas 3D dekoratif yang mengulang teks yang sudah ada. | Mengubah fokus dari identitas visual ke manusia di balik proyek. |
| 03 — Skills / Expertise | Kelompok skill web development, backend, frontend, database, dan tools yang memang dikuasai | Beberapa system blocks membentuk relasi Frontend → Backend/API → Database hanya jika relasi tersebut sesuai dengan keahlian yang diklaim. Daftar skill tetap HTML; hindari kumpulan node yang menyala tanpa makna. | Menunjukkan bahwa teknologi saling membentuk sebuah sistem, bukan hanya daftar badge. |
| 04 — Selected Projects | Proyek unggulan dan grid/filter seluruh proyek | Kamera mengikuti project index rail menuju satu featured frame. Panel unggulan maju dan berhenti; panel sekunder tetap lebih kecil dan stabil. Panel selalu memakai preview proyek asli jika tersedia. | Menjadikan proyek sebagai klimaks visual utama dan bukti kemampuan. |
| 05 — Experience & Education | Timeline pengalaman, internship, pendidikan, dan kontribusi | Kamera bergeser sepanjang timeline rail dengan sedikit parallax; marker hanya menyorot periode yang sedang dibaca. Informasi tanggal dan kontribusi tetap pada timeline HTML. | Menceritakan perkembangan pengalaman secara runtut. |
| 06 — Certificates & Achievements | Sertifikasi dan pencapaian terverifikasi | Kamera berhenti di area evidence panels. Bila dokumen asli tersedia, tampilkan thumbnail/preview yang proporsional; tanpa aset asli, gunakan daftar HTML tanpa mengganti bukti dengan gambar rekaan. | Memberi ruang visual bagi bukti kompetensi. |
| 07 — Contact / Outro | CTA kolaborasi, email, GitHub, dan sosial yang valid | Kamera perlahan menjauh untuk memperlihatkan workbench sebagai satu sistem, lalu berhenti pada komposisi dengan ruang negatif bagi CTA. Tidak ada portal bercahaya atau efek final yang menyaingi kontak. | Membawa cerita kembali ke satu ajakan tindakan yang jelas. |

### 3.3 Prioritas chapter

Jika biaya implementasi atau performa menjadi kendala, prioritaskan animasi scroll pada **Hero → Projects → Contact**. Chapter lain tetap dapat memakai camera movement yang lebih sederhana atau animasi objek ringan. Jangan membuat tujuh scene terpisah dengan tujuh canvas WebGL.

## 4. Visual Identity and Design Tokens

### 4.1 Warna

Gunakan warna netral hangat dari website lama sebagai bidang utama, pertahankan cobalt blue `#1A6EF7` sebagai aksen interaksi, dan gunakan amber `#F59E0B` hanya sebagai penanda terbatas bila ada makna. Scene 3D boleh lebih gelap, tetapi tidak boleh mengubah seluruh portfolio menjadi neon biru/cyan.

| Token | Light mode | Dark mode | Kegunaan |
|---|---|---|---|
| `--background` | `#F7F6F3` | `#111827` | Latar halaman; pertahankan rasa warm-neutral di light mode |
| `--surface` | `#FFFFFF` | `#172033` | Surface utama untuk teks/kontrol |
| `--surface-muted` | `#F1F5F9` | `#202B3E` | Pengelompokan konten seperlunya |
| `--foreground` | `#171B25` | `#F4F3F0` | Teks utama |
| `--muted` | `#526078` | `#A9B4C7` | Metadata/deskripsi |
| `--border` | `rgba(23,32,51,.14)` | `rgba(244,243,240,.16)` | Garis pemisah halus |
| `--primary` | `#1A6EF7` | `#78A9FF` | Link, fokus, CTA utama |
| `--primary-strong` | `#1050C8` | `#A9C7FF` | Hover/focus pada tema sesuai kontras |
| `--accent-warm` | `#F59E0B` | `#F5B84D` | Penanda kecil yang memang memiliki arti |
| `--scene-base` | `#EAE9E4` | `#111827` | Bidang dasar workbench |
| `--scene-highlight` | `#1A6EF7` | `#78A9FF` | Sorotan terbatas pada panel/rail yang sedang aktif |

Aturan:
- Biru dipakai untuk link, state aktif, highlight scene, dan CTA. Jangan gunakan cyan sebagai warna cahaya universal.
- Amber bukan warna dekorasi umum; gunakan hanya untuk menandai satu detail penting jika benar-benar diperlukan.
- Tidak ada gradient biru-ungu/cyan sebagai default, radial glow besar, atau glow pada seluruh kartu. Jika gradient dipakai, tulis fungsi hierarkinya dan batasi pada satu area.
- Kebanyakan surface harus datar/solid. Maksimal 1–2 elemen boleh memakai blur/glass, dan hanya jika itu membantu pemisahan layer.
- Shadow dipakai hanya untuk elemen yang perlu terangkat secara nyata; sebagian besar kartu/list tetap flat.
- Pastikan kontras semua warna diuji pada light mode dan dark mode, termasuk teks di atas canvas.

### 4.2 Tipografi

- Sans utama: Geist Sans melalui `next/font` untuk UI dan konten. Jika website lama memakai font lain yang punya identitas kuat dan lisensinya jelas, audit dulu sebelum mengganti.
- Monospace: Geist Mono hanya untuk metadata teknis yang benar-benar membantu, seperti stack atau indeks chapter; jangan mengubah setiap label menjadi pseudo-terminal.
- Nama di Hero: `clamp(3rem, 6.5vw, 6rem)` dengan weight 650–750 dan letter-spacing sedikit negatif; ukur line-wrap nyata sebelum membesarkan ukuran lagi.
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
- Radius: small `4–6px` untuk kontrol/data, medium `10–12px` untuk panel utama, large maksimal `18px` hanya pada elemen terpilih. Pill `999px` khusus elemen yang memang berbentuk chip atau toggle; tidak semua tombol dan kartu harus pill/rounded besar.

## 5. Page Composition and Layering

### 5.1 Struktur layer

Layering wajib direncanakan agar scene 3D dan isi halaman tidak saling menutupi:

1. **Background / 3D canvas:** susunan workbench, rail kamera, featured project frame, dan modul yang berkaitan dengan konten aktif.
2. **Content layer:** section, heading, paragraph, project grid, timeline, dan CTA dalam HTML normal.
3. **Navigation layer:** navbar, chapter/progress indicator jika digunakan, theme toggle, dan language toggle.
4. **Interaction feedback:** focus rings, active nav, tooltip, dan state tombol.

Gunakan `z-index` yang terkontrol dan dokumentasikan layering pada komponen utama. Canvas dekoratif harus `aria-hidden="true"`. Pastikan `pointer-events` tidak menghalangi link/tombol HTML. Bila objek 3D dibuat interaktif, batasi hit-area interaksi ke komponen khusus dan jangan sampai canvas mengambil semua input pointer.

### 5.2 Pilihan layout canvas

- Desktop: gunakan satu canvas persisten di area scroll experience, dengan `position: sticky` atau layer fixed yang direncanakan agar camera travel terlihat menyatu lintas chapter.
- Hindari re-mount canvas setiap section karena dapat menyebabkan flicker, reset state, atau biaya GPU tambahan.
- Jika kontras perlu diperbaiki, pilih permukaan solid atau scrim netral terlebih dahulu. Gradient hanya dipakai bila punya fungsi hirarki yang jelas; jangan menggunakan blur sebagai perlengkapan otomatis navbar.
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
- Scene pembuka: workbench asimetris dengan satu featured project frame yang menggunakan aset asli. Depth datang dari perspektif, material matte, dan camera movement, bukan dari banyak panel melayang, shadow besar, atau rim light pada setiap objek.
- Hindari intro loading panjang, layar hitam berlebihan, logo animation yang menunda konten, atau interstitial “click to enter” wajib.

### 6.3 About

- Heading dengan chapter label, misalnya `01 / ABOUT`.
- Profil 2–3 paragraf singkat; prioritaskan fakta yang membantu recruiter atau klien memahami peran Rafi.
- Skill/pendidikan/lokasi dalam kelompok ringkas.
- Camera movement: orbit atau track samping dengan perubahan perspektif yang terasa, bukan sekadar zoom in/out yang sama pada setiap section.
- Jangan membuat identity panel 3D yang sekadar mengulang nama dan biografi. Biarkan teks profil menjadi fokus; camera movement memberi perubahan visual tanpa menambah kartu dekoratif.

### 6.4 Skills / Expertise

- Kelompokkan teknologi menurut fungsi: Frontend, Backend, Database, Tools/Workflow.
- Jangan menampilkan semua teknologi secara serentak dalam visual 3D. Aktifkan sebagian saat kelompok skill masuk viewport.
- System blocks hanya boleh menunjukkan relasi Frontend/API/Database jika relasi itu didukung konteks proyek atau skill yang memang dimiliki. Hindari node dan garis yang menyala tanpa informasi yang bisa dijelaskan.
- Label skill HTML harus tetap dapat dipindai dengan cepat dan keyboard/screen-reader friendly.

### 6.5 Projects — Visual Centerpiece

Projects adalah salah satu bagian yang paling penting untuk diberi perhatian visual.

**HTML layer**
- Heading dan pengantar singkat yang menjelaskan jenis pekerjaan yang benar-benar ditampilkan.
- Filter: All/Semua, Full Stack, Frontend, atau kategori lain yang benar-benar cocok dengan dataset.
- Satu featured project dengan area preview lebih besar, lalu daftar/grid proyek pendukung dengan ukuran/komposisi yang mengikuti panjang konten. Jangan menjadikan semua proyek kartu identik jika ada proyek dengan bukti visual atau cerita lebih kuat.
- Ringkasan proyek menyebut konteks, kontribusi, dan hasil yang bisa dibuktikan; jangan mengarang metrik untuk membuat kartu tampak menarik.
- Pertahankan detail proyek yang dapat dibaca tanpa harus memahami 3D.

**3D layer**
- Bangun satu featured browser/project frame dan satu rail panel pendukung sebagai objek utama di ruang virtual. Tambah panel lain hanya bila ada preview proyek yang benar-benar tersedia.
- Saat pengunjung scroll ke project chapter, kamera mendekat dan featured frame bergerak ke posisi baca; panel sekunder bergeser seperlunya dan tidak terus berputar.
- Setiap perpindahan project menggunakan transformasi yang halus: `position`, `rotation`, `scale`, serta lighting. Jangan membuat semua objek meledak, berputar cepat, atau melintas menutupi konten.
- Project screen menggunakan screenshot/aset proyek asli bila tersedia. Jika aset tidak ada, gunakan abstraksi UI generik yang jelas dianggap dekorasi; jangan mengarang screenshot seolah-olah itu tampilan aplikasi sebenarnya.
- Klik kartu proyek HTML membuka link yang valid. Tidak boleh mewajibkan pengguna mengklik objek 3D untuk mengakses repository/demo.
- Filter proyek harus tetap bekerja pada grid HTML. Scene boleh sinkron ke proyek yang difokuskan, tetapi fungsi filter tidak boleh bergantung pada canvas.

Contoh kandidat proyek dari konten yang sudah ada di portofolio perlu diaudit ulang sebelum dipilih sebagai featured items: aplikasi antrean pelayanan, MIS Aset, Stock Monitoring & Delivery Control, Job Setup Verification, sistem manajemen sekolah, website PPDB/TKQ, LMS, Movie Discovery Platform, dan Canela Dessert. Urutan final ditentukan berdasarkan validitas data, kualitas aset, dan relevansi profesional—bukan berdasarkan daftar ini secara otomatis.

### 6.6 Experience & Education

- Timeline vertikal yang mudah dipindai, bukan layout dua kolom sempit.
- Jabatan, organisasi, periode, dan kontribusi nyata ditampilkan dalam HTML.
- Scene menggunakan timeline rail sederhana yang berpindah ke marker sesuai item pengalaman yang sedang dibaca.
- Marker aktif boleh berubah posisi atau mendapat aksen warna kecil; jangan membangun jalur cahaya futuristik yang tidak memberi informasi tambahan.
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
- Outro 3D: kamera perlahan menarik diri, workbench terbaca sebagai satu susunan, dan ruang kosong mengarahkan pandangan menuju CTA. Hindari efek portal/ledakan glow yang mengganggu ajakan kontak.
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
      workbench-rails.tsx        # rail/garis penghubung yang punya fungsi
      timeline-markers.tsx       # marker yang sinkron dengan konten Experience
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
- Utamakan geometri procedural ringan untuk alas, rail, bracket, panel browser, dan marker yang sesuai konsep workbench. Bentuk abstrak tambahan harus punya alasan, bukan mengisi ruang kosong.
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
- Tulis copy dari fakta portofolio yang ada. Hindari pengisi seperti “passionate developer”, “building digital experiences”, “unlocking potential”, “next-level”, “seamless”, atau kalimat bombastis yang bisa dipakai oleh portofolio siapa pun.
- Prioritaskan kalimat pendek dan spesifik: masalah/konteks, kontribusi Rafi, dan hasil hanya jika benar-benar didukung sumber. Jangan menambahkan angka hanya agar copy terlihat meyakinkan.
- Jangan menampilkan penghargaan, angka statistik, testimoni, atau hasil proyek yang belum diverifikasi. Jika data belum ada, hilangkan bagian itu atau tampilkan dengan jujur sebagai informasi yang belum disediakan.

## 16. Implementation Plan

1. **Load anti-slop and audit:** periksa skill anti-slop yang tersedia; baca core/UI/copywriting/human/layoutmobile jika ada, lalu inventarisasi konten, gambar, file CV, link demo/repository, tema, dan language toggle. Tandai aset yang ada dan yang perlu dibuat.
2. **Foundation Next.js:** setup App Router, TypeScript, Tailwind, font, design tokens, layout semantik, dan deploy preview awal ke Vercel.
3. **Functional HTML portfolio:** migrasikan semua section dan interaksi dasar sebelum scene 3D lengkap dibuat.
4. **Greybox 3D:** bangun world dengan geometri sederhana, satu Canvas, camera rig, dan placeholder untuk chapter utama.
5. **Scroll choreography:** sambungkan Hero, Projects, dan Contact ke ScrollTrigger; pastikan reverse-scroll berfungsi sebelum menambah detail.
6. **Add content chapters:** Skills, About, Experience, Certificates, dan section relevan lainnya.
7. **Visual polish:** material matte, lighting terbatas, panel proyek asli, camera easing, micro-interactions yang fungsional, dan komposisi responsive.
8. **Accessibility/performance:** reduced motion, fallback, mobile tuning, lifecycle cleanup, image/texture optimization, dan QA.
9. **Anti-slop Delivery Gate & release:** periksa visual direction, copy, autentisitas aset, aksesibilitas, responsive layout, dan semua interaksi; dokumentasikan PASS/FAIL lalu validasi link, SEO, production build, Vercel preview, dan pemeriksaan visual lintas ukuran layar.

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

### Anti-slop / visual and copy review
- [ ] Arah visual nyata mengikuti `Rafi's Systems Workbench`; scene tidak berisi kumpulan objek futuristik generik.
- [ ] Setiap objek 3D dan efek motion punya peran yang dapat dijelaskan atau dihapus.
- [ ] Tidak ada gradient biru-ungu/cyan, glow-orb besar, glassmorphism menyeluruh, shadow berat pada semua kartu, atau status dot yang tidak menandai status.
- [ ] Layout berbeda sesuai fungsi section: Hero asimetris, Projects punya featured project dan daftar pendukung, Experience timeline, Certificates index/list, Contact tenang.
- [ ] Tidak ada screenshot aplikasi, terminal, data, angka, logo, testimoni, atau klaim yang dikarang.
- [ ] Copy tidak memakai jargon promosi/filler; setiap pernyataan profesional dapat dilacak ke data sumber.
- [ ] Semua kontrol interaktif diuji satu per satu; hasil tes dan temuan dicatat dalam laporan Delivery Gate PASS/FAIL.

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
8. Anti-slop review menyatakan PASS untuk visual direction, copy/content integrity, accessibility/responsive behavior, dan interaction states; temuan kritis sudah diperbaiki.
9. Tidak ada elemen dekoratif, claim, atau asset palsu yang dipertahankan hanya karena membuat halaman tampak lebih penuh.

**Keputusan desain final:** buat pengalaman 3D yang terasa sinematik dan interaktif seperti perjalanan melalui dunia digital Rafi, dengan scroll sebagai pengarah utama. Efek visual harus punya hubungan dengan cerita portfolio; bukan sekadar menambahkan efek 3D di atas template biasa.
