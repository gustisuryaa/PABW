// dom.js: seluruh sentuhan ke halaman. Hanya membaca state yang diberikan, tidak menyimpan state.
import { formatKeahlian, saringKategori, aturanKolom } from "./data.js";

const elemenNama = document.querySelector(".kepala h1");
const elemenTagline = document.querySelector(".kepala .tagline");
const elemenKeahlian = document.querySelector("#daftar-keahlian");
const wadahProyek = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const kolomFormulir = document.querySelectorAll("#kontak input, #kontak textarea");
const tombolKirim = document.querySelector('#kontak button[type="submit"]');
const statusKirim = document.querySelector("#status-kirim");
const wadahTugas = document.querySelector("#daftar-tugas");
const statusTugas = document.querySelector("#status-tugas");

export const barisFilter = document.querySelector("#filter");
export const formulir = document.querySelector("#kontak form");

formulir.noValidate = true;

// ---------- identitas ----------

export function renderIdentitas(profil) {
  document.title = `Profil ${profil.nama} - PABW 2026/2027`;
  elemenNama.textContent = profil.nama;
  elemenTagline.textContent = `${profil.peran}.`;
  elemenKeahlian.textContent = formatKeahlian(profil.keahlian);
}

// ---------- daftar proyek ----------

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

const saring = (state) => saringKategori(state.daftarProyek, state.kategoriAktif);

export function render(state) {
  wadahProyek.textContent = "";            // 1. kosongkan
  const tampil = saring(state);            // dari state, bukan argumen
  if (tampil.length === 0) {               // 2. keadaan kosong
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  tampil.forEach((proyek) => fragmen.append(buatKartu(proyek)));
  wadahProyek.append(fragmen);             // 3. isi ulang
}

export function renderFilter(state) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    const aktif = tombol.dataset.kategori === state.kategoriAktif;
    tombol.classList.toggle("aktif", aktif);
    tombol.setAttribute("aria-pressed", String(aktif));
  });
}

// ---------- data tugas dari jaringan ----------

// isi dari jaringan dipasang dengan textContent, bukan innerHTML
function buatKartuTugas(tugas) {
  const kartu = document.createElement("li");
  kartu.className = "kartu-proyek";

  const judul = document.createElement("strong");
  judul.textContent = tugas.todo;

  const keterangan = document.createElement("span");
  keterangan.textContent = tugas.completed ? "selesai" : "belum selesai";

  kartu.append(judul, keterangan);
  return kartu;
}

const pesanStatusTugas = { memuat: "Memuat tugas...", kosong: "Belum ada tugas.", sukses: "" };

export function renderTugas({ tugas }) {
  wadahTugas.textContent = "";
  statusTugas.textContent = tugas.status === "gagal"
    ? `Gagal memuat data: ${tugas.pesanGalat}`
    : pesanStatusTugas[tugas.status];

  const fragmen = document.createDocumentFragment();
  tugas.daftar.forEach((item) => fragmen.append(buatKartuTugas(item)));
  wadahTugas.append(fragmen);
}

// ---------- form kontak ----------

export function renderFormulir({ kontak }) {
  kolomFormulir.forEach((kolom) => {
    const adaGalat = kontak.galat[kolom.name];
    const tempatGalat = document.querySelector(`#${kolom.id}-galat`);

    tempatGalat.textContent = adaGalat ? aturanKolom[kolom.name].pesan : "";
    tempatGalat.hidden = !adaGalat;
    if (adaGalat) {
      kolom.setAttribute("aria-invalid", "true");
    } else {
      kolom.removeAttribute("aria-invalid");
    }
  });

  tombolKirim.disabled = kontak.tombolNonaktif;
  statusKirim.textContent = kontak.pesanStatus;
  statusKirim.hidden = kontak.pesanStatus === "";
}

// nilai keempat kolom form, sudah di-trim: {nama, email, nim, pesan}
export const bacaIsiFormulir = () =>
  Object.fromEntries(Array.from(kolomFormulir, (kolom) => [kolom.name, kolom.value.trim()]));

export const kolomDariEvent = (event) => event.target.closest("input, textarea");

export const fokuskanKolom = (nama) => formulir.elements[nama].focus();

export const kosongkanFormulir = () => formulir.reset();
