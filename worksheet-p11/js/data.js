// data.js: data mentah dan fungsi murni pemformat. Tidak menyentuh halaman.

export const profil = {
  nama: "Gusti Surya Aditama",
  peran: "Mahasiswa Informatika UII yang belajar UI/UX design dan frontend development",
  keahlian: ["UI/UX Design", "Figma", "HTML dan CSS", "React/Next.js", "SwiftUI", "Python"],
};

// kategori harus sama huruf per huruf dengan data-kategori pada tombol di profil.html
export const daftarProyek = [
  { judul: "EcoSort", tahun: 2026, selesai: true, kategori: "mobile" },
  { judul: "NARASI", tahun: 2026, selesai: true, kategori: "web" },
  { judul: "SQLQuest", tahun: 2026, selesai: false, kategori: "mobile" },
];

export const buatPerkenalan = ({ nama, peran }) => `${nama}, ${peran}.`;

export const formatKeahlian = (daftar) => daftar.join(" · ");

// "semua" mengembalikan seluruh daftar
export const saringKategori = (daftar, kategori) =>
  daftar.filter((proyek) => kategori === "semua" || proyek.kategori === kategori);

// aturan validasi form disimpan sebagai data
export const aturanKolom = {
  nama:  { sah: (isi) => isi.length >= 2,
           pesan: "Nama belum diisi. Tulis nama lengkap Anda, minimal 2 huruf." },
  email: { sah: (isi) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(isi),
           pesan: "Alamat email belum lengkap. Tulis seperti nama@contoh.com." },
  nim:   { sah: (isi) => /^\d{8}$/.test(isi),
           pesan: "NIM harus 8 digit angka, contoh 25523053." },
  pesan: { sah: (isi) => isi.length >= 10,
           pesan: "Pesan terlalu singkat. Tulis minimal 10 karakter." },
};
