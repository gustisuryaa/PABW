// Bagian B: data sebagai variabel 
const profil = {
  nama: "Gusti Surya Aditama",
  peran: "Mahasiswa Informatika UII yang belajar UI/UX design dan frontend development",
  keahlian: ["UI/UX Design", "Figma", "HTML dan CSS", "React/Next.js", "SwiftUI", "Python"],
};

// Bagian D: array object
const daftarProyek = [
  { judul: "EcoSort", tahun: 2026, selesai: true },
  { judul: "NARASI", tahun: 2026, selesai: true },
  { judul: "SQLQuest", tahun: 2026, selesai: false },
];

// angka diambil dari data bukan diketik ulang supaya tidak selisih
const jumlahProyek = daftarProyek.length;

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
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);
console.log("Jumlah proyek:", jumlahProyek, typeof jumlahProyek); // typeof: harus "number"
console.log("Kota:", kotaProfil);

// Salinan objek (dangkal): mengubah salinan tidak boleh mengubah profil asli.
const salinanProfil = { ...profil };
salinanProfil.nama = "Nama Coba";
console.log(profil.nama, "|", salinanProfil.nama);

// Uji cepat C: tiga argumen berbeda, hasilnya harus masuk akal semua.
console.log(buatPerkenalan({ nama: "Ayu", peran: "mahasiswa" }));
console.log(formatKeahlian(["HTML"]));
console.log(formatKeahlian([]) === "");

// Array methods
console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find((proyek) => proyek.judul === "NARASI");
console.log(katalog);
console.log(daftarProyek.find((proyek) => proyek.judul === "Tidak Ada")); // undefined

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(judulProyek);


const urutJudulTerbalik = [...daftarProyek].sort((a, b) => b.judul.localeCompare(a.judul));
console.table(urutJudulTerbalik);
console.table(daftarProyek); 

// Memakai let: pilihan berubah, hasil saringan mengikuti.
pilihanFilter = "selesai";
console.log(`Filter "${pilihanFilter}":`, saringProyek(daftarProyek, pilihanFilter).length, "proyek");

// console.assert diam bila benar, dan menulis pesan merah hanya bila salah.
console.assert(judulProyek.length === daftarProyek.length, "map mengubah panjang array");
console.assert(urutJudulTerbalik !== daftarProyek, "sort tidak memakai salinan");
console.assert(urutJudulTerbalik[0].judul === "SQLQuest", "urutan judul tidak sesuai");
console.assert(daftarProyek[0].judul === "EcoSort", "urutan asli daftarProyek berubah");
console.assert(profil.nama === "Gusti Surya Aditama", "mengubah salinan ikut mengubah profil");
console.assert(buatPerkenalan(profil) === buatPerkenalan(profil), "fungsi tidak murni");