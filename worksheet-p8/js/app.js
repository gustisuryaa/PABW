// Bagian B: data sebagai variabel 
const profil = {
  nama: "Gusti Surya Aditama",
  peran: "Mahasiswa Informatika UII yang belajar UI/UX design dan frontend development",
  keahlian: ["UI/UX Design", "Figma", "HTML dan CSS", "React/Next.js", "SwiftUI", "Python"],
};

// Bagian C: fungsi murni 

// menyusun kalimat perkenalan dari satu objek
const buatPerkenalan = ({ nama, peran }) => `${nama}, ${peran}.`;

// merapikan daftar keahlian menjadi satu baris teks
const formatKeahlian = (daftar) => daftar.join(" · ");

// menyaring proyek menurut pilihan ("semua" atau "selesai")
const saringProyek = (daftar, pilihan = "semua") => {
  if (pilihan === "selesai") {
    return daftar.filter((proyek) => proyek.selesai);
  }
  return daftar;
};

// Bagian B: nilai bawaan ?? dan akses aman ?
const kotaProfil = profil.alamat?.kota ?? "belum diisi";

let pilihanFilter = "semua";

// Satu sumber untuk judul tab dan isi header 
const judulHalaman = `Profil ${profil.nama} - PABW 2026/2027`;
document.title = judulHalaman;
const elemenNama = document.querySelector(".kepala h1");
const elemenTagline = document.querySelector(".kepala .tagline");
if (elemenNama) elemenNama.textContent = profil.nama;
if (elemenTagline) elemenTagline.textContent = `${profil.peran}.`;

//cek konsol Bagian C dan D
// Uji cepat C: tiga argumen berbeda, hasilnya harus masuk akal semua.
console.log(buatPerkenalan({ nama: "Ayu", peran: "mahasiswa" }));
console.log(formatKeahlian(["HTML"]));
console.log(formatKeahlian([]) === "");