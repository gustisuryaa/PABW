<script setup>
import { computed, onMounted } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { profil, formatKeahlian } from './data.js'
import { state, muatTugas } from './state.js'

// props untuk KepalaProfil: hanya yang dibutuhkan header
const identitas = { nama: profil.nama, peran: profil.peran }
const keahlian = formatKeahlian(profil.keahlian)

// Lembar D: onMounted hanya memuat data tugas. Penyimpanan pilihan baru ditambahkan di Lembar E.
onMounted(() => {
  muatTugas()
})

// ---------- data tugas dari jaringan (P10) ----------

const pesanStatusTugas = { memuat: 'Memuat tugas...', kosong: 'Belum ada tugas.', sukses: '' }
const pesanTugas = computed(() =>
  state.tugas.status === 'gagal'
    ? `Gagal memuat data: ${state.tugas.pesanGalat}`
    : pesanStatusTugas[state.tugas.status]
)
</script>

<template>
  <a class="lewati" href="#utama">Lewati ke konten utama</a>

  <header class="kepala">
    <div class="header-teks">
      <div class="tema-baris">
        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema">Tema gelap</label>
      </div>
      <KepalaProfil :profil="identitas" />
    </div>
    <nav aria-label="Navigasi utama">
      <ul>
        <li><a href="#tentang">Tentang</a></li>
        <li><a href="#karya">Karya</a></li>
        <li><a href="#kontak">Kontak</a></li>
        <li><a href="#lini-masa">Perjalanan</a></li>
        <li><a href="#keterampilan">Keterampilan</a></li>
        <li><a href="#tanya-jawab">Tanya jawab</a></li>
      </ul>
    </nav>
  </header>

  <main id="utama">

    <section id="tentang">
      <h2>Tentang saya</h2>

      <div class="profil-utama">
      <figure class="foto">
        <img src="./assets/media/foto-profil.jpeg"
             alt="Ilustrasi grafik batang navy, putih, dan kuning keemasan sebagai foto profil sementara."
             width="480" height="480" loading="lazy">
      </figure>

      <p>Mahasiswa Informatika di Universitas Islam Indonesia (UII) dengan fokus pada Desain UI/UX dan Pengembangan Frontend. Saya menerjemahkan kebutuhan pengguna menjadi antarmuka yang intuitif serta mengembangkannya menggunakan Figma, React/Next.js, HTML/CSS, dan Python.
        Saat ini, saya sedang memperluas keahlian ke pengembangan aplikasi berbasis AI. Saya merupakan anggota aktif Google Developer Group on Campus (GDGoC) UII dan memiliki pengalaman kepemimpinan dalam kepanitiaan acara serta organisasi siswa (MPK).
        Saya bercita-cita meniti karier di bidang Pengembangan Perangkat Lunak dan Desain Produk dengan fokus pada solusi berbasis AI. Saya terbuka terhadap peluang di bidang teknologi, desain, maupun kolaborasi; jangan ragu untuk menghubungi saya.</p>
      </div>
      <div class="table-wrap" role="region" aria-label="Tabel kegiatan yang saya ikuti" tabindex="0">
      <table>
        <caption>Kegiatan yang saya ikuti semester ini</caption>
        <thead>
          <tr>
            <th scope="col">Kegiatan</th>
            <th scope="col">Peran</th>
            <th scope="col">Waktu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Jogja Information Technology Session UGM 2026</th>
            <td>Peserta</td>
            <td><time datetime="2026-09">September - Oktober 2026</time></td>
          </tr>
          <tr>
            <th scope="row">GEMASTIK XIX 2026</th>
            <td>Anggota tim</td>
            <td><time datetime="2026">2026</time></td>
          </tr>
          <tr>
            <th scope="row">DWDG UII 2026</th>
            <td>Kandidat, tahap wawancara</td>
            <td><time datetime="2026">2026</time></td>
          </tr>
        </tbody>
      </table>
      </div>
    </section>

    <section id="lini-masa">
      <h2>Perjalanan saya</h2>
      <ol class="lini">
        <li><time datetime="2025-09">September 2025</time> mulai kuliah di Informatika UII.</li>
        <li><time datetime="2025-10">Oktober 2025</time> mulai serius belajar UI/UX di Figma.</li>
        <li><time datetime="2025-11">November 2025</time> Bergabung dan mengikuti GDGOoC UII sebagai member.</li>
        <li><time datetime="2026-02">Februari 2026</time> Mengikuti lomba Apple Swift Student Challenge 2026.</li>
        <li><time datetime="2026-08">Agustus 2026</time> Mengikuti GEMASTIK XIX 2026.</li>
      </ol>
    </section>

    <section id="karya">
      <h2>Karya saya</h2>
      <ul class="katalog">
        <li class="kartu">
          <figure class="kartu-foto">
            <img src="./assets/media/karya-ecosort.jpg"
                 alt="Tangkapan layar permainan EcoSort: menyortir gambar makanan ke tempat sampah organik atau daur ulang."
                 width="1200" height="883" loading="lazy">
            <figcaption>EcoSort aplikasi game interaktif pengelolaan sampah, dibangun dengan SwiftUI untuk Apple Swift Student Challenge 2026.</figcaption>
          </figure>
        </li>
        <li class="kartu">
          <figure class="kartu-foto">
            <img src="./assets/media/karya-narasi.jpg"
                 alt="Tangkapan layar beranda NARASI, asisten dokumentasi klinis berbasis AI."
                 width="1400" height="789" loading="lazy">
            <figcaption>NARASI aplikasi web dokumentasi klinis berbantuan AI, dibangun untuk GEMASTIK XIX 2026.</figcaption>
          </figure>
        </li>
        <li class="kartu">
          <figure class="kartu-foto">
            <img src="./assets/media/karya-sqlquest.jpg"
                 alt="Tangkapan layar aplikasi SQLQuest." width="1200" height="883" loading="lazy">
            <figcaption>SQLQuest aplikasi SwiftUI yang mengajarkan JOIN SQL lewat permainan. (tahap pengembangan)</figcaption>
          </figure>
        </li>
      </ul>
      <h3>Daftar proyek</h3>
      <TombolFilter />
      <p><button type="button" id="atur-ulang">Atur ulang pilihan</button></p>
      <DaftarProyek />
    </section>

    <section id="keterampilan">
      <h2>Keterampilan</h2>
      <dl class="keterampilan">
        <dt>UI/UX Design</dt>
        <dd>Figma wireframe, prototyping, dan design system sederhana.</dd>

        <dt>Frontend Development</dt>
        <dd>HTML semantik, CSS dengan design token, React dan Next.js serta Swift dengan Xcode</dd>

        <dt>Lainnya</dt>
        <dd>Python untuk kebutuhan data, dan mulai belajar workflow AI-assisted development.</dd>
      </dl>
      <h3>Daftar keahlian</h3>
      <p id="daftar-keahlian">{{ keahlian }}</p>
    </section>

    <section id="data-api">
      <h2>Contoh data dari API</h2>
      <p>Daftar tugas ini diambil dari API publik saat halaman dibuka.</p>
      <ul id="daftar-tugas">
        <li v-for="tugas in state.tugas.daftar" :key="tugas.id" class="kartu-proyek">
          <strong>{{ tugas.todo }}</strong>
          <span>{{ tugas.completed ? 'selesai' : 'belum selesai' }}</span>
        </li>
      </ul>
      <p id="status-tugas" role="status">{{ pesanTugas }}</p>
    </section>

    <section id="kontak">
      <h2>Hubungi saya</h2>
      <p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>
      <FormKontak />
    </section>

    <section id="tanya-jawab">
      <h2>Tanya jawab</h2>

      <details>
        <summary>Apa yang sedang saya pelajari?</summary>
        <p>CSS fundamental dan cara menyusun tampilan yang konsisten lewat design token dua lapis.</p>
      </details>

      <details>
        <summary>Alat apa yang saya pakai sehari-hari?</summary>
        <p>Figma untuk desain, VS Code dan Xcode untuk programming dan pengembangan aplikasi.</p>
      </details>

      <details>
        <summary>Apa arah karier yang sedang saya rintis?</summary>
        <p>UI/UX design yang bersambung ke frontend development, dengan ketertarikan pada perkakas berbantuan AI.</p>
      </details>
    </section>

  </main>

  <footer class="kaki">
    <p>Gusti Surya Aditama · 25523053 · <time datetime="2026">2026</time></p>
  </footer>
</template>

<style>
/* Vite membungkus halaman dalam <div id="app">, padahal layout.css menjadikan <body> sebagai grid
   (kepala / isi / kaki). display: contents membuat pembungkus itu "tidak ada" bagi layout, jadi
   header, main, dan footer tetap menjadi anak langsung grid body seperti di P11. */
#app {
  display: contents;
}
</style>
