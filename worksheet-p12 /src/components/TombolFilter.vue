<script setup>
import { state, pilihKategori } from '../state.js'
import { daftarKategori } from '../data.js'

// "semua" -> "Semua". Daftar kategori cukup ditulis sekali, di data.js.
const labelDari = (kategori) => kategori.charAt(0).toUpperCase() + kategori.slice(1)
</script>

<template>
  <div id="filter" role="group" aria-label="Saring proyek menurut kategori">
    <button
      v-for="kategori in daftarKategori"
      :key="kategori"
      type="button"
      :class="{ aktif: state.kategoriAktif === kategori }"
      :aria-pressed="String(state.kategoriAktif === kategori)"
      @click="pilihKategori(kategori)"
    >{{ labelDari(kategori) }}</button>
  </div>
</template>
