// api.js: satu-satunya berkas yang memanggil fetch (lapisan data).

const ALAMAT = "https://dummyjson.com/todos?limit=6";

export async function muat() {
  const respons = await fetch(ALAMAT);
  console.log("status", respons.status, "ok", respons.ok);
  if (!respons.ok) throw new Error("status " + respons.status);
  return respons.json();
}

window.muat = muat; // sementara, dihapus di Lembar B