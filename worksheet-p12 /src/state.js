// state.js: satu objek state bersama dan fungsi pengubahnya.
// Tanpa gambar-ulang manual: Vue menggambar ulang bagian yang berubah.
import { reactive } from 'vue'
import { daftarProyek, daftarKategori, kategoriBawaan } from './data.js'
import { ambilTugas } from './api.js'

export const state = reactive({
  daftarProyek,
  kategoriAktif: kategoriBawaan,
  // data dari jaringan (P10): status = "memuat" | "sukses" | "kosong" | "gagal"
  tugas: { status: 'memuat', daftar: [], pesanGalat: '' },
})

export function pilihKategori(nilai) {
  if (!daftarKategori.includes(nilai)) return
  state.kategoriAktif = nilai
}

// api.js hanya mengambil; state.js yang mencatat hasilnya
export async function muatTugas() {
  state.tugas = { status: 'memuat', daftar: [], pesanGalat: '' }
  try {
    const daftar = await ambilTugas()
    state.tugas = { status: daftar.length === 0 ? 'kosong' : 'sukses', daftar, pesanGalat: '' }
  } catch (galat) {
    state.tugas = { status: 'gagal', daftar: [], pesanGalat: galat.message }
  }
}
