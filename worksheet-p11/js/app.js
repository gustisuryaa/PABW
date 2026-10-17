// app.js (tahap B): perakit. Hanya impor dan pemanggilan.
import { state } from "./state.js";
import { renderIdentitas, renderProyek, tandaiTombolAktif, tombolSemua, tampilkanTugas } from "./dom.js";
import { pasangPendengar } from "./events.js";

renderIdentitas(state.profil);
renderProyek(state.daftarProyek);
tandaiTombolAktif(tombolSemua());
pasangPendengar();
tampilkanTugas();
