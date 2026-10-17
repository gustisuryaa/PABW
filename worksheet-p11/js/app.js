// app.js: perakit. Hanya impor dan pemanggilan, tanpa logika.
import { state, muatTugas } from "./state.js";
import { renderIdentitas, render, renderFilter, renderFormulir } from "./dom.js";
import { pasangPendengar } from "./events.js";

renderIdentitas(state.profil);
render(state);
renderFilter(state);
renderFormulir(state);
pasangPendengar();
muatTugas();
