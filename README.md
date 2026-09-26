# Praktikum P04 — Design Token untuk Halaman Profil Saya

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
--color-primary — dipilih sengaja agar teks isi tetap netral dan tidak
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
