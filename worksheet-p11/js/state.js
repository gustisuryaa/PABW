// state.js: satu objek state, fungsi pengubahnya, dan penyimpanan pilihan.
import { profil, daftarProyek, daftarKategori, kategoriBawaan, aturanKolom } from "./data.js";
import { ambilTugas } from "./api.js";
import { render, renderFilter, renderFormulir, renderTugas } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  profil,
  daftarProyek,
  kategoriAktif: kategoriBawaan,
  // data dari jaringan (P10): status = "memuat" | "sukses" | "kosong" | "gagal"
  tugas: { status: "memuat", daftar: [], pesanGalat: "" },
  kontak: {
    isi: { nama: "", email: "", nim: "", pesan: "" },
    galat: { nama: false, email: false, nim: false, pesan: false },
    tombolNonaktif: false,
    pesanStatus: "",
  },
};

// ---------- penyimpanan (hanya pilihan tampilan; lihat catatan E.4) ----------

export function simpan(state) {
  const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif };
  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi));
  } catch {
    // penyimpanan penuh atau diblokir: halaman tetap jalan tanpa mengingat
  }
}

export function muat() {
  try {
    return JSON.parse(localStorage.getItem(KUNCI));
  } catch {
    localStorage.removeItem(KUNCI); // simpanan rusak: pakai nilai bawaan
    return null;
  }
}

// dipanggil sekali saat halaman dimuat, sebelum render pertama
export function pulihkanDariSimpanan() {
  const kategori = muat()?.kategoriAktif;
  state.kategoriAktif = daftarKategori.includes(kategori) ? kategori : kategoriBawaan;
}

// ---------- fungsi pengubah: satu-satunya pintu masuk perubahan state ----------

function gambarUlangDaftar() {
  render(state);
  renderFilter(state);
}

export function pilihKategori(nilai) {
  if (!daftarKategori.includes(nilai)) return;
  state.kategoriAktif = nilai;
  simpan(state);
  gambarUlangDaftar();
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = kategoriBawaan;
  gambarUlangDaftar();
}

// ---------- form kontak ----------

const kolomSah = (nama) => aturanKolom[nama].sah(state.kontak.isi[nama]);
const semuaKolomSah = () => Object.keys(aturanKolom).every(kolomSah);

// isiSemua = nilai keempat kolom (sudah di-trim) yang dibaca dari form oleh events.js
export function ubahKolom(nama, isiSemua) {
  const { kontak } = state;
  kontak.isi = isiSemua;
  if (kontak.galat[nama]) kontak.galat[nama] = !kolomSah(nama); // hanya diperbarui bila galat sudah tampil
  kontak.tombolNonaktif = !semuaKolomSah();
  kontak.pesanStatus = "";
  renderFormulir(state);
}

export function periksaKolom(nama, isiSemua) {
  state.kontak.isi = isiSemua;
  state.kontak.galat[nama] = !kolomSah(nama);
  renderFormulir(state);
}

// mengembalikan nama kolom pertama yang bermasalah, atau null bila form sah
export function kirimFormulir(isiSemua) {
  const { kontak } = state;
  kontak.isi = isiSemua;
  Object.keys(aturanKolom).forEach((nama) => { kontak.galat[nama] = !kolomSah(nama); });

  const kolomBermasalah = Object.keys(aturanKolom).find((nama) => kontak.galat[nama]) ?? null;
  if (!kolomBermasalah) {
    kontak.pesanStatus = `Terima kasih, ${isiSemua.nama}. Pesan Anda sudah dicatat (simulasi: belum ada server yang menerimanya).`;
    kontak.isi = { nama: "", email: "", nim: "", pesan: "" };
    kontak.tombolNonaktif = false;
  }
  renderFormulir(state);
  return kolomBermasalah;
}

// ---------- data dari jaringan (api.js hanya mengambil; state.js yang mencatat hasilnya) ----------

export async function muatTugas() {
  state.tugas = { status: "memuat", daftar: [], pesanGalat: "" };
  renderTugas(state);
  try {
    const daftar = await ambilTugas();
    state.tugas = { status: daftar.length === 0 ? "kosong" : "sukses", daftar, pesanGalat: "" };
  } catch (galat) {
    state.tugas = { status: "gagal", daftar: [], pesanGalat: galat.message };
  }
  renderTugas(state);
}
