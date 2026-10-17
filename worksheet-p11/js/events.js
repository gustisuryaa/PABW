// events.js (tahap B): pemasangan seluruh pendengar peristiwa.
import { state, pilihKategori } from "./state.js";
import { saringKategori } from "./data.js";
import {
  barisFilter, formulir, renderProyek, tandaiTombolAktif,
  tampilkanStatusKolom, perbaruiTombolKirim, tanganiKirim, kolomDariEvent,
} from "./dom.js";

export function pasangPendengar() {
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;
    pilihKategori(tombol.dataset.kategori);
    renderProyek(saringKategori(state.daftarProyek, state.kategoriAktif));
    tandaiTombolAktif(tombol);
  });

  formulir.noValidate = true;

  formulir.addEventListener("input", (event) => {
    const kolom = kolomDariEvent(event);
    if (!kolom) return;
    if (kolom.hasAttribute("aria-invalid")) tampilkanStatusKolom(kolom);
    perbaruiTombolKirim();
  });

  formulir.addEventListener("focusout", (event) => {
    const kolom = kolomDariEvent(event);
    if (kolom) tampilkanStatusKolom(kolom);
  });

  formulir.addEventListener("submit", (event) => {
    event.preventDefault();
    tanganiKirim();
  });
}
