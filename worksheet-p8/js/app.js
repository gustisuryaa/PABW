// Bagian B: data sebagai variabel 
const profil = {
  nama: "Gusti Surya Aditama",
  peran: "Mahasiswa Informatika UII yang belajar UI/UX design dan frontend development",
  keahlian: ["UI/UX Design", "Figma", "HTML dan CSS", "React/Next.js", "SwiftUI", "Python"],
};

// Bagian B: nilai bawaan ?? dan akses aman ?
const kotaProfil = profil.alamat?.kota ?? "belum diisi";

let pilihanFilter = "semua";

const judulHalaman = `Profil ${profil.nama} - PABW 2026/2027`;
document.title = judulHalaman;
const elemenNama = document.querySelector(".kepala h1");
const elemenTagline = document.querySelector(".kepala .tagline");
if (elemenNama) elemenNama.textContent = profil.nama;
if (elemenTagline) elemenTagline.textContent = `${profil.peran}.`;