import { profil, formatKeahlian } from "./app.js";
//bagian A
const elemenNama = document.querySelector(".kepala h1");
const elemenTagline = document.querySelector(".kepala .tagline");
const elemenKeahlian = document.querySelector("#daftar-keahlian");
const wadahProyek = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const pesanKosong = document.querySelector("#pesan-kosong");
const formulir = document.querySelector("#kontak form");
const kolomFormulir = formulir.querySelectorAll("input, textarea"); // NodeList: 4 kolom
const tombolKirim = formulir.querySelector('button[type="submit"]');
const statusKirim = document.querySelector("#status-kirim");


document.title = `Profil ${profil.nama} - PABW 2026/2027`;
elemenNama.textContent = profil.nama;
elemenTagline.textContent = `${profil.peran}.`;
elemenKeahlian.textContent = formatKeahlian(profil.keahlian);

//bagian B dan D.1: render daftar proyek dari data
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


function renderProyek(daftar) {
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


// Lembar C: satu pendengar di induk untuk semua tombol filter
function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    const aktif = tombol === tombolAktif;
    tombol.classList.toggle("aktif", aktif);          // tampilan: aturan .aktif di CSS
    tombol.setAttribute("aria-pressed", String(aktif)); // pembaca layar: tombol mana yang menyala
  });
}


barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button"); 
  if (!tombol) return;                         

  renderProyek(saringKategori(daftarProyek, tombol.dataset.kategori));
  tandaiTombolAktif(tombol);
});

// Keadaan awal: semua proyek tampil, tombol "semua" aktif
renderProyek(daftarProyek);
tandaiTombolAktif(barisFilter.querySelector('[data-kategori="semua"]'));


//bagian D.2: validasi form (aturan disimpan sebagai data)
const aturanKolom = {
  nama:  { sah: (isi) => isi.length >= 2,
           pesan: "Nama belum diisi. Tulis nama lengkap Anda, minimal 2 huruf." },
  email: { sah: (isi) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(isi),
           pesan: "Alamat email belum lengkap. Tulis seperti nama@contoh.com." },
  nim:   { sah: (isi) => /^\d{8}$/.test(isi),
           pesan: "NIM harus 8 digit angka, contoh 25523053." },
  pesan: { sah: (isi) => isi.length >= 10,
           pesan: "Pesan terlalu singkat. Tulis minimal 10 karakter." },
};


const kolomSah = (kolom) => aturanKolom[kolom.name].sah(kolom.value.trim());


function tampilkanStatusKolom(kolom) {
  const sah = kolomSah(kolom);
  const tempatGalat = formulir.querySelector(`#${kolom.id}-galat`);

  tempatGalat.textContent = sah ? "" : aturanKolom[kolom.name].pesan;
  tempatGalat.hidden = sah;
  if (sah) {
    kolom.removeAttribute("aria-invalid");
  } else {
    kolom.setAttribute("aria-invalid", "true"); // penanda pembaca layar (dan CSS)
  }
  return sah;
}

const semuaKolomSah = () => Array.from(kolomFormulir).every(kolomSah);

formulir.noValidate = true;

formulir.addEventListener("input", (event) => {
  const kolom = event.target.closest("input, textarea");
  if (!kolom) return;

  if (kolom.hasAttribute("aria-invalid")) tampilkanStatusKolom(kolom);
  tombolKirim.disabled = !semuaKolomSah();
  statusKirim.hidden = true; 
});

formulir.addEventListener("focusout", (event) => {
  const kolom = event.target.closest("input, textarea");
  if (kolom) tampilkanStatusKolom(kolom);
});

formulir.addEventListener("submit", (event) => {
  event.preventDefault(); 

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
});
