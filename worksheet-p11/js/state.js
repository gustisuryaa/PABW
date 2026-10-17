// state.js (tahap B): satu objek state dan fungsi pengubahnya.
import { profil, daftarProyek } from "./data.js";

export const state = {
  profil,
  daftarProyek,
  kategoriAktif: "semua",
};

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
}
