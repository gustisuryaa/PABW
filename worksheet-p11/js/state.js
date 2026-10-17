// state.js: satu objek state dan fungsi pengubahnya.
import { profil, daftarProyek, aturanKolom } from "./data.js";
import { ambilTugas } from "./api.js";
import { render, renderFilter, renderFormulir, renderTugas } from "./dom.js";

export const state = {
  profil,
  daftarProyek,
  kategoriAktif: "semua",
  // data dari jaringan (P10): status = "memuat" | "sukses" | "kosong" | "gagal"
  tugas: { status: "memuat", daftar: [], pesanGalat: "" },
  kontak: {
    isi: { nama: "", email: "", nim: "", pesan: "" },
    galat: { nama: false, email: false, nim: false, pesan: false },
    tombolNonaktif: false,
    pesanStatus: "",
  },
};

// ---------- fungsi pengubah: satu-satunya pintu masuk perubahan state ----------

function gambarUlangDaftar() {
  render(state);
  renderFilter(state);
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
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
