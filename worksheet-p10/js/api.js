// api.js: satu-satunya berkas yang memanggil fetch (lapisan data).
// Tidak menyentuh halaman. Pemanggil (dom.js) yang menampilkan hasil dan galatnya.

// Alamat API ditulis sekali di sini. API publik, tanpa kunci akses.
const ALAMAT = "https://dummyjson.com/todos?limit=6";

// Mengambil daftar tugas. Mengembalikan larik; melempar Error bila gagal.
export async function ambilTugas() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error("server membalas status " + respons.status);

    const data = await respons.json();

    // balasan sah tetapi bentuknya tidak sesuai harapan (bukan { todos: [...] })
    if (!Array.isArray(data.todos)) throw new Error("bentuk data tidak dikenali");

    return data.todos;

    
  } catch (galat) {
    console.error("gagal memuat", galat.message);
    // pesan teknis peramban diganti kalimat yang bisa dibaca pengguna
    if (galat instanceof TypeError) throw new Error("jaringan tidak terjangkau");
    if (galat instanceof SyntaxError) throw new Error("balasan bukan JSON");
    throw galat;
  }
}