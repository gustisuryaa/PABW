<script setup>
import { computed } from 'vue'
import { state } from '../state.js'
import { saringKategori } from '../data.js'

// daftar terhitung: dihitung ulang otomatis saat kategoriAktif berubah
const proyekTampil = computed(() => saringKategori(state.daftarProyek, state.kategoriAktif))

const labelStatus = (proyek) => (proyek.selesai ? 'selesai' : 'tahap pengembangan')
</script>

<template>
  <ul id="daftar">
    <li v-for="proyek in proyekTampil" :key="proyek.id" class="kartu-proyek">
      <strong>{{ proyek.judul }}</strong>
      <span>{{ proyek.tahun }} · {{ proyek.kategori }} · {{ labelStatus(proyek) }}</span>
    </li>
  </ul>
  <p v-if="proyekTampil.length === 0" id="pesan-kosong">Tidak ada proyek pada kategori ini.</p>
</template>
