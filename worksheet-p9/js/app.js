// Bagian B: data sebagai variabel
export const profil = {
  nama: "Gusti Surya Aditama",
  peran: "Mahasiswa Informatika UII yang belajar UI/UX design dan frontend development",
  keahlian: ["UI/UX Design", "Figma", "HTML dan CSS", "React/Next.js", "SwiftUI", "Python"],
};

// Bagian D: array object
// kategori harus sama huruf per huruf dengan data-kategori pada tombol di profil.html
export const daftarProyek = [
  { judul: "EcoSort", tahun: 2026, selesai: true, kategori: "mobile" },
  { judul: "NARASI", tahun: 2026, selesai: true, kategori: "web" },
  { judul: "SQLQuest", tahun: 2026, selesai: false, kategori: "mobile" },
];

// angka diambil dari data bukan diketik ulang supaya tidak selisih
export const jumlahProyek = daftarProyek.length;

// Bagian C: fungsi murni
// menyusun kalimat perkenalan dari satu objek
export const buatPerkenalan = ({ nama, peran }) => `${nama}, ${peran}.`;

// merapikan daftar keahlian menjadi satu baris teks
export const formatKeahlian = (daftar) => daftar.join(" · ");

// mengubah satu proyek menjadi satu baris teks
export const formatProyek = ({ judul, tahun, selesai }) =>
  `${judul} (${tahun}) - ${selesai ? "selesai" : "tahap pengembangan"}`;

// menyaring proyek menurut pilihan ("semua" atau "selesai")
export const saringProyek = (daftar, pilihan = "semua") => {
  if (pilihan === "selesai") {
    return daftar.filter((proyek) => proyek.selesai);
  }
  return daftar;
};