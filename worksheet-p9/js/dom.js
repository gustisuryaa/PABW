//bagian B
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

//identitas halaman dibaca dari data di app.js (satu sumber)
document.title = `Profil ${profil.nama} - PABW 2026/2027`;
elemenNama.textContent = profil.nama;
elemenTagline.textContent = `${profil.peran}.`;
elemenKeahlian.textContent = formatKeahlian(profil.keahlian);
