# PABW — Pengembangan Aplikasi Berbasis Web

Repositori tugas dan praktikum mata kuliah **Pengembangan Aplikasi Berbasis Web (SIF302)**, Semester Gasal 2026/2027.

| | |
|---|---|
| Nama | Gusti Surya Aditama |
| NIM | 25523053 |
| Kelas | E |
| Program studi | Informatika, Universitas Islam Indonesia |

Setiap pertemuan melanjutkan halaman profil yang sama. P04 sampai P06 memakai HTML semantik dan CSS murni tanpa framework dan tanpa proses build. Mulai P08 ditambah JavaScript modern (ES6+) tanpa pustaka.

Setiap pertemuan melanjutkan halaman profil yang sama. P04 sampai P06 memakai HTML semantik dan CSS murni tanpa framework dan tanpa proses build. Mulai P08 ditambah JavaScript modern (ES6+) tanpa pustaka. P09 menghubungkan data JavaScript ke halaman (DOM, event, validasi form).

## Daftar praktikum

| Pertemuan | Topik | Folder | Ringkasan |
|---|---|---|---|
| P04 | Design token | [`worksheet-p4/`](worksheet-p4/) | Token dua lapis (primitif dan semantik), tema terang dan gelap, tiga struktur semantik tambahan. |
| P05 | Layout modern: Flexbox dan Grid | [`worksheet-p5/`](worksheet-p5/) | Kerangka grid tiga baris, sidebar 16rem, galeri `auto-fit`, navbar flex. |
| P06 | Responsif mobile-first | [`worksheet-p6/`](worksheet-p6/) | `responsif.css`, titik henti 48rem dan 60rem, tabel yang bisa digulir. |
| P08 | JavaScript modern ES6+, struktur data, array methods | [`worksheet-p8/`](worksheet-p8/) | Data halaman menjadi variabel, objek, dan array; tiga fungsi murni; `map`, `filter`, `find`. |
| P09 | DOM, event, dan interaktivitas | [`worksheet-p9/`](worksheet-p9/) | Daftar proyek dirender dari data, filter kategori dengan satu pendengar di induk, validasi form per kolom. |

## Struktur repositori

```text
PABW_25523053/
├── README.md            # berkas ini
├── worksheet-p4/        # profil.html, css/, media/, bukti/
├── worksheet-p5/        # profil.html, css/, media/, bukti/
├── worksheet-p6/        # profil.html, css/ (+ responsif.css), media/, bukti/
├── worksheet-p8/
│   ├── profil.html
│   ├── css/             # tokens, base, layout, komponen, tema, responsif
│   ├── js/app.js        # data dan fungsi (modul ES)
│   ├── media/
│   └── bukti/           # tangkapan layar Console (lembar E)
└── worksheet-p9/
    ├── profil.html
    ├── css/             # sama seperti P8; komponen.css ditambah filter, kartu proyek, galat form
    ├── js/app.js        # data dan fungsi murni (export)
    ├── js/dom.js        # satu-satunya berkas yang menyentuh halaman
    ├── media/
    ├── bukti/           # tangkapan layar hasil (daftar, filter, form)
    └── lembar-jawaban.md  # tabel A sampai F
```

## Cara menjalankan

- **P04 sampai P06:** buka `profil.html` langsung di peramban, atau lewat **Live Server** di VS Code.
- **P08 dan P09:** wajib lewat server lokal karena memakai `<script type="module">`. Buka folder `worksheet-p8/` (atau `worksheet-p9/`) di VS Code, klik kanan `profil.html`, pilih **Open with Live Server**. Alamat harus berawalan `http://`, bukan `file://`. Alternatif: `python3 -m http.server 8000` dari dalam folder worksheet yang dibuka, lalu buka `http://localhost:8000/profil.html`.

---

# Praktikum P09: DOM, Event, dan Interaktivitas

Halaman profil dari P08 disalin ke `worksheet-p9/`. Data yang di P08 hanya terlihat di Console kini dipasang ke halaman, dan halaman menanggapi pengguna tanpa dimuat ulang. Lembar jawaban A sampai F ada di [`worksheet-p9/lembar-jawaban.md`](worksheet-p9/lembar-jawaban.md).


## Daftar praktikum

| Pertemuan | Topik | Folder | Ringkasan |
|---|---|---|---|
| P04 | Design token | [`worksheet-p4/`](worksheet-p4/) | Token dua lapis (primitif dan semantik), tema terang dan gelap, tiga struktur semantik tambahan. |
| P05 | Layout modern: Flexbox dan Grid | [`worksheet-p5/`](worksheet-p5/) | Kerangka grid tiga baris, sidebar 16rem, galeri `auto-fit`, navbar flex. |
| P06 | Responsif mobile-first | [`worksheet-p6/`](worksheet-p6/) | `responsif.css`, titik henti 48rem dan 60rem, tabel yang bisa digulir. |
| P08 | JavaScript modern ES6+, struktur data, array methods | [`worksheet-p8/`](worksheet-p8/) | Data halaman menjadi variabel, objek, dan array; tiga fungsi murni; `map`, `filter`, `find`. |

## Struktur repositori

```text
PABW_25523053/
├── README.md            # berkas ini
├── worksheet-p4/        # profil.html, css/, media/, bukti/
├── worksheet-p5/        # profil.html, css/, media/, bukti/
├── worksheet-p6/        # profil.html, css/ (+ responsif.css), media/, bukti/
└── worksheet-p8/
    ├── profil.html
    ├── css/             # tokens, base, layout, komponen, tema, responsif
    ├── js/app.js        # data dan fungsi (modul ES)
    ├── media/
    └── bukti/           # tangkapan layar Console (lembar E)
```

## Cara menjalankan

- **P04 sampai P06:** buka `profil.html` langsung di peramban, atau lewat **Live Server** di VS Code.
- **P08:** wajib lewat server lokal karena memakai `<script type="module">`. Buka folder `worksheet-p8/` di VS Code, klik kanan `profil.html`, pilih **Open with Live Server**. Alamat harus berawalan `http://`, bukan `file://`. Alternatif: `python3 -m http.server 8000` dari dalam `worksheet-p8/`, lalu buka `http://localhost:8000/profil.html`.

---

# Praktikum P08 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

Halaman profil dari P06 disalin ke `worksheet-p8/`. Struktur HTML dan CSS tidak diubah, kecuali tiga hal: identitas di `<title>`, `<h1>`, dan `.tagline` dikosongkan karena kini diisi dari JavaScript, ditambah dua wadah kosong (`#daftar-keahlian` dan `#daftar-proyek`) yang diisi dari data. Satu baris `<script type="module" src="js/app.js"></script>` ada tepat sebelum `</body>`.

## Data (`js/app.js`)

| Data | Nama | Bentuk |
|---|---|---|
| Identitas | `profil` | objek: `nama`, `peran`, `keahlian` (array 6 isi) |
| Daftar proyek | `daftarProyek` | array 3 objek: `judul`, `tahun`, `selesai` |
| Jumlah proyek | `jumlahProyek` | angka, diambil dari `daftarProyek.length` |
| Pilihan saringan | `pilihanFilter` | `let`, berubah dari `"semua"` ke `"selesai"` |

Judul tab, nama di header, kalimat peran, daftar keahlian, dan daftar proyek di halaman semuanya dibaca dari variabel di atas. Mengubah `profil.nama` satu kali cukup.

## Fungsi murni

| Fungsi | Pekerjaan | Contoh |
|---|---|---|
| `buatPerkenalan({ nama, peran })` | menyusun kalimat perkenalan | `buatPerkenalan({ nama: "Ayu", peran: "mahasiswa" })` menghasilkan `"Ayu, mahasiswa."` |
| `formatKeahlian(daftar)` | merapikan daftar jadi satu baris | `formatKeahlian(["HTML"])` menghasilkan `"HTML"`; `formatKeahlian([])` menghasilkan `""` |
| `saringProyek(daftar, pilihan = "semua")` | menyaring proyek menurut pilihan | `"selesai"` menyisakan 2 dari 3 proyek |
| `formatProyek({ judul, tahun, selesai })` | satu proyek menjadi satu baris teks | `"EcoSort (2026) - selesai"` |

Semuanya hanya bergantung pada argumen, memakai `return`, dan tidak mengubah apa pun di luar dirinya. Fungsi `buatPerkenalan` diuji dengan `console.assert` bahwa dua panggilan dengan argumen sama memberi hasil sama.

## Array methods: tabel pemeriksaan data (D.4)

| Yang diperiksa | Hasil |
|---|---|
| `console.table` | `keahlian` 6 baris = 6 isi array; `daftarProyek` 3 baris = 3 isi array |
| `filter` | `selesai` menyisakan 2 dari 3 proyek (EcoSort, NARASI); SQLQuest tersingkir karena `selesai: false` |
| `find` | `find(judul === "NARASI")` menghasilkan satu objek; judul "Tidak Ada" menghasilkan `undefined` |
| `map` | `judulProyek` berisi 3 judul, sama dengan panjang array asal |
| Data asli setelah `sort` | `daftarProyek[0].judul` tetap "EcoSort"; `sort` (judul Z ke A) dilakukan pada `[...daftarProyek]` dan hasilnya SQLQuest, NARASI, EcoSort |

## Galat yang saya temui (E.5)

Ketiga galat dibuat dengan sengaja memakai kode uji sementara, dibaca dari Console, diperbaiki, lalu kode ujinya dihapus. Karena itu nomor baris di tabel dan di jawaban Lembar F (`app.js:97`, `99`, `100`, `103`, `104`) merujuk ke kode uji sementara, bukan ke `app.js` final. Buktinya ada di folder `bukti/`.

| Pesan galat | Baris | Sebab | Yang saya ubah |
|---|---|---|---|
| `undefined` (abu-abu) dari `console.log(profil.keahlian_utama)` | 97 | Label `keahlian_utama` tidak ada di `profil`; yang ada `keahlian`. Properti yang tidak ada menghasilkan `undefined`, bukan galat | Diganti `profil.keahlian` |
| `Uncaught TypeError: Cannot read properties of null (reading 'value')` | 100 (kolom 49) | `document.querySelector("#nim-salah")` tidak menemukan elemen, hasilnya `null`, lalu `.value` dibaca dari `null` | Selektor diganti `#nim`, sama dengan id di HTML |
| `101` dari `console.log(kolomNim.value + 1)` | Baris 1 (97) dan baris 2 (100:49) | `value` kolom isian selalu teks, jadi `"10" + 1` disambung menjadi `"101"` | `Number(kolomNim.value) + 1`, hasilnya 11 |

Tangkapan layar:

- `bukti/bukti-galat.png`: galat saat muncul
- `bukti/bukti-diperbaiki.png`: setelah diperbaiki
- `bukti/bukti-tabel.png`: data tampil sebagai tabel
- `bukti/bukti-salinan-objek.png`: peragaan salinan objek dengan dan tanpa `{ ...objek }`

## Deklarasi penggunaan AI

> **Periksa dan sesuaikan bagian ini sebelum dikumpulkan.** Isi hanya yang benar-benar terjadi.

**Saya kerjakan sendiri:**

- Memilih isi data (`profil`, `keahlian`, `daftarProyek`) dan menulis struktur datanya.
- Menulis fungsi `buatPerkenalan`, `formatKeahlian`, dan `saringProyek`, serta pemakaian `map`, `filter`, `find`, dan salinan dengan `[...array]`. [konfirmasi]
- Menjalankan halaman lewat server lokal, membuat ketiga galat, membaca pesannya di Console, dan mengambil tangkapan layarnya.
- Menjawab tiket keluar (Lembar F) dan mengisi tabel pemeriksaan data.
- Struktur HTML dan CSS berasal dari pekerjaan saya sendiri di P04 sampai P06.

**Dibantu AI (Claude):**

- Memeriksa kesesuaian `app.js`, HTML, dan README dengan worksheet, lalu menunjukkan yang kurang: nama berkas `profill.html`, README tanpa bagian P08, dan teks identitas yang masih tertulis di HTML.
- Menyarankan dan membantu menuliskan kode untuk menampilkan `profil.keahlian` dan `daftarProyek` ke halaman (fungsi `formatProyek` dan blok render di `app.js`).
- Membantu menyusun README ini.

Setiap baris kode yang ada di repositori sudah saya baca dan saya bisa menjelaskannya.

## Hasil periksa mandiri

- [x] `profil.html` dan `js/app.js` ada di repositori; Console tanpa pesan merah
- [x] Satu baris `<script type="module" src="js/app.js"></script>` sebelum `</body>`
- [x] Identitas, keahlian, dan proyek tersimpan sebagai `const` di `app.js`
- [x] Tiga fungsi murni bekerja, masing-masing satu pekerjaan, memakai `return`
- [x] `map`, `filter`, `find` dipakai pada data yang benar; data asli tidak berubah setelah salinan diurutkan
- [x] Tiga tangkapan layar lembar E tersimpan di `bukti/`
- [x] Deklarasi AI terisi
- [x] Lebih dari satu commit dengan pesan yang menjelaskan isinya

---

# Praktikum P06 Responsif Mobile-First

Lanjutan P05. Isi halaman tidak berubah. Yang ditambah: satu berkas `css/responsif.css`,
satu baris `<link>`, dan satu pembungkus `<div class="table-wrap">` di sekitar tabel.

## Lembar A: viewport dan lebar tetap

Baris `<meta name="viewport" content="width=device-width, initial-scale=1">` sudah ada di `<head>`.

| Berkas dan pemilih | Lebar sekarang | Ganti dengan |
|---|---|---|
| layout.css `.sidebar` | tidak ada di kode saya. Kolom samping ditulis `16rem` di grid `main` | dipertahankan `16rem`, hanya aktif mulai 60rem |
| komponen.css `.kartu` | tidak ada `width: 320px`. Lebar kartu ditentukan kolom grid | `1fr` per kolom |
| base.css `img` | tidak ada `width: 900px` | `max-width: 100%; height: auto` (sudah ada) |

## Lembar B dan C: gaya dasar dan titik henti

Pemetaan nama kelas worksheet ke halaman saya: `.content` = `<main>`, `.grid` = `.katalog`.

| Titik henti | Yang berubah | Kenapa di lebar itu |
|---|---|---|
| 48rem (768 px) | galeri dari 1 kolom menjadi 2 kolom | Di 768 px lebar kartu 360 px: foto dan keterangan masih terbaca. Di bawahnya kartu jadi kurang dari 300 px |
| 60rem (960 px) | sidebar 16rem bersanding dengan konten, galeri 3 kolom | Di bawah 960 px, sidebar 16rem menyisakan kolom konten yang terlalu sempit untuk paragraf dan tabel |

## Lembar D: media dan teks

- `img { max-width: 100%; height: auto }` di base.css.
- `.table-wrap { overflow-x: auto }` di responsif.css. Wadah diberi `role="region"`, `aria-label`, dan `tabindex="0"` supaya area gulirnya bisa dijangkau papan ketik.
- Ukuran teks memakai `rem`.

## Lembar E: hasil uji DevTools

| Lebar | Jumlah kolom | Catatan |
|---|---|---|
| 360 px | 1 | Tidak ada gulir mendatar. Semua bagian satu kolom sesuai urutan HTML |
| 768 px | 2 | Galeri 2 kolom, kartu ketiga sendirian di baris kedua. Sidebar belum muncul |
| 1 280 px | 3 (+ sidebar) | Kolom samping 256 px, konten 968 px, kartu 312 px |

Tangkapan layar: `bukti/bukti-360px.png`, `bukti-768px.png`, `bukti-1280px.png`.

---

# Praktikum P05 Layout Modern: Flexbox dan Grid

Rincian ada di README folder [`worksheet-p5/`](worksheet-p5/README.md).

---

# Praktikum P04 Design Token untuk Halaman Profil Saya

Starter: `kerangka-profil.html`. Berkas ini sudah lengkap dan sudah lolos
W3C Nu Html Checker serta Lighthouse Accessibility. Jangan mengubah
strukturnya — tampilan diubah dari berkas CSS.

## Isi paket

- `kerangka-profil.html` — salin menjadi `profil.html` ke folder `worksheet-p4/`
- `media/foto-profil.jpg` — gambar contoh; ganti dengan foto Anda sendiri
- `bukti/` — folder kosong untuk tangkapan layar

## Tiga pekerjaan

1. Ganti sembilan penanda `[ISI]` di dalam `profil.html` (Lembar B).
2. **Wajib, dinilai** — tambahkan MINIMAL TIGA bagian baru di dalam `<main>`,
   masing-masing memakai elemen semantik yang berbeda satu sama lain dan belum
   terpakai (Lembar B). Pilihan: `<details>`, galeri `<figure>`, lini masa
   `<ol>`, `<dl>`, `<blockquote>`, `<article>`. Semuanya ikut digayakan memakai
   token yang sama.
3. Buat LIMA berkas gaya di folder `css/`, lalu buka komentar lima baris `<link>`
   di dalam `<head>` — urutannya menentukan hasil akhir:

   | Berkas | Isi | Lembar |
   |---|---|---|
   | `css/tokens.css` | dua lapis token: nilai mentah + peran | D |
   | `css/base.css` | reset ringan, box-sizing, tipografi | E |
   | `css/layout.css` | navbar flex, katalog kartu, footer | F |
   | `css/komponen.css` | gaya form, fokus, isian tidak sah | G |
   | `css/tema.css` | tema gelap dan tombol pengalihnya | H |

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

- W3C — Nu Html Checker: jumlah error setelah penambahan (target 0)
- WCAG — kontras AA di tema terang dan gelap
- WCAG — seluruh bagian baru dapat dicapai dengan Tab
- WCAG — tetap dapat dipahami tanpa bantuan warna

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.

## Pertemuan 4 — Arah visual halaman profil

Arah visual: Tegas dan teknis.
Warna utama: #1E3A8A (navy), diturunkan dari foto profil sementara
(ilustrasi grafik batang navy/putih/kuning keemasan).
Warna fokus dibedakan dari warna utama: amber #B45309 di tema terang,
kuning emas #FFC107 di tema gelap dipilih khusus supaya kontras
garis fokus tetap tinggi di kedua tema.
Berkas gaya: tokens.css, base.css, layout.css, komponen.css, tema.css.
Kriteria selesai: mengubah --navy-700 di satu baris mengubah warna
tombol, tautan, dan garis fokus utama.

## Design token halaman profil

- Berkas gaya: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1E3A8A (navy), dari foto profil sementara

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1E3A8A | tombol, tautan, penanda |
| --color-focus | #B45309 (terang) / #FFC107 (gelap) | garis fokus papan ketik |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai: mengubah --navy-700 di satu baris mengubah tombol,
tautan, dan judul (catatan: judul saat ini memakai --color-fg, bukan
--color-primary dipilih sengaja agar teks isi tetap netral dan tidak
terlalu ramai warna).

## Tujuan struktur tambahan

**Perjalanan saya (#lini-masa)** memakai `<ol>` dan `<time>` karena urutannya
bermakna secara kronologis. Ditujukan untuk pembaca yang ingin melihat
perkembangan saya dari mulai kuliah sampai kompetisi terbaru; menjawab
pertanyaan "bagaimana perjalanan saya sampai di titik ini".

**Keterampilan (#keterampilan)** memakai `<dl>`, `<dt>`, `<dd>` untuk
memetakan pasangan nama kemampuan dan penjelasannya. Ditujukan untuk pembaca
yang ingin cepat menilai kompetensi saya (misalnya dosen atau rekruter);
menjawab pertanyaan "apa saja yang saya kuasai".

**Tanya jawab (#tanya-jawab)** memakai `<details>` dan `<summary>` yang
interaktif tanpa JavaScript. Ditujukan untuk pembaca yang ingin mengenal saya
secara singkat; menjawab pertanyaan umum seputar hal yang saya pelajari, alat
yang saya pakai, dan arah karier saya.


## Catatan penggunaan AI

Struktur HTML dari kerangka bawaan, saya isi sendiri. Palet warna dan
nilai token saya tentukan sendiri berdasarkan foto profil. Saya
memakai AI untuk: (1) memeriksa kontras WCAG pasangan warna token di
kedua tema secara numerik, (2) menemukan bahwa teks tombol putih di
atas --color-primary versi tema gelap gagal kontras AA, dan (3)
menyarankan token --color-on-primary sebagai perbaikan. (4) membantu menemukan kesalahan dan bug (5) membantu brainstroming dan membantu membetulkan error dan bug di browser agar web bisa menjadi tema gelap/terang


# PABW Pengembangan Aplikasi Berbasis Web 
# Praktikum P06 Responsif Mobile-First

Lanjutan P05. Isi halaman tidak berubah. Yang ditambah: satu berkas `css/responsif.css`,
satu baris `<link>`, dan satu pembungkus `<div class="table-wrap">` di sekitar tabel.

## Lembar A: viewport dan lebar tetap

Baris `<meta name="viewport" content="width=device-width, initial-scale=1">` sudah ada di `<head>`.

| Berkas dan pemilih | Lebar sekarang | Ganti dengan |
|---|---|---|
| layout.css `.sidebar` | tidak ada di kode saya. Kolom samping ditulis `16rem` di grid `main` | dipertahankan `16rem`, hanya aktif mulai 60rem |
| komponen.css `.kartu` | tidak ada `width: 320px`. Lebar kartu ditentukan kolom grid | `1fr` per kolom |
| base.css `img` | tidak ada `width: 900px` | `max-width: 100%; height: auto` (sudah ada) |

## Lembar B dan C: gaya dasar dan titik henti

Pemetaan nama kelas worksheet ke halaman saya: `.content` = `<main>`, `.grid` = `.katalog`.

| Titik henti | Yang berubah | Kenapa di lebar itu |
|---|---|---|
| 48rem (768 px) | galeri dari 1 kolom menjadi 2 kolom | Di 768 px lebar kartu 360 px: foto dan keterangan masih terbaca. Di bawahnya kartu jadi kurang dari 300 px |
| 60rem (960 px) | sidebar 16rem bersanding dengan konten, galeri 3 kolom | Di bawah 960 px, sidebar 16rem menyisakan kolom konten yang terlalu sempit untuk paragraf dan tabel |

## Lembar D: media dan teks

- `img { max-width: 100%; height: auto }` di base.css.
- `.table-wrap { overflow-x: auto }` di responsif.css. Wadah diberi `role="region"`, `aria-label`, dan `tabindex="0"` supaya area gulirnya bisa dijangkau papan ketik.
- Ukuran teks memakai `rem`.

## Lembar E: hasil uji DevTools

| Lebar | Jumlah kolom | Catatan |
|---|---|---|
| 360 px | 1 | Tidak ada gulir mendatar. Semua bagian satu kolom sesuai urutan HTML |
| 768 px | 2 | Galeri 2 kolom, kartu ketiga sendirian di baris kedua. Sidebar belum muncul |
| 1 280 px | 3 (+ sidebar) | Kolom samping 256 px, konten 968 px, kartu 312 px |

Tangkapan layar: `bukti/bukti-360px.png`, `bukti-768px.png`, `bukti-1280px.png`.


# Praktikum P05 Layout Modern: Flexbox dan Grid
 
Repositori tugas dan praktikum mata kuliah **Pengembangan Aplikasi Berbasis Web (SIF302)**, Semester Gasal 2026/2027.
 
| | |
|---|---|
| Nama | Gusti Surya Aditama |
| NIM | 25523053 |
| Program studi | Informatika, Universitas Islam Indonesia |
 
Semua praktikum dikerjakan tanpa framework dan tanpa proses build: HTML semantik dan CSS murni. Setiap pertemuan melanjutkan halaman profil yang sama, jadi isi halamannya tetap dan yang berkembang adalah cara menyusun tampilannya.
 
## Daftar praktikum
 
| Pertemuan | Topik | Folder | Ringkasan |
|---|---|---|---|
| P04 | Design token | [`worksheet-p4/`](worksheet-p4/) | Halaman profil dengan token dua lapis (primitif dan semantik), tema terang dan gelap, serta tiga struktur semantik tambahan. |
| P05 | Layout modern: Flexbox dan Grid | [`worksheet-p5/`](worksheet-p5/) | Halaman yang sama dengan kerangka grid tiga baris, sidebar 16rem, galeri `auto-fit`, dan navbar flex. |
 
Rincian tiap pertemuan ada di README masing-masing folder. README P04 ada di bawah.

## Struktur repositori
 
```text
PABW/
├── README.md            # berkas ini
├── worksheet-p4/
│   ├── profil.html
│   ├── css/             # tokens, base, layout, komponen, tema
│   ├── media/
│   └── bukti/
└── worksheet-p5/
    ├── README.md
    ├── profil.html
    ├── css/             # tokens, base, layout, komponen, tema
    └── media/
```
 
 
## Cara menjalankan
 
Tidak perlu instalasi. Buka `profil.html` di folder pertemuan yang diinginkan langsung di peramban, atau lewat ekstensi **Live Server** di VS Code supaya halaman ikut muat ulang saat berkas berubah.
 
## Yang dipakai
 
- HTML semantik: landmark, form dengan label, `<details>`, `<dl>`, `<ol>` dengan `<time>`
- CSS dengan lima berkas berurutan: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`
- Design token dua lapis, dengan tema gelap lewat `prefers-color-scheme` dan tombol pengalih manual
- Flexbox untuk baris dan isi komponen, grid untuk kerangka halaman dan galeri (mulai P05)
- Validasi dengan W3C Nu Html Checker dan Lighthouse Accessibility

# Praktikum P04 Design Token untuk Halaman Profil Saya

Starter: `kerangka-profil.html`. Berkas ini sudah lengkap dan sudah lolos
W3C Nu Html Checker serta Lighthouse Accessibility. Jangan mengubah
strukturnya — tampilan diubah dari berkas CSS.

## Isi paket

- `kerangka-profil.html` — salin menjadi `profil.html` ke folder `worksheet-p4/`
- `media/foto-profil.jpg` — gambar contoh; ganti dengan foto Anda sendiri
- `bukti/` — folder kosong untuk tangkapan layar

## Tiga pekerjaan

1. Ganti sembilan penanda `[ISI]` di dalam `profil.html` (Lembar B).
2. **Wajib, dinilai** — tambahkan MINIMAL TIGA bagian baru di dalam `<main>`,
   masing-masing memakai elemen semantik yang berbeda satu sama lain dan belum
   terpakai (Lembar B). Pilihan: `<details>`, galeri `<figure>`, lini masa
   `<ol>`, `<dl>`, `<blockquote>`, `<article>`. Semuanya ikut digayakan memakai
   token yang sama.
3. Buat LIMA berkas gaya di folder `css/`, lalu buka komentar lima baris `<link>`
   di dalam `<head>` — urutannya menentukan hasil akhir:

   | Berkas | Isi | Lembar |
   |---|---|---|
   | `css/tokens.css` | dua lapis token: nilai mentah + peran | D |
   | `css/base.css` | reset ringan, box-sizing, tipografi | E |
   | `css/layout.css` | navbar flex, katalog kartu, footer | F |
   | `css/komponen.css` | gaya form, fokus, isian tidak sah | G |
   | `css/tema.css` | tema gelap dan tombol pengalihnya | H |

## Evaluasi yang dilaporkan

Tulis di README ini, satu paragraf per bagian tambahan: elemen apa, untuk siapa,
dan menjawab apa. Lalu catat hasil evaluasinya (Lembar I.6):

- W3C — Nu Html Checker: jumlah error setelah penambahan (target 0)
- WCAG — kontras AA di tema terang dan gelap
- WCAG — seluruh bagian baru dapat dicapai dengan Tab
- WCAG — tetap dapat dipahami tanpa bantuan warna

## Waktu

90 menit di kelas hanya cukup sampai Lembar D: tiga struktur sudah berdiri,
keputusan token tercatat, dan `tokens.css` sudah memuat kelima berkas gaya.
Lembar E sampai I — base.css, layout, form, tema gelap, dan evaluasi W3C + WCAG —
diselesaikan di luar kelas sampai pukul 23.59 hari yang sama.

## Pengumpulan

Folder `worksheet-p4/` di dalam repositori GitHub Anda sendiri, berisi
`profil.html`, `css/`, `media/`, dan `bukti/`. Sudah di-commit dan di-push
sebelum **pukul 23.59 hari yang sama**. Tidak ada perpanjangan.

## Pertemuan 4 — Arah visual halaman profil

Arah visual: Tegas dan teknis.
Warna utama: #1E3A8A (navy), diturunkan dari foto profil sementara
(ilustrasi grafik batang navy/putih/kuning keemasan).
Warna fokus dibedakan dari warna utama: amber #B45309 di tema terang,
kuning emas #FFC107 di tema gelap dipilih khusus supaya kontras
garis fokus tetap tinggi di kedua tema.
Berkas gaya: tokens.css, base.css, layout.css, komponen.css, tema.css.
Kriteria selesai: mengubah --navy-700 di satu baris mengubah warna
tombol, tautan, dan garis fokus utama.

## Design token halaman profil

- Berkas gaya: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #1E3A8A (navy), dari foto profil sementara

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #1E3A8A | tombol, tautan, penanda |
| --color-focus | #B45309 (terang) / #FFC107 (gelap) | garis fokus papan ketik |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai: mengubah --navy-700 di satu baris mengubah tombol,
tautan, dan judul (catatan: judul saat ini memakai --color-fg, bukan
--color-primary dipilih sengaja agar teks isi tetap netral dan tidak
terlalu ramai warna).

## Tujuan struktur tambahan

**Perjalanan saya (#lini-masa)** memakai `<ol>` dan `<time>` karena urutannya
bermakna secara kronologis. Ditujukan untuk pembaca yang ingin melihat
perkembangan saya dari mulai kuliah sampai kompetisi terbaru; menjawab
pertanyaan "bagaimana perjalanan saya sampai di titik ini".

**Keterampilan (#keterampilan)** memakai `<dl>`, `<dt>`, `<dd>` untuk
memetakan pasangan nama kemampuan dan penjelasannya. Ditujukan untuk pembaca
yang ingin cepat menilai kompetensi saya (misalnya dosen atau rekruter);
menjawab pertanyaan "apa saja yang saya kuasai".

**Tanya jawab (#tanya-jawab)** memakai `<details>` dan `<summary>` yang
interaktif tanpa JavaScript. Ditujukan untuk pembaca yang ingin mengenal saya
secara singkat; menjawab pertanyaan umum seputar hal yang saya pelajari, alat
yang saya pakai, dan arah karier saya.


## Catatan penggunaan AI

Struktur HTML dari kerangka bawaan, saya isi sendiri. Palet warna dan
nilai token saya tentukan sendiri berdasarkan foto profil. Saya
memakai AI untuk: (1) memeriksa kontras WCAG pasangan warna token di
kedua tema secara numerik, (2) menemukan bahwa teks tombol putih di
atas --color-primary versi tema gelap gagal kontras AA, dan (3)
menyarankan token --color-on-primary sebagai perbaikan. (4) membantu menemukan kesalahan dan bug (5) membantu brainstroming dan membantu membetulkan error dan bug di browser agar web bisa menjadi tema gelap/terang
