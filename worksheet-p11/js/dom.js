// dom.js (tahap B): seluruh sentuhan ke halaman.
import { formatKeahlian, aturanKolom } from "./data.js";
import { ambilTugas } from "./api.js";

const elemenNama = document.querySelector(".kepala h1");
const elemenTagline = document.querySelector(".kepala .tagline");
const elemenKeahlian = document.querySelector("#daftar-keahlian");
const wadahProyek = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
export const barisFilter = document.querySelector("#filter");
export const formulir = document.querySelector("#kontak form");
const kolomFormulir = formulir.querySelectorAll("input, textarea");
const tombolKirim = formulir.querySelector('button[type="submit"]');
const statusKirim = document.querySelector("#status-kirim");
const wadahTugas = document.querySelector("#daftar-tugas");
const statusTugas = document.querySelector("#status-tugas");

export function renderIdentitas(profil) {
  document.title = `Profil ${profil.nama} - PABW 2026/2027`;
  elemenNama.textContent = profil.nama;
  elemenTagline.textContent = `${profil.peran}.`;
  elemenKeahlian.textContent = formatKeahlian(profil.keahlian);
}

function buatKartu(proyek) {
  const kartu = document.createElement("li");
  kartu.className = "kartu-proyek";

  const judul = document.createElement("strong");
  judul.textContent = proyek.judul;

  const keterangan = document.createElement("span");
  const status = proyek.selesai ? "selesai" : "tahap pengembangan";
  keterangan.textContent = `${proyek.tahun} · ${proyek.kategori} · ${status}`;

  kartu.append(judul, keterangan);
  return kartu;
}

export function renderProyek(daftar) {
  wadahProyek.textContent = "";

  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
  wadahProyek.append(fragmen);
}

export function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("aktif", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
  });
}

export const tombolSemua = () => barisFilter.querySelector('[data-kategori="semua"]');

// ---------- form kontak ----------

const kolomSah = (kolom) => aturanKolom[kolom.name].sah(kolom.value.trim());

export function tampilkanStatusKolom(kolom) {
  const sah = kolomSah(kolom);
  const tempatGalat = formulir.querySelector(`#${kolom.id}-galat`);

  tempatGalat.textContent = sah ? "" : aturanKolom[kolom.name].pesan;
  tempatGalat.hidden = sah;
  if (sah) {
    kolom.removeAttribute("aria-invalid");
  } else {
    kolom.setAttribute("aria-invalid", "true");
  }
  return sah;
}

export const semuaKolomSah = () => Array.from(kolomFormulir).every(kolomSah);

export function perbaruiTombolKirim() {
  tombolKirim.disabled = !semuaKolomSah();
  statusKirim.hidden = true;
}

export function tanganiKirim() {
  kolomFormulir.forEach(tampilkanStatusKolom);
  const kolomBermasalah = formulir.querySelector('[aria-invalid="true"]');
  if (kolomBermasalah) {
    kolomBermasalah.focus();
    return;
  }
  const namaPengirim = formulir.elements.nama.value.trim();
  formulir.reset();
  tombolKirim.disabled = false;
  statusKirim.textContent = `Terima kasih, ${namaPengirim}. Pesan Anda sudah dicatat (simulasi: belum ada server yang menerimanya).`;
  statusKirim.hidden = false;
}

export const kolomDariEvent = (event) => event.target.closest("input, textarea");

// ---------- data tugas dari jaringan (kode P10, belum dipindah ke state) ----------

function gambarTugas(daftar) {
  wadahTugas.textContent = "";
  daftar.forEach((tugas) => {
    const kartu = document.createElement("li");
    kartu.className = "kartu-proyek";

    const judul = document.createElement("strong");
    judul.textContent = tugas.todo;

    const keterangan = document.createElement("span");
    keterangan.textContent = tugas.completed ? "selesai" : "belum selesai";

    kartu.append(judul, keterangan);
    wadahTugas.append(kartu);
  });
}

export async function tampilkanTugas() {
  wadahTugas.textContent = "";
  statusTugas.textContent = "Memuat tugas...";
  try {
    const daftar = await ambilTugas();
    if (daftar.length === 0) {
      statusTugas.textContent = "Belum ada tugas.";
      return;
    }
    statusTugas.textContent = "";
    gambarTugas(daftar);
  } catch (galat) {
    statusTugas.textContent = "Gagal memuat data: " + galat.message;
  }
}
