# Worksheet P12: Profil Gusti, dipindah ke proyek Vue

Praktikum PABW (SIF302) Pertemuan 12: Build Tooling, npm, dan Framework SPA.
Halaman profil dari Pertemuan 11 dipindahkan ke proyek Vue 3 + Vite, dipecah menjadi empat komponen,
lalu dibangun untuk produksi. Tampilan dan perilakunya sama dengan P11.

- Nama: Gusti Surya Aditama
- NIM: 25523053
- Kelas: E

## Versi perkakas (Lembar A)

<!-- ISI dari terminal Anda sendiri: jalankan `node -v` dan `npm -v`, salin apa adanya. -->

| Perintah | Versi |
|---|---|
| `node -v` | `v__.__.__` (isi dari terminal; harus Node.js LTS) |
| `npm -v` | `__.__.__` (isi dari terminal) |

## Cara menjalankan

```bash
npm install        # memasang paket sesuai package-lock.json
npm run dev        # server pengembangan, catat nomor port (biasanya 5173)
npm run build      # menghasilkan folder dist/
npm run preview    # menjalankan isi dist/ seperti situs sungguhan
```

## Struktur `src/`

| Berkas | Isi |
|---|---|
| `main.js` | Titik masuk. Satu-satunya tempat enam berkas CSS (P04-P06) diimpor, urutannya sama dengan cascade aslinya |
| `App.vue` | Komponen induk: seluruh isi halaman + keempat komponen |
| `components/KepalaProfil.vue` | Identitas di header; menerima props `profil` (nama, peran) |
| `components/TombolFilter.vue` | Deretan tombol kategori; membaca dan mengubah state bersama |
| `components/DaftarProyek.vue` | Daftar kartu proyek (daftar terhitung dari state bersama) + pesan kosong |
| `components/FormKontak.vue` | Formulir kontak + validasi; keadaannya `ref` lokal di komponen ini |
| `state.js` | Objek `reactive()` bersama: daftar proyek, kategori aktif, data tugas |
| `simpanan.js` | `localStorage` (`simpan`, `muat`, `aturUlang`), kunci `pabw-p11` dan versi 2 |
| `data.js` | Data mentah dan fungsi murni dari P11 (hanya ditambah `id` pada proyek) |
| `api.js` | Lapisan data `fetch` dari P10, tidak diubah |
| `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`, `responsif.css` | CSS P04-P06, tidak diubah |
| `assets/media/` | Gambar yang dipakai halaman (diimpor lewat template, jadi dibundel Vite) |

## Perbedaan dari P11

- `render(state)` manual dihapus; template Vue yang menggambar ulang.
- `js/app.js` dan `js/dom.js` tidak ikut pindah; `js/events.js` menjadi `@click` / `@input` / `@submit`.
- `data.js`: setiap proyek diberi `id` unik untuk `:key`.
- `App.vue` memuat satu aturan CSS (`#app { display: contents }`) supaya `<body>` tetap menjadi grid
  tiga baris seperti di P11 walau Vite membungkus halaman dalam `<div id="app">`.
- `simpanan.js`: `removeItem` ikut dibungkus `try/catch` (di P11 hanya `setItem` dan `getItem`).

## Ukuran sebelum dan sesudah build (Lembar F.3)

Diukur di tab Network DevTools, muat ulang halaman dengan cache dimatikan, tanpa permintaan ke API luar.

<!-- GANTI dengan angka dari DevTools Anda sendiri bila berbeda. -->

| Yang diukur | `npm run dev` | `npm run preview` (hasil build) |
|---|---|---|
| Ukuran seluruh berkas yang dikirim | sekitar 2,57 MB | sekitar 1,08 MB |
| Jumlah berkas yang dikirim peramban | 26 | 7 |

Hampir seluruh sisa ukuran adalah empat gambar (sekitar 1,1 MB); kode JS + CSS hasil build hanya sekitar 33 KB.

## Deklarasi penggunaan AI

- **Dibantu AI (Claude, Anthropic):** analisis berkas P11, penyusunan kerangka proyek Vue
  (`App.vue`, empat komponen, `state.js`, `simpanan.js`), pengecekan bahwa tampilan sama dengan P11,
  dan draf README ini.
- **Saya kerjakan sendiri:** menjalankan perintah Lembar A sampai F di terminal saya, mencatat versi
  Node.js dan npm, menjalankan `npm run dev`, `build`, dan `preview`, menguji tabel E.3 dan E.4 di peramban,
  mengambil tangkapan layar bukti, melakukan `git commit` dan `git push`, serta menulis jawaban Lembar G
  dengan kata-kata saya sendiri.
- **Bukan hasil AI:** isi halaman (profil, karya, foto, teks), CSS P04-P06, dan lapisan data P10 adalah
  pekerjaan saya dari pertemuan sebelumnya dan dipindahkan tanpa diubah.

## Bukti

Tangkapan layar halaman yang berjalan dari `npm run preview`: `bukti/p12-preview.png`.
