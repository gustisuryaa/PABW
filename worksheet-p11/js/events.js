// events.js: pemasangan seluruh pendengar peristiwa. Tidak mengubah state langsung.
import { pilihKategori, ubahKolom, periksaKolom, kirimFormulir } from "./state.js";
import {
  barisFilter, formulir,
  bacaIsiFormulir, kolomDariEvent, fokuskanKolom, kosongkanFormulir,
} from "./dom.js";

export function pasangPendengar() {
  // satu pendengar di induk untuk semua tombol filter
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button"); // klik bisa jatuh di anak tombol
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
  });

  formulir.addEventListener("input", (event) => {
    const kolom = kolomDariEvent(event);
    if (kolom) ubahKolom(kolom.name, bacaIsiFormulir());
  });

  formulir.addEventListener("focusout", (event) => {
    const kolom = kolomDariEvent(event);
    if (kolom) periksaKolom(kolom.name, bacaIsiFormulir());
  });

  formulir.addEventListener("submit", (event) => {
    event.preventDefault();
    const kolomBermasalah = kirimFormulir(bacaIsiFormulir());
    if (kolomBermasalah) {
      fokuskanKolom(kolomBermasalah);
    } else {
      kosongkanFormulir();
    }
  });
}
