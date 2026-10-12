// api.js: satu-satunya berkas yang memanggil fetch (lapisan data).
// Tidak menyentuh halaman. Pemanggil (dom.js) yang menampilkan hasil dan galatnya.

// Alamat API ditulis sekali di sini. API publik, tanpa kunci akses.
const ALAMAT = "https://dummyjson.com/todos?limit=6";

// Mengambil daftar tugas. Mengembalikan larik; melempar Error bila gagal.
export async function ambilTugas() {
  try {
    const respons = await fetch(ALAMAT);
    // fetch tidak melempar galat pada 404/500, jadi status diperiksa sendiri
    if (!respons.ok) throw new Error("server membalas status " + respons.status);

    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error("gagal memuat", galat.message);
    // pesan teknis peramban diganti kalimat yang bisa dibaca pengguna
    if (galat instanceof TypeError) throw new Error("jaringan tidak terjangkau");
    if (galat instanceof SyntaxError) throw new Error("balasan bukan JSON");
    throw galat;
  }
}