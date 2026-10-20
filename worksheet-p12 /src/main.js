import { createApp } from 'vue'
import App from './App.vue'

// Satu-satunya tempat CSS diimpor. Urutan = urutan cascade P04-P06, jangan ditukar:
// tokens, base, layout, komponen, tema, lalu responsif.
import './tokens.css'
import './base.css'
import './layout.css'
import './komponen.css'
import './tema.css'
import './responsif.css'

createApp(App).mount('#app')
