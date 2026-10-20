// simpanan.js: satu-satunya berkas yang menyentuh localStorage.
// Tidak mengimpor Vue maupun state.js, jadi bisa dimuat sendirian tanpa galat impor.

// KUNCI dan VERSI dipakai apa adanya dari P11. Simpanan terikat pada alamat + port.
const KUNCI = 'pabw-p11'
const VERSI = 2

// removeItem pun bisa melempar galat bila penyimpanan diblokir peramban
export function aturUlang() {
  try {
    localStorage.removeItem(KUNCI)
  } catch {
    // diblokir: tidak ada yang perlu dihapus
  }
}

export function simpan(state) {
  const isi = { versi: VERSI, kategoriAktif: state.kategoriAktif }
  try {
    localStorage.setItem(KUNCI, JSON.stringify(isi))
  } catch {
    // penyimpanan penuh atau diblokir: halaman tetap jalan tanpa mengingat
  }
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI))
    if (isi?.versi !== VERSI) {
      aturUlang() // bentuk lama atau tidak ada: buang
      return null
    }
    return isi
  } catch {
    aturUlang() // isi rusak (bukan JSON): buang
    return null
  }
}
